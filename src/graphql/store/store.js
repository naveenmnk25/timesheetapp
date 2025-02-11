import { configureStore } from '@reduxjs/toolkit';
import toolCategoryReducer from '../../features/toolCategorySlice';
import toolReducer from '../../features/toolSlice';
import employeeReducer from '../../features/employeeSlice';
import timesheetEntryReducer from '../../features/timesheetSlice';
import departmentReducer from '../../features/departmentSlice';

const store = configureStore({
  reducer: {
    toolCategories: toolCategoryReducer,
    tools: toolReducer,
    employees: employeeReducer,
    timesheetEntries: timesheetEntryReducer,
    departments: departmentReducer,
  },
});

export default store;