export const UPDATE_TOOL_MUTATION = `
  mutation UpdateTool($id: Int!, $input: ToolDtoInput!) {
    updateTool(toolId: $id, toolDto: $input) {
      toolID
      toolName
      toolCategoryID
    }
  }
`;