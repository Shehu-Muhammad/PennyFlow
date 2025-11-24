import { state, saveState } from '../state.js';

const form = document.getElementById('budgetForm');
const list = document.getElementById('budgetList');

function renderBudget() {
  list.innerHTML = '';
  state.budget.forEach((item, i) => {
    const li = document.createElement('li');
    li.textContent = `${item.category}: $${item.amount}`;
    list.appendChild(li);
  });
}

form?.addEventListener('submit', e => {
  e.preventDefault();
  const category = document.getElementById('budgetCategory').value;
  const amount = parseFloat(document.getElementById('budgetAmount').value);
  state.budget.push({ category, amount });
  saveState();
  renderBudget();
  form.reset();
});

renderBudget();
