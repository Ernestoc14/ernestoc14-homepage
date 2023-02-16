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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n/* harmony import */ var _lib_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/model */ \"./lib/model.js\");\n/* harmony import */ var _voxel_mclaren_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./voxel-mclaren-loader */ \"./components/voxel-mclaren-loader.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction easeOutCirc(x) {\n    return Math.sqrt(1 - Math.pow(x - 1, 4));\n}\nconst VoxelMclaren = ()=>{\n    _s();\n    const refContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const refRende = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [_camera, setCamera] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [target] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(-0.5, 1.2, 0));\n    const [initialCameraPosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(// Initial Positions\n    20 * Math.sin(0.2 * Math.PI), 10, 20 * Math.cos(0.2 * Math.PI)));\n    const [scene] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_4__.Scene());\n    const [_controls, setControls] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const handleWindowResize = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{\n        const { current: container  } = refContainer;\n        if (container && renderer) {\n            //Size of the container\n            const scW = container.clientWidth;\n            const scH = container.clientHeight;\n            renderer.setSize(scW, scH);\n        }\n    }, [\n        renderer\n    ]);\n    /* eslint-disable react-hooks/exhaustive-deps */ (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const { current: container  } = refContainer;\n        if (container && !renderer) {\n            const scW = container.clientWidth;\n            const scH = container.clientHeight;\n            const renderer1 = new three__WEBPACK_IMPORTED_MODULE_4__.WebGLRenderer({\n                antialias: true,\n                alpha: true\n            });\n            renderer1.setPixelRatio(window.devicePixelRatio);\n            renderer1.setSize(scW, scH);\n            renderer1.outputEncoding = three__WEBPACK_IMPORTED_MODULE_4__.sRGBEncoding;\n            container.appendChild(renderer1.domElement);\n            setRenderer(renderer1);\n            //640-> 240\n            // 8 -> 6\n            const scale = scH * 0.005 + 8 //Initial Zoom \n            ;\n            const camera = new three__WEBPACK_IMPORTED_MODULE_4__.OrthographicCamera(-scale, scale, scale, -scale, 0.01, 50000);\n            camera.position.copy(initialCameraPosition);\n            camera.lookAt(target);\n            setCamera(camera);\n            const ambientLight = new three__WEBPACK_IMPORTED_MODULE_4__.AmbientLight(0xcccccc, 1);\n            scene.add(ambientLight);\n            const controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_5__.OrbitControls(camera, renderer1.domElement);\n            controls.autoRotate = true;\n            controls.target = target;\n            setControls(controls);\n            (0,_lib_model__WEBPACK_IMPORTED_MODULE_2__.loadGLTFModel)(scene, \"/mclaren.glb\", {\n                recieveShadow: false,\n                castShadow: false\n            }).then(()=>{\n                animate();\n                setLoading(false);\n            });\n            let req = null;\n            let frame = 0;\n            const animate = ()=>{\n                req = requestAnimationFrame(animate);\n                frame = frame <= 100 ? frame + 1 : frame;\n                if (frame <= 100) {\n                    const p = initialCameraPosition;\n                    const rotSpeed = easeOutCirc(frame / 120) * Math.PI * 20;\n                    camera.position.y = 10;\n                    camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);\n                    camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);\n                    camera.lookAt(target);\n                } else {\n                    controls.update();\n                }\n                renderer1.render(scene, camera);\n            };\n            return ()=>{\n                cancelAnimationFrame(req);\n                renderer1.dispose();\n            };\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.addEventListener(\"resize\", handleWindowResize, false);\n        return ()=>{\n            window.removeEventListener(\"resize\", handleWindowResize, false);\n        };\n    }, [\n        renderer,\n        handleWindowResize\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Box, {\n        ref: refContainer,\n        className: \"voxel-plane\",\n        m: \"auto\",\n        mt: [\n            \"-20px\",\n            \"-60px\",\n            \"-120px\"\n        ],\n        mb: [\n            \"-40px\",\n            \"-140px\",\n            \"-200px\"\n        ],\n        w: [\n            280,\n            480,\n            640\n        ],\n        h: [\n            280,\n            480,\n            640\n        ],\n        position: \"relative\",\n        children: loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Spinner, {\n            size: \"xl\",\n            position: \"absolute\",\n            left: \"50%\",\n            top: \"50%\",\n            ml: \"calc(0px - var(--spinner-size) / 2)\",\n            mt: \"calc(0px - var(--spinner-size))\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\descr\\\\ernestoc14-homepage\\\\components\\\\voxel-mclaren.js\",\n            lineNumber: 128,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\descr\\\\ernestoc14-homepage\\\\components\\\\voxel-mclaren.js\",\n        lineNumber: 120,\n        columnNumber: 9\n    }, undefined);\n};\n_s(VoxelMclaren, \"zUsydKrVpyISYInGJXTmeVY2PK4=\");\n_c = VoxelMclaren;\n/* harmony default export */ __webpack_exports__[\"default\"] = (VoxelMclaren);\nvar _c;\n$RefreshReg$(_c, \"VoxelMclaren\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bUI7SUFFakMscUJBQ0ksOERBQUNnRDtRQUFJQyxLQUFLakU7UUFBY2tFLFdBQVU7UUFBY0MsR0FBRTtRQUM5Q0MsSUFBSTtZQUFDO1lBQVM7WUFBUztTQUFTO1FBQ2hDQyxJQUFJO1lBQUM7WUFBUztZQUFVO1NBQVM7UUFDakNDLEdBQUc7WUFBQztZQUFLO1lBQUs7U0FBSTtRQUNsQkMsR0FBRztZQUFDO1lBQUs7WUFBSztTQUFJO1FBQ2xCaEMsVUFBUztrQkFFWnRDLHlCQUNHLDhEQUFDdUU7WUFDR0MsTUFBSztZQUFLbEMsVUFBUztZQUNuQm1DLE1BQUs7WUFBTUMsS0FBSTtZQUNmQyxJQUFHO1lBQ0hSLElBQUc7Ozs7Ozs7Ozs7O0FBS25CO0dBOUhNckU7S0FBQUE7QUFnSU4sK0RBQWVBLFlBQVlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy92b3hlbC1tY2xhcmVuLmpzPzcwNmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSdcclxuaW1wb3J0IHsgT3JiaXRDb250cm9scyB9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9jb250cm9scy9PcmJpdENvbnRyb2xzJ1xyXG5pbXBvcnQgeyBsb2FkR0xURk1vZGVsIH0gZnJvbSAnLi4vbGliL21vZGVsJ1xyXG5pbXBvcnQgeyBNY2xhcmVuU3Bpbm5lciwgTWNsYXJlbkNvbnRhaW5lciB9IGZyb20gJy4vdm94ZWwtbWNsYXJlbi1sb2FkZXInXHJcblxyXG5mdW5jdGlvbiBlYXNlT3V0Q2lyYyh4KXtcclxuICAgIHJldHVybiBNYXRoLnNxcnQoMSAtIE1hdGgucG93KHggLSAxLCA0KSlcclxufVxyXG5cclxuY29uc3QgVm94ZWxNY2xhcmVuID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcmVmQ29udGFpbmVyID0gdXNlUmVmKClcclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXHJcbiAgICBjb25zdCByZWZSZW5kZSA9IHVzZVN0YXRlKClcclxuICAgIGNvbnN0IFtfY2FtZXJhLCBzZXRDYW1lcmFdID0gdXNlU3RhdGUoKVxyXG4gICAgY29uc3QgW3RhcmdldF0gPSB1c2VTdGF0ZShuZXcgVEhSRUUuVmVjdG9yMygtMC41LCAxLjIsIDApKVxyXG4gICAgY29uc3QgW2luaXRpYWxDYW1lcmFQb3NpdGlvbl0gPSB1c2VTdGF0ZShcclxuICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMyhcclxuICAgICAgICAgICAgLy8gSW5pdGlhbCBQb3NpdGlvbnNcclxuICAgICAgICAgICAgMjAgKiBNYXRoLnNpbigwLjIgKiBNYXRoLlBJKSxcclxuICAgICAgICAgICAgMTAsXHJcbiAgICAgICAgICAgIDIwICogTWF0aC5jb3MoMC4yICogTWF0aC5QSSlcclxuICAgICAgICApXHJcbiAgICApXHJcbiAgICBjb25zdCBbc2NlbmVdID0gdXNlU3RhdGUobmV3IFRIUkVFLlNjZW5lKCkpXHJcbiAgICBjb25zdCBbX2NvbnRyb2xzLCBzZXRDb250cm9sc10gPSB1c2VTdGF0ZSgpXHJcblxyXG4gICAgY29uc3QgaGFuZGxlV2luZG93UmVzaXplID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgY3VycmVudDogY29udGFpbmVyfSA9IHJlZkNvbnRhaW5lclxyXG4gICAgICAgIGlmKGNvbnRhaW5lciAmJiByZW5kZXJlcil7XHJcbiAgICAgICAgICAgIC8vU2l6ZSBvZiB0aGUgY29udGFpbmVyXHJcbiAgICAgICAgICAgIGNvbnN0IHNjVyA9IGNvbnRhaW5lci5jbGllbnRXaWR0aFxyXG4gICAgICAgICAgICBjb25zdCBzY0ggPSBjb250YWluZXIuY2xpZW50SGVpZ2h0XHJcblxyXG4gICAgICAgICAgICByZW5kZXJlci5zZXRTaXplKHNjVywgc2NIKVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtyZW5kZXJlcl0pXHJcblxyXG4gICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzICovXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgY3VycmVudDogY29udGFpbmVyfSA9IHJlZkNvbnRhaW5lclxyXG4gICAgICAgIGlmKGNvbnRhaW5lciAmJiAhcmVuZGVyZXIpe1xyXG4gICAgICAgICAgICBjb25zdCBzY1cgPSBjb250YWluZXIuY2xpZW50V2lkdGhcclxuICAgICAgICAgICAgY29uc3Qgc2NIID0gY29udGFpbmVyLmNsaWVudEhlaWdodFxyXG5cclxuICAgICAgICAgICAgY29uc3QgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7XHJcbiAgICAgICAgICAgICAgICBhbnRpYWxpYXM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhbHBoYTogdHJ1ZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZW5kZXJlci5zZXRQaXhlbFJhdGlvKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvKVxyXG4gICAgICAgICAgICByZW5kZXJlci5zZXRTaXplKHNjVywgc2NIKVxyXG4gICAgICAgICAgICByZW5kZXJlci5vdXRwdXRFbmNvZGluZyA9IFRIUkVFLnNSR0JFbmNvZGluZ1xyXG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocmVuZGVyZXIuZG9tRWxlbWVudClcclxuICAgICAgICAgICAgc2V0UmVuZGVyZXIocmVuZGVyZXIpXHJcblxyXG4gICAgICAgICAgICAvLzY0MC0+IDI0MFxyXG4gICAgICAgICAgICAvLyA4IC0+IDZcclxuICAgICAgICAgICAgY29uc3Qgc2NhbGUgPSBzY0ggKiAwLjAwNSArIDggLy9Jbml0aWFsIFpvb20gXHJcbiAgICAgICAgICAgIGNvbnN0IGNhbWVyYSA9IG5ldyBUSFJFRS5PcnRob2dyYXBoaWNDYW1lcmEoXHJcbiAgICAgICAgICAgICAgICAtc2NhbGUsXHJcbiAgICAgICAgICAgICAgICBzY2FsZSxcclxuICAgICAgICAgICAgICAgIHNjYWxlLFxyXG4gICAgICAgICAgICAgICAgLXNjYWxlLFxyXG4gICAgICAgICAgICAgICAgMC4wMSxcclxuICAgICAgICAgICAgICAgIDUwMDAwXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLmNvcHkoaW5pdGlhbENhbWVyYVBvc2l0aW9uKVxyXG4gICAgICAgICAgICBjYW1lcmEubG9va0F0KHRhcmdldClcclxuICAgICAgICAgICAgc2V0Q2FtZXJhKGNhbWVyYSlcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGFtYmllbnRMaWdodCA9IG5ldyBUSFJFRS5BbWJpZW50TGlnaHQoMHhjY2NjY2MsIDEpXHJcbiAgICAgICAgICAgIHNjZW5lLmFkZChhbWJpZW50TGlnaHQpXHJcblxyXG4gICAgICAgICAgICBjb25zdCBjb250cm9scyA9IG5ldyBPcmJpdENvbnRyb2xzKGNhbWVyYSwgcmVuZGVyZXIuZG9tRWxlbWVudClcclxuICAgICAgICAgICAgY29udHJvbHMuYXV0b1JvdGF0ZSA9IHRydWVcclxuICAgICAgICAgICAgY29udHJvbHMudGFyZ2V0ID0gdGFyZ2V0XHJcbiAgICAgICAgICAgIHNldENvbnRyb2xzKCBjb250cm9scylcclxuXHJcbiAgICAgICAgICAgIGxvYWRHTFRGTW9kZWwoc2NlbmUsICcvbWNsYXJlbi5nbGInLCB7XHJcbiAgICAgICAgICAgICAgICByZWNpZXZlU2hhZG93OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNhc3RTaGFkb3c6IGZhbHNlXHJcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0ZSgpXHJcbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBsZXQgcmVxID0gbnVsbFxyXG4gICAgICAgICAgICBsZXQgZnJhbWUgPSAwXHJcbiAgICAgICAgICAgIGNvbnN0IGFuaW1hdGUgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXEgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSlcclxuICAgICAgICAgICAgICAgIGZyYW1lID0gZnJhbWUgPD0gMTAwID8gZnJhbWUgKyAxIDogZnJhbWVcclxuXHJcbiAgICAgICAgICAgICAgICBpZihmcmFtZSA8PSAxMDApe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHAgPSBpbml0aWFsQ2FtZXJhUG9zaXRpb25cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByb3RTcGVlZCA9IGVhc2VPdXRDaXJjKGZyYW1lIC8gMTIwKSAqIE1hdGguUEkgKiAyMFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnkgPSAxMFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbWVyYS5wb3NpdGlvbi54ID0gcC54ICogTWF0aC5jb3Mocm90U3BlZWQpKyBwLnogKiBNYXRoLnNpbihyb3RTcGVlZClcclxuICAgICAgICAgICAgICAgICAgICBjYW1lcmEucG9zaXRpb24ueiA9IHAueiAqIE1hdGguY29zKHJvdFNwZWVkKS0gcC54ICogTWF0aC5zaW4ocm90U3BlZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgY2FtZXJhLmxvb2tBdCh0YXJnZXQpXHJcbiAgICAgICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbHMudXBkYXRlKClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJlbmRlcmVyLnJlbmRlcihzY2VuZSwgY2FtZXJhKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShyZXEpXHJcbiAgICAgICAgICAgICAgICByZW5kZXJlci5kaXNwb3NlKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVdpbmRvd1Jlc2l6ZSwgZmFsc2UpXHJcbiAgICAgICAgcmV0dXJuKCkgPT4ge1xyXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlV2luZG93UmVzaXplLCBmYWxzZSlcclxuICAgICAgICB9XHJcbiAgICB9LCBbcmVuZGVyZXIsIGhhbmRsZVdpbmRvd1Jlc2l6ZV0pXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxCb3ggcmVmPXtyZWZDb250YWluZXJ9IGNsYXNzTmFtZT0ndm94ZWwtcGxhbmUnIG09J2F1dG8nIFxyXG4gICAgICAgICAgICBtdD17WyctMjBweCcsICctNjBweCcsICctMTIwcHgnXX1cclxuICAgICAgICAgICAgbWI9e1snLTQwcHgnLCAnLTE0MHB4JywgJy0yMDBweCddfVxyXG4gICAgICAgICAgICB3PXtbMjgwLCA0ODAsIDY0MF19XHJcbiAgICAgICAgICAgIGg9e1syODAsIDQ4MCwgNjQwXX1cclxuICAgICAgICAgICAgcG9zaXRpb249XCJyZWxhdGl2ZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgIHtsb2FkaW5nICYmIChcclxuICAgICAgICAgICAgPFNwaW5uZXIgXHJcbiAgICAgICAgICAgICAgICBzaXplPVwieGxcIiBwb3NpdGlvbj1cImFic29sdXRlXCIgXHJcbiAgICAgICAgICAgICAgICBsZWZ0PVwiNTAlXCIgdG9wPVwiNTAlXCIgXHJcbiAgICAgICAgICAgICAgICBtbD1cImNhbGMoMHB4IC0gdmFyKC0tc3Bpbm5lci1zaXplKSAvIDIpXCIgXHJcbiAgICAgICAgICAgICAgICBtdD1cImNhbGMoMHB4IC0gdmFyKC0tc3Bpbm5lci1zaXplKSlcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZveGVsTWNsYXJlbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZUNhbGxiYWNrIiwiVEhSRUUiLCJPcmJpdENvbnRyb2xzIiwibG9hZEdMVEZNb2RlbCIsIk1jbGFyZW5TcGlubmVyIiwiTWNsYXJlbkNvbnRhaW5lciIsImVhc2VPdXRDaXJjIiwieCIsIk1hdGgiLCJzcXJ0IiwicG93IiwiVm94ZWxNY2xhcmVuIiwicmVmQ29udGFpbmVyIiwibG9hZGluZyIsInNldExvYWRpbmciLCJyZWZSZW5kZSIsIl9jYW1lcmEiLCJzZXRDYW1lcmEiLCJ0YXJnZXQiLCJWZWN0b3IzIiwiaW5pdGlhbENhbWVyYVBvc2l0aW9uIiwic2luIiwiUEkiLCJjb3MiLCJzY2VuZSIsIlNjZW5lIiwiX2NvbnRyb2xzIiwic2V0Q29udHJvbHMiLCJoYW5kbGVXaW5kb3dSZXNpemUiLCJjdXJyZW50IiwiY29udGFpbmVyIiwicmVuZGVyZXIiLCJzY1ciLCJjbGllbnRXaWR0aCIsInNjSCIsImNsaWVudEhlaWdodCIsInNldFNpemUiLCJXZWJHTFJlbmRlcmVyIiwiYW50aWFsaWFzIiwiYWxwaGEiLCJzZXRQaXhlbFJhdGlvIiwid2luZG93IiwiZGV2aWNlUGl4ZWxSYXRpbyIsIm91dHB1dEVuY29kaW5nIiwic1JHQkVuY29kaW5nIiwiYXBwZW5kQ2hpbGQiLCJkb21FbGVtZW50Iiwic2V0UmVuZGVyZXIiLCJzY2FsZSIsImNhbWVyYSIsIk9ydGhvZ3JhcGhpY0NhbWVyYSIsInBvc2l0aW9uIiwiY29weSIsImxvb2tBdCIsImFtYmllbnRMaWdodCIsIkFtYmllbnRMaWdodCIsImFkZCIsImNvbnRyb2xzIiwiYXV0b1JvdGF0ZSIsInJlY2lldmVTaGFkb3ciLCJjYXN0U2hhZG93IiwidGhlbiIsImFuaW1hdGUiLCJyZXEiLCJmcmFtZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInAiLCJyb3RTcGVlZCIsInkiLCJ6IiwidXBkYXRlIiwicmVuZGVyIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJkaXNwb3NlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJCb3giLCJyZWYiLCJjbGFzc05hbWUiLCJtIiwibXQiLCJtYiIsInciLCJoIiwiU3Bpbm5lciIsInNpemUiLCJsZWZ0IiwidG9wIiwibWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/voxel-mclaren.js\n"));

/***/ })

});