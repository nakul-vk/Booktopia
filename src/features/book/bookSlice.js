import { createSlice } from "@reduxjs/toolkit";

export const bookSlice = createSlice({
  name: "book",
  initialState: {
    value: "The brothers Karamazov",
  },
  reducers: {
    change: (state) => {
      state.value = "To kill a mocking bird";
    },
  },
});

export const { change } = bookSlice.actions;
export default bookSlice.reducer;
