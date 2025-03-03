import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

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


// Async thunk to fetch tasks from API
export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async (_, { getState }) => {
  const state: any = getState();
  const token = state.auth?.token; // Ensure you have the correct path to the token
  console.log(state);

  if (!token) {
    throw new Error("Unauthorized: No token found");
  }

  const response = await fetch("http://localhost:8000/api/tasks", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) throw new Error("Failed to fetch tasks");

  return await response.json();
});


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
