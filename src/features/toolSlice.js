import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllTools } from "../services/QueryServices/toolService";
import { fetchToolsByCategory } from "../services/QueryServices/toolsByCategoryService";

export const getAllTools = createAsyncThunk(
  "tools/getAllTools",
  async () => await fetchAllTools()
);

export const getToolsByCategory = createAsyncThunk(
  "tools/getToolsByCategory",
  async (categoryId) => await fetchToolsByCategory(categoryId)
);

const toolSlice = createSlice({
  name: "tools",
  initialState: {
    tools: [],
    toolsByCategory: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllTools.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllTools.fulfilled, (state, action) => {
        state.loading = false;
        state.tools = action.payload;
      })
      .addCase(getAllTools.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getToolsByCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getToolsByCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.toolsByCategory = action.payload;
      })
      .addCase(getToolsByCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default toolSlice.reducer;
