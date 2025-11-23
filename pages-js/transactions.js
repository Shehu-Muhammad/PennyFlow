import { state, saveState, loadCategories } from '../state.js';

async function populateTransactionForm() {
  const categories = await loadCategories();
  const select = document.getElementById('transactionCategory');
  select.innerHTML = '';
  categories.forEach(cat => {
    const option = document.createElement('option');
    option.value = cat;
    option.textContent = cat;
    select.appendChild(option);
  });
}

populateTransactionForm();

// Transaction form logic
document.getElementById('addTransactionBtn').addEventListener('click', () => {
  const category = document.getElementById('transactionCategory').value;
  const amount = parseFloat(document.getElementById('transactionAmount').value);
  const description = document.getElementById('transactionDescription').value;
  state.transactions.push({ category, amount, description });
  saveState();
});
