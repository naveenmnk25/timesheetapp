export const GET_EMPLOYEE_BY_ID = `
  query GetEmployeeById($employeeId: Int!) {
    employeeById(employeeId: $employeeId) {
      active
      departmentID
      email
      employeeID
      firstName
      gender
      lastName
      reportingTo
    }
  }
`;