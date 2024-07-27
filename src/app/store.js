import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../features/book/bookSlice";
import snackbarReducer from "../features/snackbar/snackbarSlice";

export default configureStore({
  reducer: {
    book: bookReducer,
    snackbar: snackbarReducer,
  },
});
