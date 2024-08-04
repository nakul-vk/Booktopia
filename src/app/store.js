import { configureStore } from "@reduxjs/toolkit";
import snackbarReducer from "../features/snackbar/snackbarSlice";

export default configureStore({
  reducer: {
    snackbar: snackbarReducer,
  },
});
