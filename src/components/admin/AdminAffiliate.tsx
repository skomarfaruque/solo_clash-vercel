"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL ||
  "https://solo-clash-backend.vercel.app/api/v1";

interface SocialType {
  id: number;
  name: string;
  link: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

interface ApplicationDetail {
  id: number;
  application_id: number;
  social_type_id: number;
  social_types: SocialType;
}

interface User {
  id: string;
  email: string;
  user_name: string;
  is_news_letter: boolean;
  first_name: string;
  last_name: string;
  address_line_1: string;
  address_line_2: string;
  city: string;
  post_code: string;
  country_id: number;
  state: string;
  date_of_birth: string;
  roleId: string | null;
  status: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

interface AffiliateApplication {
  id: number;
  user_id: string;
  follower_count: number;
  existing_partnerships: boolean;
  promotion_strategy: string;
  traffic_plan: string;
  target_audience: string;
  trading_content_examples: string;
  affiliate_trading_platforms: string;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  users: User;
  details: ApplicationDetail[];
}

export default function AdminAffiliate() {
  const [applications, setApplications] = useState<AffiliateApplication[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedApplication, setSelectedApplication] =
    useState<AffiliateApplication | null>(null);
  const router = useRouter();

  const fetchApplications = useCallback(async () => {
    try {
      const token = localStorage.getItem("adminToken");
      const response = await fetch(`${API_BASE_URL}/affiliate-application`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 401) {
        const { refreshAccessToken } = await import("@/utils/api");
        const newToken = await refreshAccessToken();

        if (!newToken) {
          router.push("/admin");
          return;
        }

        const retryResponse = await fetch(
          `${API_BASE_URL}/affiliate-application`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${newToken}`,
            },
          }
        );

        const data = await retryResponse.json();
        if (data.success && data.data) {
          setApplications(data.data.items || data.data);
        } else {
          console.error("Failed to fetch applications:", data.message);
        }
      } else {
        const data = await response.json();
        if (data.success && data.data) {
          setApplications(data.data.items || data.data);
        } else {
          console.error("Failed to fetch applications:", data.message);
        }
      }
    } catch (err) {
      console.error("Error fetching affiliate applications:", err);
    } finally {
      setLoading(false);
    }
  }, [router]);

  useEffect(() => {
    fetchApplications();
  }, [fetchApplications]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (loading) {
    return (
      <div
        style={{
          padding: "40px",
          backgroundColor: "#0a0a0a",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p style={{ color: "#FFFFFF", fontSize: "18px" }}>
          Loading applications...
        </p>
      </div>
    );
  }

  return (
    <div
      style={{
        padding: "40px",
        backgroundColor: "#0a0a0a",
        minHeight: "100vh",
      }}
    >
      {/* Header */}
      <div
        style={{
          marginBottom: "30px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <h1
            style={{
              color: "#FFFFFF",
              fontSize: "28px",
              fontWeight: "700",
              margin: "0 0 8px 0",
            }}
          >
            Affiliate Applications
          </h1>
          <p style={{ color: "#9CA3AF", fontSize: "14px", margin: 0 }}>
            Manage affiliate program applications
          </p>
        </div>
        <div
          style={{
            backgroundColor: "#1F2937",
            padding: "10px 20px",
            borderRadius: "8px",
          }}
        >
          <span style={{ color: "#9CA3AF", fontSize: "14px" }}>
            Total Applications:{" "}
          </span>
          <span
            style={{ color: "#2BB6DD", fontSize: "18px", fontWeight: "600" }}
          >
            {applications.length}
          </span>
        </div>
      </div>

      {/* Table */}
      <div
        style={{
          backgroundColor: "#111827",
          borderRadius: "12px",
          border: "1px solid #374151",
          overflow: "hidden",
        }}
      >
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ backgroundColor: "#1F2937" }}>
              <th
                style={{
                  padding: "16px 20px",
                  textAlign: "left",
                  color: "#9CA3AF",
                  fontSize: "12px",
                  fontWeight: "600",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                User
              </th>
              <th
                style={{
                  padding: "16px 20px",
                  textAlign: "left",
                  color: "#9CA3AF",
                  fontSize: "12px",
                  fontWeight: "600",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                Followers
              </th>
              <th
                style={{
                  padding: "16px 20px",
                  textAlign: "left",
                  color: "#9CA3AF",
                  fontSize: "12px",
                  fontWeight: "600",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                Partnerships
              </th>
              <th
                style={{
                  padding: "16px 20px",
                  textAlign: "left",
                  color: "#9CA3AF",
                  fontSize: "12px",
                  fontWeight: "600",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                Applied On
              </th>
              <th
                style={{
                  padding: "16px 20px",
                  textAlign: "center",
                  color: "#9CA3AF",
                  fontSize: "12px",
                  fontWeight: "600",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {applications.length === 0 ? (
              <tr>
                <td
                  colSpan={5}
                  style={{
                    padding: "40px 20px",
                    textAlign: "center",
                    color: "#9CA3AF",
                  }}
                >
                  No affiliate applications found.
                </td>
              </tr>
            ) : (
              applications.map((application) => {
                return (
                  <tr
                    key={application.id}
                    style={{
                      borderTop: "1px solid #374151",
                      transition: "background-color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = "#1F2937")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = "transparent")
                    }
                  >
                    <td style={{ padding: "16px 20px" }}>
                      <div>
                        <p
                          style={{
                            color: "#FFFFFF",
                            fontSize: "14px",
                            fontWeight: "500",
                            margin: 0,
                          }}
                        >
                          {application.users?.first_name ||
                            application.users?.email ||
                            "N/A"}{" "}
                          {application.users?.last_name || ""}
                        </p>
                        <p
                          style={{
                            color: "#9CA3AF",
                            fontSize: "12px",
                            margin: "4px 0 0 0",
                          }}
                        >
                          {application.users?.email || application.user_id}
                        </p>
                      </div>
                    </td>
                    <td style={{ padding: "16px 20px" }}>
                      <span
                        style={{
                          color: "#2BB6DD",
                          fontSize: "14px",
                          fontWeight: "600",
                        }}
                      >
                        {application.follower_count?.toLocaleString() || "N/A"}
                      </span>
                    </td>
                    <td style={{ padding: "16px 20px" }}>
                      <span
                        style={{
                          color: application.existing_partnerships
                            ? "#10B981"
                            : "#9CA3AF",
                          fontSize: "14px",
                        }}
                      >
                        {application.existing_partnerships ? "Yes" : "No"}
                      </span>
                    </td>
                    <td style={{ padding: "16px 20px" }}>
                      <span style={{ color: "#9CA3AF", fontSize: "14px" }}>
                        {formatDate(application.created_at)}
                      </span>
                    </td>
                    <td style={{ padding: "16px 20px", textAlign: "center" }}>
                      <button
                        onClick={() => setSelectedApplication(application)}
                        style={{
                          backgroundColor: "#2BB6DD",
                          color: "#000000",
                          border: "none",
                          padding: "8px 16px",
                          borderRadius: "6px",
                          fontSize: "12px",
                          fontWeight: "600",
                          cursor: "pointer",
                          transition: "opacity 0.2s",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.opacity = "0.8")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.opacity = "1")
                        }
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Detail Modal */}
      {selectedApplication && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 100,
          }}
          onClick={() => setSelectedApplication(null)}
        >
          <div
            style={{
              backgroundColor: "#111827",
              borderRadius: "16px",
              border: "1px solid #374151",
              width: "100%",
              maxWidth: "700px",
              maxHeight: "90vh",
              overflowY: "auto",
              margin: "20px",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div
              style={{
                padding: "24px",
                borderBottom: "1px solid #374151",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h2
                style={{
                  color: "#FFFFFF",
                  fontSize: "20px",
                  fontWeight: "600",
                  margin: 0,
                }}
              >
                Application Details
              </h2>
              <button
                onClick={() => setSelectedApplication(null)}
                style={{
                  background: "none",
                  border: "none",
                  color: "#9CA3AF",
                  fontSize: "24px",
                  cursor: "pointer",
                  padding: "4px",
                }}
              >
                ×
              </button>
            </div>

            {/* Modal Content */}
            <div style={{ padding: "24px" }}>
              {/* User Info */}
              <div style={{ marginBottom: "24px" }}>
                <h3
                  style={{
                    color: "#2BB6DD",
                    fontSize: "14px",
                    fontWeight: "600",
                    marginBottom: "12px",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  Applicant Info
                </h3>
                <div
                  style={{
                    backgroundColor: "#1F2937",
                    padding: "16px",
                    borderRadius: "8px",
                  }}
                >
                  <p style={{ color: "#FFFFFF", margin: "0 0 8px 0" }}>
                    <strong>Name:</strong>{" "}
                    {selectedApplication.users?.first_name || "N/A"}{" "}
                    {selectedApplication.users?.last_name || ""}
                  </p>
                  <p style={{ color: "#FFFFFF", margin: "0 0 8px 0" }}>
                    <strong>Email:</strong>{" "}
                    {selectedApplication.users?.email ||
                      selectedApplication.user_id}
                  </p>
                  <p style={{ color: "#FFFFFF", margin: "0 0 8px 0" }}>
                    <strong>Followers:</strong>{" "}
                    {selectedApplication.follower_count?.toLocaleString()}
                  </p>
                  <p style={{ color: "#FFFFFF", margin: 0 }}>
                    <strong>Existing Partnerships:</strong>{" "}
                    {selectedApplication.existing_partnerships ? "Yes" : "No"}
                  </p>
                </div>
              </div>

              {/* Strategies */}
              <div style={{ marginBottom: "24px" }}>
                <h3
                  style={{
                    color: "#2BB6DD",
                    fontSize: "14px",
                    fontWeight: "600",
                    marginBottom: "12px",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  Application Details
                </h3>
                <div
                  style={{
                    backgroundColor: "#1F2937",
                    padding: "16px",
                    borderRadius: "8px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                  }}
                >
                  <div>
                    <p
                      style={{
                        color: "#9CA3AF",
                        fontSize: "12px",
                        margin: "0 0 4px 0",
                      }}
                    >
                      Promotion Strategy
                    </p>
                    <p
                      style={{ color: "#FFFFFF", margin: 0, fontSize: "14px" }}
                    >
                      {selectedApplication.promotion_strategy || "N/A"}
                    </p>
                  </div>
                  <div>
                    <p
                      style={{
                        color: "#9CA3AF",
                        fontSize: "12px",
                        margin: "0 0 4px 0",
                      }}
                    >
                      Traffic Plan
                    </p>
                    <p
                      style={{ color: "#FFFFFF", margin: 0, fontSize: "14px" }}
                    >
                      {selectedApplication.traffic_plan || "N/A"}
                    </p>
                  </div>
                  <div>
                    <p
                      style={{
                        color: "#9CA3AF",
                        fontSize: "12px",
                        margin: "0 0 4px 0",
                      }}
                    >
                      Target Audience
                    </p>
                    <p
                      style={{ color: "#FFFFFF", margin: 0, fontSize: "14px" }}
                    >
                      {selectedApplication.target_audience || "N/A"}
                    </p>
                  </div>
                  <div>
                    <p
                      style={{
                        color: "#9CA3AF",
                        fontSize: "12px",
                        margin: "0 0 4px 0",
                      }}
                    >
                      Trading Content Examples
                    </p>
                    <p
                      style={{ color: "#FFFFFF", margin: 0, fontSize: "14px" }}
                    >
                      {selectedApplication.trading_content_examples || "N/A"}
                    </p>
                  </div>
                  <div>
                    <p
                      style={{
                        color: "#9CA3AF",
                        fontSize: "12px",
                        margin: "0 0 4px 0",
                      }}
                    >
                      Trading Platform Link
                    </p>
                    <p
                      style={{ color: "#FFFFFF", margin: 0, fontSize: "14px" }}
                    >
                      {selectedApplication.affiliate_trading_platforms ? (
                        <a
                          href={selectedApplication.affiliate_trading_platforms}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: "#2BB6DD" }}
                        >
                          {selectedApplication.affiliate_trading_platforms}
                        </a>
                      ) : (
                        "N/A"
                      )}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              {selectedApplication.details &&
                selectedApplication.details.length > 0 && (
                  <div style={{ marginBottom: "24px" }}>
                    <h3
                      style={{
                        color: "#2BB6DD",
                        fontSize: "14px",
                        fontWeight: "600",
                        marginBottom: "12px",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                      }}
                    >
                      Social Links
                    </h3>
                    <div
                      style={{
                        backgroundColor: "#1F2937",
                        padding: "16px",
                        borderRadius: "8px",
                      }}
                    >
                      {selectedApplication.details.map((detail, index) => (
                        <div
                          key={index}
                          style={{
                            marginBottom:
                              index < selectedApplication.details!.length - 1
                                ? "12px"
                                : 0,
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                          }}
                        >
                          <span style={{ color: "#9CA3AF", fontSize: "14px" }}>
                            {detail.social_types?.name}:
                          </span>
                          <a
                            href={detail.social_types?.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              color: "#2BB6DD",
                              fontSize: "14px",
                              textDecoration: "none",
                            }}
                          >
                            {detail.social_types?.link}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              {/* Applied On */}
              <div>
                <h3
                  style={{
                    color: "#2BB6DD",
                    fontSize: "14px",
                    fontWeight: "600",
                    marginBottom: "12px",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  Applied On
                </h3>
                <div
                  style={{
                    backgroundColor: "#1F2937",
                    padding: "16px",
                    borderRadius: "8px",
                  }}
                >
                  <p style={{ color: "#FFFFFF", margin: 0, fontSize: "14px" }}>
                    {formatDate(selectedApplication.created_at)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
