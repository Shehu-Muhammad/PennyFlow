import { state } from "../state.js";
import { calculateSTS } from "../calc.js";

export function renderSafe(app) {
  const sts = calculateSTS(state.income, state.budget);

  app.innerHTML = `
    <h2>Safe to Spend</h2>
    <div class="card">
      <h1>$${sts.toFixed(2)}</h1>
    </div>
  `;
}
