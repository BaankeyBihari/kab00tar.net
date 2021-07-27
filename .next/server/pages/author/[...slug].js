(function() {
var exports = {};
exports.id = 423;
exports.ids = [423];
exports.modules = {

/***/ 344:
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
// EXTERNAL MODULE: ./components/Layout.tsx + 4 modules
var Layout = __webpack_require__(5887);
// EXTERNAL MODULE: ./components/PostView.tsx + 1 modules
var PostView = __webpack_require__(4786);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./components/SiteNav.tsx + 11 modules
var SiteNav = __webpack_require__(1362);
// EXTERNAL MODULE: ./components/HeaderBackground.tsx
var HeaderBackground = __webpack_require__(5116);
// EXTERNAL MODULE: ./utils/use-lang.ts + 1 modules
var use_lang = __webpack_require__(3148);
// EXTERNAL MODULE: ./components/icons/AvatarIcon.tsx
var AvatarIcon = __webpack_require__(6067);
;// CONCATENATED MODULE: ./components/HeaderAuthor.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const HeaderAuthor = ({
  settings,
  author
}) => {
  var _author$count;

  const {
    nextImages
  } = settings.processEnv;
  const text = (0,use_lang/* get */.U)((0,use_lang/* getLang */.V)());
  const twitterUrl = author.twitter ? `https://twitter.com/${author.twitter.replace(/^@/, ``)}` : null;
  const facebookUrl = author.facebook ? `https://www.facebook.com/${author.facebook.replace(/^\//, ``)}` : null;
  const coverImg = author.cover_image || '';
  const profileImg = author.profileImage;
  const numberOfPosts = (_author$count = author.count) === null || _author$count === void 0 ? void 0 : _author$count.posts;
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
      srcImg: coverImg,
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "inner",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "site-header-content author-header",
          children: [profileImg && nextImages.feature ? /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "author-profile-image",
            children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, _objectSpread({
              className: "author-profile-image",
              src: profileImg.url,
              alt: author.name,
              layout: "responsive",
              quality: nextImages.quality
            }, profileImg.dimensions))
          }) : author.profile_image ?
          /*#__PURE__*/

          /* eslint-disable @next/next/no-img-element */
          jsx_runtime_.jsx("img", {
            className: "author-profile-image",
            src: author.profile_image,
            alt: author.name
          }) : /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "author-profile-image",
            children: /*#__PURE__*/jsx_runtime_.jsx(AvatarIcon/* AvatarIcon */.f, {})
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "author-header-content",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
              className: "site-title",
              children: author.name
            }), author.bio && /*#__PURE__*/jsx_runtime_.jsx("h2", {
              className: "author-bio",
              children: author.bio
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "author-meta",
              children: [author.location && /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "author-location",
                children: author.location
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "author-stats",
                children: numberOfPosts && ` ${numberOfPosts} ${1 < numberOfPosts ? text(`POSTS`) : text(`POST`)}` || `${text(`NO_POSTS`)}`
              }), author.website && /*#__PURE__*/jsx_runtime_.jsx("span", {
                className: "author-social-link",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: author.website,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: text(`WEBSITE`)
                })
              }), twitterUrl && /*#__PURE__*/jsx_runtime_.jsx("span", {
                className: "author-social-link",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: twitterUrl,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: "Twitter"
                })
              }), facebookUrl && /*#__PURE__*/jsx_runtime_.jsx("span", {
                className: "author-social-link",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: facebookUrl,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: "Facebook"
                })
              })]
            })]
          })]
        })
      })
    })]
  });
};
// EXTERNAL MODULE: ./utils/routing.ts
var routing = __webpack_require__(4950);
// EXTERNAL MODULE: ./components/meta/seo.tsx
var seo = __webpack_require__(8277);
// EXTERNAL MODULE: ./lib/ghost.ts + 2 modules
var ghost = __webpack_require__(3228);
// EXTERNAL MODULE: ./components/meta/seoImage.ts
var seoImage = __webpack_require__(8953);
// EXTERNAL MODULE: ./lib/processEnv.ts
var processEnv = __webpack_require__(264);
// EXTERNAL MODULE: ./components/helpers/BodyClass.ts
var BodyClass = __webpack_require__(339);
;// CONCATENATED MODULE: ./pages/author/[...slug].tsx




function _slug_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _slug_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _slug_ownKeys(Object(source), true).forEach(function (key) { _slug_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _slug_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _slug_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











/**
 * Author page (/author/:slug)
 *
 * Loads all posts for the requested author incl. pagination.
 *
 */

const AuthorIndex = ({
  cmsData
}) => {
  const router = (0,router_.useRouter)();
  if (router.isFallback) return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: "Loading..."
  });
  const {
    author,
    posts,
    settings,
    seoImage,
    bodyClass
  } = cmsData;
  const {
    name,
    bio
  } = author;
  const description = bio || undefined;
  const sameAs = (0,seo/* authorSameAs */.N)(author);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(seo/* SEO */.H, _slug_objectSpread({}, {
      settings,
      description,
      seoImage,
      sameAs,
      title: name
    })), /*#__PURE__*/jsx_runtime_.jsx(Layout/* Layout */.A, _slug_objectSpread(_slug_objectSpread({}, {
      settings,
      bodyClass
    }), {}, {
      header: /*#__PURE__*/jsx_runtime_.jsx(HeaderAuthor, _slug_objectSpread({}, {
        settings,
        author
      })),
      children: /*#__PURE__*/jsx_runtime_.jsx(PostView/* PostView */.I, _slug_objectSpread({}, {
        settings,
        posts
      }))
    }))]
  });
};

/* harmony default export */ var _slug_ = (AuthorIndex);
const getStaticProps = async ({
  params
}) => {
  if (!(params && params.slug && Array.isArray(params.slug))) throw Error('getStaticProps: wrong parameters.');
  const [slug] = params.slug.reverse();
  const author = await (0,ghost/* getAuthorBySlug */.ye)(slug);
  const posts = await (0,ghost/* getPostsByAuthor */.kZ)(slug);
  const settings = await (0,ghost/* getAllSettings */.GR)();
  const {
    cover_image,
    profile_image
  } = author;
  const siteUrl = settings.processEnv.siteUrl;
  const imageUrl = cover_image || profile_image || undefined;
  const authorImage = await (0,seoImage/* seoImage */.e)({
    siteUrl,
    imageUrl
  });
  return _slug_objectSpread({
    props: {
      cmsData: {
        author,
        posts,
        settings,
        seoImage: authorImage,
        bodyClass: (0,BodyClass/* BodyClass */.C)({
          author
        })
      }
    }
  }, processEnv/* processEnv.isr.enable */.DD.isr.enable && {
    revalidate: 1
  });
};
const getStaticPaths = async () => {
  const authors = await (0,ghost/* getAllAuthors */.uk)();
  const settings = await (0,ghost/* getAllSettings */.GR)();
  const {
    url: cmsUrl
  } = settings;
  const paths = authors.map(({
    slug,
    url
  }) => (0,routing/* resolveUrl */.K)({
    cmsUrl,
    slug,
    url: url || undefined
  })).filter(path => path.startsWith(`/author/`));
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
var __webpack_exports__ = __webpack_require__.X(0, [597,61,264,228,250,950,439,258,343], function() { return __webpack_exec__(344); });
module.exports = __webpack_exports__;

})();