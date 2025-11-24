import { state, saveState } from '../state.js';

export function initSettings() {
  // Select elements AFTER page HTML is injected
  const darkToggle = document.getElementById('darkModeSetting');
  const clearBtn = document.getElementById('clearDataBtn');

  if (!darkToggle || !clearBtn) return;

  // Set initial checkbox state
  darkToggle.checked = state.darkMode;

  // Dark mode toggle
  darkToggle.addEventListener('change', () => {
    state.darkMode = darkToggle.checked;
    document.body.classList.toggle('dark', state.darkMode);
    saveState();
  });

  // Clear local data
  clearBtn.addEventListener('click', () => {
    localStorage.clear();
    location.reload();
  });
}
