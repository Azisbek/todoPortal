import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../helpers/constants";

export const getItem = createAsyncThunk(
  "todo/getItem",
  async function (_, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch(`${BASE_URL}/todos.json`);
      if (!response.ok) {
        throw new Error("SERVER ERROR");
      }
      const data = await response.json();
      const transformData = [];
      for (let key in data) {
        transformData.push({
          id: key,
          title: data[key].title,
          date: data[key].date,
          completed: data[key].completed,
        });
      }
      return transformData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const postItem = createAsyncThunk(
  "todo/postItem",
  async function (todo, { rejectWithValue, dispatch }) {
    try {
      const dataTodo = {
        title: todo.title,
        date: todo.date,
        completed: false,
      };
      const response = await fetch(`${BASE_URL}/todos.json`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataTodo),
      });
      if (!response.ok) {
        throw new Error("Error message");
      }
      const data = await response.json();
      console.log(data);
      return { ...dataTodo, id: data.name };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteItem = createAsyncThunk(
  "todo/deleteItem",
  async function (id, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch(`${BASE_URL}/todos/${id}.json`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("no server error or delete error");
      }
      dispatch(deleteFunction(id));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todoData: [],
    status: null,
    error: null,
  },
  reducers: {
    addTodo(state, action) {
      state.todoData = [...state.todoData, action.payload];
    },
    deleteFunction(state, action) {
      state.todoData = state.todoData.filter(
        (todo) => todo.id !== action.payload
      );
    },
  },
  extraReducers(builder) {
    builder.addCase(postItem.pending, (state, action) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(postItem.fulfilled, (state, action) => {
      state.status = "resolved";
      state.error = null;
    });
    builder.addCase(postItem.rejected, (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    });
    builder.addCase(getItem.pending, (state, action) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(getItem.fulfilled, (state, action) => {
      state.status = "resolved";
      state.error = null;
      state.todoData = action.payload;
    });
    builder.addCase(getItem.rejected, (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    });
  },
});

const { deleteFunction } = todoSlice.actions;
