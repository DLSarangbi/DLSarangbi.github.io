import { m as applyThemePreference, I as IS_MAC, u as describe, o as clientExports, p as jsxRuntimeExports, q as reactExports, v as LanguageRoot, A as App } from "./index-Cf2CT0_J.js";
applyThemePreference("system");
if (IS_MAC) document.documentElement.classList.add("mac");
window.addEventListener("error", (event) => {
  window.api?.report?.(`${event.message} (${event.filename.split("/").pop() ?? ""}:${event.lineno})`);
});
window.addEventListener("unhandledrejection", (event) => {
  const reason = event.reason;
  window.api?.report?.(`Unhandled: ${describe(reason)}`);
});
const container = document.getElementById("root");
if (!container) throw new Error("Root element missing from index.html");
clientExports.createRoot(container).render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(LanguageRoot, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) }) })
);
