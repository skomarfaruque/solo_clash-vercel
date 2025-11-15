"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

interface User {
  id: string;
  email: string;
  name?: string;
}

const PAGE_TITLES: Record<string, string> = {
  "/admin/dashboard": "Dashboard",
  "/admin/dashboard/plans": "Subscription Plans",
  "/admin/dashboard/countries": "Countries",
  "/admin/dashboard/users": "Users",
  "/admin/dashboard/reports": "Reports",
  "/admin/dashboard/settings": "Settings",
};

export default function AdminHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const pageTitle = PAGE_TITLES[pathname] || "Admin Dashboard";

  useEffect(() => {
    const userStr = localStorage.getItem("adminUser");
    if (userStr) {
      try {
        const userData = JSON.parse(userStr);
        setUser(userData);
      } catch (err) {
        console.error("Failed to parse user data:", err);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminUser");
    document.cookie =
      "adminToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    router.push("/admin");
  };

  return (
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
        <div
          style={{
            width: "40px",
            height: "40px",
            backgroundColor: "#2BB6DD",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "18px",
            fontWeight: "bold",
            color: "#030303",
          }}
        >
          SC
        </div>
        <h1
          style={{
            color: "#FFFFFF",
            fontSize: "24px",
            fontWeight: 600,
            margin: 0,
          }}
        >
          {pageTitle}
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
  );
}
