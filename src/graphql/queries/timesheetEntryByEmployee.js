export const GET_TIMESHEET_ENTRIES_BY_EMPLOYEE = `
  query GetTimesheetEntriesByEmployee($employeeId: Int!) {
    timesheetEntriesByEmployee(employeeId: $employeeId) {
      createdDate
      departmentID
      employeeID
      entryDate
      entryID
      hoursInMinutes
      status
      taskName
      ticketID
      toolCategoryID
      toolID
      updatedDate
    }
  }
`;