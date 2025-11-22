import { renderIncome } from "./pages/income.js";
import { renderBudget } from "./pages/budget.js";
import { renderSafe } from "./pages/safe.js";
import { renderInsights } from "./pages/insights.js";

const routes = {
  income: renderIncome,
  budget: renderBudget,
  safe: renderSafe,
  insights: renderInsights
};

export function navigate(page) {
  const app = document.getElementById("app");
  app.innerHTML = "";
  routes[page]?.(app);
  history.pushState({}, "", `#${page}`);
}

window.onpopstate = () => {
  navigate(location.hash.replace("#", "") || "income");
};
