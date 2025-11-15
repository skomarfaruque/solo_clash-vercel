"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";

interface WheelItem {
  id: number;
  item_name: string;
  value: string;
  Image_Icon_url: string;
  will_select: boolean;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

export default function AdminWheelItems() {
  const [wheelItems, setWheelItems] = useState<WheelItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [deleteMessage, setDeleteMessage] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    item_name: "",
    value: "",
    will_select: "no",
  });
  const [deleteConfirmation, setDeleteConfirmation] = useState<{
    show: boolean;
    id: number | null;
    name: string;
  }>({
    show: false,
    id: null,
    name: "",
  });
  const router = useRouter();

  const fetchWheelItems = useCallback(async () => {
    try {
      const token = localStorage.getItem("adminToken");
      const response = await fetch(
        "https://solo-clash-backend.vercel.app/api/v1/wheel-items",
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
          "https://solo-clash-backend.vercel.app/api/v1/wheel-items",
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
          setWheelItems(data.data.items);
        } else {
          console.error("Failed to fetch wheel items:", data.message);
        }
      } else {
        const data = await response.json();
        if (data.success && data.data?.items) {
          setWheelItems(data.data.items);
        } else {
          console.error("Failed to fetch wheel items:", data.message);
        }
      }
    } catch (err) {
      console.error("Error fetching wheel items:", err);
    } finally {
      setLoading(false);
    }
  }, [router]);

  useEffect(() => {
    fetchWheelItems();
  }, [fetchWheelItems]);

  const handleDeleteWheelItem = (id: number) => {
    const item = wheelItems.find((w) => w.id === id);
    setDeleteConfirmation({
      show: true,
      id,
      name: item?.item_name || "Wheel Item",
    });
  };

  const confirmDelete = async () => {
    if (!deleteConfirmation.id) return;

    try {
      const token = localStorage.getItem("adminToken");

      const response = await fetch(
        `https://solo-clash-backend.vercel.app/api/v1/wheel-items/${deleteConfirmation.id}`,
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
        await fetchWheelItems();
        setDeleteMessage(`✓ ${deleteConfirmation.name} deleted successfully!`);
        setTimeout(() => setDeleteMessage(""), 4000);
      } else {
        alert(data.message || "Failed to delete wheel item");
      }
    } catch (err) {
      console.error("Error deleting wheel item:", err);
      alert("An error occurred while deleting wheel item");
    } finally {
      setDeleteConfirmation({ show: false, id: null, name: "" });
    }
  };

  const cancelDelete = () => {
    setDeleteConfirmation({ show: false, id: null, name: "" });
  };

  const handleEditWheelItem = (item: WheelItem) => {
    setEditingId(item.id);
    setFormData({
      item_name: item.item_name,
      value: item.value,
      will_select: item.will_select ? "yes" : "no",
    });
    setShowForm(true);
  };

  const handleCancelForm = () => {
    setShowForm(false);
    setEditingId(null);
    setFormData({
      item_name: "",
      value: "",
      will_select: "no",
    });
  };

  const handleAddWheelItem = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormLoading(true);

    try {
      const token = localStorage.getItem("adminToken");
      const isEditing = editingId !== null;
      const url = isEditing
        ? `https://solo-clash-backend.vercel.app/api/v1/wheel-items/${editingId}`
        : "https://solo-clash-backend.vercel.app/api/v1/wheel-items";

      const response = await fetch(url, {
        method: isEditing ? "PATCH" : "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          item_name: formData.item_name,
          value: formData.value,
          will_select: formData.will_select === "yes",
        }),
      });

      const data = await response.json();

      if (data.success) {
        setFormData({
          item_name: "",
          value: "",
          will_select: "no",
        });
        setShowForm(false);
        setEditingId(null);
        const message = isEditing ? "updated" : "added";
        setSuccessMessage(`✓ ${formData.item_name} ${message} successfully!`);
        setTimeout(() => setSuccessMessage(""), 4000);
        await fetchWheelItems();
      } else {
        alert(
          data.message || `Failed to ${isEditing ? "update" : "add"} wheel item`
        );
      }
    } catch (err) {
      console.error("Error saving wheel item:", err);
      alert("An error occurred while saving wheel item");
    } finally {
      setFormLoading(false);
    }
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
                  Delete Wheel Item?
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

        {/* Wheel Items Section */}
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
              Wheel Items
            </h3>
            <button
              onClick={() => {
                if (showForm) {
                  handleCancelForm();
                } else {
                  setShowForm(true);
                }
              }}
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
              {showForm ? "Cancel" : "+ Add New Wheel Item"}
            </button>
          </div>

          {/* Add Wheel Item Form */}
          {showForm && (
            <form
              onSubmit={handleAddWheelItem}
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
                    Item Name
                  </label>
                  <input
                    type="text"
                    value={formData.item_name}
                    onChange={(e) =>
                      setFormData({ ...formData, item_name: e.target.value })
                    }
                    placeholder="Enter item name"
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
                    Value
                  </label>
                  <input
                    type="text"
                    value={formData.value}
                    onChange={(e) =>
                      setFormData({ ...formData, value: e.target.value })
                    }
                    placeholder="Enter value (e.g., 58%)"
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
                    Will Select
                  </label>
                  <select
                    value={formData.will_select}
                    onChange={(e) =>
                      setFormData({ ...formData, will_select: e.target.value })
                    }
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
                  >
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                  </select>
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
                {editingId
                  ? formLoading
                    ? "Updating..."
                    : "Update Wheel Item"
                  : formLoading
                  ? "Adding..."
                  : "Add Wheel Item"}
              </button>
            </form>
          )}
          {wheelItems.length > 0 ? (
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
                      Item Name
                    </th>
                    <th
                      style={{
                        textAlign: "left",
                        padding: "12px",
                        fontWeight: 600,
                        fontSize: "14px",
                      }}
                    >
                      Value
                    </th>
                    <th
                      style={{
                        textAlign: "left",
                        padding: "12px",
                        fontWeight: 600,
                        fontSize: "14px",
                      }}
                    >
                      Will Select
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
                  {wheelItems.map((item) => (
                    <tr
                      key={item.id}
                      style={{
                        borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
                      }}
                    >
                      <td style={{ padding: "12px", fontSize: "14px" }}>
                        {item.item_name}
                      </td>
                      <td style={{ padding: "12px", fontSize: "14px" }}>
                        {item.value}
                      </td>
                      <td style={{ padding: "12px", fontSize: "14px" }}>
                        <span
                          style={{
                            backgroundColor: item.will_select
                              ? "rgba(43, 182, 221, 0.2)"
                              : "rgba(255, 107, 107, 0.2)",
                            color: item.will_select ? "#2BB6DD" : "#ff6b6b",
                            padding: "4px 8px",
                            borderRadius: "4px",
                            fontSize: "12px",
                            fontWeight: 600,
                            textTransform: "capitalize",
                          }}
                        >
                          {item.will_select ? "Yes" : "No"}
                        </span>
                      </td>
                      <td style={{ padding: "12px" }}>
                        <div style={{ display: "flex", gap: "8px" }}>
                          <button
                            onClick={() => handleEditWheelItem(item)}
                            style={{
                              padding: "6px 12px",
                              backgroundColor: "#2BB6DD",
                              color: "#030303",
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
                              ).style.backgroundColor = "#1a9fb5";
                            }}
                            onMouseLeave={(e) => {
                              (
                                e.currentTarget as HTMLButtonElement
                              ).style.backgroundColor = "#2BB6DD";
                            }}
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDeleteWheelItem(item.id)}
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
                        </div>
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
                No wheel items found.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
