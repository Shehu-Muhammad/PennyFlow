import { state, saveState } from '../state.js';

document.getElementById('darkModeToggle')?.addEventListener('click', () => {
  const enabled = document.body.classList.toggle('dark');
  state.darkMode = enabled;
  saveState();
});
