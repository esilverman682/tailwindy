"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/boo",{

/***/ "./pages/boo.js":
/*!**********************!*\
  !*** ./pages/boo.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n/* harmony import */ var react_three_fiber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-three-fiber */ \"./node_modules/react-three-fiber/dist/react-three-fiber.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/wrivera/Desktop/tailwindy/pages/boo.js\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\n\n\n\nvar circleImg = '/images/features-bg.png';\n(0,react_three_fiber__WEBPACK_IMPORTED_MODULE_3__.extend)({\n  OrbitControls: three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_0__.OrbitControls\n});\n\nfunction CameraControls() {\n  _s();\n\n  var _useThree = (0,react_three_fiber__WEBPACK_IMPORTED_MODULE_3__.useThree)(),\n      camera = _useThree.camera,\n      domElement = _useThree.gl.domElement;\n\n  var controlsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n  (0,react_three_fiber__WEBPACK_IMPORTED_MODULE_3__.useFrame)(function () {\n    return controlsRef.current.update();\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"orbitControls\", {\n    ref: controlsRef,\n    args: [camera, domElement],\n    autoRotate: true,\n    autoRotateSpeed: -0.2\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 5\n  }, this);\n}\n\n_s(CameraControls, \"OfZJ3lY+8UowfJQr79ITTGaLLH4=\", false, function () {\n  return [react_three_fiber__WEBPACK_IMPORTED_MODULE_3__.useThree, react_three_fiber__WEBPACK_IMPORTED_MODULE_3__.useFrame];\n});\n\n_c = CameraControls;\n\nfunction Points() {\n  _s2();\n\n  var imgTex = (0,react_three_fiber__WEBPACK_IMPORTED_MODULE_3__.useLoader)(three__WEBPACK_IMPORTED_MODULE_4__.TextureLoader, circleImg);\n  var bufferRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n  var t = 0;\n  var f = 0.002;\n  var a = 3;\n  var graph = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (x, z) {\n    return Math.sin(f * (Math.pow(x, 2) + Math.pow(z, 2) + t)) * a;\n  }, [t, f, a]);\n  var count = 100;\n  var sep = 3;\n  var positions = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {\n    var positions = [];\n\n    for (var xi = 0; xi < count; xi++) {\n      for (var zi = 0; zi < count; zi++) {\n        var x = sep * (xi - count / 2);\n        var z = sep * (zi - count / 2);\n        var y = graph(x, z);\n        positions.push(x, y, z);\n      }\n    }\n\n    return new Float32Array(positions);\n  }, [count, sep, graph]);\n  (0,react_three_fiber__WEBPACK_IMPORTED_MODULE_3__.useFrame)(function () {\n    t += 15;\n    var positions = bufferRef.current.array;\n    var i = 0;\n\n    for (var xi = 0; xi < count; xi++) {\n      for (var zi = 0; zi < count; zi++) {\n        var x = sep * (xi - count / 2);\n        var z = sep * (zi - count / 2);\n        positions[i + 1] = graph(x, z);\n        i += 3;\n      }\n    }\n\n    bufferRef.current.needsUpdate = true;\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"points\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"bufferGeometry\", {\n      attach: \"geometry\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"bufferAttribute\", {\n        ref: bufferRef,\n        attachObject: ['attributes', 'position'],\n        array: positions,\n        count: positions.length / 3,\n        itemSize: 3\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"pointsMaterial\", {\n      attach: \"material\",\n      map: imgTex,\n      color: 0x00AAFF,\n      size: 0.5,\n      sizeAttenuation: true,\n      transparent: false,\n      alphaTest: 0.5,\n      opacity: 1.0\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 80,\n    columnNumber: 5\n  }, this);\n}\n\n_s2(Points, \"ZFKK6XaFpefMvNhgNO6lHhsFqmc=\", false, function () {\n  return [react_three_fiber__WEBPACK_IMPORTED_MODULE_3__.useLoader, react_three_fiber__WEBPACK_IMPORTED_MODULE_3__.useFrame];\n});\n\n_c2 = Points;\n\nfunction AnimationCanvas() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"section\", {\n      \"class\": \"text-gray-600 body-font\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n        \"class\": \"container px-5 py-24 mx-auto\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n          \"class\": \"lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h1\", {\n            \"class\": \"flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900\",\n            children: \"Slow-carb next level shoindxgoitch ethical authentic, scenester sriracha forage.\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 113,\n            columnNumber: 7\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"button\", {\n            \"class\": \"flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0\",\n            children: \"Button\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 114,\n            columnNumber: 7\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 112,\n          columnNumber: 5\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 111,\n        columnNumber: 3\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 1\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h1\", {\n      style: {\n        paddingTop: \"100px\",\n        fontSize: \"60px\",\n        marginTop: \"0\",\n        textAlign: \"center\",\n        color: 'white'\n      },\n      children: \"Problems We Solve\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 1\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n      style: {\n        paddingTop: \"0px\",\n        fontSize: \"22px\",\n        marginTop: \"0\",\n        textAlign: \"center\",\n        color: 'white'\n      },\n      children: \"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 130,\n      columnNumber: 1\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_three_fiber__WEBPACK_IMPORTED_MODULE_3__.Canvas, {\n      colorManagement: false,\n      camera: {\n        position: [100, 10, 0],\n        fov: 75\n      },\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Points, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 149,\n        columnNumber: 8\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(CameraControls, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 150,\n        columnNumber: 7\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 142,\n      columnNumber: 5\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 107,\n    columnNumber: 1\n  }, this);\n}\n\n_c3 = AnimationCanvas;\n\nfunction App() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    className: \"anim\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(AnimationCanvas, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 164,\n      columnNumber: 10\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 160,\n    columnNumber: 5\n  }, this);\n}\n\n_c4 = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"CameraControls\");\n$RefreshReg$(_c2, \"Points\");\n$RefreshReg$(_c3, \"AnimationCanvas\");\n$RefreshReg$(_c4, \"App\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLEdBQUQsRUFBTSxFQUFOLEVBQVUsQ0FBVixDQUFaO0FBQTBCQyxRQUFBQSxHQUFHLEVBQUU7QUFBL0IsT0FGVjtBQUFBLDhCQU9HLDhEQUFDLE1BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBILGVBUUUsOERBQUMsY0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbkNKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURFO0FBaUREOztNQWxEUVA7O0FBcURULFNBQVNRLEdBQVQsR0FBZTtBQUNiLHNCQUNFO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQSwyQkFJSyw4REFBQyxlQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKTDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFRRDs7TUFUUUE7QUFXVCwrREFBZUEsR0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9ib28uanM/OWRlNCJdLCJzb3VyY2VzQ29udGVudCI6WyIgXG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5pbXBvcnQge09yYml0Q29udHJvbHN9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9jb250cm9scy9PcmJpdENvbnRyb2xzJztcbmltcG9ydCB7IENhbnZhcywgZXh0ZW5kLCB1c2VGcmFtZSwgdXNlTG9hZGVyLCB1c2VUaHJlZSB9IGZyb20gJ3JlYWN0LXRocmVlLWZpYmVyJztcbiBpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlTWVtbywgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuIFxuIFxuIGNvbnN0IGNpcmNsZUltZyA9ICcvaW1hZ2VzL2ZlYXR1cmVzLWJnLnBuZydcblxuXG5leHRlbmQoe09yYml0Q29udHJvbHN9KVxuXG5mdW5jdGlvbiBDYW1lcmFDb250cm9scygpe1xuICBjb25zdCB7XG4gICAgY2FtZXJhLFxuICAgIGdsOiB7ZG9tRWxlbWVudH1cbiAgfSA9IHVzZVRocmVlKCk7XG5cbiAgY29uc3QgY29udHJvbHNSZWYgPSB1c2VSZWYoKTtcbiAgdXNlRnJhbWUoKCkgPT4gY29udHJvbHNSZWYuY3VycmVudC51cGRhdGUoKSlcblxuICByZXR1cm4gKFxuICAgIDxvcmJpdENvbnRyb2xzXG4gICAgICByZWY9e2NvbnRyb2xzUmVmfVxuICAgICAgYXJncz17W2NhbWVyYSwgZG9tRWxlbWVudF19XG4gICAgICBhdXRvUm90YXRlXG4gICAgICBhdXRvUm90YXRlU3BlZWQ9ey0wLjJ9XG4gICAgLz5cbiAgKTtcbn1cblxuZnVuY3Rpb24gUG9pbnRzKCkge1xuICBjb25zdCBpbWdUZXggPSB1c2VMb2FkZXIoVEhSRUUuVGV4dHVyZUxvYWRlciwgY2lyY2xlSW1nKTtcbiAgY29uc3QgYnVmZmVyUmVmID0gdXNlUmVmKCk7XG5cbiAgbGV0IHQgPSAwO1xuICBsZXQgZiA9IDAuMDAyO1xuICBsZXQgYSA9IDM7XG4gIGNvbnN0IGdyYXBoID0gdXNlQ2FsbGJhY2soKHgsIHopID0+IHtcbiAgICByZXR1cm4gTWF0aC5zaW4oZiAqICh4ICoqIDIgKyB6ICoqIDIgKyB0KSkgKiBhO1xuICB9LCBbdCwgZiwgYV0pXG5cbiAgY29uc3QgY291bnQgPSAxMDBcbiAgY29uc3Qgc2VwID0gM1xuICBsZXQgcG9zaXRpb25zID0gdXNlTWVtbygoKSA9PiB7XG4gICAgbGV0IHBvc2l0aW9ucyA9IFtdXG5cbiAgICBmb3IgKGxldCB4aSA9IDA7IHhpIDwgY291bnQ7IHhpKyspIHtcbiAgICAgIGZvciAobGV0IHppID0gMDsgemkgPCBjb3VudDsgemkrKykge1xuICAgICAgICBsZXQgeCA9IHNlcCAqICh4aSAtIGNvdW50IC8gMik7XG4gICAgICAgIGxldCB6ID0gc2VwICogKHppIC0gY291bnQgLyAyKTtcbiAgICAgICAgbGV0IHkgPSBncmFwaCh4LCB6KTtcbiAgICAgICAgcG9zaXRpb25zLnB1c2goeCwgeSwgeik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBGbG9hdDMyQXJyYXkocG9zaXRpb25zKTtcbiAgfSwgW2NvdW50LCBzZXAsIGdyYXBoXSlcblxuICB1c2VGcmFtZSgoKSA9PiB7XG4gICAgdCArPSAxNVxuICAgIFxuICAgIGNvbnN0IHBvc2l0aW9ucyA9IGJ1ZmZlclJlZi5jdXJyZW50LmFycmF5O1xuXG4gICAgbGV0IGkgPSAwO1xuICAgIGZvciAobGV0IHhpID0gMDsgeGkgPCBjb3VudDsgeGkrKykge1xuICAgICAgZm9yIChsZXQgemkgPSAwOyB6aSA8IGNvdW50OyB6aSsrKSB7XG4gICAgICAgIGxldCB4ID0gc2VwICogKHhpIC0gY291bnQgLyAyKTtcbiAgICAgICAgbGV0IHogPSBzZXAgKiAoemkgLSBjb3VudCAvIDIpO1xuXG4gICAgICAgIHBvc2l0aW9uc1tpICsgMV0gPSBncmFwaCh4LCB6KTtcbiAgICAgICAgaSArPSAzO1xuICAgICAgfVxuICAgIH1cblxuICAgIGJ1ZmZlclJlZi5jdXJyZW50Lm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgfSlcblxuICByZXR1cm4gKFxuICAgIDxwb2ludHM+XG4gICAgICA8YnVmZmVyR2VvbWV0cnkgYXR0YWNoPVwiZ2VvbWV0cnlcIj5cbiAgICAgICAgPGJ1ZmZlckF0dHJpYnV0ZVxuICAgICAgICAgIHJlZj17YnVmZmVyUmVmfVxuICAgICAgICAgIGF0dGFjaE9iamVjdD17WydhdHRyaWJ1dGVzJywgJ3Bvc2l0aW9uJ119XG4gICAgICAgICAgYXJyYXk9e3Bvc2l0aW9uc31cbiAgICAgICAgICBjb3VudD17cG9zaXRpb25zLmxlbmd0aCAvIDN9XG4gICAgICAgICAgaXRlbVNpemU9ezN9XG4gICAgICAgIC8+XG4gICAgICA8L2J1ZmZlckdlb21ldHJ5PlxuXG4gICAgICA8cG9pbnRzTWF0ZXJpYWxcbiAgICAgICAgYXR0YWNoPVwibWF0ZXJpYWxcIlxuICAgICAgICBtYXA9e2ltZ1RleH1cbiAgICAgICAgY29sb3I9ezB4MDBBQUZGfVxuICAgICAgICBzaXplPXswLjV9XG4gICAgICAgIHNpemVBdHRlbnVhdGlvblxuICAgICAgICB0cmFuc3BhcmVudD17ZmFsc2V9XG4gICAgICAgIGFscGhhVGVzdD17MC41fVxuICAgICAgICBvcGFjaXR5PXsxLjB9XG4gICAgICAvPlxuICAgIDwvcG9pbnRzPlxuICApO1xufVxuXG5mdW5jdGlvbiBBbmltYXRpb25DYW52YXMoKSB7XG4gIHJldHVybiAoXG48ZGl2PlxuIFxuXG48c2VjdGlvbiBjbGFzcz1cInRleHQtZ3JheS02MDAgYm9keS1mb250XCI+XG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXIgcHgtNSBweS0yNCBteC1hdXRvXCI+XG4gICAgPGRpdiBjbGFzcz1cImxnOnctMi8zIGZsZXggZmxleC1jb2wgc206ZmxleC1yb3cgc206aXRlbXMtY2VudGVyIGl0ZW1zLXN0YXJ0IG14LWF1dG9cIj5cbiAgICAgIDxoMSBjbGFzcz1cImZsZXgtZ3JvdyBzbTpwci0xNiB0ZXh0LTJ4bCBmb250LW1lZGl1bSB0aXRsZS1mb250IHRleHQtZ3JheS05MDBcIj5TbG93LWNhcmIgbmV4dCBsZXZlbCBzaG9pbmR4Z29pdGNoIGV0aGljYWwgYXV0aGVudGljLCBzY2VuZXN0ZXIgc3JpcmFjaGEgZm9yYWdlLjwvaDE+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiZmxleC1zaHJpbmstMCB0ZXh0LXdoaXRlIGJnLWluZGlnby01MDAgYm9yZGVyLTAgcHktMiBweC04IGZvY3VzOm91dGxpbmUtbm9uZSBob3ZlcjpiZy1pbmRpZ28tNjAwIHJvdW5kZWQgdGV4dC1sZyBtdC0xMCBzbTptdC0wXCI+QnV0dG9uPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9zZWN0aW9uPlxuXG48aDEgXG4gIHN0eWxlPXt7XG4gICAgcGFkZGluZ1RvcDogXCIxMDBweFwiLCBcbiAgICBmb250U2l6ZTogXCI2MHB4XCIsIFxuICAgIG1hcmdpblRvcDogXCIwXCIsIFxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIiwgXG4gICAgY29sb3I6ICd3aGl0ZSdcbiAgICB9fVxuICA+IFxuUHJvYmxlbXMgV2UgU29sdmUgXG48L2gxPlxuPHAgXG4gIHN0eWxlPXt7XG4gICAgcGFkZGluZ1RvcDogXCIwcHhcIiwgXG4gICAgZm9udFNpemU6IFwiMjJweFwiLCBcbiAgICBtYXJnaW5Ub3A6IFwiMFwiLCBcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIFxuICAgIGNvbG9yOiAnd2hpdGUnXG4gICAgfX1cbiAgPiBcbkxvcmVtIElwc3VtIGlzIHNpbXBseSBkdW1teSB0ZXh0IG9mIHRoZSBwcmludGluZyBhbmQgdHlwZXNldHRpbmcgaW5kdXN0cnkuIExvcmVtIElwc3VtIGhhcyBiZWVuIHRoZSBpbmR1c3RyeSdzIHN0YW5kYXJkIGR1bW15IHRleHQgZXZlciBzaW5jZSB0aGUgMTUwMHMsIHdoZW4gYW4gdW5rbm93biBwcmludGVyIHRvb2sgYSBnYWxsZXkgb2YgdHlwZSBhbmQgc2NyYW1ibGVkIGl0IHRvIG1ha2UgYSB0eXBlIHNwZWNpbWVuIGJvb2suIEl0IGhhcyBzdXJ2aXZlZCBub3Qgb25seSBmaXZlIGNlbnR1cmllcywgYnV0IGFsc28gdGhlIGxlYXAgaW50byBlbGVjdHJvbmljIHR5cGVzZXR0aW5nLCByZW1haW5pbmcgZXNzZW50aWFsbHkgdW5jaGFuZ2VkLiBJdCB3YXMgcG9wdWxhcmlzZWQgaW4gdGhlIDE5NjBzIHdpdGggdGhlIHJlbGVhc2Ugb2YgTGV0cmFzZXQgc2hlZXRzIGNvbnRhaW5pbmcgTG9yZW0gSXBzdW0gcGFzc2FnZXMsIGFuZCBtb3JlIHJlY2VudGx5IHdpdGggZGVza3RvcCBwdWJsaXNoaW5nIHNvZnR3YXJlIGxpa2UgQWxkdXMgUGFnZU1ha2VyIGluY2x1ZGluZyB2ZXJzaW9ucyBvZiBMb3JlbSBJcHN1bS5cblxuPC9wPlxuICAgIDxDYW52YXNcbiAgICAgIGNvbG9yTWFuYWdlbWVudD17ZmFsc2V9XG4gICAgICBjYW1lcmE9e3sgcG9zaXRpb246IFsxMDAsIDEwLCAwXSwgZm92OiA3NSB9fVxuICAgID5cbiAgICAgey8qICA8U3VzcGVuc2UgZmFsbGJhY2s9e251bGx9PlxuICAgICAgIFxuICAgICAgPC9TdXNwZW5zZT4vKi99XG4gICAgICAgPFBvaW50cyAvPlxuICAgICAgPENhbWVyYUNvbnRyb2xzLz5cbiAgICA8L0NhbnZhcz5cblxuICAgIDwvZGl2PlxuICApO1xufVxuXG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFuaW1cIiA+XG4gICB7LyogICAgICA8U3VzcGVuc2UgZmFsbGJhY2s9ezxkaXY+TG9hZGluZy4uLjwvZGl2Pn0+IFxuICAgICBcbiAgICAgIDwvU3VzcGVuc2U+LyovfVxuICAgICAgICAgPEFuaW1hdGlvbkNhbnZhcyAvPiBcbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl0sIm5hbWVzIjpbIlRIUkVFIiwiT3JiaXRDb250cm9scyIsIkNhbnZhcyIsImV4dGVuZCIsInVzZUZyYW1lIiwidXNlTG9hZGVyIiwidXNlVGhyZWUiLCJ1c2VDYWxsYmFjayIsInVzZU1lbW8iLCJ1c2VSZWYiLCJjaXJjbGVJbWciLCJDYW1lcmFDb250cm9scyIsImNhbWVyYSIsImRvbUVsZW1lbnQiLCJnbCIsImNvbnRyb2xzUmVmIiwiY3VycmVudCIsInVwZGF0ZSIsIlBvaW50cyIsImltZ1RleCIsIlRleHR1cmVMb2FkZXIiLCJidWZmZXJSZWYiLCJ0IiwiZiIsImEiLCJncmFwaCIsIngiLCJ6IiwiTWF0aCIsInNpbiIsImNvdW50Iiwic2VwIiwicG9zaXRpb25zIiwieGkiLCJ6aSIsInkiLCJwdXNoIiwiRmxvYXQzMkFycmF5IiwiYXJyYXkiLCJpIiwibmVlZHNVcGRhdGUiLCJsZW5ndGgiLCJBbmltYXRpb25DYW52YXMiLCJwYWRkaW5nVG9wIiwiZm9udFNpemUiLCJtYXJnaW5Ub3AiLCJ0ZXh0QWxpZ24iLCJjb2xvciIsInBvc2l0aW9uIiwiZm92IiwiQXBwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/boo.js\n");

/***/ })

});