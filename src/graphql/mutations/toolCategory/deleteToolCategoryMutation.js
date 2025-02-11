export const DELETE_TOOL_CATEGORY_MUTATION = `
  mutation DeleteToolCategory($id: Int!) {
    deleteToolCategory(toolCategoryId: $id) {
      success
    }
  }
`;