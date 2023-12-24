import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../helpers/constants";

export const modalThunk = createAsyncThunk(
  "modal/modalThunk",
  async function (id, api) {
    try {
      const response = await fetch(`${BASE_URL}/todos/${id}.json`);
      if (!response.ok) {
        throw new Error("No modal or server error");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Ошибка при получении данных:", error);
      return error.message;
    }
  }
);

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isOpen: false,
    data: null,
  },
  reducers: {
    openModal(state, action) {
      state.isOpen = true;
      state.data = action.payload;
    },
    closeModal(state, action) {
      state.isOpen = false;
      state.data = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
