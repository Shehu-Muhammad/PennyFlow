import { state, saveState } from "../state.js";

export function renderIncome(app) {
  app.innerHTML = `
    <h2>Income</h2>
    <div class="card">
      <input id="incomeDesc" placeholder="Description">
      <input id="incomeAmt" placeholder="Amount" type="number">
      <button id="addIncomeBtn">Add Income</button>
    </div>

    <h3>Sources:</h3>
    <ul id="incomeList"></ul>
  `;

  const list = document.getElementById("incomeList");

  function refresh() {
    list.innerHTML = "";
    state.income.forEach(i => {
      const li = document.createElement("li");
      li.textContent = `${i.desc}: $${i.amount}`;
      list.appendChild(li);
    });
  }

  document.getElementById("addIncomeBtn").addEventListener("click", () => {
    const desc = document.getElementById("incomeDesc").value;
    const amount = parseFloat(document.getElementById("incomeAmt").value);
    if (!desc || !amount) return;

    state.income.push({ desc, amount });
    saveState();
    refresh();
  });

  refresh();
}
