export const GET_DEPARTMENT_BY_ID = `
  query GetDepartmentById($departmentId: Int!) {
    departmentById(departmentId: $departmentId) {
      departmentID
      departmentName
      reportingTo
    }
  }
`;