export const DELETE_TIMESHEET_ENTRY_MUTATION = `
  mutation DeleteTimesheetEntry($id: Int!) {
    deleteTimesheetEntry(entryId: $id)
  }
`;