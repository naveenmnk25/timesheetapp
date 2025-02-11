import { GET_ALL_DEPARTMENTS } from "../../graphql/queries/departments.js";
import fetchGraphQLData from "../../api/common/graphqlQueryService.js";

export const fetchAllDepartments = async () => {
  try {
    const data = await fetchGraphQLData(GET_ALL_DEPARTMENTS);
    return data.departments || [];
  } catch (error) {
    console.error("Error fetching departments:", error);
    throw new Error("An error occurred while fetching departments.");
  }
};