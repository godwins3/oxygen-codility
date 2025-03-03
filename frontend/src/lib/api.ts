const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";

// export const signIn = async (email: string, password: string) => {
//   const res = await fetch(`${API_BASE_URL}/auth/login`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ email, password }),
//     credentials: "include",
//   });
//   return res.json();
// };
export async function signIn(email: string, password: string) {
    const formData = new URLSearchParams();
    formData.append("username", email); // OAuth2PasswordRequestForm uses "username"
    formData.append("password", password);
  
    const res = await fetch("http://localhost:8000/api/auth/login", {
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
