export const CREATE_DEPARTMENT_MUTATION = `
  mutation CreateDepartment($input: DepartmentDtoInput!) {
    createDepartment(departmentDto: $input) {
      departmentID
      departmentName
      reportingTo
    }
  }
`;