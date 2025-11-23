export const state = {
  income: loadData('income', []),
  budget: loadData('budget', []),
  transactions: loadData('transactions', []),
  categories: null, // will load from JSON
};

export function saveState() {
  localStorage.setItem('income', JSON.stringify(state.income));
  localStorage.setItem('budget', JSON.stringify(state.budget));
  localStorage.setItem('transactions', JSON.stringify(state.transactions));
}

// Helper to load JSON categories
export async function loadCategories() {
  if (!state.categories) {
    const res = await fetch('/data/categories.json');
    state.categories = await res.json();
  }
  return state.categories;
}
