(function() {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 1788:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Index; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./components/Layout.tsx + 4 modules
var Layout = __webpack_require__(5887);
// EXTERNAL MODULE: ./components/PostView.tsx + 1 modules
var PostView = __webpack_require__(4786);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./components/SiteNav.tsx + 11 modules
var SiteNav = __webpack_require__(1362);
// EXTERNAL MODULE: ./components/HeaderBackground.tsx
var HeaderBackground = __webpack_require__(5116);
// EXTERNAL MODULE: ./utils/use-lang.ts + 1 modules
var use_lang = __webpack_require__(3148);
;// CONCATENATED MODULE: ./components/HeaderIndex.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const HeaderIndex = ({
  settings
}) => {
  const text = (0,use_lang/* get */.U)((0,use_lang/* getLang */.V)());
  const site = settings;
  const siteLogo = site.logoImage;
  const coverImg = site.cover_image || '';
  const title = text(`SITE_TITLE`, site.title);
  const {
    processEnv
  } = settings;
  const {
    siteUrl,
    nextImages
  } = processEnv;
  const {
    feature: nextFeatureImages,
    quality: imageQuality
  } = nextImages; // targetHeight is coming from style .site-logo

  const targetHeight = 55;

  const calcSiteLogoWidth = (image, targetHeight) => {
    const {
      width,
      height
    } = image.dimensions;
    return targetHeight * width / height;
  };

  return /*#__PURE__*/jsx_runtime_.jsx("header", {
    className: "site-home-header",
    children: /*#__PURE__*/jsx_runtime_.jsx(HeaderBackground/* HeaderBackground */.w, {
      srcImg: coverImg,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "inner",
        children: [/*#__PURE__*/jsx_runtime_.jsx(SiteNav/* SiteNav */.h, _objectSpread({
          className: "site-nav"
        }, {
          siteUrl,
          settings
        })), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "site-header-content",
          children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
            className: "site-title",
            children: siteLogo && nextFeatureImages ? /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "site-logo",
                  style: {
                    marginTop: '8px',
                    height: `${targetHeight}px`,
                    width: `${calcSiteLogoWidth(siteLogo, targetHeight)}px`
                  },
                  children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, _objectSpread({
                    src: siteLogo.url,
                    alt: title,
                    layout: "responsive",
                    quality: imageQuality
                  }, siteLogo.dimensions))
                })
              })
            }) : site.logo ? /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  className: "site-logo",
                  src: site.logo,
                  alt: title
                })
              })
            }) : title
          }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
            className: "site-description",
            children: site.description
          })]
        })]
      })
    })
  });
};
// EXTERNAL MODULE: ./components/effects/StickyNavContainer.tsx
var StickyNavContainer = __webpack_require__(5565);
// EXTERNAL MODULE: ./components/meta/seo.tsx
var seo = __webpack_require__(8277);
// EXTERNAL MODULE: ./lib/processEnv.ts
var processEnv = __webpack_require__(264);
// EXTERNAL MODULE: ./lib/ghost.ts + 2 modules
var ghost = __webpack_require__(3228);
// EXTERNAL MODULE: ./components/meta/seoImage.ts
var seoImage = __webpack_require__(8953);
// EXTERNAL MODULE: ./components/helpers/BodyClass.ts
var BodyClass = __webpack_require__(339);
;// CONCATENATED MODULE: ./pages/index.tsx




function pages_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function pages_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { pages_ownKeys(Object(source), true).forEach(function (key) { pages_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { pages_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function pages_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











/**
 * Main index page (home page)
 *
 * Loads all posts from CMS
 *
 */

function Index({
  cmsData
}) {
  const router = (0,router_.useRouter)();
  if (router.isFallback) return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: "Loading..."
  });
  const {
    settings,
    posts,
    seoImage,
    bodyClass
  } = cmsData;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(seo/* SEO */.H, pages_objectSpread({}, {
      settings,
      seoImage
    })), /*#__PURE__*/jsx_runtime_.jsx(StickyNavContainer/* StickyNavContainer */.R, {
      throttle: 300,
      activeClass: "fixed-nav-active",
      render: sticky => /*#__PURE__*/jsx_runtime_.jsx(Layout/* Layout */.A, pages_objectSpread(pages_objectSpread({}, {
        bodyClass,
        sticky,
        settings,
        isHome: true
      }), {}, {
        header: /*#__PURE__*/jsx_runtime_.jsx(HeaderIndex, pages_objectSpread({}, {
          settings
        })),
        children: /*#__PURE__*/jsx_runtime_.jsx(PostView/* PostView */.I, pages_objectSpread({}, {
          settings,
          posts,
          isHome: true
        }))
      }))
    })]
  });
}
const getStaticProps = async () => {
  let settings;
  let posts;

  try {
    settings = await (0,ghost/* getAllSettings */.GR)();
    posts = await (0,ghost/* getAllPosts */.Bd)();
  } catch (error) {
    throw new Error('Index creation failed.');
  }

  const cmsData = {
    settings,
    posts,
    seoImage: await (0,seoImage/* seoImage */.e)({
      siteUrl: settings.processEnv.siteUrl
    }),
    bodyClass: (0,BodyClass/* BodyClass */.C)({
      isHome: true
    })
  };
  return pages_objectSpread({
    props: {
      cmsData
    }
  }, processEnv/* processEnv.isr.enable */.DD.isr.enable && {
    revalidate: 1
  });
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

/***/ 1602:
/***/ (function(module) {

"use strict";
module.exports = require("lodash.throttle");;

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [597,61,264,228,250,950,439,258,343,565], function() { return __webpack_exec__(1788); });
module.exports = __webpack_exports__;

})();