import { createSlice } from "@reduxjs/toolkit";

export const snackbarSlice = createSlice({
  name: "snackbar",
  initialState: {
    value: "",
  },
  reducers: {
    showMessage: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { showMessage } = snackbarSlice.actions;
export default snackbarSlice.reducer;
