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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n/* harmony import */ var react_three_fiber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-three-fiber */ \"./node_modules/react-three-fiber/dist/react-three-fiber.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/wrivera/Desktop/tailwindy/pages/boo.js\";\n\n\n\n\n\nfunction Home() {\n  var _s = $RefreshSig$(),\n      _s2 = $RefreshSig$();\n\n  var circleImg = '../../public/images/circle.png';\n  (0,react_three_fiber__WEBPACK_IMPORTED_MODULE_3__.extend)({\n    OrbitControls: three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_0__.OrbitControls\n  });\n\n  function CameraControls() {\n    _s();\n\n    var _useThree = (0,react_three_fiber__WEBPACK_IMPORTED_MODULE_3__.useThree)(),\n        camera = _useThree.camera,\n        domElement = _useThree.gl.domElement;\n\n    var controlsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    (0,react_three_fiber__WEBPACK_IMPORTED_MODULE_3__.useFrame)(function () {\n      return controlsRef.current.update();\n    });\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"orbitControls\", {\n      ref: controlsRef,\n      args: [camera, domElement],\n      autoRotate: true,\n      autoRotateSpeed: -0.2\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 5\n    }, this);\n  }\n\n  _s(CameraControls, \"OfZJ3lY+8UowfJQr79ITTGaLLH4=\", false, function () {\n    return [react_three_fiber__WEBPACK_IMPORTED_MODULE_3__.useThree, react_three_fiber__WEBPACK_IMPORTED_MODULE_3__.useFrame];\n  });\n\n  function Points() {\n    _s2();\n\n    var imgTex = (0,react_three_fiber__WEBPACK_IMPORTED_MODULE_3__.useLoader)(three__WEBPACK_IMPORTED_MODULE_4__.TextureLoader, circleImg);\n    var bufferRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var t = 0;\n    var f = 0.002;\n    var a = 3;\n    var graph = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (x, z) {\n      return Math.sin(f * (Math.pow(x, 2) + Math.pow(z, 2) + t)) * a;\n    }, [t, f, a]);\n    var count = 100;\n    var sep = 3;\n    var positions = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {\n      var positions = [];\n\n      for (var xi = 0; xi < count; xi++) {\n        for (var zi = 0; zi < count; zi++) {\n          var x = sep * (xi - count / 2);\n          var z = sep * (zi - count / 2);\n          var y = graph(x, z);\n          positions.push(x, y, z);\n        }\n      }\n\n      return new Float32Array(positions);\n    }, [count, sep, graph]);\n    (0,react_three_fiber__WEBPACK_IMPORTED_MODULE_3__.useFrame)(function () {\n      t += 15;\n      var positions = bufferRef.current.array;\n      var i = 0;\n\n      for (var xi = 0; xi < count; xi++) {\n        for (var zi = 0; zi < count; zi++) {\n          var x = sep * (xi - count / 2);\n          var z = sep * (zi - count / 2);\n          positions[i + 1] = graph(x, z);\n          i += 3;\n        }\n      }\n\n      bufferRef.current.needsUpdate = true;\n    });\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"points\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"bufferGeometry\", {\n        attach: \"geometry\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"bufferAttribute\", {\n          ref: bufferRef,\n          attachObject: ['attributes', 'position'],\n          array: positions,\n          count: positions.length / 3,\n          itemSize: 3\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 9\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 7\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"pointsMaterial\", {\n        attach: \"material\",\n        map: imgTex,\n        color: 0x00AAFF,\n        size: 0.5,\n        sizeAttenuation: true,\n        transparent: false,\n        alphaTest: 0.5,\n        opacity: 1.0\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 91,\n        columnNumber: 7\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 5\n    }, this);\n  }\n\n  _s2(Points, \"ZFKK6XaFpefMvNhgNO6lHhsFqmc=\", false, function () {\n    return [react_three_fiber__WEBPACK_IMPORTED_MODULE_3__.useLoader, react_three_fiber__WEBPACK_IMPORTED_MODULE_3__.useFrame];\n  });\n\n  function AnimationCanvas() {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"section\", {\n        className: \"text-gray-600 body-font\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n          className: \"container px-5 py-24 mx-auto\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n            className: \"lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h1\", {\n              className: \"flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900\",\n              children: \"Slow-carb next level shoindxgoitch ethical authentic, scenester sriracha forage.\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 113,\n              columnNumber: 7\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"button\", {\n              className: \"flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0\",\n              children: \"Button\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 114,\n              columnNumber: 7\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 112,\n            columnNumber: 5\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 111,\n          columnNumber: 3\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 110,\n        columnNumber: 1\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h1\", {\n        style: {\n          paddingTop: \"100px\",\n          fontSize: \"60px\",\n          marginTop: \"0\",\n          textAlign: \"center\",\n          color: 'white'\n        },\n        children: \"Problems We Solve\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 119,\n        columnNumber: 1\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n        style: {\n          paddingTop: \"0px\",\n          fontSize: \"22px\",\n          marginTop: \"0\",\n          textAlign: \"center\",\n          color: 'white'\n        },\n        children: \"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 130,\n        columnNumber: 1\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_three_fiber__WEBPACK_IMPORTED_MODULE_3__.Canvas, {\n        colorManagement: false,\n        camera: {\n          position: [100, 10, 0],\n          fov: 75\n        },\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Points, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 149,\n          columnNumber: 8\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(CameraControls, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 150,\n          columnNumber: 7\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 142,\n        columnNumber: 5\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 1\n    }, this);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    className: \"anim\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(AnimationCanvas, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 164,\n      columnNumber: 10\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 160,\n    columnNumber: 5\n  }, this);\n}\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ib28uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNDOztBQUVlLFNBQVNVLElBQVQsR0FBZ0I7QUFBQTtBQUFBOztBQUMvQixNQUFNQyxTQUFTLEdBQUcsZ0NBQWxCO0FBR0RSLEVBQUFBLHlEQUFNLENBQUM7QUFBQ0YsSUFBQUEsYUFBYSxFQUFiQSxvRkFBYUE7QUFBZCxHQUFELENBQU47O0FBRUEsV0FBU1csY0FBVCxHQUF5QjtBQUFBOztBQUN2QixvQkFHSU4sMkRBQVEsRUFIWjtBQUFBLFFBQ0VPLE1BREYsYUFDRUEsTUFERjtBQUFBLFFBRU9DLFVBRlAsYUFFRUMsRUFGRixDQUVPRCxVQUZQOztBQUtBLFFBQU1FLFdBQVcsR0FBR1AsNkNBQU0sRUFBMUI7QUFDQUwsSUFBQUEsMkRBQVEsQ0FBQztBQUFBLGFBQU1ZLFdBQVcsQ0FBQ0MsT0FBWixDQUFvQkMsTUFBcEIsRUFBTjtBQUFBLEtBQUQsQ0FBUjtBQUVBLHdCQUNFO0FBQ0UsU0FBRyxFQUFFRixXQURQO0FBRUUsVUFBSSxFQUFFLENBQUNILE1BQUQsRUFBU0MsVUFBVCxDQUZSO0FBR0UsZ0JBQVUsTUFIWjtBQUlFLHFCQUFlLEVBQUUsQ0FBQztBQUpwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUFRRDs7QUF2QitCLEtBTXZCRixjQU51QjtBQUFBLFlBVTFCTix1REFWMEIsRUFhOUJGLHVEQWI4QjtBQUFBOztBQXlCaEMsV0FBU2UsTUFBVCxHQUFrQjtBQUFBOztBQUNoQixRQUFNQyxNQUFNLEdBQUdmLDREQUFTLENBQUNMLGdEQUFELEVBQXNCVyxTQUF0QixDQUF4QjtBQUNBLFFBQU1XLFNBQVMsR0FBR2IsNkNBQU0sRUFBeEI7QUFFQSxRQUFJYyxDQUFDLEdBQUcsQ0FBUjtBQUNBLFFBQUlDLENBQUMsR0FBRyxLQUFSO0FBQ0EsUUFBSUMsQ0FBQyxHQUFHLENBQVI7QUFDQSxRQUFNQyxLQUFLLEdBQUduQixrREFBVyxDQUFDLFVBQUNvQixDQUFELEVBQUlDLENBQUosRUFBVTtBQUNsQyxhQUFPQyxJQUFJLENBQUNDLEdBQUwsQ0FBU04sQ0FBQyxJQUFJLFNBQUFHLENBQUMsRUFBSSxDQUFKLENBQUQsWUFBU0MsQ0FBVCxFQUFjLENBQWQsSUFBa0JMLENBQXRCLENBQVYsSUFBc0NFLENBQTdDO0FBQ0QsS0FGd0IsRUFFdEIsQ0FBQ0YsQ0FBRCxFQUFJQyxDQUFKLEVBQU9DLENBQVAsQ0FGc0IsQ0FBekI7QUFJQSxRQUFNTSxLQUFLLEdBQUcsR0FBZDtBQUNBLFFBQU1DLEdBQUcsR0FBRyxDQUFaO0FBQ0EsUUFBSUMsU0FBUyxHQUFHekIsOENBQU8sQ0FBQyxZQUFNO0FBQzVCLFVBQUl5QixTQUFTLEdBQUcsRUFBaEI7O0FBRUEsV0FBSyxJQUFJQyxFQUFFLEdBQUcsQ0FBZCxFQUFpQkEsRUFBRSxHQUFHSCxLQUF0QixFQUE2QkcsRUFBRSxFQUEvQixFQUFtQztBQUNqQyxhQUFLLElBQUlDLEVBQUUsR0FBRyxDQUFkLEVBQWlCQSxFQUFFLEdBQUdKLEtBQXRCLEVBQTZCSSxFQUFFLEVBQS9CLEVBQW1DO0FBQ2pDLGNBQUlSLENBQUMsR0FBR0ssR0FBRyxJQUFJRSxFQUFFLEdBQUdILEtBQUssR0FBRyxDQUFqQixDQUFYO0FBQ0EsY0FBSUgsQ0FBQyxHQUFHSSxHQUFHLElBQUlHLEVBQUUsR0FBR0osS0FBSyxHQUFHLENBQWpCLENBQVg7QUFDQSxjQUFJSyxDQUFDLEdBQUdWLEtBQUssQ0FBQ0MsQ0FBRCxFQUFJQyxDQUFKLENBQWI7QUFDQUssVUFBQUEsU0FBUyxDQUFDSSxJQUFWLENBQWVWLENBQWYsRUFBa0JTLENBQWxCLEVBQXFCUixDQUFyQjtBQUNEO0FBQ0Y7O0FBRUQsYUFBTyxJQUFJVSxZQUFKLENBQWlCTCxTQUFqQixDQUFQO0FBQ0QsS0Fic0IsRUFhcEIsQ0FBQ0YsS0FBRCxFQUFRQyxHQUFSLEVBQWFOLEtBQWIsQ0Fib0IsQ0FBdkI7QUFlQXRCLElBQUFBLDJEQUFRLENBQUMsWUFBTTtBQUNibUIsTUFBQUEsQ0FBQyxJQUFJLEVBQUw7QUFFQSxVQUFNVSxTQUFTLEdBQUdYLFNBQVMsQ0FBQ0wsT0FBVixDQUFrQnNCLEtBQXBDO0FBRUEsVUFBSUMsQ0FBQyxHQUFHLENBQVI7O0FBQ0EsV0FBSyxJQUFJTixFQUFFLEdBQUcsQ0FBZCxFQUFpQkEsRUFBRSxHQUFHSCxLQUF0QixFQUE2QkcsRUFBRSxFQUEvQixFQUFtQztBQUNqQyxhQUFLLElBQUlDLEVBQUUsR0FBRyxDQUFkLEVBQWlCQSxFQUFFLEdBQUdKLEtBQXRCLEVBQTZCSSxFQUFFLEVBQS9CLEVBQW1DO0FBQ2pDLGNBQUlSLENBQUMsR0FBR0ssR0FBRyxJQUFJRSxFQUFFLEdBQUdILEtBQUssR0FBRyxDQUFqQixDQUFYO0FBQ0EsY0FBSUgsQ0FBQyxHQUFHSSxHQUFHLElBQUlHLEVBQUUsR0FBR0osS0FBSyxHQUFHLENBQWpCLENBQVg7QUFFQUUsVUFBQUEsU0FBUyxDQUFDTyxDQUFDLEdBQUcsQ0FBTCxDQUFULEdBQW1CZCxLQUFLLENBQUNDLENBQUQsRUFBSUMsQ0FBSixDQUF4QjtBQUNBWSxVQUFBQSxDQUFDLElBQUksQ0FBTDtBQUNEO0FBQ0Y7O0FBRURsQixNQUFBQSxTQUFTLENBQUNMLE9BQVYsQ0FBa0J3QixXQUFsQixHQUFnQyxJQUFoQztBQUNELEtBakJPLENBQVI7QUFtQkEsd0JBQ0U7QUFBQSw4QkFDRTtBQUFnQixjQUFNLEVBQUMsVUFBdkI7QUFBQSwrQkFDRTtBQUNFLGFBQUcsRUFBRW5CLFNBRFA7QUFFRSxzQkFBWSxFQUFFLENBQUMsWUFBRCxFQUFlLFVBQWYsQ0FGaEI7QUFHRSxlQUFLLEVBQUVXLFNBSFQ7QUFJRSxlQUFLLEVBQUVBLFNBQVMsQ0FBQ1MsTUFBVixHQUFtQixDQUo1QjtBQUtFLGtCQUFRLEVBQUU7QUFMWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBV0U7QUFDRSxjQUFNLEVBQUMsVUFEVDtBQUVFLFdBQUcsRUFBRXRCLE1BRlA7QUFHRSxhQUFLLEVBQUUsUUFIVDtBQUlFLFlBQUksRUFBRSxHQUpSO0FBS0UsdUJBQWUsTUFMakI7QUFNRSxtQkFBVyxFQUFFLEtBTmY7QUFPRSxpQkFBUyxFQUFFLEdBUGI7QUFRRSxlQUFPLEVBQUU7QUFSWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUF3QkQ7O0FBaEcrQixNQXlCdkJELE1BekJ1QjtBQUFBLFlBMEJmZCx3REExQmUsRUFxRDlCRCx1REFyRDhCO0FBQUE7O0FBa0doQyxXQUFTdUMsZUFBVCxHQUEyQjtBQUN6Qix3QkFDRjtBQUFBLDhCQUdBO0FBQVMsaUJBQVMsRUFBQyx5QkFBbkI7QUFBQSwrQkFDRTtBQUFLLG1CQUFTLEVBQUMsOEJBQWY7QUFBQSxpQ0FDRTtBQUFLLHFCQUFTLEVBQUMsd0VBQWY7QUFBQSxvQ0FDRTtBQUFJLHVCQUFTLEVBQUMsa0VBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFFRTtBQUFRLHVCQUFTLEVBQUMsZ0lBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEEsZUFZQTtBQUNFLGFBQUssRUFBRTtBQUNMQyxVQUFBQSxVQUFVLEVBQUUsT0FEUDtBQUVMQyxVQUFBQSxRQUFRLEVBQUUsTUFGTDtBQUdMQyxVQUFBQSxTQUFTLEVBQUUsR0FITjtBQUlMQyxVQUFBQSxTQUFTLEVBQUUsUUFKTjtBQUtMQyxVQUFBQSxLQUFLLEVBQUU7QUFMRixTQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWkEsZUF1QkE7QUFDRSxhQUFLLEVBQUU7QUFDTEosVUFBQUEsVUFBVSxFQUFFLEtBRFA7QUFFTEMsVUFBQUEsUUFBUSxFQUFFLE1BRkw7QUFHTEMsVUFBQUEsU0FBUyxFQUFFLEdBSE47QUFJTEMsVUFBQUEsU0FBUyxFQUFFLFFBSk47QUFLTEMsVUFBQUEsS0FBSyxFQUFFO0FBTEYsU0FEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXZCQSxlQW1DSSw4REFBQyxxREFBRDtBQUNFLHVCQUFlLEVBQUUsS0FEbkI7QUFFRSxjQUFNLEVBQUU7QUFBRUMsVUFBQUEsUUFBUSxFQUFFLENBQUMsR0FBRCxFQUFNLEVBQU4sRUFBVSxDQUFWLENBQVo7QUFBMEJDLFVBQUFBLEdBQUcsRUFBRTtBQUEvQixTQUZWO0FBQUEsZ0NBT0csOERBQUMsTUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVBILGVBUUUsOERBQUMsY0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQW5DSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERTtBQWlERDs7QUFJQyxzQkFDRTtBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQUEsMkJBSUssOERBQUMsZUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkw7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBUUQ7S0FoS3dCeEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYm9vLmpzPzlkZTQiXSwic291cmNlc0NvbnRlbnQiOlsiIFxuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuaW1wb3J0IHtPcmJpdENvbnRyb2xzfSBmcm9tICd0aHJlZS9leGFtcGxlcy9qc20vY29udHJvbHMvT3JiaXRDb250cm9scyc7XG5pbXBvcnQgeyBDYW52YXMsIGV4dGVuZCwgdXNlRnJhbWUsIHVzZUxvYWRlciwgdXNlVGhyZWUgfSBmcm9tICdyZWFjdC10aHJlZS1maWJlcic7XG4gaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZU1lbW8sIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbiBcbiBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuIGNvbnN0IGNpcmNsZUltZyA9ICcuLi8uLi9wdWJsaWMvaW1hZ2VzL2NpcmNsZS5wbmcnXG5cblxuZXh0ZW5kKHtPcmJpdENvbnRyb2xzfSlcblxuZnVuY3Rpb24gQ2FtZXJhQ29udHJvbHMoKXtcbiAgY29uc3Qge1xuICAgIGNhbWVyYSxcbiAgICBnbDoge2RvbUVsZW1lbnR9XG4gIH0gPSB1c2VUaHJlZSgpO1xuXG4gIGNvbnN0IGNvbnRyb2xzUmVmID0gdXNlUmVmKCk7XG4gIHVzZUZyYW1lKCgpID0+IGNvbnRyb2xzUmVmLmN1cnJlbnQudXBkYXRlKCkpXG5cbiAgcmV0dXJuIChcbiAgICA8b3JiaXRDb250cm9sc1xuICAgICAgcmVmPXtjb250cm9sc1JlZn1cbiAgICAgIGFyZ3M9e1tjYW1lcmEsIGRvbUVsZW1lbnRdfVxuICAgICAgYXV0b1JvdGF0ZVxuICAgICAgYXV0b1JvdGF0ZVNwZWVkPXstMC4yfVxuICAgIC8+XG4gICk7XG59XG5cbmZ1bmN0aW9uIFBvaW50cygpIHtcbiAgY29uc3QgaW1nVGV4ID0gdXNlTG9hZGVyKFRIUkVFLlRleHR1cmVMb2FkZXIsIGNpcmNsZUltZyk7XG4gIGNvbnN0IGJ1ZmZlclJlZiA9IHVzZVJlZigpO1xuXG4gIGxldCB0ID0gMDtcbiAgbGV0IGYgPSAwLjAwMjtcbiAgbGV0IGEgPSAzO1xuICBjb25zdCBncmFwaCA9IHVzZUNhbGxiYWNrKCh4LCB6KSA9PiB7XG4gICAgcmV0dXJuIE1hdGguc2luKGYgKiAoeCAqKiAyICsgeiAqKiAyICsgdCkpICogYTtcbiAgfSwgW3QsIGYsIGFdKVxuXG4gIGNvbnN0IGNvdW50ID0gMTAwXG4gIGNvbnN0IHNlcCA9IDNcbiAgbGV0IHBvc2l0aW9ucyA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGxldCBwb3NpdGlvbnMgPSBbXVxuXG4gICAgZm9yIChsZXQgeGkgPSAwOyB4aSA8IGNvdW50OyB4aSsrKSB7XG4gICAgICBmb3IgKGxldCB6aSA9IDA7IHppIDwgY291bnQ7IHppKyspIHtcbiAgICAgICAgbGV0IHggPSBzZXAgKiAoeGkgLSBjb3VudCAvIDIpO1xuICAgICAgICBsZXQgeiA9IHNlcCAqICh6aSAtIGNvdW50IC8gMik7XG4gICAgICAgIGxldCB5ID0gZ3JhcGgoeCwgeik7XG4gICAgICAgIHBvc2l0aW9ucy5wdXNoKHgsIHksIHopO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBuZXcgRmxvYXQzMkFycmF5KHBvc2l0aW9ucyk7XG4gIH0sIFtjb3VudCwgc2VwLCBncmFwaF0pXG5cbiAgdXNlRnJhbWUoKCkgPT4ge1xuICAgIHQgKz0gMTVcbiAgICBcbiAgICBjb25zdCBwb3NpdGlvbnMgPSBidWZmZXJSZWYuY3VycmVudC5hcnJheTtcblxuICAgIGxldCBpID0gMDtcbiAgICBmb3IgKGxldCB4aSA9IDA7IHhpIDwgY291bnQ7IHhpKyspIHtcbiAgICAgIGZvciAobGV0IHppID0gMDsgemkgPCBjb3VudDsgemkrKykge1xuICAgICAgICBsZXQgeCA9IHNlcCAqICh4aSAtIGNvdW50IC8gMik7XG4gICAgICAgIGxldCB6ID0gc2VwICogKHppIC0gY291bnQgLyAyKTtcblxuICAgICAgICBwb3NpdGlvbnNbaSArIDFdID0gZ3JhcGgoeCwgeik7XG4gICAgICAgIGkgKz0gMztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBidWZmZXJSZWYuY3VycmVudC5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gIH0pXG5cbiAgcmV0dXJuIChcbiAgICA8cG9pbnRzPlxuICAgICAgPGJ1ZmZlckdlb21ldHJ5IGF0dGFjaD1cImdlb21ldHJ5XCI+XG4gICAgICAgIDxidWZmZXJBdHRyaWJ1dGVcbiAgICAgICAgICByZWY9e2J1ZmZlclJlZn1cbiAgICAgICAgICBhdHRhY2hPYmplY3Q9e1snYXR0cmlidXRlcycsICdwb3NpdGlvbiddfVxuICAgICAgICAgIGFycmF5PXtwb3NpdGlvbnN9XG4gICAgICAgICAgY291bnQ9e3Bvc2l0aW9ucy5sZW5ndGggLyAzfVxuICAgICAgICAgIGl0ZW1TaXplPXszfVxuICAgICAgICAvPlxuICAgICAgPC9idWZmZXJHZW9tZXRyeT5cblxuICAgICAgPHBvaW50c01hdGVyaWFsXG4gICAgICAgIGF0dGFjaD1cIm1hdGVyaWFsXCJcbiAgICAgICAgbWFwPXtpbWdUZXh9XG4gICAgICAgIGNvbG9yPXsweDAwQUFGRn1cbiAgICAgICAgc2l6ZT17MC41fVxuICAgICAgICBzaXplQXR0ZW51YXRpb25cbiAgICAgICAgdHJhbnNwYXJlbnQ9e2ZhbHNlfVxuICAgICAgICBhbHBoYVRlc3Q9ezAuNX1cbiAgICAgICAgb3BhY2l0eT17MS4wfVxuICAgICAgLz5cbiAgICA8L3BvaW50cz5cbiAgKTtcbn1cblxuZnVuY3Rpb24gQW5pbWF0aW9uQ2FudmFzKCkge1xuICByZXR1cm4gKFxuPGRpdj5cbiBcblxuPHNlY3Rpb24gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMCBib2R5LWZvbnRcIj5cbiAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcHgtNSBweS0yNCBteC1hdXRvXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJsZzp3LTIvMyBmbGV4IGZsZXgtY29sIHNtOmZsZXgtcm93IHNtOml0ZW1zLWNlbnRlciBpdGVtcy1zdGFydCBteC1hdXRvXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwiZmxleC1ncm93IHNtOnByLTE2IHRleHQtMnhsIGZvbnQtbWVkaXVtIHRpdGxlLWZvbnQgdGV4dC1ncmF5LTkwMFwiPlNsb3ctY2FyYiBuZXh0IGxldmVsIHNob2luZHhnb2l0Y2ggZXRoaWNhbCBhdXRoZW50aWMsIHNjZW5lc3RlciBzcmlyYWNoYSBmb3JhZ2UuPC9oMT5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZmxleC1zaHJpbmstMCB0ZXh0LXdoaXRlIGJnLWluZGlnby01MDAgYm9yZGVyLTAgcHktMiBweC04IGZvY3VzOm91dGxpbmUtbm9uZSBob3ZlcjpiZy1pbmRpZ28tNjAwIHJvdW5kZWQgdGV4dC1sZyBtdC0xMCBzbTptdC0wXCI+QnV0dG9uPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9zZWN0aW9uPlxuXG48aDEgXG4gIHN0eWxlPXt7XG4gICAgcGFkZGluZ1RvcDogXCIxMDBweFwiLCBcbiAgICBmb250U2l6ZTogXCI2MHB4XCIsIFxuICAgIG1hcmdpblRvcDogXCIwXCIsIFxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIiwgXG4gICAgY29sb3I6ICd3aGl0ZSdcbiAgICB9fVxuICA+IFxuUHJvYmxlbXMgV2UgU29sdmUgXG48L2gxPlxuPHAgXG4gIHN0eWxlPXt7XG4gICAgcGFkZGluZ1RvcDogXCIwcHhcIiwgXG4gICAgZm9udFNpemU6IFwiMjJweFwiLCBcbiAgICBtYXJnaW5Ub3A6IFwiMFwiLCBcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIFxuICAgIGNvbG9yOiAnd2hpdGUnXG4gICAgfX1cbiAgPiBcbkxvcmVtIElwc3VtIGlzIHNpbXBseSBkdW1teSB0ZXh0IG9mIHRoZSBwcmludGluZyBhbmQgdHlwZXNldHRpbmcgaW5kdXN0cnkuIExvcmVtIElwc3VtIGhhcyBiZWVuIHRoZSBpbmR1c3RyeSdzIHN0YW5kYXJkIGR1bW15IHRleHQgZXZlciBzaW5jZSB0aGUgMTUwMHMsIHdoZW4gYW4gdW5rbm93biBwcmludGVyIHRvb2sgYSBnYWxsZXkgb2YgdHlwZSBhbmQgc2NyYW1ibGVkIGl0IHRvIG1ha2UgYSB0eXBlIHNwZWNpbWVuIGJvb2suIEl0IGhhcyBzdXJ2aXZlZCBub3Qgb25seSBmaXZlIGNlbnR1cmllcywgYnV0IGFsc28gdGhlIGxlYXAgaW50byBlbGVjdHJvbmljIHR5cGVzZXR0aW5nLCByZW1haW5pbmcgZXNzZW50aWFsbHkgdW5jaGFuZ2VkLiBJdCB3YXMgcG9wdWxhcmlzZWQgaW4gdGhlIDE5NjBzIHdpdGggdGhlIHJlbGVhc2Ugb2YgTGV0cmFzZXQgc2hlZXRzIGNvbnRhaW5pbmcgTG9yZW0gSXBzdW0gcGFzc2FnZXMsIGFuZCBtb3JlIHJlY2VudGx5IHdpdGggZGVza3RvcCBwdWJsaXNoaW5nIHNvZnR3YXJlIGxpa2UgQWxkdXMgUGFnZU1ha2VyIGluY2x1ZGluZyB2ZXJzaW9ucyBvZiBMb3JlbSBJcHN1bS5cblxuPC9wPlxuICAgIDxDYW52YXNcbiAgICAgIGNvbG9yTWFuYWdlbWVudD17ZmFsc2V9XG4gICAgICBjYW1lcmE9e3sgcG9zaXRpb246IFsxMDAsIDEwLCAwXSwgZm92OiA3NSB9fVxuICAgID5cbiAgICAgey8qICA8U3VzcGVuc2UgZmFsbGJhY2s9e251bGx9PlxuICAgICAgIFxuICAgICAgPC9TdXNwZW5zZT4vKi99XG4gICAgICAgPFBvaW50cyAvPlxuICAgICAgPENhbWVyYUNvbnRyb2xzLz5cbiAgICA8L0NhbnZhcz5cblxuICAgIDwvZGl2PlxuICApO1xufVxuXG5cbiBcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFuaW1cIiA+XG4gICB7LyogICAgICA8U3VzcGVuc2UgZmFsbGJhY2s9ezxkaXY+TG9hZGluZy4uLjwvZGl2Pn0+IFxuICAgICBcbiAgICAgIDwvU3VzcGVuc2U+LyovfVxuICAgICAgICAgPEFuaW1hdGlvbkNhbnZhcyAvPiBcbiAgICA8L2Rpdj5cbiAgKTtcbn0iXSwibmFtZXMiOlsiVEhSRUUiLCJPcmJpdENvbnRyb2xzIiwiQ2FudmFzIiwiZXh0ZW5kIiwidXNlRnJhbWUiLCJ1c2VMb2FkZXIiLCJ1c2VUaHJlZSIsInVzZUNhbGxiYWNrIiwidXNlTWVtbyIsInVzZVJlZiIsIkhvbWUiLCJjaXJjbGVJbWciLCJDYW1lcmFDb250cm9scyIsImNhbWVyYSIsImRvbUVsZW1lbnQiLCJnbCIsImNvbnRyb2xzUmVmIiwiY3VycmVudCIsInVwZGF0ZSIsIlBvaW50cyIsImltZ1RleCIsIlRleHR1cmVMb2FkZXIiLCJidWZmZXJSZWYiLCJ0IiwiZiIsImEiLCJncmFwaCIsIngiLCJ6IiwiTWF0aCIsInNpbiIsImNvdW50Iiwic2VwIiwicG9zaXRpb25zIiwieGkiLCJ6aSIsInkiLCJwdXNoIiwiRmxvYXQzMkFycmF5IiwiYXJyYXkiLCJpIiwibmVlZHNVcGRhdGUiLCJsZW5ndGgiLCJBbmltYXRpb25DYW52YXMiLCJwYWRkaW5nVG9wIiwiZm9udFNpemUiLCJtYXJnaW5Ub3AiLCJ0ZXh0QWxpZ24iLCJjb2xvciIsInBvc2l0aW9uIiwiZm92Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/boo.js\n");

/***/ })

});