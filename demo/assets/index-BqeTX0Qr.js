import { g as applyThemePreference, h as clientExports, j as jsxRuntimeExports, r as reactExports, A as App } from "./index-DF3Y1twb.js";
applyThemePreference("system");
if (navigator.userAgent.includes("Macintosh")) document.documentElement.classList.add("mac");
const container = document.getElementById("root");
if (!container) throw new Error("Root element missing from index.html");
clientExports.createRoot(container).render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) })
);
