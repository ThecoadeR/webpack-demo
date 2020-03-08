(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(0);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = vendors;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(4);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: delegated ./node_modules/react/index.js from dll-reference vendors
var reactfrom_dll_reference_vendors = __webpack_require__(0);
var reactfrom_dll_reference_vendors_default = /*#__PURE__*/__webpack_require__.n(reactfrom_dll_reference_vendors);

// EXTERNAL MODULE: delegated ./node_modules/react-dom/index.js from dll-reference vendors
var react_domfrom_dll_reference_vendors = __webpack_require__(2);
var react_domfrom_dll_reference_vendors_default = /*#__PURE__*/__webpack_require__.n(react_domfrom_dll_reference_vendors);

// CONCATENATED MODULE: ./src/child/child.jsx

class child_Child extends reactfrom_dll_reference_vendors["Component"] {
  render() {
    return reactfrom_dll_reference_vendors_default.a.createElement("div", null, reactfrom_dll_reference_vendors_default.a.createElement("div", null, " This is Child"));
  }

}
// CONCATENATED MODULE: ./src/index.js
/*
 * @Descripttion: 注释
 * @Author: 朱海华
 * @Date: 2018-12-22 21:52:00
 * @LastEditTime: 2020-03-08 21:01:38
 */




class src_App extends reactfrom_dll_reference_vendors["Component"] {
  render() {
    return reactfrom_dll_reference_vendors_default.a.createElement("div", null, reactfrom_dll_reference_vendors_default.a.createElement("div", null, " This is App Component"), reactfrom_dll_reference_vendors_default.a.createElement(child_Child, null));
  }

}

react_domfrom_dll_reference_vendors_default.a.render(reactfrom_dll_reference_vendors_default.a.createElement(src_App, null), document.getElementById('root'));

/***/ })
],[[3,1]]]);
//# sourceMappingURL=main.3f8b244a1bbac963a572.js.map