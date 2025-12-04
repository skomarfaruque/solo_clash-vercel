/**
 * Intercom Chat utility functions
 * Chat-only mode configuration
 */

export const intercomUtils = {
  /**
   * Identify a user in Intercom Chat
   */
  identifyUser: (
    userId: string,
    userData: Record<string, string | number | boolean> = {}
  ) => {
    if (typeof window !== "undefined" && window.Intercom) {
      window.Intercom("boot", {
        app_id: process.env.NEXT_PUBLIC_INTERCOM_APP_ID,
        user_id: userId,
        email: userData.email || "",
        name: userData.name || "",
        custom_attributes: {
          ...userData,
        },
      });
    }
  },

  /**
   * Open/Show the Intercom chat
   */
  open: () => {
    if (typeof window !== "undefined" && window.Intercom) {
      window.Intercom("show");
    }
  },

  /**
   * Hide the Intercom chat
   */
  hide: () => {
    if (typeof window !== "undefined" && window.Intercom) {
      window.Intercom("hide");
    }
  },

  /**
   * Send a pre-filled message to chat
   */
  sendMessage: (message: string) => {
    if (typeof window !== "undefined" && window.Intercom) {
      window.Intercom("showNewMessage", message);
    }
  },

  /**
   * Update user attributes
   */
  updateUser: (userData: Record<string, string | number | boolean>) => {
    if (typeof window !== "undefined" && window.Intercom) {
      window.Intercom("update", userData);
    }
  },

  /**
   * Track an event (for analytics)
   */
  trackEvent: (
    eventName: string,
    metadata: Record<string, string | number | boolean> = {}
  ) => {
    if (typeof window !== "undefined" && window.Intercom) {
      window.Intercom("trackEvent", eventName, metadata);
    }
  },

  /**
   * Logout user from chat
   */
  shutdown: () => {
    if (typeof window !== "undefined" && window.Intercom) {
      window.Intercom("shutdown");
    }
  },
};
