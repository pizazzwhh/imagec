import { execFileSync } from "node:child_process";

function git(cwd, args) {
  return execFileSync("git", args, {
    cwd,
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"]
  }).trim();
}

function chineseTime(iso) {
  const match = String(iso).match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})/);
  if (!match) return iso;
  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  return `${year}年${month}月${day}日 ${match[4]}:${match[5]}:${match[6]}`;
}

export function readSiteVersion(cwd) {
  const dirty = git(cwd, ["status", "--porcelain"]) !== "";
  return {
    提交: git(cwd, ["rev-parse", "HEAD"]),
    短号: git(cwd, ["rev-parse", "--short=7", "HEAD"]),
    时间: chineseTime(git(cwd, ["log", "-1", "--format=%cI"])),
    说明: git(cwd, ["log", "-1", "--format=%s"]),
    分支: git(cwd, ["rev-parse", "--abbrev-ref", "HEAD"]),
    有未提交改动: dirty ? "是" : "否"
  };
}

export function siteVersionJson(cwd) {
  return JSON.stringify(readSiteVersion(cwd), null, 2) + "\n";
}
