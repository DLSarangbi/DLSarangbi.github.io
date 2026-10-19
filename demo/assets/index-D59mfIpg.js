import { o as applyThemePreference, I as IS_MAC, m as fontFaceCss, F as FONT_SCHEME_BASE, v as describe, p as clientExports, q as jsxRuntimeExports, u as reactExports, w as LanguageRoot, A as App } from "./index-cH_LXvgM.js";
applyThemePreference("system");
if (IS_MAC) document.documentElement.classList.add("mac");
const faces = document.createElement("style");
faces.textContent = fontFaceCss(FONT_SCHEME_BASE);
document.head.appendChild(faces);
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
