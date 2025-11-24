import { state, saveState } from '../state.js';

const form = document.getElementById('transactionEditForm');
const params = new URLSearchParams(location.hash.split('?')[1]);
const id = parseInt(params.get('id'), 10);

const t = state.transactions[id];
if (!t) location.hash = 'transactions';

document.getElementById('editName').value = t.name;
document.getElementById('editAmount').value = t.amount;
document.getElementById('editCategory').value = t.category;

form?.addEventListener('submit', e => {
  e.preventDefault();
  t.name = document.getElementById('editName').value;
  t.amount = parseFloat(document.getElementById('editAmount').value);
  t.category = document.getElementById('editCategory').value;
  saveState();
  location.hash = 'transactions';
});
