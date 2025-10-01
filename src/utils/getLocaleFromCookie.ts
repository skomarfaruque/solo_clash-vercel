// utils/getLocaleFromCookie.ts

/**
 * Retrieves the locale from the browser's cookies.
 * Defaults to "en" if no locale is found or if the code is running server-side.
 *
 * @returns {string} The locale string (e.g., "en", "ar", etc.).
 */
export default function getLocaleFromCookie(): string {
  if (typeof document === "undefined") return "en";
  const regex = /(?:^|; )locale=([^;]*)/;
  const match = regex.exec(document.cookie);
  return match ? decodeURIComponent(match[1]) : "en";
}
