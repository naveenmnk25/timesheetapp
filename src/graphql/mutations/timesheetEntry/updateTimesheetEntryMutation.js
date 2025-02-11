export const UPDATE_TIMESHEET_ENTRY_MUTATION = `
  mutation UpdateTimesheetEntry($id: Int!, $input: TimesheetEntryDtoInput!) {
    updateTimesheetEntry(entryId: $id, timesheetEntryDto: $input)
  }
`;