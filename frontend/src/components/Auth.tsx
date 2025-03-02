"use client";

import { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type AuthPage = "signin" | "signup" | "reset";

const AuthPage = ({ page }: { page: AuthPage }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-semibold text-gray-800">
            {page === "signin" ? "Sign In" : page === "signup" ? "Sign Up" : "Reset Password"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <Input
                type="email"
                placeholder="Enter your email"
                className="mt-1 w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                />
              </div>
            )}

            {/* Sign In Button */}
            <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">
              {page === "signin"
                ? "Sign In"
                : page === "signup"
                ? "Create Account"
                : "Send Reset Link"}
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
