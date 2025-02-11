export const GET_ALL_TIMESHEET_ENTRIES = `
  query GetAllTimesheetEntries {
    allTimesheetEntries {
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