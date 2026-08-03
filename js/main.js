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
    // social内のキーを追加するだけで、対応する data-social="キー名" のリンクに自動反映されます
    document.querySelectorAll("[data-social]").forEach(el => {
      const key = el.getAttribute("data-social");
      const url = SITE_CONFIG.social[key];
      if (url) el.setAttribute("href", url);
    });
  }

  setupScrollReveal();
  initCarousels();
  setupVideoPosters();
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

/* ---------- 動画の自動サムネイル生成 ----------
   動画ファイル自体から1コマを読み取ってposter（再生前に表示される画像）として設定します。
   これにより、封面画像を別途用意しなくても「黒画面+再生ボタン」にならず、
   動画の実際の一場面がサムネイルとして表示されます。
   ※ ローカルでindex.htmlをダブルクリックして開く場合（file://）はブラウザの制限で
   生成に失敗することがありますが、GitHub Pages等（https）で公開すれば正常に動作します。
   失敗した場合は自動的に元のposter属性（設定していれば）がそのまま使われます。 */
function setupVideoPosters() {
  document.querySelectorAll(".video-slot video").forEach(video => {
    const capture = () => {
      try {
        const canvas = document.createElement("canvas");
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        if (!canvas.width || !canvas.height) return;
        canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);
        video.poster = canvas.toDataURL("image/jpeg", 0.85);
      } catch (e) {
        // 生成に失敗した場合は何もしない（元のposter属性のまま）
      }
    };
    video.addEventListener("loadedmetadata", () => {
      if (video.duration && video.duration > 1) {
        video.currentTime = Math.min(1, video.duration / 4);
      } else {
        capture();
      }
    }, { once: true });
    video.addEventListener("seeked", capture, { once: true });
  });
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
