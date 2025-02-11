import { GET_ALL_TIMESHEET_ENTRIES } from "../../graphql/queries/timesheetEntries.js";
import fetchGraphQLData from "../../api/common/graphqlQueryService.js";

export const fetchAllTimesheetEntries = async () => {
  try {
    const data = await fetchGraphQLData(GET_ALL_TIMESHEET_ENTRIES);
    return data.timesheetEntries || [];
  } catch (error) {
    console.error("Error fetching all timesheet entries:", error);
    throw new Error("An error occurred while fetching all timesheet entries.");
  }
};