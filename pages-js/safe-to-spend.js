import { state } from '../js/state.js';

const display = document.getElementById('safeToSpendDisplay');

function calculateSTS() {
  const totalIncome = state.income.reduce((a, b) => a + b.amount, 0);
  const totalBudget = state.budget.reduce((a, b) => a + b.amount, 0);
  display.textContent = `Safe-to-Spend: $${(totalIncome - totalBudget).toFixed(2)}`;
}

calculateSTS();
