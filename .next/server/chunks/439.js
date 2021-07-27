exports.id = 439;
exports.ids = [439];
exports.modules = {

/***/ 6366:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "p": function() { return /* binding */ AuthorList; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./utils/routing.ts
var routing = __webpack_require__(4950);
// EXTERNAL MODULE: ./utils/use-lang.ts + 1 modules
var use_lang = __webpack_require__(3148);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: ./components/effects/HoverOnAvatar.tsx
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class HoverOnAvatar extends external_react_.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "anchorRef", void 0);

    _defineProperty(this, "activeClass", void 0);

    _defineProperty(this, "hoverTimeout", void 0);

    _defineProperty(this, "state", void 0);

    _defineProperty(this, "onHoverIn", () => {
      this.hoverTimeout && clearTimeout(this.hoverTimeout);
      this.setState({
        currentClass: this.activeClass
      });
    });

    _defineProperty(this, "onHoverOut", () => {
      // no delay for multiple authors
      this.hoverTimeout = setTimeout(() => {
        this.setState({
          currentClass: ``
        });
      }, 50);
    });

    this.anchorRef = /*#__PURE__*/(0,external_react_.createRef)();
    this.activeClass = this.props.activeClass;
    this.hoverTimeout = undefined;
    this.state = {
      currentClass: ''
    };
  }

  componentDidMount() {
    var _this$anchorRef, _this$anchorRef$curre, _this$anchorRef2, _this$anchorRef2$curr;

    (_this$anchorRef = this.anchorRef) === null || _this$anchorRef === void 0 ? void 0 : (_this$anchorRef$curre = _this$anchorRef.current) === null || _this$anchorRef$curre === void 0 ? void 0 : _this$anchorRef$curre.addEventListener(`mouseout`, this.onHoverOut, {
      passive: true
    });
    (_this$anchorRef2 = this.anchorRef) === null || _this$anchorRef2 === void 0 ? void 0 : (_this$anchorRef2$curr = _this$anchorRef2.current) === null || _this$anchorRef2$curr === void 0 ? void 0 : _this$anchorRef2$curr.addEventListener(`mouseover`, this.onHoverIn, {
      passive: true
    });
  }

  componentWillUnmount() {
    var _this$anchorRef3, _this$anchorRef3$curr, _this$anchorRef4, _this$anchorRef4$curr;

    this.hoverTimeout && clearTimeout(this.hoverTimeout);
    (_this$anchorRef3 = this.anchorRef) === null || _this$anchorRef3 === void 0 ? void 0 : (_this$anchorRef3$curr = _this$anchorRef3.current) === null || _this$anchorRef3$curr === void 0 ? void 0 : _this$anchorRef3$curr.removeEventListener(`mouseover`, this.onHoverIn);
    (_this$anchorRef4 = this.anchorRef) === null || _this$anchorRef4 === void 0 ? void 0 : (_this$anchorRef4$curr = _this$anchorRef4.current) === null || _this$anchorRef4$curr === void 0 ? void 0 : _this$anchorRef4$curr.removeEventListener(`mouseout`, this.onHoverOut);
  }

  render() {
    return this.props.render(this);
  }

}
// EXTERNAL MODULE: ./components/icons/AvatarIcon.tsx
var AvatarIcon = __webpack_require__(6067);
;// CONCATENATED MODULE: ./components/AuthorList.tsx




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { AuthorList_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function AuthorList_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable @next/next/no-img-element */






const AuthorList = ({
  settings,
  authors,
  isPost
}) => {
  const text = (0,use_lang/* get */.U)((0,use_lang/* getLang */.V)());
  const {
    nextImages
  } = settings.processEnv;
  const {
    url: cmsUrl
  } = settings;
  return /*#__PURE__*/jsx_runtime_.jsx("ul", {
    className: "author-list",
    children: authors === null || authors === void 0 ? void 0 : authors.map((author, i) => {
      const url = (0,routing/* resolveUrl */.K)({
        cmsUrl,
        slug: author.slug,
        url: author.url || undefined
      });
      const profileImg = author.profileImage;
      return /*#__PURE__*/jsx_runtime_.jsx(HoverOnAvatar, {
        activeClass: "hovered",
        render: hover => /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
          ref: hover.anchorRef,
          className: "author-list-item",
          children: [!isPost && /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "author-name-tooltip",
            children: author.name
          }), isPost && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: `author-card ${hover.state.currentClass}`,
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "author-profile-image",
              children: profileImg && nextImages.feature ? /*#__PURE__*/jsx_runtime_.jsx(next_image.default, _objectSpread({
                className: "author-profile-image",
                src: profileImg.url,
                alt: author.name,
                layout: "responsive",
                quality: nextImages.quality
              }, profileImg.dimensions)) : author.profile_image && /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: author.profile_image,
                alt: author.name
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "author-info",
              children: author.bio ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "bio",
                children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
                  children: author.name
                }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                  children: author.bio
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                    href: url,
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      children: text(`MORE_POSTS`)
                    })
                  }), ' ', text(`BY`), " ", author.name, "."]
                })]
              }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
                  children: author.name
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                  children: [text(`READ`), ' ', /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                    href: url,
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      children: text(`MORE_POSTS_SM`)
                    })
                  }), ' ', text(`BY_THIS_AUTHOR`), "."]
                })]
              })
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: url,
            children: profileImg && nextImages.feature ? /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: `${isPost && `author` || `static`}-avatar`,
              "aria-label": author.name,
              children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, _objectSpread({
                src: profileImg.url,
                alt: author.name,
                layout: "responsive",
                quality: nextImages.quality
              }, profileImg.dimensions))
            }) : author.profile_image ? /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: `${isPost && `author` || `static`}-avatar`,
              "aria-label": author.name,
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: author.profile_image,
                alt: author.name
              })
            }) : /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: `${isPost && `author` || `static`}-avatar author-profile-image`,
              "aria-label": author.name,
              children: /*#__PURE__*/jsx_runtime_.jsx(AvatarIcon/* AvatarIcon */.f, {})
            })
          })]
        }, i)
      }, i);
    })
  });
};

/***/ }),

/***/ 5887:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "A": function() { return /* binding */ Layout; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./components/contexts/themeProvider.tsx
var themeProvider = __webpack_require__(7326);
;// CONCATENATED MODULE: ./components/DocumentHead.tsx




const addDarkClass = ({
  className,
  dark
}) => `${className} ${dark === `dark` ? dark : ``}`;

const addActionClass = ({
  className,
  action = `ssr`,
  success
}) => {
  if (!success || Array.isArray(action) || Array.isArray(success)) {
    return className;
  }

  return `${className} ${action === `subscribe` ? success === `true` ? ` subscribe-success` : ` subscribe-failure` : ``}`;
};

const DocumentHead = ({
  className
}) => {
  const {
    getDark
  } = (0,themeProvider/* useTheme */.F)();
  const router = (0,router_.useRouter)();
  const {
    action,
    success
  } = router.query;
  const cln = addActionClass({
    className,
    action,
    success
  });
  const dark = getDark();
  const bodyClass = addDarkClass({
    className: cln,
    dark
  });
  /**
   * Not declarative, but allows to get rid of Helmet which
   * 1. saves 5 KB in bundle size
   * 2. allows strict mode in next.config
   *
  */

  (0,external_react_.useEffect)(() => {
    const body = document.querySelector('body');
    if (body) body.className = bodyClass;
  }, [bodyClass]);
  return null;
};
// EXTERNAL MODULE: ./components/SiteNav.tsx + 11 modules
var SiteNav = __webpack_require__(1362);
;// CONCATENATED MODULE: ./components/StickyNav.tsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const StickyNav = props => /*#__PURE__*/jsx_runtime_.jsx("div", {
  className: "outer site-nav-main",
  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "inner",
    children: /*#__PURE__*/jsx_runtime_.jsx(SiteNav/* SiteNav */.h, _objectSpread({}, props))
  })
});
// EXTERNAL MODULE: ./components/contexts/overlayProvider.tsx
var overlayProvider = __webpack_require__(4884);
// EXTERNAL MODULE: ./utils/use-lang.ts + 1 modules
var use_lang = __webpack_require__(3148);
// EXTERNAL MODULE: ./components/meta/siteDefaults.ts
var siteDefaults = __webpack_require__(8211);
// EXTERNAL MODULE: ./components/SubscribeForm.tsx + 1 modules
var SubscribeForm = __webpack_require__(1223);
;// CONCATENATED MODULE: ./components/SubscribeOverlay.tsx



function SubscribeOverlay_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function SubscribeOverlay_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { SubscribeOverlay_ownKeys(Object(source), true).forEach(function (key) { SubscribeOverlay_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { SubscribeOverlay_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function SubscribeOverlay_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable @next/next/no-img-element */




const SubscribeOverlay = ({
  settings
}) => {
  const text = (0,use_lang/* get */.U)((0,use_lang/* getLang */.V)());
  const {
    isOpen,
    handleClose
  } = (0,overlayProvider/* useOverlay */.I)();
  const title = text(`SITE_TITLE`, settings.title);
  const siteLogo = settings.logo || siteDefaults/* siteIcon */.__;
  const openingStyle = {
    opacity: 1,
    pointerEvents: `auto`
  };
  const closingStyle = {
    opacity: 0,
    pointerEvents: `none`
  };
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "subscribe-overlay",
    style: isOpen ? openingStyle : closingStyle,
    children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
      className: "subscribe-close-overlay",
      onClick: handleClose
    }), /*#__PURE__*/jsx_runtime_.jsx("a", {
      className: "subscribe-close-button",
      onClick: handleClose
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "subscribe-overlay-content",
      children: [siteLogo && /*#__PURE__*/jsx_runtime_.jsx("img", {
        className: "subscribe-overlay-logo",
        src: siteLogo,
        alt: title
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "subscribe-form",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h1", {
          className: "subscribe-overlay-title",
          children: [text(`SUBSCRIBE_TO`), " ", title]
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "subscribe-overlay-description",
          children: text(`SUBSCRIBE_OVERLAY`)
        }), /*#__PURE__*/jsx_runtime_.jsx(SubscribeForm/* SubscribeForm */.g, SubscribeOverlay_objectSpread({}, {
          settings
        }))]
      })]
    })]
  });
};
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(3289);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
;// CONCATENATED MODULE: ./components/SubscribeSuccess.tsx






const SubscribeSuccess = ({
  title
}) => {
  const text = (0,use_lang/* get */.U)((0,use_lang/* getLang */.V)());
  const router = (0,router_.useRouter)();
  const {
    action,
    success
  } = router.query;
  const {
    0: type,
    1: setType
  } = (0,external_react_.useState)('');
  const {
    0: closeState,
    1: setCloseState
  } = (0,external_react_.useState)('');
  const {
    0: closeButtonOpacity,
    1: setCloseButtonOpacity
  } = (0,external_react_.useState)(0);
  const showBanner = action && action === `subscribe` && success !== undefined;
  const message = success === `true` ? `${text(`SUBSCRIBED_TO`)} ${title}!` : `${text(`SUBSCRIBED_FAILED`)}`;
  (0,external_react_.useEffect)(() => {
    const timer = setTimeout(() => setCloseButtonOpacity(1), 1000);
    setType(success === `true` ? `success` : `failure`);
    return () => clearTimeout(timer);
  }, [setType, setCloseButtonOpacity, action, success]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: style_default().dynamic([["3866349096", [showBanner ? 1 : 0, closeButtonOpacity]]]) + " " + `subscribe-notification subscribe-${type}-message${closeState}`,
    children: [/*#__PURE__*/jsx_runtime_.jsx((style_default()), {
      id: "3866349096",
      dynamic: [showBanner ? 1 : 0, closeButtonOpacity],
      children: [`.__jsx-style-dynamic-selector{opacity:${showBanner ? 1 : 0};}`, "@media (max-width:368px){.__jsx-style-dynamic-selector{padding:5.5rem 0 2rem;}}", `a.__jsx-style-dynamic-selector{left:unset;right:0;width:5rem;opacity:${closeButtonOpacity};}`, "div.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector:hover{cursor:pointer;}"]
    }), /*#__PURE__*/jsx_runtime_.jsx("a", {
      onClick: e => {
        e.preventDefault();
        setCloseState(` close`);
      },
      className: style_default().dynamic([["3866349096", [showBanner ? 1 : 0, closeButtonOpacity]]]) + " " + "subscribe-close-button"
    }), message]
  });
};
// EXTERNAL MODULE: external "url"
var external_url_ = __webpack_require__(8835);
;// CONCATENATED MODULE: ./components/Layout.tsx




function Layout_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Layout_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Layout_ownKeys(Object(source), true).forEach(function (key) { Layout_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Layout_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Layout_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








/**
 * Main layout component
 *
 * The Layout component wraps around each page and template.
 * It also provides the header, footer as well as the main
 * styles, and meta data for each page.
 *
 */

const Layout = ({
  settings,
  header,
  children,
  isHome,
  sticky,
  previewPosts,
  bodyClass,
  errorClass
}) => {
  const text = (0,use_lang/* get */.U)((0,use_lang/* getLang */.V)());
  const site = settings;
  const title = text(`SITE_TITLE`, site.title);
  const {
    siteUrl,
    memberSubscriptions
  } = settings.processEnv;
  const twitterUrl = site.twitter && `https://twitter.com/${site.twitter.replace(/^@/, ``)}`;
  const facebookUrl = site.facebook && `https://www.facebook.com/${site.facebook.replace(/^\//, ``)}`;
  errorClass = errorClass || ``;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(DocumentHead, {
      className: bodyClass
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "site-wrapper",
      children: [header, /*#__PURE__*/jsx_runtime_.jsx("main", {
        ref: isHome && sticky && sticky.anchorRef || null,
        id: "site-main",
        className: `site-main outer ${errorClass}`,
        children: children
      }), isHome && /*#__PURE__*/jsx_runtime_.jsx(StickyNav, Layout_objectSpread({
        className: `site-nav ${sticky && sticky.state.currentClass}`
      }, {
        siteUrl,
        settings
      })), previewPosts, /*#__PURE__*/jsx_runtime_.jsx("footer", {
        className: "site-footer outer",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "site-footer-content inner",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
            className: "copyright",
            children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
              href: (0,external_url_.resolve)(siteUrl, ''),
              children: title
            }), " \xA9 ", new Date().getFullYear()]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", {
            className: "site-footer-nav",
            children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                children: text(`LATEST_POSTS`)
              })
            }), site.facebook && /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: facebookUrl,
              target: "_blank",
              rel: "noopener noreferrer",
              children: "Facebook"
            }), site.twitter && /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: twitterUrl,
              target: "_blank",
              rel: "noopener noreferrer",
              children: "Twitter"
            }), /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: "https://www.jamify.org",
              target: "_blank",
              rel: "noopener noreferrer",
              children: "Jamify"
            })]
          })]
        })
      })]
    }), memberSubscriptions && /*#__PURE__*/jsx_runtime_.jsx(SubscribeSuccess, Layout_objectSpread({}, {
      title
    })), memberSubscriptions && /*#__PURE__*/jsx_runtime_.jsx(SubscribeOverlay, Layout_objectSpread({}, {
      settings
    }))]
  });
};

/***/ }),

/***/ 2982:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": function() { return /* binding */ PostCard; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8349);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_readingTime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8110);
/* harmony import */ var _utils_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4950);
/* harmony import */ var _utils_use_lang__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3148);
/* harmony import */ var _components_AuthorList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6366);
/* harmony import */ var _helpers_PostClass__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9889);
/* harmony import */ var _lib_collections__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6123);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable @next/next/no-img-element */









const PostCard = ({
  settings,
  post,
  num,
  isHome
}) => {
  var _post$authors;

  const {
    nextImages
  } = settings.processEnv;
  const text = (0,_utils_use_lang__WEBPACK_IMPORTED_MODULE_4__/* .get */ .U)((0,_utils_use_lang__WEBPACK_IMPORTED_MODULE_4__/* .getLang */ .V)());
  const cmsUrl = settings.url;
  const collectionPath = _lib_collections__WEBPACK_IMPORTED_MODULE_6__/* .collections.getCollectionByNode */ .s.getCollectionByNode(post);
  const url = (0,_utils_routing__WEBPACK_IMPORTED_MODULE_7__/* .resolveUrl */ .K)({
    cmsUrl,
    collectionPath,
    slug: post.slug,
    url: post.url
  });
  const featImg = post.featureImage;
  const readingTime = (0,_lib_readingTime__WEBPACK_IMPORTED_MODULE_8__/* .readingTime */ .f)(post).replace(`min read`, text(`MIN_READ`));
  const postClass = (0,_helpers_PostClass__WEBPACK_IMPORTED_MODULE_9__/* .PostClass */ .l)({
    tags: post.tags,
    isFeatured: post.featured,
    isImage: !!featImg
  });
  const large = featImg && isHome && num !== undefined && 0 === num % 6 && `post-card-large` || ``;
  const authors = post === null || post === void 0 ? void 0 : (_post$authors = post.authors) === null || _post$authors === void 0 ? void 0 : _post$authors.filter((_, i) => i < 2 ? true : false);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
    className: `post-card ${postClass} ${large}`,
    children: [featImg && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
      href: url,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
        className: "post-card-image-link",
        "aria-label": post.title,
        children: nextImages.feature ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "post-card-image",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__.default, {
            src: featImg.url,
            alt: post.title,
            sizes: "(max-width: 640px) 320px, (max-width: 1000px) 500px, 680px",
            layout: "fill",
            objectFit: "cover",
            quality: nextImages.quality
          })
        }) : post.feature_image && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
          className: "post-card-image",
          src: post.feature_image,
          alt: post.title
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "post-card-content",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
        href: url,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
          className: "post-card-content-link",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
            className: "post-card-header",
            children: [post.primary_tag && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "post-card-primary-tag",
              children: post.primary_tag.name
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
              className: "post-card-title",
              children: post.title
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
            className: "post-card-excerpt",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
              children: post.excerpt
            })
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
        className: "post-card-meta",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_AuthorList__WEBPACK_IMPORTED_MODULE_5__/* .AuthorList */ .p, _objectSpread({}, {
          settings,
          authors: post.authors
        })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "post-card-byline-content",
          children: [post.authors && post.authors.length > 2 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            children: text(`MULTIPLE_AUTHORS`)
          }), post.authors && post.authors.length < 3 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            children: authors === null || authors === void 0 ? void 0 : authors.map((author, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
              children: [i > 0 ? `, ` : ``, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
                href: (0,_utils_routing__WEBPACK_IMPORTED_MODULE_7__/* .resolveUrl */ .K)({
                  cmsUrl,
                  slug: author.slug,
                  url: author.url || undefined
                }),
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                  children: author.name
                })
              })]
            }, i))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
            className: "post-card-byline-date",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("time", {
              dateTime: post.published_at || '',
              children: [dayjs__WEBPACK_IMPORTED_MODULE_3___default()(post.published_at || '').format('D MMM YYYY'), "\xA0"]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
              className: "bull",
              children: "\u2022 "
            }), " ", readingTime]
          })]
        })]
      })]
    })]
  });
};

/***/ }),

/***/ 1362:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "h": function() { return /* binding */ SiteNav; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "url"
var external_url_ = __webpack_require__(8835);
;// CONCATENATED MODULE: ./components/Navigation.tsx


const Navigation = ({
  data,
  navClass
}) => {
  const items = [];
  data === null || data === void 0 ? void 0 : data.map((navItem, i) => {
    if (navItem.url.match(/^\s?http(s?)/gi)) {
      items.push( /*#__PURE__*/jsx_runtime_.jsx("li", {
        className: `nav-${navItem.label.toLowerCase()}`,
        role: "menuitem",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: navClass,
          href: navItem.url,
          target: "_blank",
          rel: "noopener noreferrer",
          children: navItem.label
        })
      }, i));
    } else {
      items.push( /*#__PURE__*/jsx_runtime_.jsx("li", {
        className: `nav-${navItem.label.toLowerCase()}`,
        role: "menuitem",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: navClass,
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: navItem.url,
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: navItem.label
            })
          })
        })
      }, i));
    }
  });
  return /*#__PURE__*/jsx_runtime_.jsx("ul", {
    className: "nav",
    role: "menu",
    children: items
  });
};
;// CONCATENATED MODULE: ./components/icons/TwitterIcon.tsx

const TwitterIcon = () => /*#__PURE__*/jsx_runtime_.jsx("svg", {
  viewBox: "0 0 32 32",
  children: /*#__PURE__*/jsx_runtime_.jsx("path", {
    d: "M30.063 7.313c-.813 1.125-1.75 2.125-2.875 2.938v.75c0 1.563-.188 3.125-.688 4.625a15.088 15.088 0 0 1-2.063 4.438c-.875 1.438-2 2.688-3.25 3.813a15.015 15.015 0 0 1-4.625 2.563c-1.813.688-3.75 1-5.75 1-3.25 0-6.188-.875-8.875-2.625.438.063.875.125 1.375.125 2.688 0 5.063-.875 7.188-2.5-1.25 0-2.375-.375-3.375-1.125s-1.688-1.688-2.063-2.875c.438.063.813.125 1.125.125.5 0 1-.063 1.5-.25-1.313-.25-2.438-.938-3.313-1.938a5.673 5.673 0 0 1-1.313-3.688v-.063c.813.438 1.688.688 2.625.688a5.228 5.228 0 0 1-1.875-2c-.5-.875-.688-1.813-.688-2.75 0-1.063.25-2.063.75-2.938 1.438 1.75 3.188 3.188 5.25 4.25s4.313 1.688 6.688 1.813a5.579 5.579 0 0 1 1.5-5.438c1.125-1.125 2.5-1.688 4.125-1.688s3.063.625 4.188 1.813a11.48 11.48 0 0 0 3.688-1.375c-.438 1.375-1.313 2.438-2.563 3.188 1.125-.125 2.188-.438 3.313-.875z"
  })
});
;// CONCATENATED MODULE: ./components/icons/FacebookIcon.tsx

const FacebookIcon = () => /*#__PURE__*/jsx_runtime_.jsx("svg", {
  viewBox: "0 0 32 32",
  children: /*#__PURE__*/jsx_runtime_.jsx("path", {
    d: "M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm5.204 4.911h-3.546c-2.103 0-4.443.885-4.443 3.934.01 1.062 0 2.08 0 3.225h-2.433v3.872h2.509v11.147h4.61v-11.22h3.042l.275-3.81h-3.397s.007-1.695 0-2.187c0-1.205 1.253-1.136 1.329-1.136h2.054V4.911z"
  })
});
;// CONCATENATED MODULE: ./components/icons/RssIcon.tsx


const RssIcon = () => /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
  viewBox: "0 0 24 24",
  children: [/*#__PURE__*/jsx_runtime_.jsx("circle", {
    cx: "6.18",
    cy: "17.82",
    r: "2.18"
  }), /*#__PURE__*/jsx_runtime_.jsx("path", {
    d: "M4 4.44v2.83c7.03 0 12.73 5.7 12.73 12.73h2.83c0-8.59-6.97-15.56-15.56-15.56zm0 5.66v2.83c3.9 0 7.07 3.17 7.07 7.07h2.83c0-5.47-4.43-9.9-9.9-9.9z"
  })]
});
;// CONCATENATED MODULE: ./components/SocialRss.tsx



const SocialRss = ({
  siteUrl
}) => /*#__PURE__*/jsx_runtime_.jsx("a", {
  className: "rss-button",
  href: `https://feedly.com/i/subscription/feed/${(0,external_url_.resolve)(siteUrl, 'rss.xml')}`,
  target: "_blank",
  rel: "noopener noreferrer",
  title: "Rss",
  children: /*#__PURE__*/jsx_runtime_.jsx(RssIcon, {})
});
;// CONCATENATED MODULE: ./components/SocialLinks.tsx




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const SocialLinks = ({
  siteUrl,
  site
}) => {
  const twitterUrl = site.twitter && `https://twitter.com/${site.twitter.replace(/^@/, ``)}`;
  const facebookUrl = site.facebook && `https://www.facebook.com/${site.facebook.replace(/^\//, ``)}`;
  const {
    processEnv
  } = site;
  const {
    memberSubscriptions
  } = processEnv;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [site.facebook && /*#__PURE__*/jsx_runtime_.jsx("a", {
      href: facebookUrl,
      className: "social-link social-link-fb",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Facebook",
      children: /*#__PURE__*/jsx_runtime_.jsx(FacebookIcon, {})
    }), site.twitter && /*#__PURE__*/jsx_runtime_.jsx("a", {
      href: twitterUrl,
      className: "social-link social-link-tw",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Twitter",
      children: /*#__PURE__*/jsx_runtime_.jsx(TwitterIcon, {})
    }), !memberSubscriptions && /*#__PURE__*/jsx_runtime_.jsx(SocialRss, _objectSpread({}, {
      siteUrl
    }))]
  });
};
// EXTERNAL MODULE: ./components/contexts/themeProvider.tsx
var themeProvider = __webpack_require__(7326);
// EXTERNAL MODULE: ./utils/use-lang.ts + 1 modules
var use_lang = __webpack_require__(3148);
;// CONCATENATED MODULE: ./components/icons/MoonIcon.tsx

const MoonIcon = () => /*#__PURE__*/jsx_runtime_.jsx("svg", {
  viewBox: "0 0 512 512",
  children: /*#__PURE__*/jsx_runtime_.jsx("path", {
    d: "M264,480A232,232,0,0,1,32,248C32,154,86,69.72,169.61,33.33a16,16,0,0,1,21.06,21.06C181.07,76.43,176,104.66,176,136c0,110.28,89.72,200,200,200,31.34,0,59.57-5.07,81.61-14.67a16,16,0,0,1,21.06,21.06C442.28,426,358,480,264,480Z"
  })
});
;// CONCATENATED MODULE: ./components/icons/SunIcon.tsx


const SunIcon = () => /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
  viewBox: "0 0 512 512",
  children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
    d: "M256,118a22,22,0,0,1-22-22V48a22,22,0,0,1,44,0V96A22,22,0,0,1,256,118Z"
  }), /*#__PURE__*/jsx_runtime_.jsx("path", {
    d: "M256,486a22,22,0,0,1-22-22V416a22,22,0,0,1,44,0v48A22,22,0,0,1,256,486Z"
  }), /*#__PURE__*/jsx_runtime_.jsx("path", {
    d: "M369.14,164.86a22,22,0,0,1-15.56-37.55l33.94-33.94a22,22,0,0,1,31.11,31.11l-33.94,33.94A21.93,21.93,0,0,1,369.14,164.86Z"
  }), /*#__PURE__*/jsx_runtime_.jsx("path", {
    d: "M108.92,425.08a22,22,0,0,1-15.55-37.56l33.94-33.94a22,22,0,1,1,31.11,31.11l-33.94,33.94A21.94,21.94,0,0,1,108.92,425.08Z"
  }), /*#__PURE__*/jsx_runtime_.jsx("path", {
    d: "M464,278H416a22,22,0,0,1,0-44h48a22,22,0,0,1,0,44Z"
  }), /*#__PURE__*/jsx_runtime_.jsx("path", {
    d: "M96,278H48a22,22,0,0,1,0-44H96a22,22,0,0,1,0,44Z"
  }), /*#__PURE__*/jsx_runtime_.jsx("path", {
    d: "M403.08,425.08a21.94,21.94,0,0,1-15.56-6.45l-33.94-33.94a22,22,0,0,1,31.11-31.11l33.94,33.94a22,22,0,0,1-15.55,37.56Z"
  }), /*#__PURE__*/jsx_runtime_.jsx("path", {
    d: "M142.86,164.86a21.89,21.89,0,0,1-15.55-6.44L93.37,124.48a22,22,0,0,1,31.11-31.11l33.94,33.94a22,22,0,0,1-15.56,37.55Z"
  }), /*#__PURE__*/jsx_runtime_.jsx("path", {
    d: "M256,358A102,102,0,1,1,358,256,102.12,102.12,0,0,1,256,358Z"
  })]
});
;// CONCATENATED MODULE: ./components/DarkModeToggle.tsx





const DarkModeToggle = () => {
  const {
    dark,
    toggleDark
  } = (0,themeProvider/* useTheme */.F)();
  const text = (0,use_lang/* get */.U)((0,use_lang/* getLang */.V)());
  return /*#__PURE__*/jsx_runtime_.jsx("button", {
    className: "social-link social-link-tw",
    onClick: toggleDark,
    title: text(`DARK_MODE`),
    style: {
      backgroundColor: 'transparent'
    },
    children: dark === null ? /*#__PURE__*/jsx_runtime_.jsx("svg", {
      viewBox: "0 0 512 512"
    }) : dark === 'dark' ? /*#__PURE__*/jsx_runtime_.jsx(SunIcon, {}) : /*#__PURE__*/jsx_runtime_.jsx(MoonIcon, {})
  });
};
;// CONCATENATED MODULE: ./components/DarkMode.tsx


const DarkMode = ({
  settings
}) => {
  const {
    darkMode
  } = settings.processEnv;
  if (darkMode.defaultMode === null) return null;
  return /*#__PURE__*/jsx_runtime_.jsx(DarkModeToggle, {});
};
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(3289);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
// EXTERNAL MODULE: ./components/contexts/overlayProvider.tsx
var overlayProvider = __webpack_require__(4884);
;// CONCATENATED MODULE: ./components/SubscribeButton.tsx




 // The actual component

const SubscribeButton = () => {
  const text = (0,use_lang/* get */.U)((0,use_lang/* getLang */.V)());
  const {
    handleOpen
  } = (0,overlayProvider/* useOverlay */.I)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
    onClick: handleOpen,
    className: "jsx-948850211" + " " + "subscribe-button",
    children: [text(`SUBSCRIBE`), /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
      id: "948850211",
      children: ["a.jsx-948850211:hover{-webkit-text-decoration:none;text-decoration:none;opacity:1;cursor:pointer;}"]
    })]
  });
};
;// CONCATENATED MODULE: ./components/SiteNav.tsx



function SiteNav_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function SiteNav_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { SiteNav_ownKeys(Object(source), true).forEach(function (key) { SiteNav_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { SiteNav_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function SiteNav_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable @next/next/no-img-element */








const SiteNav = ({
  settings,
  className,
  postTitle
}) => {
  const text = (0,use_lang/* get */.U)((0,use_lang/* getLang */.V)());
  const {
    processEnv
  } = settings;
  const {
    customNavigation,
    nextImages,
    memberSubscriptions
  } = processEnv;
  const config = {
    overwriteNavigation: customNavigation || [],
    addNavigation: customNavigation || []
  };
  const site = settings;
  const siteUrl = settings.processEnv.siteUrl;
  const title = text(`SITE_TITLE`, site.title);
  const secondaryNav = site.secondary_navigation && 0 < site.secondary_navigation.length;
  const siteLogo = site.logoImage;
  const navigation = site.navigation; // overwrite navigation if specified in options

  const labels = navigation === null || navigation === void 0 ? void 0 : navigation.map(item => item.label);

  if (labels && labels.length > 0 && config.overwriteNavigation && config.overwriteNavigation.length > 0) {
    config.overwriteNavigation.map(item => {
      const index = item.label && labels.indexOf(item.label) || -1;

      if (index > -1 && navigation && navigation[index]) {
        navigation[index].url = item.url;
      }
    });
  } // add navigation if specified in options


  const urls = navigation === null || navigation === void 0 ? void 0 : navigation.map(item => item.url);

  if (config.addNavigation && config.addNavigation.length > 0) {
    config.addNavigation.map(item => (urls === null || urls === void 0 ? void 0 : urls.indexOf(item.url)) === -1 && (navigation === null || navigation === void 0 ? void 0 : navigation.push(item)));
  } // targetHeight is coming from style .site-nav-logo img


  const targetHeight = 21;

  const calcSiteLogoWidth = (image, targetHeight) => {
    const {
      width,
      height
    } = image.dimensions;
    return targetHeight * width / height;
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", {
    className: className,
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "site-nav-left-wrapper",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "site-nav-left",
        children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: (0,external_url_.resolve)(siteUrl, ''),
          children: siteLogo && nextImages.feature ? /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "site-nav-logo",
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              style: {
                height: '${targetHeight}px',
                width: `${calcSiteLogoWidth(siteLogo, targetHeight)}px`
              },
              children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, SiteNav_objectSpread({
                className: "site-nav-logo",
                src: siteLogo.url,
                alt: title,
                layout: "responsive",
                quality: nextImages.quality
              }, siteLogo.dimensions))
            })
          }) : site.logo ? /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "site-nav-logo",
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: site.logo,
              alt: title
            })
          }) : /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "site-nav-logo",
            children: title
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "site-nav-content",
          children: [/*#__PURE__*/jsx_runtime_.jsx(Navigation, {
            data: navigation
          }), postTitle && /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: `nav-post-title ${site.logo ? `` : `dash`}`,
            children: postTitle
          })]
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "site-nav-right",
      children: [secondaryNav ? /*#__PURE__*/jsx_runtime_.jsx(Navigation, {
        data: site.secondary_navigation
      }) : /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "social-links",
        children: /*#__PURE__*/jsx_runtime_.jsx(SocialLinks, SiteNav_objectSpread({}, {
          siteUrl,
          site
        }))
      }), /*#__PURE__*/jsx_runtime_.jsx(DarkMode, SiteNav_objectSpread({}, {
        settings
      })), memberSubscriptions && /*#__PURE__*/jsx_runtime_.jsx(SubscribeButton, {})]
    })]
  });
};

/***/ }),

/***/ 1223:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "g": function() { return /* binding */ SubscribeForm; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(3289);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
// EXTERNAL MODULE: ./utils/use-lang.ts + 1 modules
var use_lang = __webpack_require__(3148);
// EXTERNAL MODULE: ./components/contexts/overlayProvider.tsx
var overlayProvider = __webpack_require__(4884);
;// CONCATENATED MODULE: ./components/icons/LoaderIcon.tsx


const LoaderIcon = () => /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
  version: "1.1",
  id: "loader-1",
  xmlns: "http://www.w3.org/2000/svg",
  x: "0px",
  y: "0px",
  width: "40px",
  height: "40px",
  viewBox: "0 0 40 40",
  enableBackground: "new 0 0 40 40",
  children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
    opacity: "0.2",
    fill: "#000",
    d: "M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946 s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634 c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"
  }), /*#__PURE__*/jsx_runtime_.jsx("path", {
    fill: "#000",
    d: "M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0 C22.32,8.481,24.301,9.057,26.013,10.047z",
    children: /*#__PURE__*/jsx_runtime_.jsx("animateTransform", {
      attributeType: "xml",
      attributeName: "transform",
      type: "rotate",
      from: "0 20 20",
      to: "360 20 20",
      dur: "0.5s",
      repeatCount: "indefinite"
    })
  })]
});
;// CONCATENATED MODULE: ./components/SubscribeForm.tsx






const SubscribeForm = ({
  settings
}) => {
  const text = (0,use_lang/* get */.U)((0,use_lang/* getLang */.V)());
  const {
    message,
    handleSubmit,
    email,
    handleChange
  } = (0,overlayProvider/* useOverlay */.I)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
    className: message,
    "data-members-form": "subscribe",
    onSubmit: ev => handleSubmit(ev, settings.url),
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "form-group",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
        htmlFor: "email",
        className: "jsx-2159338820",
        children: [text(`EMAIL`), /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
          id: "2159338820",
          children: [".jsx-2159338820{position:absolute;height:1px;width:1px;-webkit-clip:rect(1px,1px,1px,1px);clip:rect(1px,1px,1px,1px);border:0;overflow:hidden;}"]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("input", {
        id: "email",
        name: "email",
        type: "email",
        value: email,
        onChange: handleChange,
        className: "subscribe-email",
        "data-members-email": true,
        placeholder: text(`YOUR_EMAIL`),
        autoComplete: "false"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
        className: "button primary",
        type: "submit",
        value: "Submit",
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "button-content",
          children: text(`SUBSCRIBE`)
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "button-loader",
          children: /*#__PURE__*/jsx_runtime_.jsx(LoaderIcon, {})
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "message-success",
      children: [/*#__PURE__*/jsx_runtime_.jsx("strong", {
        children: `${text(`GREAT`)}!`
      }), " ", text(`CHECK_YOUR_INBOX`), "."]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "message-error",
      children: [text(`ENTER_VALID_EMAIL`), "!"]
    })]
  });
};

/***/ }),

/***/ 339:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": function() { return /* binding */ BodyClass; }
/* harmony export */ });
const BodyClass = ({
  isHome,
  isPost,
  author,
  tags,
  page
}) => {
  let classes = [];
  const isAuthor = author && author.slug || false;
  const isPage = page && page.slug || false;
  isHome = isHome || false;
  isPost = isPost || false;

  if (isHome) {
    classes.push(`home-template`);
  } else if (isPost) {
    classes.push(`post-template`);
  } else if (isPage) {
    classes.push(`page-template`);
    classes.push(`page-${page === null || page === void 0 ? void 0 : page.slug}`);
  } else if (tags && tags.length > 0) {
    classes.push(`tag-template`);
  } else if (isAuthor) {
    classes.push(`author-template`);
    classes.push(`author-${author === null || author === void 0 ? void 0 : author.slug}`);
  }

  if (tags) {
    classes = classes.concat(tags.map(({
      slug
    }) => `tag-${slug}`));
  } //if (context.includes('paged')) {
  //    classes.push('paged');
  //}


  return classes.join(` `).trim();
};

/***/ }),

/***/ 9889:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": function() { return /* binding */ PostClass; }
/* harmony export */ });
const PostClass = ({
  tags,
  isFeatured,
  isImage,
  isPage
}) => {
  let classes = [`post`];
  isFeatured = isFeatured || false;
  isImage = isImage || false;
  isPage = isPage || false;

  if (tags && tags.length > 0) {
    classes = classes.concat(tags.map(tag => `tag-` + tag.slug));
  }

  if (isFeatured) {
    classes.push(`featured`);
  }

  if (!isImage) {
    classes.push(`no-image`);
  }

  if (isPage) {
    classes.push(`page`);
  }

  const result = classes.reduce((memo, item) => memo + ` ` + item, ``);
  return result.trim();
};

/***/ }),

/***/ 6067:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": function() { return /* binding */ AvatarIcon; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const AvatarIcon = () => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
    fill: "none",
    fillRule: "evenodd",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
      d: "M3.513 18.998C4.749 15.504 8.082 13 12 13s7.251 2.504 8.487 5.998C18.47 21.442 15.417 23 12 23s-6.47-1.558-8.487-4.002zM12 12c2.21 0 4-2.79 4-5s-1.79-4-4-4-4 1.79-4 4 1.79 5 4 5z",
      fill: "#FFF"
    })
  })
});

/***/ }),

/***/ 8211:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "wJ": function() { return /* binding */ siteTitleMeta; },
/* harmony export */   "Gj": function() { return /* binding */ siteDescriptionMeta; },
/* harmony export */   "__": function() { return /* binding */ siteIcon; },
/* harmony export */   "Gn": function() { return /* binding */ siteImage; }
/* harmony export */ });
// Defaults for meta, if not configured in CMS
const siteTitleMeta = 'Jamify - Next.js Headless Ghost with Casper skin';
const siteDescriptionMeta = 'Jamify blog system powered by Next.js and headless Ghost featuring Casper skin.'; // Defaults, if not configured in CMS
// Images can be fund in the /public folder

const siteIcon = 'favicon.png';
const siteImage = 'site-meta.png';

/***/ }),

/***/ 8110:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": function() { return /* binding */ readingTime; }
/* harmony export */ });
const countImages = html => {
  if (!html) {
    return 0;
  }

  return (html.match(/<img(.|\n)*?>/g) || []).length;
};

const countWords = text => {
  if (!text) {
    return 0;
  }

  text = text.replace(/<(.|\n)*?>/g, ' '); // strip any HTML tags

  const pattern = /[a-zA-ZÀ-ÿ0-9_\u0392-\u03c9\u0410-\u04F9]+|[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af]+/g;
  const match = text.match(pattern);
  let count = 0;

  if (match === null) {
    return count;
  }

  for (var i = 0; i < match.length; i += 1) {
    if (match[i].charCodeAt(0) >= 0x4e00) {
      count += match[i].length;
    } else {
      count += 1;
    }
  }

  return count;
};

const estimatedReadingTimeInMinutes = ({
  wordCount,
  imageCount
}) => {
  const wordsPerMinute = 275;
  const wordsPerSecond = wordsPerMinute / 60;
  let readingTimeSeconds = wordCount / wordsPerSecond; // add 12 seconds for the first image, 11 for the second, etc. limiting at 3

  for (var i = 12; i > 12 - imageCount; i -= 1) {
    readingTimeSeconds += Math.max(i, 3);
  }

  let readingTimeMinutes = Math.round(readingTimeSeconds / 60);
  return readingTimeMinutes;
};

const readingMinutes = (html, additionalImages) => {
  if (!html) return 0;
  let imageCount = countImages(html);
  let wordCount = countWords(html);
  if (additionalImages) imageCount += additionalImages;
  return estimatedReadingTimeInMinutes({
    wordCount,
    imageCount
  });
};

const readingTime = (post, options = {}) => {
  const minuteStr = typeof options.minute === 'string' ? options.minute : '1 min read';
  const minutesStr = typeof options.minutes === 'string' ? options.minutes : '% min read';
  if (!post.html && !post.reading_time) return '';
  const imageCount = post.feature_image ? 1 : 0;
  const time = post.reading_time || readingMinutes(post.html, imageCount);
  let readingTime = '';

  if (time <= 1) {
    readingTime = minuteStr;
  } else {
    readingTime = minutesStr.replace('%', `${time}`);
  }

  return readingTime;
};

/***/ }),

/***/ 3148:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "U": function() { return /* binding */ get; },
  "V": function() { return /* binding */ getLang; }
});

;// CONCATENATED MODULE: ./utils/lang.ts
const lang = {
  en: {
    A_COLLECTION_OF: `A collection of`,
    BY: `by`,
    BY_THIS_AUTHOR: `by this author`,
    GOTO_FRONT_PAGE: `Go to the front page`,
    LATEST_POSTS: `Latest Posts`,
    IS_REQUIRED: `is required`,
    MIN_READ: `min read`,
    MORE_IN: `More in`,
    MORE_POSTS: `More posts`,
    MORE_POSTS_SM: `more posts`,
    NEXT: `Next`,
    NO_POSTS: `No posts`,
    PAGE_NOT_FOUND: `Page not found`,
    POST: `post`,
    POSTS: `posts`,
    PREVIOUS: `Previous`,
    READ: `Read`,
    SEE_ALL: `See all`,
    SUBSCRIBED_TO: `You've successfully subscribed to`,
    WEBSITE: `Website`,
    MULTIPLE_AUTHORS: `Multiple authors`,
    DARK_MODE: `DarkMode`,
    CHECK_YOUR_INBOX: `Check your inbox and click the link to confirm your subscription`,
    EMAIL: `Email`,
    ENTER_VALID_EMAIL: `Please enter a valid email address`,
    GREAT: `Great`,
    SUBSCRIBE: `Subscribe`,
    SUBSCRIBE_OVERLAY: `Stay up to date! Get all the latest & greatest posts delivered straight to your inbox`,
    SUBSCRIBE_SECTION: `Get the latest posts delivered right to your inbox`,
    SUBSCRIBE_TO: `Subscribe to`,
    SUBSCRIBED_FAILED: `Could not sign up! Invalid sign up link.`,
    YOUR_EMAIL: `youremail@example.com`,
    AT_LEAST: `at least`,
    CHARACTERS_LONG: `characters long`,
    CHARACTERS_OR_LESS: `characters or less`,
    EMAIL_ADDRESS: `Email Address`,
    EMAIL_IS_REQUIRED: `Email is required`,
    FULL_NAME: `Full Name`,
    FULL_NAME_REQUIRED: `Full Name is required`,
    FULL_NAME_MUST_BE: `Full Name must be`,
    INVALID_EMAIL_ADDRESS: `Invalid email address`,
    MESSAGE_MUST_BE: `Your message must be`,
    MESSAGE_SENT: `Thank you, your message has been sent!`,
    MESSAGE_TEXT_IS_REQUIRED: `A message text is required`,
    ONE_SECOND: `One second please...`,
    SENDING_FAILED: `Oops :-( sending failed. Error`,
    PLEASE_SELECT: `Please select...`,
    PLEASE_SELECT_SUBJECT: `Please select one subject`,
    SUBMIT: `Submit`,
    YOUR_MESSAGE: `Your message`,
    TABLE_OF_CONTENTS: `Table of Contents`
  },
  de: {
    A_COLLECTION_OF: `Zu diesem Thema gibt es`,
    BY: `von`,
    BY_THIS_AUTHOR: `von diesem Autor`,
    GOTO_FRONT_PAGE: `Gehe zur Startseite`,
    LATEST_POSTS: `Neueste Artikel`,
    IS_REQUIRED: `ist erforderlich`,
    MIN_READ: `min Lesezeit`,
    MORE_IN: `Mehr von`,
    MORE_POSTS: `Weitere Artikel`,
    MORE_POSTS_SM: `weitere Artikel`,
    NEXT: `Weiter`,
    NO_POSTS: `Keine weiteren Artikel`,
    PAGE_NOT_FOUND: `Seite nicht gefunden`,
    POST: `Artikel`,
    POSTS: `Artikel`,
    PREVIOUS: `Zurück`,
    READ: `Lese`,
    SEE_ALL: `Alle`,
    SUBSCRIBED_TO: `Du hast dich erfolgreich angemeldet bei`,
    WEBSITE: `Webseite`,
    MULTIPLE_AUTHORS: `Mehrere Autoren`,
    DARK_MODE: `NachtModus`,
    CHECK_YOUR_INBOX: `Öffne dein Postfach und klicke auf den Bestätigungs-Link`,
    EMAIL: `Email`,
    ENTER_VALID_EMAIL: `Bitte eine richtige Email Adresse eingeben`,
    GREAT: `Super`,
    SUBSCRIBE: `Anmelden`,
    SUBSCRIBE_OVERLAY: `Bleib auf dem Laufenden! Erhalte die neuesten Artikel direkt in dein Postfach`,
    SUBSCRIBE_SECTION: `Erhalte die neuesten Artikel direkt in dein Postfach`,
    SUBSCRIBE_TO: `Abboniere`,
    SUBSCRIBED_FAILED: `Anmeldung gescheitert! Ungültiger Anmeldelink.`,
    YOUR_EMAIL: `deinemail@example.de`,
    AT_LEAST: `wenigstens`,
    CHARACTERS_LONG: `Zeichen lang`,
    CHARACTERS_OR_LESS: `Zeichen oder weniger`,
    EMAIL_ADDRESS: `Email Adresse`,
    EMAIL_IS_REQUIRED: `Email ist erforderlich`,
    FULL_NAME: `Vollständiger Name`,
    FULL_NAME_REQUIRED: `Name ist nicht vollständig`,
    FULL_NAME_MUST_BE: `Vollständiger Name muss`,
    INVALID_EMAIL_ADDRESS: `Fehlerhafte Email Adresse`,
    MESSAGE_MUST_BE: `Deine Nachricht muss`,
    MESSAGE_SENT: `Danke, deine Nachricht wurde versendet!`,
    MESSAGE_TEXT_IS_REQUIRED: `Eine Nachricht ist erforderlich`,
    ONE_SECOND: `Einen Moment bitte...`,
    SENDING_FAILED: `Senden abgebrochen. Fehler`,
    PLEASE_SELECT: `Bitte auswählen...`,
    PLEASE_SELECT_SUBJECT: `Bitte ein Thema wählen`,
    SUBMIT: `Abschicken`,
    YOUR_MESSAGE: `Deine Nachricht`,
    TABLE_OF_CONTENTS: `Inhaltsverzeichnis`
  },
  es: {
    A_COLLECTION_OF: `Una colección de`,
    BY: `de`,
    BY_THIS_AUTHOR: `de este autor`,
    GOTO_FRONT_PAGE: `Ir a la página principal`,
    LATEST_POSTS: `Entradas recientes`,
    IS_REQUIRED: `es obligatorio`,
    MIN_READ: `min. de lectura`,
    MORE_IN: `Más de`,
    MORE_POSTS: `Más entradas`,
    MORE_POSTS_SM: `más entradas`,
    NEXT: `Siguiente`,
    NO_POSTS: `No existen entradas`,
    PAGE_NOT_FOUND: `Página no encontrada`,
    POST: `entrada`,
    POSTS: `entradas`,
    PREVIOUS: `Anterior`,
    READ: `Leer`,
    SEE_ALL: `Ver las`,
    SUBSCRIBED_TO: `Te has suscrito correctamente a`,
    WEBSITE: `Web`,
    MULTIPLE_AUTHORS: `Varios autores`,
    DARK_MODE: `Modo oscuro`,
    CHECK_YOUR_INBOX: `Revisa tu bandeja de entrada y haz clic en el enlace que encontrarás`,
    EMAIL: `Correo electrónico`,
    ENTER_VALID_EMAIL: `Introduzca una dirección de correo válida`,
    GREAT: `Genial`,
    SUBSCRIBE: `Suscribirse`,
    SUBSCRIBE_OVERLAY: `¡Mantente al día! Recibe las entradas más recientes en tu correo electrónico`,
    SUBSCRIBE_SECTION: `Recibe las entradas más recientes en tu correo electrónico`,
    SUBSCRIBE_TO: `Suscribirse a`,
    SUBSCRIBED_FAILED: `No fue posible finalizar el registro, el enlace no es válido.`,
    YOUR_EMAIL: `tucorreo@ejemplo.com`,
    AT_LEAST: `al menos`,
    CHARACTERS_LONG: `caracteres`,
    CHARACTERS_OR_LESS: `caracteres o menos`,
    EMAIL_ADDRESS: `Correo electrónico`,
    EMAIL_IS_REQUIRED: `Es necesaria una dirección`,
    FULL_NAME: `Nombre completo`,
    FULL_NAME_REQUIRED: `Introduzca un nombre completo`,
    FULL_NAME_MUST_BE: `El nombre debe tener`,
    INVALID_EMAIL_ADDRESS: `Correo electrónico no válido`,
    MESSAGE_MUST_BE: `El mensaje ha de contener`,
    MESSAGE_SENT: `Tu mensaje ha sido enviado, ¡Gracias!`,
    MESSAGE_TEXT_IS_REQUIRED: `El contenido del mensaje es obligatorio`,
    ONE_SECOND: `Un segundo por favor...`,
    SENDING_FAILED: `Oops :-( no se pudo enviar. Error`,
    PLEASE_SELECT: `Seleccione...`,
    PLEASE_SELECT_SUBJECT: `Por favor, introduzca un asunto`,
    SUBMIT: `Enviar`,
    YOUR_MESSAGE: `Tu mensaje`,
    TABLE_OF_CONTENTS: `Tabla de contenidos`
  },
  ru: {
    A_COLLECTION_OF: `В коллекции`,
    BY: `от`,
    BY_THIS_AUTHOR: `этого автора`,
    GOTO_FRONT_PAGE: `Перейти на главную страницу`,
    LATEST_POSTS: `Последние посты`,
    IS_REQUIRED: `требуется для`,
    MIN_READ: `мин чтения`,
    MORE_IN: `Больше в`,
    MORE_POSTS: `Больше постов`,
    MORE_POSTS_SM: `больше постов`,
    NEXT: `Следующий`,
    NO_POSTS: `Нет постов`,
    PAGE_NOT_FOUND: `Страница не найдена`,
    POST: `пост`,
    POSTS: `постов`,
    PREVIOUS: `Предыдущий`,
    READ: `Читать`,
    SEE_ALL: `Смотреть все`,
    SUBSCRIBED_TO: `Вы успешно подписались на`,
    WEBSITE: `Вебсайт`,
    MULTIPLE_AUTHORS: `Несколько авторов`,
    DARK_MODE: `Ночной режим`,
    CHECK_YOUR_INBOX: `Проверьте свой почтовый ящик и нажмите на ссылку, чтобы подтвердить подписку`,
    EMAIL: `Email`,
    ENTER_VALID_EMAIL: `Пожалуйста, введите действительный адрес электронной почты`,
    GREAT: `Отлично`,
    SUBSCRIBE: `Подписка`,
    SUBSCRIBE_OVERLAY: `Будьте в курсе! Получайте все самые свежие и лучшие сообщения прямо на ваш почтовый ящик`,
    SUBSCRIBE_SECTION: `Получайте самые свежие сообщения прямо на ваш почтовый ящик`,
    SUBSCRIBE_TO: `Подписаться на`,
    SUBSCRIBED_FAILED: `Не удалось зарегистрироваться! Неверная ссылка для регистрации.`,
    YOUR_EMAIL: `youremail@example.com`,
    AT_LEAST: `по крайней мере`,
    CHARACTERS_LONG: `символов`,
    CHARACTERS_OR_LESS: `символов или меньше`,
    EMAIL_ADDRESS: `Email Адрес`,
    EMAIL_IS_REQUIRED: `Требуется Email`,
    FULL_NAME: `Полное Имя`,
    FULL_NAME_REQUIRED: `Требуется полное имя`,
    FULL_NAME_MUST_BE: `Полное имя должно быть`,
    INVALID_EMAIL_ADDRESS: `Неверный адрес электронной почты`,
    MESSAGE_MUST_BE: `Ваше сообщение должно быть`,
    MESSAGE_SENT: `Спасибо! Ваше сообщение было отправлено!`,
    MESSAGE_TEXT_IS_REQUIRED: `Требуется текст сообщения`,
    ONE_SECOND: `Одну секунду пожалуйста...`,
    SENDING_FAILED: `Упс :-( отправка не удалась. Ошибка`,
    PLEASE_SELECT: `Пожалуйста выберите...`,
    PLEASE_SELECT_SUBJECT: `Пожалуйста, выберите одну тему`,
    SUBMIT: `Отправить`,
    YOUR_MESSAGE: `Ваше сообщение`,
    TABLE_OF_CONTENTS: `Содержание`
  }
};
;// CONCATENATED MODULE: ./utils/use-lang.ts


const getLang = (locale = 'en') => {
  return lang[locale];
};

const get = text => (name, fallback) => {
  if (text[name] === undefined && fallback === null) {
    throw new Error(`Cannot find ${name} in lang file.`);
  }

  if (text[name] === undefined) {
    return fallback || 'UNDEFINED';
  }

  return text[name];
};



/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;