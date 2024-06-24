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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProfilePage: function() { return /* binding */ ProfilePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _src_feature_auth_provider_AuthProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @src/feature/auth/provider/AuthProvider */ \"./src/feature/auth/provider/AuthProvider.tsx\");\n/* harmony import */ var _src_hooks_firestoreDocument_useUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/src/hooks/firestoreDocument/useUser */ \"./src/hooks/firestoreDocument/useUser.ts\");\n/* harmony import */ var _src_components_CustomPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @src/components/CustomPage */ \"./src/components/CustomPage.tsx\");\n/* harmony import */ var _src_types_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @src/types/user */ \"./src/types/user.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var _src_components_EditModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @src/components/EditModal */ \"./src/components/EditModal.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst ProfilePage = ()=>{\n    _s();\n    const { user: authUser } = (0,_src_feature_auth_provider_AuthProvider__WEBPACK_IMPORTED_MODULE_1__.useAuthContext)();\n    const { user, loading } = (0,_src_hooks_firestoreDocument_useUser__WEBPACK_IMPORTED_MODULE_2__.useUserById)(authUser === null || authUser === void 0 ? void 0 : authUser.uid);\n    const tableSize = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.useBreakpointValue)({\n        base: \"sm\",\n        md: \"md\",\n        lg: \"lg\"\n    });\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    const onOpen = ()=>setIsOpen(true);\n    const onClose = ()=>setIsOpen(false);\n    const [updateProperty, setUpdateProperty] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"name\");\n    const EditButton = (param)=>{\n        let { property } = param;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            onClick: ()=>{\n                setUpdateProperty(property);\n                onOpen();\n            },\n            className: \"flex items-center justify-center w-4 h-4\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FontAwesomeIcon, {\n                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faPen,\n                size: \"sm\",\n                width: \"12\",\n                height: \"12\"\n            }, void 0, false, {\n                fileName: \"/Users/yugo139013/MyFolder/TypingKing/src/pages/mypage/profile.tsx\",\n                lineNumber: 41,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/yugo139013/MyFolder/TypingKing/src/pages/mypage/profile.tsx\",\n            lineNumber: 34,\n            columnNumber: 7\n        }, undefined);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_CustomPage__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        title: \"Setting\",\n        isTitleHidden: true,\n        isAuthPageHidden: true,\n        loading: loading,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full flex flex-col border border-gray-200 rounded-md shadow-sm bg-white\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"font-bold p-4 w-full text-xl text-center\",\n                        children: \"Setting\"\n                    }, void 0, false, {\n                        fileName: \"/Users/yugo139013/MyFolder/TypingKing/src/pages/mypage/profile.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"md:p-12 md:pt-0 w-full flex flex-col items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mt-6 relative\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Avatar, {\n                                        flexShrink: 0,\n                                        width: 20,\n                                        height: 20,\n                                        src: (user === null || user === void 0 ? void 0 : user.iconImageUrl) || \"default_image_url\",\n                                        className: \"absolute\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yugo139013/MyFolder/TypingKing/src/pages/mypage/profile.tsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"absolute bottom-0 right-1\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(EditButton, {\n                                            property: \"iconImageUrl\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/yugo139013/MyFolder/TypingKing/src/pages/mypage/profile.tsx\",\n                                            lineNumber: 65,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yugo139013/MyFolder/TypingKing/src/pages/mypage/profile.tsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/yugo139013/MyFolder/TypingKing/src/pages/mypage/profile.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.TableContainer, {\n                                className: \"mt-8 mb-4 w-[90%] mx-[5%]\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Table, {\n                                    variant: \"simple\",\n                                    size: tableSize,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Thead, {}, void 0, false, {\n                                            fileName: \"/Users/yugo139013/MyFolder/TypingKing/src/pages/mypage/profile.tsx\",\n                                            lineNumber: 70,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Tbody, {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Tr, {\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Td, {\n                                                            children: _src_types_user__WEBPACK_IMPORTED_MODULE_4__.userPropertiesLabel.name\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/yugo139013/MyFolder/TypingKing/src/pages/mypage/profile.tsx\",\n                                                            lineNumber: 79,\n                                                            columnNumber: 19\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Td, {\n                                                            children: user === null || user === void 0 ? void 0 : user.name\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/yugo139013/MyFolder/TypingKing/src/pages/mypage/profile.tsx\",\n                                                            lineNumber: 80,\n                                                            columnNumber: 19\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Td, {\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(EditButton, {\n                                                                property: \"name\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/yugo139013/MyFolder/TypingKing/src/pages/mypage/profile.tsx\",\n                                                                lineNumber: 82,\n                                                                columnNumber: 21\n                                                            }, undefined)\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/yugo139013/MyFolder/TypingKing/src/pages/mypage/profile.tsx\",\n                                                            lineNumber: 81,\n                                                            columnNumber: 19\n                                                        }, undefined)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/yugo139013/MyFolder/TypingKing/src/pages/mypage/profile.tsx\",\n                                                    lineNumber: 78,\n                                                    columnNumber: 17\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Tr, {\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Td, {\n                                                            children: _src_types_user__WEBPACK_IMPORTED_MODULE_4__.userPropertiesLabel.email\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/yugo139013/MyFolder/TypingKing/src/pages/mypage/profile.tsx\",\n                                                            lineNumber: 86,\n                                                            columnNumber: 19\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Td, {\n                                                            children: user === null || user === void 0 ? void 0 : user.email\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/yugo139013/MyFolder/TypingKing/src/pages/mypage/profile.tsx\",\n                                                            lineNumber: 87,\n                                                            columnNumber: 19\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Td, {}, void 0, false, {\n                                                            fileName: \"/Users/yugo139013/MyFolder/TypingKing/src/pages/mypage/profile.tsx\",\n                                                            lineNumber: 88,\n                                                            columnNumber: 19\n                                                        }, undefined)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/yugo139013/MyFolder/TypingKing/src/pages/mypage/profile.tsx\",\n                                                    lineNumber: 85,\n                                                    columnNumber: 17\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/yugo139013/MyFolder/TypingKing/src/pages/mypage/profile.tsx\",\n                                            lineNumber: 77,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/yugo139013/MyFolder/TypingKing/src/pages/mypage/profile.tsx\",\n                                    lineNumber: 69,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/yugo139013/MyFolder/TypingKing/src/pages/mypage/profile.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/yugo139013/MyFolder/TypingKing/src/pages/mypage/profile.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/yugo139013/MyFolder/TypingKing/src/pages/mypage/profile.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_EditModal__WEBPACK_IMPORTED_MODULE_7__.EditModal, {\n                isOpen: isOpen,\n                onClose: onClose,\n                documentId: (authUser === null || authUser === void 0 ? void 0 : authUser.uid) || \"\",\n                updateField: updateProperty,\n                collectionName: \"users\",\n                label: _src_types_user__WEBPACK_IMPORTED_MODULE_4__.userPropertiesLabel[updateProperty],\n                inputType: updateProperty === \"iconImageUrl\" ? \"file\" : \"text\",\n                currentValue: typeof (user === null || user === void 0 ? void 0 : user[updateProperty]) === \"string\" ? user === null || user === void 0 ? void 0 : user[updateProperty] : typeof (user === null || user === void 0 ? void 0 : user[updateProperty]) === \"object\" ? JSON.stringify(user === null || user === void 0 ? void 0 : user[updateProperty]) : \"\"\n            }, void 0, false, {\n                fileName: \"/Users/yugo139013/MyFolder/TypingKing/src/pages/mypage/profile.tsx\",\n                lineNumber: 96,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/yugo139013/MyFolder/TypingKing/src/pages/mypage/profile.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProfilePage, \"ZKdok/9+79ON6545gNvwVv84ntA=\", false, function() {\n    return [\n        _src_feature_auth_provider_AuthProvider__WEBPACK_IMPORTED_MODULE_1__.useAuthContext,\n        _src_hooks_firestoreDocument_useUser__WEBPACK_IMPORTED_MODULE_2__.useUserById,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.useBreakpointValue\n    ];\n});\n_c = ProfilePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProfilePage);\nvar _c;\n$RefreshReg$(_c, \"ProfilePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbXlwYWdlL3Byb2ZpbGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVMwQjtBQUMrQztBQUNMO0FBQ2hCO0FBQ2E7QUFDaEM7QUFDZ0M7QUFDUDtBQUNoQztBQUM0QjtBQUUvQyxNQUFNaUIsY0FBYzs7SUFDekIsTUFBTSxFQUFFQyxNQUFNQyxRQUFRLEVBQUUsR0FBR1gsdUZBQWNBO0lBQ3pDLE1BQU0sRUFBRVUsSUFBSSxFQUFFRSxPQUFPLEVBQUUsR0FBR1gsaUZBQVdBLENBQUNVLHFCQUFBQSwrQkFBQUEsU0FBVUUsR0FBRztJQUVuRCxNQUFNQyxZQUFZaEIsb0VBQWtCQSxDQUFDO1FBQUVpQixNQUFNO1FBQU1DLElBQUk7UUFBTUMsSUFBSTtJQUFLO0lBQ3RFLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHZiwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNZ0IsU0FBUyxJQUFNRCxVQUFVO0lBQy9CLE1BQU1FLFVBQVUsSUFBTUYsVUFBVTtJQUVoQyxNQUFNLENBQUNHLGdCQUFnQkMsa0JBQWtCLEdBQUduQiwrQ0FBUUEsQ0FBYTtJQUVqRSxNQUFNb0IsYUFBYTtZQUFDLEVBQUVDLFFBQVEsRUFBNEI7UUFDeEQscUJBQ0UsOERBQUNDO1lBQ0NDLFNBQVM7Z0JBQ1BKLGtCQUFrQkU7Z0JBQ2xCTDtZQUNGO1lBQ0FRLFdBQVU7c0JBRVYsNEVBQUN2QiwyRUFBZUE7Z0JBQUN3QixNQUFNdkIsb0VBQUtBO2dCQUFFd0IsTUFBSztnQkFBS0MsT0FBTTtnQkFBS0MsUUFBTzs7Ozs7Ozs7Ozs7SUFHaEU7SUFFQSxxQkFDRSw4REFBQzlCLGtFQUFVQTtRQUNUK0IsT0FBTTtRQUNOQyxlQUFlO1FBQ2ZDLGtCQUFrQjtRQUNsQnZCLFNBQVNBOzswQkFFVCw4REFBQ3dCO2dCQUFJUixXQUFVOztrQ0FDYiw4REFBQ1M7d0JBQUdULFdBQVU7a0NBQTJDOzs7Ozs7a0NBQ3pELDhEQUFDUTt3QkFBSVIsV0FBVTs7MENBQ2IsOERBQUNRO2dDQUFJUixXQUFVOztrREFDYiw4REFBQzdCLG9EQUFNQTt3Q0FDTHVDLFlBQVk7d0NBQ1pQLE9BQU87d0NBQ1BDLFFBQVE7d0NBQ1JPLEtBQUs3QixDQUFBQSxpQkFBQUEsMkJBQUFBLEtBQU04QixZQUFZLEtBQUk7d0NBQzNCWixXQUFVOzs7Ozs7a0RBRVosOERBQUNRO3dDQUFJUixXQUFVO2tEQUNiLDRFQUFDSjs0Q0FBV0MsVUFBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBR3pCLDhEQUFDNUIsNERBQWNBO2dDQUFDK0IsV0FBVTswQ0FDeEIsNEVBQUNwQyxtREFBS0E7b0NBQUNpRCxTQUFRO29DQUFTWCxNQUFNaEI7O3NEQUM1Qiw4REFBQ3JCLG1EQUFLQTs7Ozs7c0RBT04sOERBQUNDLG1EQUFLQTs7OERBQ0osOERBQUNDLGdEQUFFQTs7c0VBQ0QsOERBQUNDLGdEQUFFQTtzRUFBRU8sZ0VBQW1CQSxDQUFDdUMsSUFBSTs7Ozs7O3NFQUM3Qiw4REFBQzlDLGdEQUFFQTtzRUFBRWMsaUJBQUFBLDJCQUFBQSxLQUFNZ0MsSUFBSTs7Ozs7O3NFQUNmLDhEQUFDOUMsZ0RBQUVBO3NFQUNELDRFQUFDNEI7Z0VBQVdDLFVBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7OzhEQUd6Qiw4REFBQzlCLGdEQUFFQTs7c0VBQ0QsOERBQUNDLGdEQUFFQTtzRUFBRU8sZ0VBQW1CQSxDQUFDd0MsS0FBSzs7Ozs7O3NFQUM5Qiw4REFBQy9DLGdEQUFFQTtzRUFBRWMsaUJBQUFBLDJCQUFBQSxLQUFNaUMsS0FBSzs7Ozs7O3NFQUNoQiw4REFBQy9DLGdEQUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFRZiw4REFBQ1ksZ0VBQVNBO2dCQUNSVSxRQUFRQTtnQkFDUkcsU0FBU0E7Z0JBQ1R1QixZQUFZakMsQ0FBQUEscUJBQUFBLCtCQUFBQSxTQUFVRSxHQUFHLEtBQUk7Z0JBQzdCZ0MsYUFBYXZCO2dCQUNid0IsZ0JBQWU7Z0JBQ2ZDLE9BQU81QyxnRUFBbUIsQ0FBQ21CLGVBQWU7Z0JBQzFDMEIsV0FBVzFCLG1CQUFtQixpQkFBaUIsU0FBUztnQkFDeEQyQixjQUNFLFFBQU92QyxpQkFBQUEsMkJBQUFBLElBQU0sQ0FBQ1ksZUFBZSxNQUFLLFdBQzlCWixpQkFBQUEsMkJBQUFBLElBQU0sQ0FBQ1ksZUFBZSxHQUN0QixRQUFPWixpQkFBQUEsMkJBQUFBLElBQU0sQ0FBQ1ksZUFBZSxNQUFLLFdBQ2xDNEIsS0FBS0MsU0FBUyxDQUFDekMsaUJBQUFBLDJCQUFBQSxJQUFNLENBQUNZLGVBQWUsSUFDckM7Ozs7Ozs7Ozs7OztBQUtkLEVBQUU7R0E3RldiOztRQUNnQlQsbUZBQWNBO1FBQ2ZDLDZFQUFXQTtRQUVuQkgsZ0VBQWtCQTs7O0tBSnpCVztBQStGYiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvbXlwYWdlL3Byb2ZpbGUudHN4P2Y3ZGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgVGFibGUsXG4gIFRoZWFkLFxuICBUYm9keSxcbiAgVHIsXG4gIFRkLFxuICBUYWJsZUNvbnRhaW5lcixcbiAgdXNlQnJlYWtwb2ludFZhbHVlLFxuICBBdmF0YXIsXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyB1c2VBdXRoQ29udGV4dCB9IGZyb20gXCJAc3JjL2ZlYXR1cmUvYXV0aC9wcm92aWRlci9BdXRoUHJvdmlkZXJcIjtcbmltcG9ydCB7IHVzZVVzZXJCeUlkIH0gZnJvbSBcIkAvc3JjL2hvb2tzL2ZpcmVzdG9yZURvY3VtZW50L3VzZVVzZXJcIjtcbmltcG9ydCBDdXN0b21QYWdlIGZyb20gXCJAc3JjL2NvbXBvbmVudHMvQ3VzdG9tUGFnZVwiO1xuaW1wb3J0IHsgdXNlclByb3BlcnRpZXNMYWJlbCwgdHlwZSBVc2VyIH0gZnJvbSBcIkBzcmMvdHlwZXMvdXNlclwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcbmltcG9ydCB7IGZhUGVuIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRWRpdE1vZGFsIH0gZnJvbSBcIkBzcmMvY29tcG9uZW50cy9FZGl0TW9kYWxcIjtcblxuZXhwb3J0IGNvbnN0IFByb2ZpbGVQYWdlID0gKCkgPT4ge1xuICBjb25zdCB7IHVzZXI6IGF1dGhVc2VyIH0gPSB1c2VBdXRoQ29udGV4dCgpO1xuICBjb25zdCB7IHVzZXIsIGxvYWRpbmcgfSA9IHVzZVVzZXJCeUlkKGF1dGhVc2VyPy51aWQpO1xuXG4gIGNvbnN0IHRhYmxlU2l6ZSA9IHVzZUJyZWFrcG9pbnRWYWx1ZSh7IGJhc2U6IFwic21cIiwgbWQ6IFwibWRcIiwgbGc6IFwibGdcIiB9KTtcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgb25PcGVuID0gKCkgPT4gc2V0SXNPcGVuKHRydWUpO1xuICBjb25zdCBvbkNsb3NlID0gKCkgPT4gc2V0SXNPcGVuKGZhbHNlKTtcblxuICBjb25zdCBbdXBkYXRlUHJvcGVydHksIHNldFVwZGF0ZVByb3BlcnR5XSA9IHVzZVN0YXRlPGtleW9mIFVzZXI+KFwibmFtZVwiKTtcblxuICBjb25zdCBFZGl0QnV0dG9uID0gKHsgcHJvcGVydHkgfTogeyBwcm9wZXJ0eToga2V5b2YgVXNlciB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxidXR0b25cbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgIHNldFVwZGF0ZVByb3BlcnR5KHByb3BlcnR5KTtcbiAgICAgICAgICBvbk9wZW4oKTtcbiAgICAgICAgfX1cbiAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy00IGgtNFwiXG4gICAgICA+XG4gICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFQZW59IHNpemU9XCJzbVwiIHdpZHRoPVwiMTJcIiBoZWlnaHQ9XCIxMlwiIC8+XG4gICAgICA8L2J1dHRvbj5cbiAgICApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEN1c3RvbVBhZ2VcbiAgICAgIHRpdGxlPVwiU2V0dGluZ1wiXG4gICAgICBpc1RpdGxlSGlkZGVuPXt0cnVlfVxuICAgICAgaXNBdXRoUGFnZUhpZGRlbj17dHJ1ZX1cbiAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBmbGV4LWNvbCBib3JkZXIgYm9yZGVyLWdyYXktMjAwIHJvdW5kZWQtbWQgc2hhZG93LXNtIGJnLXdoaXRlXCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250LWJvbGQgcC00IHctZnVsbCB0ZXh0LXhsIHRleHQtY2VudGVyXCI+U2V0dGluZzwvaDI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6cC0xMiBtZDpwdC0wIHctZnVsbCBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNiByZWxhdGl2ZVwiPlxuICAgICAgICAgICAgPEF2YXRhclxuICAgICAgICAgICAgICBmbGV4U2hyaW5rPXswfVxuICAgICAgICAgICAgICB3aWR0aD17MjB9XG4gICAgICAgICAgICAgIGhlaWdodD17MjB9XG4gICAgICAgICAgICAgIHNyYz17dXNlcj8uaWNvbkltYWdlVXJsIHx8IFwiZGVmYXVsdF9pbWFnZV91cmxcIn1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTAgcmlnaHQtMVwiPlxuICAgICAgICAgICAgICA8RWRpdEJ1dHRvbiBwcm9wZXJ0eT1cImljb25JbWFnZVVybFwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8VGFibGVDb250YWluZXIgY2xhc3NOYW1lPVwibXQtOCBtYi00IHctWzkwJV0gbXgtWzUlXVwiPlxuICAgICAgICAgICAgPFRhYmxlIHZhcmlhbnQ9XCJzaW1wbGVcIiBzaXplPXt0YWJsZVNpemV9PlxuICAgICAgICAgICAgICA8VGhlYWQ+XG4gICAgICAgICAgICAgICAgey8qIDxUcj5cbiAgICAgICAgICAgICAgICAgIDxUaD7poIXnm648L1RoPlxuICAgICAgICAgICAgICAgICAgPFRoPueZu+mMsuaDheWgsTwvVGg+XG4gICAgICAgICAgICAgICAgICA8VGg+PC9UaD5cbiAgICAgICAgICAgICAgICA8L1RyPiAqL31cbiAgICAgICAgICAgICAgPC9UaGVhZD5cbiAgICAgICAgICAgICAgPFRib2R5PlxuICAgICAgICAgICAgICAgIDxUcj5cbiAgICAgICAgICAgICAgICAgIDxUZD57dXNlclByb3BlcnRpZXNMYWJlbC5uYW1lfTwvVGQ+XG4gICAgICAgICAgICAgICAgICA8VGQ+e3VzZXI/Lm5hbWV9PC9UZD5cbiAgICAgICAgICAgICAgICAgIDxUZD5cbiAgICAgICAgICAgICAgICAgICAgPEVkaXRCdXR0b24gcHJvcGVydHk9XCJuYW1lXCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvVGQ+XG4gICAgICAgICAgICAgICAgPC9Ucj5cbiAgICAgICAgICAgICAgICA8VHI+XG4gICAgICAgICAgICAgICAgICA8VGQ+e3VzZXJQcm9wZXJ0aWVzTGFiZWwuZW1haWx9PC9UZD5cbiAgICAgICAgICAgICAgICAgIDxUZD57dXNlcj8uZW1haWx9PC9UZD5cbiAgICAgICAgICAgICAgICAgIDxUZD48L1RkPlxuICAgICAgICAgICAgICAgIDwvVHI+XG4gICAgICAgICAgICAgIDwvVGJvZHk+XG4gICAgICAgICAgICA8L1RhYmxlPlxuICAgICAgICAgIDwvVGFibGVDb250YWluZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxFZGl0TW9kYWxcbiAgICAgICAgaXNPcGVuPXtpc09wZW59XG4gICAgICAgIG9uQ2xvc2U9e29uQ2xvc2V9XG4gICAgICAgIGRvY3VtZW50SWQ9e2F1dGhVc2VyPy51aWQgfHwgXCJcIn1cbiAgICAgICAgdXBkYXRlRmllbGQ9e3VwZGF0ZVByb3BlcnR5fVxuICAgICAgICBjb2xsZWN0aW9uTmFtZT1cInVzZXJzXCJcbiAgICAgICAgbGFiZWw9e3VzZXJQcm9wZXJ0aWVzTGFiZWxbdXBkYXRlUHJvcGVydHldfVxuICAgICAgICBpbnB1dFR5cGU9e3VwZGF0ZVByb3BlcnR5ID09PSBcImljb25JbWFnZVVybFwiID8gXCJmaWxlXCIgOiBcInRleHRcIn1cbiAgICAgICAgY3VycmVudFZhbHVlPXtcbiAgICAgICAgICB0eXBlb2YgdXNlcj8uW3VwZGF0ZVByb3BlcnR5XSA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgPyB1c2VyPy5bdXBkYXRlUHJvcGVydHldXG4gICAgICAgICAgICA6IHR5cGVvZiB1c2VyPy5bdXBkYXRlUHJvcGVydHldID09PSBcIm9iamVjdFwiXG4gICAgICAgICAgICA/IEpTT04uc3RyaW5naWZ5KHVzZXI/Llt1cGRhdGVQcm9wZXJ0eV0pXG4gICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgfVxuICAgICAgLz5cbiAgICA8L0N1c3RvbVBhZ2U+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlUGFnZTtcbiJdLCJuYW1lcyI6WyJUYWJsZSIsIlRoZWFkIiwiVGJvZHkiLCJUciIsIlRkIiwiVGFibGVDb250YWluZXIiLCJ1c2VCcmVha3BvaW50VmFsdWUiLCJBdmF0YXIiLCJ1c2VBdXRoQ29udGV4dCIsInVzZVVzZXJCeUlkIiwiQ3VzdG9tUGFnZSIsInVzZXJQcm9wZXJ0aWVzTGFiZWwiLCJ1c2VTdGF0ZSIsIkZvbnRBd2Vzb21lSWNvbiIsImZhUGVuIiwiUmVhY3QiLCJFZGl0TW9kYWwiLCJQcm9maWxlUGFnZSIsInVzZXIiLCJhdXRoVXNlciIsImxvYWRpbmciLCJ1aWQiLCJ0YWJsZVNpemUiLCJiYXNlIiwibWQiLCJsZyIsImlzT3BlbiIsInNldElzT3BlbiIsIm9uT3BlbiIsIm9uQ2xvc2UiLCJ1cGRhdGVQcm9wZXJ0eSIsInNldFVwZGF0ZVByb3BlcnR5IiwiRWRpdEJ1dHRvbiIsInByb3BlcnR5IiwiYnV0dG9uIiwib25DbGljayIsImNsYXNzTmFtZSIsImljb24iLCJzaXplIiwid2lkdGgiLCJoZWlnaHQiLCJ0aXRsZSIsImlzVGl0bGVIaWRkZW4iLCJpc0F1dGhQYWdlSGlkZGVuIiwiZGl2IiwiaDIiLCJmbGV4U2hyaW5rIiwic3JjIiwiaWNvbkltYWdlVXJsIiwidmFyaWFudCIsIm5hbWUiLCJlbWFpbCIsImRvY3VtZW50SWQiLCJ1cGRhdGVGaWVsZCIsImNvbGxlY3Rpb25OYW1lIiwibGFiZWwiLCJpbnB1dFR5cGUiLCJjdXJyZW50VmFsdWUiLCJKU09OIiwic3RyaW5naWZ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/mypage/profile.tsx\n"));

/***/ })

});