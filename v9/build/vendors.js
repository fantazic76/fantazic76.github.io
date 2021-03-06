(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~main"],{

/***/ "./designDependencies.js":
/*!*******************************!*\
  !*** ./designDependencies.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {


const designs = {}

// The packages are passed in through a template
designs["@framer/gaearon.delay"] = {
  "version" : 41,
  "root" : {
    "parentid" : null,
    "children" : [
      {
        "radius" : 0,
        "children" : [

        ],
        "centerAnchorX" : 0,
        "id" : "WAKTYY0K_",
        "exportOptions" : [

        ],
        "grayScaleEnabled" : 0,
        "fillImagePixelHeight" : null,
        "fillImagePixelWidth" : null,
        "constraintsLocked" : false,
        "fillImageResize" : "fill",
        "aspectRatio" : null,
        "blurType" : "layer",
        "storeEnabled" : false,
        "fillColor" : "rgba(255,255,255,1)",
        "grayscale" : 0,
        "codeComponentProps" : {
          "delay" : 1,
          "indicatorColor" : "rgba(142,142,147,100)"
        },
        "top" : 190,
        "saturate" : 100,
        "left" : 359,
        "locked" : false,
        "sepiaEnabled" : 0,
        "fillGradient" : {
          "end" : "rgba(0,0,0,0)",
          "alpha" : 1,
          "angle" : 0,
          "__class" : "LinearGradient",
          "start" : "black"
        },
        "sepia" : 0,
        "radiusTopLeft" : 0,
        "blur" : 12,
        "borderColor" : "#222",
        "rotation" : 0,
        "borderLeft" : 1,
        "fillEnabled" : false,
        "right" : null,
        "opacity" : 1,
        "codeComponentIdentifier" : ".\/Delay.tsx_Delay",
        "originalid" : null,
        "widthType" : 0,
        "name" : null,
        "contrast" : 100,
        "centerAnchorY" : 0,
        "height" : 411,
        "borderWidth" : 1,
        "radiusIsRelative" : false,
        "hueRotate" : 0,
        "borderStyle" : "solid",
        "brightnessEnabled" : 0,
        "borderPerSide" : false,
        "saturateEnabled" : 0,
        "borderRight" : 1,
        "parentid" : "s649Rn_sM",
        "intrinsicWidth" : 200,
        "radiusBottomLeft" : 0,
        "boxShadows" : [

        ],
        "contrastEnabled" : 0,
        "borderEnabled" : 0,
        "radiusPerCorner" : false,
        "radiusTopRight" : 0,
        "invert" : 0,
        "__class" : "CodeComponentNode",
        "visible" : true,
        "heightType" : 0,
        "fillType" : "color",
        "fillImage" : null,
        "clip" : true,
        "storeIdentifier" : null,
        "hueRotateEnabled" : 0,
        "width" : 560,
        "intrinsicHeight" : 200,
        "borderBottom" : 1,
        "brightness" : 100,
        "bottom" : null,
        "borderTop" : 1,
        "radiusBottomRight" : 0,
        "invertEnabled" : 0,
        "blurEnabled" : 0
      }
    ],
    "id" : "s649Rn_sM",
    "visible" : false,
    "__class" : "RootNode",
    "originalid" : null,
    "startPoint" : null,
    "name" : null
  }
}

module.exports = designs


/***/ }),

/***/ "framer-package-loader.js!./node_modules/@framer/gaearon.delay/build/index.js":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** /Applications/Framer X.app/Contents/Resources/Server/node_modules/@framerjs/build-library/build/Compiler/loaders/framer-package-loader.js!./node_modules/@framer/gaearon.delay/build/index.js ***!
  \*****************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(/*! framer */ "framer"), __webpack_require__(/*! react */ "react"));
	else { var i, a; }
})(window, function(__WEBPACK_EXTERNAL_MODULE_framer__, __WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./package.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./code sync recursive \\.(t|j)s(x?)|\\.css$":
/*!***************************************!*\
  !*** ./code sync \.(t|j)s(x?)|\.css$ ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./Delay.tsx\": \"./code/Delay.tsx\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\tvar module = __webpack_require__(id);\n\treturn module;\n}\nfunction webpackContextResolve(req) {\n\tvar id = map[req];\n\tif(!(id + 1)) { // check for number or string\n\t\tvar e = new Error('Cannot find module \"' + req + '\".');\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn id;\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./code sync recursive \\\\.(t|j)s(x?)|\\\\.css$\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb2RlIHN5bmMgXFwuKHR8ailzKHgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9jb2RlIHN5bmMgcmVjdXJzaXZlIFxcLih0fGopcyh4Pyl8XFwuY3NzJC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9EZWxheS50c3hcIjogXCIuL2NvZGUvRGVsYXkudHN4XCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG5cdHJldHVybiBtb2R1bGU7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHZhciBpZCA9IG1hcFtyZXFdO1xuXHRpZighKGlkICsgMSkpIHsgLy8gY2hlY2sgZm9yIG51bWJlciBvciBzdHJpbmdcblx0XHR2YXIgZSA9IG5ldyBFcnJvcignQ2Fubm90IGZpbmQgbW9kdWxlIFwiJyArIHJlcSArICdcIi4nKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gaWQ7XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2NvZGUgc3luYyByZWN1cnNpdmUgXFxcXC4odHxqKXMoeD8pfFxcXFwuY3NzJFwiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./code sync recursive \\.(t|j)s(x?)|\\.css$\n");

/***/ }),

/***/ "./code/Delay.tsx":
/*!************************!*\
  !*** ./code/Delay.tsx ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst React = __webpack_require__(/*! react */ \"react\");\nconst framer_1 = __webpack_require__(/*! framer */ \"framer\");\nclass Delay extends React.Component {\n    constructor() {\n        super(...arguments);\n        this.lastTick = performance.now();\n        this.rotation = framer_1.Animatable(0);\n        this.state = { ready: false };\n        this.tick = () => {\n            const { lastTick } = this;\n            const currentTime = performance.now();\n            this.rafHandle = window.requestAnimationFrame(this.tick);\n            if (currentTime - lastTick < 120)\n                return;\n            this.lastTick = currentTime;\n            this.rotation.set(framer_1.Animatable.getNumber(this.rotation) + 360 / 12);\n        };\n    }\n    componentDidMount() {\n        window[\"__checkBudget__\"]();\n        this.tick();\n        this.timeout = setTimeout(() => {\n            this.setState({ ready: true });\n        }, this.props.delay * 1000);\n    }\n    componentWillUnmount() {\n        window[\"__checkBudget__\"]();\n        clearTimeout(this.timeout);\n        window.cancelAnimationFrame(this.rafHandle);\n    }\n    render() {\n        window[\"__checkBudget__\"]();\n        const { children, width, height, indicatorColor } = this.props;\n        const { ready } = this.state;\n        const dots = [];\n        for (let i = 0, il = numberOfDots; i < il; i++) {\n            window[\"__checkBudget__\"]();\n            const dot = (React.createElement(framer_1.Frame, { key: i, width: dotWidth, height: dotHeight, radius: dotWidth, background: indicatorColor, rotation: -i * (360 / numberOfDots), top: 0, opacity: 1 - 0.05 * i, originY: totalSize / 2 / dotHeight }));\n            dots.push(dot);\n        }\n        if (React.Children.count(this.props.children) !== 1) {\n            return (React.createElement(\"div\", { style: hintStyle }, \"Connect the purple outlet to the frame that represents the final state.\"));\n        }\n        if (ready) {\n            return (React.createElement(framer_1.Frame, Object.assign({}, this.props, { overflow: \"hidden\" }), children));\n        }\n        return (React.createElement(framer_1.Frame, { width: totalSize, height: totalSize, parentSize: { width, height }, rotation: this.rotation, background: null }, dots));\n    }\n}\nDelay.defaultProps = {\n    indicatorColor: \"rgba(142,142,147,100)\",\n    width: 200,\n    height: 200,\n    delay: 1,\n};\nDelay.propertyControls = {\n    indicatorColor: { type: framer_1.ControlType.Color, title: \"Indicator\" },\n    delay: { type: framer_1.ControlType.Number, min: 0, max: 5, title: \"Seconds\" },\n};\nexports.Delay = Delay;\nconst hintStyle = {\n    height: \"100%\",\n    display: \"flex\",\n    alignItems: \"center\",\n    justifyContent: \"center\",\n    textAlign: \"center\",\n    color: \"#8855FF\",\n    background: \"rgba(136, 85, 255, 0.1)\",\n    overflow: \"hidden\",\n    padding: 20\n};\nconst numberOfDots = 12;\nconst totalSize = 20;\nconst dotWidth = 2;\nconst dotHeight = 5;\nexports.__info__ = [{ name: \"Delay\", children: true, type: \"component\" }];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb2RlL0RlbGF5LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0EsbUJBQW1CLFdBQVc7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGNBQWM7QUFDekMsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLDBDQUEwQztBQUN6RCxlQUFlLFFBQVE7QUFDdkI7QUFDQSwwQ0FBMEMsUUFBUTtBQUNsRDtBQUNBLDhEQUE4RCxtTUFBbU07QUFDalE7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELG1CQUFtQjtBQUNuRTtBQUNBO0FBQ0Esd0VBQXdFLGVBQWUscUJBQXFCO0FBQzVHO0FBQ0EscURBQXFELG1EQUFtRCxnQkFBZ0IsNkNBQTZDO0FBQ3JLO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQix1REFBdUQ7QUFDNUUsWUFBWSxzRUFBc0U7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixtREFBbUQiLCJmaWxlIjoiLi9jb2RlL0RlbGF5LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5jb25zdCBmcmFtZXJfMSA9IHJlcXVpcmUoXCJmcmFtZXJcIik7XG5jbGFzcyBEZWxheSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMubGFzdFRpY2sgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgdGhpcy5yb3RhdGlvbiA9IGZyYW1lcl8xLkFuaW1hdGFibGUoMCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7IHJlYWR5OiBmYWxzZSB9O1xuICAgICAgICB0aGlzLnRpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IGxhc3RUaWNrIH0gPSB0aGlzO1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgICAgIHRoaXMucmFmSGFuZGxlID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnRpY2spO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRUaW1lIC0gbGFzdFRpY2sgPCAxMjApXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgdGhpcy5sYXN0VGljayA9IGN1cnJlbnRUaW1lO1xuICAgICAgICAgICAgdGhpcy5yb3RhdGlvbi5zZXQoZnJhbWVyXzEuQW5pbWF0YWJsZS5nZXROdW1iZXIodGhpcy5yb3RhdGlvbikgKyAzNjAgLyAxMik7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB3aW5kb3dbXCJfX2NoZWNrQnVkZ2V0X19cIl0oKTtcbiAgICAgICAgdGhpcy50aWNrKCk7XG4gICAgICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJlYWR5OiB0cnVlIH0pO1xuICAgICAgICB9LCB0aGlzLnByb3BzLmRlbGF5ICogMTAwMCk7XG4gICAgfVxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB3aW5kb3dbXCJfX2NoZWNrQnVkZ2V0X19cIl0oKTtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG4gICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnJhZkhhbmRsZSk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4sIHdpZHRoLCBoZWlnaHQsIGluZGljYXRvckNvbG9yIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCB7IHJlYWR5IH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBjb25zdCBkb3RzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBpbCA9IG51bWJlck9mRG90czsgaSA8IGlsOyBpKyspIHtcbiAgICAgICAgICAgIHdpbmRvd1tcIl9fY2hlY2tCdWRnZXRfX1wiXSgpO1xuICAgICAgICAgICAgY29uc3QgZG90ID0gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoZnJhbWVyXzEuRnJhbWUsIHsga2V5OiBpLCB3aWR0aDogZG90V2lkdGgsIGhlaWdodDogZG90SGVpZ2h0LCByYWRpdXM6IGRvdFdpZHRoLCBiYWNrZ3JvdW5kOiBpbmRpY2F0b3JDb2xvciwgcm90YXRpb246IC1pICogKDM2MCAvIG51bWJlck9mRG90cyksIHRvcDogMCwgb3BhY2l0eTogMSAtIDAuMDUgKiBpLCBvcmlnaW5ZOiB0b3RhbFNpemUgLyAyIC8gZG90SGVpZ2h0IH0pKTtcbiAgICAgICAgICAgIGRvdHMucHVzaChkb3QpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChSZWFjdC5DaGlsZHJlbi5jb3VudCh0aGlzLnByb3BzLmNoaWxkcmVuKSAhPT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IGhpbnRTdHlsZSB9LCBcIkNvbm5lY3QgdGhlIHB1cnBsZSBvdXRsZXQgdG8gdGhlIGZyYW1lIHRoYXQgcmVwcmVzZW50cyB0aGUgZmluYWwgc3RhdGUuXCIpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVhZHkpIHtcbiAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChmcmFtZXJfMS5GcmFtZSwgT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wcm9wcywgeyBvdmVyZmxvdzogXCJoaWRkZW5cIiB9KSwgY2hpbGRyZW4pKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoZnJhbWVyXzEuRnJhbWUsIHsgd2lkdGg6IHRvdGFsU2l6ZSwgaGVpZ2h0OiB0b3RhbFNpemUsIHBhcmVudFNpemU6IHsgd2lkdGgsIGhlaWdodCB9LCByb3RhdGlvbjogdGhpcy5yb3RhdGlvbiwgYmFja2dyb3VuZDogbnVsbCB9LCBkb3RzKSk7XG4gICAgfVxufVxuRGVsYXkuZGVmYXVsdFByb3BzID0ge1xuICAgIGluZGljYXRvckNvbG9yOiBcInJnYmEoMTQyLDE0MiwxNDcsMTAwKVwiLFxuICAgIHdpZHRoOiAyMDAsXG4gICAgaGVpZ2h0OiAyMDAsXG4gICAgZGVsYXk6IDEsXG59O1xuRGVsYXkucHJvcGVydHlDb250cm9scyA9IHtcbiAgICBpbmRpY2F0b3JDb2xvcjogeyB0eXBlOiBmcmFtZXJfMS5Db250cm9sVHlwZS5Db2xvciwgdGl0bGU6IFwiSW5kaWNhdG9yXCIgfSxcbiAgICBkZWxheTogeyB0eXBlOiBmcmFtZXJfMS5Db250cm9sVHlwZS5OdW1iZXIsIG1pbjogMCwgbWF4OiA1LCB0aXRsZTogXCJTZWNvbmRzXCIgfSxcbn07XG5leHBvcnRzLkRlbGF5ID0gRGVsYXk7XG5jb25zdCBoaW50U3R5bGUgPSB7XG4gICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICBjb2xvcjogXCIjODg1NUZGXCIsXG4gICAgYmFja2dyb3VuZDogXCJyZ2JhKDEzNiwgODUsIDI1NSwgMC4xKVwiLFxuICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICAgIHBhZGRpbmc6IDIwXG59O1xuY29uc3QgbnVtYmVyT2ZEb3RzID0gMTI7XG5jb25zdCB0b3RhbFNpemUgPSAyMDtcbmNvbnN0IGRvdFdpZHRoID0gMjtcbmNvbnN0IGRvdEhlaWdodCA9IDU7XG5leHBvcnRzLl9faW5mb19fID0gW3sgbmFtZTogXCJEZWxheVwiLCBjaGlsZHJlbjogdHJ1ZSwgdHlwZTogXCJjb21wb25lbnRcIiB9XTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./code/Delay.tsx\n");

/***/ }),

/***/ "./package.js":
/*!********************!*\
  !*** ./package.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// The template for the dynamic webpack entry. Be aware of the variables\n\nconst packageJson = __webpack_require__(/*! ./package.json */ \"./package.json\")\n\nconst package = {\n    packageJson,\n    sourceModules: {},\n    dependencies: {},\n}\n\n// This is a special webpack thing that watches the whole directory\n// https://github.com/webpack/docs/wiki/context\nconst ctx = __webpack_require__(\"./code sync recursive \\\\.(t|j)s(x?)|\\\\.css$\")\n\nctx.keys().forEach(key => {\n    package.sourceModules[key] = () => ctx(key)\n})\n\n// The packages are passed in through a template\nconst packages = {}\n\n                packages[\"framer\"] = () => {\n                    var package = {}\n                    try {\n                        package = __webpack_require__(/*! framer */ \"framer\")\n                    } catch (e) {\n                        console.log(e)\n                    }\n                    package.__framer__ = package.__framer__ || {}\n                    package.__framer__.packageJson = {\"name\":\"framer\",\"version\":\"0.1.27\",\"main\":\"build/framer.js\",\"types\":\"build/framer.d.ts\",\"author\":\"Framer\",\"license\":\"UNLICENSED\",\"devDependencies\":{\"@types/chalk\":\"^2.2.0\",\"@types/draft-js\":\"0.10.19\",\"@types/enzyme\":\"^3.1.10\",\"@types/hsluv\":\"https://github.com/framer/typed_hsluv#bump\",\"@types/jest\":\"^23.0.0\",\"@types/jest-diff\":\"^20.0.0\",\"@types/node\":\"^9.6.0\",\"@types/react\":\"16.3.12\",\"@types/react-dom\":\"^16.0.5\",\"cache-loader\":\"^1.2.2\",\"chalk\":\"^2.4.1\",\"convert-tsconfig-paths-to-webpack-aliases\":\"^0.9.2\",\"css.escape\":\"^1.5.1\",\"dts-bundle\":\"^0.7.3\",\"enzyme\":\"^3.3.0\",\"enzyme-adapter-react-16\":\"^1.1.1\",\"fork-ts-checker-webpack-plugin\":\"^0.4.1\",\"hoist-non-react-statics\":\"^2.5.0\",\"jest\":\"^23.1.0\",\"jest-diff\":\"^22.0.3\",\"jest-junit\":\"^3.4.1\",\"progress-bar-webpack-plugin\":\"^1.11.0\",\"raf\":\"^3.4.0\",\"react\":\"^16.3.2\",\"react-dev-utils\":\"^5.0.1\",\"react-dom\":\"^16.3.2\",\"ts-jest\":\"^22.4.5\",\"ts-loader\":\"^4.1.0\",\"tslint\":\"^5.10.0\",\"tslint-microsoft-contrib\":\"^5.0.3\",\"typescript\":\"^2.8.3\",\"watch\":\"^1.0.2\",\"webpack\":\"^4.4.1\",\"webpack-cli\":\"^2.0.13\",\"webpack-dev-server\":\"^3.1.4\",\"xcssmatrix\":\"^0.2.2\"},\"peerDependencies\":{\"react\":\"^16.3.2\",\"react-dom\":\"^16.3.2\"},\"dependencies\":{\"draft-js\":\"0.10.4\",\"eventemitter3\":\"^3.1.0\",\"hsluv\":\"^0.0.3\",\"immutable\":\"^3.8.2\"},\"framer\":{\"components\":[{\"name\":\"Scroll\",\"children\":true,\"properties\":[{\"key\":\"direction\",\"title\":\"Direction\",\"kind\":\"enum\",\"options\":[\"horizontal\",\"vertical\",\"both\"]}]},{\"name\":\"Page\",\"children\":true},{\"name\":\"Stack\",\"children\":true},{\"name\":\"FramerAppleWatch38\",\"type\":\"device\"},{\"name\":\"FramerAppleWatch42\",\"type\":\"device\"},{\"name\":\"FramerSonySmartWatch\",\"type\":\"device\"},{\"name\":\"FramerAppleIPhoneSE\",\"type\":\"device\"},{\"name\":\"FramerAppleIPhone8\",\"type\":\"device\"},{\"name\":\"FramerAppleIPhone8Plus\",\"type\":\"device\"},{\"name\":\"FramerAppleIPhoneX\",\"type\":\"device\"},{\"name\":\"FramerGoogleNexus4\",\"type\":\"device\"},{\"name\":\"FramerGoogleNexus5X\",\"type\":\"device\"},{\"name\":\"FramerGoogleNexus6\",\"type\":\"device\"},{\"name\":\"FramerGooglePixel2\",\"type\":\"device\"},{\"name\":\"FramerGooglePixel2XL\",\"type\":\"device\"},{\"name\":\"FramerHTCOneA9\",\"type\":\"device\"},{\"name\":\"FramerMicrosoftLumia950\",\"type\":\"device\"},{\"name\":\"FramerSamsungNote5\",\"type\":\"device\"},{\"name\":\"FramerSamsungGalaxyS8\",\"type\":\"device\"},{\"name\":\"FramerAppleIPadAir\",\"type\":\"device\"},{\"name\":\"FramerAppleIPadMini\",\"type\":\"device\"},{\"name\":\"FramerAppleIPadPro\",\"type\":\"device\"},{\"name\":\"FramerGoogleNexusTablet\",\"type\":\"device\"},{\"name\":\"FramerMicrosoftSurfacePro3\",\"type\":\"device\"},{\"name\":\"FramerMicrosoftSurfacePro4\",\"type\":\"device\"},{\"name\":\"FramerAppleIMac\",\"type\":\"device\"},{\"name\":\"FramerAppleThunderboltDisplay\",\"type\":\"device\"},{\"name\":\"FramerAppleMacBook\",\"type\":\"device\"},{\"name\":\"FramerAppleMacBookAir\",\"type\":\"device\"},{\"name\":\"FramerAppleMacBookPro\",\"type\":\"device\"},{\"name\":\"FramerDellXPS\",\"type\":\"device\"},{\"name\":\"FramerMicrosoftSurfaceBook\",\"type\":\"device\"},{\"name\":\"FramerSonyW850C\",\"type\":\"device\"}]},\"scripts\":{\"coverage\":\"jest --config jest.json --coverage\",\"test\":\"jest --config jest.json\",\"watch\":\"jest --config jest.json --watch\"}}\n                    return package\n                }\n\npackage.dependencies = packages\n\nexports.__framer__ = package\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsb0JBQW9CO0FBQ3BCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCxvSkFBb0oscTdCQUFxN0IscUJBQXFCLHdDQUF3QyxpQkFBaUIsbUZBQW1GLFdBQVcsZUFBZSwrQ0FBK0MsK0ZBQStGLEVBQUUsRUFBRSw4QkFBOEIsRUFBRSwrQkFBK0IsRUFBRSw0Q0FBNEMsRUFBRSw0Q0FBNEMsRUFBRSw4Q0FBOEMsRUFBRSw2Q0FBNkMsRUFBRSw0Q0FBNEMsRUFBRSxnREFBZ0QsRUFBRSw0Q0FBNEMsRUFBRSw0Q0FBNEMsRUFBRSw2Q0FBNkMsRUFBRSw0Q0FBNEMsRUFBRSw0Q0FBNEMsRUFBRSw4Q0FBOEMsRUFBRSx3Q0FBd0MsRUFBRSxpREFBaUQsRUFBRSw0Q0FBNEMsRUFBRSwrQ0FBK0MsRUFBRSw0Q0FBNEMsRUFBRSw2Q0FBNkMsRUFBRSw0Q0FBNEMsRUFBRSxpREFBaUQsRUFBRSxvREFBb0QsRUFBRSxvREFBb0QsRUFBRSx5Q0FBeUMsRUFBRSx1REFBdUQsRUFBRSw0Q0FBNEMsRUFBRSwrQ0FBK0MsRUFBRSwrQ0FBK0MsRUFBRSx1Q0FBdUMsRUFBRSxvREFBb0QsRUFBRSx5Q0FBeUMsRUFBRSxZQUFZO0FBQy82RjtBQUNBOztBQUVBOztBQUVBIiwiZmlsZSI6Ii4vcGFja2FnZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSB0ZW1wbGF0ZSBmb3IgdGhlIGR5bmFtaWMgd2VicGFjayBlbnRyeS4gQmUgYXdhcmUgb2YgdGhlIHZhcmlhYmxlc1xuXG5jb25zdCBwYWNrYWdlSnNvbiA9IHJlcXVpcmUoXCIuL3BhY2thZ2UuanNvblwiKVxuXG5jb25zdCBwYWNrYWdlID0ge1xuICAgIHBhY2thZ2VKc29uLFxuICAgIHNvdXJjZU1vZHVsZXM6IHt9LFxuICAgIGRlcGVuZGVuY2llczoge30sXG59XG5cbi8vIFRoaXMgaXMgYSBzcGVjaWFsIHdlYnBhY2sgdGhpbmcgdGhhdCB3YXRjaGVzIHRoZSB3aG9sZSBkaXJlY3Rvcnlcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrL2RvY3Mvd2lraS9jb250ZXh0XG5jb25zdCBjdHggPSByZXF1aXJlLmNvbnRleHQoXCIuL2NvZGVcIiwgdHJ1ZSwgL1xcLih0fGopcyh4Pyl8XFwuY3NzJC8pXG5cbmN0eC5rZXlzKCkuZm9yRWFjaChrZXkgPT4ge1xuICAgIHBhY2thZ2Uuc291cmNlTW9kdWxlc1trZXldID0gKCkgPT4gY3R4KGtleSlcbn0pXG5cbi8vIFRoZSBwYWNrYWdlcyBhcmUgcGFzc2VkIGluIHRocm91Z2ggYSB0ZW1wbGF0ZVxuY29uc3QgcGFja2FnZXMgPSB7fVxuXG4gICAgICAgICAgICAgICAgcGFja2FnZXNbXCJmcmFtZXJcIl0gPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwYWNrYWdlID0ge31cbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhY2thZ2UgPSByZXF1aXJlKFwiZnJhbWVyXCIpXG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGFja2FnZS5fX2ZyYW1lcl9fID0gcGFja2FnZS5fX2ZyYW1lcl9fIHx8IHt9XG4gICAgICAgICAgICAgICAgICAgIHBhY2thZ2UuX19mcmFtZXJfXy5wYWNrYWdlSnNvbiA9IHtcIm5hbWVcIjpcImZyYW1lclwiLFwidmVyc2lvblwiOlwiMC4xLjI3XCIsXCJtYWluXCI6XCJidWlsZC9mcmFtZXIuanNcIixcInR5cGVzXCI6XCJidWlsZC9mcmFtZXIuZC50c1wiLFwiYXV0aG9yXCI6XCJGcmFtZXJcIixcImxpY2Vuc2VcIjpcIlVOTElDRU5TRURcIixcImRldkRlcGVuZGVuY2llc1wiOntcIkB0eXBlcy9jaGFsa1wiOlwiXjIuMi4wXCIsXCJAdHlwZXMvZHJhZnQtanNcIjpcIjAuMTAuMTlcIixcIkB0eXBlcy9lbnp5bWVcIjpcIl4zLjEuMTBcIixcIkB0eXBlcy9oc2x1dlwiOlwiaHR0cHM6Ly9naXRodWIuY29tL2ZyYW1lci90eXBlZF9oc2x1diNidW1wXCIsXCJAdHlwZXMvamVzdFwiOlwiXjIzLjAuMFwiLFwiQHR5cGVzL2plc3QtZGlmZlwiOlwiXjIwLjAuMFwiLFwiQHR5cGVzL25vZGVcIjpcIl45LjYuMFwiLFwiQHR5cGVzL3JlYWN0XCI6XCIxNi4zLjEyXCIsXCJAdHlwZXMvcmVhY3QtZG9tXCI6XCJeMTYuMC41XCIsXCJjYWNoZS1sb2FkZXJcIjpcIl4xLjIuMlwiLFwiY2hhbGtcIjpcIl4yLjQuMVwiLFwiY29udmVydC10c2NvbmZpZy1wYXRocy10by13ZWJwYWNrLWFsaWFzZXNcIjpcIl4wLjkuMlwiLFwiY3NzLmVzY2FwZVwiOlwiXjEuNS4xXCIsXCJkdHMtYnVuZGxlXCI6XCJeMC43LjNcIixcImVuenltZVwiOlwiXjMuMy4wXCIsXCJlbnp5bWUtYWRhcHRlci1yZWFjdC0xNlwiOlwiXjEuMS4xXCIsXCJmb3JrLXRzLWNoZWNrZXItd2VicGFjay1wbHVnaW5cIjpcIl4wLjQuMVwiLFwiaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3NcIjpcIl4yLjUuMFwiLFwiamVzdFwiOlwiXjIzLjEuMFwiLFwiamVzdC1kaWZmXCI6XCJeMjIuMC4zXCIsXCJqZXN0LWp1bml0XCI6XCJeMy40LjFcIixcInByb2dyZXNzLWJhci13ZWJwYWNrLXBsdWdpblwiOlwiXjEuMTEuMFwiLFwicmFmXCI6XCJeMy40LjBcIixcInJlYWN0XCI6XCJeMTYuMy4yXCIsXCJyZWFjdC1kZXYtdXRpbHNcIjpcIl41LjAuMVwiLFwicmVhY3QtZG9tXCI6XCJeMTYuMy4yXCIsXCJ0cy1qZXN0XCI6XCJeMjIuNC41XCIsXCJ0cy1sb2FkZXJcIjpcIl40LjEuMFwiLFwidHNsaW50XCI6XCJeNS4xMC4wXCIsXCJ0c2xpbnQtbWljcm9zb2Z0LWNvbnRyaWJcIjpcIl41LjAuM1wiLFwidHlwZXNjcmlwdFwiOlwiXjIuOC4zXCIsXCJ3YXRjaFwiOlwiXjEuMC4yXCIsXCJ3ZWJwYWNrXCI6XCJeNC40LjFcIixcIndlYnBhY2stY2xpXCI6XCJeMi4wLjEzXCIsXCJ3ZWJwYWNrLWRldi1zZXJ2ZXJcIjpcIl4zLjEuNFwiLFwieGNzc21hdHJpeFwiOlwiXjAuMi4yXCJ9LFwicGVlckRlcGVuZGVuY2llc1wiOntcInJlYWN0XCI6XCJeMTYuMy4yXCIsXCJyZWFjdC1kb21cIjpcIl4xNi4zLjJcIn0sXCJkZXBlbmRlbmNpZXNcIjp7XCJkcmFmdC1qc1wiOlwiMC4xMC40XCIsXCJldmVudGVtaXR0ZXIzXCI6XCJeMy4xLjBcIixcImhzbHV2XCI6XCJeMC4wLjNcIixcImltbXV0YWJsZVwiOlwiXjMuOC4yXCJ9LFwiZnJhbWVyXCI6e1wiY29tcG9uZW50c1wiOlt7XCJuYW1lXCI6XCJTY3JvbGxcIixcImNoaWxkcmVuXCI6dHJ1ZSxcInByb3BlcnRpZXNcIjpbe1wia2V5XCI6XCJkaXJlY3Rpb25cIixcInRpdGxlXCI6XCJEaXJlY3Rpb25cIixcImtpbmRcIjpcImVudW1cIixcIm9wdGlvbnNcIjpbXCJob3Jpem9udGFsXCIsXCJ2ZXJ0aWNhbFwiLFwiYm90aFwiXX1dfSx7XCJuYW1lXCI6XCJQYWdlXCIsXCJjaGlsZHJlblwiOnRydWV9LHtcIm5hbWVcIjpcIlN0YWNrXCIsXCJjaGlsZHJlblwiOnRydWV9LHtcIm5hbWVcIjpcIkZyYW1lckFwcGxlV2F0Y2gzOFwiLFwidHlwZVwiOlwiZGV2aWNlXCJ9LHtcIm5hbWVcIjpcIkZyYW1lckFwcGxlV2F0Y2g0MlwiLFwidHlwZVwiOlwiZGV2aWNlXCJ9LHtcIm5hbWVcIjpcIkZyYW1lclNvbnlTbWFydFdhdGNoXCIsXCJ0eXBlXCI6XCJkZXZpY2VcIn0se1wibmFtZVwiOlwiRnJhbWVyQXBwbGVJUGhvbmVTRVwiLFwidHlwZVwiOlwiZGV2aWNlXCJ9LHtcIm5hbWVcIjpcIkZyYW1lckFwcGxlSVBob25lOFwiLFwidHlwZVwiOlwiZGV2aWNlXCJ9LHtcIm5hbWVcIjpcIkZyYW1lckFwcGxlSVBob25lOFBsdXNcIixcInR5cGVcIjpcImRldmljZVwifSx7XCJuYW1lXCI6XCJGcmFtZXJBcHBsZUlQaG9uZVhcIixcInR5cGVcIjpcImRldmljZVwifSx7XCJuYW1lXCI6XCJGcmFtZXJHb29nbGVOZXh1czRcIixcInR5cGVcIjpcImRldmljZVwifSx7XCJuYW1lXCI6XCJGcmFtZXJHb29nbGVOZXh1czVYXCIsXCJ0eXBlXCI6XCJkZXZpY2VcIn0se1wibmFtZVwiOlwiRnJhbWVyR29vZ2xlTmV4dXM2XCIsXCJ0eXBlXCI6XCJkZXZpY2VcIn0se1wibmFtZVwiOlwiRnJhbWVyR29vZ2xlUGl4ZWwyXCIsXCJ0eXBlXCI6XCJkZXZpY2VcIn0se1wibmFtZVwiOlwiRnJhbWVyR29vZ2xlUGl4ZWwyWExcIixcInR5cGVcIjpcImRldmljZVwifSx7XCJuYW1lXCI6XCJGcmFtZXJIVENPbmVBOVwiLFwidHlwZVwiOlwiZGV2aWNlXCJ9LHtcIm5hbWVcIjpcIkZyYW1lck1pY3Jvc29mdEx1bWlhOTUwXCIsXCJ0eXBlXCI6XCJkZXZpY2VcIn0se1wibmFtZVwiOlwiRnJhbWVyU2Ftc3VuZ05vdGU1XCIsXCJ0eXBlXCI6XCJkZXZpY2VcIn0se1wibmFtZVwiOlwiRnJhbWVyU2Ftc3VuZ0dhbGF4eVM4XCIsXCJ0eXBlXCI6XCJkZXZpY2VcIn0se1wibmFtZVwiOlwiRnJhbWVyQXBwbGVJUGFkQWlyXCIsXCJ0eXBlXCI6XCJkZXZpY2VcIn0se1wibmFtZVwiOlwiRnJhbWVyQXBwbGVJUGFkTWluaVwiLFwidHlwZVwiOlwiZGV2aWNlXCJ9LHtcIm5hbWVcIjpcIkZyYW1lckFwcGxlSVBhZFByb1wiLFwidHlwZVwiOlwiZGV2aWNlXCJ9LHtcIm5hbWVcIjpcIkZyYW1lckdvb2dsZU5leHVzVGFibGV0XCIsXCJ0eXBlXCI6XCJkZXZpY2VcIn0se1wibmFtZVwiOlwiRnJhbWVyTWljcm9zb2Z0U3VyZmFjZVBybzNcIixcInR5cGVcIjpcImRldmljZVwifSx7XCJuYW1lXCI6XCJGcmFtZXJNaWNyb3NvZnRTdXJmYWNlUHJvNFwiLFwidHlwZVwiOlwiZGV2aWNlXCJ9LHtcIm5hbWVcIjpcIkZyYW1lckFwcGxlSU1hY1wiLFwidHlwZVwiOlwiZGV2aWNlXCJ9LHtcIm5hbWVcIjpcIkZyYW1lckFwcGxlVGh1bmRlcmJvbHREaXNwbGF5XCIsXCJ0eXBlXCI6XCJkZXZpY2VcIn0se1wibmFtZVwiOlwiRnJhbWVyQXBwbGVNYWNCb29rXCIsXCJ0eXBlXCI6XCJkZXZpY2VcIn0se1wibmFtZVwiOlwiRnJhbWVyQXBwbGVNYWNCb29rQWlyXCIsXCJ0eXBlXCI6XCJkZXZpY2VcIn0se1wibmFtZVwiOlwiRnJhbWVyQXBwbGVNYWNCb29rUHJvXCIsXCJ0eXBlXCI6XCJkZXZpY2VcIn0se1wibmFtZVwiOlwiRnJhbWVyRGVsbFhQU1wiLFwidHlwZVwiOlwiZGV2aWNlXCJ9LHtcIm5hbWVcIjpcIkZyYW1lck1pY3Jvc29mdFN1cmZhY2VCb29rXCIsXCJ0eXBlXCI6XCJkZXZpY2VcIn0se1wibmFtZVwiOlwiRnJhbWVyU29ueVc4NTBDXCIsXCJ0eXBlXCI6XCJkZXZpY2VcIn1dfSxcInNjcmlwdHNcIjp7XCJjb3ZlcmFnZVwiOlwiamVzdCAtLWNvbmZpZyBqZXN0Lmpzb24gLS1jb3ZlcmFnZVwiLFwidGVzdFwiOlwiamVzdCAtLWNvbmZpZyBqZXN0Lmpzb25cIixcIndhdGNoXCI6XCJqZXN0IC0tY29uZmlnIGplc3QuanNvbiAtLXdhdGNoXCJ9fVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFja2FnZVxuICAgICAgICAgICAgICAgIH1cblxucGFja2FnZS5kZXBlbmRlbmNpZXMgPSBwYWNrYWdlc1xuXG5leHBvcnRzLl9fZnJhbWVyX18gPSBwYWNrYWdlXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./package.js\n");

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: main, license, devDependencies, peerDependencies, framer, author, name, default */
/***/ (function(module) {

eval("module.exports = {\"main\":\"build/index.js\",\"license\":\"MIT\",\"devDependencies\":{\"@types/react\":\"^16.0.31\",\"framer\":\"^0.1.27\"},\"peerDependencies\":{\"framer\":\"^0.1.27\",\"react\":\"^16.3.0\",\"react-dom\":\"^16.3.0\"},\"framer\":{\"id\":\"1291d92b-77f3-4f86-8d3d-75555c6f5bb1\",\"displayName\":\"Delay\"},\"author\":\"Dan Abramov\",\"name\":\"@framer/gaearon.delay\"};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3BhY2thZ2UuanNvbi5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./package.json\n");

/***/ }),

/***/ "framer":
/*!******************************************************************************************!*\
  !*** external {"root":"Framer","commonjs2":"framer","commonjs":"framer","amd":"framer"} ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_framer__;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiRnJhbWVyXCIsXCJjb21tb25qczJcIjpcImZyYW1lclwiLFwiY29tbW9uanNcIjpcImZyYW1lclwiLFwiYW1kXCI6XCJmcmFtZXJcIn0iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZnJhbWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ZyYW1lcl9fOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///framer\n");

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react__;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiYW1kXCI6XCJyZWFjdFwifSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWFjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9fOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });
});


/***/ })

}]);