(function() {
var exports = {};
exports.id = 986;
exports.ids = [986];
exports.modules = {

/***/ 1673:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _slug_; },
  "getStaticPaths": function() { return /* binding */ getStaticPaths; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./components/SiteNav.tsx + 11 modules
var SiteNav = __webpack_require__(1362);
// EXTERNAL MODULE: ./components/HeaderBackground.tsx
var HeaderBackground = __webpack_require__(5116);
// EXTERNAL MODULE: ./utils/use-lang.ts + 1 modules
var use_lang = __webpack_require__(3148);
;// CONCATENATED MODULE: ./components/HeaderTag.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const HeaderTag = ({
  settings,
  tag
}) => {
  var _tag$count;

  const text = (0,use_lang/* get */.U)((0,use_lang/* getLang */.V)());
  const featureImg = tag.feature_image || '';
  const numberOfPosts = (_tag$count = tag.count) === null || _tag$count === void 0 ? void 0 : _tag$count.posts;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
    className: "site-archive-header",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "outer site-nav-main",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "inner",
        children: /*#__PURE__*/jsx_runtime_.jsx(SiteNav/* SiteNav */.h, _objectSpread(_objectSpread({}, {
          settings
        }), {}, {
          className: "site-nav"
        }))
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(HeaderBackground/* HeaderBackground */.w, {
      srcImg: featureImg,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "inner site-header-content",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
          className: "site-title",
          children: tag.name
        }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
          className: "site-description",
          children: tag.description || `${text(`A_COLLECTION_OF`)} ${numberOfPosts && numberOfPosts > 0 && (numberOfPosts === 1 ? `1 ${text(`POST`)}` : `${numberOfPosts} ${text(`POSTS`)}`) || `${text(`POSTS`)}`}`
        })]
      })
    })]
  });
};
// EXTERNAL MODULE: ./components/Layout.tsx + 4 modules
var Layout = __webpack_require__(5887);
// EXTERNAL MODULE: ./components/PostView.tsx + 1 modules
var PostView = __webpack_require__(4786);
// EXTERNAL MODULE: ./components/meta/seo.tsx
var seo = __webpack_require__(8277);
// EXTERNAL MODULE: ./lib/ghost.ts + 2 modules
var ghost = __webpack_require__(3228);
// EXTERNAL MODULE: ./utils/routing.ts
var routing = __webpack_require__(4950);
// EXTERNAL MODULE: ./components/meta/seoImage.ts
var seoImage = __webpack_require__(8953);
// EXTERNAL MODULE: ./lib/processEnv.ts
var processEnv = __webpack_require__(264);
// EXTERNAL MODULE: ./components/helpers/BodyClass.ts
var BodyClass = __webpack_require__(339);
;// CONCATENATED MODULE: ./pages/tag/[...slug].tsx




function _slug_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _slug_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _slug_ownKeys(Object(source), true).forEach(function (key) { _slug_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _slug_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _slug_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











/**
 * Tag page (/tag/:slug)
 *
 * Loads all posts for the requested tag incl. pagination.
 *
 */

const TagIndex = ({
  cmsData
}) => {
  const router = (0,router_.useRouter)();
  if (router.isFallback) return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: "Loading..."
  });
  const {
    tag,
    posts,
    settings,
    seoImage,
    bodyClass
  } = cmsData;
  const {
    meta_title,
    meta_description
  } = tag;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(seo/* SEO */.H, _slug_objectSpread({}, {
      settings,
      title: meta_title || '',
      description: meta_description || '',
      seoImage
    })), /*#__PURE__*/jsx_runtime_.jsx(Layout/* Layout */.A, _slug_objectSpread(_slug_objectSpread({}, {
      settings,
      bodyClass
    }), {}, {
      header: /*#__PURE__*/jsx_runtime_.jsx(HeaderTag, _slug_objectSpread({}, {
        settings,
        tag
      })),
      children: /*#__PURE__*/jsx_runtime_.jsx(PostView/* PostView */.I, _slug_objectSpread({}, {
        settings,
        posts
      }))
    }))]
  });
};

/* harmony default export */ var _slug_ = (TagIndex);
const getStaticProps = async ({
  params
}) => {
  if (!(params && params.slug && Array.isArray(params.slug))) throw Error('getStaticProps: wrong parameters.');
  const [slug] = params.slug.reverse();
  const tag = await (0,ghost/* getTagBySlug */.iP)(slug);
  const posts = await (0,ghost/* getPostsByTag */.J4)(slug);
  const settings = await (0,ghost/* getAllSettings */.GR)();
  return _slug_objectSpread({
    props: {
      cmsData: {
        tag,
        posts,
        settings,
        seoImage: await (0,seoImage/* seoImage */.e)({
          siteUrl: settings.processEnv.siteUrl
        }),
        bodyClass: (0,BodyClass/* BodyClass */.C)({
          tags: [tag]
        })
      }
    }
  }, processEnv/* processEnv.isr.enable */.DD.isr.enable && {
    revalidate: 1
  });
};
const getStaticPaths = async () => {
  const tags = await (0,ghost/* getAllTags */.Ys)();
  const settings = await (0,ghost/* getAllSettings */.GR)();
  const {
    url: cmsUrl
  } = settings;
  const paths = tags.map(({
    slug,
    url
  }) => (0,routing/* resolveUrl */.K)({
    cmsUrl,
    slug,
    url
  })).filter(path => path.startsWith(`/tag/`));
  return {
    paths,
    fallback: processEnv/* processEnv.isr.enable */.DD.isr.enable
  };
};

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

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [597,61,264,228,250,950,439,258,343], function() { return __webpack_exec__(1673); });
module.exports = __webpack_exports__;

})();