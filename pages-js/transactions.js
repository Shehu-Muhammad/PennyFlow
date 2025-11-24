import { state, saveState } from '../state.js';

const form = document.getElementById('transactionForm');
const list = document.getElementById('transactionList');

function renderTransactions() {
  list.innerHTML = '';
  state.transactions.forEach((t, i) => {
    const li = document.createElement('li');
    li.textContent = `${t.name} - $${t.amount} (${t.category})`;
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', () => {
      location.hash = `transactions-edit?id=${i}`;
    });
    li.appendChild(editBtn);
    list.appendChild(li);
  });
}

form?.addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('transactionName').value;
  const amount = parseFloat(document.getElementById('transactionAmount').value);
  const category = document.getElementById('transactionCategory').value;
  state.transactions.push({ name, amount, category });
  saveState();
  renderTransactions();
  form.reset();
});

renderTransactions();
