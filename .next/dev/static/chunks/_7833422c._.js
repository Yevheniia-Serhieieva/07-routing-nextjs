(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createNote",
    ()=>createNote,
    "deleteNote",
    ()=>deleteNote,
    "fetchNoteById",
    ()=>fetchNoteById,
    "getNotes",
    ()=>getNotes,
    "getTags",
    ()=>getTags
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].defaults.baseURL = `https://notehub-public.goit.study/api`;
const myKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Inkuby5zZXJoaWVpZXZhQGdtYWlsLmNvbSIsImlhdCI6MTc2MTc1ODkyOX0.23CHG9iV74tgYNr9SA-Yj-LwwzJQPP1HOr9dPhSJIeQ");
const getNotes = async (page = 1, perPage = 12, search)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/notes`, {
        params: {
            page,
            perPage,
            ...search ? {
                search
            } : {}
        },
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${myKey}`
        }
    });
    return response.data;
};
const fetchNoteById = async (id)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/notes/${id}`, {
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${myKey}`
        }
    });
    return response.data;
};
const createNote = async (title, content, tag)=>{
    const newNote = {
        title,
        content,
        tag
    };
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`/notes`, newNote, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${myKey}`
        }
    });
    return response.data;
};
const deleteNote = async (id)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(`/notes/${id}`, {
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${myKey}`
        }
    });
    return response.data;
};
const getTags = async ()=>{
    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(`/categories`);
    return response.data;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/loading.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "text": "loading-module__PBh0PW__text",
});
}),
"[project]/app/loading.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Loading
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$loading$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/loading.module.css [app-client] (css module)");
;
;
;
function Loading() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "80ef22c0624ee343a5feec79fa295d7e50e868fdf39b202c04f70966835dd863") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "80ef22c0624ee343a5feec79fa295d7e50e868fdf39b202c04f70966835dd863";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$loading$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].text,
                children: "Loading, please wait..."
            }, void 0, false, {
                fileName: "[project]/app/loading.tsx",
                lineNumber: 13,
                columnNumber: 12
            }, this)
        }, void 0, false);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c = Loading;
var _c;
__turbopack_context__.k.register(_c, "Loading");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/NoteList/NoteList.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "button": "NoteList-module__LCs_aq__button",
  "content": "NoteList-module__LCs_aq__content",
  "footer": "NoteList-module__LCs_aq__footer",
  "link": "NoteList-module__LCs_aq__link",
  "list": "NoteList-module__LCs_aq__list",
  "listItem": "NoteList-module__LCs_aq__listItem",
  "tag": "NoteList-module__LCs_aq__tag",
  "title": "NoteList-module__LCs_aq__title",
});
}),
"[project]/components/NoteList/NoteList.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NoteList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NoteList$2f$NoteList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/NoteList/NoteList.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
function NoteList(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(14);
    if ($[0] !== "05c73b8c38b224579991fee1a24115b81af1b2b5a0d26c1c8107f769156f9a01") {
        for(let $i = 0; $i < 14; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "05c73b8c38b224579991fee1a24115b81af1b2b5a0d26c1c8107f769156f9a01";
    }
    const { notes } = t0;
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    let t1;
    if ($[1] !== queryClient) {
        t1 = {
            mutationFn: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteNote"],
            onSuccess: ()=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success("Note deleted");
                queryClient.invalidateQueries({
                    queryKey: [
                        "notes"
                    ]
                });
            },
            onError: _temp
        };
        $[1] = queryClient;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const mutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])(t1);
    let t2;
    if ($[3] !== mutation) {
        t2 = ({
            "NoteList[handleDelete]": (id)=>{
                mutation.mutate(id);
            }
        })["NoteList[handleDelete]"];
        $[3] = mutation;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const handleDelete = t2;
    let t3;
    if ($[5] !== handleDelete || $[6] !== mutation || $[7] !== notes) {
        let t4;
        if ($[9] !== handleDelete || $[10] !== mutation) {
            t4 = ({
                "NoteList[notes.map()]": (note)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NoteList$2f$NoteList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].listItem,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NoteList$2f$NoteList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                                children: note.title
                            }, void 0, false, {
                                fileName: "[project]/components/NoteList/NoteList.tsx",
                                lineNumber: 59,
                                columnNumber: 85
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NoteList$2f$NoteList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].content,
                                children: note.content
                            }, void 0, false, {
                                fileName: "[project]/components/NoteList/NoteList.tsx",
                                lineNumber: 59,
                                columnNumber: 128
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NoteList$2f$NoteList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].footer,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NoteList$2f$NoteList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tag,
                                        children: note.tag
                                    }, void 0, false, {
                                        fileName: "[project]/components/NoteList/NoteList.tsx",
                                        lineNumber: 59,
                                        columnNumber: 201
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/notes/${note.id}`,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NoteList$2f$NoteList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].link,
                                        children: "View"
                                    }, void 0, false, {
                                        fileName: "[project]/components/NoteList/NoteList.tsx",
                                        lineNumber: 59,
                                        columnNumber: 244
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: {
                                            "NoteList[notes.map() > <button>.onClick]": ()=>handleDelete(note.id)
                                        }["NoteList[notes.map() > <button>.onClick]"],
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NoteList$2f$NoteList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].button,
                                        disabled: mutation.isPending,
                                        children: "Delete"
                                    }, void 0, false, {
                                        fileName: "[project]/components/NoteList/NoteList.tsx",
                                        lineNumber: 59,
                                        columnNumber: 309
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/NoteList/NoteList.tsx",
                                lineNumber: 59,
                                columnNumber: 173
                            }, this)
                        ]
                    }, note.id, true, {
                        fileName: "[project]/components/NoteList/NoteList.tsx",
                        lineNumber: 59,
                        columnNumber: 42
                    }, this)
            })["NoteList[notes.map()]"];
            $[9] = handleDelete;
            $[10] = mutation;
            $[11] = t4;
        } else {
            t4 = $[11];
        }
        t3 = notes.map(t4);
        $[5] = handleDelete;
        $[6] = mutation;
        $[7] = notes;
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    let t4;
    if ($[12] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NoteList$2f$NoteList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].list,
                children: t3
            }, void 0, false, {
                fileName: "[project]/components/NoteList/NoteList.tsx",
                lineNumber: 79,
                columnNumber: 12
            }, this)
        }, void 0, false);
        $[12] = t3;
        $[13] = t4;
    } else {
        t4 = $[13];
    }
    return t4;
}
_s(NoteList, "mUUakYvFQSudGRmMzZErOI9nuuc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
_c = NoteList;
function _temp() {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error("Failed to delete note");
}
var _c;
__turbopack_context__.k.register(_c, "NoteList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/notes/Notes.client.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "app": "Notes-client-module__vMURbW__app",
  "button": "Notes-client-module__vMURbW__button",
  "toolbar": "Notes-client-module__vMURbW__toolbar",
});
}),
"[project]/components/SearchBox/SearchBox.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "input": "SearchBox-module__izN5UG__input",
});
}),
"[project]/components/SearchBox/SearchBox.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SearchBox
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SearchBox$2f$SearchBox$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/SearchBox/SearchBox.module.css [app-client] (css module)");
;
;
;
function SearchBox(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "43a917f10513b9f29c25625cd26b72dd6262e66e085d9ca2d708f1517f64badb") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "43a917f10513b9f29c25625cd26b72dd6262e66e085d9ca2d708f1517f64badb";
    }
    const { value, onSearchChange } = t0;
    let t1;
    if ($[1] !== onSearchChange) {
        t1 = ({
            "SearchBox[<input>.onChange]": (e)=>onSearchChange(e.target.value)
        })["SearchBox[<input>.onChange]"];
        $[1] = onSearchChange;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== t1 || $[4] !== value) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                onChange: t1,
                value: value,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SearchBox$2f$SearchBox$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                type: "text",
                placeholder: "Search notes"
            }, void 0, false, {
                fileName: "[project]/components/SearchBox/SearchBox.tsx",
                lineNumber: 31,
                columnNumber: 12
            }, this)
        }, void 0, false);
        $[3] = t1;
        $[4] = value;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    return t2;
}
_c = SearchBox;
var _c;
__turbopack_context__.k.register(_c, "SearchBox");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Pagination/Pagination.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "active": "Pagination-module__QyWOzW__active",
  "pagination": "Pagination-module__QyWOzW__pagination",
});
}),
"[project]/components/Pagination/Pagination.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Pagination
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Pagination$2f$Pagination$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/Pagination/Pagination.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$paginate$2f$dist$2f$react$2d$paginate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-paginate/dist/react-paginate.js [app-client] (ecmascript)");
;
;
;
;
function Pagination(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "f8d46984ec4e0e774373cf50c00e01c98a71af900af830379f7aab4137e50c04") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f8d46984ec4e0e774373cf50c00e01c98a71af900af830379f7aab4137e50c04";
    }
    const { pageCount, currentPage, onPageChange } = t0;
    let t1;
    if ($[1] !== currentPage || $[2] !== onPageChange) {
        t1 = ({
            "Pagination[handlePageClick]": (t2)=>{
                const { selected } = t2;
                const next = selected + 1;
                if (next !== currentPage) {
                    onPageChange(next);
                }
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            }
        })["Pagination[handlePageClick]"];
        $[1] = currentPage;
        $[2] = onPageChange;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const handlePageClick = t1;
    const t2 = currentPage - 1;
    let t3;
    if ($[4] !== handlePageClick || $[5] !== pageCount || $[6] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$paginate$2f$dist$2f$react$2d$paginate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                pageCount: pageCount,
                pageRangeDisplayed: 5,
                marginPagesDisplayed: 1,
                onPageChange: handlePageClick,
                forcePage: t2,
                containerClassName: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Pagination$2f$Pagination$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pagination,
                activeClassName: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Pagination$2f$Pagination$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active,
                nextLabel: "\u2192",
                previousLabel: "\u2190"
            }, void 0, false, {
                fileName: "[project]/components/Pagination/Pagination.tsx",
                lineNumber: 49,
                columnNumber: 12
            }, this)
        }, void 0, false);
        $[4] = handlePageClick;
        $[5] = pageCount;
        $[6] = t2;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    return t3;
}
_c = Pagination;
var _c;
__turbopack_context__.k.register(_c, "Pagination");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Modal/Modal.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "backdrop": "Modal-module__sR2AWG__backdrop",
  "modal": "Modal-module__sR2AWG__modal",
});
}),
"[project]/components/Modal/Modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Modal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Modal$2f$Modal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/Modal/Modal.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
function Modal(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "95adc70793fe6087ca57e89d5267c15afabf5227466fb71b2e636121618b3bfb") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "95adc70793fe6087ca57e89d5267c15afabf5227466fb71b2e636121618b3bfb";
    }
    const { onClose, children } = t0;
    let t1;
    if ($[1] !== onClose) {
        t1 = ({
            "Modal[handleBackdropeClick]": (e)=>{
                if (e.target === e.currentTarget) {
                    onClose();
                }
            }
        })["Modal[handleBackdropeClick]"];
        $[1] = onClose;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const handleBackdropeClick = t1;
    let t2;
    let t3;
    if ($[3] !== onClose) {
        t2 = ({
            "Modal[useEffect()]": ()=>{
                const handleKeyDown = {
                    "Modal[useEffect() > handleKeyDown]": (e_0)=>{
                        if (e_0.key === "Escape") {
                            onClose();
                        }
                    }
                }["Modal[useEffect() > handleKeyDown]"];
                document.addEventListener("keydown", handleKeyDown);
                document.body.style.overflow = "hidden";
                return ()=>{
                    document.removeEventListener("keydown", handleKeyDown);
                    document.body.style.overflow = "";
                };
            }
        })["Modal[useEffect()]"];
        t3 = [
            onClose
        ];
        $[3] = onClose;
        $[4] = t2;
        $[5] = t3;
    } else {
        t2 = $[4];
        t3 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    if ($[6] !== children) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Modal$2f$Modal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modal,
            children: children
        }, void 0, false, {
            fileName: "[project]/components/Modal/Modal.tsx",
            lineNumber: 67,
            columnNumber: 10
        }, this);
        $[6] = children;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== handleBackdropeClick || $[9] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            onClick: handleBackdropeClick,
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Modal$2f$Modal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].backdrop,
            role: "dialog",
            "aria-modal": "true",
            children: t4
        }, void 0, false, {
            fileName: "[project]/components/Modal/Modal.tsx",
            lineNumber: 75,
            columnNumber: 23
        }, this), document.body);
        $[8] = handleBackdropeClick;
        $[9] = t4;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    return t5;
}
_s(Modal, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = Modal;
var _c;
__turbopack_context__.k.register(_c, "Modal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/NoteForm/NoteForm.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "actions": "NoteForm-module__XA_SlW__actions",
  "cancelButton": "NoteForm-module__XA_SlW__cancelButton",
  "error": "NoteForm-module__XA_SlW__error",
  "form": "NoteForm-module__XA_SlW__form",
  "formGroup": "NoteForm-module__XA_SlW__formGroup",
  "input": "NoteForm-module__XA_SlW__input",
  "select": "NoteForm-module__XA_SlW__select",
  "submitButton": "NoteForm-module__XA_SlW__submitButton",
  "textarea": "NoteForm-module__XA_SlW__textarea",
});
}),
"[project]/components/NoteForm/NoteForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NoteForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/formik/dist/formik.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NoteForm$2f$NoteForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/NoteForm/NoteForm.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/yup/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
const initialValues = {
    title: '',
    content: '',
    tag: 'Todo'
};
const validationSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"]().shape({
    title: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().min(3, 'Title too short').max(50, 'Title too long').required('Title is required'),
    content: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().max(500, 'Content is too long'),
    tag: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().oneOf([
        'Todo',
        'Work',
        'Personal',
        'Meeting',
        'Shopping'
    ]).required('Tag is required')
});
function NoteForm(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(50);
    if ($[0] !== "6e5dec477aedd2661e3aba6cab1ee80ad4355e9b6bbaee67e7afda2fa4ae0f36") {
        for(let $i = 0; $i < 50; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6e5dec477aedd2661e3aba6cab1ee80ad4355e9b6bbaee67e7afda2fa4ae0f36";
    }
    const { onCancel } = t0;
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const fieldId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            mutationFn: _temp
        };
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const mutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])(t1);
    let t2;
    if ($[2] !== mutation || $[3] !== onCancel || $[4] !== queryClient) {
        t2 = ({
            "NoteForm[handleSubmit]": (values_0, actions)=>{
                mutation.mutate(values_0, {
                    onSuccess: ()=>{
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success("Note created");
                        queryClient.invalidateQueries({
                            queryKey: [
                                "notes"
                            ]
                        });
                        actions.resetForm();
                        onCancel();
                    },
                    onError: _temp2
                });
            }
        })["NoteForm[handleSubmit]"];
        $[2] = mutation;
        $[3] = onCancel;
        $[4] = queryClient;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    const handleSubmit = t2;
    const t3 = `${fieldId}-title`;
    let t4;
    if ($[6] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            htmlFor: t3,
            children: "Title"
        }, void 0, false, {
            fileName: "[project]/components/NoteForm/NoteForm.tsx",
            lineNumber: 79,
            columnNumber: 10
        }, this);
        $[6] = t3;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    const t5 = `${fieldId}-title`;
    let t6;
    if ($[8] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
            id: t5,
            type: "text",
            name: "title",
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NoteForm$2f$NoteForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input
        }, void 0, false, {
            fileName: "[project]/components/NoteForm/NoteForm.tsx",
            lineNumber: 88,
            columnNumber: 10
        }, this);
        $[8] = t5;
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    let t7;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorMessage"], {
            name: "title",
            component: "span",
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NoteForm$2f$NoteForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].error
        }, void 0, false, {
            fileName: "[project]/components/NoteForm/NoteForm.tsx",
            lineNumber: 96,
            columnNumber: 10
        }, this);
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    let t8;
    if ($[11] !== t4 || $[12] !== t6) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NoteForm$2f$NoteForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formGroup,
            children: [
                t4,
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/components/NoteForm/NoteForm.tsx",
            lineNumber: 103,
            columnNumber: 10
        }, this);
        $[11] = t4;
        $[12] = t6;
        $[13] = t8;
    } else {
        t8 = $[13];
    }
    const t9 = `${fieldId}-content`;
    let t10;
    if ($[14] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            htmlFor: t9,
            children: "Content"
        }, void 0, false, {
            fileName: "[project]/components/NoteForm/NoteForm.tsx",
            lineNumber: 113,
            columnNumber: 11
        }, this);
        $[14] = t9;
        $[15] = t10;
    } else {
        t10 = $[15];
    }
    const t11 = `${fieldId}-content`;
    let t12;
    if ($[16] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
            as: "textarea",
            id: t11,
            name: "content",
            rows: 8,
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NoteForm$2f$NoteForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].textarea
        }, void 0, false, {
            fileName: "[project]/components/NoteForm/NoteForm.tsx",
            lineNumber: 122,
            columnNumber: 11
        }, this);
        $[16] = t11;
        $[17] = t12;
    } else {
        t12 = $[17];
    }
    let t13;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorMessage"], {
            name: "content",
            component: "span",
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NoteForm$2f$NoteForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].error
        }, void 0, false, {
            fileName: "[project]/components/NoteForm/NoteForm.tsx",
            lineNumber: 130,
            columnNumber: 11
        }, this);
        $[18] = t13;
    } else {
        t13 = $[18];
    }
    let t14;
    if ($[19] !== t10 || $[20] !== t12) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NoteForm$2f$NoteForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formGroup,
            children: [
                t10,
                t12,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/components/NoteForm/NoteForm.tsx",
            lineNumber: 137,
            columnNumber: 11
        }, this);
        $[19] = t10;
        $[20] = t12;
        $[21] = t14;
    } else {
        t14 = $[21];
    }
    const t15 = `${fieldId}-tag`;
    let t16;
    if ($[22] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            htmlFor: t15,
            children: "Tag"
        }, void 0, false, {
            fileName: "[project]/components/NoteForm/NoteForm.tsx",
            lineNumber: 147,
            columnNumber: 11
        }, this);
        $[22] = t15;
        $[23] = t16;
    } else {
        t16 = $[23];
    }
    const t17 = `${fieldId}-tag`;
    let t18;
    let t19;
    let t20;
    let t21;
    let t22;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "Todo",
            children: "Todo"
        }, void 0, false, {
            fileName: "[project]/components/NoteForm/NoteForm.tsx",
            lineNumber: 160,
            columnNumber: 11
        }, this);
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "Work",
            children: "Work"
        }, void 0, false, {
            fileName: "[project]/components/NoteForm/NoteForm.tsx",
            lineNumber: 161,
            columnNumber: 11
        }, this);
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "Personal",
            children: "Personal"
        }, void 0, false, {
            fileName: "[project]/components/NoteForm/NoteForm.tsx",
            lineNumber: 162,
            columnNumber: 11
        }, this);
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "Meeting",
            children: "Meeting"
        }, void 0, false, {
            fileName: "[project]/components/NoteForm/NoteForm.tsx",
            lineNumber: 163,
            columnNumber: 11
        }, this);
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "Shopping",
            children: "Shopping"
        }, void 0, false, {
            fileName: "[project]/components/NoteForm/NoteForm.tsx",
            lineNumber: 164,
            columnNumber: 11
        }, this);
        $[24] = t18;
        $[25] = t19;
        $[26] = t20;
        $[27] = t21;
        $[28] = t22;
    } else {
        t18 = $[24];
        t19 = $[25];
        t20 = $[26];
        t21 = $[27];
        t22 = $[28];
    }
    let t23;
    if ($[29] !== t17) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
            as: "select",
            id: t17,
            name: "tag",
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NoteForm$2f$NoteForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].select,
            children: [
                t18,
                t19,
                t20,
                t21,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/components/NoteForm/NoteForm.tsx",
            lineNumber: 179,
            columnNumber: 11
        }, this);
        $[29] = t17;
        $[30] = t23;
    } else {
        t23 = $[30];
    }
    let t24;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorMessage"], {
            name: "tag",
            component: "span",
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NoteForm$2f$NoteForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].error
        }, void 0, false, {
            fileName: "[project]/components/NoteForm/NoteForm.tsx",
            lineNumber: 187,
            columnNumber: 11
        }, this);
        $[31] = t24;
    } else {
        t24 = $[31];
    }
    let t25;
    if ($[32] !== t16 || $[33] !== t23) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NoteForm$2f$NoteForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formGroup,
            children: [
                t16,
                t23,
                t24
            ]
        }, void 0, true, {
            fileName: "[project]/components/NoteForm/NoteForm.tsx",
            lineNumber: 194,
            columnNumber: 11
        }, this);
        $[32] = t16;
        $[33] = t23;
        $[34] = t25;
    } else {
        t25 = $[34];
    }
    let t26;
    if ($[35] !== onCancel) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onCancel,
            type: "button",
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NoteForm$2f$NoteForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cancelButton,
            children: "Cancel"
        }, void 0, false, {
            fileName: "[project]/components/NoteForm/NoteForm.tsx",
            lineNumber: 203,
            columnNumber: 11
        }, this);
        $[35] = onCancel;
        $[36] = t26;
    } else {
        t26 = $[36];
    }
    let t27;
    if ($[37] !== mutation.isPending) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "submit",
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NoteForm$2f$NoteForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].submitButton,
            disabled: mutation.isPending,
            children: "Create note"
        }, void 0, false, {
            fileName: "[project]/components/NoteForm/NoteForm.tsx",
            lineNumber: 211,
            columnNumber: 11
        }, this);
        $[37] = mutation.isPending;
        $[38] = t27;
    } else {
        t27 = $[38];
    }
    let t28;
    if ($[39] !== t26 || $[40] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NoteForm$2f$NoteForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actions,
            children: [
                t26,
                t27
            ]
        }, void 0, true, {
            fileName: "[project]/components/NoteForm/NoteForm.tsx",
            lineNumber: 219,
            columnNumber: 11
        }, this);
        $[39] = t26;
        $[40] = t27;
        $[41] = t28;
    } else {
        t28 = $[41];
    }
    let t29;
    if ($[42] !== t14 || $[43] !== t25 || $[44] !== t28 || $[45] !== t8) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Form"], {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NoteForm$2f$NoteForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].form,
            children: [
                t8,
                t14,
                t25,
                t28
            ]
        }, void 0, true, {
            fileName: "[project]/components/NoteForm/NoteForm.tsx",
            lineNumber: 228,
            columnNumber: 11
        }, this);
        $[42] = t14;
        $[43] = t25;
        $[44] = t28;
        $[45] = t8;
        $[46] = t29;
    } else {
        t29 = $[46];
    }
    let t30;
    if ($[47] !== handleSubmit || $[48] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Formik"], {
            initialValues: initialValues,
            validationSchema: validationSchema,
            onSubmit: handleSubmit,
            children: t29
        }, void 0, false, {
            fileName: "[project]/components/NoteForm/NoteForm.tsx",
            lineNumber: 239,
            columnNumber: 11
        }, this);
        $[47] = handleSubmit;
        $[48] = t29;
        $[49] = t30;
    } else {
        t30 = $[49];
    }
    return t30;
}
_s(NoteForm, "LdmMXmVRt1MuqlOQVxiyBjHrpMA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
_c = NoteForm;
function _temp2(error) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error(error.message || "Failed to create note");
}
function _temp(values) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createNote"])(values.title, values.content, values.tag);
}
var _c;
__turbopack_context__.k.register(_c, "NoteForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/notes/error.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "text": "error-module__1twf8q__text",
});
}),
"[project]/app/notes/error.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$notes$2f$error$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/notes/error.module.css [app-client] (css module)");
'use client';
;
;
;
const ErrorNote = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "b379a69972d91d5467c8c0b211b2af60848bdec88c0e4b3309dc72be03bf47a5") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b379a69972d91d5467c8c0b211b2af60848bdec88c0e4b3309dc72be03bf47a5";
    }
    const { error } = t0;
    let t1;
    if ($[1] !== error.message) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$notes$2f$error$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].text,
                children: [
                    "Could not fetch the list of notes. ",
                    error.message
                ]
            }, void 0, true, {
                fileName: "[project]/app/notes/error.tsx",
                lineNumber: 21,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false);
        $[1] = error.message;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    return t1;
};
_c = ErrorNote;
const __TURBOPACK__default__export__ = ErrorNote;
var _c;
__turbopack_context__.k.register(_c, "ErrorNote");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/notes/Notes.client.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/query-core/build/modern/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$loading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/loading.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NoteList$2f$NoteList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/NoteList/NoteList.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$notes$2f$Notes$2e$client$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/notes/Notes.client.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SearchBox$2f$SearchBox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/SearchBox/SearchBox.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Pagination$2f$Pagination$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Pagination/Pagination.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Modal$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Modal/Modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NoteForm$2f$NoteForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/NoteForm/NoteForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$notes$2f$error$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/notes/error.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
const NotesClient = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(32);
    if ($[0] !== "0ca9b7924fed52b5ed661c47ac79ad54bbab15d531a6986527b74d344ffd1c88") {
        for(let $i = 0; $i < 32; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0ca9b7924fed52b5ed661c47ac79ad54bbab15d531a6986527b74d344ffd1c88";
    }
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [debouncedSearch, setDebouncedSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(search);
    let t0;
    let t1;
    if ($[1] !== search) {
        t0 = ()=>{
            const handler = setTimeout(()=>{
                setDebouncedSearch(search);
            }, 1000);
            return ()=>clearTimeout(handler);
        };
        t1 = [
            search
        ];
        $[1] = search;
        $[2] = t0;
        $[3] = t1;
    } else {
        t0 = $[2];
        t1 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    if ($[4] !== currentPage || $[5] !== debouncedSearch) {
        t2 = {
            queryKey: [
                "notes",
                currentPage,
                debouncedSearch
            ],
            queryFn: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNotes"])(currentPage, 12, debouncedSearch),
            refetchOnMount: false,
            placeholderData: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keepPreviousData"]
        };
        $[4] = currentPage;
        $[5] = debouncedSearch;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    const { data, isLoading, isError, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])(t2);
    const notes = data?.notes;
    if (isLoading) {
        let t3;
        if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
            t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$loading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/notes/Notes.client.tsx",
                lineNumber: 69,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[7] = t3;
        } else {
            t3 = $[7];
        }
        return t3;
    }
    if (isError || !notes) {
        const t3 = error;
        let t4;
        if ($[8] !== t3) {
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$notes$2f$error$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                error: t3
            }, void 0, false, {
                fileName: "[project]/app/notes/Notes.client.tsx",
                lineNumber: 80,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[8] = t3;
            $[9] = t4;
        } else {
            t4 = $[9];
        }
        return t4;
    }
    let t3;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ()=>setIsModalOpen(true);
        $[10] = t3;
    } else {
        t3 = $[10];
    }
    const openModal = t3;
    let t4;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ()=>setIsModalOpen(false);
        $[11] = t4;
    } else {
        t4 = $[11];
    }
    const closeModal = t4;
    let t5;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = (value)=>{
            setSearch(value);
            setCurrentPage(1);
        };
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    const handleSearch = t5;
    let t6;
    if ($[13] !== search) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SearchBox$2f$SearchBox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            value: search,
            onSearchChange: handleSearch
        }, void 0, false, {
            fileName: "[project]/app/notes/Notes.client.tsx",
            lineNumber: 117,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = search;
        $[14] = t6;
    } else {
        t6 = $[14];
    }
    let t7;
    if ($[15] !== currentPage || $[16] !== data) {
        t7 = data && data.totalPages > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Pagination$2f$Pagination$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            pageCount: data.totalPages,
            currentPage: currentPage,
            onPageChange: setCurrentPage
        }, void 0, false, {
            fileName: "[project]/app/notes/Notes.client.tsx",
            lineNumber: 125,
            columnNumber: 41
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = currentPage;
        $[16] = data;
        $[17] = t7;
    } else {
        t7 = $[17];
    }
    let t8;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: openModal,
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$notes$2f$Notes$2e$client$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].button,
            children: "Create note +"
        }, void 0, false, {
            fileName: "[project]/app/notes/Notes.client.tsx",
            lineNumber: 134,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[18] = t8;
    } else {
        t8 = $[18];
    }
    let t9;
    if ($[19] !== t6 || $[20] !== t7) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$notes$2f$Notes$2e$client$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toolbar,
            children: [
                t6,
                t7,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/app/notes/Notes.client.tsx",
            lineNumber: 141,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[19] = t6;
        $[20] = t7;
        $[21] = t9;
    } else {
        t9 = $[21];
    }
    let t10;
    if ($[22] !== data?.notes || $[23] !== isError || $[24] !== isLoading) {
        t10 = !isLoading && !isError && data?.notes?.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "No notes found."
        }, void 0, false, {
            fileName: "[project]/app/notes/Notes.client.tsx",
            lineNumber: 150,
            columnNumber: 65
        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NoteList$2f$NoteList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            notes: data?.notes || []
        }, void 0, false, {
            fileName: "[project]/app/notes/Notes.client.tsx",
            lineNumber: 150,
            columnNumber: 90
        }, ("TURBOPACK compile-time value", void 0));
        $[22] = data?.notes;
        $[23] = isError;
        $[24] = isLoading;
        $[25] = t10;
    } else {
        t10 = $[25];
    }
    let t11;
    if ($[26] !== isModalOpen) {
        t11 = isModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Modal$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            onClose: closeModal,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NoteForm$2f$NoteForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onCancel: closeModal
            }, void 0, false, {
                fileName: "[project]/app/notes/Notes.client.tsx",
                lineNumber: 160,
                columnNumber: 54
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/app/notes/Notes.client.tsx",
            lineNumber: 160,
            columnNumber: 26
        }, ("TURBOPACK compile-time value", void 0));
        $[26] = isModalOpen;
        $[27] = t11;
    } else {
        t11 = $[27];
    }
    let t12;
    if ($[28] !== t10 || $[29] !== t11 || $[30] !== t9) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$notes$2f$Notes$2e$client$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].app,
                children: [
                    t9,
                    t10,
                    t11
                ]
            }, void 0, true, {
                fileName: "[project]/app/notes/Notes.client.tsx",
                lineNumber: 168,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false);
        $[28] = t10;
        $[29] = t11;
        $[30] = t9;
        $[31] = t12;
    } else {
        t12 = $[31];
    }
    return t12;
};
_s(NotesClient, "qiXpjKhAdIIa+srkYOg5RJogBM8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
_c = NotesClient;
const __TURBOPACK__default__export__ = NotesClient;
var _c;
__turbopack_context__.k.register(_c, "NotesClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_7833422c._.js.map