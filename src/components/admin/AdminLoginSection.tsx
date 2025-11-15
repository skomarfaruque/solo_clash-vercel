"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { authApi } from "@/utils/api";

export default function AdminLoginSection() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Validate input
      if (!email || !password) {
        setError("Email and password are required.");
        setLoading(false);
        return;
      }

      // Call API
      const response = await authApi.login(email, password);

      console.log("Login response:", response);

      // Extract tokens and user data from the response structure
      const accessToken = response.data?.access_token;
      const refreshToken = response.data?.refresh_token;
      const user = response.data?.user;

      if (!accessToken) {
        setError("No token received from server. Please try again.");
        return;
      }

      // Store tokens in localStorage
      localStorage.setItem("adminToken", accessToken);
      localStorage.setItem("adminRefreshToken", refreshToken);
      console.log("Tokens stored in localStorage");

      // Store tokens in cookies with proper formatting
      const expiryDate = new Date();
      expiryDate.setTime(expiryDate.getTime() + 24 * 60 * 60 * 1000); // 24 hours
      document.cookie = `adminToken=${accessToken}; expires=${expiryDate.toUTCString()}; path=/`;
      document.cookie = `adminRefreshToken=${refreshToken}; expires=${expiryDate.toUTCString()}; path=/`;
      console.log("Tokens stored in cookies");

      // Store user data
      if (user) {
        localStorage.setItem("adminUser", JSON.stringify(user));
        console.log("User data stored:", user);
      }

      // Small delay to ensure cookies are set before redirect
      await new Promise((resolve) => setTimeout(resolve, 100));

      // Redirect to dashboard
      router.push("/admin/dashboard");
    } catch (err: unknown) {
      const error = err as { message?: string; status?: number };

      if (error.status === 401) {
        setError("Invalid email or password.");
      } else if (error.status === 404) {
        setError("Login endpoint not found.");
      } else if (error.message?.includes("Network")) {
        setError("Network error. Please check your connection.");
      } else {
        setError(error.message || "An error occurred. Please try again.");
      }

      console.error("Login error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ backgroundColor: "#030303" }}
    >
      <div
        className="w-full max-w-md p-8 rounded-lg"
        style={{
          background: "#1a1a1a",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Image
            src="/logo.svg"
            alt="Admin Logo"
            width={80}
            height={80}
            className="w-20 h-20"
          />
        </div>

        {/* Title */}
        <h1
          className="text-center mb-8"
          style={{
            color: "#FFFFFF",
            fontSize: "28px",
            fontWeight: 600,
            lineHeight: "150%",
          }}
        >
          Admin Login
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              style={{
                display: "block",
                marginBottom: "8px",
                color: "#FFFFFF",
                fontSize: "14px",
                fontWeight: 500,
              }}
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              style={{
                width: "100%",
                padding: "12px",
                fontSize: "14px",
                backgroundColor: "#2a2a2a",
                color: "#FFFFFF",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: "8px",
                outline: "none",
              }}
              className="focus:border-blue-500"
            />
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              style={{
                display: "block",
                marginBottom: "8px",
                color: "#FFFFFF",
                fontSize: "14px",
                fontWeight: 500,
              }}
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              style={{
                width: "100%",
                padding: "12px",
                fontSize: "14px",
                backgroundColor: "#2a2a2a",
                color: "#FFFFFF",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: "8px",
                outline: "none",
              }}
              className="focus:border-blue-500"
            />
          </div>

          {/* Error Message */}
          {error && (
            <div
              style={{
                color: "#ff4444",
                fontSize: "14px",
                padding: "8px",
                backgroundColor: "rgba(255, 68, 68, 0.1)",
                borderRadius: "4px",
              }}
            >
              {error}
            </div>
          )}

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: "#2BB6DD",
              color: "#030303",
              fontSize: "16px",
              fontWeight: 600,
              border: "none",
              borderRadius: "8px",
              cursor: loading ? "not-allowed" : "pointer",
              opacity: loading ? 0.6 : 1,
              transition: "opacity 0.3s ease",
            }}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
