import { state, loadCategories } from '../state.js';
import Chart from 'https://cdn.jsdelivr.net/npm/chart.js';

async function renderDashboard() {
  const categories = await loadCategories();

  // Dashboard Insights chart
  const ctx = document.getElementById('dashboardChart').getContext('2d');
  const totals = categories.map(cat =>
    state.transactions
      .filter(t => t.category === cat)
      .reduce((sum, t) => sum + t.amount, 0)
  );

  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: categories,
      datasets: [{
        data: totals,
        backgroundColor: ['#ff6384','#36a2eb','#ffcd56','#4bc0c0','#9966ff','#ff9f40','#4caf50','#f44336']
      }]
    },
    options: { responsive: true }
  });
}

renderDashboard();
