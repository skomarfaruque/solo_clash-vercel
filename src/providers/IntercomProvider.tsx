"use client";

import { useEffect } from "react";

interface IntercomProviderProps {
  children: React.ReactNode;
}

export default function IntercomProvider({ children }: IntercomProviderProps) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const APP_ID = process.env.NEXT_PUBLIC_INTERCOM_APP_ID;

    if (!APP_ID) {
      console.error("NEXT_PUBLIC_INTERCOM_APP_ID is not set");
      return;
    }

    // Intercom standard snippet
    // @ts-expect-error - Intercom global
    window.intercomSettings = {
      api_base: "https://api-iam.intercom.io",
      app_id: APP_ID,
      hide_default_launcher: true,
    };

    // @ts-expect-error - Intercom initialization
    (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/' + APP_ID;var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();

    // Boot Intercom
    // @ts-expect-error - Intercom global
    if (window.Intercom) {
      // @ts-expect-error - Intercom global
      window.Intercom('boot', {
        api_base: "https://api-iam.intercom.io",
        app_id: APP_ID,
        hide_default_launcher: true,
      });
    }

    return () => {
      // @ts-expect-error - Intercom global
      if (window.Intercom) {
        // @ts-expect-error - Intercom global
        window.Intercom('shutdown');
      }
    };
  }, []);

  return <>{children}</>;
}
