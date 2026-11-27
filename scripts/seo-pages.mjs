import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { runInNewContext } from 'node:vm';
import { parse, parseFragment, serialize } from 'parse5';

const origin = 'https://imagec.xin';
const pages = [
  { file: 'index.html', zh: '/', en: '/en', englishFile: 'en.html' },
  { file: 'compress.html', zh: '/compress', en: '/en/compress', englishFile: 'en/compress.html' },
];

function* elements(node) {
  if (node.tagName) yield node;
  for (const child of node.childNodes || []) yield* elements(child);
}

const attr = (node, name) => node?.attrs?.find((item) => item.name === name)?.value;

function setAttr(node, name, value) {
  const existing = node.attrs.find((item) => item.name === name);
  if (existing) existing.value = value;
  else node.attrs.push({ name, value });
}

function appendHtml(node, markup) {
  for (const child of parseFragment(node, markup).childNodes) {
    child.parentNode = node;
    node.childNodes.push(child);
  }
}

function setText(node, value) {
  node.childNodes = [{ nodeName: '#text', value, parentNode: node }];
}

function render(source, page, language, cards, chrome) {
  const doc = parse(source);
  const nodes = [...elements(doc)];
  const head = nodes.find((node) => node.tagName === 'head');
  const { messages, SEO } = runInNewContext(
    source.match(/^const messages=\{[\s\S]*?^\};/m)[0] + '\n' +
    source.match(/^const SEO=\{[\s\S]*?^\};/m)[0] + '\n({messages, SEO})',
    {}, { timeout: 1000 },
  );
  const translations = { ...messages[language], ...chrome[language] };
  const seo = SEO[language];
  const url = origin + page[language];
  const html = nodes.find((node) => node.tagName === 'html');
  setAttr(html, 'lang', language === 'zh' ? 'zh-CN' : 'en');
  setAttr(html, 'data-page-language', language);

  const grid = nodes.find((node) => attr(node, 'id') === 'toolsGrid');
  if (grid) {
    grid.childNodes = [];
    appendHtml(grid, cards(language));
  }

  for (const node of elements(doc)) {
    const key = attr(node, 'data-i18n');
    const placeholder = attr(node, 'data-i18n-ph');
    if (language === 'en' && key && typeof translations[key] === 'string') {
      if (attr(node, 'placeholder') !== undefined) setAttr(node, 'placeholder', translations[key]);
      else {
        node.childNodes = [];
        appendHtml(node, translations[key]);
      }
    }
    if (language === 'en' && placeholder && translations[placeholder]) setAttr(node, 'placeholder', translations[placeholder]);
    const aria = attr(node, 'data-chrome-aria');
    if (language === 'en' && aria && translations[aria]) setAttr(node, 'aria-label', translations[aria]);
  }

  setText(nodes.find((node) => node.tagName === 'title'), seo.title);
  const metadata = {
    description: seo.desc,
    'og:title': seo.ogTitle,
    'og:description': seo.ogDesc,
    'og:locale': seo.locale,
    'og:site_name': seo.siteName,
    'og:url': url,
    'twitter:title': seo.ogTitle,
    'twitter:description': seo.ogDesc,
  };
  for (const node of nodes.filter((node) => node.tagName === 'meta')) {
    const name = attr(node, 'name') || attr(node, 'property');
    if (Object.hasOwn(metadata, name)) setAttr(node, 'content', metadata[name]);
    if (attr(node, 'property') === 'og:locale:alternate') {
      node.parentNode.childNodes = node.parentNode.childNodes.filter((child) => child !== node);
    }
  }
  setAttr(nodes.find((node) => attr(node, 'rel') === 'canonical'), 'href', url);
  appendHtml(head, `\n  <link rel="alternate" hreflang="zh-CN" href="${origin + page.zh}">\n` +
    `  <link rel="alternate" hreflang="en" href="${origin + page.en}">\n` +
    `  <link rel="alternate" hreflang="x-default" href="${origin + page.zh}">\n`);

  for (const node of nodes.filter((node) => attr(node, 'type') === 'application/ld+json')) {
    const model = JSON.parse(node.childNodes[0].value);
    if (model['@type'] === 'WebApplication') {
      model.name = nodes.find((item) => item.tagName === 'h1').childNodes[0].value;
      model.description = seo.jsonLdDesc;
      model.url = url;
      model.inLanguage = language === 'zh' ? 'zh-CN' : 'en';
      delete model.featureList;
    }
    if (model['@type'] === 'BreadcrumbList' && language === 'en') {
      model.itemListElement[0].name = 'Home';
      model.itemListElement[0].item = origin + '/en';
      if (model.itemListElement[1]) {
        model.itemListElement[1].name = 'Image compressor';
        model.itemListElement[1].item = url;
      }
    }
    setText(node, JSON.stringify(model));
  }

  for (const node of nodes.filter((node) => attr(node, 'data-pilot-language') !== undefined)) {
    const isEnglish = language === 'en';
    setAttr(node, 'href', page[isEnglish ? 'zh' : 'en']);
    setAttr(node, 'lang', isEnglish ? 'zh-CN' : 'en');
    setAttr(node, 'data-pilot-language', isEnglish ? 'zh' : 'en');
    setText(node, isEnglish ? '简体中文' : 'English');
  }
  if (language === 'en') {
    for (const node of nodes.filter((node) => ['brand', 'logo'].includes(attr(node, 'class')) && attr(node, 'href') === '/')) {
      setAttr(node, 'href', '/en');
    }
    const icp = nodes.find((node) => attr(node, 'id') === 'icp');
    if (icp) setAttr(icp, 'hidden', '');
    const search = nodes.find((node) => attr(node, 'href') === '/?focus=search');
    if (search) setAttr(search, 'href', '/en?focus=search');
  }
  return serialize(doc);
}

export function buildSeoPages(root) {
  const window = {};
  runInNewContext(readFileSync(join(root, 'tool-cards.js'), 'utf8'), { window }, { timeout: 1000 });
  const { tools, cardHtml } = window.imagecToolCards;
  const cards = (language) => tools.map((tool) =>
    cardHtml(tool, language === 'en' && tool.file === 'compress' ? '/en/compress' : undefined),
  ).join('');
  const chromeSource = readFileSync(join(root, 'chrome.js'), 'utf8');
  const declarations = ['CHROME', 'NAME_KEYS', 'DESC_KEYS', 'FEEDBACK_TEXT'].map((name) =>
    chromeSource.match(new RegExp(`^  var ${name} = \\{[\\s\\S]*?^  \\};`, 'm'))[0]);
  const chrome = runInNewContext(declarations.join('\n') + '\n({ CHROME, NAME_KEYS, DESC_KEYS, FEEDBACK_TEXT })', {}, { timeout: 1000 });
  const copy = {};
  for (const language of ['zh', 'en']) {
    const pack = chrome.CHROME[language];
    const names = Object.entries({ ...chrome.NAME_KEYS, ...chrome.DESC_KEYS });
    copy[language] = { ...pack, ...chrome.FEEDBACK_TEXT[language], ...Object.fromEntries(names.map(([key, value]) => [key, pack[value]])) };
  }
  const results = new Map();
  for (const page of pages) {
    const source = readFileSync(join(root, page.file), 'utf8');
    results.set(page.file, render(source, page, 'zh', cards, copy));
    results.set(page.englishFile, render(source, page, 'en', cards, copy));
  }
  return results;
}
