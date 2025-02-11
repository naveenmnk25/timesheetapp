import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllTimesheetEntries } from "../services/QueryServices/timesheetService";
import { fetchTimesheetEntriesByEmployee } from "../services/QueryServices/timesheetEntryByEmployeeService";
import { fetchTimesheetEntriesForToday } from "../services/QueryServices/timesheetEntryForTodayService";

export const getAllTimesheetEntries = createAsyncThunk(
    "timesheet/getAllTimesheetEntries",
    async () => await fetchAllTimesheetEntries()
);

export const getTimesheetEntriesByEmployee = createAsyncThunk(
  "timesheet/getTimesheetEntriesByEmployee",
  async (employeeId) => await fetchTimesheetEntriesByEmployee(employeeId)
);

export const getTimesheetEntriesForToday = createAsyncThunk(
  "timesheet/getTimesheetEntriesForToday",
  async (employeeId) => await fetchTimesheetEntriesForToday(employeeId)
);

const timesheetSlice = createSlice({
  name: "timesheet",
  initialState: {
    timesheetEntries: [],
    timesheetEntriesByEmployee: [],
    timesheetEntriesForToday: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllTimesheetEntries.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllTimesheetEntries.fulfilled, (state, action) => {
        state.loading = false;
        state.timesheetEntries = action.payload;
      })
      .addCase(getAllTimesheetEntries.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getTimesheetEntriesByEmployee.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTimesheetEntriesByEmployee.fulfilled, (state, action) => {
        state.loading = false;
        state.timesheetEntriesByEmployee = action.payload;
      })
      .addCase(getTimesheetEntriesByEmployee.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getTimesheetEntriesForToday.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTimesheetEntriesForToday.fulfilled, (state, action) => {
        state.loading = false;
        state.timesheetEntriesForToday = action.payload;
      })
      .addCase(getTimesheetEntriesForToday.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default timesheetSlice.reducer;