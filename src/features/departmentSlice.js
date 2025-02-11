import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllDepartments } from "../services/QueryServices/departmentService";

export const getAllDepartments = createAsyncThunk(
  "departments/getAllDepartments",
  async () => await fetchAllDepartments()
);

const departmentSlice = createSlice({
  name: "departments",
  initialState: {
    departments: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllDepartments.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllDepartments.fulfilled, (state, action) => {
        state.loading = false;
        state.departments = action.payload;
      })
      .addCase(getAllDepartments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default departmentSlice.reducer;