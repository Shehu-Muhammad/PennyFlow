const sidebar = document.getElementById('menuBtn');
const sidebarEl = document.getElementById('app-container') || document.getElementById('app');

document.getElementById('menuBtn')?.addEventListener('click', () => {
  const nav = document.getElementById('sidebar');
  if (!nav) return;

  nav.classList.toggle('open');
});
