export const GET_TIMESHEET_ENTRIES_BY_YEAR_AND_MONTH = `
  query GetTimesheetEntriesByYearAndMonth($employeeId: Int!, $year: Int!, $month: Int!) {
    timesheetEntriesByYearAndMonth(employeeId: $employeeId, year: $year, month: $month) {
      createdDate
      departmentID
      departmentName
      employeeID
      employeeName
      entryDate
      entryID
      hoursInMinutes
      status
      taskName
      ticketID
      toolCategoryID
      toolCategoryName
      toolID
      toolName
      updatedDate
    }
  }
`;