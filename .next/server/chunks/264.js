exports.id = 264;
exports.ids = [264];
exports.modules = {

/***/ 9317:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gX": function() { return /* binding */ fileCache; },
/* harmony export */   "vx": function() { return /* binding */ defaultMode; },
/* harmony export */   "YV": function() { return /* binding */ overrideOS; },
/* harmony export */   "r3": function() { return /* binding */ nextFeatureImages; },
/* harmony export */   "pk": function() { return /* binding */ nextInlineImages; },
/* harmony export */   "n8": function() { return /* binding */ imageQuality; },
/* harmony export */   "Py": function() { return /* binding */ sourceImages; },
/* harmony export */   "uU": function() { return /* binding */ rssFeed; },
/* harmony export */   "RU": function() { return /* binding */ memberSubscriptions; },
/* harmony export */   "St": function() { return /* binding */ commenting; },
/* harmony export */   "b9": function() { return /* binding */ commentoUrl; },
/* harmony export */   "TM": function() { return /* binding */ disqusShortname; },
/* harmony export */   "MS": function() { return /* binding */ prism; },
/* harmony export */   "ni": function() { return /* binding */ prismIgnoreMissing; },
/* harmony export */   "oX": function() { return /* binding */ contactPage; },
/* harmony export */   "_D": function() { return /* binding */ customPage; },
/* harmony export */   "d$": function() { return /* binding */ toc; },
/* harmony export */   "HY": function() { return /* binding */ maxDepth; },
/* harmony export */   "_l": function() { return /* binding */ customNavigation; },
/* harmony export */   "o3": function() { return /* binding */ isr; },
/* harmony export */   "nm": function() { return /* binding */ maxNumberOfPosts; },
/* harmony export */   "T8": function() { return /* binding */ maxNumberOfPages; }
/* harmony export */ });
/**
 * Some of the defaults defined here can be overwritten by environment variables
 * Check lib/environments.ts
 */
// Cache control
const fileCache = true; // Dark mode

const defaultMode = 'light';
const overrideOS = true; // Images

const nextFeatureImages = true;
const nextInlineImages = true;
const imageQuality = 80;
const sourceImages = false; // RSS

const rssFeed = true; // Ghost Member Subscriptions

const memberSubscriptions = true; // Commenting system

const commenting = null;
const commentoUrl = 'https://cdn.commento.io'; // 'https://commento.your-blog.com'

const disqusShortname = 'short-name-here'; // PrismJS

const prism = true;
const prismIgnoreMissing = true; // Contact Page

const contactPage = true;
const customPage = {}; // Table of Contents

const toc = true;
const maxDepth = 2; // Custom site navigation (default: [], label is case sensitive)
// Override: [{ label: 'Home', url: '/' }]
// Add new: [{ label: 'Contact', url: '/contact' }]

const customNavigation = [{
  label: 'Contact',
  url: '/contact'
}]; // Incremental Static Regenerations (ISR)

const isr = true;
const maxNumberOfPosts = 20;
const maxNumberOfPages = 20;

/***/ }),

/***/ 264:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "jZ": function() { return /* binding */ ghostAPIUrl; },
/* harmony export */   "VA": function() { return /* binding */ ghostAPIKey; },
/* harmony export */   "DD": function() { return /* binding */ processEnv; }
/* harmony export */ });
/* harmony import */ var _appConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9317);

// siteUrl, platform, ghostAPIUrl, ghostAPIKey must be defined here
const ghostAPIUrl = process.env.CMS_GHOST_API_URL || 'https://cms.gotsby.org';
const ghostAPIKey = process.env.CMS_GHOST_API_KEY || '387f956eaa95345f7bb484d0b8';
const siteUrl = process.env.SITE_URL || process.env.VERCEL_URL && `https://${process.env.VERCEL_URL}` || process.env.URL || 'http://localhost:3000';
const platform = process.env.NETLIFY === 'true' && 'netlify' || 'vercel'; // Environment variables that can be used to override the defaults in appconfig.js

const resolveBool = (value, defaultValue) => {
  if (!value) return defaultValue;
  if (value === 'true') return true;
  return false;
};

const resolveNumber = (value, defaultValue) => {
  if (!value) return defaultValue;
  return parseInt(value, 10);
};

const resolveDarkMode = (value, defaultValue) => {
  if (!value) return defaultValue;
  if (value === 'dark') return 'dark';
  return 'light';
};

function reolveJSON(value, defaultValue) {
  if (!value) return defaultValue;
  return JSON.parse(value);
}

const processEnv = {
  siteUrl,
  platform,
  darkMode: {
    defaultMode: resolveDarkMode(process.env.JAMIFY_DARK_MODE_DEFAULT, _appConfig__WEBPACK_IMPORTED_MODULE_0__/* .defaultMode */ .vx),
    overrideOS: resolveBool(process.env.JAMIFY_DARK_MODE_OVERRIDE_OS, _appConfig__WEBPACK_IMPORTED_MODULE_0__/* .overrideOS */ .YV)
  },
  nextImages: {
    feature: resolveBool(process.env.JAMIFY_NEXT_FEATURE_IMAGES, _appConfig__WEBPACK_IMPORTED_MODULE_0__/* .nextFeatureImages */ .r3),
    inline: resolveBool(process.env.JAMIFY_NEXT_INLINE_IMAGES, _appConfig__WEBPACK_IMPORTED_MODULE_0__/* .nextInlineImages */ .pk),
    quality: resolveNumber(process.env.JAMIFY_NEXT_IMAGES_QUALITY, _appConfig__WEBPACK_IMPORTED_MODULE_0__/* .imageQuality */ .n8),
    source: resolveBool(process.env.JAMIFY_NEXT_SOURCE_IMAGES, _appConfig__WEBPACK_IMPORTED_MODULE_0__/* .sourceImages */ .Py)
  },
  rssFeed: resolveBool(process.env.JAMIFY_RSS_FEED, _appConfig__WEBPACK_IMPORTED_MODULE_0__/* .rssFeed */ .uU),
  memberSubscriptions: resolveBool(process.env.JAMIFY_MEMBER_SUBSCRIPTIONS, _appConfig__WEBPACK_IMPORTED_MODULE_0__/* .memberSubscriptions */ .RU),
  commenting: {
    system: process.env.JAMIFY_COMMENTING_SYSTEM || _appConfig__WEBPACK_IMPORTED_MODULE_0__/* .commenting */ .St,
    commentoUrl: process.env.JAMIFY_COMMENTO_URL || _appConfig__WEBPACK_IMPORTED_MODULE_0__/* .commentoUrl */ .b9,
    disqusShortname: process.env.JAMIFY_DISQUS_SHORTNAME || _appConfig__WEBPACK_IMPORTED_MODULE_0__/* .disqusShortname */ .TM
  },
  prism: {
    enable: resolveBool(process.env.JAMIFY_PRISM, _appConfig__WEBPACK_IMPORTED_MODULE_0__/* .prism */ .MS),
    ignoreMissing: resolveBool(process.env.JAMIFY_PRISM_IGNORE_MISSING, _appConfig__WEBPACK_IMPORTED_MODULE_0__/* .prismIgnoreMissing */ .ni)
  },
  contactPage: resolveBool(process.env.JAMIFY_CONTACT_PAGE, _appConfig__WEBPACK_IMPORTED_MODULE_0__/* .contactPage */ .oX),
  toc: {
    enable: resolveBool(process.env.JAMIFY_TOC, _appConfig__WEBPACK_IMPORTED_MODULE_0__/* .toc */ .d$),
    maxDepth: resolveNumber(process.env.JAMIFY_TOC_MAX_DEPTH, _appConfig__WEBPACK_IMPORTED_MODULE_0__/* .maxDepth */ .HY)
  },
  customNavigation: reolveJSON(process.env.JAMIFY_CUSTOM_NAVIGATION, _appConfig__WEBPACK_IMPORTED_MODULE_0__/* .customNavigation */ ._l),
  isr: {
    enable: resolveBool(process.env.JAMIFY_NEXT_ISR, _appConfig__WEBPACK_IMPORTED_MODULE_0__/* .isr */ .o3),
    maxNumberOfPosts: resolveNumber(process.env.JAMIFY_NEXT_ISR_MAX_NUMBER_POSTS, _appConfig__WEBPACK_IMPORTED_MODULE_0__/* .maxNumberOfPosts */ .nm),
    maxNumberOfPages: resolveNumber(process.env.JAMIFY_NEXT_ISR_MAX_NUMBER_PAGES, _appConfig__WEBPACK_IMPORTED_MODULE_0__/* .maxNumberOfPages */ .T8)
  }
};

/***/ })

};
;