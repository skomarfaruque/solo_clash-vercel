"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";

interface User {
  id: string;
  email: string;
  user_name: string;
  first_name: string;
  last_name: string;
  country_id: number;
  status: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

interface Country {
  id: number;
  name: string;
  code: string;
}

export default function AdminUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [countries, setCountries] = useState<{ [key: number]: string }>({});
  const [loading, setLoading] = useState(true);
  const [deleteMessage, setDeleteMessage] = useState("");
  const [deleteConfirmation, setDeleteConfirmation] = useState<{
    show: boolean;
    id: string | null;
    email: string;
  }>({
    show: false,
    id: null,
    email: "",
  });
  const router = useRouter();

  // Fetch countries first to map country_id to country name
  const fetchCountries = useCallback(async () => {
    try {
      const token = localStorage.getItem("adminToken");
      const response = await fetch(
        "https://solo-clash-backend.vercel.app/api/v1/country",
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
          "https://solo-clash-backend.vercel.app/api/v1/country",
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
          const countryMap: { [key: number]: string } = {};
          data.data.items.forEach((country: Country) => {
            countryMap[country.id] = country.name;
          });
          setCountries(countryMap);
        }
      } else {
        const data = await response.json();
        if (data.success && data.data?.items) {
          const countryMap: { [key: number]: string } = {};
          data.data.items.forEach((country: Country) => {
            countryMap[country.id] = country.name;
          });
          setCountries(countryMap);
        }
      }
    } catch (err) {
      console.error("Error fetching countries:", err);
    }
  }, [router]);

  const fetchUsers = useCallback(async () => {
    try {
      const token = localStorage.getItem("adminToken");
      const response = await fetch(
        "https://solo-clash-backend.vercel.app/api/v1/users",
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
          "https://solo-clash-backend.vercel.app/api/v1/users",
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
          setUsers(data.data.items);
        } else {
          console.error("Failed to fetch users:", data.message);
        }
      } else {
        const data = await response.json();
        if (data.success && data.data?.items) {
          setUsers(data.data.items);
        } else {
          console.error("Failed to fetch users:", data.message);
        }
      }
    } catch (err) {
      console.error("Error fetching users:", err);
    } finally {
      setLoading(false);
    }
  }, [router]);

  useEffect(() => {
    fetchCountries();
  }, [fetchCountries]);

  useEffect(() => {
    if (Object.keys(countries).length > 0) {
      fetchUsers();
    }
  }, [countries, fetchUsers]);

  const handleDeleteUser = (id: string) => {
    const user = users.find((u) => u.id === id);
    setDeleteConfirmation({
      show: true,
      id,
      email: user?.email || "User",
    });
  };

  const confirmDelete = async () => {
    if (!deleteConfirmation.id) return;

    try {
      const token = localStorage.getItem("adminToken");

      const response = await fetch(
        `https://solo-clash-backend.vercel.app/api/v1/user/${deleteConfirmation.id}`,
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
        await fetchUsers();
        setDeleteMessage(`✓ ${deleteConfirmation.email} deleted successfully!`);
        setTimeout(() => setDeleteMessage(""), 4000);
      } else {
        alert(data.message || "Failed to delete user");
      }
    } catch (err) {
      console.error("Error deleting user:", err);
      alert("An error occurred while deleting user");
    } finally {
      setDeleteConfirmation({ show: false, id: null, email: "" });
    }
  };

  const cancelDelete = () => {
    setDeleteConfirmation({ show: false, id: null, email: "" });
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
                  Delete User?
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
                <strong>{deleteConfirmation.email}</strong>? This action cannot
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

        {/* Users Section */}
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
              Users
            </h3>
          </div>

          {/* Users Table */}
          {users.length > 0 ? (
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
                      Email
                    </th>
                    <th
                      style={{
                        textAlign: "left",
                        padding: "12px",
                        fontWeight: 600,
                        fontSize: "14px",
                      }}
                    >
                      Username
                    </th>
                    <th
                      style={{
                        textAlign: "left",
                        padding: "12px",
                        fontWeight: 600,
                        fontSize: "14px",
                      }}
                    >
                      Country
                    </th>
                    <th
                      style={{
                        textAlign: "left",
                        padding: "12px",
                        fontWeight: 600,
                        fontSize: "14px",
                      }}
                    >
                      Status
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
                  {users.map((user) => (
                    <tr
                      key={user.id}
                      style={{
                        borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
                      }}
                    >
                      <td style={{ padding: "12px", fontSize: "14px" }}>
                        {user.email}
                      </td>
                      <td style={{ padding: "12px", fontSize: "14px" }}>
                        {user.user_name}
                      </td>
                      <td style={{ padding: "12px", fontSize: "14px" }}>
                        {countries[user.country_id] || "N/A"}
                      </td>
                      <td style={{ padding: "12px", fontSize: "14px" }}>
                        <span
                          style={{
                            backgroundColor:
                              user.status === "active"
                                ? "rgba(43, 182, 221, 0.2)"
                                : "rgba(255, 107, 107, 0.2)",
                            color:
                              user.status === "active" ? "#2BB6DD" : "#ff6b6b",
                            padding: "4px 8px",
                            borderRadius: "4px",
                            fontSize: "12px",
                            fontWeight: 600,
                            textTransform: "capitalize",
                          }}
                        >
                          {user.status}
                        </span>
                      </td>
                      <td
                        style={{
                          padding: "12px",
                          fontSize: "14px",
                          color: "rgba(255, 255, 255, 0.7)",
                        }}
                      >
                        {new Date(user.createdAt).toLocaleDateString()}
                      </td>
                      <td style={{ padding: "12px" }}>
                        <button
                          onClick={() => handleDeleteUser(user.id)}
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
              <p style={{ margin: 0, fontSize: "14px" }}>No users found.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
