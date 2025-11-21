/**
 * Intercom Chat utility functions
 * Chat-only mode configuration
 */

interface IntercomWindow extends Window {
  Intercom?: (command: string, ...args: unknown[]) => void;
}

export const intercomUtils = {
  /**
   * Identify a user in Intercom Chat
   */
  identifyUser: (userId: string, userData: Record<string, string | number | boolean> = {}) => {
    if (typeof window !== "undefined") {
      const intercomWindow = window as IntercomWindow;
      if (intercomWindow.Intercom) {
        intercomWindow.Intercom("boot", {
          app_id: process.env.NEXT_PUBLIC_INTERCOM_APP_ID,
          user_id: userId,
          email: userData.email || "",
          name: userData.name || "",
          custom_attributes: {
            ...userData,
          },
        });
      }
    }
  },

  /**
   * Open/Show the Intercom chat
   */
  open: () => {
    if (typeof window !== "undefined") {
      const intercomWindow = window as IntercomWindow;
      if (intercomWindow.Intercom) {
        intercomWindow.Intercom("show");
      }
    }
  },

  /**
   * Hide the Intercom chat
   */
  hide: () => {
    if (typeof window !== "undefined") {
      const intercomWindow = window as IntercomWindow;
      if (intercomWindow.Intercom) {
        intercomWindow.Intercom("hide");
      }
    }
  },

  /**
   * Send a pre-filled message to chat
   */
  sendMessage: (message: string) => {
    if (typeof window !== "undefined") {
      const intercomWindow = window as IntercomWindow;
      if (intercomWindow.Intercom) {
        intercomWindow.Intercom("showNewMessage", message);
      }
    }
  },

  /**
   * Update user attributes
   */
  updateUser: (userData: Record<string, string | number | boolean>) => {
    if (typeof window !== "undefined") {
      const intercomWindow = window as IntercomWindow;
      if (intercomWindow.Intercom) {
        intercomWindow.Intercom("update", userData);
      }
    }
  },

  /**
   * Track an event (for analytics)
   */
  trackEvent: (eventName: string, metadata: Record<string, string | number | boolean> = {}) => {
    if (typeof window !== "undefined") {
      const intercomWindow = window as IntercomWindow;
      if (intercomWindow.Intercom) {
        intercomWindow.Intercom("trackEvent", eventName, metadata);
      }
    }
  },

  /**
   * Logout user from chat
   */
  shutdown: () => {
    if (typeof window !== "undefined") {
      const intercomWindow = window as IntercomWindow;
      if (intercomWindow.Intercom) {
        intercomWindow.Intercom("shutdown");
      }
    }
  },
};
