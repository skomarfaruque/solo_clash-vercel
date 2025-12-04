"use client";

import { useEffect } from "react";

interface IntercomProviderProps {
  children: React.ReactNode;
}

declare global {
  interface Window {
    Intercom?: ((...args: unknown[]) => void) & {
      q?: unknown[][];
      c?: (args: unknown[]) => void;
    };
    intercomSettings?: Record<string, unknown>;
    attachEvent?: (event: string, callback: () => void) => void;
  }
}

export default function IntercomProvider({ children }: IntercomProviderProps) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const APP_ID = process.env.NEXT_PUBLIC_INTERCOM_APP_ID;

    if (!APP_ID) {
      console.error("NEXT_PUBLIC_INTERCOM_APP_ID is not set");
      return;
    }

    window.intercomSettings = {
      api_base: "https://api-iam.intercom.io",
      app_id: APP_ID,
      hide_default_launcher: true,
    };

    (function () {
      const w = window;
      const ic = w.Intercom;
      if (typeof ic === "function") {
        ic("reattach_activator");
        ic("update", w.intercomSettings);
      } else {
        const d = document;
        const intercomFunc = function (...args: unknown[]) {
          if (intercomFunc.c) intercomFunc.c(args);
        } as ((...args: unknown[]) => void) & {
          q: unknown[][];
          c: (args: unknown[]) => void;
        };
        intercomFunc.q = [];
        intercomFunc.c = function (args: unknown[]) {
          intercomFunc.q.push(args);
        };
        w.Intercom = intercomFunc;
        const l = function () {
          const s = d.createElement("script");
          s.type = "text/javascript";
          s.async = true;
          s.src = "https://widget.intercom.io/widget/" + APP_ID;
          const x = d.getElementsByTagName("script")[0];
          if (x && x.parentNode) {
            x.parentNode.insertBefore(s, x);
          }
        };
        if (document.readyState === "complete") {
          l();
        } else if (w.attachEvent) {
          w.attachEvent("onload", l);
        } else {
          w.addEventListener("load", l, false);
        }
      }
    })();

    // Boot Intercom
    if (window.Intercom) {
      window.Intercom("boot", {
        api_base: "https://api-iam.intercom.io",
        app_id: APP_ID,
        hide_default_launcher: true,
      });
    }

    return () => {
      if (window.Intercom) {
        window.Intercom("shutdown");
      }
    };
  }, []);

  return <>{children}</>;
}
