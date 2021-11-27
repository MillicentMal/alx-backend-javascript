function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  // using computed property names
  return {
 [`income-${getCurrentYear()}`] = income,
 [`gdp-${getCurrentYear()}`] = gdp,
 [`capita-${getCurrentYear()}`] = capita,
  };

}
