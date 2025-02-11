export const UPDATE_TOOL_CATEGORY_MUTATION = `
  mutation UpdateToolCategory($id: Int!, $categoryName: String!) {
    updateToolCategory(id: $id, categoryName: $categoryName) {
      toolCategoryID
      categoryName
    }
  }
`;