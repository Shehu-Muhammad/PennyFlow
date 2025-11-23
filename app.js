import { initRouter } from './router.js';
import { loadState } from './state.js';

// Initialize SPA
document.addEventListener('DOMContentLoaded', () => {
  loadState();
  initRouter();
});
