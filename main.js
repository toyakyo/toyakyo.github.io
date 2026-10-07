const STRINGS = {
  "zh-Hant": {
    "hero.title": "嗨,我是 TOYA",
    "hero.subtitle": "獨立開發者 · 工作室 Go-OnSoft",
    "about.title": "關於",
    "about.body": "我是一位 Android 與桌面工具開發者,喜歡把日常遇到的小麻煩做成好用的小工具。Go-OnSoft 是我的工作室名稱,作品以開源方式發布在 GitHub。",
    "works.title": "作品",
    "works.langforge": "AI 遊戲截圖翻譯工具,翻譯結果直接疊在畫面上。",
    "works.brighttube": "Chrome 擴充功能,用單選按鈕快速調整 YouTube 影片亮度。",
    "works.quicktruth": "Chrome 擴充功能,在 Facebook 貼文旁顯示 Cofacts 與台灣事實查核中心的查核結果,並提供本機 AI 分析。",
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
    "privacy.qt.note": "瀏覽器擴充功能 QuickTruth 會在您主動點擊時,把貼文文字送到第三方查核服務,詳見其專屬政策:"
  },
  "en": {
    "hero.title": "Hi, I'm TOYA",
    "hero.subtitle": "Independent developer · Studio: Go-OnSoft",
    "about.title": "About",
    "about.body": "I build Android and desktop tools, turning everyday annoyances into small, useful apps. Go-OnSoft is my studio name, and my work is published as open source on GitHub.",
    "works.title": "Projects",
    "works.langforge": "AI-powered game screenshot translator that overlays results right on the image.",
    "works.brighttube": "Chrome extension to adjust YouTube video brightness with simple radio buttons.",
    "works.quicktruth": "Chrome extension that shows Cofacts and Taiwan FactCheck Center results next to Facebook posts, plus on-device AI analysis.",
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
    "privacy.qt.note": "The QuickTruth browser extension sends post text to third-party fact-check services when you click a button. See its dedicated policy:"
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
