"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { loginSuccess } from "@/store/authSlice";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { signIn, signUp, resetPassword } from "@/lib/api";

type AuthPage = "signin" | "signup" | "reset";

const AuthPage = ({ page }: { page: AuthPage }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      let response;
      if (page === "signin") {
        response = await signIn(email, password);
        if (response.access_token) {
          dispatch(loginSuccess(response.access_token));
          router.push("/dashboard");
        }
      } else if (page === "signup") {
        response = await signUp(email, password);
        if (response.success) {
          router.push("/login");
        }
      } else if (page === "reset") {
        response = await resetPassword(email);
        if (response.success) {
          alert("Password reset link sent!");
        }
      }
      if (response.error) {
        setError(response.error);
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-semibold text-gray-800">
            {page === "signin" ? "Sign In" : page === "signup" ? "Sign Up" : "Reset Password"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <Input
                type="email"
                placeholder="Enter your email"
                className="mt-1 w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Password Field (Only for SignIn & SignUp) */}
            {(page === "signin" || page === "signup") && (
              <div>
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  className="mt-1 w-full"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            )}

            {error && <p className="text-red-500 text-sm">{error}</p>}

            {/* Submit Button */}
            <Button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-700" disabled={loading}>
              {loading ? "Processing..." : page === "signin" ? "Sign In" : page === "signup" ? "Create Account" : "Send Reset Link"}
            </Button>
          </form>

          {/* Links */}
          {page === "signin" && (
            <div className="mt-4 text-center text-sm text-gray-600">
              <Link href="/reset-password" className="text-blue-600 hover:underline">
                Forgot Password?
              </Link>
            </div>
          )}

          {page === "signup" && (
            <div className="mt-4 text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link href="/login" className="text-blue-600 hover:underline">
                Sign In
              </Link>
            </div>
          )}

          {page === "signin" && (
            <div className="mt-4 text-center text-sm text-gray-600">
              Don't have an account?{" "}
              <Link href="/register" className="text-blue-600 hover:underline">
                Sign Up
              </Link>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthPage;
