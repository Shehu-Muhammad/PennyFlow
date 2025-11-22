export function calculateSTS(incomeArr, budgetArr) {
  const totalIncome = incomeArr.reduce((a, b) => a + b.amount, 0);
  const totalBudget = budgetArr.reduce((a, b) => a + b.amount, 0);

  return totalIncome - totalBudget;
}
