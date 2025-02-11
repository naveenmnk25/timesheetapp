import { GET_ALL_TOOLS } from "../../graphql/queries/tools.js";
import fetchGraphQLData from "../../api/common/graphqlQueryService.js";

export const fetchAllTools = async () => {
  try {
    const data = await fetchGraphQLData(GET_ALL_TOOLS);
    return data.allTools || [];
  } catch (error) {
    console.error("Error fetching all tools:", error);
    throw new Error("An error occurred while fetching all tools.");
  }
};