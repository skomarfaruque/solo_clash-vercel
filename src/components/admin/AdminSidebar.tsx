"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

interface NavItem {
  label: string;
  href: string;
  icon: string;
}

const NAV_ITEMS: NavItem[] = [
  {
    label: "Dashboard",
    href: "/admin/dashboard",
    icon: "📊",
  },
  {
    label: "Subscription Plans",
    href: "/admin/dashboard/plans",
    icon: "🎫",
  },
  {
    label: "Countries",
    href: "/admin/dashboard/countries",
    icon: "🌍",
  },
  {
    label: "Users",
    href: "/admin/dashboard/users",
    icon: "👥",
  },
  {
    label: "Wheel Items",
    href: "/admin/dashboard/wheel-items",
    icon: "🎡",
  },
  {
    label: "Affiliate",
    href: "/admin/dashboard/affiliate",
    icon: "🤝",
  },
  {
    label: "Reports",
    href: "/admin/dashboard/reports",
    icon: "📈",
  },
  {
    label: "Settings",
    href: "/admin/dashboard/settings",
    icon: "⚙️",
  },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminRefreshToken");
    localStorage.removeItem("adminUser");
    document.cookie =
      "adminToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    document.cookie =
      "adminRefreshToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    router.push("/admin");
  };

  return (
    <aside
      style={{
        width: isCollapsed ? "80px" : "250px",
        height: "100vh",
        backgroundColor: "#030303",
        borderRight: "1px solid #2BB6DD",
        display: "flex",
        flexDirection: "column",
        transition: "width 0.3s ease",
        padding: "20px 0",
        overflowY: "auto",
      }}
    >
      {/* Header */}
      <div style={{ padding: "0 20px", marginBottom: "30px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "10px",
          }}
        >
          {!isCollapsed && (
            <h2
              style={{
                color: "#2BB6DD",
                fontSize: "18px",
                fontWeight: "700",
                margin: "0",
              }}
            >
              Admin
            </h2>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            style={{
              background: "none",
              border: "none",
              color: "#2BB6DD",
              fontSize: "20px",
              cursor: "pointer",
              padding: "5px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            title={isCollapsed ? "Expand" : "Collapse"}
          >
            {isCollapsed ? "→" : "←"}
          </button>
        </div>
      </div>

      {/* Navigation Items */}
      <nav style={{ flex: 1 }}>
        <ul
          style={{
            listStyle: "none",
            padding: "0",
            margin: "0",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "15px",
                    padding: "12px 20px",
                    color: isActive ? "#030303" : "#FFFFFF",
                    backgroundColor: isActive ? "#2BB6DD" : "transparent",
                    textDecoration: "none",
                    fontWeight: isActive ? "600" : "400",
                    transition: "all 0.2s ease",
                    borderLeft: isActive
                      ? "4px solid #2BB6DD"
                      : "4px solid transparent",
                    fontSize: "14px",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor =
                        "rgba(43, 182, 221, 0.1)";
                      e.currentTarget.style.borderLeftColor = "#2BB6DD";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.borderLeftColor = "transparent";
                    }
                  }}
                >
                  <span style={{ fontSize: "18px", minWidth: "24px" }}>
                    {item.icon}
                  </span>
                  {!isCollapsed && <span>{item.label}</span>}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Logout Button */}
      <div
        style={{
          padding: "0 20px",
          borderTop: "1px solid rgba(43, 182, 221, 0.2)",
        }}
      >
        <button
          onClick={handleLogout}
          style={{
            width: "100%",
            padding: "12px 15px",
            marginTop: "20px",
            backgroundColor: "transparent",
            color: "#FFFFFF",
            border: "1px solid #2BB6DD",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: "500",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#2BB6DD";
            e.currentTarget.style.color = "#030303";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.color = "#FFFFFF";
          }}
          title={isCollapsed ? "Logout" : ""}
        >
          {isCollapsed ? "🚪" : "Logout"}
        </button>
      </div>
    </aside>
  );
}
