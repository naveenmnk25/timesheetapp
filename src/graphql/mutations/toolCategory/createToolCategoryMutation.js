export const CREATE_TOOL_CATEGORY_MUTATION = `
  mutation CreateToolCategory($categoryName: String!) {
    createToolCategory(categoryName: $categoryName) {
      toolCategoryID
      categoryName
    }
  }
`;