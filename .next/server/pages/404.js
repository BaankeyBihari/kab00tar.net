(function() {
var exports = {};
exports.id = 197;
exports.ids = [197];
exports.modules = {

/***/ 7348:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; },
/* harmony export */   "default": function() { return /* binding */ Custom404; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5887);
/* harmony import */ var _components_HeaderPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5811);
/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2982);
/* harmony import */ var _lib_ghost__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3228);
/* harmony import */ var _utils_use_lang__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3148);
/* harmony import */ var _helpers_BodyClass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(339);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const getStaticProps = async () => {
  const posts = await (0,_lib_ghost__WEBPACK_IMPORTED_MODULE_5__/* .getAllPosts */ .Bd)({
    limit: 3
  });
  const settings = await (0,_lib_ghost__WEBPACK_IMPORTED_MODULE_5__/* .getAllSettings */ .GR)();
  return {
    props: {
      settings,
      posts,
      bodyClass: (0,_helpers_BodyClass__WEBPACK_IMPORTED_MODULE_7__/* .BodyClass */ .C)({})
    }
  };
};
function Custom404({
  posts,
  settings,
  bodyClass
}) {
  const text = (0,_utils_use_lang__WEBPACK_IMPORTED_MODULE_6__/* .get */ .U)((0,_utils_use_lang__WEBPACK_IMPORTED_MODULE_6__/* .getLang */ .V)());
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__/* .Layout */ .A, _objectSpread(_objectSpread({}, {
    settings,
    bodyClass
  }), {}, {
    header: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_HeaderPage__WEBPACK_IMPORTED_MODULE_3__/* .HeaderPage */ .E, _objectSpread({}, {
      settings
    })),
    errorClass: "error-content",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "inner",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "error-message",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
          className: "error-code",
          children: "404"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
          className: "error-description",
          children: text(`PAGE_NOT_FOUND`)
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
          href: "/",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
            className: "error-link",
            children: [text(`GOTO_FRONT_PAGE`), " \u2192"]
          })
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "post-feed",
        children: posts.map((post, i) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PostCard__WEBPACK_IMPORTED_MODULE_4__/* .PostCard */ .y, _objectSpread({}, {
          settings,
          post,
          num: i
        }), post.id))
      })]
    })
  }));
}

/***/ }),

/***/ 5933:
/***/ (function(module) {

"use strict";
module.exports = require("@tryghost/content-api");;

/***/ }),

/***/ 4992:
/***/ (function(module) {

"use strict";
module.exports = require("crypto-hash");;

/***/ }),

/***/ 8349:
/***/ (function(module) {

"use strict";
module.exports = require("dayjs");;

/***/ }),

/***/ 5747:
/***/ (function(module) {

"use strict";
module.exports = require("fs");;

/***/ }),

/***/ 7099:
/***/ (function(module) {

"use strict";
module.exports = require("hast-util-to-string");;

/***/ }),

/***/ 3804:
/***/ (function(module) {

"use strict";
module.exports = require("lodash");;

/***/ }),

/***/ 5273:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 5519:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ 444:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ 6731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ 5622:
/***/ (function(module) {

"use strict";
module.exports = require("path");;

/***/ }),

/***/ 5685:
/***/ (function(module) {

"use strict";
module.exports = require("probe-image-size");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 929:
/***/ (function(module) {

"use strict";
module.exports = require("refractor");;

/***/ }),

/***/ 521:
/***/ (function(module) {

"use strict";
module.exports = require("rehype");;

/***/ }),

/***/ 2413:
/***/ (function(module) {

"use strict";
module.exports = require("stream");;

/***/ }),

/***/ 3289:
/***/ (function(module) {

"use strict";
module.exports = require("styled-jsx/style");;

/***/ }),

/***/ 2148:
/***/ (function(module) {

"use strict";
module.exports = require("unist-util-visit");;

/***/ }),

/***/ 8835:
/***/ (function(module) {

"use strict";
module.exports = require("url");;

/***/ }),

/***/ 1669:
/***/ (function(module) {

"use strict";
module.exports = require("util");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [597,61,264,228,250,950,439,811], function() { return __webpack_exec__(7348); });
module.exports = __webpack_exports__;

})();