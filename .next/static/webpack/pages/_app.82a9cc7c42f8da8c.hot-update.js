"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/voxel-mclaren.js":
/*!*************************************!*\
  !*** ./components/voxel-mclaren.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n/* harmony import */ var _lib_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/model */ \"./lib/model.js\");\n/* harmony import */ var _voxel_mclaren_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./voxel-mclaren-loader */ \"./components/voxel-mclaren-loader.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction easeOutCirc(x) {\n    return Math.sqrt(1 - Math.pow(x - 1, 4));\n}\nconst VoxelMclaren = ()=>{\n    _s();\n    const refContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const refRenderer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const MclarenGLB =  false ? 0 : \"\";\n    const handleWindowResize = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{\n        const { current: container  } = refContainer;\n        const { current: renderer1  } = refRenderer;\n        if (container && renderer1) {\n            //Size of the container\n            const scW = container.clientWidth;\n            const scH = container.clientHeight;\n            renderer1.setSize(scW, scH);\n        }\n    }, []);\n    /* eslint-disable react-hooks/exhaustive-deps */ (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const { current: container  } = refContainer;\n        if (container) {\n            const scW = container.clientWidth;\n            const scH = container.clientHeight;\n            const renderer1 = new three__WEBPACK_IMPORTED_MODULE_4__.WebGLRenderer({\n                antialias: true,\n                alpha: true\n            });\n            renderer1.setPixelRatio(window.devicePixelRatio);\n            renderer1.setSize(scW, scH);\n            renderer1.outputEncoding = three__WEBPACK_IMPORTED_MODULE_4__.sRGBEncoding;\n            container.appendChild(renderer1.domElement);\n            refRenderer.current = renderer1;\n            const scene = new three__WEBPACK_IMPORTED_MODULE_4__.Scene();\n            const target = new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(-0.5, 1.2, 0);\n            const initialCameraPosition = new three__WEBPACK_IMPORTED_MODULE_4__.Vector3;\n            //640-> 240\n            // 8 -> 6\n            const scale = scH * 0.005 + 8 //Initial Zoom \n            ;\n            const camera = new three__WEBPACK_IMPORTED_MODULE_4__.OrthographicCamera(-scale, scale, scale, -scale, 0.01, 50000);\n            camera.position.copy(initialCameraPosition);\n            camera.lookAt(target);\n            setCamera(camera);\n            const ambientLight = new three__WEBPACK_IMPORTED_MODULE_4__.AmbientLight(0xcccccc, 1);\n            scene.add(ambientLight);\n            const controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_5__.OrbitControls(camera, renderer1.domElement);\n            controls.autoRotate = true;\n            controls.target = target;\n            setControls(controls);\n            (0,_lib_model__WEBPACK_IMPORTED_MODULE_2__.loadGLTFModel)(scene, \"/mclaren.glb\", {\n                recieveShadow: false,\n                castShadow: false\n            }).then(()=>{\n                animate();\n                setLoading(false);\n            });\n            let req = null;\n            let frame = 0;\n            const animate = ()=>{\n                req = requestAnimationFrame(animate);\n                frame = frame <= 100 ? frame + 1 : frame;\n                if (frame <= 100) {\n                    const p = initialCameraPosition;\n                    const rotSpeed = easeOutCirc(frame / 120) * Math.PI * 20;\n                    camera.position.y = 10;\n                    camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);\n                    camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);\n                    camera.lookAt(target);\n                } else {\n                    controls.update();\n                }\n                renderer1.render(scene, camera);\n            };\n            return ()=>{\n                cancelAnimationFrame(req);\n                renderer1.dispose();\n            };\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.addEventListener(\"resize\", handleWindowResize, false);\n        return ()=>{\n            window.removeEventListener(\"resize\", handleWindowResize, false);\n        };\n    }, [\n        renderer,\n        handleWindowResize\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Box, {\n        ref: refContainer,\n        className: \"voxel-plane\",\n        m: \"auto\",\n        mt: [\n            \"-20px\",\n            \"-60px\",\n            \"-120px\"\n        ],\n        mb: [\n            \"-40px\",\n            \"-140px\",\n            \"-200px\"\n        ],\n        w: [\n            280,\n            480,\n            640\n        ],\n        h: [\n            280,\n            480,\n            640\n        ],\n        position: \"relative\",\n        children: loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Spinner, {\n            size: \"xl\",\n            position: \"absolute\",\n            left: \"50%\",\n            top: \"50%\",\n            ml: \"calc(0px - var(--spinner-size) / 2)\",\n            mt: \"calc(0px - var(--spinner-size))\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\descr\\\\ernestoc14-homepage\\\\components\\\\voxel-mclaren.js\",\n            lineNumber: 123,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\descr\\\\ernestoc14-homepage\\\\components\\\\voxel-mclaren.js\",\n        lineNumber: 115,\n        columnNumber: 9\n    }, undefined);\n};\n_s(VoxelMclaren, \"3j16MnLBwOaGysXK6RyHdiJd89A=\");\n_c = VoxelMclaren;\n/* harmony default export */ __webpack_exports__[\"default\"] = (VoxelMclaren);\nvar _c;\n$RefreshReg$(_c, \"VoxelMclaren\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UztrQkFFWmhDLHlCQUNHLDhEQUFDc0U7WUFDR0MsTUFBSztZQUFLdkMsVUFBUztZQUNuQndDLE1BQUs7WUFBTUMsS0FBSTtZQUNmQyxJQUFHO1lBQ0hSLElBQUc7Ozs7Ozs7Ozs7O0FBS25CO0dBekhNcEU7S0FBQUE7QUEySE4sK0RBQWVBLFlBQVlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy92b3hlbC1tY2xhcmVuLmpzPzcwNmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSdcclxuaW1wb3J0IHsgT3JiaXRDb250cm9scyB9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9jb250cm9scy9PcmJpdENvbnRyb2xzJ1xyXG5pbXBvcnQgeyBsb2FkR0xURk1vZGVsIH0gZnJvbSAnLi4vbGliL21vZGVsJ1xyXG5pbXBvcnQgeyBNY2xhcmVuU3Bpbm5lciwgTWNsYXJlbkNvbnRhaW5lciB9IGZyb20gJy4vdm94ZWwtbWNsYXJlbi1sb2FkZXInXHJcblxyXG5mdW5jdGlvbiBlYXNlT3V0Q2lyYyh4KXtcclxuICAgIHJldHVybiBNYXRoLnNxcnQoMSAtIE1hdGgucG93KHggLSAxLCA0KSlcclxufVxyXG5cclxuY29uc3QgVm94ZWxNY2xhcmVuID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcmVmQ29udGFpbmVyID0gdXNlUmVmKClcclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXHJcbiAgICBjb25zdCByZWZSZW5kZXJlciA9IHVzZVN0YXRlKClcclxuICAgIGNvbnN0IE1jbGFyZW5HTEIgPSAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyA/ICcvbWNsYXJlbi5nbGInIDogJycpXHJcblxyXG4gICAgY29uc3QgaGFuZGxlV2luZG93UmVzaXplID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgY3VycmVudDogY29udGFpbmVyIH0gPSByZWZDb250YWluZXJcclxuICAgICAgICBjb25zdCB7Y3VycmVudDogcmVuZGVyZXIgfSA9IHJlZlJlbmRlcmVyXHJcbiAgICAgICAgaWYoY29udGFpbmVyICYmIHJlbmRlcmVyKXtcclxuICAgICAgICAgICAgLy9TaXplIG9mIHRoZSBjb250YWluZXJcclxuICAgICAgICAgICAgY29uc3Qgc2NXID0gY29udGFpbmVyLmNsaWVudFdpZHRoXHJcbiAgICAgICAgICAgIGNvbnN0IHNjSCA9IGNvbnRhaW5lci5jbGllbnRIZWlnaHRcclxuXHJcbiAgICAgICAgICAgIHJlbmRlcmVyLnNldFNpemUoc2NXLCBzY0gpXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzICovXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgY3VycmVudDogY29udGFpbmVyfSA9IHJlZkNvbnRhaW5lclxyXG4gICAgICAgIGlmKGNvbnRhaW5lcil7XHJcbiAgICAgICAgICAgIGNvbnN0IHNjVyA9IGNvbnRhaW5lci5jbGllbnRXaWR0aFxyXG4gICAgICAgICAgICBjb25zdCBzY0ggPSBjb250YWluZXIuY2xpZW50SGVpZ2h0XHJcblxyXG4gICAgICAgICAgICBjb25zdCByZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHtcclxuICAgICAgICAgICAgICAgIGFudGlhbGlhczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGFscGhhOiB0cnVlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJlbmRlcmVyLnNldFBpeGVsUmF0aW8od2luZG93LmRldmljZVBpeGVsUmF0aW8pXHJcbiAgICAgICAgICAgIHJlbmRlcmVyLnNldFNpemUoc2NXLCBzY0gpXHJcbiAgICAgICAgICAgIHJlbmRlcmVyLm91dHB1dEVuY29kaW5nID0gVEhSRUUuc1JHQkVuY29kaW5nXHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyZW5kZXJlci5kb21FbGVtZW50KVxyXG4gICAgICAgICAgICByZWZSZW5kZXJlci5jdXJyZW50ID0gcmVuZGVyZXJcclxuICAgICAgICAgICAgY29uc3Qgc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKVxyXG5cclxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gbmV3IFRIUkVFLlZlY3RvcjMoLTAuNSwgMS4yLCAwKVxyXG4gICAgICAgICAgICBjb25zdCBpbml0aWFsQ2FtZXJhUG9zaXRpb24gPSBuZXcgVEhSRUUuVmVjdG9yM1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vNjQwLT4gMjQwXHJcbiAgICAgICAgICAgIC8vIDggLT4gNlxyXG4gICAgICAgICAgICBjb25zdCBzY2FsZSA9IHNjSCAqIDAuMDA1ICsgOCAvL0luaXRpYWwgWm9vbSBcclxuICAgICAgICAgICAgY29uc3QgY2FtZXJhID0gbmV3IFRIUkVFLk9ydGhvZ3JhcGhpY0NhbWVyYShcclxuICAgICAgICAgICAgICAgIC1zY2FsZSxcclxuICAgICAgICAgICAgICAgIHNjYWxlLFxyXG4gICAgICAgICAgICAgICAgc2NhbGUsXHJcbiAgICAgICAgICAgICAgICAtc2NhbGUsXHJcbiAgICAgICAgICAgICAgICAwLjAxLFxyXG4gICAgICAgICAgICAgICAgNTAwMDBcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICBjYW1lcmEucG9zaXRpb24uY29weShpbml0aWFsQ2FtZXJhUG9zaXRpb24pXHJcbiAgICAgICAgICAgIGNhbWVyYS5sb29rQXQodGFyZ2V0KVxyXG4gICAgICAgICAgICBzZXRDYW1lcmEoY2FtZXJhKVxyXG5cclxuICAgICAgICAgICAgY29uc3QgYW1iaWVudExpZ2h0ID0gbmV3IFRIUkVFLkFtYmllbnRMaWdodCgweGNjY2NjYywgMSlcclxuICAgICAgICAgICAgc2NlbmUuYWRkKGFtYmllbnRMaWdodClcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRyb2xzID0gbmV3IE9yYml0Q29udHJvbHMoY2FtZXJhLCByZW5kZXJlci5kb21FbGVtZW50KVxyXG4gICAgICAgICAgICBjb250cm9scy5hdXRvUm90YXRlID0gdHJ1ZVxyXG4gICAgICAgICAgICBjb250cm9scy50YXJnZXQgPSB0YXJnZXRcclxuICAgICAgICAgICAgc2V0Q29udHJvbHMoIGNvbnRyb2xzKVxyXG5cclxuICAgICAgICAgICAgbG9hZEdMVEZNb2RlbChzY2VuZSwgJy9tY2xhcmVuLmdsYicsIHtcclxuICAgICAgICAgICAgICAgIHJlY2lldmVTaGFkb3c6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY2FzdFNoYWRvdzogZmFsc2VcclxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRlKClcclxuICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGxldCByZXEgPSBudWxsXHJcbiAgICAgICAgICAgIGxldCBmcmFtZSA9IDBcclxuICAgICAgICAgICAgY29uc3QgYW5pbWF0ZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlcSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKVxyXG4gICAgICAgICAgICAgICAgZnJhbWUgPSBmcmFtZSA8PSAxMDAgPyBmcmFtZSArIDEgOiBmcmFtZVxyXG5cclxuICAgICAgICAgICAgICAgIGlmKGZyYW1lIDw9IDEwMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcCA9IGluaXRpYWxDYW1lcmFQb3NpdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvdFNwZWVkID0gZWFzZU91dENpcmMoZnJhbWUgLyAxMjApICogTWF0aC5QSSAqIDIwXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBjYW1lcmEucG9zaXRpb24ueSA9IDEwXHJcbiAgICAgICAgICAgICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnggPSBwLnggKiBNYXRoLmNvcyhyb3RTcGVlZCkrIHAueiAqIE1hdGguc2luKHJvdFNwZWVkKVxyXG4gICAgICAgICAgICAgICAgICAgIGNhbWVyYS5wb3NpdGlvbi56ID0gcC56ICogTWF0aC5jb3Mocm90U3BlZWQpLSBwLnggKiBNYXRoLnNpbihyb3RTcGVlZClcclxuICAgICAgICAgICAgICAgICAgICBjYW1lcmEubG9va0F0KHRhcmdldClcclxuICAgICAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250cm9scy51cGRhdGUoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJlcSlcclxuICAgICAgICAgICAgICAgIHJlbmRlcmVyLmRpc3Bvc2UoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlV2luZG93UmVzaXplLCBmYWxzZSlcclxuICAgICAgICByZXR1cm4oKSA9PiB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVXaW5kb3dSZXNpemUsIGZhbHNlKVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtyZW5kZXJlciwgaGFuZGxlV2luZG93UmVzaXplXSlcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPEJveCByZWY9e3JlZkNvbnRhaW5lcn0gY2xhc3NOYW1lPSd2b3hlbC1wbGFuZScgbT0nYXV0bycgXHJcbiAgICAgICAgICAgIG10PXtbJy0yMHB4JywgJy02MHB4JywgJy0xMjBweCddfVxyXG4gICAgICAgICAgICBtYj17WyctNDBweCcsICctMTQwcHgnLCAnLTIwMHB4J119XHJcbiAgICAgICAgICAgIHc9e1syODAsIDQ4MCwgNjQwXX1cclxuICAgICAgICAgICAgaD17WzI4MCwgNDgwLCA2NDBdfVxyXG4gICAgICAgICAgICBwb3NpdGlvbj1cInJlbGF0aXZlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAge2xvYWRpbmcgJiYgKFxyXG4gICAgICAgICAgICA8U3Bpbm5lciBcclxuICAgICAgICAgICAgICAgIHNpemU9XCJ4bFwiIHBvc2l0aW9uPVwiYWJzb2x1dGVcIiBcclxuICAgICAgICAgICAgICAgIGxlZnQ9XCI1MCVcIiB0b3A9XCI1MCVcIiBcclxuICAgICAgICAgICAgICAgIG1sPVwiY2FsYygwcHggLSB2YXIoLS1zcGlubmVyLXNpemUpIC8gMilcIiBcclxuICAgICAgICAgICAgICAgIG10PVwiY2FsYygwcHggLSB2YXIoLS1zcGlubmVyLXNpemUpKVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8L0JveD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVm94ZWxNY2xhcmVuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlQ2FsbGJhY2siLCJUSFJFRSIsIk9yYml0Q29udHJvbHMiLCJsb2FkR0xURk1vZGVsIiwiTWNsYXJlblNwaW5uZXIiLCJNY2xhcmVuQ29udGFpbmVyIiwiZWFzZU91dENpcmMiLCJ4IiwiTWF0aCIsInNxcnQiLCJwb3ciLCJWb3hlbE1jbGFyZW4iLCJyZWZDb250YWluZXIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJlZlJlbmRlcmVyIiwiTWNsYXJlbkdMQiIsInByb2Nlc3MiLCJoYW5kbGVXaW5kb3dSZXNpemUiLCJjdXJyZW50IiwiY29udGFpbmVyIiwicmVuZGVyZXIiLCJzY1ciLCJjbGllbnRXaWR0aCIsInNjSCIsImNsaWVudEhlaWdodCIsInNldFNpemUiLCJXZWJHTFJlbmRlcmVyIiwiYW50aWFsaWFzIiwiYWxwaGEiLCJzZXRQaXhlbFJhdGlvIiwid2luZG93IiwiZGV2aWNlUGl4ZWxSYXRpbyIsIm91dHB1dEVuY29kaW5nIiwic1JHQkVuY29kaW5nIiwiYXBwZW5kQ2hpbGQiLCJkb21FbGVtZW50Iiwic2NlbmUiLCJTY2VuZSIsInRhcmdldCIsIlZlY3RvcjMiLCJpbml0aWFsQ2FtZXJhUG9zaXRpb24iLCJzY2FsZSIsImNhbWVyYSIsIk9ydGhvZ3JhcGhpY0NhbWVyYSIsInBvc2l0aW9uIiwiY29weSIsImxvb2tBdCIsInNldENhbWVyYSIsImFtYmllbnRMaWdodCIsIkFtYmllbnRMaWdodCIsImFkZCIsImNvbnRyb2xzIiwiYXV0b1JvdGF0ZSIsInNldENvbnRyb2xzIiwicmVjaWV2ZVNoYWRvdyIsImNhc3RTaGFkb3ciLCJ0aGVuIiwiYW5pbWF0ZSIsInJlcSIsImZyYW1lIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicCIsInJvdFNwZWVkIiwiUEkiLCJ5IiwiY29zIiwieiIsInNpbiIsInVwZGF0ZSIsInJlbmRlciIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiZGlzcG9zZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiQm94IiwicmVmIiwiY2xhc3NOYW1lIiwibSIsIm10IiwibWIiLCJ3IiwiaCIsIlNwaW5uZXIiLCJzaXplIiwibGVmdCIsInRvcCIsIm1sIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/voxel-mclaren.js\n"));

/***/ })

});