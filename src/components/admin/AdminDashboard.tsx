"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface User {
  id: string;
  email: string;
  name?: string;
}

export default function AdminDashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check if user data is available
    const userStr = localStorage.getItem("adminUser");

    if (userStr) {
      try {
        const userData = JSON.parse(userStr);
        setUser(userData);
      } catch (err) {
        console.error("Failed to parse user data:", err);
      }
    }

    setLoading(false);
  }, []);

  const handleLogout = () => {
    // Clear localStorage
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminUser");

    // Clear cookie
    document.cookie =
      "adminToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";

    // Redirect to login
    router.push("/admin");
  };

  if (loading) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ backgroundColor: "#030303" }}
      >
        <div style={{ color: "#FFFFFF", fontSize: "18px" }}>Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#030303" }}>
      {/* Header/Navbar */}
      <header
        style={{
          backgroundColor: "#1a1a1a",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
          padding: "16px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className="flex items-center gap-3">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={40}
            height={40}
            className="w-10 h-10"
          />
          <h1 style={{ color: "#FFFFFF", fontSize: "24px", fontWeight: 600 }}>
            Admin Dashboard
          </h1>
        </div>

        <div className="flex items-center gap-4">
          <div style={{ color: "#FFFFFF" }}>
            <p style={{ fontSize: "14px", margin: 0 }}>
              Welcome, {user?.name || user?.email}
            </p>
          </div>
          <button
            onClick={handleLogout}
            style={{
              padding: "8px 16px",
              backgroundColor: "#ff4444",
              color: "#FFFFFF",
              border: "none",
              borderRadius: "6px",
              fontSize: "14px",
              fontWeight: 500,
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                "#cc0000";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                "#ff4444";
            }}
          >
            Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ padding: "24px" }}>
        {/* Welcome Section */}
        <div
          style={{
            background: "#1a1a1a",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "12px",
            padding: "24px",
            marginBottom: "24px",
          }}
        >
          <h2
            style={{
              color: "#FFFFFF",
              fontSize: "28px",
              fontWeight: 600,
              margin: "0 0 8px 0",
            }}
          >
            Welcome back!
          </h2>
          <p
            style={{
              color: "rgba(255, 255, 255, 0.6)",
              fontSize: "16px",
              margin: 0,
            }}
          >
            Here&apos;s what&apos;s happening with your platform today.
          </p>
        </div>

        {/* Stats Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          {/* Stat Card 1 */}
          <div
            style={{
              background: "#1a1a1a",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "12px",
              padding: "20px",
            }}
          >
            <p
              style={{
                color: "rgba(255, 255, 255, 0.6)",
                fontSize: "14px",
                margin: "0 0 8px 0",
              }}
            >
              Total Users
            </p>
            <h3
              style={{
                color: "#2BB6DD",
                fontSize: "32px",
                fontWeight: 600,
                margin: 0,
              }}
            >
              0
            </h3>
          </div>

          {/* Stat Card 2 */}
          <div
            style={{
              background: "#1a1a1a",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "12px",
              padding: "20px",
            }}
          >
            <p
              style={{
                color: "rgba(255, 255, 255, 0.6)",
                fontSize: "14px",
                margin: "0 0 8px 0",
              }}
            >
              Total Transactions
            </p>
            <h3
              style={{
                color: "#2BB6DD",
                fontSize: "32px",
                fontWeight: 600,
                margin: 0,
              }}
            >
              0
            </h3>
          </div>

          {/* Stat Card 3 */}
          <div
            style={{
              background: "#1a1a1a",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "12px",
              padding: "20px",
            }}
          >
            <p
              style={{
                color: "rgba(255, 255, 255, 0.6)",
                fontSize: "14px",
                margin: "0 0 8px 0",
              }}
            >
              Revenue
            </p>
            <h3
              style={{
                color: "#2BB6DD",
                fontSize: "32px",
                fontWeight: 600,
                margin: 0,
              }}
            >
              $0
            </h3>
          </div>
        </div>

        {/* Quick Actions */}
        <div
          style={{
            background: "#1a1a1a",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "12px",
            padding: "24px",
          }}
        >
          <h3
            style={{
              color: "#FFFFFF",
              fontSize: "20px",
              fontWeight: 600,
              margin: "0 0 16px 0",
            }}
          >
            Quick Actions
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
              gap: "12px",
            }}
          >
            <button
              style={{
                padding: "12px",
                backgroundColor: "#2BB6DD",
                color: "#030303",
                border: "none",
                borderRadius: "8px",
                fontSize: "14px",
                fontWeight: 600,
                cursor: "pointer",
                transition: "opacity 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.opacity = "0.8";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.opacity = "1";
              }}
            >
              Manage Users
            </button>
            <button
              style={{
                padding: "12px",
                backgroundColor: "#2BB6DD",
                color: "#030303",
                border: "none",
                borderRadius: "8px",
                fontSize: "14px",
                fontWeight: 600,
                cursor: "pointer",
                transition: "opacity 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.opacity = "0.8";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.opacity = "1";
              }}
            >
              View Reports
            </button>
            <button
              style={{
                padding: "12px",
                backgroundColor: "#2BB6DD",
                color: "#030303",
                border: "none",
                borderRadius: "8px",
                fontSize: "14px",
                fontWeight: 600,
                cursor: "pointer",
                transition: "opacity 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.opacity = "0.8";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.opacity = "1";
              }}
            >
              Settings
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
