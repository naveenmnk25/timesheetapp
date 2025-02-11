import fetchGraphQLData from "../../api/common/graphqlQueryService.js";
import { GET_TOOL_CATEGORIES } from "../../graphql/queries/toolCategories.js";

export const fetchToolCategories = async () => {
  try {
    const data = await fetchGraphQLData(GET_TOOL_CATEGORIES);
    return data.allToolCategories || [];
  } catch (error) {
    console.error("Error fetching tool categories:", error);
    throw new Error("An error occurred while fetching tool categories.");
  }
};