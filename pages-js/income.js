import { state, saveState } from '../state.js';

const form = document.getElementById('incomeForm');
const list = document.getElementById('incomeList');

function renderIncome() {
  list.innerHTML = '';
  state.income.forEach((item, i) => {
    const li = document.createElement('li');
    li.textContent = `${item.source}: $${item.amount}`;
    list.appendChild(li);
  });
}

form?.addEventListener('submit', e => {
  e.preventDefault();
  const source = document.getElementById('incomeSource').value;
  const amount = parseFloat(document.getElementById('incomeAmount').value);
  state.income.push({ source, amount });
  saveState();
  renderIncome();
  form.reset();
});

renderIncome();
