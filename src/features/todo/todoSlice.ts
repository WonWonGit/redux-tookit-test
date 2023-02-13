import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import * as TodoAPI from "./todoAPI";

export enum TodoStatus {
  INCOMPELETED = "INCOMPELETED",
  COMPELETE = "COMPELETED",
}

export interface ITodoProps {
  id: number;
  todo: string;
  todoStatus: TodoStatus;
}

interface ITodoState {
  value: ITodoProps[];
  status: "idle" | "loading" | "failed";
}

const initialState: ITodoState = {
  value: [],
  status: "idle",
};

export const todoListSelect = (state: RootState) => state.todos.value;

export const fetchTodoList = createAsyncThunk(
  "todo/fetchTodoList",
  async () => {
    const result = await TodoAPI.fetchTodoList();
    return result;
  }
);

export const updateTodoList = createAsyncThunk(
  "todo/updateTodoList",
  async (data: ITodoProps) => {
    const result = await TodoAPI.addTodoList(data);
    return result;
  }
);

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    getTodos: (state, action: PayloadAction<ITodoProps[]>) => {
      state.value = [...state.value, ...action.payload];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodoList.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTodoList.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = [...action.payload];
      })
      .addCase(fetchTodoList.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(updateTodoList.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateTodoList.fulfilled, (state, action) => {
        state.status = "idle";
        state.value.push(action.payload);
      })
      .addCase(updateTodoList.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default todoSlice.reducer;
