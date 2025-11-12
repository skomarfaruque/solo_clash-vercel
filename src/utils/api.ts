const API_BASE_URL = "https://solo-clash-backend.vercel.app/api/v1";

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

interface LoginResponse {
  token: string;
  user: {
    id: string;
    email: string;
    name?: string;
  };
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

export const authApi = {
  login: async (email: string, password: string) => {
    return apiClient.post<LoginResponse>("/auth/login", {
      email,
      password,
    });
  },
};

export type { ApiResponse, LoginResponse };
export default apiClient;
