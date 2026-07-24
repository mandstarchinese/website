/* ==========================================================================
   サイト全体の設定ファイル
   予約フォームのURLや連絡先はここを書き換えるだけで全ページに反映されます。
   ========================================================================== */

const SITE_CONFIG = {
  // 「レッスン予約」ボタンのリンク先。
  // 以前作成したアンケート＋予約ページ（Googleフォーム／Tally／STORESなど）のURLに置き換えてください。
  reservationUrl: "https://forms.gle/XXXXXXXXXXXXXXXX",

  // 問い合わせメールアドレス
  contactEmail: "mandstarchinese@gmail.com",

  // SNSリンク（未設定の場合は "#" のままでOK。用意でき次第書き換えてください）
  social: {
    youtube: "#",
    youtube2: "#",   // YouTubeチャンネルをもう1つ追加したい場合はここに設定（不要な場合は "#" のままでOK。footer-social-listのHTML自体を削除すれば表示も消せます）
    tiktok: "#",
    lemon8: "#",
    line: "#",
    wechat: "#"
  }
};
