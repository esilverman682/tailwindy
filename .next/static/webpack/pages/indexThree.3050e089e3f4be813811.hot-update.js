/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/indexThree",{

/***/ "./pages/indexThree.js":
/*!*****************************!*\
  !*** ./pages/indexThree.js ***!
  \*****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\ncomponentDidMount();\n{\n  console.log('window.innerHeight', window.innerHeight);\n}\n\nfunction lottieScroll(config) {\n  window.addEventListener(\"scroll\", function () {\n    var _loop = function _loop(playerId) {\n      // Get the lottie player element and lottie reference\n      var player = document.getElementById(playerId); // Skip rest if the player element was not found\n\n      if (!player) {\n        console.log(\"Invalid player element specified for \".concat(playerId, \". Skipping...\"));\n        return \"continue\";\n      } // Get the configured container. Use player as fallback if unconfigured or invalid\n\n\n      var container = config[playerId].container !== undefined ? document.getElementById(config[playerId].container) : player; // Skip rest if the container element was not found\n\n      if (!container) {\n        console.log(\"Invalid container element specified for \".concat(playerId, \". Skipping...\"));\n        return \"continue\";\n      } // Get the bounding box for the lottie player or container\n\n\n      var _container$getBoundin = container.getBoundingClientRect(),\n          top = _container$getBoundin.top,\n          bottom = _container$getBoundin.bottom,\n          height = _container$getBoundin.height; // Calculate current view percentage\n\n\n      var current = window.innerHeight - top;\n      var max = window.innerHeight + height;\n      var currentPercent = current / max; // // Skip if out of viewport\n\n      if (currentPercent < 0 || currentPercent > 1) {\n        return \"continue\";\n      } // Find the first action that satisfies the current position conditions\n\n\n      var action = config[playerId].actions.find(function (_ref) {\n        var start = _ref.start,\n            end = _ref.end;\n        return currentPercent >= start && currentPercent <= end;\n      }); // Skip if no matching action was found!\n\n      if (!action) {\n        return \"continue\";\n      } // Get lottie instance\n\n\n      var lottie = player.getLottie();\n      lottie.loop = true; // Process action types:\n\n      if (action.type === \"seek\") {\n        // Seek: Go to a frame based on player scroll position action\n        lottie.playSegments(action.frames, true);\n        lottie.goToAndStop(Math.ceil((currentPercent - action.start) / (action.end - action.start) * lottie.totalFrames), true);\n      } else if (action.type === \"loop\") {\n        // Loop: Loop a given frames\n        if (lottie.isPaused === true) {\n          lottie.playSegments(action.frames, true);\n        }\n      } else if (action.type === \"play\") {\n        // Play: Reset segments and continue playing full animation from current position\n        if (lottie.isPaused === true) {\n          lottie.resetSegments();\n        }\n\n        lottie.play();\n      } else if (action.type === \"stop\") {\n        // Stop: Stop playback\n        lottie.goToAndStop(action.frames[0]);\n        lottie.stop();\n      } else if (action.type === \"hover\") {\n        container.addEventListener(\"mouseenter\", function () {\n          if (lottie.isPaused === true) {\n            lottie.playSegments(action.frames, true);\n          }\n        });\n        container.addEventListener(\"mouseleave\", function () {\n          if (lottie.isPaused === false) {\n            lottie.pause();\n          }\n        });\n      }\n    };\n\n    for (var playerId in config) {\n      var _ret = _loop(playerId);\n\n      if (_ret === \"continue\") continue;\n    }\n  });\n}\n\nvar animActions = {\n  // firstLottie: {\n  //   actions: [\n  //     {\n  //       start: 0,\n  //       end: 1,\n  //       type: \"loop\",\n  //       frames: [50, 300]\n  //     }\n  //   ]\n  // },\n  secondLottie: {\n    container: \"MyContainerId\",\n    actions: [{\n      start: 0,\n      end: 1,\n      type: \"seek\",\n      frames: [0, 301]\n    }]\n  },\n  thirdLottie: {\n    actions: [{\n      start: 0,\n      end: 0.3,\n      type: \"stop\",\n      frames: [0]\n    }, {\n      start: 0.3,\n      end: 1,\n      type: \"seek\",\n      frames: [0, 301]\n    }]\n  },\n  fourthLottie: {\n    actions: [{\n      start: 0,\n      end: 0.2,\n      type: \"stop\",\n      frames: [0]\n    }, {\n      start: 0.2,\n      end: 0.45,\n      type: \"seek\",\n      frames: [0, 45]\n    }, {\n      start: 0.45,\n      end: 1.0,\n      type: \"loop\",\n      frames: [45, 60]\n    }]\n  },\n  fifthLottie: {\n    actions: [{\n      start: 0,\n      end: 1.0,\n      type: \"loop\",\n      frames: [17, 60]\n    }]\n  },\n  seventhLottie: {\n    actions: [{\n      start: 0,\n      end: 1.0,\n      type: \"hover\",\n      frames: [45, 60]\n    }]\n  }\n};\nlottieScroll(animActions); // to setup on hover for segments. make sure the first frame is set as the frame you want to start the segment looping from\n\nvar MyLottie = document.getElementById(\"seventhLottie\");\nMyLottie.getLottie().goToAndStop(45, true);\ndocument.getElementById(\"firstLottie\").getLottie().playSegments([100, 300], true);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dXJjZXNDb250ZW50IjpbIiBcbmNvbXBvbmVudERpZE1vdW50KCkgOyB7XG4gIGNvbnNvbGUubG9nKCd3aW5kb3cuaW5uZXJIZWlnaHQnLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xufVxuXG5mdW5jdGlvbiBsb3R0aWVTY3JvbGwoY29uZmlnKSB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGZ1bmN0aW9uKCkge1xuICAgIGZvciAoY29uc3QgcGxheWVySWQgaW4gY29uZmlnKSB7XG4gICAgICAvLyBHZXQgdGhlIGxvdHRpZSBwbGF5ZXIgZWxlbWVudCBhbmQgbG90dGllIHJlZmVyZW5jZVxuICAgICAgY29uc3QgcGxheWVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGxheWVySWQpO1xuXG4gICAgICAvLyBTa2lwIHJlc3QgaWYgdGhlIHBsYXllciBlbGVtZW50IHdhcyBub3QgZm91bmRcbiAgICAgIGlmICghcGxheWVyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgIGBJbnZhbGlkIHBsYXllciBlbGVtZW50IHNwZWNpZmllZCBmb3IgJHtwbGF5ZXJJZH0uIFNraXBwaW5nLi4uYFxuICAgICAgICApO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLy8gR2V0IHRoZSBjb25maWd1cmVkIGNvbnRhaW5lci4gVXNlIHBsYXllciBhcyBmYWxsYmFjayBpZiB1bmNvbmZpZ3VyZWQgb3IgaW52YWxpZFxuICAgICAgY29uc3QgY29udGFpbmVyID1cbiAgICAgICAgY29uZmlnW3BsYXllcklkXS5jb250YWluZXIgIT09IHVuZGVmaW5lZFxuICAgICAgICAgID8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29uZmlnW3BsYXllcklkXS5jb250YWluZXIpXG4gICAgICAgICAgOiBwbGF5ZXI7XG5cbiAgICAgIC8vIFNraXAgcmVzdCBpZiB0aGUgY29udGFpbmVyIGVsZW1lbnQgd2FzIG5vdCBmb3VuZFxuICAgICAgaWYgKCFjb250YWluZXIpIHtcbiAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgYEludmFsaWQgY29udGFpbmVyIGVsZW1lbnQgc3BlY2lmaWVkIGZvciAke3BsYXllcklkfS4gU2tpcHBpbmcuLi5gXG4gICAgICAgICk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICAvLyBHZXQgdGhlIGJvdW5kaW5nIGJveCBmb3IgdGhlIGxvdHRpZSBwbGF5ZXIgb3IgY29udGFpbmVyXG4gICAgICBjb25zdCB7IHRvcCwgYm90dG9tLCBoZWlnaHQgfSA9IGNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgLy8gQ2FsY3VsYXRlIGN1cnJlbnQgdmlldyBwZXJjZW50YWdlXG4gICAgICBjb25zdCBjdXJyZW50ID0gd2luZG93LmlubmVySGVpZ2h0IC0gdG9wO1xuICAgICAgY29uc3QgbWF4ID0gd2luZG93LmlubmVySGVpZ2h0ICsgaGVpZ2h0O1xuICAgICAgY29uc3QgY3VycmVudFBlcmNlbnQgPSBjdXJyZW50IC8gbWF4O1xuXG4gICAgICAvLyAvLyBTa2lwIGlmIG91dCBvZiB2aWV3cG9ydFxuICAgICAgaWYgKGN1cnJlbnRQZXJjZW50IDwgMCB8fCBjdXJyZW50UGVyY2VudCA+IDEpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIC8vIEZpbmQgdGhlIGZpcnN0IGFjdGlvbiB0aGF0IHNhdGlzZmllcyB0aGUgY3VycmVudCBwb3NpdGlvbiBjb25kaXRpb25zXG4gICAgICBjb25zdCBhY3Rpb24gPSBjb25maWdbcGxheWVySWRdLmFjdGlvbnMuZmluZChcbiAgICAgICAgKHsgc3RhcnQsIGVuZCB9KSA9PiBjdXJyZW50UGVyY2VudCA+PSBzdGFydCAmJiBjdXJyZW50UGVyY2VudCA8PSBlbmRcbiAgICAgICk7XG5cbiAgICAgIC8vIFNraXAgaWYgbm8gbWF0Y2hpbmcgYWN0aW9uIHdhcyBmb3VuZCFcbiAgICAgIGlmICghYWN0aW9uKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICAvLyBHZXQgbG90dGllIGluc3RhbmNlXG4gICAgICBjb25zdCBsb3R0aWUgPSBwbGF5ZXIuZ2V0TG90dGllKCk7XG4gICAgICBsb3R0aWUubG9vcCA9IHRydWU7XG5cbiAgICAgIC8vIFByb2Nlc3MgYWN0aW9uIHR5cGVzOlxuICAgICAgaWYgKGFjdGlvbi50eXBlID09PSBcInNlZWtcIikge1xuICAgICAgICAvLyBTZWVrOiBHbyB0byBhIGZyYW1lIGJhc2VkIG9uIHBsYXllciBzY3JvbGwgcG9zaXRpb24gYWN0aW9uXG4gICAgICAgIGxvdHRpZS5wbGF5U2VnbWVudHMoYWN0aW9uLmZyYW1lcywgdHJ1ZSk7XG4gICAgICAgIGxvdHRpZS5nb1RvQW5kU3RvcChcbiAgICAgICAgICBNYXRoLmNlaWwoXG4gICAgICAgICAgICAoKGN1cnJlbnRQZXJjZW50IC0gYWN0aW9uLnN0YXJ0KSAvIChhY3Rpb24uZW5kIC0gYWN0aW9uLnN0YXJ0KSkgKlxuICAgICAgICAgICAgICBsb3R0aWUudG90YWxGcmFtZXNcbiAgICAgICAgICApLFxuICAgICAgICAgIHRydWVcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSBpZiAoYWN0aW9uLnR5cGUgPT09IFwibG9vcFwiKSB7XG4gICAgICAgIC8vIExvb3A6IExvb3AgYSBnaXZlbiBmcmFtZXNcbiAgICAgICAgaWYgKGxvdHRpZS5pc1BhdXNlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGxvdHRpZS5wbGF5U2VnbWVudHMoYWN0aW9uLmZyYW1lcywgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoYWN0aW9uLnR5cGUgPT09IFwicGxheVwiKSB7XG4gICAgICAgIC8vIFBsYXk6IFJlc2V0IHNlZ21lbnRzIGFuZCBjb250aW51ZSBwbGF5aW5nIGZ1bGwgYW5pbWF0aW9uIGZyb20gY3VycmVudCBwb3NpdGlvblxuICAgICAgICBpZiAobG90dGllLmlzUGF1c2VkID09PSB0cnVlKSB7XG4gICAgICAgICAgbG90dGllLnJlc2V0U2VnbWVudHMoKTtcbiAgICAgICAgfVxuICAgICAgICBsb3R0aWUucGxheSgpO1xuICAgICAgfSBlbHNlIGlmIChhY3Rpb24udHlwZSA9PT0gXCJzdG9wXCIpIHtcbiAgICAgICAgLy8gU3RvcDogU3RvcCBwbGF5YmFja1xuICAgICAgICBsb3R0aWUuZ29Ub0FuZFN0b3AoYWN0aW9uLmZyYW1lc1swXSk7XG4gICAgICAgIGxvdHRpZS5zdG9wKCk7XG4gICAgICB9IGVsc2UgaWYgKGFjdGlvbi50eXBlID09PSBcImhvdmVyXCIpIHtcbiAgICAgICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmIChsb3R0aWUuaXNQYXVzZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGxvdHRpZS5wbGF5U2VnbWVudHMoYWN0aW9uLmZyYW1lcywgdHJ1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmIChsb3R0aWUuaXNQYXVzZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBsb3R0aWUucGF1c2UoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5jb25zdCBhbmltQWN0aW9ucyA9IHtcbiAgLy8gZmlyc3RMb3R0aWU6IHtcbiAgLy8gICBhY3Rpb25zOiBbXG4gIC8vICAgICB7XG4gIC8vICAgICAgIHN0YXJ0OiAwLFxuICAvLyAgICAgICBlbmQ6IDEsXG4gIC8vICAgICAgIHR5cGU6IFwibG9vcFwiLFxuICAvLyAgICAgICBmcmFtZXM6IFs1MCwgMzAwXVxuICAvLyAgICAgfVxuICAvLyAgIF1cbiAgLy8gfSxcbiAgc2Vjb25kTG90dGllOiB7XG4gICAgY29udGFpbmVyOiBcIk15Q29udGFpbmVySWRcIixcbiAgICBhY3Rpb25zOiBbXG4gICAgICB7XG4gICAgICAgIHN0YXJ0OiAwLFxuICAgICAgICBlbmQ6IDEsXG4gICAgICAgIHR5cGU6IFwic2Vla1wiLFxuICAgICAgICBmcmFtZXM6IFswLCAzMDFdXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB0aGlyZExvdHRpZToge1xuICAgIGFjdGlvbnM6IFtcbiAgICAgIHtcbiAgICAgICAgc3RhcnQ6IDAsXG4gICAgICAgIGVuZDogMC4zLFxuICAgICAgICB0eXBlOiBcInN0b3BcIixcbiAgICAgICAgZnJhbWVzOiBbMF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN0YXJ0OiAwLjMsXG4gICAgICAgIGVuZDogMSxcbiAgICAgICAgdHlwZTogXCJzZWVrXCIsXG4gICAgICAgIGZyYW1lczogWzAsIDMwMV1cbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIGZvdXJ0aExvdHRpZToge1xuICAgIGFjdGlvbnM6IFtcbiAgICAgIHtcbiAgICAgICAgc3RhcnQ6IDAsXG4gICAgICAgIGVuZDogMC4yLFxuICAgICAgICB0eXBlOiBcInN0b3BcIixcbiAgICAgICAgZnJhbWVzOiBbMF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN0YXJ0OiAwLjIsXG4gICAgICAgIGVuZDogMC40NSxcbiAgICAgICAgdHlwZTogXCJzZWVrXCIsXG4gICAgICAgIGZyYW1lczogWzAsIDQ1XVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhcnQ6IDAuNDUsXG4gICAgICAgIGVuZDogMS4wLFxuICAgICAgICB0eXBlOiBcImxvb3BcIixcbiAgICAgICAgZnJhbWVzOiBbNDUsIDYwXVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAgZmlmdGhMb3R0aWU6IHtcbiAgICBhY3Rpb25zOiBbXG4gICAgICB7XG4gICAgICAgIHN0YXJ0OiAwLFxuICAgICAgICBlbmQ6IDEuMCxcbiAgICAgICAgdHlwZTogXCJsb29wXCIsXG4gICAgICAgIGZyYW1lczogWzE3LCA2MF1cbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHNldmVudGhMb3R0aWU6IHtcbiAgICBhY3Rpb25zOiBbXG4gICAgICB7XG4gICAgICAgIHN0YXJ0OiAwLFxuICAgICAgICBlbmQ6IDEuMCxcbiAgICAgICAgdHlwZTogXCJob3ZlclwiLFxuICAgICAgICBmcmFtZXM6IFs0NSwgNjBdXG4gICAgICB9XG4gICAgXVxuICB9XG59O1xuXG5sb3R0aWVTY3JvbGwoYW5pbUFjdGlvbnMpO1xuXG4vLyB0byBzZXR1cCBvbiBob3ZlciBmb3Igc2VnbWVudHMuIG1ha2Ugc3VyZSB0aGUgZmlyc3QgZnJhbWUgaXMgc2V0IGFzIHRoZSBmcmFtZSB5b3Ugd2FudCB0byBzdGFydCB0aGUgc2VnbWVudCBsb29waW5nIGZyb21cbmNvbnN0IE15TG90dGllID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZXZlbnRoTG90dGllXCIpO1xuTXlMb3R0aWUuZ2V0TG90dGllKCkuZ29Ub0FuZFN0b3AoNDUsIHRydWUpO1xuXG5kb2N1bWVudFxuICAuZ2V0RWxlbWVudEJ5SWQoXCJmaXJzdExvdHRpZVwiKVxuICAuZ2V0TG90dGllKClcbiAgLnBsYXlTZWdtZW50cyhbMTAwLCAzMDBdLCB0cnVlKTtcbiJdLCJuYW1lcyI6WyJjb21wb25lbnREaWRNb3VudCIsImNvbnNvbGUiLCJsb2ciLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsImxvdHRpZVNjcm9sbCIsImNvbmZpZyIsImFkZEV2ZW50TGlzdGVuZXIiLCJwbGF5ZXJJZCIsInBsYXllciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjb250YWluZXIiLCJ1bmRlZmluZWQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJib3R0b20iLCJoZWlnaHQiLCJjdXJyZW50IiwibWF4IiwiY3VycmVudFBlcmNlbnQiLCJhY3Rpb24iLCJhY3Rpb25zIiwiZmluZCIsInN0YXJ0IiwiZW5kIiwibG90dGllIiwiZ2V0TG90dGllIiwibG9vcCIsInR5cGUiLCJwbGF5U2VnbWVudHMiLCJmcmFtZXMiLCJnb1RvQW5kU3RvcCIsIk1hdGgiLCJjZWlsIiwidG90YWxGcmFtZXMiLCJpc1BhdXNlZCIsInJlc2V0U2VnbWVudHMiLCJwbGF5Iiwic3RvcCIsInBhdXNlIiwiYW5pbUFjdGlvbnMiLCJzZWNvbmRMb3R0aWUiLCJ0aGlyZExvdHRpZSIsImZvdXJ0aExvdHRpZSIsImZpZnRoTG90dGllIiwic2V2ZW50aExvdHRpZSIsIk15TG90dGllIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/indexThree.js\n");

/***/ })

});