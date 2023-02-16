"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("components_voxel-mclaren_js",{

/***/ "./components/voxel-mclaren.js":
/*!*************************************!*\
  !*** ./components/voxel-mclaren.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n/* harmony import */ var _lib_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/model */ \"./lib/model.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction easeOutCirc(x) {\n    return Math.sqrt(1 - Math.pow(x - 1, 4));\n}\nconst VoxelMclaren = ()=>{\n    _s();\n    const refContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const refRenderer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const MclarenGLB = \"/mclaren.glb\";\n    // const [renderer, setRenderer] = useState()\n    // const [_camera, setCamera] = useState()\n    // const [target] = useState(new THREE.Vector3(-0.5, 1.2, 0))\n    // const [initialCameraPosition] = useState(\n    //     new THREE.Vector3(\n    //         // Initial Positions\n    //         20 * Math.sin(0.2 * Math.PI),\n    //         10,\n    //         20 * Math.cos(0.2 * Math.PI)\n    //     )\n    //  )\n    // const [scene] = useState(new THREE.Scene())\n    // const [_controls, setControls] = useState()\n    const handleWindowResize = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{\n        const { current: renderer1  } = refRenderer;\n        const { current: container  } = refContainer;\n        if (container && renderer1) {\n            //Size of the container\n            const scW = container.clientWidth;\n            const scH = container.clientHeight;\n            renderer1.setSize(scW, scH);\n        }\n    }, []);\n    /* eslint-disable react-hooks/exhaustive-deps */ (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const { current: container  } = refContainer;\n        if (container) {\n            const scW = container.clientWidth;\n            const scH = container.clientHeight;\n            const renderer1 = new three__WEBPACK_IMPORTED_MODULE_3__.WebGLRenderer({\n                antialias: true,\n                alpha: true\n            });\n            renderer1.setPixelRatio(window.devicePixelRatio);\n            renderer1.setSize(scW, scH);\n            renderer1.outputEncoding = three__WEBPACK_IMPORTED_MODULE_3__.sRGBEncoding;\n            container.appendChild(renderer1.domElement);\n            refRenderer.current = renderer1;\n            const scene = new three__WEBPACK_IMPORTED_MODULE_3__.Scene();\n            const target = new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(-0.5, 1.2, 0);\n            //640-> 240\n            // 8 -> 6\n            const scale = scH * 0.005 + 8 //Initial Zoom \n            ;\n            const camera = new three__WEBPACK_IMPORTED_MODULE_3__.OrthographicCamera(-scale, scale, scale, -scale, 0.01, 50000);\n            camera.position.copy(initialCameraPosition);\n            camera.lookAt(target);\n            setCamera(camera);\n            const ambientLight = new three__WEBPACK_IMPORTED_MODULE_3__.AmbientLight(0xcccccc, 1);\n            scene.add(ambientLight);\n            const controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_4__.OrbitControls(camera, renderer1.domElement);\n            controls.autoRotate = true;\n            controls.target = target;\n            setControls(controls);\n            (0,_lib_model__WEBPACK_IMPORTED_MODULE_2__.loadGLTFModel)(scene, \"/mclaren.glb\", {\n                recieveShadow: false,\n                castShadow: false\n            }).then(()=>{\n                animate();\n                setLoading(false);\n            });\n            let req = null;\n            let frame = 0;\n            const animate = ()=>{\n                req = requestAnimationFrame(animate);\n                frame = frame <= 100 ? frame + 1 : frame;\n                if (frame <= 100) {\n                    const p = initialCameraPosition;\n                    const rotSpeed = easeOutCirc(frame / 120) * Math.PI * 20;\n                    camera.position.y = 10;\n                    camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);\n                    camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);\n                    camera.lookAt(target);\n                } else {\n                    controls.update();\n                }\n                renderer1.render(scene, camera);\n            };\n            return ()=>{\n                cancelAnimationFrame(req);\n                renderer1.dispose();\n            };\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.addEventListener(\"resize\", handleWindowResize, false);\n        return ()=>{\n            window.removeEventListener(\"resize\", handleWindowResize, false);\n        };\n    }, [\n        renderer,\n        handleWindowResize\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n        ref: refContainer,\n        className: \"voxel-plane\",\n        m: \"auto\",\n        mt: [\n            \"-20px\",\n            \"-60px\",\n            \"-120px\"\n        ],\n        mb: [\n            \"-40px\",\n            \"-140px\",\n            \"-200px\"\n        ],\n        w: [\n            280,\n            480,\n            640\n        ],\n        h: [\n            280,\n            480,\n            640\n        ],\n        position: \"relative\",\n        children: loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Spinner, {\n            size: \"xl\",\n            position: \"absolute\",\n            left: \"50%\",\n            top: \"50%\",\n            ml: \"calc(0px - var(--spinner-size) / 2)\",\n            mt: \"calc(0px - var(--spinner-size))\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\descr\\\\ernestoc14-homepage\\\\components\\\\voxel-mclaren.js\",\n            lineNumber: 135,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\descr\\\\ernestoc14-homepage\\\\components\\\\voxel-mclaren.js\",\n        lineNumber: 127,\n        columnNumber: 9\n    }, undefined);\n};\n_s(VoxelMclaren, \"zURt50pwc+mytDe3zC6SvtguxBo=\");\n_c = VoxelMclaren;\n/* harmony default export */ __webpack_exports__[\"default\"] = (VoxelMclaren);\nvar _c;\n$RefreshReg$(_c, \"VoxelMclaren\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UztTQUFTO1FBQ2hDQyxJQUFJO1lBQUM7WUFBUztZQUFVO1NBQVM7UUFDakNDLEdBQUc7WUFBQztZQUFLO1lBQUs7U0FBSTtRQUNsQkMsR0FBRztZQUFDO1lBQUs7WUFBSztTQUFJO1FBQ2xCckMsVUFBUztrQkFFWjlCLHlCQUNHLDhEQUFDWCxxREFBT0E7WUFDSitFLE1BQUs7WUFBS3RDLFVBQVM7WUFDbkJ1QyxNQUFLO1lBQU1DLEtBQUk7WUFDZkMsSUFBRztZQUNIUCxJQUFHOzs7Ozs7Ozs7OztBQUtuQjtHQXJJTWxFO0tBQUFBO0FBdUlOLCtEQUFlQSxZQUFZQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdm94ZWwtbWNsYXJlbi5qcz83MDZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQm94LCBTcGlubmVyIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcclxuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnXHJcbmltcG9ydCB7IE9yYml0Q29udHJvbHMgfSBmcm9tICd0aHJlZS9leGFtcGxlcy9qc20vY29udHJvbHMvT3JiaXRDb250cm9scydcclxuaW1wb3J0IHsgbG9hZEdMVEZNb2RlbCB9IGZyb20gJy4uL2xpYi9tb2RlbCdcclxuXHJcbmZ1bmN0aW9uIGVhc2VPdXRDaXJjKHgpe1xyXG4gICAgcmV0dXJuIE1hdGguc3FydCgxIC0gTWF0aC5wb3coeCAtIDEsNCkpXHJcbn1cclxuXHJcbmNvbnN0IFZveGVsTWNsYXJlbiA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJlZkNvbnRhaW5lciA9IHVzZVJlZigpXHJcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxyXG4gICAgY29uc3QgcmVmUmVuZGVyZXIgPSB1c2VSZWYoKVxyXG4gICAgY29uc3QgTWNsYXJlbkdMQiA9ICcvbWNsYXJlbi5nbGInXHJcbiAgICAvLyBjb25zdCBbcmVuZGVyZXIsIHNldFJlbmRlcmVyXSA9IHVzZVN0YXRlKClcclxuICAgIC8vIGNvbnN0IFtfY2FtZXJhLCBzZXRDYW1lcmFdID0gdXNlU3RhdGUoKVxyXG4gICAgLy8gY29uc3QgW3RhcmdldF0gPSB1c2VTdGF0ZShuZXcgVEhSRUUuVmVjdG9yMygtMC41LCAxLjIsIDApKVxyXG4gICAgLy8gY29uc3QgW2luaXRpYWxDYW1lcmFQb3NpdGlvbl0gPSB1c2VTdGF0ZShcclxuICAgIC8vICAgICBuZXcgVEhSRUUuVmVjdG9yMyhcclxuICAgIC8vICAgICAgICAgLy8gSW5pdGlhbCBQb3NpdGlvbnNcclxuICAgIC8vICAgICAgICAgMjAgKiBNYXRoLnNpbigwLjIgKiBNYXRoLlBJKSxcclxuICAgIC8vICAgICAgICAgMTAsXHJcbiAgICAvLyAgICAgICAgIDIwICogTWF0aC5jb3MoMC4yICogTWF0aC5QSSlcclxuICAgIC8vICAgICApXHJcbiAgICAvLyAgKVxyXG4gICAgLy8gY29uc3QgW3NjZW5lXSA9IHVzZVN0YXRlKG5ldyBUSFJFRS5TY2VuZSgpKVxyXG4gICAgLy8gY29uc3QgW19jb250cm9scywgc2V0Q29udHJvbHNdID0gdXNlU3RhdGUoKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVdpbmRvd1Jlc2l6ZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBjb25zdCB7IGN1cnJlbnQ6IHJlbmRlcmVyfSA9IHJlZlJlbmRlcmVyXHJcbiAgICAgICAgY29uc3QgeyBjdXJyZW50OiBjb250YWluZXJ9ID0gcmVmQ29udGFpbmVyXHJcbiAgICAgICAgaWYoY29udGFpbmVyICYmIHJlbmRlcmVyKXtcclxuICAgICAgICAgICAgLy9TaXplIG9mIHRoZSBjb250YWluZXJcclxuICAgICAgICAgICAgY29uc3Qgc2NXID0gY29udGFpbmVyLmNsaWVudFdpZHRoXHJcbiAgICAgICAgICAgIGNvbnN0IHNjSCA9IGNvbnRhaW5lci5jbGllbnRIZWlnaHRcclxuXHJcbiAgICAgICAgICAgIHJlbmRlcmVyLnNldFNpemUoc2NXLCBzY0gpXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzICovXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgY3VycmVudDogY29udGFpbmVyfSA9IHJlZkNvbnRhaW5lclxyXG4gICAgICAgIGlmKGNvbnRhaW5lcil7XHJcbiAgICAgICAgICAgIGNvbnN0IHNjVyA9IGNvbnRhaW5lci5jbGllbnRXaWR0aFxyXG4gICAgICAgICAgICBjb25zdCBzY0ggPSBjb250YWluZXIuY2xpZW50SGVpZ2h0XHJcblxyXG4gICAgICAgICAgICBjb25zdCByZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHtcclxuICAgICAgICAgICAgICAgIGFudGlhbGlhczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGFscGhhOiB0cnVlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJlbmRlcmVyLnNldFBpeGVsUmF0aW8od2luZG93LmRldmljZVBpeGVsUmF0aW8pXHJcbiAgICAgICAgICAgIHJlbmRlcmVyLnNldFNpemUoc2NXLCBzY0gpXHJcbiAgICAgICAgICAgIHJlbmRlcmVyLm91dHB1dEVuY29kaW5nID0gVEhSRUUuc1JHQkVuY29kaW5nXHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyZW5kZXJlci5kb21FbGVtZW50KVxyXG4gICAgICAgICAgICByZWZSZW5kZXJlci5jdXJyZW50ID0gcmVuZGVyZXJcclxuICAgICAgICAgICAgY29uc3Qgc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKVxyXG5cclxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gbmV3IFRIUkVFLlZlY3RvcjMoLTAuNSwgMS4yLCAwKVxyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIC8vNjQwLT4gMjQwXHJcbiAgICAgICAgICAgIC8vIDggLT4gNlxyXG4gICAgICAgICAgICBjb25zdCBzY2FsZSA9IHNjSCAqIDAuMDA1ICsgOCAvL0luaXRpYWwgWm9vbSBcclxuICAgICAgICAgICAgY29uc3QgY2FtZXJhID0gbmV3IFRIUkVFLk9ydGhvZ3JhcGhpY0NhbWVyYShcclxuICAgICAgICAgICAgICAgIC1zY2FsZSxcclxuICAgICAgICAgICAgICAgIHNjYWxlLFxyXG4gICAgICAgICAgICAgICAgc2NhbGUsXHJcbiAgICAgICAgICAgICAgICAtc2NhbGUsXHJcbiAgICAgICAgICAgICAgICAwLjAxLFxyXG4gICAgICAgICAgICAgICAgNTAwMDBcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICBjYW1lcmEucG9zaXRpb24uY29weShpbml0aWFsQ2FtZXJhUG9zaXRpb24pXHJcbiAgICAgICAgICAgIGNhbWVyYS5sb29rQXQodGFyZ2V0KVxyXG4gICAgICAgICAgICBzZXRDYW1lcmEoY2FtZXJhKVxyXG5cclxuICAgICAgICAgICAgY29uc3QgYW1iaWVudExpZ2h0ID0gbmV3IFRIUkVFLkFtYmllbnRMaWdodCgweGNjY2NjYywgMSlcclxuICAgICAgICAgICAgc2NlbmUuYWRkKGFtYmllbnRMaWdodClcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRyb2xzID0gbmV3IE9yYml0Q29udHJvbHMoY2FtZXJhLCByZW5kZXJlci5kb21FbGVtZW50KVxyXG4gICAgICAgICAgICBjb250cm9scy5hdXRvUm90YXRlID0gdHJ1ZVxyXG4gICAgICAgICAgICBjb250cm9scy50YXJnZXQgPSB0YXJnZXRcclxuICAgICAgICAgICAgc2V0Q29udHJvbHMoIGNvbnRyb2xzKVxyXG5cclxuICAgICAgICAgICAgbG9hZEdMVEZNb2RlbChzY2VuZSwgJy9tY2xhcmVuLmdsYicsIHtcclxuICAgICAgICAgICAgICAgIHJlY2lldmVTaGFkb3c6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY2FzdFNoYWRvdzogZmFsc2VcclxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRlKClcclxuICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGxldCByZXEgPSBudWxsXHJcbiAgICAgICAgICAgIGxldCBmcmFtZSA9IDBcclxuICAgICAgICAgICAgY29uc3QgYW5pbWF0ZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlcSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKVxyXG4gICAgICAgICAgICAgICAgZnJhbWUgPSBmcmFtZSA8PSAxMDAgPyBmcmFtZSArIDEgOiBmcmFtZVxyXG5cclxuICAgICAgICAgICAgICAgIGlmKGZyYW1lIDw9IDEwMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcCA9IGluaXRpYWxDYW1lcmFQb3NpdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvdFNwZWVkID0gZWFzZU91dENpcmMoZnJhbWUgLyAxMjApICogTWF0aC5QSSAqIDIwXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBjYW1lcmEucG9zaXRpb24ueSA9IDEwXHJcbiAgICAgICAgICAgICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnggPSBwLnggKiBNYXRoLmNvcyhyb3RTcGVlZCkrIHAueiAqIE1hdGguc2luKHJvdFNwZWVkKVxyXG4gICAgICAgICAgICAgICAgICAgIGNhbWVyYS5wb3NpdGlvbi56ID0gcC56ICogTWF0aC5jb3Mocm90U3BlZWQpLSBwLnggKiBNYXRoLnNpbihyb3RTcGVlZClcclxuICAgICAgICAgICAgICAgICAgICBjYW1lcmEubG9va0F0KHRhcmdldClcclxuICAgICAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250cm9scy51cGRhdGUoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJlcSlcclxuICAgICAgICAgICAgICAgIHJlbmRlcmVyLmRpc3Bvc2UoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlV2luZG93UmVzaXplLCBmYWxzZSlcclxuICAgICAgICByZXR1cm4oKSA9PiB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVXaW5kb3dSZXNpemUsIGZhbHNlKVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtyZW5kZXJlciwgaGFuZGxlV2luZG93UmVzaXplXSlcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPEJveCByZWY9e3JlZkNvbnRhaW5lcn0gY2xhc3NOYW1lPSd2b3hlbC1wbGFuZScgbT0nYXV0bycgXHJcbiAgICAgICAgICAgIG10PXtbJy0yMHB4JywgJy02MHB4JywgJy0xMjBweCddfVxyXG4gICAgICAgICAgICBtYj17WyctNDBweCcsICctMTQwcHgnLCAnLTIwMHB4J119XHJcbiAgICAgICAgICAgIHc9e1syODAsIDQ4MCwgNjQwXX1cclxuICAgICAgICAgICAgaD17WzI4MCwgNDgwLCA2NDBdfVxyXG4gICAgICAgICAgICBwb3NpdGlvbj1cInJlbGF0aXZlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAge2xvYWRpbmcgJiYgKFxyXG4gICAgICAgICAgICA8U3Bpbm5lciBcclxuICAgICAgICAgICAgICAgIHNpemU9XCJ4bFwiIHBvc2l0aW9uPVwiYWJzb2x1dGVcIiBcclxuICAgICAgICAgICAgICAgIGxlZnQ9XCI1MCVcIiB0b3A9XCI1MCVcIiBcclxuICAgICAgICAgICAgICAgIG1sPVwiY2FsYygwcHggLSB2YXIoLS1zcGlubmVyLXNpemUpIC8gMilcIiBcclxuICAgICAgICAgICAgICAgIG10PVwiY2FsYygwcHggLSB2YXIoLS1zcGlubmVyLXNpemUpKVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8L0JveD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVm94ZWxNY2xhcmVuXHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZUNhbGxiYWNrIiwiQm94IiwiU3Bpbm5lciIsIlRIUkVFIiwiT3JiaXRDb250cm9scyIsImxvYWRHTFRGTW9kZWwiLCJlYXNlT3V0Q2lyYyIsIngiLCJNYXRoIiwic3FydCIsInBvdyIsIlZveGVsTWNsYXJlbiIsInJlZkNvbnRhaW5lciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicmVmUmVuZGVyZXIiLCJNY2xhcmVuR0xCIiwiaGFuZGxlV2luZG93UmVzaXplIiwiY3VycmVudCIsInJlbmRlcmVyIiwiY29udGFpbmVyIiwic2NXIiwiY2xpZW50V2lkdGgiLCJzY0giLCJjbGllbnRIZWlnaHQiLCJzZXRTaXplIiwiV2ViR0xSZW5kZXJlciIsImFudGlhbGlhcyIsImFscGhhIiwic2V0UGl4ZWxSYXRpbyIsIndpbmRvdyIsImRldmljZVBpeGVsUmF0aW8iLCJvdXRwdXRFbmNvZGluZyIsInNSR0JFbmNvZGluZyIsImFwcGVuZENoaWxkIiwiZG9tRWxlbWVudCIsInNjZW5lIiwiU2NlbmUiLCJ0YXJnZXQiLCJWZWN0b3IzIiwic2NhbGUiLCJjYW1lcmEiLCJPcnRob2dyYXBoaWNDYW1lcmEiLCJwb3NpdGlvbiIsImNvcHkiLCJpbml0aWFsQ2FtZXJhUG9zaXRpb24iLCJsb29rQXQiLCJzZXRDYW1lcmEiLCJhbWJpZW50TGlnaHQiLCJBbWJpZW50TGlnaHQiLCJhZGQiLCJjb250cm9scyIsImF1dG9Sb3RhdGUiLCJzZXRDb250cm9scyIsInJlY2lldmVTaGFkb3ciLCJjYXN0U2hhZG93IiwidGhlbiIsImFuaW1hdGUiLCJyZXEiLCJmcmFtZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInAiLCJyb3RTcGVlZCIsIlBJIiwieSIsImNvcyIsInoiLCJzaW4iLCJ1cGRhdGUiLCJyZW5kZXIiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImRpc3Bvc2UiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlZiIsImNsYXNzTmFtZSIsIm0iLCJtdCIsIm1iIiwidyIsImgiLCJzaXplIiwibGVmdCIsInRvcCIsIm1sIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/voxel-mclaren.js\n"));

/***/ })

});