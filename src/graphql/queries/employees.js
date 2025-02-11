export const GET_ALL_EMPLOYEES = `
  query GetAllEmployees {
    allEmployees {
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