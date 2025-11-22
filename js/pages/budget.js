import { state, saveState } from "../state.js";

export function renderBudget(app) {
  app.innerHTML = `
    <h2>Budget</h2>
    <div class="card">
      <input id="cat" placeholder="Category">
      <input id="amt" placeholder="Amount" type="number">
      <button id="addBudgetBtn">Add Expense</button>
    </div>

    <h3>Categories:</h3>
    <ul id="budgetList"></ul>
  `;

  const list = document.getElementById("budgetList");

  function refresh() {
    list.innerHTML = "";
    state.budget.forEach(b => {
      const li = document.createElement("li");
      li.textContent = `${b.cat}: $${b.amount}`;
      list.appendChild(li);
    });
  }

  document.getElementById("addBudgetBtn").addEventListener("click", () => {
    const cat = document.getElementById("cat").value;
    const amount = parseFloat(document.getElementById("amt").value);
    if (!cat || !amount) return;

    state.budget.push({ cat, amount });
    saveState();
    refresh();
  });

  refresh();
}
