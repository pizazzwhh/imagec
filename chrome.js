/* Shared chrome copy, one-language pass, advanced-params fold, and inline errors. */
(function () {
  var CHROME = {
    zh: {heroTitle:"免费在线图片工具",heroSubtitle:"24 种图片工具，免费使用。",privacyBadge:"本地处理 · 不上传服务器",searchTools:"搜索工具",searchPlaceholder:"搜索工具…",searchEmpty:"没有匹配的工具",advanced:"调整参数",sponsorText:"赞助与合作请通过爱发电联系",sponsorCta:"发电支持",sisterSite:"软件工具",homeSponsorLead:"觉得好用？",homeSponsorCta:"请我来包辣条",homeSister:"toolc·精选软件工具",blogLabel:"使用指南",nameWhitebg:"去白底",nameCompress:"图片压缩",nameConvert:"格式转换",nameCrop:"裁剪缩放",nameId:"证件照换底",nameWm:"加水印",nameBg:"换背景色",nameSplice:"图片拼接",namePdf:"图片转 PDF",nameFilter:"滤镜调色",descWhitebg:"把白色背景变成透明 PNG",descCompress:"缩小 PNG、JPG、WebP，尽量保住画质",descConvert:"PNG、JPG、WebP、BMP 互转",descCrop:"裁切一块，或改成指定尺寸",descId:"蓝底、白底、红底证件照",descWm:"加文字或图片水印",descBg:"给透明图铺纯色或渐变",descSplice:"把多张图拼成一张",descPdf:"把多张图合成一个 PDF",descFilter:"亮度、对比度、饱和度和预设滤镜",nameBatch:"批量处理",descBatch:"一次压缩或转换多张图，打包 ZIP",nameQr:"免费生成二维码",descQr:"输入链接或文字，本地生成二维码 PNG",linkQrUrl:"链接转二维码",linkQrText:"文字生成二维码",nameRound:"圆角阴影",descRound:"给图片加圆角或阴影，导出 PNG",nameHeic:"转换 HEIC",descHeic:"苹果 HEIC 转 JPG 或 PNG",nameCutout:"AI 抠图",descCutout:"本地 AI 去掉背景，导出透明 PNG",nameRotate:"旋转翻转",descRotate:"旋转或镜像图片",nameExif:"清除元数据",descExif:"去掉 EXIF、GPS 等隐私信息",linkRound:"圆角阴影",linkRoundCorner:"图片加圆角",linkRoundShadow:"图片加阴影",relatedTools:"更多图片工具",moreTools:"更多图片工具",relatedTitle:"更多图片工具",swatchWhite:"白色",swatchBlue:"蓝色",swatchRed:"红色",swatchLight:"浅蓝",swatchBlack:"黑色",swatchGreen:"绿色",swatchYellow:"黄色",errType:"这个文件不是支持的图片格式。请换一张 PNG、JPG 或 WebP。",errLoad:"图片加载失败，可能是格式不支持或文件已损坏。",errWm:"水印图片加载失败，请换一张 PNG 或 JPG。",errCrop:"请先在图片上拖拽，选出要保留的区域。",blog1Tag:"去白底",blog1Title:"怎样去掉图片的白底",blog1Desc:"商品图、签名和 Logo 如何只去掉白色背景，并导出透明 PNG。",blog2Tag:"商品图",blog2Title:"商品图白底怎么处理",blog2Desc:"淘宝、拼多多、京东主图去白底，导出透明 PNG。",blog3Tag:"证件照",blog3Title:"在线做证件照换底",blog3Desc:"蓝底、白底、红底证件照的换底步骤。",heicTip:"苹果 HEIC？先用转换 HEIC",spliceMin:"请至少添加 2 张图片",namePdf2img:"PDF 转图片",descPdf2img:"把 PDF 每一页导出成图片",namePalette:"色板提取",descPalette:"从图片提取主色并复制色值",nameFavicon:"Favicon 包",descFavicon:"一键导出多尺寸网站图标",nameBarcode:"条形码生成",descBarcode:"生成 EAN / CODE128 等条形码",nameGifsplit:"GIF 拆帧",descGifsplit:"把 GIF 拆成逐帧 PNG",nameOcr:"图片转文字",descOcr:"本地 OCR 识别图片里的文字",nameSvgopt:"SVG 优化",descSvgopt:"精简 SVG，减小体积"},
    en: {heroTitle:"Free online image tools",heroSubtitle:"24 free image tools.",privacyBadge:"Local · no upload",searchTools:"Search tools",searchPlaceholder:"Search tools…",searchEmpty:"No matching tools",advanced:"Adjust settings",sponsorText:"For sponsorship and cooperation, contact us on Afdian",sponsorCta:"support the project",sisterSite:"More tools",homeSponsorLead:"Like it?",homeSponsorCta:"Buy me a snack",homeSister:"Selected tools",blogLabel:"Guides",nameWhitebg:"Remove white background",nameCompress:"Compress",nameConvert:"Convert format",nameCrop:"Crop and resize",nameId:"ID photo background",nameWm:"Watermark",nameBg:"Change background color",nameSplice:"Stitch images",namePdf:"Image to PDF",nameFilter:"Filters",descWhitebg:"Turn a white background into a transparent PNG",descCompress:"Shrink PNG, JPG, and WebP while keeping detail",descConvert:"Convert between PNG, JPG, WebP, and BMP",descCrop:"Crop a region or resize to exact dimensions",descId:"Blue, white, or red ID-photo backgrounds",descWm:"Add a text or image watermark",descBg:"Fill a transparent image with a solid color or gradient",descSplice:"Join several images into one",descPdf:"Combine images into one PDF",descFilter:"Brightness, contrast, saturation, and presets",nameBatch:"Batch",descBatch:"Compress or convert many images, then download a ZIP",nameQr:"Free QR code",descQr:"Turn a link or text into a QR code PNG, on this device",linkQrUrl:"Link to QR code",linkQrText:"Text to QR code",nameRound:"Rounded corners",descRound:"Round the corners or add a shadow, then export a PNG",nameHeic:"Convert HEIC",descHeic:"Turn Apple HEIC into JPG or PNG",nameCutout:"Remove background",descCutout:"Remove the background locally and export a transparent PNG",nameRotate:"Rotate and flip",descRotate:"Rotate or mirror an image",nameExif:"Strip metadata",descExif:"Remove EXIF, GPS, and other privacy data",linkRound:"Rounded corners",linkRoundCorner:"Round image corners",linkRoundShadow:"Add an image shadow",relatedTools:"More image tools",moreTools:"More image tools",relatedTitle:"More image tools",swatchWhite:"White",swatchBlue:"Blue",swatchRed:"Red",swatchLight:"Light blue",swatchBlack:"Black",swatchGreen:"Green",swatchYellow:"Yellow",errType:"That file is not a supported image. Use PNG, JPG, or WebP.",errLoad:"Could not load the image. The format may be unsupported or the file is damaged.",errWm:"Could not load the watermark image. Try a PNG or JPG.",errCrop:"Drag on the image to choose the area you want to keep.",blog1Tag:"White background",blog1Title:"How to remove a white background",blog1Desc:"Turn product photos, signatures, and logos into transparent PNGs.",blog2Tag:"Compress",blog2Title:"Compress a PNG under 100KB",blog2Desc:"How the free options differ, and how to compress locally in the browser.",blog3Tag:"ID photo",blog3Title:"Change an ID photo background online",blog3Desc:"Blue, white, and red backgrounds, and how this differs from removing white.",heicTip:"Apple HEIC? Use Convert HEIC first",spliceMin:"Add at least 2 images",namePdf2img:"PDF to images",descPdf2img:"Export each PDF page as an image",namePalette:"Color palette",descPalette:"Extract main colors and copy hex",nameFavicon:"Favicon pack",descFavicon:"Export multi-size site icons",nameBarcode:"Barcode",descBarcode:"Generate EAN / CODE128 barcodes",nameGifsplit:"Split GIF",descGifsplit:"Split a GIF into PNG frames",nameOcr:"Image to text",descOcr:"Local OCR for text in images",nameSvgopt:"Optimize SVG",descSvgopt:"Minify SVG and shrink the file"},
    ja: {heroTitle:"無料のオンライン画像ツール",heroSubtitle:"24種類の画像ツール。無料。",privacyBadge:"端末内処理 · 送信しません",searchTools:"ツールを検索",searchPlaceholder:"ツールを検索…",searchEmpty:"該当するツールがありません",advanced:"設定を調整",sponsorText:"スポンサーと協力のご連絡は愛発電（Afdian）へ",sponsorCta:"プロジェクトを支援",sisterSite:"その他のツール",homeSponsorLead:"気に入った？",homeSponsorCta:"おやつをごちそうして",homeSister:"おすすめツール",blogLabel:"ガイド",nameWhitebg:"白背景を透明に",nameCompress:"画像圧縮",nameConvert:"形式変換",nameCrop:"切り抜き・サイズ変更",nameId:"証明写真の背景",nameWm:"透かし",nameBg:"背景色の変更",nameSplice:"画像結合",namePdf:"画像をPDF",nameFilter:"フィルター",descWhitebg:"白い背景を透明PNGにします",descCompress:"PNG / JPG / WebPを画質を保って縮小",descConvert:"PNG / JPG / WebP / BMPを相互変換",descCrop:"範囲を切り抜くか、指定サイズに変更",descId:"青・白・赤の証明写真背景",descWm:"文字または画像の透かしを追加",descBg:"透明画像に単色またはグラデーションを敷く",descSplice:"複数の画像を1枚に結合",descPdf:"複数の画像を1つのPDFに",descFilter:"明るさ、コントラスト、彩度とプリセット",nameBatch:"一括処理",descBatch:"複数画像を圧縮または変換し、ZIPでまとめて保存",nameQr:"QRコードを無料作成",descQr:"リンクや文字から、端末内でQRコードPNGを作る",linkQrUrl:"リンクをQRコードに",linkQrText:"文字からQRコード",nameRound:"角丸と影",descRound:"画像に角丸や影を付けて PNG で保存",nameHeic:"HEIC変換",descHeic:"Apple の HEIC を JPG / PNG に",nameCutout:"AI 背景削除",descCutout:"端末内の AI で背景を消し、透明 PNG にする",nameRotate:"回転・反転",descRotate:"画像を回転または反転",nameExif:"メタデータ削除",descExif:"EXIF・GPS などの情報を削除",linkRound:"角丸と影",linkRoundCorner:"画像に角丸",linkRoundShadow:"画像に影",relatedTools:"ほかの画像ツール",moreTools:"ほかの画像ツール",relatedTitle:"ほかの画像ツール",swatchWhite:"白",swatchBlue:"青",swatchRed:"赤",swatchLight:"薄い青",swatchBlack:"黒",swatchGreen:"緑",swatchYellow:"黄",errType:"対応していないファイルです。PNG、JPG、WebPを選んでください。",errLoad:"画像を読み込めませんでした。形式が未対応か、ファイルが破損しています。",errWm:"透かし画像を読み込めませんでした。PNGかJPGを試してください。",errCrop:"残したい範囲を、画像上でドラッグして選んでください。",blog1Tag:"白背景",blog1Title:"白い背景を消す方法",blog1Desc:"商品画像や署名、ロゴを透明PNGにする手順です。",blog2Tag:"圧縮",blog2Title:"PNGを100KB以下に圧縮",blog2Desc:"無料の方法の違いと、ブラウザ内で圧縮する方法です。",blog3Tag:"証明写真",blog3Title:"証明写真の背景をオンラインで変更",blog3Desc:"青・白・赤の違いと、白背景の透過との違いです。",heicTip:"Apple HEIC？先に「HEIC変換」へ",spliceMin:"画像を2枚以上追加してください",namePdf2img:"PDFを画像に",descPdf2img:"PDFの各ページを画像に書き出す",namePalette:"カラーパレット",descPalette:"主な色を抽出してコピー",nameFavicon:"Faviconパック",descFavicon:"複数サイズのサイトアイコン",nameBarcode:"バーコード",descBarcode:"EAN / CODE128 などを生成",nameGifsplit:"GIF分解",descGifsplit:"GIFをフレームPNGに分解",nameOcr:"画像から文字",descOcr:"端末内 OCR で文字を読み取る",nameSvgopt:"SVG最適化",descSvgopt:"SVG を軽くして容量を減らす"},
    ko: {heroTitle:"무료 온라인 이미지 도구",heroSubtitle:"이미지 도구 24종, 무료.",privacyBadge:"기기에서 처리 · 업로드 없음",searchTools:"도구 검색",searchPlaceholder:"도구 검색…",searchEmpty:"일치하는 도구가 없습니다",advanced:"설정 조정",sponsorText:"후원과 협력 문의는 Afdian으로 연락해 주세요",sponsorCta:"프로젝트 후원",sisterSite:"다른 도구",homeSponsorLead:"마음에 드나요?",homeSponsorCta:"간식 사 주세요",homeSister:"추천 도구",blogLabel:"가이드",nameWhitebg:"흰 배경 제거",nameCompress:"이미지 압축",nameConvert:"형식 변환",nameCrop:"자르기·크기 조절",nameId:"증명사진 배경",nameWm:"워터마크",nameBg:"배경색 변경",nameSplice:"이미지 잇기",namePdf:"이미지를 PDF로",nameFilter:"필터",descWhitebg:"흰 배경을 투명 PNG로 바꿉니다",descCompress:"PNG, JPG, WebP를 화질을 지키며 줄입니다",descConvert:"PNG, JPG, WebP, BMP를 서로 변환",descCrop:"영역을 자르거나 지정 크기로 바꿉니다",descId:"파랑, 흰색, 빨강 증명사진 배경",descWm:"글자 또는 이미지 워터마크",descBg:"투명 이미지에 단색이나 그라데이션",descSplice:"여러 이미지를 하나로 잇습니다",descPdf:"여러 이미지를 PDF 하나로",descFilter:"밝기, 대비, 채도와 프리셋",nameBatch:"일괄 처리",descBatch:"여러 이미지를 압축하거나 변환한 뒤 ZIP으로 받기",nameQr:"무료 QR 코드",descQr:"링크나 글을 이 기기에서 QR 코드 PNG로",linkQrUrl:"링크를 QR로",linkQrText:"글자로 QR 만들기",nameRound:"모서리와 그림자",descRound:"이미지에 둥근 모서리 또는 그림자를 넣고 PNG로 저장",nameHeic:"HEIC 변환",descHeic:"Apple HEIC를 JPG/PNG로",nameCutout:"AI 배경 제거",descCutout:"기기에서 AI로 배경을 지우고 투명 PNG로 저장",nameRotate:"회전·뒤집기",descRotate:"이미지 회전 또는 뒤집기",nameExif:"메타데이터 제거",descExif:"EXIF·GPS 등 개인정보 제거",linkRound:"모서리와 그림자",linkRoundCorner:"이미지 모서리 둥글게",linkRoundShadow:"이미지에 그림자",relatedTools:"다른 이미지 도구",moreTools:"다른 이미지 도구",relatedTitle:"다른 이미지 도구",swatchWhite:"흰색",swatchBlue:"파랑",swatchRed:"빨강",swatchLight:"연한 파랑",swatchBlack:"검정",swatchGreen:"초록",swatchYellow:"노랑",errType:"지원하지 않는 파일입니다. PNG, JPG 또는 WebP를 사용하세요.",errLoad:"이미지를 열 수 없습니다. 형식이 맞지 않거나 파일이 손상되었습니다.",errWm:"워터마크 이미지를 열 수 없습니다. PNG 또는 JPG를 사용해 보세요.",errCrop:"남길 영역을 이미지 위에서 드래그하세요.",blog1Tag:"흰 배경",blog1Title:"흰 배경을 지우는 방법",blog1Desc:"상품 사진, 서명, 로고를 투명 PNG로 만드는 방법입니다.",blog2Tag:"압축",blog2Title:"PNG를 100KB 이하로 압축",blog2Desc:"무료 방법의 차이와 브라우저에서 압축하는 방법입니다.",blog3Tag:"증명사진",blog3Title:"온라인으로 증명사진 배경 바꾸기",blog3Desc:"파랑, 흰색, 빨강 배경과 흰 배경 제거의 차이입니다.",heicTip:"Apple HEIC? 먼저 HEIC 변환 사용",spliceMin:"이미지를 2장 이상 추가하세요",namePdf2img:"PDF를 이미지로",descPdf2img:"PDF 각 페이지를 이미지로 내보내기",namePalette:"색상 팔레트",descPalette:"주요 색 추출 후 복사",nameFavicon:"Favicon 팩",descFavicon:"여러 크기 사이트 아이콘",nameBarcode:"바코드",descBarcode:"EAN / CODE128 바코드 생성",nameGifsplit:"GIF 분리",descGifsplit:"GIF를 PNG 프레임으로 분리",nameOcr:"이미지 문자 인식",descOcr:"기기에서 OCR로 글자 읽기",nameSvgopt:"SVG 최적화",descSvgopt:"SVG를 줄여 용량 감소"},
    es: {heroTitle:"Herramientas de imagen gratis",heroSubtitle:"24 herramientas de imagen, gratis.",privacyBadge:"Local · sin subir",searchTools:"Buscar herramientas",searchPlaceholder:"Buscar herramientas…",searchEmpty:"Sin herramientas coincidentes",advanced:"Ajustar opciones",sponsorText:"Para patrocinio y colaboración, contáctanos en Afdian",sponsorCta:"apoya el proyecto",sisterSite:"Otras herramientas",homeSponsorLead:"¿Te gusta?",homeSponsorCta:"Invítame un snack",homeSister:"Herramientas destacadas",blogLabel:"Guías",nameWhitebg:"Quitar fondo blanco",nameCompress:"Comprimir",nameConvert:"Convertir formato",nameCrop:"Recortar y redimensionar",nameId:"Fondo de foto de carnet",nameWm:"Marca de agua",nameBg:"Cambiar color de fondo",nameSplice:"Unir imágenes",namePdf:"Imagen a PDF",nameFilter:"Filtros",descWhitebg:"Convierte el fondo blanco en un PNG transparente",descCompress:"Reduce PNG, JPG y WebP conservando detalle",descConvert:"Convierte entre PNG, JPG, WebP y BMP",descCrop:"Recorta una zona o cambia a un tamaño exacto",descId:"Fondos azul, blanco o rojo para foto de carnet",descWm:"Añade una marca de texto o imagen",descBg:"Rellena una imagen transparente con color o degradado",descSplice:"Une varias imágenes en una",descPdf:"Combina imágenes en un PDF",descFilter:"Brillo, contraste, saturación y ajustes",nameBatch:"Por lotes",descBatch:"Comprime o convierte varias imágenes y descarga un ZIP",nameQr:"Código QR gratis",descQr:"Convierte un enlace o texto en un PNG de código QR",linkQrUrl:"Enlace a código QR",linkQrText:"Texto a código QR",nameRound:"Esquinas y sombra",descRound:"Redondea esquinas o añade sombra y exporta un PNG",nameHeic:"Convertir HEIC",descHeic:"Pasa HEIC de Apple a JPG o PNG",nameCutout:"Quitar fondo",descCutout:"Quita el fondo en local y exporta un PNG transparente",nameRotate:"Girar y voltear",descRotate:"Gira o espeja una imagen",nameExif:"Quitar metadatos",descExif:"Elimina EXIF, GPS y otros datos",linkRound:"Esquinas y sombra",linkRoundCorner:"Redondear esquinas",linkRoundShadow:"Añadir sombra",relatedTools:"Más herramientas",moreTools:"Más herramientas",relatedTitle:"Más herramientas",swatchWhite:"Blanco",swatchBlue:"Azul",swatchRed:"Rojo",swatchLight:"Azul claro",swatchBlack:"Negro",swatchGreen:"Verde",swatchYellow:"Amarillo",errType:"Ese archivo no es una imagen compatible. Usa PNG, JPG o WebP.",errLoad:"No se pudo abrir la imagen. El formato no es compatible o el archivo está dañado.",errWm:"No se pudo abrir la marca de agua. Prueba con PNG o JPG.",errCrop:"Arrastra sobre la imagen para elegir la zona que quieres conservar.",blog1Tag:"Fondo blanco",blog1Title:"Cómo quitar un fondo blanco",blog1Desc:"Pasa fotos de producto, firmas y logos a PNG transparente.",blog2Tag:"Comprimir",blog2Title:"Comprimir un PNG por debajo de 100KB",blog2Desc:"En qué se diferencian las opciones gratis y cómo comprimir en el navegador.",blog3Tag:"Foto de carnet",blog3Title:"Cambiar el fondo de una foto de carnet",blog3Desc:"Fondos azul, blanco y rojo, y en qué se diferencia de quitar el blanco.",heicTip:"¿HEIC de Apple? Usa Convertir HEIC primero",spliceMin:"Añade al menos 2 imágenes",namePdf2img:"PDF a imágenes",descPdf2img:"Exporta cada página del PDF como imagen",namePalette:"Extraer paleta",descPalette:"Saca los colores principales y copia el HEX",nameFavicon:"Paquete Favicon",descFavicon:"Exporta iconos del sitio en varios tamaños",nameBarcode:"Generar código de barras",descBarcode:"Crea EAN / CODE128 y más",nameGifsplit:"Dividir GIF",descGifsplit:"Separa el GIF en PNG fotograma a fotograma",nameOcr:"Imagen a texto",descOcr:"OCR local para leer texto en imágenes",nameSvgopt:"Optimizar SVG",descSvgopt:"Reduce el SVG y el tamaño del archivo"},
    fr: {heroTitle:"Outils image gratuits",heroSubtitle:"24 outils image, gratuits.",privacyBadge:"Local · rien n’est envoyé",searchTools:"Rechercher un outil",searchPlaceholder:"Rechercher des outils…",searchEmpty:"Aucun outil correspondant",advanced:"Régler les options",sponsorText:"Pour le parrainage et les collaborations, contactez-nous sur Afdian",sponsorCta:"soutenez le projet",sisterSite:"Plus d'outils",homeSponsorLead:"Ça vous plaît ?",homeSponsorCta:"Offrez-moi un snack",homeSister:"Outils sélectionnés",blogLabel:"Guides",nameWhitebg:"Retirer le fond blanc",nameCompress:"Compresser",nameConvert:"Convertir le format",nameCrop:"Rogner et redimensionner",nameId:"Fond de photo d'identité",nameWm:"Filigrane",nameBg:"Changer la couleur de fond",nameSplice:"Assembler des images",namePdf:"Image en PDF",nameFilter:"Filtres",descWhitebg:"Transforme un fond blanc en PNG transparent",descCompress:"Réduit PNG, JPG et WebP en gardant le détail",descConvert:"Convertit entre PNG, JPG, WebP et BMP",descCrop:"Rogner une zone ou viser une taille précise",descId:"Fonds bleu, blanc ou rouge pour photo d'identité",descWm:"Ajouter un filigrane texte ou image",descBg:"Remplir une image transparente d'une couleur ou d'un dégradé",descSplice:"Réunir plusieurs images en une",descPdf:"Combiner des images dans un PDF",descFilter:"Luminosité, contraste, saturation et préréglages",nameBatch:"Par lot",descBatch:"Compresser ou convertir plusieurs images, puis un ZIP",nameQr:"QR code gratuit",descQr:"Transforme un lien ou un texte en PNG de QR code",linkQrUrl:"Lien vers QR code",linkQrText:"Texte en QR code",nameRound:"Coins et ombre",descRound:"Arrondir les coins ou ajouter une ombre, puis un PNG",nameHeic:"Convertir HEIC",descHeic:"Passe un HEIC Apple en JPG ou PNG",nameCutout:"Détourer",descCutout:"Retire le fond en local et exporte un PNG transparent",nameRotate:"Rotation et miroir",descRotate:"Faire pivoter ou miroir une image",nameExif:"Effacer les métadonnées",descExif:"Retirer EXIF, GPS et autres données",linkRound:"Coins et ombre",linkRoundCorner:"Arrondir les coins",linkRoundShadow:"Ajouter une ombre",relatedTools:"Autres outils",moreTools:"Autres outils",relatedTitle:"Autres outils",swatchWhite:"Blanc",swatchBlue:"Bleu",swatchRed:"Rouge",swatchLight:"Bleu clair",swatchBlack:"Noir",swatchGreen:"Vert",swatchYellow:"Jaune",errType:"Ce fichier n'est pas une image prise en charge. Utilisez PNG, JPG ou WebP.",errLoad:"Impossible d'ouvrir l'image. Format non pris en charge ou fichier endommagé.",errWm:"Impossible d'ouvrir le filigrane. Essayez un PNG ou un JPG.",errCrop:"Faites glisser sur l'image pour choisir la zone à garder.",blog1Tag:"Fond blanc",blog1Title:"Comment retirer un fond blanc",blog1Desc:"Passer photos produit, signatures et logos en PNG transparent.",blog2Tag:"Compresser",blog2Title:"Compresser un PNG sous 100 Ko",blog2Desc:"Les différences entre options gratuites, et la compression dans le navigateur.",blog3Tag:"Photo d'identité",blog3Title:"Changer le fond d'une photo d'identité",blog3Desc:"Fonds bleu, blanc et rouge, et la différence avec le retrait du blanc.",heicTip:"HEIC Apple ? Utilisez d’abord Convertir HEIC",spliceMin:"Ajoutez au moins 2 images",namePdf2img:"PDF en images",descPdf2img:"Exporte chaque page PDF en image",namePalette:"Extraire la palette",descPalette:"Extrait les couleurs principales et copie le HEX",nameFavicon:"Pack Favicon",descFavicon:"Exporte des icônes de site en plusieurs tailles",nameBarcode:"Générer un code-barres",descBarcode:"Crée EAN / CODE128 et plus",nameGifsplit:"Découper un GIF",descGifsplit:"Découpe le GIF en PNG image par image",nameOcr:"Image en texte",descOcr:"OCR local pour lire le texte des images",nameSvgopt:"Optimiser SVG",descSvgopt:"Allège le SVG et réduit la taille"},
    de: {heroTitle:"Kostenlose Online-Bildwerkzeuge",heroSubtitle:"24 Bildwerkzeuge, kostenlos.",privacyBadge:"Lokal · kein Upload",searchTools:"Werkzeuge suchen",searchPlaceholder:"Werkzeuge suchen…",searchEmpty:"Keine passenden Werkzeuge",advanced:"Einstellungen anpassen",sponsorText:"Für Sponsoring und Kooperation bitte über Afdian Kontakt aufnehmen",sponsorCta:"unterstützen Sie das Projekt",sisterSite:"Weitere Tools",homeSponsorLead:"Gefällt’s?",homeSponsorCta:"Spendier mir einen Snack",homeSister:"Ausgewählte Tools",blogLabel:"Anleitungen",nameWhitebg:"Weißen Hintergrund entfernen",nameCompress:"Komprimieren",nameConvert:"Format umwandeln",nameCrop:"Zuschneiden und skalieren",nameId:"Ausweisfoto-Hintergrund",nameWm:"Wasserzeichen",nameBg:"Hintergrundfarbe ändern",nameSplice:"Bilder zusammenfügen",namePdf:"Bild zu PDF",nameFilter:"Filter",descWhitebg:"Macht einen weißen Hintergrund zu einem transparenten PNG",descCompress:"PNG, JPG und WebP verkleinern und Details behalten",descConvert:"Zwischen PNG, JPG, WebP und BMP wandeln",descCrop:"Einen Bereich ausschneiden oder auf ein Maß skalieren",descId:"Blaue, weiße oder rote Ausweisfoto-Hintergründe",descWm:"Text- oder Bildwasserzeichen setzen",descBg:"Ein transparentes Bild mit Farbe oder Verlauf füllen",descSplice:"Mehrere Bilder zu einem verbinden",descPdf:"Bilder in ein PDF legen",descFilter:"Helligkeit, Kontrast, Sättigung und Vorgaben",nameBatch:"Stapel",descBatch:"Mehrere Bilder komprimieren oder umwandeln und als ZIP laden",nameQr:"Kostenloser QR-Code",descQr:"Aus Link oder Text lokal einen QR-Code als PNG",linkQrUrl:"Link als QR-Code",linkQrText:"Text als QR-Code",nameRound:"Ecken und Schatten",descRound:"Ecken abrunden oder Schatten setzen und als PNG speichern",nameHeic:"HEIC umwandeln",descHeic:"Apple-HEIC in JPG oder PNG",nameCutout:"Hintergrund entfernen",descCutout:"Hintergrund lokal entfernen und als transparentes PNG speichern",nameRotate:"Drehen und spiegeln",descRotate:"Bild drehen oder spiegeln",nameExif:"Metadaten entfernen",descExif:"EXIF, GPS und andere Daten entfernen",linkRound:"Ecken und Schatten",linkRoundCorner:"Ecken abrunden",linkRoundShadow:"Schatten hinzufügen",relatedTools:"Weitere Werkzeuge",moreTools:"Weitere Werkzeuge",relatedTitle:"Weitere Werkzeuge",swatchWhite:"Weiß",swatchBlue:"Blau",swatchRed:"Rot",swatchLight:"Hellblau",swatchBlack:"Schwarz",swatchGreen:"Grün",swatchYellow:"Gelb",errType:"Diese Datei ist kein unterstütztes Bild. Bitte PNG, JPG oder WebP verwenden.",errLoad:"Bild konnte nicht geladen werden. Format nicht unterstützt oder Datei beschädigt.",errWm:"Wasserzeichenbild konnte nicht geladen werden. Bitte PNG oder JPG versuchen.",errCrop:"Ziehen Sie auf dem Bild, um den Bereich zu wählen, der bleiben soll.",blog1Tag:"Weißer Hintergrund",blog1Title:"Weißen Hintergrund entfernen",blog1Desc:"Produktfotos, Unterschriften und Logos als transparentes PNG.",blog2Tag:"Komprimieren",blog2Title:"PNG unter 100 KB komprimieren",blog2Desc:"Unterschiede der kostenlosen Wege und lokales Komprimieren im Browser.",blog3Tag:"Ausweisfoto",blog3Title:"Ausweisfoto-Hintergrund online ändern",blog3Desc:"Blau, Weiß und Rot, und der Unterschied zum Entfernen von Weiß.",heicTip:"Apple-HEIC? Zuerst HEIC umwandeln",spliceMin:"Mindestens 2 Bilder hinzufügen",namePdf2img:"PDF zu Bildern",descPdf2img:"Exportiert jede PDF-Seite als Bild",namePalette:"Farbpalette",descPalette:"Extrahiert Hauptfarben und kopiert HEX",nameFavicon:"Favicon-Paket",descFavicon:"Exportiert Website-Icons in mehreren Größen",nameBarcode:"Barcode erzeugen",descBarcode:"Erstellt EAN / CODE128 u. a.",nameGifsplit:"GIF zerlegen",descGifsplit:"Zerlegt GIF in PNG-Einzelbilder",nameOcr:"Bild zu Text",descOcr:"Lokale OCR für Text in Bildern",nameSvgopt:"SVG optimieren",descSvgopt:"SVG verkleinern und Dateigröße reduzieren"},
    ru: {heroTitle:"Бесплатные онлайн-инструменты для изображений",heroSubtitle:"24 инструмента для изображений.",privacyBadge:"Локально · без загрузки",searchTools:"Найти инструмент",searchPlaceholder:"Поиск инструментов…",searchEmpty:"Нет совпадающих инструментов",advanced:"Настроить параметры",sponsorText:"По вопросам спонсорства и сотрудничества пишите через Afdian",sponsorCta:"поддержите проект",sisterSite:"Ещё инструменты",homeSponsorLead:"Нравится?",homeSponsorCta:"Угостите снеком",homeSister:"Избранные инструменты",blogLabel:"Руководства",nameWhitebg:"Убрать белый фон",nameCompress:"Сжать",nameConvert:"Конвертировать формат",nameCrop:"Обрезать и масштабировать",nameId:"Фон фото на документы",nameWm:"Водяной знак",nameBg:"Изменить цвет фона",nameSplice:"Склеить изображения",namePdf:"Изображение в PDF",nameFilter:"Фильтры",descWhitebg:"Превращает белый фон в прозрачный PNG",descCompress:"Уменьшает PNG, JPG и WebP, сохраняя детали",descConvert:"Конвертация между PNG, JPG, WebP и BMP",descCrop:"Обрезать область или задать точный размер",descId:"Синий, белый или красный фон для документов",descWm:"Добавить текстовый или графический знак",descBg:"Залить прозрачное изображение цветом или градиентом",descSplice:"Собрать несколько изображений в одно",descPdf:"Объединить изображения в один PDF",descFilter:"Яркость, контраст, насыщенность и пресеты",nameBatch:"Пакетно",descBatch:"Сжать или конвертировать несколько изображений и скачать ZIP",nameQr:"Бесплатный QR-код",descQr:"Ссылка или текст в QR-код PNG, на этом устройстве",linkQrUrl:"Ссылка в QR-код",linkQrText:"Текст в QR-код",nameRound:"Скругление и тень",descRound:"Скруглить углы или добавить тень и сохранить PNG",nameHeic:"Конвертировать HEIC",descHeic:"Apple HEIC в JPG или PNG",nameCutout:"Удалить фон",descCutout:"Убрать фон локально и сохранить прозрачный PNG",nameRotate:"Поворот и отражение",descRotate:"Повернуть или отразить изображение",nameExif:"Удалить метаданные",descExif:"Убрать EXIF, GPS и другие данные",linkRound:"Скругление и тень",linkRoundCorner:"Скруглить углы",linkRoundShadow:"Добавить тень",relatedTools:"Другие инструменты",moreTools:"Другие инструменты",relatedTitle:"Другие инструменты",swatchWhite:"Белый",swatchBlue:"Синий",swatchRed:"Красный",swatchLight:"Голубой",swatchBlack:"Чёрный",swatchGreen:"Зелёный",swatchYellow:"Жёлтый",errType:"Этот файл не является поддерживаемым изображением. Используйте PNG, JPG или WebP.",errLoad:"Не удалось открыть изображение. Формат не поддерживается или файл повреждён.",errWm:"Не удалось открыть изображение водяного знака. Попробуйте PNG или JPG.",errCrop:"Проведите по изображению, чтобы выбрать область, которую нужно оставить.",blog1Tag:"Белый фон",blog1Title:"Как убрать белый фон",blog1Desc:"Как сделать прозрачный PNG из товара, подписи или логотипа.",blog2Tag:"Сжатие",blog2Title:"Сжать PNG меньше 100 КБ",blog2Desc:"Чем отличаются бесплатные способы и как сжать локально в браузере.",blog3Tag:"Фото на документы",blog3Title:"Сменить фон фото на документы онлайн",blog3Desc:"Синий, белый и красный фон и отличие от удаления белого.",heicTip:"Apple HEIC? Сначала «Конвертировать HEIC»",spliceMin:"Добавьте минимум 2 изображения",namePdf2img:"PDF в изображения",descPdf2img:"Экспорт каждой страницы PDF в картинку",namePalette:"Палитра цветов",descPalette:"Извлекает основные цвета и копирует HEX",nameFavicon:"Пакет Favicon",descFavicon:"Экспорт иконок сайта разных размеров",nameBarcode:"Штрихкод",descBarcode:"Создаёт EAN / CODE128 и др.",nameGifsplit:"Разбор GIF",descGifsplit:"Разбивает GIF на PNG по кадрам",nameOcr:"Изображение в текст",descOcr:"Локальный OCR текста на изображениях",nameSvgopt:"Оптимизация SVG",descSvgopt:"Сжимает SVG и уменьшает размер файла"},
    pt: {heroTitle:"Ferramentas de imagem grátis",heroSubtitle:"24 ferramentas de imagem, grátis.",privacyBadge:"Local · sem envio",searchTools:"Buscar ferramentas",searchPlaceholder:"Buscar ferramentas…",searchEmpty:"Sem ferramentas correspondentes",advanced:"Ajustar opções",sponsorText:"Para patrocínio e parcerias, fale conosco no Afdian",sponsorCta:"apoie o projeto",sisterSite:"Outras ferramentas",homeSponsorLead:"Gostou?",homeSponsorCta:"Pague-me um snack",homeSister:"Ferramentas em destaque",blogLabel:"Guias",nameWhitebg:"Remover fundo branco",nameCompress:"Comprimir",nameConvert:"Converter formato",nameCrop:"Recortar e redimensionar",nameId:"Fundo de foto de documento",nameWm:"Marca d'água",nameBg:"Mudar cor de fundo",nameSplice:"Juntar imagens",namePdf:"Imagem para PDF",nameFilter:"Filtros",descWhitebg:"Transforma o fundo branco num PNG transparente",descCompress:"Reduz PNG, JPG e WebP mantendo o detalhe",descConvert:"Converte entre PNG, JPG, WebP e BMP",descCrop:"Recorta uma área ou muda para um tamanho exato",descId:"Fundos azul, branco ou vermelho para documento",descWm:"Adiciona marca de texto ou imagem",descBg:"Preenche uma imagem transparente com cor ou gradiente",descSplice:"Junta várias imagens numa",descPdf:"Combina imagens num PDF",descFilter:"Brilho, contraste, saturação e predefinições",nameBatch:"Em lote",descBatch:"Comprime ou converte várias imagens e baixa um ZIP",nameQr:"QR code grátis",descQr:"Transforma um link ou texto num PNG de QR code",linkQrUrl:"Link para QR code",linkQrText:"Texto para QR code",nameRound:"Cantos e sombra",descRound:"Arredonde os cantos ou adicione sombra e exporte um PNG",nameHeic:"Converter HEIC",descHeic:"Passa HEIC da Apple para JPG ou PNG",nameCutout:"Remover fundo",descCutout:"Remove o fundo localmente e exporta um PNG transparente",nameRotate:"Rodar e inverter",descRotate:"Rodar ou espelhar uma imagem",nameExif:"Remover metadados",descExif:"Remover EXIF, GPS e outros dados",linkRound:"Cantos e sombra",linkRoundCorner:"Arredondar cantos",linkRoundShadow:"Adicionar sombra",relatedTools:"Mais ferramentas",moreTools:"Mais ferramentas",relatedTitle:"Mais ferramentas",swatchWhite:"Branco",swatchBlue:"Azul",swatchRed:"Vermelho",swatchLight:"Azul-claro",swatchBlack:"Preto",swatchGreen:"Verde",swatchYellow:"Amarelo",errType:"Esse ficheiro não é uma imagem suportada. Use PNG, JPG ou WebP.",errLoad:"Não foi possível abrir a imagem. Formato não suportado ou ficheiro danificado.",errWm:"Não foi possível abrir a marca d'água. Tente PNG ou JPG.",errCrop:"Arraste sobre a imagem para escolher a área a manter.",blog1Tag:"Fundo branco",blog1Title:"Como remover um fundo branco",blog1Desc:"Fotos de produto, assinaturas e logos em PNG transparente.",blog2Tag:"Comprimir",blog2Title:"Comprimir um PNG abaixo de 100KB",blog2Desc:"Diferenças entre opções grátis e como comprimir no navegador.",blog3Tag:"Foto de documento",blog3Title:"Mudar o fundo de uma foto de documento",blog3Desc:"Fundos azul, branco e vermelho, e a diferença para remover o branco.",heicTip:"HEIC da Apple? Use Converter HEIC primeiro",spliceMin:"Adicione pelo menos 2 imagens",namePdf2img:"PDF para imagens",descPdf2img:"Exporta cada página do PDF como imagem",namePalette:"Extrair paleta",descPalette:"Extrai as cores principais e copia o HEX",nameFavicon:"Pacote Favicon",descFavicon:"Exporta ícones do site em vários tamanhos",nameBarcode:"Gerar código de barras",descBarcode:"Cria EAN / CODE128 e mais",nameGifsplit:"Dividir GIF",descGifsplit:"Separa o GIF em PNG quadro a quadro",nameOcr:"Imagem para texto",descOcr:"OCR local para ler texto em imagens",nameSvgopt:"Otimizar SVG",descSvgopt:"Reduz o SVG e o tamanho do ficheiro"},
    ar: {heroTitle:"أدوات صور مجانية عبر الإنترنت",heroSubtitle:"24 أداة صور مجانية.",privacyBadge:"محلي · بلا رفع",searchTools:"ابحث عن أداة",searchPlaceholder:"بحث عن أدوات…",searchEmpty:"لا توجد أدوات مطابقة",advanced:"ضبط الإعدادات",sponsorText:"للرعاية والتعاون، تواصل معنا عبر Afdian",sponsorCta:"ادعم المشروع",sisterSite:"أدوات أخرى",homeSponsorLead:"أعجبك؟",homeSponsorCta:"ادعمني بوجبة خفيفة",homeSister:"أدوات مختارة",blogLabel:"أدلة",nameWhitebg:"إزالة الخلفية البيضاء",nameCompress:"ضغط الصور",nameConvert:"تحويل الصيغة",nameCrop:"قص وتغيير الحجم",nameId:"خلفية صورة الهوية",nameWm:"علامة مائية",nameBg:"تغيير لون الخلفية",nameSplice:"دمج الصور",namePdf:"صورة إلى PDF",nameFilter:"فلاتر",descWhitebg:"يحوّل الخلفية البيضاء إلى PNG شفاف",descCompress:"يصغّر PNG وJPG وWebP مع إبقاء التفاصيل",descConvert:"التحويل بين PNG وJPG وWebP وBMP",descCrop:"قص منطقة أو ضبط قياس محدد",descId:"خلفيات زرقاء أو بيضاء أو حمراء لصور الهوية",descWm:"إضافة علامة نصية أو صورية",descBg:"ملء صورة شفافة بلون أو تدرج",descSplice:"جمع عدة صور في صورة واحدة",descPdf:"جمع الصور في ملف PDF واحد",descFilter:"السطوع والتباين والتشبع والإعدادات الجاهزة",nameBatch:"دفعة",descBatch:"ضغط أو تحويل عدة صور ثم تنزيل ملف ZIP",nameQr:"رمز QR مجاني",descQr:"حوّل رابطاً أو نصاً إلى PNG لرمز QR على هذا الجهاز",linkQrUrl:"رابط إلى رمز QR",linkQrText:"نص إلى رمز QR",nameRound:"زوايا وظل",descRound:"تدوير الزوايا أو إضافة ظل ثم تصدير PNG",nameHeic:"تحويل HEIC",descHeic:"حوّل HEIC من Apple إلى JPG أو PNG",nameCutout:"إزالة الخلفية",descCutout:"أزل الخلفية محلياً وصدّر PNG شفافاً",nameRotate:"تدوير وقلب",descRotate:"تدوير الصورة أو قلبها",nameExif:"إزالة البيانات الوصفية",descExif:"إزالة EXIF وGPS وغيرها",linkRound:"زوايا وظل",linkRoundCorner:"تدوير زوايا الصورة",linkRoundShadow:"إضافة ظل للصورة",relatedTools:"المزيد من الأدوات",moreTools:"المزيد من الأدوات",relatedTitle:"المزيد من الأدوات",swatchWhite:"أبيض",swatchBlue:"أزرق",swatchRed:"أحمر",swatchLight:"أزرق فاتح",swatchBlack:"أسود",swatchGreen:"أخضر",swatchYellow:"أصفر",errType:"هذا الملف ليس صورة مدعومة. استخدم PNG أو JPG أو WebP.",errLoad:"تعذر فتح الصورة. قد تكون الصيغة غير مدعومة أو الملف تالفاً.",errWm:"تعذر فتح صورة العلامة المائية. جرّب PNG أو JPG.",errCrop:"اسحب على الصورة لتحديد المنطقة التي تريد الإبقاء عليها.",blog1Tag:"خلفية بيضاء",blog1Title:"كيف تزيل خلفية بيضاء",blog1Desc:"تحويل صور المنتجات والتواقيع والشعارات إلى PNG شفاف.",blog2Tag:"ضغط",blog2Title:"ضغط PNG إلى أقل من 100 كيلوبايت",blog2Desc:"الفرق بين الطرق المجانية وكيف تضغط الصورة داخل المتصفح.",blog3Tag:"صورة هوية",blog3Title:"تغيير خلفية صورة الهوية عبر الإنترنت",blog3Desc:"الخلفية الزرقاء والبيضاء والحمراء، والفرق عن إزالة الأبيض.",heicTip:"‏Apple HEIC؟ استخدم تحويل HEIC أولاً",spliceMin:"أضف صورتين على الأقل",namePdf2img:"PDF إلى صور",descPdf2img:"تصدير كل صفحة PDF كصورة",namePalette:"لوحة ألوان",descPalette:"استخراج الألوان الرئيسية ونسخ HEX",nameFavicon:"حزمة Favicon",descFavicon:"تصدير أيقونات الموقع بعدة أحجام",nameBarcode:"إنشاء باركود",descBarcode:"إنشاء EAN / CODE128 وغيرها",nameGifsplit:"تقسيم GIF",descGifsplit:"تقسيم GIF إلى إطارات PNG",nameOcr:"صورة إلى نص",descOcr:"تعرّف محلي على النص في الصور",nameSvgopt:"تحسين SVG",descSvgopt:"تصغير SVG وتقليل حجم الملف"},
    vi: {heroTitle:"Công cụ ảnh trực tuyến miễn phí",heroSubtitle:"24 công cụ ảnh, miễn phí.",privacyBadge:"Tại máy · không tải lên",searchTools:"Tìm công cụ",searchPlaceholder:"Tìm công cụ…",searchEmpty:"Không có công cụ phù hợp",advanced:"Chỉnh thông số",sponsorText:"Tài trợ và hợp tác xin liên hệ qua Afdian",sponsorCta:"ủng hộ dự án",sisterSite:"Thêm công cụ",homeSponsorLead:"Thấy ổn?",homeSponsorCta:"Mời tôi gói snack",homeSister:"Công cụ chọn lọc",blogLabel:"Hướng dẫn",nameWhitebg:"Xóa nền trắng",nameCompress:"Nén ảnh",nameConvert:"Chuyển định dạng",nameCrop:"Cắt và đổi kích thước",nameId:"Nền ảnh thẻ",nameWm:"Đóng dấu ảnh",nameBg:"Đổi màu nền",nameSplice:"Ghép ảnh",namePdf:"Ảnh sang PDF",nameFilter:"Bộ lọc",descWhitebg:"Đổi nền trắng thành PNG trong suốt",descCompress:"Thu nhỏ PNG, JPG, WebP mà vẫn giữ chi tiết",descConvert:"Chuyển qua lại PNG, JPG, WebP, BMP",descCrop:"Cắt một vùng hoặc đổi đúng kích thước",descId:"Nền xanh, trắng hoặc đỏ cho ảnh thẻ",descWm:"Thêm dấu chữ hoặc hình",descBg:"Phủ màu hoặc chuyển sắc lên ảnh trong suốt",descSplice:"Ghép nhiều ảnh thành một",descPdf:"Gộp ảnh thành một PDF",descFilter:"Độ sáng, tương phản, bão hòa và mẫu sẵn",nameBatch:"Hàng loạt",descBatch:"Nén hoặc chuyển nhiều ảnh, rồi tải một file ZIP",nameQr:"Tạo mã QR miễn phí",descQr:"Đổi liên kết hoặc chữ thành PNG mã QR, ngay trên máy",linkQrUrl:"Liên kết thành mã QR",linkQrText:"Chữ thành mã QR",nameRound:"Bo góc và đổ bóng",descRound:"Bo góc hoặc thêm bóng cho ảnh, rồi xuất PNG",nameHeic:"Chuyển HEIC",descHeic:"Đổi HEIC của Apple sang JPG hoặc PNG",nameCutout:"Xóa nền AI",descCutout:"Xóa nền bằng AI tại máy, xuất PNG trong suốt",nameRotate:"Xoay và lật",descRotate:"Xoay hoặc lật ảnh",nameExif:"Xóa metadata",descExif:"Gỡ EXIF, GPS và dữ liệu riêng tư",linkRound:"Bo góc và đổ bóng",linkRoundCorner:"Bo góc ảnh",linkRoundShadow:"Thêm bóng cho ảnh",relatedTools:"Công cụ khác",moreTools:"Công cụ khác",relatedTitle:"Công cụ khác",swatchWhite:"Trắng",swatchBlue:"Xanh dương",swatchRed:"Đỏ",swatchLight:"Xanh nhạt",swatchBlack:"Đen",swatchGreen:"Xanh lá",swatchYellow:"Vàng",errType:"Tệp này không phải ảnh được hỗ trợ. Hãy dùng PNG, JPG hoặc WebP.",errLoad:"Không mở được ảnh. Định dạng không hỗ trợ hoặc tệp đã hỏng.",errWm:"Không mở được ảnh dấu. Hãy thử PNG hoặc JPG.",errCrop:"Kéo trên ảnh để chọn vùng cần giữ lại.",blog1Tag:"Nền trắng",blog1Title:"Cách xóa nền trắng",blog1Desc:"Đưa ảnh sản phẩm, chữ ký và logo thành PNG trong suốt.",blog2Tag:"Nén",blog2Title:"Nén PNG xuống dưới 100KB",blog2Desc:"Khác biệt giữa các cách miễn phí và cách nén ngay trong trình duyệt.",blog3Tag:"Ảnh thẻ",blog3Title:"Đổi nền ảnh thẻ trực tuyến",blog3Desc:"Nền xanh, trắng, đỏ, và khác gì với xóa nền trắng.",heicTip:"Apple HEIC? Hãy dùng Chuyển HEIC trước",spliceMin:"Hãy thêm ít nhất 2 ảnh",namePdf2img:"PDF thành ảnh",descPdf2img:"Xuất từng trang PDF thành ảnh",namePalette:"Trích bảng màu",descPalette:"Lấy màu chính và sao chép HEX",nameFavicon:"Gói Favicon",descFavicon:"Xuất icon website nhiều kích thước",nameBarcode:"Tạo mã vạch",descBarcode:"Tạo EAN / CODE128 và khác",nameGifsplit:"Tách GIF",descGifsplit:"Tách GIF thành từng khung PNG",nameOcr:"Ảnh thành chữ",descOcr:"OCR tại máy để đọc chữ trong ảnh",nameSvgopt:"Tối ưu SVG",descSvgopt:"Thu gọn SVG và giảm dung lượng"},
    id: {heroTitle:"Alat gambar online gratis",heroSubtitle:"24 alat gambar, gratis.",privacyBadge:"Lokal · tidak diunggah",searchTools:"Cari alat",searchPlaceholder:"Cari alat…",searchEmpty:"Tidak ada alat yang cocok",advanced:"Sesuaikan pengaturan",sponsorText:"Untuk sponsor dan kerja sama, hubungi lewat Afdian",sponsorCta:"dukung proyek",sisterSite:"Alat lain",homeSponsorLead:"Suka?",homeSponsorCta:"Traktir saya camilan",homeSister:"Alat pilihan",blogLabel:"Panduan",nameWhitebg:"Hapus latar putih",nameCompress:"Kompres",nameConvert:"Konversi format",nameCrop:"Pangkas dan ubah ukuran",nameId:"Latar foto identitas",nameWm:"Tanda air",nameBg:"Ubah warna latar",nameSplice:"Gabung gambar",namePdf:"Gambar ke PDF",nameFilter:"Filter",descWhitebg:"Mengubah latar putih menjadi PNG transparan",descCompress:"Perkecil PNG, JPG, dan WebP sambil menjaga detail",descConvert:"Konversi antara PNG, JPG, WebP, dan BMP",descCrop:"Pangkas area atau ubah ke ukuran pasti",descId:"Latar biru, putih, atau merah untuk foto identitas",descWm:"Tambah tanda air teks atau gambar",descBg:"Isi gambar transparan dengan warna atau gradien",descSplice:"Gabungkan beberapa gambar menjadi satu",descPdf:"Satukan gambar ke dalam satu PDF",descFilter:"Kecerahan, kontras, saturasi, dan preset",nameBatch:"Batch",descBatch:"Kompres atau konversi banyak gambar, lalu unduh ZIP",nameQr:"QR code gratis",descQr:"Ubah tautan atau teks menjadi PNG QR di perangkat ini",linkQrUrl:"Tautan ke QR code",linkQrText:"Teks menjadi QR code",nameRound:"Sudut dan bayangan",descRound:"Bulatkan sudut atau tambah bayangan, lalu ekspor PNG",nameHeic:"Konversi HEIC",descHeic:"Ubah HEIC Apple menjadi JPG atau PNG",nameCutout:"Hapus latar",descCutout:"Hapus latar secara lokal lalu ekspor PNG transparan",nameRotate:"Putar dan balik",descRotate:"Putar atau cerminkan gambar",nameExif:"Hapus metadata",descExif:"Hapus EXIF, GPS, dan data privasi",linkRound:"Sudut dan bayangan",linkRoundCorner:"Bulatkan sudut gambar",linkRoundShadow:"Tambah bayangan",relatedTools:"Alat gambar lain",moreTools:"Alat gambar lain",relatedTitle:"Alat gambar lain",swatchWhite:"Putih",swatchBlue:"Biru",swatchRed:"Merah",swatchLight:"Biru muda",swatchBlack:"Hitam",swatchGreen:"Hijau",swatchYellow:"Kuning",errType:"Berkas ini bukan gambar yang didukung. Gunakan PNG, JPG, atau WebP.",errLoad:"Gambar tidak bisa dibuka. Format tidak didukung atau berkas rusak.",errWm:"Gambar tanda air tidak bisa dibuka. Coba PNG atau JPG.",errCrop:"Seret pada gambar untuk memilih area yang ingin disimpan.",blog1Tag:"Latar putih",blog1Title:"Cara menghapus latar putih",blog1Desc:"Mengubah foto produk, tanda tangan, dan logo menjadi PNG transparan.",blog2Tag:"Kompres",blog2Title:"Kompres PNG di bawah 100KB",blog2Desc:"Perbedaan cara gratis dan cara mengompres di browser.",blog3Tag:"Foto identitas",blog3Title:"Ganti latar foto identitas secara online",blog3Desc:"Latar biru, putih, dan merah, serta bedanya dengan menghapus putih.",heicTip:"Apple HEIC? Pakai Konversi HEIC dulu",spliceMin:"Tambahkan minimal 2 gambar",namePdf2img:"PDF ke gambar",descPdf2img:"Ekspor tiap halaman PDF jadi gambar",namePalette:"Ekstrak palet",descPalette:"Ambil warna utama dan salin HEX",nameFavicon:"Paket Favicon",descFavicon:"Ekspor ikon situs berbagai ukuran",nameBarcode:"Buat barcode",descBarcode:"Buat EAN / CODE128 dan lainnya",nameGifsplit:"Pecah GIF",descGifsplit:"Pecah GIF menjadi PNG per frame",nameOcr:"Gambar ke teks",descOcr:"OCR lokal untuk membaca teks di gambar",nameSvgopt:"Optimalkan SVG",descSvgopt:"Perkecil SVG dan ukuran file"},
    th: {heroTitle:"เครื่องมือรูปภาพออนไลน์ฟรี",heroSubtitle:"เครื่องมือรูปภาพ 24 รายการ ฟรี",privacyBadge:"ในเครื่อง · ไม่อัปโหลด",searchTools:"ค้นหาเครื่องมือ",searchPlaceholder:"ค้นหาเครื่องมือ…",searchEmpty:"ไม่มีเครื่องมือที่ตรง",advanced:"ปรับค่า",sponsorText:"การสนับสนุนและความร่วมมือ โปรดติดต่อผ่าน Afdian",sponsorCta:"สนับสนุนโปรเจกต์",sisterSite:"เครื่องมือเพิ่ม",homeSponsorLead:"ถูกใจไหม?",homeSponsorCta:"เลี้ยงขนมให้หน่อย",homeSister:"เครื่องมือคัดสรร",blogLabel:"คู่มือ",nameWhitebg:"เอาพื้นขาวออก",nameCompress:"บีบอัดรูป",nameConvert:"แปลงรูปแบบ",nameCrop:"ตัดและปรับขนาด",nameId:"พื้นหลังรูปติดบัตร",nameWm:"ลายน้ำ",nameBg:"เปลี่ยนสีพื้นหลัง",nameSplice:"ต่อรูป",namePdf:"รูปเป็น PDF",nameFilter:"ฟิลเตอร์",descWhitebg:"เปลี่ยนพื้นขาวเป็น PNG โปร่งใส",descCompress:"ย่อ PNG, JPG, WebP โดยยังคงรายละเอียด",descConvert:"แปลงระหว่าง PNG, JPG, WebP และ BMP",descCrop:"ตัดบางส่วน หรือปรับเป็นขนาดที่ต้องการ",descId:"พื้นฟ้า ขาว หรือแดงสำหรับรูปติดบัตร",descWm:"ใส่ลายน้ำตัวอักษรหรือรูป",descBg:"เติมสีพื้นหรือไล่สีให้รูปโปร่งใส",descSplice:"ต่อหลายรูปเป็นรูปเดียว",descPdf:"รวมหลายรูปเป็น PDF เดียว",descFilter:"ความสว่าง คอนทราสต์ ความอิ่มตัว และค่าสำเร็จรูป",nameBatch:"หลายรูป",descBatch:"บีบอัดหรือแปลงหลายรูป แล้วดาวน์โหลดเป็น ZIP",nameQr:"สร้าง QR ฟรี",descQr:"เปลี่ยนลิงก์หรือข้อความเป็น PNG ของ QR บนเครื่อง",linkQrUrl:"ลิงก์เป็น QR",linkQrText:"ข้อความเป็น QR",nameRound:"มุมมนและเงา",descRound:"ทำให้มุมมนหรือใส่เงา แล้วส่งออก PNG",nameHeic:"แปลง HEIC",descHeic:"แปลง HEIC ของ Apple เป็น JPG หรือ PNG",nameCutout:"ลบพื้นหลัง",descCutout:"ลบพื้นหลังในเครื่อง แล้วส่งออก PNG โปร่งใส",nameRotate:"หมุนและพลิก",descRotate:"หมุนหรือพลิกรูป",nameExif:"ลบเมตาดาต้า",descExif:"ลบ EXIF GPS และข้อมูลส่วนตัว",linkRound:"มุมมนและเงา",linkRoundCorner:"ทำให้มุมรูปมน",linkRoundShadow:"ใส่เงาให้รูป",relatedTools:"เครื่องมืออื่น",moreTools:"เครื่องมืออื่น",relatedTitle:"เครื่องมืออื่น",swatchWhite:"ขาว",swatchBlue:"น้ำเงิน",swatchRed:"แดง",swatchLight:"ฟ้าอ่อน",swatchBlack:"ดำ",swatchGreen:"เขียว",swatchYellow:"เหลือง",errType:"ไฟล์นี้ไม่ใช่รูปที่รองรับ โปรดใช้ PNG, JPG หรือ WebP",errLoad:"เปิดรูปไม่ได้ อาจเป็นรูปแบบที่ไม่รองรับหรือไฟล์เสีย",errWm:"เปิดรูปลายน้ำไม่ได้ ลองใช้ PNG หรือ JPG",errCrop:"ลากบนรูปเพื่อเลือกบริเวณที่ต้องการเก็บไว้",blog1Tag:"พื้นขาว",blog1Title:"วิธีเอาพื้นขาวออก",blog1Desc:"เปลี่ยนรูปสินค้า ลายเซ็น และโลโก้เป็น PNG โปร่งใส",blog2Tag:"บีบอัด",blog2Title:"บีบอัด PNG ให้ต่ำกว่า 100KB",blog2Desc:"วิธีฟรีแต่ละแบบต่างกันอย่างไร และบีบอัดในเบราว์เซอร์ได้อย่างไร",blog3Tag:"รูปติดบัตร",blog3Title:"เปลี่ยนพื้นหลังรูปติดบัตรออนไลน์",blog3Desc:"พื้นฟ้า ขาว และแดง ต่างจากการเอาพื้นขาวออกอย่างไร",heicTip:"Apple HEIC? ใช้แปลง HEIC ก่อน",spliceMin:"โปรดเพิ่มรูปอย่างน้อย 2 รูป",namePdf2img:"PDF เป็นรูป",descPdf2img:"ส่งออกทุกหน้า PDF เป็นรูป",namePalette:"ดึงพาเลตสี",descPalette:"ดึงสีหลักแล้วคัดลอก HEX",nameFavicon:"ชุด Favicon",descFavicon:"ส่งออกไอคอนเว็บหลายขนาด",nameBarcode:"สร้างบาร์โค้ด",descBarcode:"สร้าง EAN / CODE128 และอื่น ๆ",nameGifsplit:"แยก GIF",descGifsplit:"แยก GIF เป็น PNG ทีละเฟรม",nameOcr:"รูปเป็นข้อความ",descOcr:"OCR ในเครื่อง อ่านข้อความในรูป",nameSvgopt:"ปรับ SVG",descSvgopt:"ย่อ SVG และลดขนาดไฟล์"}
  };

  var SPONSOR = {
    zh: {sizePackLabel:"证件照尺寸",size1:"1寸",size2:"2寸",sizeSmall2:"小二寸",sizeResume:"简历照",sizePackHint:"295×413、413×579、413×531。再点取消。",presetClear:"清透",presetWarmtone:"暖调",presetCooltone:"冷调",presetMono:"黑白",presetSoftlight:"柔光",presetShopsharp:"锐化电商",namePdf2img:"PDF 转图片",descPdf2img:"把 PDF 每一页导出成图片",namePalette:"色板提取",descPalette:"从图片提取主色并复制色值",nameFavicon:"Favicon 包",descFavicon:"一键导出多尺寸网站图标",nameBarcode:"条形码生成",descBarcode:"生成 EAN / CODE128 等条形码",nameGifsplit:"GIF 拆帧",descGifsplit:"把 GIF 拆成逐帧 PNG",nameOcr:"图片转文字",descOcr:"本地 OCR 识别图片里的文字",nameSvgopt:"SVG 优化",descSvgopt:"精简 SVG，减小体积"},
    en: {sizePackLabel:"ID photo sizes",size1:"1 inch",size2:"2 inch",sizeSmall2:"Small 2 inch",sizeResume:"Resume",sizePackHint:"295×413, 413×579, 413×531. Click again to cancel.",presetClear:"Clear",presetWarmtone:"Warm tone",presetCooltone:"Cool tone",presetMono:"Black and white",presetSoftlight:"Soft light",presetShopsharp:"Product sharpen",namePdf2img:"PDF to images",descPdf2img:"Export each PDF page as an image",namePalette:"Color palette",descPalette:"Extract main colors and copy hex",nameFavicon:"Favicon pack",descFavicon:"Export multi-size site icons",nameBarcode:"Barcode",descBarcode:"Generate EAN / CODE128 barcodes",nameGifsplit:"Split GIF",descGifsplit:"Split a GIF into PNG frames",nameOcr:"Image to text",descOcr:"Local OCR for text in images",nameSvgopt:"Optimize SVG",descSvgopt:"Minify SVG and shrink the file"},
  };

  var NAME_KEYS = {
    toolWhitebg:"nameWhitebg", cardWhitebgTitle:"nameWhitebg",
    toolCompress:"nameCompress", toolCompress2:"nameCompress", cardCompressTitle:"nameCompress", rcCompress:"nameCompress", gridCompress:"nameCompress", relatedCompress:"nameCompress",
    toolConvert:"nameConvert", toolConvert2:"nameConvert", cardConvertTitle:"nameConvert", rcConvert:"nameConvert", gridConvert:"nameConvert", relatedConvert:"nameConvert",
    toolCrop:"nameCrop", toolCrop2:"nameCrop", cardCropTitle:"nameCrop", rcCrop:"nameCrop", gridCrop:"nameCrop", relatedCrop:"nameCrop",
    toolIdphoto:"nameId", toolIdphoto2:"nameId", cardIdphotoTitle:"nameId", rcIdphoto:"nameId", gridIdphoto:"nameId", relatedIdphoto:"nameId",
    toolWatermark:"nameWm", toolWatermark2:"nameWm", cardWatermarkTitle:"nameWm", rcWatermark:"nameWm", gridWatermark:"nameWm", relatedWatermark:"nameWm",
    toolBgcolor:"nameBg", toolBgcolor2:"nameBg", cardBgcolorTitle:"nameBg", rcBgcolor:"nameBg", gridBgcolor:"nameBg", relatedBgcolor:"nameBg",
    toolSplice:"nameSplice", toolSplice2:"nameSplice", cardSpliceTitle:"nameSplice", rcSplice:"nameSplice", gridSplice:"nameSplice", relatedSplice:"nameSplice",
    toolImg2pdf:"namePdf", toolImg2pdf2:"namePdf", cardPdfTitle:"namePdf", rcImg2pdf:"namePdf", gridImg2pdf:"namePdf", relatedImg2pdf:"namePdf",
    toolFilter:"nameFilter", toolFilter2:"nameFilter", cardFilterTitle:"nameFilter", rcFilter:"nameFilter", gridFilter:"nameFilter", relatedFilter:"nameFilter",
    toolBatch:"nameBatch", cardBatchTitle:"nameBatch", rcBatch:"nameBatch", gridBatch:"nameBatch", relatedBatch:"nameBatch",
    toolQr:"nameQr", cardQrTitle:"nameQr", rcQr:"nameQr", gridQr:"nameQr", relatedQr:"nameQr",
    toolRound:"nameRound", cardRoundTitle:"nameRound", rcRound:"nameRound", gridRound:"nameRound", relatedRound:"nameRound",
    toolHeic:"nameHeic", cardHeicTitle:"nameHeic", rcHeic:"nameHeic", gridHeic:"nameHeic", relatedHeic:"nameHeic",
    toolCutout:"nameCutout", cardCutoutTitle:"nameCutout", rcCutout:"nameCutout", gridCutout:"nameCutout", relatedCutout:"nameCutout",
    toolRotate:"nameRotate", cardRotateTitle:"nameRotate", rcRotate:"nameRotate", gridRotate:"nameRotate", relatedRotate:"nameRotate",
    toolExif:"nameExif", cardExifTitle:"nameExif", rcExif:"nameExif", gridExif:"nameExif", relatedExif:"nameExif",
    toolPdf2img:"namePdf2img", cardPdf2imgTitle:"namePdf2img", rcPdf2img:"namePdf2img", gridPdf2img:"namePdf2img", relatedPdf2img:"namePdf2img",
    toolPalette:"namePalette", cardPaletteTitle:"namePalette", rcPalette:"namePalette", gridPalette:"namePalette", relatedPalette:"namePalette",
    toolFavicon:"nameFavicon", cardFaviconTitle:"nameFavicon", rcFavicon:"nameFavicon", gridFavicon:"nameFavicon", relatedFavicon:"nameFavicon",
    toolBarcode:"nameBarcode", cardBarcodeTitle:"nameBarcode", rcBarcode:"nameBarcode", gridBarcode:"nameBarcode", relatedBarcode:"nameBarcode",
    toolGifsplit:"nameGifsplit", cardGifsplitTitle:"nameGifsplit", rcGifsplit:"nameGifsplit", gridGifsplit:"nameGifsplit", relatedGifsplit:"nameGifsplit",
    toolOcr:"nameOcr", cardOcrTitle:"nameOcr", rcOcr:"nameOcr", gridOcr:"nameOcr", relatedOcr:"nameOcr",
    toolSvgopt:"nameSvgopt", cardSvgoptTitle:"nameSvgopt", rcSvgopt:"nameSvgopt", gridSvgopt:"nameSvgopt", relatedSvgopt:"nameSvgopt"
  };
  var DESC_KEYS = {
    cardWhitebgDesc:"descWhitebg", cardCompressDesc:"descCompress", cardConvertDesc:"descConvert", cardCropDesc:"descCrop",
    cardIdphotoDesc:"descId", cardWatermarkDesc:"descWm", cardBgcolorDesc:"descBg", cardSpliceDesc:"descSplice",
    cardPdfDesc:"descPdf", cardFilterDesc:"descFilter", cardBatchDesc:"descBatch", cardQrDesc:"descQr", cardRoundDesc:"descRound", cardHeicDesc:"descHeic", cardCutoutDesc:"descCutout", cardRotateDesc:"descRotate", cardExifDesc:"descExif", cardPdf2imgDesc:"descPdf2img", cardPaletteDesc:"descPalette", cardFaviconDesc:"descFavicon", cardBarcodeDesc:"descBarcode", cardGifsplitDesc:"descGifsplit", cardOcrDesc:"descOcr", cardSvgoptDesc:"descSvgopt"
  };
  var DIRECT = ["searchPlaceholder","searchEmpty","heroTitle","heroSubtitle","privacyBadge","advanced","sponsorText","sponsorCta","sisterSite","homeSponsorLead","homeSponsorCta","homeSister","blogLabel","relatedTools","moreTools","relatedTitle","blog1Tag","blog1Title","blog1Desc","blog2Tag","blog2Title","blog2Desc","blog3Tag","blog3Title","blog3Desc","swatchWhite","swatchBlue","swatchRed","swatchLight","swatchBlack","swatchGreen","swatchYellow","heicTip","spliceMin","linkQrUrl","linkQrText","linkRound","linkRoundCorner","linkRoundShadow"];

  function guideLang() {
    var code = currentLang() || (document.documentElement.lang || "").toLowerCase().slice(0, 2);
    if (code === "zh") return "zh";
    return "en";
  }

  var FEEDBACK_TEXT = {
    zh: {
      feedback: "反馈 & 建议",
      fb_suggest: "建议",
      fb_bug: "问题",
      fb_other: "其他",
      fb_type: "类型",
      fb_content: "反馈内容",
      fb_content_ph: "说说你遇到的问题，或想改进的地方…",
      fb_required: "必填",
      fb_contactLabel: "联系方式",
      fb_optional: "选填 · 邮箱或微信",
      fb_contact_ph: "方便我们回复你时填写",
      fb_send: "发送",
      fb_sending: "发送中…",
      fb_cancel: "取消",
      fb_need: "请先填写反馈内容",
      fb_fail: "发送失败，请稍后再试",
      fb_note: "提交后我们会在后台查看，无需 GitHub",
      fb_ok_title: "已收到",
      fb_ok_body: "感谢反馈。我们会在后台查看，有需要时再联系你。",
      fb_close: "关闭"
    },
    en: {
      feedback: "Feedback & suggestions",
      fb_suggest: "Suggestion",
      fb_bug: "Bug",
      fb_other: "Other",
      fb_type: "Type",
      fb_content: "Feedback",
      fb_content_ph: "Tell us what went wrong, or what you'd like improved…",
      fb_required: "Required",
      fb_contactLabel: "Contact",
      fb_optional: "Optional · email or WeChat",
      fb_contact_ph: "Add this if you'd like a reply",
      fb_send: "Send",
      fb_sending: "Sending…",
      fb_cancel: "Cancel",
      fb_need: "Write your feedback first",
      fb_fail: "Couldn't send. Please try again.",
      fb_note: "We'll read this in the background. No GitHub account needed.",
      fb_ok_title: "Received",
      fb_ok_body: "Thanks for the feedback. We'll review it, and contact you if we need to.",
      fb_close: "Close"
    }
  };
  var feedbackType = "suggest";
  var feedbackLastFocus = null;
  var feedbackBound = false;
  var feedbackSending = false;
  var feedbackSuccessAt = 0;

  function feedbackPack() {
    return guideLang() === "zh" ? FEEDBACK_TEXT.zh : FEEDBACK_TEXT.en;
  }
  function feedbackLabel(type) {
    var pack = feedbackPack();
    if (type === "bug") return pack.fb_bug;
    if (type === "other") return pack.fb_other;
    return pack.fb_suggest;
  }
  function feedbackPayload(message, contact) {
    var page = "/";
    try { page = (location && location.pathname) || "/"; } catch (e) {}
    return {
      type: feedbackType,
      message: message,
      contact: contact || "",
      page: page,
      lang: currentLang(),
      userAgent: (navigator && navigator.userAgent) || ""
    };
  }
  function setFeedbackType(type) {
    feedbackType = type === "bug" || type === "other" ? type : "suggest";
    var modal = document.getElementById("feedbackModal");
    if (!modal) return;
    var buttons = modal.querySelectorAll("[data-feedback-type]");
    for (var i = 0; i < buttons.length; i++) {
      var on = buttons[i].getAttribute("data-feedback-type") === feedbackType;
      buttons[i].classList.toggle("is-on", on);
      buttons[i].setAttribute("aria-pressed", on ? "true" : "false");
    }
  }
  function clearFeedbackError() {
    var error = document.getElementById("feedbackError");
    var field = document.getElementById("feedbackContent");
    if (field) {
      field.removeAttribute("aria-invalid");
      field.removeAttribute("aria-describedby");
    }
    if (!error) return;
    error.hidden = true;
    error.setAttribute("data-i18n", "fb_need");
    error.textContent = feedbackPack().fb_need;
  }
  function showFeedbackError(key) {
    var error = document.getElementById("feedbackError");
    var field = document.getElementById("feedbackContent");
    var text = feedbackPack()[key] || "";
    if (error) {
      error.setAttribute("data-i18n", key);
      error.textContent = text;
      error.hidden = false;
    }
    if (key === "fb_need" && field) {
      field.setAttribute("aria-invalid", "true");
      field.setAttribute("aria-describedby", "feedbackError");
      field.focus();
    }
  }
  function setSendBusy(busy) {
    var send = document.getElementById("feedbackSend");
    if (!send) return;
    var key = busy ? "fb_sending" : "fb_send";
    send.disabled = !!busy;
    send.setAttribute("data-i18n", key);
    send.textContent = feedbackPack()[key] || "";
  }
  function showFeedbackSuccess() {
    feedbackSuccessAt = Date.now();
    var form = document.getElementById("feedbackForm");
    var success = document.getElementById("feedbackSuccess");
    var card = document.querySelector("#feedbackModal .feedbackCard");
    if (form) form.hidden = true;
    if (success) success.hidden = false;
    if (card) card.setAttribute("aria-labelledby", "feedbackSuccessTitle");
    var closeBtn = document.getElementById("feedbackSuccessClose");
    if (closeBtn) closeBtn.focus();
  }
  function resetFeedbackForm() {
    feedbackSending = false;
    setFeedbackType("suggest");
    var field = document.getElementById("feedbackContent");
    var contactEl = document.getElementById("feedbackContact");
    var form = document.getElementById("feedbackForm");
    var success = document.getElementById("feedbackSuccess");
    var card = document.querySelector("#feedbackModal .feedbackCard");
    if (field) field.value = "";
    if (contactEl) contactEl.value = "";
    clearFeedbackError();
    setSendBusy(false);
    if (form) form.hidden = false;
    if (success) success.hidden = true;
    if (card) card.setAttribute("aria-labelledby", "feedbackTitle");
  }
  function openFeedback() {
    var modal = document.getElementById("feedbackModal");
    if (!modal) return;
    feedbackLastFocus = document.activeElement;
    var success = document.getElementById("feedbackSuccess");
    if (success && !success.hidden) resetFeedbackForm();
    clearFeedbackError();
    var form = document.getElementById("feedbackForm");
    if (form) form.hidden = false;
    modal.classList.remove("is-leaving");
    modal.hidden = false;
    document.body.classList.add("feedback-open");
    var field = document.getElementById("feedbackContent");
    if (field) field.focus();
  }
  function closeFeedback() {
    var modal = document.getElementById("feedbackModal");
    if (!modal || modal.hidden || modal.classList.contains("is-leaving")) return;
    var success = document.getElementById("feedbackSuccess");
    var fromSuccess = !!(success && !success.hidden);
    var reduce = false;
    try { reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) {}
    function finish() {
      modal.classList.remove("is-leaving");
      modal.hidden = true;
      document.body.classList.remove("feedback-open");
      if (fromSuccess) resetFeedbackForm();
      if (feedbackLastFocus && feedbackLastFocus.focus) feedbackLastFocus.focus();
    }
    if (reduce) {
      finish();
      return;
    }
    modal.classList.add("is-leaving");
    setTimeout(finish, 180);
  }
  function feedbackConfig() {
    return window.IMAGEC_FEEDBACK || {};
  }
  function feedbackEndpoint() {
    var cfg = feedbackConfig();
    return (cfg.endpoint && String(cfg.endpoint).trim()) || "/api/feedback";
  }
  function ensureFeedbackConfig(done) {
    if (window.IMAGEC_FEEDBACK) {
      done();
      return;
    }
    if (window.__imagecFeedbackConfigLoading) {
      window.__imagecFeedbackConfigLoading.push(done);
      return;
    }
    window.__imagecFeedbackConfigLoading = [done];
    var script = document.createElement("script");
    script.src = "/feedback-config.js";
    script.async = true;
    var finish = function () {
      var queue = window.__imagecFeedbackConfigLoading || [];
      window.__imagecFeedbackConfigLoading = null;
      for (var i = 0; i < queue.length; i++) {
        try { queue[i](); } catch (e) {}
      }
    };
    script.onload = finish;
    script.onerror = finish;
    (document.head || document.documentElement).appendChild(script);
  }
  function postJson(url, body) {
    return fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      credentials: "same-origin"
    }).then(function (res) {
      if (!res.ok) {
        var err = new Error("http " + res.status);
        err.status = res.status;
        throw err;
      }
      return res.json().catch(function () { return {}; });
    });
  }
  function deliverFeedback(payload, done) {
    ensureFeedbackConfig(function () {
      var body = {
        type: payload.type,
        message: payload.message,
        contact: payload.contact || "",
        page: payload.page || "/",
        lang: payload.lang || "",
        userAgent: payload.userAgent || "",
        createdAt: new Date().toISOString(),
        site: "imagec"
      };
      postJson(feedbackEndpoint(), body).then(function () {
        var key = feedbackConfig().web3formsAccessKey;
        if (!key) {
          done(null);
          return;
        }
        postJson("https://api.web3forms.com/submit", {
          access_key: key,
          subject: "[imagec] " + feedbackLabel(body.type),
          from_name: "imagec feedback",
          type: body.type,
          message: body.message,
          contact: body.contact,
          page: body.page,
          lang: body.lang
        }).then(function () { done(null); }).catch(function () { done(null); });
      }).catch(function (err) {
        done(err || new Error("fail"));
      });
    });
  }
  function sendFeedback() {
    if (feedbackSending) return;
    var field = document.getElementById("feedbackContent");
    var contactEl = document.getElementById("feedbackContact");
    var content = field ? field.value.replace(/\r\n/g, "\n").trim() : "";
    var contact = contactEl ? contactEl.value.trim() : "";
    if (!content) {
      showFeedbackError("fb_need");
      return;
    }
    clearFeedbackError();
    var payload = feedbackPayload(content, contact);
    feedbackSending = true;
    setSendBusy(true);
    deliverFeedback(payload, function (err) {
      feedbackSending = false;
      setSendBusy(false);
      if (err) {
        showFeedbackError("fb_fail");
        return;
      }
      var modal = document.getElementById("feedbackModal");
      if (!modal || modal.hidden) {
        resetFeedbackForm();
        return;
      }
      showFeedbackSuccess();
    });
  }
  function bindFeedback() {
    if (feedbackBound) return;
    feedbackBound = true;
    document.addEventListener("click", function (event) {
      var target = event.target;
      if (!target || !target.closest) return;
      if (target.closest(".feedbackOpen")) {
        event.preventDefault();
        openFeedback();
        return;
      }
      if (target.closest("[data-feedback-type]")) {
        setFeedbackType(target.closest("[data-feedback-type]").getAttribute("data-feedback-type"));
        return;
      }
      if (target.closest("#feedbackSend")) {
        event.preventDefault();
        sendFeedback();
        return;
      }
      if (target.closest("[data-feedback-close]")) {
        event.preventDefault();
        var closer = target.closest("[data-feedback-close]");
        // A double-click on Send can land on the backdrop once the card shrinks into the success state.
        if (closer.classList.contains("feedbackBackdrop") && Date.now() - feedbackSuccessAt < 400) return;
        closeFeedback();
      }
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closeFeedback();
    });
    document.addEventListener("input", function (event) {
      if (!event.target || event.target.id !== "feedbackContent") return;
      if (!(event.target.value || "").trim()) return;
      event.target.removeAttribute("aria-invalid");
      event.target.removeAttribute("aria-describedby");
      var error = document.getElementById("feedbackError");
      if (error) error.hidden = true;
    });
  }
  function feedbackCloseButton() {
    var button = document.createElement("button");
    button.type = "button";
    button.className = "feedbackClose";
    button.setAttribute("data-feedback-close", "");
    button.setAttribute("data-chrome-aria", "fb_close");
    button.setAttribute("aria-label", feedbackPack().fb_close);
    button.title = feedbackPack().fb_close;
    button.textContent = "\u00d7";
    return button;
  }
  function feedbackCheckIcon() {
    var wrap = document.createElement("div");
    wrap.className = "feedbackSuccessIcon";
    wrap.setAttribute("aria-hidden", "true");
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "24");
    svg.setAttribute("height", "24");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("fill", "none");
    var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M5 12.5l4.2 4.2L19 7");
    path.setAttribute("stroke", "currentColor");
    path.setAttribute("stroke-width", "2.2");
    path.setAttribute("stroke-linecap", "round");
    path.setAttribute("stroke-linejoin", "round");
    svg.appendChild(path);
    wrap.appendChild(svg);
    return wrap;
  }
  function footerHrefOk(el, href) {
    return !!(el && el.getAttribute("href") === href && el.getAttribute("target") === "_blank");
  }
  function footerIsSchemeD(footer) {
    var nodes = footer.children;
    if (!nodes || nodes.length !== 3) return false;
    var line = nodes[0];
    var row = nodes[1];
    var icpWrap = nodes[2];
    if (!line.classList.contains("sponsorLine") || !row.classList.contains("actionRow")) return false;
    if (row.getAttribute("role") !== "group") return false;
    var lead = line.querySelector("span[data-i18n='homeSponsorLead']");
    var cta = line.querySelector("a.afdian[data-i18n='homeSponsorCta']");
    if (!lead || !footerHrefOk(cta, "https://afdian.com/a/imagec")) return false;
    var button = row.querySelector("button.action.feedbackOpen[data-i18n='feedback']");
    var sister = row.querySelector("a.action.primary[data-i18n='homeSister']");
    if (!button || button.type !== "button" || button.getAttribute("aria-haspopup") !== "dialog") return false;
    if (!footerHrefOk(sister, "https://toolc.xin")) return false;
    var icp = icpWrap.querySelector("a.icp");
    if (!icp || icp.id !== "icp" || !footerHrefOk(icp, "https://beian.miit.gov.cn/")) return false;
    return true;
  }
  function buildSchemeDFooter(footer) {
    var icpExisting = document.getElementById("icp");
    if (icpExisting && !footer.contains(icpExisting)) icpExisting.removeAttribute("id");
    footer.className = "siteFooter";
    while (footer.firstChild) footer.removeChild(footer.firstChild);
    var line = document.createElement("p");
    line.className = "sponsorLine";
    var lead = document.createElement("span");
    lead.setAttribute("data-i18n", "homeSponsorLead");
    lead.textContent = "觉得好用？";
    var cta = document.createElement("a");
    cta.className = "afdian";
    cta.href = "https://afdian.com/a/imagec";
    cta.target = "_blank";
    cta.rel = "noopener noreferrer";
    cta.setAttribute("data-i18n", "homeSponsorCta");
    cta.textContent = "请我来包辣条";
    line.appendChild(lead);
    line.appendChild(document.createTextNode(" "));
    line.appendChild(cta);
    var row = document.createElement("div");
    row.className = "actionRow";
    row.setAttribute("role", "group");
    row.setAttribute("aria-label", "站务");
    var button = document.createElement("button");
    button.type = "button";
    button.className = "action feedbackOpen";
    button.setAttribute("data-i18n", "feedback");
    button.setAttribute("aria-haspopup", "dialog");
    button.textContent = "反馈 & 建议";
    var sister = document.createElement("a");
    sister.className = "action primary";
    sister.href = "https://toolc.xin";
    sister.target = "_blank";
    sister.rel = "noopener noreferrer";
    sister.setAttribute("data-i18n", "homeSister");
    sister.textContent = "toolc·精选软件工具";
    row.appendChild(button);
    row.appendChild(sister);
    var icpWrap = document.createElement("div");
    var icp = document.createElement("a");
    icp.className = "icp";
    icp.id = "icp";
    icp.href = "https://beian.miit.gov.cn/";
    icp.target = "_blank";
    icp.rel = "noopener noreferrer";
    icp.textContent = "ICP备案号申请中";
    icpWrap.appendChild(icp);
    footer.appendChild(line);
    footer.appendChild(row);
    footer.appendChild(icpWrap);
  }
  function ensureSchemeDFooter() {
    Array.prototype.forEach.call(document.querySelectorAll("footer"), function (footer) {
      if (footer.classList.contains("siteFooter")) return;
      if (footer.classList.contains("footer") || footer.getAttribute("data-i18n") === "footer") footer.remove();
    });
    var footers = Array.prototype.slice.call(document.querySelectorAll(".siteFooter"));
    if (!footers.length) {
      var created = document.createElement("footer");
      created.className = "siteFooter";
      document.body.appendChild(created);
      footers = [created];
    }
    for (var i = 1; i < footers.length; i++) footers[i].remove();
    if (!footerIsSchemeD(footers[0])) buildSchemeDFooter(footers[0]);
  }
  function ensureFeedbackLink() {
    ensureSchemeDFooter();
    if (!document.getElementById("feedbackModal")) {
      var pack = feedbackPack();
      var hintLabel = function (forId, labelKey, hintKey, hintClass) {
        var label = document.createElement("label");
        label.className = "feedbackLabel";
        label.htmlFor = forId;
        var name = document.createElement("span");
        name.setAttribute("data-i18n", labelKey);
        name.textContent = pack[labelKey];
        var hint = document.createElement("span");
        hint.className = hintClass;
        hint.setAttribute("data-i18n", hintKey);
        hint.textContent = pack[hintKey];
        label.appendChild(name);
        label.appendChild(hint);
        return label;
      };
      var modal = document.createElement("div");
      modal.id = "feedbackModal";
      modal.className = "feedbackModal";
      modal.hidden = true;
      var backdrop = document.createElement("div");
      backdrop.className = "feedbackBackdrop";
      backdrop.setAttribute("data-feedback-close", "");
      var card = document.createElement("div");
      card.className = "feedbackCard";
      card.setAttribute("role", "dialog");
      card.setAttribute("aria-modal", "true");
      card.setAttribute("aria-labelledby", "feedbackTitle");
      var form = document.createElement("div");
      form.id = "feedbackForm";
      var title = document.createElement("h2");
      title.id = "feedbackTitle";
      title.setAttribute("data-i18n", "feedback");
      title.textContent = pack.feedback;
      var head = document.createElement("div");
      head.className = "feedbackHead";
      head.appendChild(title);
      head.appendChild(feedbackCloseButton());
      var typeField = document.createElement("div");
      typeField.className = "feedbackField";
      var typeLabel = document.createElement("div");
      typeLabel.className = "feedbackLabel";
      typeLabel.id = "fbTypeLabel";
      typeLabel.setAttribute("data-i18n", "fb_type");
      typeLabel.textContent = pack.fb_type;
      var types = document.createElement("div");
      types.className = "feedbackTypes";
      types.setAttribute("role", "group");
      types.setAttribute("aria-labelledby", "fbTypeLabel");
      ["suggest", "bug", "other"].forEach(function (type) {
        var button = document.createElement("button");
        button.type = "button";
        button.setAttribute("data-feedback-type", type);
        button.setAttribute("data-i18n", type === "bug" ? "fb_bug" : type === "other" ? "fb_other" : "fb_suggest");
        button.textContent = feedbackLabel(type);
        types.appendChild(button);
      });
      typeField.appendChild(typeLabel);
      typeField.appendChild(types);
      var content = document.createElement("textarea");
      content.id = "feedbackContent";
      content.rows = 5;
      content.setAttribute("data-i18n-ph", "fb_content_ph");
      content.setAttribute("placeholder", pack.fb_content_ph);
      var error = document.createElement("p");
      error.id = "feedbackError";
      error.className = "feedbackError";
      error.hidden = true;
      error.setAttribute("role", "alert");
      error.setAttribute("data-i18n", "fb_need");
      error.textContent = pack.fb_need;
      var contentField = document.createElement("div");
      contentField.className = "feedbackField";
      contentField.appendChild(hintLabel("feedbackContent", "fb_content", "fb_required", "req"));
      contentField.appendChild(content);
      contentField.appendChild(error);
      var contact = document.createElement("input");
      contact.id = "feedbackContact";
      contact.type = "text";
      contact.setAttribute("data-i18n-ph", "fb_contact_ph");
      contact.setAttribute("placeholder", pack.fb_contact_ph);
      contact.autocomplete = "on";
      var contactField = document.createElement("div");
      contactField.className = "feedbackField";
      contactField.appendChild(hintLabel("feedbackContact", "fb_contactLabel", "fb_optional", "opt"));
      contactField.appendChild(contact);
      var actions = document.createElement("div");
      actions.className = "feedbackActions";
      var cancel = document.createElement("button");
      cancel.type = "button";
      cancel.className = "secondary";
      cancel.setAttribute("data-feedback-close", "");
      cancel.setAttribute("data-i18n", "fb_cancel");
      cancel.textContent = pack.fb_cancel;
      var send = document.createElement("button");
      send.type = "button";
      send.className = "primary";
      send.id = "feedbackSend";
      send.setAttribute("data-i18n", "fb_send");
      send.textContent = pack.fb_send;
      actions.appendChild(cancel);
      actions.appendChild(send);
      var note = document.createElement("p");
      note.className = "feedbackNote";
      note.setAttribute("data-i18n", "fb_note");
      note.textContent = pack.fb_note;
      form.appendChild(head);
      form.appendChild(typeField);
      form.appendChild(contentField);
      form.appendChild(contactField);
      form.appendChild(actions);
      form.appendChild(note);
      var success = document.createElement("div");
      success.id = "feedbackSuccess";
      success.hidden = true;
      var successHead = document.createElement("div");
      successHead.className = "feedbackHead feedbackHeadEnd";
      successHead.appendChild(feedbackCloseButton());
      var successBody = document.createElement("div");
      successBody.className = "feedbackSuccess";
      var successTitle = document.createElement("h2");
      successTitle.id = "feedbackSuccessTitle";
      successTitle.setAttribute("data-i18n", "fb_ok_title");
      successTitle.textContent = pack.fb_ok_title;
      var successText = document.createElement("p");
      successText.setAttribute("data-i18n", "fb_ok_body");
      successText.textContent = pack.fb_ok_body;
      var successActions = document.createElement("div");
      successActions.className = "feedbackActions";
      var successClose = document.createElement("button");
      successClose.type = "button";
      successClose.className = "primary";
      successClose.id = "feedbackSuccessClose";
      successClose.setAttribute("data-feedback-close", "");
      successClose.setAttribute("data-i18n", "fb_close");
      successClose.textContent = pack.fb_close;
      successActions.appendChild(successClose);
      successBody.appendChild(feedbackCheckIcon());
      successBody.appendChild(successTitle);
      successBody.appendChild(successText);
      successBody.appendChild(successActions);
      success.appendChild(successHead);
      success.appendChild(successBody);
      card.appendChild(form);
      card.appendChild(success);
      modal.appendChild(backdrop);
      modal.appendChild(card);
      document.body.appendChild(modal);
      setFeedbackType(feedbackType);
    }
    bindFeedback();
  }
  function currentLang() {
    var saved = "";
    try { saved = localStorage.getItem("language") || ""; } catch (e) {}
    var html = (document.documentElement.lang || "").toLowerCase();
    var code = (saved || html || "zh").slice(0, 2);
    if (code === "zh") return "zh";
    return CHROME[code] ? code : "en";
  }
  function pack() { return CHROME[currentLang()] || CHROME.en; }

  function textFor(key) {
    if ((key === "heroTitle" || key === "heroSubtitle") && !document.body.classList.contains("home")) return null;
    if (key === "feedback" || (key && key.indexOf("fb_") === 0)) {
      var feedback = feedbackPack();
      if (feedback && feedback[key] != null) return feedback[key];
    }
    var p = pack();
    if (NAME_KEYS[key]) return p[NAME_KEYS[key]];
    if (DESC_KEYS[key]) return p[DESC_KEYS[key]];
    if (DIRECT.indexOf(key) !== -1) return p[key];
    var extra = SPONSOR[currentLang()] || {};
    if (extra[key] != null) return extra[key];
    if (SPONSOR.en && Object.prototype.hasOwnProperty.call(SPONSOR.en, key)) return SPONSOR.en[key];
    return null;
  }

  var LANG_MENU = {zh:"语言",en:"Language",ja:"言語",ko:"언어",es:"Idioma",fr:"Langue",de:"Sprache",ru:"Язык",pt:"Idioma",ar:"اللغة",vi:"Ngôn ngữ",id:"Bahasa",th:"ภาษา"};
  function syncBlogCards() {
    var blogHrefs = ["/blog/white-to-transparent-guide", "/blog/ecommerce-white-background"];
    document.querySelectorAll(".blogCard").forEach(function (card, i) {
      if (blogHrefs[i]) {
        card.hidden = false;
        card.setAttribute("href", blogHrefs[i]);
      } else {
        card.remove();
      }
    });
  }
  function ensureSisterLink() {
    var label = (CHROME.zh && CHROME.zh.sisterSite) || "软件工具";
    document.querySelectorAll(".quietLinks").forEach(function (container) {
      if (container.querySelector('a[data-i18n="sisterSite"]')) return;
      container.appendChild(document.createTextNode(" "));
      var sep = document.createElement("span");
      sep.setAttribute("aria-hidden", "true");
      sep.textContent = "·";
      container.appendChild(sep);
      container.appendChild(document.createTextNode(" "));
      var link = document.createElement("a");
      link.href = "https://toolc.xin";
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.setAttribute("data-i18n", "sisterSite");
      link.textContent = label;
      container.appendChild(link);
    });
  }
  function applyCopy() {
    syncBlogCards();
    ensureSisterLink();
    ensureFeedbackLink();
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var value = textFor(el.getAttribute("data-i18n"));
      if (value != null) el.textContent = value;
    });
    document.querySelectorAll("[data-i18n-ph]").forEach(function (el) {
      var value = textFor(el.getAttribute("data-i18n-ph"));
      if (value != null) el.setAttribute("placeholder", value);
    });
    document.querySelectorAll("[data-chrome-aria]").forEach(function (el) {
      var value = textFor(el.getAttribute("data-chrome-aria")) || pack()[el.getAttribute("data-chrome-aria")];
      if (!value) return;
      el.setAttribute("aria-label", value);
      if (el.classList.contains("feedbackClose")) el.title = value;
    });
    var summary = document.querySelector(".advanced > summary");
    if (summary) summary.textContent = pack().advanced;
    var langSelect = document.getElementById("langSelect");
    if (langSelect) langSelect.setAttribute("aria-label", LANG_MENU[currentLang()] || LANG_MENU.en);
    var icp = document.getElementById("icp");
    if (icp) icp.hidden = currentLang() !== "zh";
    var titleKey = document.body && document.body.getAttribute("data-title-i18n");
    if (titleKey) {
      var titleValue = textFor(titleKey);
      if (titleValue) document.title = titleValue + " | imagec";
    }
    document.querySelectorAll("[data-chrome-i18n='privacyBadge']").forEach(function (el) {
      el.textContent = privacyBadgeText();
    });
  }

  function showBanner(message) {
    var el = document.getElementById("formError");
    if (!el) {
      el = document.createElement("div");
      el.id = "formError";
      el.className = "noticeBanner";
      el.setAttribute("role", "alert");
      document.body.insertBefore(el, document.body.firstChild);
    }
    el.hidden = false;
    el.textContent = message;
  }
  function clearBanner() {
    var el = document.getElementById("formError");
    if (el) el.hidden = true;
  }
  function fileLooksLikeImage(file) {
    return !!(file && file.type && file.type.indexOf("image/") === 0);
  }
  window.imagecAlert = function (key) {
    var p = pack();
    showBanner(p[key] || String(key));
  };
  var nativeAlert = window.alert;
  window.alert = function (message) { showBanner(String(message)); };

  function foldTool(controls) {
    if (!controls || controls.dataset.folded) return;
    controls.dataset.folded = "1";
    var details = document.createElement("details");
    details.className = "advanced";
    var summary = document.createElement("summary");
    summary.setAttribute("data-i18n", "advanced");
    summary.textContent = pack().advanced;
    details.appendChild(summary);
    Array.prototype.slice.call(controls.children).forEach(function (el) {
    if (el.classList.contains("drop")) return;
    if (el.classList.contains("pin")) return;
    if (el.classList.contains("actions")) return;
      if (el.classList.contains("thumbList")) return;
      if (el.id === "file" || el.matches("input[type=file]")) return;
      if (el.classList.contains("hint") && controls.querySelector(".thumbList")) return;
      details.appendChild(el);
    });
    if (details.children.length < 2) return;
    controls.appendChild(details);
  }

  function foldStudio(controls) {
    if (!controls || controls.dataset.folded) return;
    controls.dataset.folded = "1";
    var details = document.createElement("details");
    details.className = "advanced";
    var summary = document.createElement("summary");
    summary.setAttribute("data-i18n", "advanced");
    summary.textContent = pack().advanced;
    details.appendChild(summary);
    controls.querySelectorAll(".controlGroup").forEach(function (group) {
      if (group.closest("#imageConfig, #gradientConfig")) return;
      if (group.id === "rotateGroup" || group.id === "positionGroup") return;
      if (group.querySelector(".presetColors, .tabRow, input[type=text], input[type=color], .formatBtns, .grid9")) return;
      if (group.querySelector("input[type=range], .grid9")) details.appendChild(group);
    });
    ["#imageConfig", "#gradientConfig"].forEach(function (sel) {
      var el = controls.querySelector(sel);
      if (el) details.appendChild(el);
    });
    controls.querySelectorAll(".checkboxRow").forEach(function (el) { details.appendChild(el); });
    if (details.children.length < 2) return;
    var btnRow = controls.querySelector(".btnRow");
    if (btnRow) btnRow.insertAdjacentElement("beforebegin", details);
    else controls.appendChild(details);
    var typeTabs = document.getElementById("typeTabs");
    if (typeTabs) typeTabs.addEventListener("click", function (event) {
      if (event.target.closest("[data-type='image']")) details.open = true;
    });
    var bgTabs = document.getElementById("bgTypeTabs");
    if (bgTabs) bgTabs.addEventListener("click", function (event) {
      if (event.target.closest("[data-type='gradient']")) details.open = true;
    });
  }

  function syncFile() {
    var has = false;
    var empty = document.getElementById("empty");
    var work = document.getElementById("workarea");
    if (work && work.style.display && work.style.display !== "none") has = true;
    if (empty && empty.style.display === "none") has = true;
    document.body.classList.toggle("has-file", has);
  }

  function privacyBadgeText() {
    return (pack() && pack().privacyBadge) || "本地处理 · 不上传服务器";
  }

  function ensurePrivacyMark(badge) {
    if (!badge || badge.querySelector(".privacyMark")) return;
    var mark = document.createElement("span");
    mark.className = "privacyMark";
    mark.setAttribute("aria-hidden", "true");
    mark.innerHTML = '<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M8 1.5 3.5 3.5v3.2c0 3 2 5.2 4.5 6 2.5-.8 4.5-3 4.5-6V3.5L8 1.5z"/><path d="M6.2 8.1 7.4 9.3 10 6.6"/></svg>';
    if (badge.firstChild) badge.insertBefore(mark, badge.firstChild);
    else badge.appendChild(mark);
  }

  function setPrivacyBadgeCopy(badge) {
    if (!badge) return;
    ensurePrivacyMark(badge);
    var text = privacyBadgeText();
    var span = badge.querySelector("[data-i18n='privacy'], [data-i18n='safeBadge'], [data-chrome-i18n='privacyBadge']");
    if (!span) {
      span = document.createElement("span");
      span.setAttribute("data-chrome-i18n", "privacyBadge");
      badge.appendChild(span);
    } else {
      span.setAttribute("data-chrome-i18n", "privacyBadge");
      span.removeAttribute("data-i18n");
    }
    span.textContent = text;
    // Drop leftover text nodes so only mark + span remain
    Array.prototype.slice.call(badge.childNodes).forEach(function (node) {
      if (node.nodeType === 3 && String(node.textContent || "").trim()) node.textContent = "";
    });
  }

  function placePrivacyBadge() {
    var body = document.body;
    if (!body) return;
    var isTool = body.classList.contains("tool") || body.classList.contains("studio");
    var isHome = body.classList.contains("home");
    if (!isTool && !isHome) return;

    var topbar = document.querySelector(".topbar");
    var brand = topbar && topbar.querySelector(".brand");
    if (!topbar || !brand) return;

    var lead = topbar.querySelector(".topbar-lead");
    if (!lead) {
      lead = document.createElement("div");
      lead.className = "topbar-lead";
      brand.parentNode.insertBefore(lead, brand);
      lead.appendChild(brand);
    }

    var badge = lead.querySelector(".privacyLine, .safeBadge, .badge");
    if (!badge) {
      var hero = document.querySelector(".hero");
      if (hero) badge = hero.querySelector(".privacyLine, .safeBadge, .badge");
    }
    if (!badge && isHome) {
      badge = document.createElement("div");
      badge.className = "privacyLine safeBadge";
      badge.innerHTML = '<span data-chrome-i18n="privacyBadge"></span>';
    }
    if (!badge) return;

    badge.classList.add("privacyLine", "safeBadge");
    lead.appendChild(badge);
    setPrivacyBadgeCopy(badge);
  }

  function boot() {
    if (window.imagecToolCards) window.imagecToolCards.mountAll();
    document.querySelectorAll("body.tool .controls").forEach(foldTool);
    document.querySelectorAll("body.studio .workarea .controls").forEach(foldStudio);
    document.querySelectorAll(".empty").forEach(function (el) { el.setAttribute("role", "status"); });
    document.querySelectorAll(".presetColors button").forEach(function (btn) {
      var map = {"#FFFFFF":"swatchWhite","#438EDB":"swatchBlue","#D9001B":"swatchRed","#B4D4FF":"swatchLight","#000000":"swatchBlack","#E74C3C":"swatchRed","#3498DB":"swatchBlue","#27AE60":"swatchGreen","#F1C40F":"swatchYellow"};
      var key = map[(btn.getAttribute("data-color") || "").toUpperCase()];
      if (key) btn.setAttribute("data-chrome-aria", key);
    });
    placePrivacyBadge();
    applyCopy();
    syncFile();
    /* Reveal only after the fold and shared copy (sponsor link included). */
    if (document.body.classList.contains("tool") || document.body.classList.contains("studio")) {
      document.body.classList.add("tool-ready");
    }
    var root = document.body;
    if (root && window.MutationObserver) {
      new MutationObserver(syncFile).observe(root, { attributes: true, subtree: true, attributeFilter: ["style", "class"] });
    }
    var sel = document.getElementById("langSelect");
    if (sel) sel.addEventListener("change", function () { setTimeout(applyCopy, 0); });
    document.addEventListener("change", function (event) {
      var input = event.target;
      if (!input || input.type !== "file" || !input.files || !input.files.length) return;
      for (var i = 0; i < input.files.length; i++) if (fileLooksLikeImage(input.files[i])) { clearBanner(); return; }
    }, true);
    document.addEventListener("drop", function (event) {
      var files = event.dataTransfer && event.dataTransfer.files;
      if (!files) return;
      for (var i = 0; i < files.length; i++) if (fileLooksLikeImage(files[i])) { clearBanner(); return; }
    }, true);
    document.addEventListener("paste", function (event) {
      var items = event.clipboardData && event.clipboardData.items;
      if (!items) return;
      for (var i = 0; i < items.length; i++) if (fileLooksLikeImage(items[i])) { clearBanner(); return; }
    }, true);
  }

  /* This script sits at the end of the body, so fold before the next paint. */
  if (document.body) boot();
  else document.addEventListener("DOMContentLoaded", boot);
  window.imagecApplyChrome = applyCopy;
  void nativeAlert;
})();
