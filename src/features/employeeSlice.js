import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllEmployees } from "../services/QueryServices/employeeService";

export const getAllEmployees = createAsyncThunk(
    "employees/getAllEmployees",
    async () => await fetchAllEmployees()
);

const employeeSlice = createSlice({
  name: "employees",
  initialState: {
    employees: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllEmployees.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllEmployees.fulfilled, (state, action) => {
        state.loading = false;
        state.employees = action.payload;
      })
      .addCase(getAllEmployees.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default employeeSlice.reducer;