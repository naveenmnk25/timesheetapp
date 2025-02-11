export const GET_TIMESHEET_ENTRY_BY_ID = `
  query GetTimesheetEntryById($entryId: Int!) {
    timesheetEntryById(entryId: $entryId) {
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