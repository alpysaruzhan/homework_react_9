import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import todoService from "./todoService";

// Начальный state
const initialState = {
  todos: [],
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const getTodos = createAsyncThunk(
  "todos/getAll",
  async (_, thunkAPI) => {
    try {
      return await todoService.getTodos();
    } catch (error) {
      const message =
        error.response && error.response.data && error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTodos.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getTodos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.todos = action.payload;
      })
      .addCase(getTodos.rejected, (state, action) => {
        state.isLoading = false;
        state.message = action.payload;
      });
  },
});

export const { reset } = todoSlice.actions;
export default todoSlice.reducer;
