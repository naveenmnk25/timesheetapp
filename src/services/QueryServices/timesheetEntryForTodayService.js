import fetchGraphQLData from "../../api/common/graphqlQueryService.js";
import { GET_TIMESHEET_ENTRIES_FOR_TODAY } from "../../graphql/queries/timesheetEntryForToday.js";

export const fetchTimesheetEntriesForToday = async (employeeId) => {
  try {
    const data = await fetchGraphQLData(GET_TIMESHEET_ENTRIES_FOR_TODAY, { employeeId });
    return data.timesheetEntriesForToday || [];
  } catch (error) {
    console.error("Error fetching timesheet entries for today:", error);
    throw new Error("An error occurred while fetching timesheet entries for today.");
  }
};