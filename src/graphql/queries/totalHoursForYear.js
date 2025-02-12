export const GET_TOTAL_HOURS_FOR_YEAR = `
  query GetTotalHoursForYear($employeeId: Int!, $year: Int) {
    totalHoursForYear(employeeId: $employeeId, year: $year)
  }
`;