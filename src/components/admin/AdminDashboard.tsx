"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface User {
  id: string;
  email: string;
  name?: string;
}

interface Subscription {
  id: number;
  program_id: string;
  program_name: string;
  subscription_value: string;
  subscription_name: string;
  monthly_price: string;
  profit_target: string;
  maximum_position: string;
  maximum_loss_limit: string;
  amount: string;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

export default function AdminDashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [formData, setFormData] = useState({
    program_id: "",
    subscription_name: "",
    monthly_price: "",
    profit_target: "",
    maximum_position: "",
    maximum_loss_limit: "",
    amount: "",
  });
  const router = useRouter();

  const fetchSubscriptions = useCallback(async () => {
    try {
      const token = localStorage.getItem("adminToken");
      console.log("Using token:", token);
      const response = await fetch(
        "https://solo-clash-backend.vercel.app/api/v1/subscriptions",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Handle 401 Unauthorized - token might be expired
      if (response.status === 401) {
        console.log("Token expired, attempting to refresh...");
        const { refreshAccessToken } = await import("@/utils/api");
        const newToken = await refreshAccessToken();

        if (!newToken) {
          // Refresh failed, redirect to login
          router.push("/admin");
          return;
        }

        // Retry the request with new token
        const retryResponse = await fetch(
          "https://solo-clash-backend.vercel.app/api/v1/subscriptions",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${newToken}`,
            },
          }
        );

        const data = await retryResponse.json();

        if (data.success && data.data?.items) {
          setSubscriptions(data.data.items);
        } else {
          console.error("Failed to fetch subscriptions:", data.message);
        }
      } else {
        const data = await response.json();

        if (data.success && data.data?.items) {
          setSubscriptions(data.data.items);
        } else {
          console.error("Failed to fetch subscriptions:", data.message);
        }
      }
    } catch (err) {
      console.error("Error fetching subscriptions:", err);
    } finally {
      setLoading(false);
    }
  }, [router]);

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

    // Fetch subscriptions
    fetchSubscriptions();
  }, [fetchSubscriptions]);

  const handleAddSubscription = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormLoading(true);

    try {
      const token = localStorage.getItem("adminToken");

      const response = await fetch(
        "https://solo-clash-backend.vercel.app/api/v1/subscriptions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            program_id: formData.program_id,
            subscription_name: formData.subscription_name,
            monthly_price: formData.monthly_price,
            profit_target: formData.profit_target,
            maximum_position: formData.maximum_position,
            maximum_loss_limit: formData.maximum_loss_limit,
            amount: formData.amount,
          }),
        }
      );

      const data = await response.json();

      if (data.success) {
        // Reset form
        setFormData({
          program_id: "",
          subscription_name: "",
          monthly_price: "",
          profit_target: "",
          maximum_position: "",
          maximum_loss_limit: "",
          amount: "",
        });
        setShowForm(false);
        // Refresh subscriptions
        await fetchSubscriptions();
        alert("Subscription added successfully!");
      } else {
        alert(data.message || "Failed to add subscription");
      }
    } catch (err) {
      console.error("Error adding subscription:", err);
      alert("An error occurred while adding subscription");
    } finally {
      setFormLoading(false);
    }
  };

  const handleDeleteSubscription = async (id: number) => {
    if (!confirm("Are you sure you want to delete this subscription?")) {
      return;
    }

    try {
      const token = localStorage.getItem("adminToken");

      const response = await fetch(
        `https://solo-clash-backend.vercel.app/api/v1/subscriptions/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (data.success) {
        // Refresh subscriptions
        await fetchSubscriptions();
        alert("Subscription deleted successfully!");
      } else {
        alert(data.message || "Failed to delete subscription");
      }
    } catch (err) {
      console.error("Error deleting subscription:", err);
      alert("An error occurred while deleting subscription");
    }
  };

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
        {/* Subscriptions Section */}
        <div
          style={{
            background: "#1a1a1a",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "12px",
            padding: "24px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "16px",
            }}
          >
            <h3
              style={{
                color: "#FFFFFF",
                fontSize: "20px",
                fontWeight: 600,
                margin: 0,
              }}
            >
              Subscriptions
            </h3>
            <button
              onClick={() => setShowForm(!showForm)}
              style={{
                padding: "10px 16px",
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
              {showForm ? "Cancel" : "+ Add New Subscription"}
            </button>
          </div>

          {/* Add Subscription Form */}
          {showForm && (
            <form
              onSubmit={handleAddSubscription}
              style={{
                background: "#2a2a2a",
                padding: "20px",
                borderRadius: "8px",
                marginBottom: "24px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                  gap: "16px",
                  marginBottom: "16px",
                }}
              >
                <div>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "8px",
                      color: "#FFFFFF",
                      fontSize: "14px",
                      fontWeight: 500,
                    }}
                  >
                    Program ID
                  </label>
                  <input
                    type="text"
                    value={formData.program_id}
                    onChange={(e) =>
                      setFormData({ ...formData, program_id: e.target.value })
                    }
                    placeholder="Enter program ID"
                    required
                    style={{
                      width: "100%",
                      padding: "10px",
                      backgroundColor: "#1a1a1a",
                      color: "#FFFFFF",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      borderRadius: "6px",
                      fontSize: "14px",
                      outline: "none",
                      boxSizing: "border-box",
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "8px",
                      color: "#FFFFFF",
                      fontSize: "14px",
                      fontWeight: 500,
                    }}
                  >
                    Subscription Name
                  </label>
                  <input
                    type="text"
                    value={formData.subscription_name}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        subscription_name: e.target.value,
                      })
                    }
                    placeholder="Enter subscription name"
                    required
                    style={{
                      width: "100%",
                      padding: "10px",
                      backgroundColor: "#1a1a1a",
                      color: "#FFFFFF",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      borderRadius: "6px",
                      fontSize: "14px",
                      outline: "none",
                      boxSizing: "border-box",
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "8px",
                      color: "#FFFFFF",
                      fontSize: "14px",
                      fontWeight: 500,
                    }}
                  >
                    Monthly Price
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    value={formData.monthly_price}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        monthly_price: e.target.value,
                      })
                    }
                    placeholder="Enter monthly price"
                    required
                    style={{
                      width: "100%",
                      padding: "10px",
                      backgroundColor: "#1a1a1a",
                      color: "#FFFFFF",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      borderRadius: "6px",
                      fontSize: "14px",
                      outline: "none",
                      boxSizing: "border-box",
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "8px",
                      color: "#FFFFFF",
                      fontSize: "14px",
                      fontWeight: 500,
                    }}
                  >
                    Profit Target
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    value={formData.profit_target}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        profit_target: e.target.value,
                      })
                    }
                    placeholder="Enter profit target"
                    required
                    style={{
                      width: "100%",
                      padding: "10px",
                      backgroundColor: "#1a1a1a",
                      color: "#FFFFFF",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      borderRadius: "6px",
                      fontSize: "14px",
                      outline: "none",
                      boxSizing: "border-box",
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "8px",
                      color: "#FFFFFF",
                      fontSize: "14px",
                      fontWeight: 500,
                    }}
                  >
                    Maximum Position
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    value={formData.maximum_position}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        maximum_position: e.target.value,
                      })
                    }
                    placeholder="Enter maximum position"
                    required
                    style={{
                      width: "100%",
                      padding: "10px",
                      backgroundColor: "#1a1a1a",
                      color: "#FFFFFF",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      borderRadius: "6px",
                      fontSize: "14px",
                      outline: "none",
                      boxSizing: "border-box",
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "8px",
                      color: "#FFFFFF",
                      fontSize: "14px",
                      fontWeight: 500,
                    }}
                  >
                    Maximum Loss Limit
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    value={formData.maximum_loss_limit}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        maximum_loss_limit: e.target.value,
                      })
                    }
                    placeholder="Enter maximum loss limit"
                    required
                    style={{
                      width: "100%",
                      padding: "10px",
                      backgroundColor: "#1a1a1a",
                      color: "#FFFFFF",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      borderRadius: "6px",
                      fontSize: "14px",
                      outline: "none",
                      boxSizing: "border-box",
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "8px",
                      color: "#FFFFFF",
                      fontSize: "14px",
                      fontWeight: 500,
                    }}
                  >
                    Amount
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    value={formData.amount}
                    onChange={(e) =>
                      setFormData({ ...formData, amount: e.target.value })
                    }
                    placeholder="Enter amount"
                    required
                    style={{
                      width: "100%",
                      padding: "10px",
                      backgroundColor: "#1a1a1a",
                      color: "#FFFFFF",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      borderRadius: "6px",
                      fontSize: "14px",
                      outline: "none",
                      boxSizing: "border-box",
                    }}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={formLoading}
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#2BB6DD",
                  color: "#030303",
                  border: "none",
                  borderRadius: "6px",
                  fontSize: "14px",
                  fontWeight: 600,
                  cursor: formLoading ? "not-allowed" : "pointer",
                  opacity: formLoading ? 0.6 : 1,
                  transition: "opacity 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  if (!formLoading) {
                    (e.currentTarget as HTMLButtonElement).style.opacity =
                      "0.8";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!formLoading) {
                    (e.currentTarget as HTMLButtonElement).style.opacity = "1";
                  }
                }}
              >
                {formLoading ? "Adding..." : "Add Subscription"}
              </button>
            </form>
          )}

          {/* Subscriptions Table */}
          {subscriptions.length > 0 ? (
            <div style={{ overflowX: "auto" }}>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  color: "#FFFFFF",
                }}
              >
                <thead>
                  <tr
                    style={{
                      borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    <th
                      style={{
                        textAlign: "left",
                        padding: "12px",
                        fontWeight: 600,
                        fontSize: "14px",
                      }}
                    >
                      ID
                    </th>
                    <th
                      style={{
                        textAlign: "left",
                        padding: "12px",
                        fontWeight: 600,
                        fontSize: "14px",
                      }}
                    >
                      Subscription Name
                    </th>
                    <th
                      style={{
                        textAlign: "left",
                        padding: "12px",
                        fontWeight: 600,
                        fontSize: "14px",
                      }}
                    >
                      Program Name
                    </th>
                    <th
                      style={{
                        textAlign: "left",
                        padding: "12px",
                        fontWeight: 600,
                        fontSize: "14px",
                      }}
                    >
                      Monthly Price
                    </th>
                    <th
                      style={{
                        textAlign: "left",
                        padding: "12px",
                        fontWeight: 600,
                        fontSize: "14px",
                      }}
                    >
                      Amount
                    </th>
                    <th
                      style={{
                        textAlign: "left",
                        padding: "12px",
                        fontWeight: 600,
                        fontSize: "14px",
                      }}
                    >
                      Created Date
                    </th>
                    <th
                      style={{
                        textAlign: "left",
                        padding: "12px",
                        fontWeight: 600,
                        fontSize: "14px",
                      }}
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {subscriptions.map((subscription) => (
                    <tr
                      key={subscription.id}
                      style={{
                        borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
                      }}
                    >
                      <td style={{ padding: "12px", fontSize: "14px" }}>
                        {subscription.id}
                      </td>
                      <td style={{ padding: "12px", fontSize: "14px" }}>
                        {subscription.subscription_name}
                      </td>
                      <td
                        style={{
                          padding: "12px",
                          fontSize: "14px",
                          color: "rgba(255, 255, 255, 0.7)",
                        }}
                      >
                        {subscription.program_name}
                      </td>
                      <td style={{ padding: "12px", fontSize: "14px" }}>
                        ${parseFloat(subscription.monthly_price).toFixed(2)}
                      </td>
                      <td style={{ padding: "12px", fontSize: "14px" }}>
                        ${parseFloat(subscription.amount).toFixed(2)}
                      </td>
                      <td
                        style={{
                          padding: "12px",
                          fontSize: "14px",
                          color: "rgba(255, 255, 255, 0.7)",
                        }}
                      >
                        {new Date(subscription.created_at).toLocaleDateString()}
                      </td>
                      <td style={{ padding: "12px" }}>
                        <button
                          onClick={() =>
                            handleDeleteSubscription(subscription.id)
                          }
                          style={{
                            padding: "6px 12px",
                            backgroundColor: "#ff4444",
                            color: "#FFFFFF",
                            border: "none",
                            borderRadius: "4px",
                            fontSize: "12px",
                            fontWeight: 600,
                            cursor: "pointer",
                            transition: "background-color 0.3s ease",
                          }}
                          onMouseEnter={(e) => {
                            (
                              e.currentTarget as HTMLButtonElement
                            ).style.backgroundColor = "#cc0000";
                          }}
                          onMouseLeave={(e) => {
                            (
                              e.currentTarget as HTMLButtonElement
                            ).style.backgroundColor = "#ff4444";
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div
              style={{
                textAlign: "center",
                padding: "40px 20px",
                color: "rgba(255, 255, 255, 0.5)",
              }}
            >
              <p style={{ margin: 0, fontSize: "14px" }}>
                No subscriptions found. Click &quot;Add New Subscription&quot;
                to create one.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
