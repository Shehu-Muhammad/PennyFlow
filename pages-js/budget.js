import { state, saveState, loadCategories } from '../state.js';

async function populateBudgetForm() {
  const categories = await loadCategories();
  const select = document.getElementById('budgetCategory');
  select.innerHTML = '';
  categories.forEach(cat => {
    const option = document.createElement('option');
    option.value = cat;
    option.textContent = cat;
    select.appendChild(option);
  });
}

populateBudgetForm();

// Add budget logic as usual
document.getElementById('addBudgetBtn').addEventListener('click', () => {
  const category = document.getElementById('budgetCategory').value;
  const amount = parseFloat(document.getElementById('budgetAmount').value);
  state.budget.push({ category, amount });
  saveState();
});
