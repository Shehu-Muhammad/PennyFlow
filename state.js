export const state = {
  income: [],
  budget: [],
  transactions: [],
  darkMode: false
};

export function saveState() {
  localStorage.setItem('state', JSON.stringify(state));
}

export function loadState() {
  const saved = localStorage.getItem('state');
  if (saved) {
    const parsed = JSON.parse(saved);
    Object.assign(state, parsed);
  }

  if (state.darkMode) document.body.classList.add('dark');
}
