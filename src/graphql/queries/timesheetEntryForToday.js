export const GET_TIMESHEET_ENTRIES_FOR_TODAY = `
  query GetTimesheetEntriesForToday($employeeId: Int!) {
    timesheetEntriesForToday(employeeId: $employeeId) {
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