// darkmode.js
import { state, saveState, loadState } from '../state.js';

document.addEventListener('DOMContentLoaded', () => {
  const darkBtn = document.getElementById('darkModeToggle');
  if (!darkBtn) return;

  loadState();

  // Apply initial state
  document.body.classList.toggle('dark', state.darkMode);
  darkBtn.textContent = state.darkMode ? 'Light Mode' : 'Dark Mode';

  darkBtn.addEventListener('click', () => {
    state.darkMode = !state.darkMode;
    document.body.classList.toggle('dark', state.darkMode);
    darkBtn.textContent = state.darkMode ? 'Light Mode' : 'Dark Mode';
    saveState();
  });
});
