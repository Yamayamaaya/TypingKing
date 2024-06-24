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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProfilePage: function() { return /* binding */ ProfilePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _src_feature_auth_provider_AuthProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @src/feature/auth/provider/AuthProvider */ \"./src/feature/auth/provider/AuthProvider.tsx\");\n/* harmony import */ var _src_hooks_firestoreDocument_useUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/src/hooks/firestoreDocument/useUser */ \"./src/hooks/firestoreDocument/useUser.ts\");\n/* harmony import */ var _src_components_CustomPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @src/components/CustomPage */ \"./src/components/CustomPage.tsx\");\n/* harmony import */ var _src_types_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @src/types/user */ \"./src/types/user.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var _src_components_EditModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @src/components/EditModal */ \"./src/components/EditModal.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst ProfilePage = ()=>{\n    _s();\n    const { user: authUser } = (0,_src_feature_auth_provider_AuthProvider__WEBPACK_IMPORTED_MODULE_1__.useAuthContext)();\n    const { user, loading } = (0,_src_hooks_firestoreDocument_useUser__WEBPACK_IMPORTED_MODULE_2__.useUserById)(authUser === null || authUser === void 0 ? void 0 : authUser.uid);\n    const tableSize = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.useBreakpointValue)({\n        base: \"sm\",\n        md: \"md\",\n        lg: \"lg\"\n    });\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    const onOpen = ()=>setIsOpen(true);\n    const onClose = ()=>setIsOpen(false);\n    const [updateProperty, setUpdateProperty] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"name\");\n    const EditButton = (param)=>{\n        let { property } = param;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            onClick: ()=>{\n                setUpdateProperty(property);\n                onOpen();\n            },\n            className: \"flex items-center justify-center w-4 h-4\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FontAwesomeIcon, {\n                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faPen,\n                size: \"sm\",\n                width: \"12\",\n                height: \"12\"\n            }, void 0, false, {\n                fileName: \"/Users/yugo139013/MyFolder/TypingKing/src/pages/mypage/profile.tsx\",\n                lineNumber: 41,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/yugo139013/MyFolder/TypingKing/src/pages/mypage/profile.tsx\",\n            lineNumber: 34,\n            columnNumber: 7\n        }, undefined);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_CustomPage__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        title: \"Setting\",\n        isTitleHidden: true,\n        isAuthPageHidden: true,\n        loading: loading,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full flex mt-14 flex-col border border-gray-200 rounded-md shadow-sm bg-white\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"font-bold p-4 w-full text-xl text-center\",\n                        children: \"Setting\"\n                    }, void 0, false, {\n                        fileName: \"/Users/yugo139013/MyFolder/TypingKing/src/pages/mypage/profile.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"md:p-12 md:pt-0 w-full flex flex-col items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mt-6 relative\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Avatar, {\n                                        flexShrink: 0,\n                                        width: 20,\n                                        height: 20,\n                                        src: (user === null || user === void 0 ? void 0 : user.iconImageUrl) || \"default_image_url\",\n                                        className: \"absolute\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yugo139013/MyFolder/TypingKing/src/pages/mypage/profile.tsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"absolute bottom-0 right-1\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(EditButton, {\n                                            property: \"iconImageUrl\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/yugo139013/MyFolder/TypingKing/src/pages/mypage/profile.tsx\",\n                                            lineNumber: 65,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yugo139013/MyFolder/TypingKing/src/pages/mypage/profile.tsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/yugo139013/MyFolder/TypingKing/src/pages/mypage/profile.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.TableContainer, {\n                                className: \"mt-8 mb-4 w-[90%] mx-[5%]\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Table, {\n                                    variant: \"simple\",\n                                    size: tableSize,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Thead, {}, void 0, false, {\n                                            fileName: \"/Users/yugo139013/MyFolder/TypingKing/src/pages/mypage/profile.tsx\",\n                                            lineNumber: 70,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Tbody, {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Tr, {\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Td, {\n                                                            children: _src_types_user__WEBPACK_IMPORTED_MODULE_4__.userPropertiesLabel.name\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/yugo139013/MyFolder/TypingKing/src/pages/mypage/profile.tsx\",\n                                                            lineNumber: 79,\n                                                            columnNumber: 19\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Td, {\n                                                            children: user === null || user === void 0 ? void 0 : user.name\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/yugo139013/MyFolder/TypingKing/src/pages/mypage/profile.tsx\",\n                                                            lineNumber: 80,\n                                                            columnNumber: 19\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Td, {\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(EditButton, {\n                                                                property: \"name\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/yugo139013/MyFolder/TypingKing/src/pages/mypage/profile.tsx\",\n                                                                lineNumber: 82,\n                                                                columnNumber: 21\n                                                            }, undefined)\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/yugo139013/MyFolder/TypingKing/src/pages/mypage/profile.tsx\",\n                                                            lineNumber: 81,\n                                                            columnNumber: 19\n                                                        }, undefined)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/yugo139013/MyFolder/TypingKing/src/pages/mypage/profile.tsx\",\n                                                    lineNumber: 78,\n                                                    columnNumber: 17\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Tr, {\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Td, {\n                                                            children: _src_types_user__WEBPACK_IMPORTED_MODULE_4__.userPropertiesLabel.email\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/yugo139013/MyFolder/TypingKing/src/pages/mypage/profile.tsx\",\n                                                            lineNumber: 86,\n                                                            columnNumber: 19\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Td, {\n                                                            children: user === null || user === void 0 ? void 0 : user.email\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/yugo139013/MyFolder/TypingKing/src/pages/mypage/profile.tsx\",\n                                                            lineNumber: 87,\n                                                            columnNumber: 19\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Td, {}, void 0, false, {\n                                                            fileName: \"/Users/yugo139013/MyFolder/TypingKing/src/pages/mypage/profile.tsx\",\n                                                            lineNumber: 88,\n                                                            columnNumber: 19\n                                                        }, undefined)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/yugo139013/MyFolder/TypingKing/src/pages/mypage/profile.tsx\",\n                                                    lineNumber: 85,\n                                                    columnNumber: 17\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/yugo139013/MyFolder/TypingKing/src/pages/mypage/profile.tsx\",\n                                            lineNumber: 77,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/yugo139013/MyFolder/TypingKing/src/pages/mypage/profile.tsx\",\n                                    lineNumber: 69,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/yugo139013/MyFolder/TypingKing/src/pages/mypage/profile.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/yugo139013/MyFolder/TypingKing/src/pages/mypage/profile.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/yugo139013/MyFolder/TypingKing/src/pages/mypage/profile.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_EditModal__WEBPACK_IMPORTED_MODULE_7__.EditModal, {\n                isOpen: isOpen,\n                onClose: onClose,\n                documentId: (authUser === null || authUser === void 0 ? void 0 : authUser.uid) || \"\",\n                updateField: updateProperty,\n                collectionName: \"users\",\n                label: _src_types_user__WEBPACK_IMPORTED_MODULE_4__.userPropertiesLabel[updateProperty],\n                inputType: updateProperty === \"iconImageUrl\" ? \"file\" : \"text\",\n                currentValue: typeof (user === null || user === void 0 ? void 0 : user[updateProperty]) === \"string\" ? user === null || user === void 0 ? void 0 : user[updateProperty] : \"\"\n            }, void 0, false, {\n                fileName: \"/Users/yugo139013/MyFolder/TypingKing/src/pages/mypage/profile.tsx\",\n                lineNumber: 96,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/yugo139013/MyFolder/TypingKing/src/pages/mypage/profile.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProfilePage, \"ZKdok/9+79ON6545gNvwVv84ntA=\", false, function() {\n    return [\n        _src_feature_auth_provider_AuthProvider__WEBPACK_IMPORTED_MODULE_1__.useAuthContext,\n        _src_hooks_firestoreDocument_useUser__WEBPACK_IMPORTED_MODULE_2__.useUserById,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.useBreakpointValue\n    ];\n});\n_c = ProfilePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProfilePage);\nvar _c;\n$RefreshReg$(_c, \"ProfilePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VzFCLG1CQUFtQixpQkFBaUIsU0FBUztnQkFDeEQyQixjQUNFLFFBQU92QyxpQkFBQUEsMkJBQUFBLElBQU0sQ0FBQ1ksZUFBZSxNQUFLLFdBQzlCWixpQkFBQUEsMkJBQUFBLElBQU0sQ0FBQ1ksZUFBZSxHQUN0Qjs7Ozs7Ozs7Ozs7O0FBS2QsRUFBRTtHQTNGV2I7O1FBQ2dCVCxtRkFBY0E7UUFDZkMsNkVBQVdBO1FBRW5CSCxnRUFBa0JBOzs7S0FKekJXO0FBNkZiLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9teXBhZ2UvcHJvZmlsZS50c3g/ZjdkYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBUYWJsZSxcbiAgVGhlYWQsXG4gIFRib2R5LFxuICBUcixcbiAgVGQsXG4gIFRhYmxlQ29udGFpbmVyLFxuICB1c2VCcmVha3BvaW50VmFsdWUsXG4gIEF2YXRhcixcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCB7IHVzZUF1dGhDb250ZXh0IH0gZnJvbSBcIkBzcmMvZmVhdHVyZS9hdXRoL3Byb3ZpZGVyL0F1dGhQcm92aWRlclwiO1xuaW1wb3J0IHsgdXNlVXNlckJ5SWQgfSBmcm9tIFwiQC9zcmMvaG9va3MvZmlyZXN0b3JlRG9jdW1lbnQvdXNlVXNlclwiO1xuaW1wb3J0IEN1c3RvbVBhZ2UgZnJvbSBcIkBzcmMvY29tcG9uZW50cy9DdXN0b21QYWdlXCI7XG5pbXBvcnQgeyB1c2VyUHJvcGVydGllc0xhYmVsLCB0eXBlIFVzZXIgfSBmcm9tIFwiQHNyYy90eXBlcy91c2VyXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xuaW1wb3J0IHsgZmFQZW4gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBFZGl0TW9kYWwgfSBmcm9tIFwiQHNyYy9jb21wb25lbnRzL0VkaXRNb2RhbFwiO1xuXG5leHBvcnQgY29uc3QgUHJvZmlsZVBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHsgdXNlcjogYXV0aFVzZXIgfSA9IHVzZUF1dGhDb250ZXh0KCk7XG4gIGNvbnN0IHsgdXNlciwgbG9hZGluZyB9ID0gdXNlVXNlckJ5SWQoYXV0aFVzZXI/LnVpZCk7XG5cbiAgY29uc3QgdGFibGVTaXplID0gdXNlQnJlYWtwb2ludFZhbHVlKHsgYmFzZTogXCJzbVwiLCBtZDogXCJtZFwiLCBsZzogXCJsZ1wiIH0pO1xuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBvbk9wZW4gPSAoKSA9PiBzZXRJc09wZW4odHJ1ZSk7XG4gIGNvbnN0IG9uQ2xvc2UgPSAoKSA9PiBzZXRJc09wZW4oZmFsc2UpO1xuXG4gIGNvbnN0IFt1cGRhdGVQcm9wZXJ0eSwgc2V0VXBkYXRlUHJvcGVydHldID0gdXNlU3RhdGU8a2V5b2YgVXNlcj4oXCJuYW1lXCIpO1xuXG4gIGNvbnN0IEVkaXRCdXR0b24gPSAoeyBwcm9wZXJ0eSB9OiB7IHByb3BlcnR5OiBrZXlvZiBVc2VyIH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGJ1dHRvblxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgc2V0VXBkYXRlUHJvcGVydHkocHJvcGVydHkpO1xuICAgICAgICAgIG9uT3BlbigpO1xuICAgICAgICB9fVxuICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB3LTQgaC00XCJcbiAgICAgID5cbiAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVBlbn0gc2l6ZT1cInNtXCIgd2lkdGg9XCIxMlwiIGhlaWdodD1cIjEyXCIgLz5cbiAgICAgIDwvYnV0dG9uPlxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Q3VzdG9tUGFnZVxuICAgICAgdGl0bGU9XCJTZXR0aW5nXCJcbiAgICAgIGlzVGl0bGVIaWRkZW49e3RydWV9XG4gICAgICBpc0F1dGhQYWdlSGlkZGVuPXt0cnVlfVxuICAgICAgbG9hZGluZz17bG9hZGluZ31cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IG10LTE0IGZsZXgtY29sIGJvcmRlciBib3JkZXItZ3JheS0yMDAgcm91bmRlZC1tZCBzaGFkb3ctc20gYmctd2hpdGVcIj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZvbnQtYm9sZCBwLTQgdy1mdWxsIHRleHQteGwgdGV4dC1jZW50ZXJcIj5TZXR0aW5nPC9oMj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDpwLTEyIG1kOnB0LTAgdy1mdWxsIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC02IHJlbGF0aXZlXCI+XG4gICAgICAgICAgICA8QXZhdGFyXG4gICAgICAgICAgICAgIGZsZXhTaHJpbms9ezB9XG4gICAgICAgICAgICAgIHdpZHRoPXsyMH1cbiAgICAgICAgICAgICAgaGVpZ2h0PXsyMH1cbiAgICAgICAgICAgICAgc3JjPXt1c2VyPy5pY29uSW1hZ2VVcmwgfHwgXCJkZWZhdWx0X2ltYWdlX3VybFwifVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tMCByaWdodC0xXCI+XG4gICAgICAgICAgICAgIDxFZGl0QnV0dG9uIHByb3BlcnR5PVwiaWNvbkltYWdlVXJsXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxUYWJsZUNvbnRhaW5lciBjbGFzc05hbWU9XCJtdC04IG1iLTQgdy1bOTAlXSBteC1bNSVdXCI+XG4gICAgICAgICAgICA8VGFibGUgdmFyaWFudD1cInNpbXBsZVwiIHNpemU9e3RhYmxlU2l6ZX0+XG4gICAgICAgICAgICAgIDxUaGVhZD5cbiAgICAgICAgICAgICAgICB7LyogPFRyPlxuICAgICAgICAgICAgICAgICAgPFRoPumgheebrjwvVGg+XG4gICAgICAgICAgICAgICAgICA8VGg+55m76Yyy5oOF5aCxPC9UaD5cbiAgICAgICAgICAgICAgICAgIDxUaD48L1RoPlxuICAgICAgICAgICAgICAgIDwvVHI+ICovfVxuICAgICAgICAgICAgICA8L1RoZWFkPlxuICAgICAgICAgICAgICA8VGJvZHk+XG4gICAgICAgICAgICAgICAgPFRyPlxuICAgICAgICAgICAgICAgICAgPFRkPnt1c2VyUHJvcGVydGllc0xhYmVsLm5hbWV9PC9UZD5cbiAgICAgICAgICAgICAgICAgIDxUZD57dXNlcj8ubmFtZX08L1RkPlxuICAgICAgICAgICAgICAgICAgPFRkPlxuICAgICAgICAgICAgICAgICAgICA8RWRpdEJ1dHRvbiBwcm9wZXJ0eT1cIm5hbWVcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9UZD5cbiAgICAgICAgICAgICAgICA8L1RyPlxuICAgICAgICAgICAgICAgIDxUcj5cbiAgICAgICAgICAgICAgICAgIDxUZD57dXNlclByb3BlcnRpZXNMYWJlbC5lbWFpbH08L1RkPlxuICAgICAgICAgICAgICAgICAgPFRkPnt1c2VyPy5lbWFpbH08L1RkPlxuICAgICAgICAgICAgICAgICAgPFRkPjwvVGQ+XG4gICAgICAgICAgICAgICAgPC9Ucj5cbiAgICAgICAgICAgICAgPC9UYm9keT5cbiAgICAgICAgICAgIDwvVGFibGU+XG4gICAgICAgICAgPC9UYWJsZUNvbnRhaW5lcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPEVkaXRNb2RhbFxuICAgICAgICBpc09wZW49e2lzT3Blbn1cbiAgICAgICAgb25DbG9zZT17b25DbG9zZX1cbiAgICAgICAgZG9jdW1lbnRJZD17YXV0aFVzZXI/LnVpZCB8fCBcIlwifVxuICAgICAgICB1cGRhdGVGaWVsZD17dXBkYXRlUHJvcGVydHl9XG4gICAgICAgIGNvbGxlY3Rpb25OYW1lPVwidXNlcnNcIlxuICAgICAgICBsYWJlbD17dXNlclByb3BlcnRpZXNMYWJlbFt1cGRhdGVQcm9wZXJ0eV19XG4gICAgICAgIGlucHV0VHlwZT17dXBkYXRlUHJvcGVydHkgPT09IFwiaWNvbkltYWdlVXJsXCIgPyBcImZpbGVcIiA6IFwidGV4dFwifVxuICAgICAgICBjdXJyZW50VmFsdWU9e1xuICAgICAgICAgIHR5cGVvZiB1c2VyPy5bdXBkYXRlUHJvcGVydHldID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgICA/IHVzZXI/Llt1cGRhdGVQcm9wZXJ0eV1cbiAgICAgICAgICAgIDogXCJcIlxuICAgICAgICB9XG4gICAgICAvPlxuICAgIDwvQ3VzdG9tUGFnZT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGVQYWdlO1xuIl0sIm5hbWVzIjpbIlRhYmxlIiwiVGhlYWQiLCJUYm9keSIsIlRyIiwiVGQiLCJUYWJsZUNvbnRhaW5lciIsInVzZUJyZWFrcG9pbnRWYWx1ZSIsIkF2YXRhciIsInVzZUF1dGhDb250ZXh0IiwidXNlVXNlckJ5SWQiLCJDdXN0b21QYWdlIiwidXNlclByb3BlcnRpZXNMYWJlbCIsInVzZVN0YXRlIiwiRm9udEF3ZXNvbWVJY29uIiwiZmFQZW4iLCJSZWFjdCIsIkVkaXRNb2RhbCIsIlByb2ZpbGVQYWdlIiwidXNlciIsImF1dGhVc2VyIiwibG9hZGluZyIsInVpZCIsInRhYmxlU2l6ZSIsImJhc2UiLCJtZCIsImxnIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwib25PcGVuIiwib25DbG9zZSIsInVwZGF0ZVByb3BlcnR5Iiwic2V0VXBkYXRlUHJvcGVydHkiLCJFZGl0QnV0dG9uIiwicHJvcGVydHkiLCJidXR0b24iLCJvbkNsaWNrIiwiY2xhc3NOYW1lIiwiaWNvbiIsInNpemUiLCJ3aWR0aCIsImhlaWdodCIsInRpdGxlIiwiaXNUaXRsZUhpZGRlbiIsImlzQXV0aFBhZ2VIaWRkZW4iLCJkaXYiLCJoMiIsImZsZXhTaHJpbmsiLCJzcmMiLCJpY29uSW1hZ2VVcmwiLCJ2YXJpYW50IiwibmFtZSIsImVtYWlsIiwiZG9jdW1lbnRJZCIsInVwZGF0ZUZpZWxkIiwiY29sbGVjdGlvbk5hbWUiLCJsYWJlbCIsImlucHV0VHlwZSIsImN1cnJlbnRWYWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/mypage/profile.tsx\n"));

/***/ })

});