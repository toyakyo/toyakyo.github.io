const STRINGS = {
  "zh-Hant": {
    "hero.title": "嗨,我是 TOYA",
    "hero.subtitle": "獨立開發者 · 工作室 Go-OnSoft",
    "about.title": "關於",
    "about.body": "我是一位有 20 年以上經驗的軟體開發者,擅長從零規劃與開發、系統維運,以及系統異質平台轉換與架構升級。近年專注於 Android、桌面工具與瀏覽器擴充功能,喜歡把日常遇到的小麻煩做成好用的小工具。Go-OnSoft 是我的工作室名稱,部分作品以開源方式發布在 GitHub。",
    "works.title": "作品",
    "works.langforge": "AI 遊戲截圖翻譯工具,翻譯結果直接疊在畫面上。",
    "works.brighttube": "Chrome 擴充功能,用單選按鈕快速調整 YouTube 影片亮度。",
    "works.quicktruth": "Chrome 擴充功能,在 Facebook 貼文旁顯示 Cofacts 與台灣事實查核中心的查核結果,並提供本機 AI 分析。",
    "works.roaddig": "2012 年承接的公司 Android 專案,接手時僅是半成品,後續重新設計並與政府主管機關討論需求而成。此為紀念性質的全新重製版,以 Kotlin 與 Jetpack Compose 重寫,使用臺南市政府開放資料,在地圖上瀏覽 2021–2023 年共 15,228 件道路挖掘案件,依身分檢視並以照片記錄(含 EXIF 時間與座標)。無後台、資料與照片只存本機。",
    "works.qtthreads": "Chrome 擴充功能(v1.2.0,中/英/日介面),在 Threads 貼文旁以本機 AI 拆解語意、句型與疑似手法,並新增「整串」功能備好分析整串回覆立場與討論焦點的提問;可整理成可分享的卡片。無任何對外網路請求,不會代為發文。",
    "works.factchecker": "多模型投票式文章可信度查核網站:貼入文章,由多個 AI 模型並行分析,以多數決整合結論並揭露各模型的分歧。QuickTruth 的前身實驗,結果僅供參考。",
    "works.spatial": "空間、車流、人流的互動式模擬小專案集:路口號誌編輯器(鋪路、設號誌、偵測衝突),以及室內人流模擬(比較地面標線對駐足與動線的影響)。純靜態網頁。",
    "works.private": "私有專案",
    "skills.title": "技能",
    "contact.title": "聯絡",
    "nav.privacy": "隱私權政策",
    "nav.home": "← 回首頁",
    "privacy.title": "隱私權政策",
    "privacy.updated": "最後更新:2026 年 10 月 7 日",
    "privacy.scope.title": "適用範圍",
    "privacy.scope.body": "本政策適用於 Go-OnSoft(開發者:TOYA)發布的應用程式與本網站。",
    "privacy.collect.title": "我們蒐集的資料",
    "privacy.collect.body": "我們不要求您註冊帳號,也不會主動蒐集姓名、電子郵件、位置等個人資料。各應用程式如需存取裝置功能,會依 Android 系統的權限機制先徵求您的同意。",
    "privacy.share.title": "資料分享",
    "privacy.share.body": "我們不會出售您的個人資料,也不會與第三方分享。若應用程式使用第三方服務(例如廣告或分析),會在該應用程式的商店頁面說明。",
    "privacy.storage.title": "資料儲存",
    "privacy.storage.body": "應用程式產生的設定與資料儲存在您的裝置上,解除安裝應用程式即可移除。",
    "privacy.children.title": "兒童隱私",
    "privacy.children.body": "我們不會刻意蒐集 13 歲以下兒童的個人資料。",
    "privacy.changes.title": "政策變更",
    "privacy.changes.body": "本政策若有修改,會更新在此頁面並標示最後更新日期。",
    "privacy.contact.title": "聯絡我們",
    "privacy.contact.body": "對本政策有任何疑問,請透過 GitHub 聯絡:",
    "privacy.qt.note": "瀏覽器擴充功能 QuickTruth 會在您主動點擊時,把貼文文字送到第三方查核服務,詳見其專屬政策:",
    "rd.title": "RoadDig Memorial 道挖紀念版",
    "rd.subtitle": "臺南市道路挖掘案件瀏覽與拍照紀錄 · Android(私有專案,APK 側載)",
    "rd.bg.title": "背景",
    "rd.bg.body": "2012 年我承接了一個公司的 Android 專案,當時只是半成品;後續重新設計,並與政府主管機關討論需求,做成供市民查詢、巡查人員與管線單位拍照通報的 App。原系統的後台已不存在,因此我以紀念性質從零重寫了這個全新版本:不沿用舊程式碼與圖片,不含任何公司名稱或標誌,只使用政府開放資料。",
    "rd.feat.title": "功能",
    "rd.feat.1": "地圖瀏覽:在內政部國土測繪中心電子地圖(免金鑰)上顯示 2021-07 至 2023-06 共 15,228 件道路挖掘案件,可依行政區、關鍵字與施工階段(施工前/中/已竣工)篩選,並顯示附近案件清單。",
    "rd.feat.2": "案件詳情:工程名稱、位置、許可字號、單位、目的、施工與展延期間、面積、狀態,可一鍵導航。",
    "rd.feat.3": "依身分切換介面:民眾、巡路人員(施工動態查報、違規與缺失案件,標示/遠照/近照/取證四張必拍)、管線單位(只看自己單位案件、9 大施工類別拍攝清單、12 項「必拍未拍」計數)。",
    "rd.feat.4": "拍照紀錄:使用系統相機,照片寫入 EXIF 時間與座標,照片庫可依通報/巡查、已送出/未送出篩選。",
    "rd.feat.5": "展示用途設計:登入為示範、無後台,照片與資料只存在裝置上,「送出」只是本機標記,不會上傳任何東西。",
    "rd.tech.title": "技術",
    "rd.data.title": "資料",
    "rd.data.body": "來源為臺南市政府資料開放平臺的「道挖案件」開放資料(政府資料開放授權條款)。我整理了欄位、座標系(TWD97 → WGS84 轉換)與資料缺口(開放資料只到 2023 年 6 月),並用腳本產生 App 內建的資料集。",
    "rd.eng.title": "工程做法",
    "rd.eng.body": "只使用 HTTPS、不關閉 TLS 驗證、不需任何 API 金鑰;以單元測試、lint 與 R8 release 建置驗證,並用模擬器實測各身分的完整流程。專案另有功能對照文件,逐項記錄舊版到新版的保留、改成本機與移除項目。",
    "rd.limit.title": "限制",
    "rd.limit.body": "尚未在實體手機上測試定位與相機;地圖需要網路,沒有離線底圖;必拍步驟的分組是依舊版按鈕文字推定,不是原系統規格。這是私有專案,不公開原始碼。",
    "fc.title": "Factchecker 真相驗證所",
    "fc.subtitle": "多模型投票式文章可信度查核網站 · PHP · QuickTruth 的前身實驗",
    "fc.visit": "前往網站",
    "fc.how.title": "運作方式",
    "fc.how.body": "貼入 50 至 8,000 字的文章後,系統先檢查長度並過濾不雅字眼,再比對快取;未命中時先判斷文章類型(9 種,可手動指定),再依長度選擇模式:500 字以下用單一小型模型快速判斷,結果標示為初步參考;500 字以上則從 OpenRouter 動態挑選多個免費模型並行分析,角色、事實查核、語言操控與評分各自投票或取平均,並揭露各模型是否同意多數意見。",
    "fc.feat.title": "特色",
    "fc.feat.1": "多模型投票與分歧揭露:不讓單一模型直接下結論,而是顯示各模型的評分與是否與多數一致。",
    "fc.feat.2": "嚴謹的快取規則:相似文章要同時符合長度差 ≤ 10%、開頭 200 字與結尾 100 字相似度 ≥ 85%,避免「開頭相同、後半被竄改」的文章誤用舊判定。",
    "fc.feat.3": "可部署在沒有 SSH、沒有排程的共用主機,以 FTP 上傳即可;免費模型額度用盡時,首頁會顯示狀態並停用送出。",
    "fc.feat.4": "安全設計:內部目錄禁止直接存取、錯誤訊息不外洩、Session cookie 強化設定、後台密碼雜湊、登入失敗鎖定與 CSRF 防護;機密設定不進版本控制。",
    "fc.tech.title": "技術",
    "fc.limit.title": "限制",
    "fc.limit.body": "結果由 AI 產生,僅供參考,不構成專業或法律意見。免費模型的品質與可用性不穩定;「私人模式」只是不顯示在最近驗證,仍會寫入快取;目前沒有自動化測試。",
    "works.detail": "詳細介紹"
  },
  "en": {
    "hero.title": "Hi, I'm TOYA",
    "hero.subtitle": "Independent developer · Studio: Go-OnSoft",
    "about.title": "About",
    "about.body": "I'm a software developer with 20+ years of experience, strong in planning and building systems from scratch, running and maintaining them, and migrating systems across heterogeneous platforms and upgrading their architecture. Lately I focus on Android, desktop tools and browser extensions, turning everyday annoyances into small, useful apps. Go-OnSoft is my studio name, and some of my work is open source on GitHub.",
    "works.title": "Projects",
    "works.langforge": "AI-powered game screenshot translator that overlays results right on the image.",
    "works.brighttube": "Chrome extension to adjust YouTube video brightness with simple radio buttons.",
    "works.quicktruth": "Chrome extension that shows Cofacts and Taiwan FactCheck Center results next to Facebook posts, plus on-device AI analysis.",
    "works.roaddig": "A company Android project I took over in 2012 as a half-finished prototype, then redesigned and refined through requirement discussions with a government agency. This is a memorial remake, fully rewritten in Kotlin and Jetpack Compose. Using Tainan City open data, it browses 15,228 road-excavation cases from 2021–2023 on a map, adapts to the viewer's role, and records photos with EXIF time and location. No backend; data and photos stay on the device.",
    "works.qtthreads": "Chrome extension (v1.2.0; Traditional Chinese, English and Japanese UI) that breaks down Threads posts (meaning, sentence pattern, suspected tactics) with on-device AI, and a new Thread tool that prepares a question about the stance distribution and discussion focus of a whole reply thread; results can be turned into a shareable card. No network requests; it never posts for you.",
    "works.factchecker": "A multi-model voting article credibility checker: paste an article, several AI models analyse it in parallel, and a majority vote produces the verdict while showing where the models disagree. The predecessor experiment of QuickTruth; results are for reference only.",
    "works.spatial": "A set of interactive simulations of space, traffic and crowds: an intersection signal editor (lay roads, set signals, detect conflicts) and an indoor pedestrian-flow simulator (comparing how floor markings affect dwell and movement). Pure static web pages.",
    "works.private": "Private",
    "skills.title": "Skills",
    "contact.title": "Contact",
    "nav.privacy": "Privacy Policy",
    "nav.home": "← Home",
    "privacy.title": "Privacy Policy",
    "privacy.updated": "Last updated: October 7, 2026",
    "privacy.scope.title": "Scope",
    "privacy.scope.body": "This policy applies to the apps published by Go-OnSoft (developer: TOYA) and to this website.",
    "privacy.collect.title": "Information we collect",
    "privacy.collect.body": "We do not require an account and do not actively collect personal information such as your name, email address or location. If an app needs access to a device feature, it asks for your permission through the Android permission system first.",
    "privacy.share.title": "Data sharing",
    "privacy.share.body": "We do not sell your personal information and do not share it with third parties. If an app uses a third-party service (for example ads or analytics), it is described on that app's store page.",
    "privacy.storage.title": "Data storage",
    "privacy.storage.body": "Settings and data created by an app are stored on your device and are removed when you uninstall the app.",
    "privacy.children.title": "Children's privacy",
    "privacy.children.body": "We do not knowingly collect personal information from children under 13.",
    "privacy.changes.title": "Changes to this policy",
    "privacy.changes.body": "If this policy changes, the updated version will be posted on this page with a new date.",
    "privacy.contact.title": "Contact us",
    "privacy.contact.body": "If you have questions about this policy, please contact us through GitHub:",
    "privacy.qt.note": "The QuickTruth browser extension sends post text to third-party fact-check services when you click a button. See its dedicated policy:",
    "rd.title": "RoadDig Memorial",
    "rd.subtitle": "Browse Tainan City road-excavation cases and record photos · Android (private project, side-loaded APK)",
    "rd.bg.title": "Background",
    "rd.bg.body": "In 2012 I took over a company Android project that was only a half-finished prototype. I then redesigned it and refined the requirements through discussions with a government agency, turning it into an app for citizens to look up cases and for inspectors and utility units to photograph and report. The original backend no longer exists, so this memorial edition is a from-scratch rewrite: no old code or images, no company names or logos, and only government open data.",
    "rd.feat.title": "Features",
    "rd.feat.1": "Map browsing: 15,228 road-excavation cases from July 2021 to June 2023 on the Taiwan NLSC e-map (no API key), filterable by district, keyword and construction stage (upcoming / ongoing / completed), with a nearby-cases list.",
    "rd.feat.2": "Case details: project name, location, permit number, unit, purpose, construction and extension periods, area and status, with one-tap navigation.",
    "rd.feat.3": "Role-based UI: citizens; inspectors (construction, violation and defect reports, with four required shots: marker, far, near, evidence); pipeline units (only their own cases, nine work-category photo checklists, and a count of 12 required-but-missing shots).",
    "rd.feat.4": "Photo records: uses the system camera, writes EXIF time and location, and a gallery filtered by report/inspection and sent/unsent.",
    "rd.feat.5": "Built for demonstration: demo login, no backend; photos and data stay on the device, and \"submit\" is only a local mark that uploads nothing.",
    "rd.tech.title": "Tech",
    "rd.data.title": "Data",
    "rd.data.body": "The source is Tainan City's road-excavation open data (Open Government Data License). I documented the fields, the coordinate system (TWD97 to WGS84 conversion) and the data gap (the open data ends in June 2023), and wrote a script that builds the dataset bundled in the app.",
    "rd.eng.title": "Engineering",
    "rd.eng.body": "HTTPS only, TLS verification never disabled, no API keys. Verified with unit tests, lint and an R8 release build, plus emulator runs of each role's full flow. A feature-mapping document records, item by item, what was kept, made local or removed from the old version.",
    "rd.limit.title": "Limitations",
    "rd.limit.body": "Location and camera have not been tested on a physical phone; the map needs a network and has no offline tiles; the grouping of required shots is inferred from the old app's button labels, not the original specification. This is a private project and the source is not public.",
    "fc.title": "Factchecker",
    "fc.subtitle": "A multi-model voting article credibility checker · PHP · predecessor experiment of QuickTruth",
    "fc.visit": "Visit the site",
    "fc.how.title": "How it works",
    "fc.how.body": "Paste an article of 50 to 8,000 characters. The system checks length, filters profanity and looks up the cache. On a miss it classifies the article (9 types, or pick one manually) and chooses a mode by length: up to 500 characters uses a single small model and is marked as a preliminary hint; longer articles pick several free OpenRouter models dynamically and run them in parallel, voting or averaging on role, fact-check, language manipulation and score, and showing whether each model agrees with the majority.",
    "fc.feat.title": "Highlights",
    "fc.feat.1": "Multi-model voting with disagreement shown: no single model gives the verdict; each model's score and whether it agrees with the majority are displayed.",
    "fc.feat.2": "A strict cache rule: a similar article must match on length within 10% and on the first 200 and last 100 characters at 85% or more, so an article with the same opening but a tampered second half won't reuse an old verdict.",
    "fc.feat.3": "Deploys to shared hosting with no SSH or cron, by FTP upload; when the free-model quota runs out, the home page shows the status and disables submission.",
    "fc.feat.4": "Security design: internal directories blocked from direct access, no leaked error messages, hardened session cookies, hashed admin password, login lockout and CSRF protection; secrets stay out of version control.",
    "fc.tech.title": "Tech",
    "fc.limit.title": "Limitations",
    "fc.limit.body": "Results are generated by AI and are for reference only, not professional or legal advice. Free-model quality and availability are unstable; \"private mode\" only hides an entry from recent checks and still writes to the cache; there are no automated tests yet.",
    "works.detail": "Details"
  }
};

const DEFAULT_LANG = "zh-Hant";

function safeGet(key) {
  try { return localStorage.getItem(key); } catch (e) { return null; }
}

function safeSet(key, value) {
  try { localStorage.setItem(key, value); } catch (e) { /* storage unavailable */ }
}

function detectLang() {
  const saved = safeGet("lang");
  if (saved && STRINGS[saved]) return saved;
  const nav = (navigator.language || "").toLowerCase();
  return nav.startsWith("zh") ? "zh-Hant" : nav ? "en" : DEFAULT_LANG;
}

function applyLang(lang) {
  const dict = STRINGS[lang];
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = dict[el.dataset.i18n] || "";
  });
  document.querySelectorAll(".lang button").forEach((btn) => {
    btn.setAttribute("aria-pressed", String(btn.dataset.lang === lang));
  });
  safeSet("lang", lang);
}

document.querySelectorAll(".lang button").forEach((btn) => {
  btn.addEventListener("click", () => applyLang(btn.dataset.lang));
});

document.getElementById("year").textContent = new Date().getFullYear();
applyLang(detectLang());
