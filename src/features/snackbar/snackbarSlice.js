import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: "",
  type: "",
  open: false,
};

export const snackbarSlice = createSlice({
  name: "snackbar",
  initialState,
  reducers: {
    showSnackBar: (state, action) => {
      state.message = action.payload.message;
      state.type = action.payload.type;
      state.open = true;
    },
    hideSnackBar: (state) => {
      state.open = false;
    },
  },
});

export const { showSnackBar, hideSnackBar } = snackbarSlice.actions;
export default snackbarSlice.reducer;
