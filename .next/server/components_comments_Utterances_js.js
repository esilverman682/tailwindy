"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "components_comments_Utterances_js";
exports.ids = ["components_comments_Utterances_js"];
exports.modules = {

/***/ "./components/comments/Utterances.js":
/*!*******************************************!*\
  !*** ./components/comments/Utterances.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-themes */ \"next-themes\");\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/data/siteMetadata */ \"./data/siteMetadata.js\");\n/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_data_siteMetadata__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/wrivera/Desktop/tailwindy/components/comments/Utterances.js\";\n\n\n\n\n\nconst Utterances = ({\n  issueTerm\n}) => {\n  const {\n    0: enableLoadComments,\n    1: setEnabledLoadComments\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);\n  const {\n    theme,\n    resolvedTheme\n  } = (0,next_themes__WEBPACK_IMPORTED_MODULE_1__.useTheme)();\n  const commentsTheme = theme === 'dark' || resolvedTheme === 'dark' ? (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_2___default().comment.utterancesConfig.darkTheme) : (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_2___default().comment.utterancesConfig.theme);\n  const COMMENTS_ID = 'comments-container';\n\n  function LoadComments() {\n    setEnabledLoadComments(false);\n    const script = document.createElement('script');\n    script.src = 'https://utteranc.es/client.js';\n    script.setAttribute('repo', (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_2___default().comment.utterancesConfig.repo));\n    script.setAttribute('issue-term', issueTerm);\n    script.setAttribute('label', (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_2___default().comment.utterancesConfig.label));\n    script.setAttribute('theme', commentsTheme);\n    script.setAttribute('crossorigin', 'anonymous');\n    script.async = true;\n    const comments = document.getElementById(COMMENTS_ID);\n    if (comments) comments.appendChild(script);\n    return () => {\n      const comments = document.getElementById(COMMENTS_ID);\n      if (comments) comments.innerHTML = '';\n    };\n  } // Added `relative` to fix a weird bug with `utterances-frame` position\n\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n    className: \"pt-6 pb-6 text-center text-gray-700 dark:text-gray-300\",\n    children: [enableLoadComments && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"button\", {\n      onClick: LoadComments,\n      children: \"Load Comments\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 30\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      className: \"utterances-frame relative\",\n      id: COMMENTS_ID\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 38,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Utterances);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbW1lbnRzL1V0dGVyYW5jZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTs7O0FBRUEsTUFBTUksVUFBVSxHQUFHLENBQUM7QUFBRUMsRUFBQUE7QUFBRixDQUFELEtBQW1CO0FBQ3BDLFFBQU07QUFBQSxPQUFDQyxrQkFBRDtBQUFBLE9BQXFCQztBQUFyQixNQUErQ04sK0NBQVEsQ0FBQyxJQUFELENBQTdEO0FBQ0EsUUFBTTtBQUFFTyxJQUFBQSxLQUFGO0FBQVNDLElBQUFBO0FBQVQsTUFBMkJQLHFEQUFRLEVBQXpDO0FBQ0EsUUFBTVEsYUFBYSxHQUNqQkYsS0FBSyxLQUFLLE1BQVYsSUFBb0JDLGFBQWEsS0FBSyxNQUF0QyxHQUNJTiw4RkFESixHQUVJQSwwRkFITjtBQUtBLFFBQU1XLFdBQVcsR0FBRyxvQkFBcEI7O0FBRUEsV0FBU0MsWUFBVCxHQUF3QjtBQUN0QlIsSUFBQUEsc0JBQXNCLENBQUMsS0FBRCxDQUF0QjtBQUNBLFVBQU1TLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQWY7QUFDQUYsSUFBQUEsTUFBTSxDQUFDRyxHQUFQLEdBQWEsK0JBQWI7QUFDQUgsSUFBQUEsTUFBTSxDQUFDSSxZQUFQLENBQW9CLE1BQXBCLEVBQTRCakIseUZBQTVCO0FBQ0FhLElBQUFBLE1BQU0sQ0FBQ0ksWUFBUCxDQUFvQixZQUFwQixFQUFrQ2YsU0FBbEM7QUFDQVcsSUFBQUEsTUFBTSxDQUFDSSxZQUFQLENBQW9CLE9BQXBCLEVBQTZCakIsMEZBQTdCO0FBQ0FhLElBQUFBLE1BQU0sQ0FBQ0ksWUFBUCxDQUFvQixPQUFwQixFQUE2QlYsYUFBN0I7QUFDQU0sSUFBQUEsTUFBTSxDQUFDSSxZQUFQLENBQW9CLGFBQXBCLEVBQW1DLFdBQW5DO0FBQ0FKLElBQUFBLE1BQU0sQ0FBQ08sS0FBUCxHQUFlLElBQWY7QUFFQSxVQUFNQyxRQUFRLEdBQUdQLFFBQVEsQ0FBQ1EsY0FBVCxDQUF3QlgsV0FBeEIsQ0FBakI7QUFDQSxRQUFJVSxRQUFKLEVBQWNBLFFBQVEsQ0FBQ0UsV0FBVCxDQUFxQlYsTUFBckI7QUFFZCxXQUFPLE1BQU07QUFDWCxZQUFNUSxRQUFRLEdBQUdQLFFBQVEsQ0FBQ1EsY0FBVCxDQUF3QlgsV0FBeEIsQ0FBakI7QUFDQSxVQUFJVSxRQUFKLEVBQWNBLFFBQVEsQ0FBQ0csU0FBVCxHQUFxQixFQUFyQjtBQUNmLEtBSEQ7QUFJRCxHQTVCbUMsQ0E4QnBDOzs7QUFDQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyx3REFBZjtBQUFBLGVBQ0dyQixrQkFBa0IsaUJBQUk7QUFBUSxhQUFPLEVBQUVTLFlBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUR6QixlQUVFO0FBQUssZUFBUyxFQUFDLDJCQUFmO0FBQTJDLFFBQUUsRUFBRUQ7QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQU1ELENBckNEOztBQXVDQSxpRUFBZVYsVUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL3RhaWx3aW5kLW5leHRqcy1zdGFydGVyLWJsb2cvLi9jb21wb25lbnRzL2NvbW1lbnRzL1V0dGVyYW5jZXMuanM/MDQxMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnbmV4dC10aGVtZXMnXG5cbmltcG9ydCBzaXRlTWV0YWRhdGEgZnJvbSAnQC9kYXRhL3NpdGVNZXRhZGF0YSdcblxuY29uc3QgVXR0ZXJhbmNlcyA9ICh7IGlzc3VlVGVybSB9KSA9PiB7XG4gIGNvbnN0IFtlbmFibGVMb2FkQ29tbWVudHMsIHNldEVuYWJsZWRMb2FkQ29tbWVudHNdID0gdXNlU3RhdGUodHJ1ZSlcbiAgY29uc3QgeyB0aGVtZSwgcmVzb2x2ZWRUaGVtZSB9ID0gdXNlVGhlbWUoKVxuICBjb25zdCBjb21tZW50c1RoZW1lID1cbiAgICB0aGVtZSA9PT0gJ2RhcmsnIHx8IHJlc29sdmVkVGhlbWUgPT09ICdkYXJrJ1xuICAgICAgPyBzaXRlTWV0YWRhdGEuY29tbWVudC51dHRlcmFuY2VzQ29uZmlnLmRhcmtUaGVtZVxuICAgICAgOiBzaXRlTWV0YWRhdGEuY29tbWVudC51dHRlcmFuY2VzQ29uZmlnLnRoZW1lXG5cbiAgY29uc3QgQ09NTUVOVFNfSUQgPSAnY29tbWVudHMtY29udGFpbmVyJ1xuXG4gIGZ1bmN0aW9uIExvYWRDb21tZW50cygpIHtcbiAgICBzZXRFbmFibGVkTG9hZENvbW1lbnRzKGZhbHNlKVxuICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpXG4gICAgc2NyaXB0LnNyYyA9ICdodHRwczovL3V0dGVyYW5jLmVzL2NsaWVudC5qcydcbiAgICBzY3JpcHQuc2V0QXR0cmlidXRlKCdyZXBvJywgc2l0ZU1ldGFkYXRhLmNvbW1lbnQudXR0ZXJhbmNlc0NvbmZpZy5yZXBvKVxuICAgIHNjcmlwdC5zZXRBdHRyaWJ1dGUoJ2lzc3VlLXRlcm0nLCBpc3N1ZVRlcm0pXG4gICAgc2NyaXB0LnNldEF0dHJpYnV0ZSgnbGFiZWwnLCBzaXRlTWV0YWRhdGEuY29tbWVudC51dHRlcmFuY2VzQ29uZmlnLmxhYmVsKVxuICAgIHNjcmlwdC5zZXRBdHRyaWJ1dGUoJ3RoZW1lJywgY29tbWVudHNUaGVtZSlcbiAgICBzY3JpcHQuc2V0QXR0cmlidXRlKCdjcm9zc29yaWdpbicsICdhbm9ueW1vdXMnKVxuICAgIHNjcmlwdC5hc3luYyA9IHRydWVcblxuICAgIGNvbnN0IGNvbW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoQ09NTUVOVFNfSUQpXG4gICAgaWYgKGNvbW1lbnRzKSBjb21tZW50cy5hcHBlbmRDaGlsZChzY3JpcHQpXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY29uc3QgY29tbWVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChDT01NRU5UU19JRClcbiAgICAgIGlmIChjb21tZW50cykgY29tbWVudHMuaW5uZXJIVE1MID0gJydcbiAgICB9XG4gIH1cblxuICAvLyBBZGRlZCBgcmVsYXRpdmVgIHRvIGZpeCBhIHdlaXJkIGJ1ZyB3aXRoIGB1dHRlcmFuY2VzLWZyYW1lYCBwb3NpdGlvblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNiBwYi02IHRleHQtY2VudGVyIHRleHQtZ3JheS03MDAgZGFyazp0ZXh0LWdyYXktMzAwXCI+XG4gICAgICB7ZW5hYmxlTG9hZENvbW1lbnRzICYmIDxidXR0b24gb25DbGljaz17TG9hZENvbW1lbnRzfT5Mb2FkIENvbW1lbnRzPC9idXR0b24+fVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1dHRlcmFuY2VzLWZyYW1lIHJlbGF0aXZlXCIgaWQ9e0NPTU1FTlRTX0lEfSAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFV0dGVyYW5jZXNcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlVGhlbWUiLCJzaXRlTWV0YWRhdGEiLCJVdHRlcmFuY2VzIiwiaXNzdWVUZXJtIiwiZW5hYmxlTG9hZENvbW1lbnRzIiwic2V0RW5hYmxlZExvYWRDb21tZW50cyIsInRoZW1lIiwicmVzb2x2ZWRUaGVtZSIsImNvbW1lbnRzVGhlbWUiLCJjb21tZW50IiwidXR0ZXJhbmNlc0NvbmZpZyIsImRhcmtUaGVtZSIsIkNPTU1FTlRTX0lEIiwiTG9hZENvbW1lbnRzIiwic2NyaXB0IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic3JjIiwic2V0QXR0cmlidXRlIiwicmVwbyIsImxhYmVsIiwiYXN5bmMiLCJjb21tZW50cyIsImdldEVsZW1lbnRCeUlkIiwiYXBwZW5kQ2hpbGQiLCJpbm5lckhUTUwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/comments/Utterances.js\n");

/***/ })

};
;