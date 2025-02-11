export const DELETE_EMPLOYEE_MUTATION = `
  mutation DeleteEmployee($id: Int!) {
    deleteEmployee(employeeId: $id) {
      success
    }
  }
`;