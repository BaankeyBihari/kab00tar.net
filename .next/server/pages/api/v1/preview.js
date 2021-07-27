(function() {
var exports = {};
exports.id = 639;
exports.ids = [639];
exports.modules = {

/***/ 7036:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "verifySlug": function() { return /* binding */ verifySlug; }
/* harmony export */ });
/* harmony import */ var _lib_ghost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3228);
/* harmony import */ var _utils_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4950);
/* harmony import */ var _lib_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6123);



/**
 *
 * Currently only posts are implemented for preview
 *
 */
// The preview mode cookies expire in 1 hour

const maxAge = 60 * 60;
async function verifySlug(postSlug) {
  const post = await (0,_lib_ghost__WEBPACK_IMPORTED_MODULE_0__/* .getPostBySlug */ .zQ)(postSlug);
  if (!post) return null;
  const collectionPath = _lib_collections__WEBPACK_IMPORTED_MODULE_1__/* .collections.getCollectionByNode */ .s.getCollectionByNode(post);
  const {
    slug,
    url
  } = post;
  const settings = await (0,_lib_ghost__WEBPACK_IMPORTED_MODULE_0__/* .getAllSettings */ .GR)();
  const {
    url: cmsUrl
  } = settings;
  return (0,_utils_routing__WEBPACK_IMPORTED_MODULE_2__/* .resolveUrl */ .K)({
    cmsUrl,
    collectionPath,
    slug,
    url
  });
}

const Preview = async (req, res) => {
  if (req.query.secret !== process.env.JAMIFY_PREVIEW_TOKEN || !req.query.slug) {
    return res.status(401).json({
      message: 'Invalid token'
    });
  }

  const slug = Array.isArray(req.query.slug) ? req.query.slug[0] : req.query.slug;
  const url = await verifySlug(slug);
  console.log(url);

  if (!url) {
    return res.status(401).json({
      message: 'Invalid slug'
    });
  }

  res.setPreviewData({}, {
    maxAge
  });
  res.redirect(url); // TODO: Option for cookie clearing
  // res.clearPreviewData()
};

/* harmony default export */ __webpack_exports__["default"] = (Preview);

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [264,228,950], function() { return __webpack_exec__(7036); });
module.exports = __webpack_exports__;

})();