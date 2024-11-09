/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst electron_1 = __webpack_require__(/*! electron */ \"electron\");\nconst path = __importStar(__webpack_require__(/*! path */ \"path\"));\nconst http = __importStar(__webpack_require__(/*! http */ \"http\"));\nfunction createWindow() {\n    let mainWindow = new electron_1.BrowserWindow({\n        width: 1600,\n        height: 900,\n        icon: path.resolve(__dirname, 'assets/icons/pipoca.png'),\n        webPreferences: {\n            preload: path.join(__dirname, 'preload.js'),\n            contextIsolation: true,\n            nodeIntegration: false,\n        },\n    });\n    // Load `loading.html` initially\n    mainWindow.loadFile(path.join(__dirname, '../public/loading.html'));\n    const loadURL = (url) => {\n        mainWindow.loadURL(url).catch((err) => {\n            console.error(`Failed to load ${url}:`, err);\n            setTimeout(() => loadURL(url), 500); // Retry after 500ms\n        });\n    };\n    if (true) {\n        // Continuously retry loading until the dev server is ready\n        const devServerUrl = 'http://localhost:3000';\n        const checkServer = () => {\n            http.get(devServerUrl, (res) => {\n                if (res.statusCode === 200) {\n                    loadURL(devServerUrl); // Load the URL if the server is ready\n                }\n                else {\n                    setTimeout(checkServer, 500); // Retry after 500ms\n                }\n            }).on('error', () => {\n                setTimeout(checkServer, 500); // Retry after 500ms if connection fails\n            });\n        };\n        checkServer();\n    }\n    else {}\n    mainWindow.on('closed', () => {\n        mainWindow = null;\n    });\n}\nelectron_1.app.on('before-quit', () => {\n    console.log('before-quit', process.env.ELECTRON_DEV);\n    if (process.env.ELECTRON_DEV) {\n        // Kill Webpack Dev Server or any other running process\n        process.exit(0); // Force exit to close all subprocesses\n    }\n});\nelectron_1.app.whenReady().then(createWindow);\nelectron_1.app.on('window-all-closed', () => {\n    if (process.platform !== 'darwin')\n        electron_1.app.quit();\n});\nelectron_1.app.on('activate', () => {\n    if (electron_1.BrowserWindow.getAllWindows().length === 0)\n        createWindow();\n});\n\n\n//# sourceURL=webpack://myelectronplayern/./src/main.ts?");

/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("electron");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;