import { createSlice } from "@reduxjs/toolkit";

const JobSectionSlice = createSlice({
  name: "Section",
  initialState: {
    sections: {},
  },
  reducers: {
    UpdateSection: (state, action) => {
      state.sections = { ...state.sections, ...action.payload };
    },
  },
});

export const { UpdateSection } = JobSectionSlice.actions;
export default JobSectionSlice.reducer;
