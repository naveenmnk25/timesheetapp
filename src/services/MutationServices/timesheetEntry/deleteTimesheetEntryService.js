import { axiosInstance } from "../../../api/axiosInstance.js";
import { DELETE_TIMESHEET_ENTRY_MUTATION } from "../../../graphql/mutations/timesheetEntry/deleteTimesheetEntryMutation.js";
import { manipulateGraphQLData } from "../../../api/common/graphqlMutationService.js";

export const deleteTimesheetEntry = async (id) => {
  const variables = { id };
  try {
    const data = await manipulateGraphQLData(
      axiosInstance,
      DELETE_TIMESHEET_ENTRY_MUTATION,
      variables
    );
    return data.deleteTimesheetEntry; 
  } catch (error) {
    console.error("Error in deleteTimesheetEntry:", error);
    throw new Error("An error occurred while deleting the timesheet entry.");
  }
};