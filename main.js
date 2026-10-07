const STRINGS = {
  "zh-Hant": {
    "hero.title": "嗨,我是 TOYA",
    "hero.subtitle": "獨立開發者 · 工作室 Go-OnSoft",
    "about.title": "關於",
    "about.body": "我是一位 Android 與桌面工具開發者,喜歡把日常遇到的小麻煩做成好用的小工具。Go-OnSoft 是我的工作室名稱,作品以開源方式發布在 GitHub。",
    "works.title": "作品",
    "works.langforge": "AI 遊戲截圖翻譯工具,翻譯結果直接疊在畫面上。",
    "works.brighttube": "Chrome 擴充功能,用單選按鈕快速調整 YouTube 影片亮度。",
    "contact.title": "聯絡"
  },
  "en": {
    "hero.title": "Hi, I'm TOYA",
    "hero.subtitle": "Independent developer · Studio: Go-OnSoft",
    "about.title": "About",
    "about.body": "I build Android and desktop tools, turning everyday annoyances into small, useful apps. Go-OnSoft is my studio name, and my work is published as open source on GitHub.",
    "works.title": "Projects",
    "works.langforge": "AI-powered game screenshot translator that overlays results right on the image.",
    "works.brighttube": "Chrome extension to adjust YouTube video brightness with simple radio buttons.",
    "contact.title": "Contact"
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
