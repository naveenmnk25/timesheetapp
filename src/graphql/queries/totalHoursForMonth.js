export const GET_TOTAL_HOURS_FOR_MONTH = `
  query GetTotalHoursForMonth($employeeId: Int!, $year: Int, $month: Int) {
    totalHoursForMonth(employeeId: $employeeId, year: $year, month: $month)
  }
`;