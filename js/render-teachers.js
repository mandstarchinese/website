/* ==========================================================================
   講師データ（teachers-data.js の TEACHERS 配列）を元に、
   ホームページのプレビューカードと講師紹介ページのフルプロフィールを描画します。
   ========================================================================== */

function renderTeacherPreview() {
  const wrap = document.getElementById("teacher-preview-list");
  if (!wrap) return;
  const list = TEACHERS.slice(0, 3); // ホームページには最大3名まで表示
  wrap.innerHTML = list.map(t => `
    <a class="teacher-card" href="teachers.html#${t.id}">
      <img src="${t.photo}" alt="${t.name}" onerror="this.src='images/teacher-placeholder.svg'">
      <div class="teacher-body">
        <h3>${t.name}</h3>
        <p class="teacher-tagline">${t.tagline}</p>
      </div>
    </a>
  `).join("");
}

function renderTeacherFull() {
  const wrap = document.getElementById("teacher-full-list");
  if (!wrap) return;
  wrap.innerHTML = TEACHERS.map(t => `
    <div class="teacher-full" id="${t.id}">
      <img src="${t.photo}" alt="${t.name}" onerror="this.src='images/teacher-placeholder.svg'">
      <div>
        <h3>${t.name}</h3>
        <p class="teacher-tagline">${t.tagline}</p>
        ${t.bio.map(p => `<p>${p}</p>`).join("")}
      </div>
    </div>
  `).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  renderTeacherPreview();
  renderTeacherFull();
});
