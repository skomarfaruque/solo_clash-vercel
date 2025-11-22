const API_BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL ||
  "https://solo-clash-backend.vercel.app/api/v1";

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

interface LoginResponseData {
  user: {
    id: string;
    email: string;
    user_name: string;
    first_name?: string;
    last_name?: string;
    is_news_letter: boolean;
    address_line_1?: string;
    address_line_2?: string;
    city?: string;
    post_code?: string;
    country_id?: string | null;
    state?: string;
    date_of_birth?: string;
    roleId?: string | null;
    status: string;
    createdAt: string;
    updatedAt: string;
    deletedAt?: string | null;
    role?: string | null;
  };
  access_token: string;
  refresh_token: string;
}

interface LoginResponse {
  success: boolean;
  message: string;
  data: LoginResponseData;
  timestamp: string;
}

class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private getHeaders(): Record<string, string> {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    // Add auth token if available
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("adminToken");
      if (token) {
        headers["Authorization"] = `Bearer ${token}`;
      }
    }

    return headers;
  }

  private async handleResponse<T>(response: Response): Promise<T> {
    const data = await response.json();

    if (!response.ok) {
      throw {
        status: response.status,
        message:
          data.message ||
          data.error ||
          `HTTP ${response.status}: ${response.statusText}`,
        data,
      };
    }

    return data;
  }

  async post<T>(endpoint: string, body?: unknown): Promise<T> {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        method: "POST",
        headers: this.getHeaders(),
        body: body ? JSON.stringify(body) : undefined,
      });

      return this.handleResponse<T>(response);
    } catch (error) {
      if (error instanceof TypeError) {
        throw {
          message: "Network error. Please check your connection.",
          error,
        };
      }
      throw error;
    }
  }

  async get<T>(endpoint: string): Promise<T> {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        method: "GET",
        headers: this.getHeaders(),
      });

      return this.handleResponse<T>(response);
    } catch (error) {
      if (error instanceof TypeError) {
        throw {
          message: "Network error. Please check your connection.",
          error,
        };
      }
      throw error;
    }
  }
}

const apiClient = new ApiClient(API_BASE_URL);

interface RefreshTokenResponse {
  success: boolean;
  message: string;
  data: {
    access_token: string;
    refresh_token: string;
  };
  timestamp: string;
}

/**
 * Refresh the access token using the refresh token
 */
export const refreshAccessToken = async (): Promise<string | null> => {
  try {
    const refreshToken = localStorage.getItem("adminRefreshToken");

    if (!refreshToken) {
      console.error("No refresh token available");
      return null;
    }

    const response = await fetch(`${API_BASE_URL}/auth/refresh`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        refresh_token: refreshToken,
      }),
    });

    const data = (await response.json()) as RefreshTokenResponse;

    if (data.success && data.data?.access_token) {
      // Store new tokens
      localStorage.setItem("adminToken", data.data.access_token);
      localStorage.setItem("adminRefreshToken", data.data.refresh_token);

      // Update cookies
      const expiryDate = new Date();
      expiryDate.setTime(expiryDate.getTime() + 24 * 60 * 60 * 1000);
      document.cookie = `adminToken=${
        data.data.access_token
      }; expires=${expiryDate.toUTCString()}; path=/`;
      document.cookie = `adminRefreshToken=${
        data.data.refresh_token
      }; expires=${expiryDate.toUTCString()}; path=/`;

      console.log("Token refreshed successfully");
      return data.data.access_token;
    } else {
      console.error("Failed to refresh token:", data.message);
      return null;
    }
  } catch (error) {
    console.error("Error refreshing token:", error);
    return null;
  }
};

export const authApi = {
  login: async (email: string, password: string) => {
    return apiClient.post<LoginResponse>("/auth/login", {
      email,
      password,
    });
  },
};

export type { ApiResponse, LoginResponse, RefreshTokenResponse };
export default apiClient;
