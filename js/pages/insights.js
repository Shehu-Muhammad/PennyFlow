import { state } from "../state.js";

export function renderInsights(app) {
  const totalIncome = state.income.reduce((a,b) => a + b.amount, 0);
  const totalBudget = state.budget.reduce((a,b) => a + b.amount, 0);

  app.innerHTML = `
    <h2>Insights</h2>
    <div class="card">
      <p>Total Income: $${totalIncome}</p>
      <p>Total Budget: $${totalBudget}</p>
      <p>Remaining: $${(totalIncome - totalBudget)}</p>
    </div>
  `;
}
