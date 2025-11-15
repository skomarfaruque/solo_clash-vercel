"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";

interface Country {
  id: number;
  name: string;
  code: string;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

export default function AdminCountries() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [deleteMessage, setDeleteMessage] = useState("");
  const [countryName, setCountryName] = useState("");
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

      // Handle 401 Unauthorized
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
          setCountries(data.data.items);
        } else {
          console.error("Failed to fetch countries:", data.message);
        }
      } else {
        const data = await response.json();
        if (data.success && data.data?.items) {
          setCountries(data.data.items);
        } else {
          console.error("Failed to fetch countries:", data.message);
        }
      }
    } catch (err) {
      console.error("Error fetching countries:", err);
    } finally {
      setLoading(false);
    }
  }, [router]);

  useEffect(() => {
    fetchCountries();
  }, [fetchCountries]);

  const handleDeleteCountry = (id: number) => {
    const country = countries.find((c) => c.id === id);
    setDeleteConfirmation({
      show: true,
      id,
      name: country?.name || "Country",
    });
  };

  const confirmDelete = async () => {
    if (!deleteConfirmation.id) return;

    try {
      const token = localStorage.getItem("adminToken");

      const response = await fetch(
        `https://solo-clash-backend.vercel.app/api/v1/country/${deleteConfirmation.id}`,
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
        await fetchCountries();
        setDeleteMessage(`✓ ${deleteConfirmation.name} deleted successfully!`);
        setTimeout(() => setDeleteMessage(""), 4000);
      } else {
        alert(data.message || "Failed to delete country");
      }
    } catch (err) {
      console.error("Error deleting country:", err);
      alert("An error occurred while deleting country");
    } finally {
      setDeleteConfirmation({ show: false, id: null, name: "" });
    }
  };

  const handleAddCountry = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormLoading(true);

    try {
      const token = localStorage.getItem("adminToken");

      const response = await fetch(
        "https://solo-clash-backend.vercel.app/api/v1/country",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            name: countryName,
          }),
        }
      );

      const data = await response.json();

      if (data.success) {
        setCountryName("");
        setShowForm(false);
        setSuccessMessage(`✓ ${countryName} added successfully!`);
        setTimeout(() => setSuccessMessage(""), 4000);
        await fetchCountries();
      } else {
        alert(data.message || "Failed to add country");
      }
    } catch (err) {
      console.error("Error adding country:", err);
      alert("An error occurred while adding country");
    } finally {
      setFormLoading(false);
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
      {/* Header */}
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
        <h1
          style={{
            color: "#FFFFFF",
            fontSize: "24px",
            fontWeight: 600,
            margin: 0,
          }}
        >
          Countries Management
        </h1>
      </header>

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
                <div style={{ fontSize: "32px" }}>⚠️</div>
                <h3
                  style={{
                    color: "#FFFFFF",
                    fontSize: "20px",
                    fontWeight: 600,
                    margin: 0,
                  }}
                >
                  Delete Country?
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

        {/* Countries Section */}
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
              Countries List
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
              {showForm ? "Cancel" : "+ Add New Country"}
            </button>
          </div>

          {/* Add Country Form */}
          {showForm && (
            <form
              onSubmit={handleAddCountry}
              style={{
                background: "#2a2a2a",
                padding: "20px",
                borderRadius: "8px",
                marginBottom: "24px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                display: "flex",
                gap: "12px",
                alignItems: "flex-end",
              }}
            >
              <div style={{ flex: 1 }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    color: "#FFFFFF",
                    fontSize: "14px",
                    fontWeight: 500,
                  }}
                >
                  Country Name
                </label>
                <input
                  type="text"
                  value={countryName}
                  onChange={(e) => setCountryName(e.target.value)}
                  placeholder="Enter country name"
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
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => {
                  if (!formLoading) {
                    (e.currentTarget as HTMLButtonElement).style.opacity = "0.8";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!formLoading) {
                    (e.currentTarget as HTMLButtonElement).style.opacity = "1";
                  }
                }}
              >
                {formLoading ? "Adding..." : "Add Country"}
              </button>
            </form>
          )}

          {/* Countries Table */}
          {countries.length > 0 ? (
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
                      Country Name
                    </th>
                    <th
                      style={{
                        textAlign: "left",
                        padding: "12px",
                        fontWeight: 600,
                        fontSize: "14px",
                      }}
                    >
                      Country Code
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
                  {countries.map((country) => (
                    <tr
                      key={country.id}
                      style={{
                        borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
                      }}
                    >
                      <td style={{ padding: "12px", fontSize: "14px" }}>
                        {country.id}
                      </td>
                      <td style={{ padding: "12px", fontSize: "14px" }}>
                        {country.name}
                      </td>
                      <td
                        style={{
                          padding: "12px",
                          fontSize: "14px",
                          backgroundColor: "rgba(43, 182, 221, 0.1)",
                          borderRadius: "4px",
                          fontWeight: 500,
                        }}
                      >
                        {country.code}
                      </td>
                      <td
                        style={{
                          padding: "12px",
                          fontSize: "14px",
                          color: "rgba(255, 255, 255, 0.7)",
                        }}
                      >
                        {new Date(country.created_at).toLocaleDateString()}
                      </td>
                      <td style={{ padding: "12px" }}>
                        <button
                          onClick={() => handleDeleteCountry(country.id)}
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
              <p style={{ margin: 0, fontSize: "14px" }}>No countries found.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
