import { l as applyThemePreference, I as IS_MAC, m as clientExports, o as jsxRuntimeExports, p as reactExports, q as LanguageRoot, A as App } from "./index-DbjiV--t.js";
applyThemePreference("system");
if (IS_MAC) document.documentElement.classList.add("mac");
const container = document.getElementById("root");
if (!container) throw new Error("Root element missing from index.html");
clientExports.createRoot(container).render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(LanguageRoot, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) }) })
);
