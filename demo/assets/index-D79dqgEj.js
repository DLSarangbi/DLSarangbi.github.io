import { g as applyThemePreference, I as IS_MAC, h as clientExports, j as jsxRuntimeExports, r as reactExports, A as App } from "./index-D03Xx9BR.js";
applyThemePreference("system");
if (IS_MAC) document.documentElement.classList.add("mac");
const container = document.getElementById("root");
if (!container) throw new Error("Root element missing from index.html");
clientExports.createRoot(container).render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) })
);
