import { axiosInstance } from "../../../api/axiosInstance.js";
import { CREATE_TIMESHEET_ENTRY_MUTATION } from "../../../graphql/mutations/timesheetEntry/createTimesheetEntryMutation.js";
import { manipulateGraphQLData } from "../../../api/common/graphqlMutationService.js";

export const createTimesheetEntry = async (timesheet) => {
  const variables = {
    input: {
      employeeID: timesheet.employeeID,
      departmentID: timesheet.departmentID, 
      entryDate: timesheet.entryDate,
      toolCategoryID: timesheet.toolCategoryID,
      toolID: timesheet.toolID,
      hoursInMinutes: timesheet.hoursInMinutes,
      ticketID: timesheet.ticketID?.toString(),
      taskName: timesheet.taskName,
      status: timesheet.status,
    },
  };

  try {
    const data = await manipulateGraphQLData(
      axiosInstance,
      CREATE_TIMESHEET_ENTRY_MUTATION,
      variables
    );
    return data.createTimesheetEntry || {};
  } catch (error) {
    console.error("Error creating timesheet entry:", error);
    throw new Error("An error occurred while creating the timesheet entry.");
  }
};