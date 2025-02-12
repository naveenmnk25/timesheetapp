import fetchGraphQLData from "../../api/common/graphqlQueryService.js";
import { GET_TOTAL_HOURS_FOR_MONTH } from "../../graphql/queries/totalHoursForMonth.js";

export const fetchTotalHoursForMonth = async (employeeId, year, month) => {
  try {
    const data = await fetchGraphQLData(GET_TOTAL_HOURS_FOR_MONTH, { employeeId, year, month });
    return data.totalHoursForMonth || 0;
  } catch (error) {
    console.error("Error fetching total hours for the month:", error);
    throw new Error("An error occurred while fetching total hours for the month.");
  }
};