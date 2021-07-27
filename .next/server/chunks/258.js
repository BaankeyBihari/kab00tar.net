exports.id = 258;
exports.ids = [258];
exports.modules = {

/***/ 8277:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": function() { return /* binding */ SEO; },
/* harmony export */   "N": function() { return /* binding */ authorSameAs; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(701);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8835);
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _meta_siteDefaults__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8211);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const getPublicTags = tags => tags ? tags.filter(tag => {
  var _tag$name;

  return ((_tag$name = tag.name) === null || _tag$name === void 0 ? void 0 : _tag$name.substr(0, 5)) !== 'hash-';
}) : [];

const SEO = props => {
  const {
    title: t,
    description: d,
    seoImage,
    settings,
    article
  } = props;
  const {
    og_title,
    og_description,
    published_at,
    updated_at,
    primary_author,
    primary_tag,
    twitter_title,
    twitter_description
  } = article || {};
  const type = article ? 'article' : 'website';
  const facebook = primary_author === null || primary_author === void 0 ? void 0 : primary_author.facebook;
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const siteUrl = settings.processEnv.siteUrl;
  const canonical = url__WEBPACK_IMPORTED_MODULE_3___default().resolve(siteUrl, router.asPath);
  const {
    twitter,
    title: settingsTitle,
    description: settingsDescription,
    meta_title,
    meta_description
  } = settings;
  const title = t || meta_title || settingsTitle || _meta_siteDefaults__WEBPACK_IMPORTED_MODULE_4__/* .siteTitleMeta */ .wJ;
  const description = d || meta_description || settingsDescription || _meta_siteDefaults__WEBPACK_IMPORTED_MODULE_4__/* .siteDescriptionMeta */ .Gj;
  const jsonLd = getJsonLd(_objectSpread(_objectSpread({}, props), {}, {
    title,
    description,
    seoImage
  }));
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
      children: title
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
      name: "description",
      content: description
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
      rel: "canonical",
      href: canonical
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
      property: "og:type",
      content: type
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
      property: "og:title",
      content: og_title || title
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
      property: "og:description",
      content: og_description || description
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
      property: "og:site_name",
      content: title
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
      property: "og:url",
      content: canonical
    }), published_at && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
      property: "article:published_time",
      content: published_at
    }), updated_at && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
      property: "article:modified_time",
      content: updated_at
    }), getPublicTags(article === null || article === void 0 ? void 0 : article.tags).map(({
      name: keyword
    }, i) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
      property: "article:tag",
      content: keyword
    }, i)), facebook && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
      property: "article:author",
      content: `https://www.facebook.com/${facebook.replace(/^\//, ``)}/`
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
      property: "twitter:title",
      content: twitter_title || title
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
      property: "twitter:description",
      content: twitter_description || description
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
      property: "twitter:url",
      content: canonical
    }), primary_author && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
      property: "twitter:label1",
      content: "Written by"
    }), primary_author && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
      property: "twitter:data1",
      content: primary_author === null || primary_author === void 0 ? void 0 : primary_author.name
    }), primary_tag && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
      property: "twitter:label2",
      content: "Filed under"
    }), primary_tag && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
      property: "twitter:data2",
      content: primary_tag === null || primary_tag === void 0 ? void 0 : primary_tag.name
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
      property: "twitter:card",
      content: "summary_large_image"
    }), twitter && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
      property: "twitter:creator",
      content: twitter
    }), twitter && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
      property: "twitter:site",
      content: `https://twitter.com/${twitter.replace(/^@/, ``)}/`
    }), seoImage && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
      name: "twitter:image",
      content: seoImage.url
    }), seoImage && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
      property: "og:image",
      content: seoImage.url
    }), seoImage && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
      property: "og:image:width",
      content: `${seoImage.dimensions.width}`
    }), seoImage && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
      property: "og:image:height",
      content: `${seoImage.dimensions.height}`
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
      type: "application/ld+json",
      dangerouslySetInnerHTML: {
        __html: JSON.stringify(jsonLd)
      }
    })]
  });
};
const authorSameAs = author => {
  const {
    website,
    twitter,
    facebook
  } = author;
  const authorProfiles = [website, twitter && `https://twitter.com/${twitter.replace(/^@/, ``)}/`, facebook && `https://www.facebook.com/${facebook.replace(/^\//, ``)}/`].filter(element => !!element);
  return authorProfiles.length > 0 && `["${authorProfiles.join(`", "`)}"]` || undefined;
};

const getJsonLd = ({
  title,
  description,
  canonical,
  seoImage,
  settings,
  sameAs,
  article
}) => {
  const siteUrl = settings.processEnv.siteUrl;
  const pubLogoUrl = settings.logo || url__WEBPACK_IMPORTED_MODULE_3___default().resolve(siteUrl, _meta_siteDefaults__WEBPACK_IMPORTED_MODULE_4__/* .siteIcon */ .__);
  const type = article ? 'Article' : 'WebSite';
  return _objectSpread(_objectSpread({
    '@context': `https://schema.org/`,
    '@type': type,
    sameAs,
    url: canonical
  }, article && _objectSpread({}, getArticleJsonLd(article))), {}, {
    image: _objectSpread({}, seoImage && _objectSpread({
      '@type': `ImageObject`,
      url: seoImage.url
    }, seoImage.dimensions)),
    publisher: {
      '@type': `Organization`,
      name: title,
      logo: {
        '@type': `ImageObject`,
        url: pubLogoUrl,
        width: 60,
        height: 60
      }
    },
    mainEntityOfPage: {
      '@type': `WebPage`,
      '@id': siteUrl
    },
    description
  });
};

const getArticleJsonLd = article => {
  const {
    published_at,
    updated_at,
    primary_author,
    tags,
    meta_title,
    title
  } = article;
  const name = primary_author === null || primary_author === void 0 ? void 0 : primary_author.name;
  const image = primary_author === null || primary_author === void 0 ? void 0 : primary_author.profile_image;
  const sameAs = primary_author && authorSameAs(primary_author) || undefined;
  const publicTags = getPublicTags(tags);
  const keywords = publicTags !== null && publicTags !== void 0 && publicTags.length ? publicTags.join(`, `) : undefined;
  const headline = meta_title || title;
  return {
    datePublished: published_at,
    dateModified: updated_at,
    author: {
      '@type': 'Article',
      name,
      image,
      sameAs
    },
    keywords,
    headline
  };
};

/***/ }),

/***/ 8953:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": function() { return /* binding */ seoImage; }
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5622);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8835);
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _meta_siteDefaults__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8211);
/* harmony import */ var _lib_images__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5984);




const seoImage = async props => {
  const {
    siteUrl,
    imageUrl,
    imageName
  } = props;
  const defaultDimensions = {
    width: 1200,
    height: 800
  };

  if (imageUrl) {
    const url = imageUrl;
    const dimensions = (await (0,_lib_images__WEBPACK_IMPORTED_MODULE_2__/* .imageDimensions */ .PC)(url)) || defaultDimensions;
    return {
      url,
      dimensions
    };
  }

  const publicRoot = path__WEBPACK_IMPORTED_MODULE_0___default().join(process.cwd(), 'public');
  const file = path__WEBPACK_IMPORTED_MODULE_0___default().join(publicRoot, imageName || _meta_siteDefaults__WEBPACK_IMPORTED_MODULE_3__/* .siteImage */ .Gn);
  const dimensions = (await (0,_lib_images__WEBPACK_IMPORTED_MODULE_2__/* .imageDimensionsFromFile */ .Fu)(file)) || defaultDimensions;
  const url = (0,url__WEBPACK_IMPORTED_MODULE_1__.resolve)(siteUrl, imageName || _meta_siteDefaults__WEBPACK_IMPORTED_MODULE_3__/* .siteImage */ .Gn);
  return {
    url,
    dimensions
  };
};

/***/ })

};
;