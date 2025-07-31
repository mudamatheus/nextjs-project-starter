(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/hooks/useCustomTheme.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useCustomTheme": (()=>useCustomTheme)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
const useCustomTheme = ()=>{
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCustomTheme.useEffect": ()=>{
            // Aplicar tema personalizado salvo no localStorage
            const applyCustomTheme = {
                "useCustomTheme.useEffect.applyCustomTheme": ()=>{
                    const isThemeEnabled = localStorage.getItem('notesapp_theme_enabled');
                    const savedTheme = localStorage.getItem('notesapp_custom_theme');
                    if (isThemeEnabled === 'true' && savedTheme) {
                        try {
                            const theme = JSON.parse(savedTheme);
                            const root = document.documentElement;
                            root.style.setProperty('--custom-text-color', theme.textColor);
                            root.style.setProperty('--custom-bg-color', theme.backgroundColor);
                            root.style.setProperty('--custom-accent-color', theme.accentColor);
                            root.style.setProperty('--custom-border-color', theme.borderColor);
                            // Adicionar classe para ativar tema personalizado
                            document.body.classList.add('custom-theme');
                        } catch (error) {
                            console.error('Erro ao aplicar tema personalizado:', error);
                        }
                    }
                }
            }["useCustomTheme.useEffect.applyCustomTheme"];
            // Aplicar tema na inicialização
            applyCustomTheme();
            // Observar mudanças no localStorage (para sincronizar entre abas)
            const handleStorageChange = {
                "useCustomTheme.useEffect.handleStorageChange": (e)=>{
                    if (e.key === 'notesapp_custom_theme' || e.key === 'notesapp_theme_enabled') {
                        applyCustomTheme();
                    }
                }
            }["useCustomTheme.useEffect.handleStorageChange"];
            window.addEventListener('storage', handleStorageChange);
            return ({
                "useCustomTheme.useEffect": ()=>{
                    window.removeEventListener('storage', handleStorageChange);
                }
            })["useCustomTheme.useEffect"];
        }
    }["useCustomTheme.useEffect"], []);
};
_s(useCustomTheme, "OD7bBpZva5O2jO+Puf00hKivP7c=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ThemeWrapper.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ThemeWrapper)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCustomTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useCustomTheme.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function ThemeWrapper({ children }) {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCustomTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCustomTheme"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
_s(ThemeWrapper, "rGwxit7fgFCchNIG5PAusoSJ2j0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCustomTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCustomTheme"]
    ];
});
_c = ThemeWrapper;
var _c;
__turbopack_context__.k.register(_c, "ThemeWrapper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_e3acde60._.js.map