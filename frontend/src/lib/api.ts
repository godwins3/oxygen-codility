import { createAsyncThunk } from "@reduxjs/toolkit";

// const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function signIn(email: string, password: string) {
    const formData = new URLSearchParams();
    formData.append("username", email); // OAuth2PasswordRequestForm uses "username"
    formData.append("password", password);
  
    const res = await fetch(`${API_BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded", // REQUIRED!
      },
      body: formData.toString(), // Convert FormData to URL-encoded string
    });
  
    if (!res.ok) {
      throw new Error("Login failed");
    }
  
    return res.json();
}

export const signUp = async (email: string, password: string) => {
  const res = await fetch(`${API_BASE_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  return res.json();
};

export const resetPassword = async (email: string) => {
  const res = await fetch(`${API_BASE_URL}/auth/reset-password`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });
  return res.json();
};

// Async thunk to fetch tasks from API
export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async (_, { getState }) => {
  const state: any = getState();
  const token = state.auth?.token; // Ensure you have the correct path to the token
  console.log(state);

  if (!token) {
    throw new Error("Unauthorized: No token found");
  }

  const response = await fetch(`${API_BASE_URL}/tasks`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) throw new Error("Failed to fetch tasks");

  return await response.json();
});