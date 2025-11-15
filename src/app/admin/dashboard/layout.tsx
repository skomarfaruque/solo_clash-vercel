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
      <AdminSidebar />
      <main style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <AdminHeader />
        <div style={{ flex: 1, overflowY: "auto" }}>{children}</div>
      </main>
    </div>
  );
}
