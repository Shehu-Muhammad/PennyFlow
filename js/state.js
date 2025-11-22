export const state = {
  income: JSON.parse(localStorage.getItem("income") || "[]"),
  budget: JSON.parse(localStorage.getItem("budget") || "[]"),
  settings: JSON.parse(localStorage.getItem("settings") || "{}")
};

export function saveState() {
  localStorage.setItem("income", JSON.stringify(state.income));
  localStorage.setItem("budget", JSON.stringify(state.budget));
  localStorage.setItem("settings", JSON.stringify(state.settings));
}
