"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Filmes",{

/***/ "./components/Table.js":
/*!*****************************!*\
  !*** ./components/Table.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Table; }\n/* harmony export */ });\n/* harmony import */ var C_Users_Vinic_OneDrive_rea_de_Trabalho_TarefaManflix_next_githubstars_main_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Vinic_OneDrive_rea_de_Trabalho_TarefaManflix_next_githubstars_main_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Vinic_OneDrive_rea_de_Trabalho_TarefaManflix_next_githubstars_main_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var primereact_datatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primereact/datatable */ \"./node_modules/primereact/datatable/datatable.esm.js\");\n/* harmony import */ var primereact_column__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primereact/column */ \"./node_modules/primereact/column/column.esm.js\");\n/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primereact/button */ \"./node_modules/primereact/button/button.esm.js\");\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\n//passar as props pra renderizar automatico as colunas e tmb os dados\nfunction Table(props) {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), myData = ref[0], setMyData = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(props.cabecalho), varHeader = ref1[0], setVarHeader = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(_asyncToGenerator(C_Users_Vinic_OneDrive_rea_de_Trabalho_TarefaManflix_next_githubstars_main_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var response, thisData;\n        return C_Users_Vinic_OneDrive_rea_de_Trabalho_TarefaManflix_next_githubstars_main_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return fetch(props.link);\n                case 2:\n                    response = _ctx.sent;\n                    _ctx.next = 5;\n                    return response.json();\n                case 5:\n                    thisData = _ctx.sent;\n                    setMyData(thisData);\n                case 7:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    })), [\n        props.link\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"card\",\n            style: {\n                height: 'calc(100vh - 145px)'\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(primereact_datatable__WEBPACK_IMPORTED_MODULE_3__.DataTable, {\n                value: myData,\n                scrollable: true,\n                scrollHeight: \"flex\",\n                children: [\n                    varHeader.map(function(col) {\n                        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(primereact_column__WEBPACK_IMPORTED_MODULE_4__.Column, {\n                            field: col[0],\n                            header: col[1]\n                        }, varHeader.indexOf(col), false, {\n                            fileName: \"C:\\\\Users\\\\Vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\TarefaManflix\\\\next_githubstars-main\\\\components\\\\Table.js\",\n                            lineNumber: 27,\n                            columnNumber: 37\n                        }, _this));\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(primereact_column__WEBPACK_IMPORTED_MODULE_4__.Column, {\n                        field: \"id\",\n                        header: \"Deletar\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(primereact_button__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                            onSubmit: console.log(\"id\")\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\TarefaManflix\\\\next_githubstars-main\\\\components\\\\Table.js\",\n                            lineNumber: 30,\n                            columnNumber: 67\n                        }, this)\n                    }, \"id\", false, {\n                        fileName: \"C:\\\\Users\\\\Vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\TarefaManflix\\\\next_githubstars-main\\\\components\\\\Table.js\",\n                        lineNumber: 30,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\TarefaManflix\\\\next_githubstars-main\\\\components\\\\Table.js\",\n                lineNumber: 24,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\TarefaManflix\\\\next_githubstars-main\\\\components\\\\Table.js\",\n            lineNumber: 23,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\TarefaManflix\\\\next_githubstars-main\\\\components\\\\Table.js\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, this));\n};\n_s(Table, \"U2shCLQ7BcD9AtxHB0abtpOMbxA=\");\n_c = Table;\nvar _c;\n$RefreshReg$(_c, \"Table\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RhYmxlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFrRDtBQUNGO0FBQ047QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQyxFQUFxRTtBQUV0RCxRQUFRLENBQUNNLEtBQUssQ0FBQ0MsS0FBSyxFQUFFLENBQUM7OztJQUNsQyxHQUFLLENBQXVCTixHQUFVLEdBQVZBLCtDQUFRLElBQTdCTyxNQUFNLEdBQWVQLEdBQVUsS0FBdkJRLFNBQVMsR0FBSVIsR0FBVTtJQUN0QyxHQUFLLENBQTZCQSxJQUF5QixHQUF6QkEsK0NBQVEsQ0FBQ00sS0FBSyxDQUFDRyxTQUFTLEdBQW5EQyxTQUFTLEdBQWtCVixJQUF5QixLQUF6Q1csWUFBWSxHQUFJWCxJQUF5QjtJQUUzREMsZ0RBQVMseU1BQUMsUUFBUSxXQUFJLENBQUM7WUFDYlcsUUFBUSxFQUdSQyxRQUFROzs7OzsyQkFIU0MsS0FBSyxDQUN4QlIsS0FBSyxDQUFDUyxJQUFJOztvQkFEUkgsUUFBUTs7MkJBR1NBLFFBQVEsQ0FBQ0ksSUFBSTs7b0JBQTlCSCxRQUFRO29CQUNkTCxTQUFTLENBQUNLLFFBQVE7Ozs7OztJQUV0QixDQUFDLElBQUUsQ0FBQ1A7UUFBQUEsS0FBSyxDQUFDUyxJQUFJO0lBQUEsQ0FBQztJQUVmLE1BQU0sNkVBQ0RFLENBQUc7OEZBQ0NBLENBQUc7WUFBQ0MsU0FBUyxFQUFDLENBQU07WUFBQ0MsS0FBSyxFQUFFLENBQUM7Z0JBQUNDLE1BQU0sRUFBRSxDQUFxQjtZQUFDLENBQUM7a0dBQ3pEbEIsMkRBQVM7Z0JBQUNtQixLQUFLLEVBQUVkLE1BQU07Z0JBQUVlLFVBQVU7Z0JBQUNDLFlBQVksRUFBQyxDQUFNOztvQkFFaERiLFNBQVMsQ0FBQ2MsR0FBRyxDQUFDLFFBQVEsQ0FBUEMsR0FBRyxFQUFLLENBQUM7d0JBQ3BCLE1BQU0sNkVBQUd0QixxREFBTTs0QkFBOEJ1QixLQUFLLEVBQUVELEdBQUcsQ0FBQyxDQUFDOzRCQUFHRSxNQUFNLEVBQUVGLEdBQUcsQ0FBQyxDQUFDOzJCQUFwRGYsU0FBUyxDQUFDa0IsT0FBTyxDQUFDSCxHQUFHOzs7OztvQkFDOUMsQ0FBQztnR0FFSnRCLHFEQUFNO3dCQUFVdUIsS0FBSyxFQUFDLENBQUk7d0JBQUNDLE1BQU0sRUFBQyxDQUFTOzhHQUFHdkIscURBQU07NEJBQUN5QixRQUFRLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQUk7Ozs7Ozt1QkFBcEUsQ0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3BDLENBQUM7R0EzQnVCMUIsS0FBSztLQUFMQSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVGFibGUuanM/MjAxNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRGF0YVRhYmxlIH0gZnJvbSAncHJpbWVyZWFjdC9kYXRhdGFibGUnO1xyXG5pbXBvcnQgeyBDb2x1bW4gfSBmcm9tICdwcmltZXJlYWN0L2NvbHVtbic7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJwcmltZXJlYWN0L2J1dHRvblwiO1xyXG5cclxuLy9wYXNzYXIgYXMgcHJvcHMgcHJhIHJlbmRlcml6YXIgYXV0b21hdGljbyBhcyBjb2x1bmFzIGUgdG1iIG9zIGRhZG9zXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUYWJsZShwcm9wcykge1xyXG4gICAgY29uc3QgW215RGF0YSwgc2V0TXlEYXRhXSA9IHVzZVN0YXRlKClcclxuICAgIGNvbnN0IFt2YXJIZWFkZXIsIHNldFZhckhlYWRlcl0gPSB1c2VTdGF0ZShwcm9wcy5jYWJlY2FsaG8pXHJcblxyXG4gICAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgICAgICBwcm9wcy5saW5rXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCB0aGlzRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBzZXRNeURhdGEodGhpc0RhdGEpO1xyXG5cclxuICAgIH0sIFtwcm9wcy5saW5rXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIiBzdHlsZT17eyBoZWlnaHQ6ICdjYWxjKDEwMHZoIC0gMTQ1cHgpJyB9fT5cclxuICAgICAgICAgICAgICAgIDxEYXRhVGFibGUgdmFsdWU9e215RGF0YX0gc2Nyb2xsYWJsZSBzY3JvbGxIZWlnaHQ9XCJmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJIZWFkZXIubWFwKChjb2wpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoPENvbHVtbiBrZXk9e3ZhckhlYWRlci5pbmRleE9mKGNvbCl9IGZpZWxkPXtjb2xbMF19IGhlYWRlcj17Y29sWzFdfSAvPilcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbHVtbiBrZXk9XCJpZFwiIGZpZWxkPVwiaWRcIiBoZWFkZXI9XCJEZWxldGFyXCIgPjxCdXR0b24gb25TdWJtaXQ9e2NvbnNvbGUubG9nKFwiaWRcIil9ID48L0J1dHRvbj48L0NvbHVtbj5cclxuICAgICAgICAgICAgICAgIDwvRGF0YVRhYmxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkRhdGFUYWJsZSIsIkNvbHVtbiIsIkJ1dHRvbiIsIlRhYmxlIiwicHJvcHMiLCJteURhdGEiLCJzZXRNeURhdGEiLCJjYWJlY2FsaG8iLCJ2YXJIZWFkZXIiLCJzZXRWYXJIZWFkZXIiLCJyZXNwb25zZSIsInRoaXNEYXRhIiwiZmV0Y2giLCJsaW5rIiwianNvbiIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwiaGVpZ2h0IiwidmFsdWUiLCJzY3JvbGxhYmxlIiwic2Nyb2xsSGVpZ2h0IiwibWFwIiwiY29sIiwiZmllbGQiLCJoZWFkZXIiLCJpbmRleE9mIiwib25TdWJtaXQiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Table.js\n");

/***/ })

});