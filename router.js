export function initRouter() {
  const container = document.getElementById('app');

  async function loadPage(page) {
    try {
      const res = await fetch(`pages/${page}.html`);
      const html = await res.text();
      container.innerHTML = html;

      // Load corresponding JS
      const script = document.createElement('script');
      script.src = `pages-js/${page}.js`;
      script.type = 'module';
      container.appendChild(script);
    } catch (err) {
      container.innerHTML = `<h2>Page not found: ${page}</h2>`;
    }
  }

  // Handle navigation links
  document.body.addEventListener('click', e => {
    if (e.target.matches('[data-link]')) {
      e.preventDefault();
      const page = e.target.getAttribute('data-link');
      history.pushState({}, '', `#${page}`);
      loadPage(page);
    }
  });

  // Initial load
  const hash = location.hash.replace('#', '') || 'dashboard';
  loadPage(hash);

  window.addEventListener('popstate', () => {
    const page = location.hash.replace('#', '') || 'income';
    loadPage(page);
  });
}
