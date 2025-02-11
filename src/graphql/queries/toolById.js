export const GET_TOOL_BY_ID = `
  query GetToolById($toolId: Int!) {
    toolById(toolId: $toolId) {
      toolCategoryID
      toolID
      toolName
    }
  }
`;