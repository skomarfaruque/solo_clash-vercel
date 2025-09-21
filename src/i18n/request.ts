// src/i18n/request.ts
import { cookies } from "next/headers";
import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async () => {
  // 1. Try to get locale from cookies
  const cookieStore = cookies();
  const locale = (await cookieStore).get("locale")?.value || "en";

  // 2. Load the correct messages
  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
