export const CREATE_EMPLOYEE_MUTATION = `
  mutation CreateEmployee($input: EmployeeDtoInput!) {
    createEmployee(employeeDto: $input) {
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