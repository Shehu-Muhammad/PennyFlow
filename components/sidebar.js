document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menuBtn');
  const sidebar = document.getElementById('sidebar');
  const app = document.getElementById('app');

  if (!menuBtn || !sidebar || !app) return;

  menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    sidebar.classList.toggle('open');
    app.classList.toggle('shifted', sidebar.classList.contains('open'));
  });

  document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && e.target !== menuBtn) {
      sidebar.classList.remove('open');
      app.classList.remove('shifted');
    }
  });
});
