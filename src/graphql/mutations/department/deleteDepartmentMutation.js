export const DELETE_DEPARTMENT_MUTATION = `
  mutation DeleteDepartment($id: Int!) {
    deleteDepartment(departmentId: $id) {
      success
    }
  }
`;