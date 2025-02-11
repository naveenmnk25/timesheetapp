export const CREATE_TIMESHEET_ENTRY_MUTATION = `
  mutation CreateTimesheetEntry($input: TimesheetEntryDtoInput!) {
    createTimesheetEntry(timesheetEntryDto: $input)
  }
`;