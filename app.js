// --------------------------------------
// Local Storage Helpers
// --------------------------------------

function saveData(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function loadData(key, defaultValue = {}) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : defaultValue;
}


// --------------------------------------
// Budget App Logic
// --------------------------------------

function calculateSafeToSpend() {
  const income = loadData("income", { total: 0 }).total;
  const budget = loadData("budget", { totalExpenses: 0 }).totalExpenses;

  return income - budget;
}
