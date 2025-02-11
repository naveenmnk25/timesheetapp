import fetchGraphQLData from "../../api/common/graphqlQueryService.js";
import { GET_TIMESHEET_ENTRY_BY_ID } from "../../graphql/queries/timesheetEntryById.js";

export const fetchTimesheetEntryById = async (entryId) => {
  try {
    const data = await fetchGraphQLData(GET_TIMESHEET_ENTRY_BY_ID, { entryId });
    return data.timesheetEntryById;
  } catch (error) {
    console.error("Error fetching timesheet entry:", error);
    throw new Error("An error occurred while fetching the timesheet entry.");
  }
};