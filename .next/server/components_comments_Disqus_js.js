"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "components_comments_Disqus_js";
exports.ids = ["components_comments_Disqus_js"];
exports.modules = {

/***/ "./components/comments/Disqus.js":
/*!***************************************!*\
  !*** ./components/comments/Disqus.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/data/siteMetadata */ \"./data/siteMetadata.js\");\n/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_data_siteMetadata__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/wrivera/Desktop/tailwindy/components/comments/Disqus.js\";\n\n\n\n\nconst Disqus = ({\n  frontMatter\n}) => {\n  const {\n    0: enableLoadComments,\n    1: setEnabledLoadComments\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);\n  const COMMENTS_ID = 'disqus_thread';\n\n  function LoadComments() {\n    setEnabledLoadComments(false);\n\n    window.disqus_config = function () {\n      this.page.url = window.location.href;\n      this.page.identifier = frontMatter.slug;\n    };\n\n    if (window.DISQUS === undefined) {\n      const script = document.createElement('script');\n      script.src = 'https://' + (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_1___default().comment.disqus.shortname) + '.disqus.com/embed.js';\n      script.setAttribute('data-timestamp', +new Date());\n      script.setAttribute('crossorigin', 'anonymous');\n      script.async = true;\n      document.body.appendChild(script);\n    } else {\n      window.DISQUS.reset({\n        reload: true\n      });\n    }\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    className: \"pt-6 pb-6 text-center text-gray-700 dark:text-gray-300\",\n    children: [enableLoadComments && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"button\", {\n      onClick: LoadComments,\n      children: \"Load Comments\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 30\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      className: \"disqus-frame\",\n      id: COMMENTS_ID\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Disqus);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbW1lbnRzL0Rpc3F1cy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBRUE7OztBQUVBLE1BQU1HLE1BQU0sR0FBRyxDQUFDO0FBQUVDLEVBQUFBO0FBQUYsQ0FBRCxLQUFxQjtBQUNsQyxRQUFNO0FBQUEsT0FBQ0Msa0JBQUQ7QUFBQSxPQUFxQkM7QUFBckIsTUFBK0NMLCtDQUFRLENBQUMsSUFBRCxDQUE3RDtBQUVBLFFBQU1NLFdBQVcsR0FBRyxlQUFwQjs7QUFFQSxXQUFTQyxZQUFULEdBQXdCO0FBQ3RCRixJQUFBQSxzQkFBc0IsQ0FBQyxLQUFELENBQXRCOztBQUVBRyxJQUFBQSxNQUFNLENBQUNDLGFBQVAsR0FBdUIsWUFBWTtBQUNqQyxXQUFLQyxJQUFMLENBQVVDLEdBQVYsR0FBZ0JILE1BQU0sQ0FBQ0ksUUFBUCxDQUFnQkMsSUFBaEM7QUFDQSxXQUFLSCxJQUFMLENBQVVJLFVBQVYsR0FBdUJYLFdBQVcsQ0FBQ1ksSUFBbkM7QUFDRCxLQUhEOztBQUlBLFFBQUlQLE1BQU0sQ0FBQ1EsTUFBUCxLQUFrQkMsU0FBdEIsRUFBaUM7QUFDL0IsWUFBTUMsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZjtBQUNBRixNQUFBQSxNQUFNLENBQUNHLEdBQVAsR0FBYSxhQUFhcEIsb0ZBQWIsR0FBcUQsc0JBQWxFO0FBQ0FpQixNQUFBQSxNQUFNLENBQUNPLFlBQVAsQ0FBb0IsZ0JBQXBCLEVBQXNDLENBQUMsSUFBSUMsSUFBSixFQUF2QztBQUNBUixNQUFBQSxNQUFNLENBQUNPLFlBQVAsQ0FBb0IsYUFBcEIsRUFBbUMsV0FBbkM7QUFDQVAsTUFBQUEsTUFBTSxDQUFDUyxLQUFQLEdBQWUsSUFBZjtBQUNBUixNQUFBQSxRQUFRLENBQUNTLElBQVQsQ0FBY0MsV0FBZCxDQUEwQlgsTUFBMUI7QUFDRCxLQVBELE1BT087QUFDTFYsTUFBQUEsTUFBTSxDQUFDUSxNQUFQLENBQWNjLEtBQWQsQ0FBb0I7QUFBRUMsUUFBQUEsTUFBTSxFQUFFO0FBQVYsT0FBcEI7QUFDRDtBQUNGOztBQUVELHNCQUNFO0FBQUssYUFBUyxFQUFDLHdEQUFmO0FBQUEsZUFDRzNCLGtCQUFrQixpQkFBSTtBQUFRLGFBQU8sRUFBRUcsWUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRHpCLGVBRUU7QUFBSyxlQUFTLEVBQUMsY0FBZjtBQUE4QixRQUFFLEVBQUVEO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFNRCxDQTlCRDs7QUFnQ0EsaUVBQWVKLE1BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YWlsd2luZC1uZXh0anMtc3RhcnRlci1ibG9nLy4vY29tcG9uZW50cy9jb21tZW50cy9EaXNxdXMuanM/NjdlZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHNpdGVNZXRhZGF0YSBmcm9tICdAL2RhdGEvc2l0ZU1ldGFkYXRhJ1xuXG5jb25zdCBEaXNxdXMgPSAoeyBmcm9udE1hdHRlciB9KSA9PiB7XG4gIGNvbnN0IFtlbmFibGVMb2FkQ29tbWVudHMsIHNldEVuYWJsZWRMb2FkQ29tbWVudHNdID0gdXNlU3RhdGUodHJ1ZSlcblxuICBjb25zdCBDT01NRU5UU19JRCA9ICdkaXNxdXNfdGhyZWFkJ1xuXG4gIGZ1bmN0aW9uIExvYWRDb21tZW50cygpIHtcbiAgICBzZXRFbmFibGVkTG9hZENvbW1lbnRzKGZhbHNlKVxuXG4gICAgd2luZG93LmRpc3F1c19jb25maWcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLnBhZ2UudXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWZcbiAgICAgIHRoaXMucGFnZS5pZGVudGlmaWVyID0gZnJvbnRNYXR0ZXIuc2x1Z1xuICAgIH1cbiAgICBpZiAod2luZG93LkRJU1FVUyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxuICAgICAgc2NyaXB0LnNyYyA9ICdodHRwczovLycgKyBzaXRlTWV0YWRhdGEuY29tbWVudC5kaXNxdXMuc2hvcnRuYW1lICsgJy5kaXNxdXMuY29tL2VtYmVkLmpzJ1xuICAgICAgc2NyaXB0LnNldEF0dHJpYnV0ZSgnZGF0YS10aW1lc3RhbXAnLCArbmV3IERhdGUoKSlcbiAgICAgIHNjcmlwdC5zZXRBdHRyaWJ1dGUoJ2Nyb3Nzb3JpZ2luJywgJ2Fub255bW91cycpXG4gICAgICBzY3JpcHQuYXN5bmMgPSB0cnVlXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdClcbiAgICB9IGVsc2Uge1xuICAgICAgd2luZG93LkRJU1FVUy5yZXNldCh7IHJlbG9hZDogdHJ1ZSB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwdC02IHBiLTYgdGV4dC1jZW50ZXIgdGV4dC1ncmF5LTcwMCBkYXJrOnRleHQtZ3JheS0zMDBcIj5cbiAgICAgIHtlbmFibGVMb2FkQ29tbWVudHMgJiYgPGJ1dHRvbiBvbkNsaWNrPXtMb2FkQ29tbWVudHN9PkxvYWQgQ29tbWVudHM8L2J1dHRvbj59XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpc3F1cy1mcmFtZVwiIGlkPXtDT01NRU5UU19JRH0gLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBEaXNxdXNcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwic2l0ZU1ldGFkYXRhIiwiRGlzcXVzIiwiZnJvbnRNYXR0ZXIiLCJlbmFibGVMb2FkQ29tbWVudHMiLCJzZXRFbmFibGVkTG9hZENvbW1lbnRzIiwiQ09NTUVOVFNfSUQiLCJMb2FkQ29tbWVudHMiLCJ3aW5kb3ciLCJkaXNxdXNfY29uZmlnIiwicGFnZSIsInVybCIsImxvY2F0aW9uIiwiaHJlZiIsImlkZW50aWZpZXIiLCJzbHVnIiwiRElTUVVTIiwidW5kZWZpbmVkIiwic2NyaXB0IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic3JjIiwiY29tbWVudCIsImRpc3F1cyIsInNob3J0bmFtZSIsInNldEF0dHJpYnV0ZSIsIkRhdGUiLCJhc3luYyIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInJlc2V0IiwicmVsb2FkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/comments/Disqus.js\n");

/***/ })

};
;