"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL ||
  "https://solo-clash-backend.vercel.app/api/v1";

interface User {
  id: string;
  email: string;
  user_name: string;
  first_name: string;
  last_name: string;
  status: string;
}

interface Product {
  id: number;
  subscription_name: string;
  subscription_value: string;
  monthly_price: string;
  profit_target: string;
}

interface StripePayment {
  user_id: string;
  users: User;
  subscription_name: string;
  amount_paid: string;
  env: string;
  product_id: string;
  products: Product;
}

export default function StripePaymentsSection() {
  const [payments, setPayments] = useState<StripePayment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        setLoading(true);
        setError(null);

        const token = localStorage.getItem("adminToken");
        if (!token) {
          router.push("/admin");
          return;
        }

        let response = await fetch(`${API_BASE_URL}/stripe-payment`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        // Handle token refresh if expired
        if (response.status === 401) {
          const { refreshAccessToken } = await import("@/utils/api");
          const newToken = await refreshAccessToken();

          if (!newToken) {
            router.push("/admin");
            return;
          }

          response = await fetch(`${API_BASE_URL}/stripe-payment`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${newToken}`,
            },
          });
        }

        if (!response.ok) {
          throw new Error(`API Error: ${response.status}`);
        }

        const data = await response.json();
        setPayments(data.data?.items || []);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to fetch payments"
        );
        console.error("Error fetching payments:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPayments();
  }, [router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-400">Loading payments...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 bg-red-900/20 border border-red-500 rounded-lg">
        <p className="text-red-400">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white mb-2">Stripe Payments</h2>
        <p className="text-gray-400">Total Payments: {payments.length}</p>
      </div>

      {payments.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-400">No payments found</p>
        </div>
      ) : (
        <div className="space-y-2">
          {/* Header Row */}
          <div className="px-4 py-3 bg-gray-950 border border-gray-700 rounded-lg flex items-center gap-4">
            <span className="text-gray-500 text-sm w-8">#</span>
            <div className="flex-1 grid grid-cols-5 gap-4">
              <div>
                <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider">
                  Email / Name
                </p>
              </div>
              <div>
                <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider">
                  Product
                </p>
              </div>
              <div>
                <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider">
                  Subscription
                </p>
              </div>
              <div>
                <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider">
                  Amount
                </p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider">
                  Status
                </p>
              </div>
            </div>
          </div>

          {payments.map((payment, index) => (
            <div
              key={index}
              className="border border-gray-700 rounded-lg overflow-hidden"
            >
              {/* Row Header */}
              <button
                onClick={() =>
                  setExpandedIndex(expandedIndex === index ? null : index)
                }
                className="w-full px-4 py-3 bg-gray-900 hover:bg-gray-800 transition flex items-center justify-between text-left cursor-pointer"
              >
                <div className="flex items-center gap-4 flex-1">
                  <span className="text-gray-400 text-sm">{index + 1}</span>
                  <div className="flex-1 grid grid-cols-5 gap-4">
                    <div>
                      <p className="text-white text-sm">
                        {payment.users?.email || "N/A"}
                      </p>
                      <p className="text-gray-400 text-xs">
                        {payment.users?.first_name} {payment.users?.last_name}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm">
                        {payment.products?.subscription_name || "N/A"}
                      </p>
                    </div>
                    <div>
                      <p className="text-white text-sm">
                        {payment.subscription_name}
                      </p>
                    </div>
                    <div>
                      <p className="text-orange-400 font-semibold text-sm">
                        ${(Number(payment.amount_paid) / 100).toFixed(2)}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-900/30 text-green-400">
                        {payment.users?.status || "N/A"}
                      </span>
                      <svg
                        className={`w-5 h-5 text-gray-400 transition-transform ${
                          expandedIndex === index ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </button>

              {/* Expanded Details */}
              {expandedIndex === index && (
                <div className="bg-gray-800/50 px-4 py-4 border-t border-gray-700">
                  <div className="grid grid-cols-2 gap-6">
                    {/* User Information */}
                    <div>
                      <h4 className="font-semibold text-white mb-3 text-sm">
                        User Information
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div>
                          <p className="text-gray-400">User ID</p>
                          <p className="text-white break-all">
                            {payment.user_id}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-400">Email</p>
                          <p className="text-white">{payment.users?.email}</p>
                        </div>
                        <div>
                          <p className="text-gray-400">Name</p>
                          <p className="text-white">
                            {payment.users?.first_name}{" "}
                            {payment.users?.last_name}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-400">Username</p>
                          <p className="text-white">
                            {payment.users?.user_name}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-400">Status</p>
                          <p className="text-white">{payment.users?.status}</p>
                        </div>
                      </div>
                    </div>

                    {/* Product Information */}
                    <div>
                      <h4 className="font-semibold text-white mb-3 text-sm">
                        Product Information
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div>
                          <p className="text-gray-400">Product ID</p>
                          <p className="text-white">{payment.product_id}</p>
                        </div>
                        <div>
                          <p className="text-gray-400">Product Name</p>
                          <p className="text-white">
                            {payment.products?.subscription_name}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-400">Account Size</p>
                          <p className="text-orange-400 font-semibold">
                            $
                            {Number(
                              payment.products?.subscription_value
                            ).toLocaleString()}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-400">Monthly Price</p>
                          <p className="text-white">
                            $
                            {Number(payment.products?.monthly_price).toFixed(2)}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-400">Profit Target</p>
                          <p className="text-white">
                            $
                            {Number(
                              payment.products?.profit_target
                            ).toLocaleString()}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Payment Information */}
                    <div>
                      <h4 className="font-semibold text-white mb-3 text-sm">
                        Payment Information
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div>
                          <p className="text-gray-400">Amount Paid</p>
                          <p className="text-orange-400 font-bold text-lg">
                            ${(Number(payment.amount_paid) / 100).toFixed(2)}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-400">Subscription Name</p>
                          <p className="text-white">
                            {payment.subscription_name}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-400">Environment</p>
                          <p className="text-white uppercase">{payment.env}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
