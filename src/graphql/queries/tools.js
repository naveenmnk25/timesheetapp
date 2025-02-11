export const GET_ALL_TOOLS = `
  query GetAllTools {
    allTools {
      toolCategoryID
      toolID
      toolName
    }
  }
`;