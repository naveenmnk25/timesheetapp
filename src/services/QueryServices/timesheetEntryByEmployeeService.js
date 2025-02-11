import fetchGraphQLData from "../../api/common/graphqlQueryService.js";
import { GET_TIMESHEET_ENTRIES_BY_EMPLOYEE } from "../../graphql/queries/timesheetEntryByEmployee.js";

export const fetchTimesheetEntriesByEmployee = async (employeeId) => {
  try {
    const data = await fetchGraphQLData(GET_TIMESHEET_ENTRIES_BY_EMPLOYEE, {
      employeeId,
    });
    return data.timesheetEntriesByEmployee || [];
  } catch (error) {
    console.error("Error fetching timesheet entry:", error);
    throw new Error("An error occurred while fetching the timesheet entry.");
  }
};