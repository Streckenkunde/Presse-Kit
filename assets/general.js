function copyColor(hex) {
  navigator.clipboard.writeText(hex).then(() => showToast(`${hex} kopiert!`));
}
function copyText(text) {
  navigator.clipboard.writeText(text.trim()).then(() => showToast('In die Zwischenablage kopiert!'));
}
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2000);
}
