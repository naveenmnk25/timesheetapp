import fetchGraphQLData from "../../api/common/graphqlQueryService.js";
import { GET_TOOLS_BY_CATEGORY } from "../../graphql/queries/toolsByCategory.js";

export const fetchToolsByCategory = async (categoryId) => {
  try {
    const data = await fetchGraphQLData(GET_TOOLS_BY_CATEGORY, { categoryId });
    return data.toolsByCategory || [];
  } catch (error) {
    console.error("Error fetching tools by category:", error);
    throw new Error("An error occurred while fetching tools by category.");
  }
};