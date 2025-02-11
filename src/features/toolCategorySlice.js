import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchToolCategories } from "../services/QueryServices/toolCategoryService";

export const getToolCategories = createAsyncThunk(
    "toolCategories/getToolCategories",
    async () => await fetchToolCategories()
);

const toolCategorySlice = createSlice({
  name: "toolCategories",
  initialState: {
    toolCategories: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getToolCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getToolCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.toolCategories = action.payload;
      })
      .addCase(getToolCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default toolCategorySlice.reducer;