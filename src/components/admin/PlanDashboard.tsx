"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";

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

interface Program {
  id: string;
  name: string;
}

export default function AdminDashboard() {
  const [loading, setLoading] = useState(true);
  const [programs, setPrograms] = useState<Program[]>([]);
  const [loadingPrograms, setLoadingPrograms] = useState(true);
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [deleteMessage, setDeleteMessage] = useState("");
  const [programSearch, setProgramSearch] = useState("");
  const [showProgramDropdown, setShowProgramDropdown] = useState(false);
  const [deleteConfirmation, setDeleteConfirmation] = useState<{
    show: boolean;
    id: number | null;
    name: string;
  }>({
    show: false,
    id: null,
    name: "",
  });
  const [formData, setFormData] = useState({
    program_id: "",
    program_name: "",
    subscription_name: "",
    subscription_value: "",
    monthly_price: "",
    profit_target: "",
    maximum_position: "",
    maximum_loss_limit: "",
    amount: "",
  });
  const router = useRouter();

  const filteredPrograms = programs.filter(
    (program) =>
      program.name.toLowerCase().includes(programSearch.toLowerCase()) ||
      program.id.toLowerCase().includes(programSearch.toLowerCase())
  );

  const fetchPrograms = useCallback(async () => {
    try {
      const token = localStorage.getItem("adminToken");
      const response = await fetch(
        "https://solo-clash-backend.vercel.app/api/v1/program",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 401) {
        const { refreshAccessToken } = await import("@/utils/api");
        const newToken = await refreshAccessToken();

        if (!newToken) {
          router.push("/admin");
          return;
        }

        const retryResponse = await fetch(
          "https://solo-clash-backend.vercel.app/api/v1/program",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${newToken}`,
            },
          }
        );

        const data = await retryResponse.json();
        console.log("Programs API response:", data);
        if (Array.isArray(data)) {
          setPrograms(data);
        } else if (data.data && Array.isArray(data.data)) {
          setPrograms(data.data);
        } else {
          console.error(
            "Failed to fetch programs - unexpected response:",
            data
          );
        }
      } else {
        const data = await response.json();
        console.log("Programs API response:", data);
        if (Array.isArray(data)) {
          setPrograms(data);
        } else if (data.data && Array.isArray(data.data)) {
          setPrograms(data.data);
        } else {
          console.error(
            "Failed to fetch programs - unexpected response:",
            data
          );
        }
      }
    } catch (err) {
      console.error("Error fetching programs:", err);
    } finally {
      setLoadingPrograms(false);
    }
  }, [router]);

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
    // Fetch programs and subscriptions
    fetchPrograms();
    fetchSubscriptions();
  }, [fetchPrograms, fetchSubscriptions]);

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
            program_name: formData.program_name,
            subscription_name: formData.subscription_name,
            subscription_value: parseFloat(formData.subscription_value),
            monthly_price: parseFloat(formData.monthly_price),
            profit_target: parseFloat(formData.profit_target),
            maximum_position: parseFloat(formData.maximum_position),
            maximum_loss_limit: parseFloat(formData.maximum_loss_limit),
            amount: parseFloat(formData.amount),
          }),
        }
      );

      const data = await response.json();

      if (data.success) {
        // Reset form
        setFormData({
          program_id: "",
          program_name: "",
          subscription_name: "",
          subscription_value: "",
          monthly_price: "",
          profit_target: "",
          maximum_position: "",
          maximum_loss_limit: "",
          amount: "",
        });
        setShowForm(false);
        // Show success message
        setSuccessMessage(
          `✓ ${formData.subscription_name} added successfully!`
        );
        setTimeout(() => setSuccessMessage(""), 4000);
        // Refresh subscriptions
        await fetchSubscriptions();
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
    const subscription = subscriptions.find((s) => s.id === id);
    setDeleteConfirmation({
      show: true,
      id,
      name: subscription?.subscription_name || "Subscription",
    });
  };

  const confirmDelete = async () => {
    if (!deleteConfirmation.id) return;

    try {
      const token = localStorage.getItem("adminToken");

      const response = await fetch(
        `https://solo-clash-backend.vercel.app/api/v1/subscriptions/${deleteConfirmation.id}`,
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
        // Show success message
        setDeleteMessage(`✓ ${deleteConfirmation.name} deleted successfully!`);
        setTimeout(() => setDeleteMessage(""), 4000);
      } else {
        alert(data.message || "Failed to delete subscription");
      }
    } catch (err) {
      console.error("Error deleting subscription:", err);
      alert("An error occurred while deleting subscription");
    } finally {
      setDeleteConfirmation({ show: false, id: null, name: "" });
    }
  };

  const cancelDelete = () => {
    setDeleteConfirmation({ show: false, id: null, name: "" });
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
      {/* Main Content */}
      <main style={{ padding: "24px" }}>
        {/* Success Toast */}
        {successMessage && (
          <div
            style={{
              position: "fixed",
              top: "20px",
              right: "20px",
              backgroundColor: "#2BB6DD",
              color: "#030303",
              padding: "16px 24px",
              borderRadius: "8px",
              fontWeight: 600,
              fontSize: "14px",
              boxShadow: "0 4px 12px rgba(43, 182, 221, 0.3)",
              animation: "slideIn 0.3s ease-out",
              zIndex: 1000,
            }}
          >
            {successMessage}
          </div>
        )}

        {/* Delete Toast */}
        {deleteMessage && (
          <div
            style={{
              position: "fixed",
              top: "70px",
              right: "20px",
              backgroundColor: "#ff6b6b",
              color: "#FFFFFF",
              padding: "16px 24px",
              borderRadius: "8px",
              fontWeight: 600,
              fontSize: "14px",
              boxShadow: "0 4px 12px rgba(255, 107, 107, 0.3)",
              animation: "slideIn 0.3s ease-out",
              zIndex: 1000,
            }}
          >
            {deleteMessage}
          </div>
        )}

        {/* Delete Confirmation Modal */}
        {deleteConfirmation.show && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 2000,
              animation: "fadeIn 0.2s ease-out",
            }}
            onClick={cancelDelete}
          >
            <div
              style={{
                backgroundColor: "#1a1a1a",
                border: "1px solid rgba(43, 182, 221, 0.3)",
                borderRadius: "12px",
                padding: "32px",
                maxWidth: "400px",
                width: "90%",
                animation: "slideUp 0.3s ease-out",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "16px",
                }}
              >
                <div
                  style={{
                    fontSize: "32px",
                  }}
                >
                  ⚠️
                </div>
                <h3
                  style={{
                    color: "#FFFFFF",
                    fontSize: "20px",
                    fontWeight: 600,
                    margin: 0,
                  }}
                >
                  Delete Subscription?
                </h3>
              </div>

              <p
                style={{
                  color: "rgba(255, 255, 255, 0.7)",
                  fontSize: "14px",
                  lineHeight: "1.6",
                  margin: "12px 0 24px 0",
                }}
              >
                Are you sure you want to delete{" "}
                <strong>{deleteConfirmation.name}</strong>? This action cannot
                be undone.
              </p>

              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  justifyContent: "flex-end",
                }}
              >
                <button
                  onClick={cancelDelete}
                  style={{
                    padding: "10px 20px",
                    backgroundColor: "transparent",
                    color: "#FFFFFF",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                    borderRadius: "6px",
                    fontSize: "14px",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    (
                      e.currentTarget as HTMLButtonElement
                    ).style.backgroundColor = "rgba(255, 255, 255, 0.1)";
                  }}
                  onMouseLeave={(e) => {
                    (
                      e.currentTarget as HTMLButtonElement
                    ).style.backgroundColor = "transparent";
                  }}
                >
                  Cancel
                </button>
                <button
                  onClick={confirmDelete}
                  style={{
                    padding: "10px 20px",
                    backgroundColor: "#ff6b6b",
                    color: "#FFFFFF",
                    border: "none",
                    borderRadius: "6px",
                    fontSize: "14px",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    (
                      e.currentTarget as HTMLButtonElement
                    ).style.backgroundColor = "#ff4444";
                  }}
                  onMouseLeave={(e) => {
                    (
                      e.currentTarget as HTMLButtonElement
                    ).style.backgroundColor = "#ff6b6b";
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Add animation styles */}
        <style>{`
          @keyframes slideIn {
            from {
              transform: translateX(400px);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes slideUp {
            from {
              transform: translateY(20px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
        `}</style>
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
                  <div style={{ position: "relative" }}>
                    <input
                      type="text"
                      value={
                        showProgramDropdown
                          ? programSearch
                          : programs.find((p) => p.id === formData.program_id)
                              ?.name || ""
                      }
                      onChange={(e) => {
                        setProgramSearch(e.target.value);
                        setShowProgramDropdown(true);
                      }}
                      onFocus={() => setShowProgramDropdown(true)}
                      placeholder={
                        loadingPrograms
                          ? "Loading programs..."
                          : "Search or select program"
                      }
                      disabled={loadingPrograms}
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
                        cursor: loadingPrograms ? "not-allowed" : "pointer",
                      }}
                    />
                    {showProgramDropdown && !loadingPrograms && (
                      <div
                        style={{
                          position: "absolute",
                          top: "100%",
                          left: 0,
                          right: 0,
                          backgroundColor: "#1a1a1a",
                          border: "1px solid rgba(43, 182, 221, 0.3)",
                          borderTop: "none",
                          borderRadius: "0 0 6px 6px",
                          maxHeight: "200px",
                          overflowY: "auto",
                          zIndex: 100,
                          marginTop: "-1px",
                        }}
                      >
                        {filteredPrograms.length > 0 ? (
                          filteredPrograms.map((program) => (
                            <div
                              key={program.id}
                              onClick={() => {
                                setFormData({
                                  ...formData,
                                  program_id: program.id,
                                });
                                setProgramSearch("");
                                setShowProgramDropdown(false);
                              }}
                              style={{
                                padding: "10px 12px",
                                cursor: "pointer",
                                borderBottom:
                                  "1px solid rgba(255, 255, 255, 0.1)",
                                color: "#FFFFFF",
                                fontSize: "14px",
                                transition: "background-color 0.2s ease",
                                backgroundColor:
                                  program.id === formData.program_id
                                    ? "rgba(43, 182, 221, 0.2)"
                                    : "transparent",
                              }}
                              onMouseEnter={(e) => {
                                if (program.id !== formData.program_id) {
                                  (
                                    e.currentTarget as HTMLDivElement
                                  ).style.backgroundColor =
                                    "rgba(255, 255, 255, 0.1)";
                                }
                              }}
                              onMouseLeave={(e) => {
                                if (program.id !== formData.program_id) {
                                  (
                                    e.currentTarget as HTMLDivElement
                                  ).style.backgroundColor = "transparent";
                                }
                              }}
                            >
                              <div style={{ fontWeight: 600 }}>
                                {program.name}
                              </div>
                              <div
                                style={{
                                  fontSize: "12px",
                                  color: "rgba(255, 255, 255, 0.6)",
                                }}
                              >
                                ID: {program.id}
                              </div>
                            </div>
                          ))
                        ) : (
                          <div
                            style={{
                              padding: "10px 12px",
                              color: "rgba(255, 255, 255, 0.5)",
                              fontSize: "14px",
                              textAlign: "center",
                            }}
                          >
                            No programs found
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
                {/* Close dropdown when clicking outside */}
                {showProgramDropdown && (
                  <div
                    onClick={() => setShowProgramDropdown(false)}
                    style={{
                      position: "fixed",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      zIndex: 50,
                    }}
                  />
                )}

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
                    Program Name
                  </label>
                  <input
                    type="text"
                    value={formData.program_name}
                    onChange={(e) =>
                      setFormData({ ...formData, program_name: e.target.value })
                    }
                    placeholder="Enter program name"
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
                    Subscription Value
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    value={formData.subscription_value}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        subscription_value: e.target.value,
                      })
                    }
                    placeholder="Enter subscription value"
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
                      Program ID
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
                      Profit Target
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
                        {subscription.program_id}
                      </td>
                      <td style={{ padding: "12px", fontSize: "14px" }}>
                        {subscription.subscription_name}
                      </td>
                      <td style={{ padding: "12px", fontSize: "14px" }}>
                        ${parseFloat(subscription.profit_target).toFixed(2)}
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
