import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchTasks } from "@/lib/api";

interface Task {
  id: string;
  title: string;
  img?: string;
  progress: number;
  time: string;
  description: string;
}

const initialState: { tasks: Task[]; loading: boolean; error: string | null } = {
  tasks: [],
  loading: false,
  error: null,
};




const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTasks.fulfilled, (state, action: PayloadAction<Task[]>) => {
        state.loading = false;
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "An error occurred";
      });
  },
});

export const { addTask } = tasksSlice.actions;
export default tasksSlice.reducer;
