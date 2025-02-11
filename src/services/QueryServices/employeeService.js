import { GET_ALL_EMPLOYEES } from "../../graphql/queries/employees.js";
import fetchGraphQLData from "../../api/common/graphqlQueryService.js";

export const fetchAllEmployees = async () => {
  try {
    const data = await fetchGraphQLData(GET_ALL_EMPLOYEES);
    return data.employees || [];
  } catch (error) {
    console.error("Error fetching employees:", error);
    throw new Error("An error occurred while fetching employees.");
  }
};