import { configureStore } from "@reduxjs/toolkit";
import JobSectionSlice from "./Redux/JobSectionSlice";

const store = configureStore({
  reducer: {
    Section: JobSectionSlice,
  },
});

export default store;
