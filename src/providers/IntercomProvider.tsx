"use client";

import { useEffect } from "react";

interface IntercomProviderProps {
  children: React.ReactNode;
}

export default function IntercomProvider({ children }: IntercomProviderProps) {
  useEffect(() => {
    // Initialize Intercom with chat-only mode
    if (typeof window !== "undefined") {
      // @ts-ignore
      window.intercomSettings = {
        api_base: "https://api-iam.intercom.io",
        app_id: process.env.NEXT_PUBLIC_INTERCOM_APP_ID,
        // Chat-only configuration
        hide_default_launcher: true, // Hide Intercom's default launcher
      };

      // Load Intercom script
      const script = document.createElement("script");
      script.async = true;
      script.src = "https://widget.intercom.io/widget/" + process.env.NEXT_PUBLIC_INTERCOM_APP_ID;
      document.head.appendChild(script);

      return () => {
        // Cleanup
        if (document.head.contains(script)) {
          document.head.removeChild(script);
        }
      };
    }
  }, []);

  return <>{children}</>;
}
