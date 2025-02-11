export const UPDATE_EMPLOYEE_MUTATION = `
  mutation UpdateEmployee($id: Int!, $input: EmployeeDtoInput!) {
    updateEmployee(employeeId: $id, employeeDto: $input) {
      employeeID
      firstName
      lastName
      email
      gender
      active
      departmentID
      reportingTo
    }
  }
`;