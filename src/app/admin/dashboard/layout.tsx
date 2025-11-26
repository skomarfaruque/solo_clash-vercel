import type { Metadata } from "next";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminHeader from "@/components/admin/AdminHeader";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Admin dashboard and management",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <div
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          height: "100vh",
          zIndex: 50,
        }}
      >
        <AdminSidebar />
      </div>
      <main
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          marginLeft: "250px",
        }}
      >
        <div style={{ position: "sticky", top: 0, zIndex: 40 }}>
          <AdminHeader />
        </div>
        <div style={{ flex: 1, overflowY: "auto" }}>{children}</div>
      </main>
    </div>
  );
}
