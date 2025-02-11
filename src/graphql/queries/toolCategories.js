export const GET_TOOL_CATEGORIES = `
  query GetAllToolCategories {
    allToolCategories {
      categoryName
      toolCategoryID
    }
  }
`;