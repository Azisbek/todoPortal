import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "./todosSlice";
import { modalSlice } from "./modalSlice";

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
    modal: modalSlice.reducer,
  },
});
