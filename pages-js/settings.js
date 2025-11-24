import { state, saveState } from '../state.js';

const darkToggle = document.getElementById('darkModeSetting');
const clearBtn = document.getElementById('clearDataBtn');

darkToggle.checked = state.darkMode;

darkToggle?.addEventListener('change', () => {
  state.darkMode = darkToggle.checked;
  document.body.classList.toggle('dark', state.darkMode);
  saveState();
});

clearBtn?.addEventListener('click', () => {
  localStorage.clear();
  location.reload();
});
