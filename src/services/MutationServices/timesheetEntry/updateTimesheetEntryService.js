import { axiosInstance } from "../../../api/axiosInstance.js";
import { UPDATE_TIMESHEET_ENTRY_MUTATION } from "../../../graphql/mutations/timesheetEntry/updateTimesheetEntryMutation.js";
import { manipulateGraphQLData } from "../../../api/common/graphqlMutationService.js";

export const updateTimesheetEntry = async (entryId, timesheetEntry) => {
  const variables = {
    id: entryId, 
    input: {
      employeeID: timesheetEntry.employeeID,
      departmentID: timesheetEntry.departmentID,
      entryDate: timesheetEntry.entryDate,
      hoursInMinutes: timesheetEntry.hoursInMinutes,
      status: timesheetEntry.status,
      ticketID: timesheetEntry.ticketID,
      toolCategoryID: timesheetEntry.toolCategoryID,
      updatedDate: new Date().toISOString(),
      toolID: timesheetEntry.toolID,
      createdDate: timesheetEntry.createdDate,
      departmentName: timesheetEntry.departmentName,
      employeeName: timesheetEntry.employeeName,
      taskName: timesheetEntry.taskName,
      toolCategoryName: timesheetEntry.toolCategoryName,
      toolName: timesheetEntry.toolName,
    },
  };

  try {
    const data = await manipulateGraphQLData(
      axiosInstance,
      UPDATE_TIMESHEET_ENTRY_MUTATION,
      variables
    );
    return data.updateTimesheetEntry;
  } catch (error) {
    console.error("Error updating timesheet entry:", error);
    throw new Error("An error occurred while updating the timesheet entry.");
  }
};