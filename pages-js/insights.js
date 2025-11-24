import { state } from '../state.js';
import Chart from 'https://cdn.jsdelivr.net/npm/chart.js';

const ctx = document.getElementById('insightsChart').getContext('2d');

const categories = state.budget.map(b => b.category);
const amounts = state.budget.map(b => b.amount);

new Chart(ctx, {
  type: 'pie',
  data: {
    labels: categories,
    datasets: [{
      data: amounts,
      backgroundColor: ['#ff6384','#36a2eb','#ffcd56','#4bc0c0']
    }]
  },
  options: {
    responsive: true
  }
});
