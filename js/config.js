/* ==========================================================================
   サイト全体の設定ファイル
   予約フォームのURLや連絡先はここを書き換えるだけで全ページに反映されます。
   ========================================================================== */

const SITE_CONFIG = {
  // 「レッスン予約」ボタンのリンク先。
  // 以前作成したアンケート＋予約ページ（Googleフォーム／Tally／STORESなど）のURLに置き換えてください。
  reservationUrl: "https://vita0106.github.io/booking-page/",

  // 問い合わせメールアドレス
  contactEmail: "mandstarchinese@gmail.com",

  // SNSリンク（未設定の場合は "#" のままでOK。用意でき次第書き換えてください）
  social: {
    youtube: "https://youtube.com/channel/UCUsvXKHcJdgCOM5klXq40Kw?si=jxDn1RFNS-L1YgCG",
    youtube2: "https://youtube.com/@zubora_ch?si=7NJ500c0aUQy5L1A",   // YouTubeチャンネルをもう1つ追加したい場合はここに設定（不要な場合は "#" のままでOK。footer-social-listのHTML自体を削除すれば表示も消せます）
    tiktok: "https://www.tiktok.com/@mandstar777?_r=1&_t=ZS-97kj0vlzVHI",
    lemon8: "https://s.lemon8-app.com/s/GgFeMbURxf",
    line: "https://lin.ee/QMpftRW",
    wechat: "#"
  }
};
