import StripePaymentsSection from "@/components/admin/StripePaymentsSection";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="p-6 md:p-8">
        <h1 className="text-4xl font-bold text-white mb-8">Admin Dashboard</h1>
        <StripePaymentsSection />
      </div>
    </div>
  );
}
