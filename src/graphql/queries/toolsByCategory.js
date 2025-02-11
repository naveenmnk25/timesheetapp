export const GET_TOOLS_BY_CATEGORY = `
  query GetToolsByCategory($categoryId: Int!) {
    toolsByCategory(categoryId: $categoryId) {
      toolCategoryID
      toolID
      toolName
    }
  }
`;