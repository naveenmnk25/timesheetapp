export const UPDATE_DEPARTMENT_MUTATION = `
  mutation UpdateDepartment($id: Int!, $input: DepartmentDtoInput!) {
    updateDepartment(id: $id, departmentDto: $input) {
      departmentID
      departmentName
      reportingTo
    }
  }
`;