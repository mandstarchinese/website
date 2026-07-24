/* ==========================================================================
   共通スクリプト: モバイルナビ開閉 / 予約ボタンのリンク設定 / SNSリンク設定
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  // モバイルメニュー開閉
  const toggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => nav.classList.toggle("open"));
  }

  // 予約ボタン・フッター予約リンクに config.js のURLを反映
  if (typeof SITE_CONFIG !== "undefined") {
    document.querySelectorAll("[data-reservation-link]").forEach(el => {
      el.setAttribute("href", SITE_CONFIG.reservationUrl);
    });
    document.querySelectorAll("[data-contact-email]").forEach(el => {
      el.setAttribute("href", `mailto:${SITE_CONFIG.contactEmail}`);
      if (el.dataset.contactEmail === "text") el.textContent = SITE_CONFIG.contactEmail;
    });
    const socialMap = {
      youtube: SITE_CONFIG.social.youtube,
      tiktok: SITE_CONFIG.social.tiktok,
      line: SITE_CONFIG.social.line,
      wechat: SITE_CONFIG.social.wechat
    };
    document.querySelectorAll("[data-social]").forEach(el => {
      const key = el.getAttribute("data-social");
      if (socialMap[key]) el.setAttribute("href", socialMap[key]);
    });
  }

  setupScrollReveal();
  initCarousels();
});

/* ---------- スクロール連動の入場アニメーション ---------- */
function setupScrollReveal() {
  const titles = document.querySelectorAll(".section-title, .page-hero h1, .hero h1");
  titles.forEach(el => el.classList.add("reveal-fade"));

  const bars = document.querySelectorAll(".title-bar");
  bars.forEach(el => el.classList.add("reveal-bar"));

  const targets = document.querySelectorAll(".reveal-fade, .reveal-bar");
  if (!("IntersectionObserver" in window) || targets.length === 0) {
    targets.forEach(el => el.classList.add("in-view"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2, rootMargin: "0px 0px -40px 0px" });

  targets.forEach(el => observer.observe(el));
}

/* ---------- ポスターカルーセル自動再生 ---------- */
function initCarousels() {
  document.querySelectorAll("[data-carousel]").forEach(carousel => {
    const slides = carousel.querySelectorAll(".poster-slide");
    if (slides.length <= 1) return;
    let current = 0;

    const dotsWrap = carousel.parentElement ? carousel.parentElement.querySelector(".poster-dots") : null;
    const dots = dotsWrap ? Array.from(dotsWrap.children) : [];

    const show = (index) => {
      slides.forEach((s, i) => s.classList.toggle("is-active", i === index));
      dots.forEach((d, i) => d.classList.toggle("is-active", i === index));
    };
    show(0);

    setInterval(() => {
      current = (current + 1) % slides.length;
      show(current);
    }, 3500);
  });
}
