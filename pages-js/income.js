import { state, saveState } from '/state.js';

export function initIncome() {
  const form = document.getElementById('incomeForm');
  if (!form) return;

  const sourceInput = document.getElementById('incomeSource');
  const amountInput = document.getElementById('incomeAmount');
  const list = document.getElementById('incomeList');

  form.addEventListener('submit', e => {
    e.preventDefault();

    const source = sourceInput.value.trim();
    const amount = parseFloat(amountInput.value);

    if (!source || isNaN(amount)) return;

    // Add to state
    state.income.push({ source, amount });
    saveState();

    // Add to list in UI
    const li = document.createElement('li');
    li.textContent = `${source}: $${amount.toFixed(2)}`;
    list.appendChild(li);

    form.reset();
  });

  // Optional: render existing income on page load
  state.income.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.source}: $${item.amount.toFixed(2)}`;
    list.appendChild(li);
  });
}
