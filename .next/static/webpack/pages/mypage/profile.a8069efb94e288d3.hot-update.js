"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/mypage/profile",{

/***/ "./src/pages/mypage/profile.tsx":
/*!**************************************!*\
  !*** ./src/pages/mypage/profile.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProfilePage: function() { return /* binding */ ProfilePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _src_feature_auth_provider_AuthProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @src/feature/auth/provider/AuthProvider */ \"./src/feature/auth/provider/AuthProvider.tsx\");\n/* harmony import */ var _src_hooks_firestoreDocument_useUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/src/hooks/firestoreDocument/useUser */ \"./src/hooks/firestoreDocument/useUser.ts\");\n/* harmony import */ var _src_components_CustomPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @src/components/CustomPage */ \"./src/components/CustomPage.tsx\");\n/* harmony import */ var _src_types_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @src/types/user */ \"./src/types/user.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var _src_components_EditModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @src/components/EditModal */ \"./src/components/EditModal.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst ProfilePage = ()=>{\n    _s();\n    const { user: authUser } = (0,_src_feature_auth_provider_AuthProvider__WEBPACK_IMPORTED_MODULE_1__.useAuthContext)();\n    const { user, loading } = (0,_src_hooks_firestoreDocument_useUser__WEBPACK_IMPORTED_MODULE_2__.useUserById)(authUser === null || authUser === void 0 ? void 0 : authUser.uid);\n    const tableSize = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.useBreakpointValue)({\n        base: \"sm\",\n        md: \"md\",\n        lg: \"lg\"\n    });\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    const onOpen = ()=>setIsOpen(true);\n    const onClose = ()=>setIsOpen(false);\n    const [updateProperty, setUpdateProperty] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"name\");\n    const EditButton = (param)=>{\n        let { property } = param;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            onClick: ()=>{\n                setUpdateProperty(property);\n                onOpen();\n            },\n            className: \"flex items-center justify-center w-4 h-4\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FontAwesomeIcon, {\n                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faPen,\n                size: \"sm\",\n                width: \"12\",\n                height: \"12\"\n            }, void 0, false, {\n                fileName: \"/Users/yugo139013/MyFolder/TypingKing/src/pages/mypage/profile.tsx\",\n                lineNumber: 41,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/yugo139013/MyFolder/TypingKing/src/pages/mypage/profile.tsx\",\n            lineNumber: 34,\n            columnNumber: 7\n        }, undefined);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_CustomPage__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        title: \"Setting\",\n        isTitleHidden: true,\n        isAuthPageHidden: true,\n        loading: loading,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full flex mt-8 flex-col border border-gray-200 rounded-md shadow-sm bg-white\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"font-bold p-4 w-full text-xl text-center\",\n                        children: \"Setting\"\n                    }, void 0, false, {\n                        fileName: \"/Users/yugo139013/MyFolder/TypingKing/src/pages/mypage/profile.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"md:p-12 md:pt-0 w-full flex flex-col items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mt-6 relative\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Avatar, {\n                                        flexShrink: 0,\n                                        width: 20,\n                                        height: 20,\n                                        src: (user === null || user === void 0 ? void 0 : user.iconImageUrl) || \"default_image_url\",\n                                        className: \"absolute\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yugo139013/MyFolder/TypingKing/src/pages/mypage/profile.tsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"absolute bottom-0 right-1\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(EditButton, {\n                                            property: \"iconImageUrl\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/yugo139013/MyFolder/TypingKing/src/pages/mypage/profile.tsx\",\n                                            lineNumber: 65,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yugo139013/MyFolder/TypingKing/src/pages/mypage/profile.tsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/yugo139013/MyFolder/TypingKing/src/pages/mypage/profile.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.TableContainer, {\n                                className: \"mt-8 mb-4 w-[90%] mx-[5%]\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Table, {\n                                    variant: \"simple\",\n                                    size: tableSize,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Thead, {}, void 0, false, {\n                                            fileName: \"/Users/yugo139013/MyFolder/TypingKing/src/pages/mypage/profile.tsx\",\n                                            lineNumber: 70,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Tbody, {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Tr, {\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Td, {\n                                                            children: _src_types_user__WEBPACK_IMPORTED_MODULE_4__.userPropertiesLabel.name\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/yugo139013/MyFolder/TypingKing/src/pages/mypage/profile.tsx\",\n                                                            lineNumber: 79,\n                                                            columnNumber: 19\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Td, {\n                                                            children: user === null || user === void 0 ? void 0 : user.name\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/yugo139013/MyFolder/TypingKing/src/pages/mypage/profile.tsx\",\n                                                            lineNumber: 80,\n                                                            columnNumber: 19\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Td, {\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(EditButton, {\n                                                                property: \"name\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/yugo139013/MyFolder/TypingKing/src/pages/mypage/profile.tsx\",\n                                                                lineNumber: 82,\n                                                                columnNumber: 21\n                                                            }, undefined)\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/yugo139013/MyFolder/TypingKing/src/pages/mypage/profile.tsx\",\n                                                            lineNumber: 81,\n                                                            columnNumber: 19\n                                                        }, undefined)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/yugo139013/MyFolder/TypingKing/src/pages/mypage/profile.tsx\",\n                                                    lineNumber: 78,\n                                                    columnNumber: 17\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Tr, {\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Td, {\n                                                            children: _src_types_user__WEBPACK_IMPORTED_MODULE_4__.userPropertiesLabel.email\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/yugo139013/MyFolder/TypingKing/src/pages/mypage/profile.tsx\",\n                                                            lineNumber: 86,\n                                                            columnNumber: 19\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Td, {\n                                                            children: user === null || user === void 0 ? void 0 : user.email\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/yugo139013/MyFolder/TypingKing/src/pages/mypage/profile.tsx\",\n                                                            lineNumber: 87,\n                                                            columnNumber: 19\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Td, {}, void 0, false, {\n                                                            fileName: \"/Users/yugo139013/MyFolder/TypingKing/src/pages/mypage/profile.tsx\",\n                                                            lineNumber: 88,\n                                                            columnNumber: 19\n                                                        }, undefined)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/yugo139013/MyFolder/TypingKing/src/pages/mypage/profile.tsx\",\n                                                    lineNumber: 85,\n                                                    columnNumber: 17\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/yugo139013/MyFolder/TypingKing/src/pages/mypage/profile.tsx\",\n                                            lineNumber: 77,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/yugo139013/MyFolder/TypingKing/src/pages/mypage/profile.tsx\",\n                                    lineNumber: 69,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/yugo139013/MyFolder/TypingKing/src/pages/mypage/profile.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/yugo139013/MyFolder/TypingKing/src/pages/mypage/profile.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/yugo139013/MyFolder/TypingKing/src/pages/mypage/profile.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_EditModal__WEBPACK_IMPORTED_MODULE_7__.EditModal, {\n                isOpen: isOpen,\n                onClose: onClose,\n                documentId: (authUser === null || authUser === void 0 ? void 0 : authUser.uid) || \"\",\n                updateField: updateProperty,\n                collectionName: \"users\",\n                label: _src_types_user__WEBPACK_IMPORTED_MODULE_4__.userPropertiesLabel[updateProperty],\n                inputType: updateProperty === \"iconImageUrl\" ? \"file\" : \"text\",\n                currentValue: typeof (user === null || user === void 0 ? void 0 : user[updateProperty]) === \"string\" ? user === null || user === void 0 ? void 0 : user[updateProperty] : \"\"\n            }, void 0, false, {\n                fileName: \"/Users/yugo139013/MyFolder/TypingKing/src/pages/mypage/profile.tsx\",\n                lineNumber: 96,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/yugo139013/MyFolder/TypingKing/src/pages/mypage/profile.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProfilePage, \"ZKdok/9+79ON6545gNvwVv84ntA=\", false, function() {\n    return [\n        _src_feature_auth_provider_AuthProvider__WEBPACK_IMPORTED_MODULE_1__.useAuthContext,\n        _src_hooks_firestoreDocument_useUser__WEBPACK_IMPORTED_MODULE_2__.useUserById,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.useBreakpointValue\n    ];\n});\n_c = ProfilePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProfilePage);\nvar _c;\n$RefreshReg$(_c, \"ProfilePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VzFCLG1CQUFtQixpQkFBaUIsU0FBUztnQkFDeEQyQixjQUNFLFFBQU92QyxpQkFBQUEsMkJBQUFBLElBQU0sQ0FBQ1ksZUFBZSxNQUFLLFdBQzlCWixpQkFBQUEsMkJBQUFBLElBQU0sQ0FBQ1ksZUFBZSxHQUN0Qjs7Ozs7Ozs7Ozs7O0FBS2QsRUFBRTtHQTNGV2I7O1FBQ2dCVCxtRkFBY0E7UUFDZkMsNkVBQVdBO1FBRW5CSCxnRUFBa0JBOzs7S0FKekJXO0FBNkZiLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9teXBhZ2UvcHJvZmlsZS50c3g/ZjdkYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBUYWJsZSxcbiAgVGhlYWQsXG4gIFRib2R5LFxuICBUcixcbiAgVGQsXG4gIFRhYmxlQ29udGFpbmVyLFxuICB1c2VCcmVha3BvaW50VmFsdWUsXG4gIEF2YXRhcixcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCB7IHVzZUF1dGhDb250ZXh0IH0gZnJvbSBcIkBzcmMvZmVhdHVyZS9hdXRoL3Byb3ZpZGVyL0F1dGhQcm92aWRlclwiO1xuaW1wb3J0IHsgdXNlVXNlckJ5SWQgfSBmcm9tIFwiQC9zcmMvaG9va3MvZmlyZXN0b3JlRG9jdW1lbnQvdXNlVXNlclwiO1xuaW1wb3J0IEN1c3RvbVBhZ2UgZnJvbSBcIkBzcmMvY29tcG9uZW50cy9DdXN0b21QYWdlXCI7XG5pbXBvcnQgeyB1c2VyUHJvcGVydGllc0xhYmVsLCB0eXBlIFVzZXIgfSBmcm9tIFwiQHNyYy90eXBlcy91c2VyXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xuaW1wb3J0IHsgZmFQZW4gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBFZGl0TW9kYWwgfSBmcm9tIFwiQHNyYy9jb21wb25lbnRzL0VkaXRNb2RhbFwiO1xuXG5leHBvcnQgY29uc3QgUHJvZmlsZVBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHsgdXNlcjogYXV0aFVzZXIgfSA9IHVzZUF1dGhDb250ZXh0KCk7XG4gIGNvbnN0IHsgdXNlciwgbG9hZGluZyB9ID0gdXNlVXNlckJ5SWQoYXV0aFVzZXI/LnVpZCk7XG5cbiAgY29uc3QgdGFibGVTaXplID0gdXNlQnJlYWtwb2ludFZhbHVlKHsgYmFzZTogXCJzbVwiLCBtZDogXCJtZFwiLCBsZzogXCJsZ1wiIH0pO1xuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBvbk9wZW4gPSAoKSA9PiBzZXRJc09wZW4odHJ1ZSk7XG4gIGNvbnN0IG9uQ2xvc2UgPSAoKSA9PiBzZXRJc09wZW4oZmFsc2UpO1xuXG4gIGNvbnN0IFt1cGRhdGVQcm9wZXJ0eSwgc2V0VXBkYXRlUHJvcGVydHldID0gdXNlU3RhdGU8a2V5b2YgVXNlcj4oXCJuYW1lXCIpO1xuXG4gIGNvbnN0IEVkaXRCdXR0b24gPSAoeyBwcm9wZXJ0eSB9OiB7IHByb3BlcnR5OiBrZXlvZiBVc2VyIH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGJ1dHRvblxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgc2V0VXBkYXRlUHJvcGVydHkocHJvcGVydHkpO1xuICAgICAgICAgIG9uT3BlbigpO1xuICAgICAgICB9fVxuICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB3LTQgaC00XCJcbiAgICAgID5cbiAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVBlbn0gc2l6ZT1cInNtXCIgd2lkdGg9XCIxMlwiIGhlaWdodD1cIjEyXCIgLz5cbiAgICAgIDwvYnV0dG9uPlxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Q3VzdG9tUGFnZVxuICAgICAgdGl0bGU9XCJTZXR0aW5nXCJcbiAgICAgIGlzVGl0bGVIaWRkZW49e3RydWV9XG4gICAgICBpc0F1dGhQYWdlSGlkZGVuPXt0cnVlfVxuICAgICAgbG9hZGluZz17bG9hZGluZ31cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IG10LTggZmxleC1jb2wgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCByb3VuZGVkLW1kIHNoYWRvdy1zbSBiZy13aGl0ZVwiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHAtNCB3LWZ1bGwgdGV4dC14bCB0ZXh0LWNlbnRlclwiPlNldHRpbmc8L2gyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOnAtMTIgbWQ6cHQtMCB3LWZ1bGwgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTYgcmVsYXRpdmVcIj5cbiAgICAgICAgICAgIDxBdmF0YXJcbiAgICAgICAgICAgICAgZmxleFNocmluaz17MH1cbiAgICAgICAgICAgICAgd2lkdGg9ezIwfVxuICAgICAgICAgICAgICBoZWlnaHQ9ezIwfVxuICAgICAgICAgICAgICBzcmM9e3VzZXI/Lmljb25JbWFnZVVybCB8fCBcImRlZmF1bHRfaW1hZ2VfdXJsXCJ9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS0wIHJpZ2h0LTFcIj5cbiAgICAgICAgICAgICAgPEVkaXRCdXR0b24gcHJvcGVydHk9XCJpY29uSW1hZ2VVcmxcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPFRhYmxlQ29udGFpbmVyIGNsYXNzTmFtZT1cIm10LTggbWItNCB3LVs5MCVdIG14LVs1JV1cIj5cbiAgICAgICAgICAgIDxUYWJsZSB2YXJpYW50PVwic2ltcGxlXCIgc2l6ZT17dGFibGVTaXplfT5cbiAgICAgICAgICAgICAgPFRoZWFkPlxuICAgICAgICAgICAgICAgIHsvKiA8VHI+XG4gICAgICAgICAgICAgICAgICA8VGg+6aCF55uuPC9UaD5cbiAgICAgICAgICAgICAgICAgIDxUaD7nmbvpjLLmg4XloLE8L1RoPlxuICAgICAgICAgICAgICAgICAgPFRoPjwvVGg+XG4gICAgICAgICAgICAgICAgPC9Ucj4gKi99XG4gICAgICAgICAgICAgIDwvVGhlYWQ+XG4gICAgICAgICAgICAgIDxUYm9keT5cbiAgICAgICAgICAgICAgICA8VHI+XG4gICAgICAgICAgICAgICAgICA8VGQ+e3VzZXJQcm9wZXJ0aWVzTGFiZWwubmFtZX08L1RkPlxuICAgICAgICAgICAgICAgICAgPFRkPnt1c2VyPy5uYW1lfTwvVGQ+XG4gICAgICAgICAgICAgICAgICA8VGQ+XG4gICAgICAgICAgICAgICAgICAgIDxFZGl0QnV0dG9uIHByb3BlcnR5PVwibmFtZVwiIC8+XG4gICAgICAgICAgICAgICAgICA8L1RkPlxuICAgICAgICAgICAgICAgIDwvVHI+XG4gICAgICAgICAgICAgICAgPFRyPlxuICAgICAgICAgICAgICAgICAgPFRkPnt1c2VyUHJvcGVydGllc0xhYmVsLmVtYWlsfTwvVGQ+XG4gICAgICAgICAgICAgICAgICA8VGQ+e3VzZXI/LmVtYWlsfTwvVGQ+XG4gICAgICAgICAgICAgICAgICA8VGQ+PC9UZD5cbiAgICAgICAgICAgICAgICA8L1RyPlxuICAgICAgICAgICAgICA8L1Rib2R5PlxuICAgICAgICAgICAgPC9UYWJsZT5cbiAgICAgICAgICA8L1RhYmxlQ29udGFpbmVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8RWRpdE1vZGFsXG4gICAgICAgIGlzT3Blbj17aXNPcGVufVxuICAgICAgICBvbkNsb3NlPXtvbkNsb3NlfVxuICAgICAgICBkb2N1bWVudElkPXthdXRoVXNlcj8udWlkIHx8IFwiXCJ9XG4gICAgICAgIHVwZGF0ZUZpZWxkPXt1cGRhdGVQcm9wZXJ0eX1cbiAgICAgICAgY29sbGVjdGlvbk5hbWU9XCJ1c2Vyc1wiXG4gICAgICAgIGxhYmVsPXt1c2VyUHJvcGVydGllc0xhYmVsW3VwZGF0ZVByb3BlcnR5XX1cbiAgICAgICAgaW5wdXRUeXBlPXt1cGRhdGVQcm9wZXJ0eSA9PT0gXCJpY29uSW1hZ2VVcmxcIiA/IFwiZmlsZVwiIDogXCJ0ZXh0XCJ9XG4gICAgICAgIGN1cnJlbnRWYWx1ZT17XG4gICAgICAgICAgdHlwZW9mIHVzZXI/Llt1cGRhdGVQcm9wZXJ0eV0gPT09IFwic3RyaW5nXCJcbiAgICAgICAgICAgID8gdXNlcj8uW3VwZGF0ZVByb3BlcnR5XVxuICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgIH1cbiAgICAgIC8+XG4gICAgPC9DdXN0b21QYWdlPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZVBhZ2U7XG4iXSwibmFtZXMiOlsiVGFibGUiLCJUaGVhZCIsIlRib2R5IiwiVHIiLCJUZCIsIlRhYmxlQ29udGFpbmVyIiwidXNlQnJlYWtwb2ludFZhbHVlIiwiQXZhdGFyIiwidXNlQXV0aENvbnRleHQiLCJ1c2VVc2VyQnlJZCIsIkN1c3RvbVBhZ2UiLCJ1c2VyUHJvcGVydGllc0xhYmVsIiwidXNlU3RhdGUiLCJGb250QXdlc29tZUljb24iLCJmYVBlbiIsIlJlYWN0IiwiRWRpdE1vZGFsIiwiUHJvZmlsZVBhZ2UiLCJ1c2VyIiwiYXV0aFVzZXIiLCJsb2FkaW5nIiwidWlkIiwidGFibGVTaXplIiwiYmFzZSIsIm1kIiwibGciLCJpc09wZW4iLCJzZXRJc09wZW4iLCJvbk9wZW4iLCJvbkNsb3NlIiwidXBkYXRlUHJvcGVydHkiLCJzZXRVcGRhdGVQcm9wZXJ0eSIsIkVkaXRCdXR0b24iLCJwcm9wZXJ0eSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJjbGFzc05hbWUiLCJpY29uIiwic2l6ZSIsIndpZHRoIiwiaGVpZ2h0IiwidGl0bGUiLCJpc1RpdGxlSGlkZGVuIiwiaXNBdXRoUGFnZUhpZGRlbiIsImRpdiIsImgyIiwiZmxleFNocmluayIsInNyYyIsImljb25JbWFnZVVybCIsInZhcmlhbnQiLCJuYW1lIiwiZW1haWwiLCJkb2N1bWVudElkIiwidXBkYXRlRmllbGQiLCJjb2xsZWN0aW9uTmFtZSIsImxhYmVsIiwiaW5wdXRUeXBlIiwiY3VycmVudFZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/mypage/profile.tsx\n"));

/***/ })

});