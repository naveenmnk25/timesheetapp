export const DELETE_TOOL_MUTATION = `
  mutation DeleteTool($id: Int!) {
    deleteTool(toolId: $id) {
      success
    }
  }
`;