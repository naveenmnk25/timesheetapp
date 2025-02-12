import fetchGraphQLData from "../../api/common/graphqlQueryService.js";
import { GET_TOTAL_HOURS_FOR_YEAR } from "../../graphql/queries/totalHoursForYear.js";

export const fetchTotalHoursForYear = async (employeeId, year) => {
  try {
    const data = await fetchGraphQLData(GET_TOTAL_HOURS_FOR_YEAR, { employeeId, year });
    return data.totalHoursForYear || 0;
  } catch (error) {
    console.error("Error fetching total hours for the year:", error);
    throw new Error("An error occurred while fetching total hours for the year.");
  }
};