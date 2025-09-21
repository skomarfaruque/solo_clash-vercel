const getCookieLocale = () => {
  if (typeof document === "undefined") return "en";
  return document.cookie
    .split("; ")
    .find((row) => row.startsWith("locale="))
    ?.split("=")[1];
};
export default getCookieLocale;
