export const CREATE_TOOL_MUTATION = `
  mutation CreateTool($input: ToolDtoInput!) {
    createTool(toolDto: $input) {
      toolID
      toolName
      toolCategoryID
    }
  }
`;