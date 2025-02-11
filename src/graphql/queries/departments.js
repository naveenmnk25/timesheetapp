export const GET_ALL_DEPARTMENTS = `
  query GetAllDepartments {
    allDepartments {
      departmentID
      departmentName
      reportingTo
    }
  }
`;