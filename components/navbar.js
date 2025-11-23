export function createNavbar() {
  const nav = document.createElement('nav');
  nav.innerHTML = `
    <a href="#" data-link="dashboard">Dashboard</a>
    <a href="#" data-link="income">Income</a>
    <a href="#" data-link="budget">Budget</a>
    <a href="#" data-link="safe-to-spend">Safe-to-Spend</a>
    <a href="#" data-link="transactions">Transactions</a>
    <a href="#" data-link="insights">Insights</a>
    <a href="#" data-link="settings">Settings</a>
  `;
  document.body.prepend(nav);
}
