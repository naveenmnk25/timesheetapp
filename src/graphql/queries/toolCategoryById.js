export const GET_TOOL_CATEGORY_BY_ID = `
  query GetToolCategoryById($toolCategoryId: Int!) {
    toolCategoryById(toolCategoryId: $toolCategoryId) {
      categoryName
      toolCategoryID
    }
  }
`;