(function() {
var exports = {};
exports.id = 330;
exports.ids = [330];
exports.modules = {

/***/ 6565:
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
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "dayjs"
var external_dayjs_ = __webpack_require__(8349);
var external_dayjs_default = /*#__PURE__*/__webpack_require__.n(external_dayjs_);
// EXTERNAL MODULE: ./lib/readingTime.ts
var lib_readingTime = __webpack_require__(8110);
// EXTERNAL MODULE: ./utils/routing.ts
var routing = __webpack_require__(4950);
// EXTERNAL MODULE: ./utils/use-lang.ts + 1 modules
var use_lang = __webpack_require__(3148);
// EXTERNAL MODULE: ./components/Layout.tsx + 4 modules
var Layout = __webpack_require__(5887);
// EXTERNAL MODULE: ./components/SiteNav.tsx + 11 modules
var SiteNav = __webpack_require__(1362);
;// CONCATENATED MODULE: ./components/HeaderPost.tsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const HeaderPost = ({
  settings,
  title,
  sticky
}) => /*#__PURE__*/jsx_runtime_.jsx("header", {
  className: "site-header",
  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: `outer site-nav-main ${sticky && sticky.state.currentClass}`,
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "inner",
      children: /*#__PURE__*/jsx_runtime_.jsx(SiteNav/* SiteNav */.h, _objectSpread(_objectSpread({}, {
        settings
      }), {}, {
        className: "site-nav",
        postTitle: title
      }))
    })
  })
});
// EXTERNAL MODULE: ./components/AuthorList.tsx + 1 modules
var AuthorList = __webpack_require__(6366);
// EXTERNAL MODULE: ./components/PostCard.tsx
var PostCard = __webpack_require__(2982);
// EXTERNAL MODULE: ./lib/collections.ts
var collections = __webpack_require__(6123);
;// CONCATENATED MODULE: ./components/PreviewPosts.tsx



function PreviewPosts_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function PreviewPosts_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { PreviewPosts_ownKeys(Object(source), true).forEach(function (key) { PreviewPosts_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { PreviewPosts_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function PreviewPosts_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const PreviewPosts = ({
  settings,
  primaryTag,
  posts,
  prev,
  next
}) => {
  var _primaryTag$count;

  const text = (0,use_lang/* get */.U)((0,use_lang/* getLang */.V)());
  const {
    url: cmsUrl
  } = settings;
  const url = primaryTag && (0,routing/* resolveUrl */.K)({
    cmsUrl,
    slug: primaryTag.slug,
    url: primaryTag.url
  }) || '';
  const primaryTagCount = primaryTag === null || primaryTag === void 0 ? void 0 : (_primaryTag$count = primaryTag.count) === null || _primaryTag$count === void 0 ? void 0 : _primaryTag$count.posts;
  return /*#__PURE__*/jsx_runtime_.jsx("aside", {
    className: "read-next outer",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "inner",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "read-next-feed",
        children: [posts && 0 < posts.length && /*#__PURE__*/(0,jsx_runtime_.jsxs)("article", {
          className: "read-next-card",
          children: [/*#__PURE__*/jsx_runtime_.jsx("header", {
            className: "read-next-card-header",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                children: text(`MORE_IN`)
              }), ' ', /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: url,
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  children: primaryTag === null || primaryTag === void 0 ? void 0 : primaryTag.name
                })
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "read-next-card-content",
            children: /*#__PURE__*/jsx_runtime_.jsx("ul", {
              children: posts === null || posts === void 0 ? void 0 : posts.map((post, i) => /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
                  children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                    href: (0,routing/* resolveUrl */.K)({
                      cmsUrl,
                      collectionPath: collections/* collections.getCollectionByNode */.s.getCollectionByNode(post),
                      slug: post.slug,
                      url: post.url
                    }),
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      children: post.title
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "read-next-card-meta",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                    children: [/*#__PURE__*/jsx_runtime_.jsx("time", {
                      dateTime: post.published_at || '',
                      children: external_dayjs_default()(post.published_at || '').format('D MMMM, YYYY')
                    }), " \u2013", ' ', (0,lib_readingTime/* readingTime */.f)(post).replace(`min read`, text(`MIN_READ`))]
                  })
                })]
              }, i))
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("footer", {
            className: "read-next-card-footer",
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: url,
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                children: [primaryTagCount && primaryTagCount > 0 && (primaryTagCount === 1 ? `1 ${text(`POST`)}` : `${text(`SEE_ALL`)} ${primaryTagCount} ${text(`POSTS`)}`) || text(`NO_POSTS`), ' ', "\u2192"]
              })
            })
          })]
        }), prev && prev.slug && /*#__PURE__*/jsx_runtime_.jsx(PostCard/* PostCard */.y, PreviewPosts_objectSpread({}, {
          settings,
          post: prev
        })), next && next.slug && /*#__PURE__*/jsx_runtime_.jsx(PostCard/* PostCard */.y, PreviewPosts_objectSpread({}, {
          settings,
          post: next
        }))]
      })
    })
  });
};
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: external "rehype-react"
var external_rehype_react_namespaceObject = require("rehype-react");;
var external_rehype_react_default = /*#__PURE__*/__webpack_require__.n(external_rehype_react_namespaceObject);
;// CONCATENATED MODULE: external "unified"
var external_unified_namespaceObject = require("unified");;
var external_unified_default = /*#__PURE__*/__webpack_require__.n(external_unified_namespaceObject);
;// CONCATENATED MODULE: ./components/NextLink.tsx




const NextLink = props => {
  const node = props.node;
  const {
    href
  } = node === null || node === void 0 ? void 0 : node.properties;
  const [child] = node === null || node === void 0 ? void 0 : node.children;
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: !!href && /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: href,
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        children: /*#__PURE__*/jsx_runtime_.jsx(RenderContent, {
          htmlAst: child
        })
      })
    })
  });
};
;// CONCATENATED MODULE: ./components/NextImage.tsx


function NextImage_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function NextImage_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { NextImage_ownKeys(Object(source), true).forEach(function (key) { NextImage_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { NextImage_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function NextImage_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const NextImage = props => {
  const {
    node
  } = props;
  if (!node) return null;
  const imageNode = node;
  const imageDimensions = imageNode.imageDimensions;
  const {
    src,
    className: classArray
  } = imageNode.properties;
  const className = classArray === null || classArray === void 0 ? void 0 : classArray.join(' ');
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "next-image-wrapper",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", NextImage_objectSpread(NextImage_objectSpread({}, {
      className
    }), {}, {
      children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, NextImage_objectSpread(NextImage_objectSpread(NextImage_objectSpread({
        src: src
      }, imageDimensions), {
        className
      }), {}, {
        alt: ""
      }))
    }))
  });
};
;// CONCATENATED MODULE: ./components/RenderContent.tsx



function RenderContent_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function RenderContent_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { RenderContent_ownKeys(Object(source), true).forEach(function (key) { RenderContent_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { RenderContent_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function RenderContent_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






/* eslint-disable react/display-name */

const options = {
  createElement: (external_react_default()).createElement,
  Fragment: (external_react_default()).Fragment,
  passNode: true,
  components: {
    Link: props => /*#__PURE__*/jsx_runtime_.jsx(NextLink, RenderContent_objectSpread({}, props)),
    Image: props => /*#__PURE__*/jsx_runtime_.jsx(NextImage, RenderContent_objectSpread({}, props))
  }
};
const renderAst = external_unified_default()().use((external_rehype_react_default()), options);
const RenderContent = ({
  htmlAst
}) => {
  if (!htmlAst) return null;
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: renderAst.stringify(htmlAst)
  });
}; //<div className="post-content load-external-scripts">{renderAst.stringify(htmlAst)}</div>
;// CONCATENATED MODULE: ./components/CommentoEmbed.tsx


/**
 *
 * Credits to 👉 https://nehalist.io/adding-commento-to-react-apps-like-gatsby/#commento-login-box-container
 *
 */
// Helper to add scripts to our page

const insertScript = (src, id, parentElement) => {
  const script = window.document.createElement(`script`);
  script.async = true;
  script.src = src;
  script.id = id;
  parentElement.appendChild(script);
  return script;
}; // Helper to remove scripts from our page


const removeScript = (id, parentElement) => {
  const script = window.document.getElementById(id);

  if (script) {
    parentElement.removeChild(script);
  }
};

const CommentoEmbed = ({
  id,
  url
}) => {
  (0,external_react_.useEffect)(() => {
    if (!url) return;

    if (window.document.getElementById(`commento`)) {
      //url: <your comment url>
      insertScript(`${url}/js/commento.js`, `commento-script`, document.body);
    }

    return () => removeScript(`commento-script`, document.body);
  }, [id, url]);
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    id: `commento`
  });
};
;// CONCATENATED MODULE: ./components/CommentoComments.tsx


function CommentoComments_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function CommentoComments_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { CommentoComments_ownKeys(Object(source), true).forEach(function (key) { CommentoComments_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { CommentoComments_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function CommentoComments_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const CommentoComments = props => /*#__PURE__*/jsx_runtime_.jsx("section", {
  children: /*#__PURE__*/jsx_runtime_.jsx(CommentoEmbed, CommentoComments_objectSpread({}, props))
});
;// CONCATENATED MODULE: external "disqus-react"
var external_disqus_react_namespaceObject = require("disqus-react");;
;// CONCATENATED MODULE: ./components/DisqusComments.tsx


function DisqusComments_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function DisqusComments_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { DisqusComments_ownKeys(Object(source), true).forEach(function (key) { DisqusComments_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { DisqusComments_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function DisqusComments_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const DisqusComments = ({
  post,
  shortname
}) => {
  const {
    url,
    id: identifier,
    title
  } = post;
  const config = {
    url,
    identifier,
    title
  };
  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    children: /*#__PURE__*/jsx_runtime_.jsx(external_disqus_react_namespaceObject.DiscussionEmbed, DisqusComments_objectSpread({}, {
      shortname,
      config
    }))
  });
};
// EXTERNAL MODULE: ./components/SubscribeForm.tsx + 1 modules
var SubscribeForm = __webpack_require__(1223);
;// CONCATENATED MODULE: ./components/Subscribe.tsx



function Subscribe_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Subscribe_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Subscribe_ownKeys(Object(source), true).forEach(function (key) { Subscribe_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Subscribe_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Subscribe_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const Subscribe = ({
  settings
}) => {
  const text = (0,use_lang/* get */.U)((0,use_lang/* getLang */.V)());
  const title = text(`SITE_TITLE`, settings.title);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
    className: "subscribe-form",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
      className: "subscribe-form-title",
      children: [text(`SUBSCRIBE_TO`), " ", title]
    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
      className: "subscribe-form-description",
      children: text(`SUBSCRIBE_SECTION`)
    }), /*#__PURE__*/jsx_runtime_.jsx(SubscribeForm/* SubscribeForm */.g, Subscribe_objectSpread({}, {
      settings
    }))]
  });
};
;// CONCATENATED MODULE: ./components/effects/UseActiveHash.tsx
/**
 *
 * Further info 👉🏼 https://github.com/gatsbyjs/gatsby/blob/master/www/src/hooks/use-active-hash.js
 *
 */

const useActiveHash = (itemIds, rootMargin = undefined) => {
  const {
    0: activeHash,
    1: setActiveHash
  } = (0,external_react_.useState)(``);
  (0,external_react_.useEffect)(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveHash(entry.target.id);
        }
      });
    }, {
      rootMargin: rootMargin || `0% 0% -90% 0%`
    });

    const trigger = (id, key) => {
      const element = document.getElementById(id);
      element && typeof element === `object` ? observer[key](element) : null;
    };

    itemIds.forEach(id => trigger(id, `observe`));
    return () => itemIds.forEach(id => trigger(id, `unobserve`));
  }, [itemIds, rootMargin, setActiveHash]);
  return activeHash;
};
;// CONCATENATED MODULE: ./components/toc/TableOfContents.tsx








const getHeadingIds = (toc, traverseFullDepth = true, maxDepth, recursionDepth = 1) => {
  const idList = [];

  if (toc) {
    for (const item of toc) {
      item.id && idList.push(item.id);

      if (item.items && traverseFullDepth && recursionDepth < (maxDepth || 6)) {
        idList.push(...getHeadingIds(item.items, true, maxDepth, recursionDepth + 1));
      }
    }
  }

  return idList;
};

const isUnderDepthLimit = (depth, maxDepth) => maxDepth === null ? true : depth < maxDepth;

const createItems = (toc, url, depth, maxDepth, activeHash, isDesktop) => toc.map((head, index) => {
  const isActive = isDesktop && head.id === `${activeHash}`;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
    children: [head.id && /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: `${url}#${head.id}`,
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        className: isActive ? 'link active' : 'link',
        children: head.heading
      })
    }), head.items && isUnderDepthLimit(depth, maxDepth) && /*#__PURE__*/jsx_runtime_.jsx("ul", {
      className: "sub",
      children: createItems(head.items, url, depth + 1, maxDepth, activeHash, isDesktop)
    })]
  }, `${url}#${head.id}-${depth}-${index}`);
});

const TableOfContents = ({
  toc,
  url,
  maxDepth = 2
}) => {
  const text = (0,use_lang/* get */.U)((0,use_lang/* getLang */.V)());
  const {
    0: isDesktop,
    1: setIsDesktop
  } = (0,external_react_.useState)(false);
  const activeHash = useActiveHash(getHeadingIds(toc, true, maxDepth));
  (0,external_react_.useEffect)(() => {
    const isDesktopQuery = window.matchMedia(`(min-width: 1170px)`);
    setIsDesktop(isDesktopQuery.matches);

    const updateIsDesktop = e => setIsDesktop(e.matches);

    isDesktopQuery.addListener(updateIsDesktop);
    return () => isDesktopQuery.removeListener(updateIsDesktop);
  }, []);
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: toc.length > 0 ? /*#__PURE__*/jsx_runtime_.jsx("aside", {
      className: "toc",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
          children: text(`TABLE_OF_CONTENTS`)
        }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
          className: "list",
          children: createItems(toc, url, 1, maxDepth, activeHash, isDesktop)
        })]
      })
    }) : null
  });
};
// EXTERNAL MODULE: ./components/effects/StickyNavContainer.tsx
var StickyNavContainer = __webpack_require__(5565);
// EXTERNAL MODULE: ./components/meta/seo.tsx
var seo = __webpack_require__(8277);
// EXTERNAL MODULE: ./components/helpers/PostClass.ts
var PostClass = __webpack_require__(9889);
;// CONCATENATED MODULE: ./components/Post.tsx




function Post_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Post_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Post_ownKeys(Object(source), true).forEach(function (key) { Post_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Post_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Post_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable @next/next/no-img-element */




















const Post = ({
  cmsData
}) => {
  const {
    post,
    settings,
    seoImage,
    previewPosts,
    prevPost,
    nextPost,
    bodyClass
  } = cmsData;
  const {
    slug,
    url,
    meta_description,
    excerpt,
    title
  } = post;
  const {
    url: cmsUrl
  } = settings;
  const description = meta_description || excerpt;
  const {
    processEnv
  } = settings;
  const {
    nextImages,
    toc,
    memberSubscriptions,
    commenting
  } = processEnv;
  const text = (0,use_lang/* get */.U)((0,use_lang/* getLang */.V)());
  const readingTime = (0,lib_readingTime/* readingTime */.f)(post).replace(`min read`, text(`MIN_READ`));
  const featImg = post.featureImage;
  const postClass = (0,PostClass/* PostClass */.l)({
    tags: post.tags,
    isFeatured: !!featImg,
    isImage: !!featImg
  });
  const htmlAst = post.htmlAst;
  if (htmlAst === undefined) throw Error('Post.tsx: htmlAst must be defined.');
  const collectionPath = collections/* collections.getCollectionByNode */.s.getCollectionByNode(post);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(seo/* SEO */.H, Post_objectSpread({}, {
      description,
      settings,
      seoImage,
      article: post,
      title
    })), /*#__PURE__*/jsx_runtime_.jsx(StickyNavContainer/* StickyNavContainer */.R, {
      throttle: 300,
      isPost: true,
      activeClass: "nav-post-title-active",
      render: sticky => {
        var _post$authors;

        return /*#__PURE__*/jsx_runtime_.jsx(Layout/* Layout */.A, Post_objectSpread(Post_objectSpread({}, {
          bodyClass,
          settings,
          sticky
        }), {}, {
          header: /*#__PURE__*/jsx_runtime_.jsx(HeaderPost, Post_objectSpread({}, {
            settings,
            sticky,
            title
          })),
          previewPosts: /*#__PURE__*/jsx_runtime_.jsx(PreviewPosts, Post_objectSpread({}, {
            settings,
            primaryTag: post.primary_tag,
            posts: previewPosts,
            prev: prevPost,
            next: nextPost
          })),
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "inner",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("article", {
              className: `post-full ${postClass}`,
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
                className: "post-full-header",
                children: [post.primary_tag && /*#__PURE__*/jsx_runtime_.jsx("section", {
                  className: "post-full-tags",
                  children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                    href: (0,routing/* resolveUrl */.K)({
                      cmsUrl,
                      slug: post.primary_tag.slug,
                      url: post.primary_tag.url
                    }),
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      children: post.primary_tag.name
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("h1", {
                  ref: sticky && sticky.anchorRef,
                  className: "post-full-title",
                  children: title
                }), post.custom_excerpt && /*#__PURE__*/jsx_runtime_.jsx("p", {
                  className: "post-full-custom-excerpt",
                  children: post.custom_excerpt
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "post-full-byline",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
                    className: "post-full-byline-content",
                    children: [/*#__PURE__*/jsx_runtime_.jsx(AuthorList/* AuthorList */.p, Post_objectSpread({}, {
                      settings,
                      authors: post.authors,
                      isPost: true
                    })), /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
                      className: "post-full-byline-meta",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
                        className: "author-name",
                        children: (_post$authors = post.authors) === null || _post$authors === void 0 ? void 0 : _post$authors.map((author, i) => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                          children: [i > 0 ? `, ` : ``, /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                            href: (0,routing/* resolveUrl */.K)({
                              cmsUrl,
                              slug: author.slug,
                              url: author.url || undefined
                            }),
                            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                              children: author.name
                            })
                          })]
                        }, i))
                      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                        className: "byline-meta-content",
                        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("time", {
                          className: "byline-meta-date",
                          dateTime: post.published_at || '',
                          children: [external_dayjs_default()(post.published_at || '').format('D MMMM, YYYY'), "\xA0"]
                        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                          className: "byline-reading-time",
                          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                            className: "bull",
                            children: "\u2022"
                          }), " ", readingTime]
                        })]
                      })]
                    })]
                  })
                })]
              }), featImg && (nextImages.feature && featImg.dimensions ? /*#__PURE__*/jsx_runtime_.jsx("figure", {
                className: "post-full-image",
                style: {
                  display: 'inherit'
                },
                children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, Post_objectSpread({
                  src: featImg.url,
                  alt: title,
                  quality: nextImages.quality,
                  layout: "responsive",
                  sizes: `
                              (max-width: 350px) 350px,
                              (max-width: 530px) 530px,
                              (max-width: 710px) 710px,
                              (max-width: 1170px) 1170px,
                              (max-width: 2110px) 2110px, 2000px
                            `
                }, featImg.dimensions))
              }) : post.feature_image && /*#__PURE__*/jsx_runtime_.jsx("figure", {
                className: "post-full-image",
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: post.feature_image,
                  alt: title
                })
              })), /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
                className: "post-full-content",
                children: [toc.enable && !!post.toc && /*#__PURE__*/jsx_runtime_.jsx(TableOfContents, Post_objectSpread({}, {
                  toc: post.toc,
                  url: (0,routing/* resolveUrl */.K)({
                    cmsUrl,
                    collectionPath,
                    slug,
                    url
                  }),
                  maxDepth: toc.maxDepth
                })), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "post-content load-external-scripts",
                  children: /*#__PURE__*/jsx_runtime_.jsx(RenderContent, {
                    htmlAst: htmlAst
                  })
                })]
              }), memberSubscriptions && /*#__PURE__*/jsx_runtime_.jsx(Subscribe, Post_objectSpread({}, {
                settings
              })), commenting.system === 'commento' && /*#__PURE__*/jsx_runtime_.jsx(CommentoComments, Post_objectSpread({}, {
                id: post.id,
                url: commenting.commentoUrl
              })), commenting.system === 'disqus' && /*#__PURE__*/jsx_runtime_.jsx(DisqusComments, Post_objectSpread({}, {
                post,
                shortname: commenting.disqusShortname
              }))]
            })
          })
        }));
      }
    })]
  });
};
// EXTERNAL MODULE: ./components/HeaderPage.tsx
var HeaderPage = __webpack_require__(5811);
;// CONCATENATED MODULE: ./components/Page.tsx




function Page_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Page_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Page_ownKeys(Object(source), true).forEach(function (key) { Page_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Page_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Page_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable @next/next/no-img-element */






const Page = ({
  cmsData
}) => {
  const {
    page,
    settings,
    seoImage,
    bodyClass
  } = cmsData;
  const {
    meta_title,
    meta_description
  } = page;
  const {
    nextImages
  } = settings.processEnv;
  const featImg = page.featureImage;
  const postClass = (0,PostClass/* PostClass */.l)({
    tags: page.tags,
    isPage: page && true,
    isImage: !!featImg
  });
  const htmlAst = page.htmlAst;
  if (htmlAst === undefined) throw Error('Page.tsx: htmlAst must be defined.');
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(seo/* SEO */.H, Page_objectSpread({}, {
      settings,
      meta_title,
      meta_description,
      seoImage
    })), /*#__PURE__*/jsx_runtime_.jsx(Layout/* Layout */.A, Page_objectSpread(Page_objectSpread({}, {
      settings,
      bodyClass
    }), {}, {
      header: /*#__PURE__*/jsx_runtime_.jsx(HeaderPage/* HeaderPage */.E, Page_objectSpread({}, {
        settings
      })),
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "inner",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("article", {
          className: `post-full ${postClass}`,
          children: [/*#__PURE__*/jsx_runtime_.jsx("header", {
            className: "post-full-header",
            children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
              className: "post-full-title",
              children: page.title
            })
          }), featImg && (nextImages.feature && featImg.dimensions ? /*#__PURE__*/jsx_runtime_.jsx("figure", {
            className: "post-full-image",
            style: {
              display: 'inherit'
            },
            children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, Page_objectSpread({
              src: featImg.url,
              alt: page.title,
              quality: nextImages.quality,
              layout: "responsive",
              sizes: `
                              (max-width: 350px) 350px,
                              (max-width: 530px) 530px,
                              (max-width: 710px) 710px,
                              (max-width: 1170px) 1170px,
                              (max-width: 2110px) 2110px, 2000px
                            `
            }, featImg.dimensions))
          }) : page.feature_image && /*#__PURE__*/jsx_runtime_.jsx("figure", {
            className: "post-full-image",
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: page.feature_image,
              alt: page.title
            })
          })), /*#__PURE__*/jsx_runtime_.jsx("section", {
            className: "post-full-content",
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "post-content load-external-scripts",
              children: /*#__PURE__*/jsx_runtime_.jsx(RenderContent, {
                htmlAst: htmlAst
              })
            })
          })]
        })
      })
    }))]
  });
};
// EXTERNAL MODULE: ./lib/ghost.ts + 2 modules
var ghost = __webpack_require__(3228);
// EXTERNAL MODULE: ./appConfig.ts
var appConfig = __webpack_require__(9317);
;// CONCATENATED MODULE: ./lib/contactPageDefaults.ts
const defaultPage = {
  id: 'custom-page-contact',
  slug: 'contact',
  url: '/contact',
  title: 'Contact Us',
  custom_excerpt: 'Want to get in touch with the team? Just drop us a line!',
  form_topics: ['I want to give feedback', 'I want to ask a question'],
  meta_title: 'Contact Us',
  meta_description: 'A contact form page.',
  html: '',
  serviceConfig: {
    url: '/api/v1/contact',
    contentType: 'application/json'
  },
  featureImage: {
    url: 'https://static.gotsby.org/v1/assets/images/gatsby-ghost-contact.png',
    dimensions: {
      width: 1040,
      height: 250
    }
  }
};
// EXTERNAL MODULE: ./lib/images.ts + 1 modules
var lib_images = __webpack_require__(5984);
;// CONCATENATED MODULE: external "next/error"
var error_namespaceObject = require("next/error");;
var error_default = /*#__PURE__*/__webpack_require__.n(error_namespaceObject);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./components/common/elements.tsx

/**
 * Input
 */

const useInput = initialValue => {
  const {
    0: value,
    1: setValue
  } = (0,external_react_.useState)(initialValue);
  const {
    0: error,
    1: setError
  } = (0,external_react_.useState)(undefined);
  return [{
    value,
    error,
    onChange: e => setValue(e.target.value)
  }, status => setError(status), () => setValue(initialValue)];
};
/**
 * Select
 */

const useSelect = (initialIndex, initialValues) => {
  const {
    0: index,
    1: setIndex
  } = (0,external_react_.useState)(initialIndex);
  const {
    0: values,
    1: setValues
  } = (0,external_react_.useState)(initialValues);
  const {
    0: error,
    1: setError
  } = (0,external_react_.useState)(undefined);
  return [{
    index,
    values,
    error,
    onChange: e => setIndex(e.target.selectedIndex)
  }, status => setError(status), () => setIndex(0), (0,external_react_.useCallback)(values => setValues(values), [])];
};
;// CONCATENATED MODULE: ./components/contact/ContactValidation.ts
function ContactValidation_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class Validate {
  constructor() {
    ContactValidation_defineProperty(this, "text", void 0);

    this.text = (0,use_lang/* get */.U)((0,use_lang/* getLang */.V)());
  }

  name(item, setError) {
    if (item.value.length === 0) {
      setError(`${this.text(`FULL_NAME_REQUIRED`)}.`);
      return false;
    }

    if (item.value.length < 3) {
      setError(`${this.text(`FULL_NAME_MUST_BE`)} ${this.text(`AT_LEAST`)} 3 ${this.text(`CHARACTERS_LONG`)}.`);
      return false;
    }

    if (item.value.length > 20) {
      setError(`${this.text(`FULL_NAME_MUST_BE`)} 20 ${this.text(`CHARACTERS_OR_LESS`)}.`);
      return false;
    }

    setError('');
    return true;
  }

  email(item, setError) {
    if (item.value.length === 0) {
      setError(`${this.text(`EMAIL_IS_REQUIRED`)}.`);
      return false;
    }

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(item.value)) {
      setError(`${this.text(`INVALID_EMAIL_ADDRESS`)}.`);
      return false;
    }

    setError('');
    return true;
  }

  subjects(item, setError) {
    if (item.index === 0) {
      setError(`${this.text(`PLEASE_SELECT_SUBJECT`)}.`);
      return false;
    }

    setError('');
    return true;
  }

  message(item, setError) {
    if (item.value.length === 0) {
      setError(`${this.text(`MESSAGE_TEXT_IS_REQUIRED`)}.`);
      return false;
    }

    if (item.value.length < 10) {
      setError(`${this.text(`MESSAGE_MUST_BE`)} ${this.text(`AT_LEAST`)} 10 ${this.text(`CHARACTERS_LONG`)}.`);
      return false;
    }

    if (item.value.length > 4000) {
      setError(`${this.text(`MESSAGE_MUST_BE`)} 4000 ${this.text(`CHARACTERS_OR_LESS`)}.`);
      return false;
    }

    setError('');
    return true;
  }

}
;// CONCATENATED MODULE: ./components/contact/ContactSubmit.ts


const encodeFormData = (data, contentType) => {
  if (contentType === `application/json`) {
    return JSON.stringify(data);
  }

  if (contentType === `application/x-www-form-urlencoded`) {
    return Object.keys(data).map(key => encodeURIComponent(key) + `=` + encodeURIComponent(data[key])).join(`&`);
  }

  return JSON.stringify(data);
};

const handleSubmit = async (serviceConfig, values, clearForm, setStatus) => {
  const {
    url,
    contentType
  } = serviceConfig;
  const text = (0,use_lang/* get */.U)((0,use_lang/* getLang */.V)()); // Convert FormValues to DataValues

  const entries = Object.entries(values).map(([key, v]) => 'value' in v ? [key, v.value] : [key, v.index > 0 ? v.values[v.index - 1] : '']);
  const data = Object.fromEntries(entries);

  if (data.formname.length === 0) {
    data.formname = `next-ghost-contact`;
  } else {
    //early return if robot
    clearForm();
    setStatus(text(`MESSAGE_SENT`));
    return;
  }

  const postURL = url || `/`; // reset and show message as post can be slow!

  clearForm();
  setStatus(text(`ONE_SECOND`)); //console.log(serviceConfig.url)
  //console.log({ 'Content-Type': contentType })
  //console.log(encodeFormData(data, contentType))

  fetch(postURL, {
    method: `POST`,
    headers: {
      'Content-Type': contentType
    },
    body: encodeFormData(data, contentType)
  }).then(response => response.json()).then(data => {
    if (data.error) throw data;
    clearForm();
    setStatus(text(`MESSAGE_SENT`));
    window.setTimeout(() => setStatus(''), 30000);
  }).catch(error => {
    clearForm();
    setStatus(`${text(`SENDING_FAILED`)}: ${error.message}`);
    window.setTimeout(() => setStatus(''), 60000);
  });
};
// EXTERNAL MODULE: ./components/contact/ContactForm.module.css
var ContactForm_module = __webpack_require__(7496);
var ContactForm_module_default = /*#__PURE__*/__webpack_require__.n(ContactForm_module);
;// CONCATENATED MODULE: ./components/contact/ContactForm.tsx




function ContactForm_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function ContactForm_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ContactForm_ownKeys(Object(source), true).forEach(function (key) { ContactForm_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ContactForm_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function ContactForm_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const ContactForm = ({
  topics,
  serviceConfig
}) => {
  const text = (0,use_lang/* get */.U)((0,use_lang/* getLang */.V)());
  const [name, setNameError, clearName] = useInput('');
  const [email, setEmailError, clearEmail] = useInput('');
  const [textArea, setTextAreaError, clearTextArea] = useInput('');
  const [robot] = useInput('');
  const [subjects, setSubjectError, clearSubject] = useSelect(0, topics);
  const {
    0: message,
    1: setMessage
  } = (0,external_react_.useState)('');
  const {
    0: success,
    1: setSuccess
  } = (0,external_react_.useState)('');
  const fields = {
    name,
    email,
    subject: subjects,
    message: textArea,
    formname: robot
  };
  const errors = Object.entries(fields).map(([_, value]) => value.error);
  const clear = [clearName, clearEmail, clearTextArea, clearSubject];

  const clearForm = () => clear.forEach(c => c());

  const validate = new Validate();

  const validateAll = ({
    name,
    email,
    subject,
    message
  }) => {
    if (!validate.name(name, setNameError)) return false;
    if (!validate.email(email, setEmailError)) return false;
    if (!validate.subjects(subject, setSubjectError)) return false;
    if (!validate.message(message, setTextAreaError)) return false;
    return true;
  };

  (0,external_react_.useEffect)(() => {
    const error = errors.find(error => error);
    if (error) return setMessage(error);
    setMessage('');
  }, [errors]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
      className: (ContactForm_module_default()).validate,
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: message
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
      name: "next-ghost-contact",
      method: "post",
      action: "",
      onSubmit: ev => {
        ev.preventDefault();
        if (!validateAll(fields)) return;
        handleSubmit(serviceConfig, fields, clearForm, msg => setSuccess(msg));
      },
      "data-netlify": "true",
      "data-netlify-honeypot": "bot-field",
      className: (ContactForm_module_default()).contact,
      children: [/*#__PURE__*/jsx_runtime_.jsx("input", ContactForm_objectSpread(ContactForm_objectSpread({}, name), {}, {
        onBlur: () => validate.name(name, setNameError),
        id: "name",
        name: "name",
        type: "text",
        placeholder: text(`FULL_NAME`),
        className: (ContactForm_module_default()).element
      })), /*#__PURE__*/jsx_runtime_.jsx("input", ContactForm_objectSpread(ContactForm_objectSpread({}, email), {}, {
        onBlur: () => validate.email(email, setEmailError),
        id: "email",
        name: "email",
        type: "email",
        placeholder: text(`EMAIL_ADDRESS`),
        className: (ContactForm_module_default()).element
      })), subjects.values.length > 0 && /*#__PURE__*/(0,jsx_runtime_.jsxs)("select", ContactForm_objectSpread(ContactForm_objectSpread({}, subjects), {}, {
        onBlur: () => validate.subjects(subjects, setSubjectError),
        id: "subject",
        name: "subject",
        value: subjects.index,
        className: (ContactForm_module_default()).element,
        children: [/*#__PURE__*/jsx_runtime_.jsx("option", {
          value: 0,
          hidden: true,
          children: text(`PLEASE_SELECT`)
        }), subjects.values.map((topic, i) => /*#__PURE__*/jsx_runtime_.jsx("option", {
          value: i + 1,
          children: topic
        }, `option-${i + 1}`))]
      })), /*#__PURE__*/jsx_runtime_.jsx("textarea", ContactForm_objectSpread(ContactForm_objectSpread({}, textArea), {}, {
        onBlur: () => validate.message(textArea, setTextAreaError),
        id: "message",
        name: "message",
        placeholder: text(`YOUR_MESSAGE`),
        rows: 5,
        className: (ContactForm_module_default()).element
      })), /*#__PURE__*/jsx_runtime_.jsx("input", ContactForm_objectSpread(ContactForm_objectSpread({}, robot), {}, {
        name: "formname",
        className: (ContactForm_module_default()).robot
      })), /*#__PURE__*/jsx_runtime_.jsx("button", {
        className: (ContactForm_module_default()).button,
        id: "submit",
        type: "submit",
        value: "Submit",
        children: text(`SUBMIT`)
      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: (ContactForm_module_default()).response,
        children: success
      })]
    })]
  });
};
;// CONCATENATED MODULE: ./components/ContactPage.tsx




function ContactPage_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function ContactPage_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ContactPage_ownKeys(Object(source), true).forEach(function (key) { ContactPage_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ContactPage_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function ContactPage_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










function Contact({
  cmsData
}) {
  const {
    page,
    previewPosts,
    settings,
    seoImage,
    bodyClass
  } = cmsData;
  const {
    meta_title,
    meta_description
  } = page;
  const {
    processEnv
  } = settings;
  const {
    nextImages,
    contactPage
  } = processEnv;

  if (!contactPage) {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
        children: /*#__PURE__*/jsx_runtime_.jsx("meta", {
          name: "robots",
          content: "noindex"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx((error_default()), {
        statusCode: 404
      })]
    });
  }

  const featImg = page.featureImage;
  const postClass = (0,PostClass/* PostClass */.l)({
    tags: page.tags,
    isPage: page && true,
    isImage: !!featImg
  }); //const htmlAst = page.htmlAst
  //if (htmlAst === undefined) throw Error('Page.tsx: htmlAst must be defined.')

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(seo/* SEO */.H, ContactPage_objectSpread({}, {
      settings,
      meta_title,
      meta_description,
      seoImage
    })), /*#__PURE__*/jsx_runtime_.jsx(Layout/* Layout */.A, ContactPage_objectSpread(ContactPage_objectSpread({}, {
      settings,
      bodyClass
    }), {}, {
      header: /*#__PURE__*/jsx_runtime_.jsx(HeaderPage/* HeaderPage */.E, ContactPage_objectSpread({}, {
        settings
      })),
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "inner",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("article", {
          className: `post-full ${postClass}`,
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
            className: "post-full-header",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
              className: "post-full-title",
              children: page.title
            }), page.custom_excerpt && /*#__PURE__*/jsx_runtime_.jsx("p", {
              className: "post-full-custom-excerpt",
              children: page.custom_excerpt
            })]
          }), featImg && (nextImages.feature && featImg.dimensions ? /*#__PURE__*/jsx_runtime_.jsx("figure", {
            className: "post-full-image",
            style: {
              display: 'inherit'
            },
            children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, ContactPage_objectSpread({
              src: featImg.url,
              alt: page.title,
              quality: nextImages.quality,
              layout: "responsive",
              sizes: `
                              (max-width: 350px) 350px,
                              (max-width: 530px) 530px,
                              (max-width: 710px) 710px,
                              (max-width: 1170px) 1170px,
                              (max-width: 2110px) 2110px, 2000px
                            `
            }, featImg.dimensions))
          }) : page.feature_image && /*#__PURE__*/jsx_runtime_.jsx("figure", {
            className: "post-full-image",
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: page.feature_image,
              alt: page.title
            })
          })), /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
            className: "post-full-content",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "post-content",
              children: /*#__PURE__*/jsx_runtime_.jsx(ContactForm, {
                topics: page.form_topics,
                serviceConfig: page.serviceConfig
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "post-content",
              dangerouslySetInnerHTML: {
                __html: page.html || ''
              }
            })]
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "post-feed",
          children: previewPosts === null || previewPosts === void 0 ? void 0 : previewPosts.map((post, i) => /*#__PURE__*/jsx_runtime_.jsx(PostCard/* PostCard */.y, ContactPage_objectSpread({}, {
            settings,
            post,
            num: i
          }), post.id))
        })]
      })
    }))]
  });
}
// EXTERNAL MODULE: ./components/meta/seoImage.ts
var seoImage = __webpack_require__(8953);
// EXTERNAL MODULE: ./lib/processEnv.ts
var processEnv = __webpack_require__(264);
// EXTERNAL MODULE: ./components/helpers/BodyClass.ts
var BodyClass = __webpack_require__(339);
;// CONCATENATED MODULE: ./pages/[...slug].tsx


function _slug_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _slug_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _slug_ownKeys(Object(source), true).forEach(function (key) { _slug_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _slug_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _slug_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















/**
 *
 * Renders a single post or page and loads all content.
 *
 */

const PostOrPageIndex = ({
  cmsData
}) => {
  const router = (0,router_.useRouter)();
  if (router.isFallback) return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: "Loading..."
  });
  const {
    isPost,
    contactPage
  } = cmsData;

  if (isPost) {
    return /*#__PURE__*/jsx_runtime_.jsx(Post, _slug_objectSpread({}, {
      cmsData
    }));
  } else if (!!contactPage) {
    const {
      contactPage,
      previewPosts,
      settings,
      seoImage,
      bodyClass
    } = cmsData;
    return /*#__PURE__*/jsx_runtime_.jsx(Contact, {
      cmsData: {
        page: contactPage,
        previewPosts,
        settings,
        seoImage,
        bodyClass
      }
    });
  } else {
    return /*#__PURE__*/jsx_runtime_.jsx(Page, {
      cmsData: cmsData
    });
  }
};

/* harmony default export */ var _slug_ = (PostOrPageIndex);
const getStaticProps = async ({
  params
}) => {
  var _post, _post3, _post4, _ref;

  if (!(params && params.slug && Array.isArray(params.slug))) throw Error('getStaticProps: wrong parameters.');
  const [slug] = params.slug.reverse();
  const settings = await (0,ghost/* getAllSettings */.GR)();
  let post = null;
  let page = null;
  let contactPage = null;
  post = await (0,ghost/* getPostBySlug */.zQ)(slug);
  const isPost = !!post;

  if (!isPost) {
    page = await (0,ghost/* getPageBySlug */.it)(slug);
  } else if ((_post = post) !== null && _post !== void 0 && _post.primary_tag) {
    var _post2;

    const primaryTag = await (0,ghost/* getTagBySlug */.iP)((_post2 = post) === null || _post2 === void 0 ? void 0 : _post2.primary_tag.slug);
    post.primary_tag = primaryTag;
  } // Add custom contact page


  let isContactPage = false;

  if (processEnv/* processEnv.contactPage */.DD.contactPage) {
    var _contactPage, _contactPage2, _contactPage3;

    contactPage = _slug_objectSpread(_slug_objectSpread({}, defaultPage), appConfig/* customPage */._D);
    isContactPage = ((_contactPage = contactPage) === null || _contactPage === void 0 ? void 0 : _contactPage.slug) === slug;
    if (!isContactPage) contactPage = null;
    const url = (_contactPage2 = contactPage) === null || _contactPage2 === void 0 ? void 0 : _contactPage2.feature_image;

    if (!((_contactPage3 = contactPage) !== null && _contactPage3 !== void 0 && _contactPage3.featureImage) && contactPage && url) {
      const dimensions = await (0,lib_images/* imageDimensions */.PC)(url);
      if (dimensions) contactPage.featureImage = {
        url,
        dimensions
      };
    }
  }

  if (!post && !page && !isContactPage) {
    return {
      notFound: true
    };
  }

  let previewPosts = [];
  let prevPost = null;
  let nextPost = null;

  if (isContactPage) {
    previewPosts = await (0,ghost/* getAllPosts */.Bd)({
      limit: 3
    });
  } else if (isPost && (_post3 = post) !== null && _post3 !== void 0 && _post3.id && (_post4 = post) !== null && _post4 !== void 0 && _post4.slug) {
    var _post5, _post5$primary_tag, _post6, _post7;

    const tagSlug = (_post5 = post) === null || _post5 === void 0 ? void 0 : (_post5$primary_tag = _post5.primary_tag) === null || _post5$primary_tag === void 0 ? void 0 : _post5$primary_tag.slug;
    previewPosts = tagSlug && (await (0,ghost/* getPostsByTag */.J4)(tagSlug, 3, (_post6 = post) === null || _post6 === void 0 ? void 0 : _post6.id)) || [];
    const postSlugs = await (0,ghost/* getAllPostSlugs */.bz)();
    const index = postSlugs.indexOf((_post7 = post) === null || _post7 === void 0 ? void 0 : _post7.slug);
    const prevSlug = index > 0 ? postSlugs[index - 1] : null;
    const nextSlug = index < postSlugs.length - 1 ? postSlugs[index + 1] : null;
    prevPost = prevSlug && (await (0,ghost/* getPostBySlug */.zQ)(prevSlug)) || null;
    nextPost = nextSlug && (await (0,ghost/* getPostBySlug */.zQ)(nextSlug)) || null;
  }

  const siteUrl = settings.processEnv.siteUrl;
  const imageUrl = ((_ref = post || contactPage || page) === null || _ref === void 0 ? void 0 : _ref.feature_image) || undefined;
  const image = await (0,seoImage/* seoImage */.e)({
    siteUrl,
    imageUrl
  });
  const tags = contactPage && contactPage.tags || page && page.tags || undefined;
  return _slug_objectSpread({
    props: {
      cmsData: {
        settings,
        post,
        page,
        contactPage,
        isPost,
        seoImage: image,
        previewPosts,
        prevPost,
        nextPost,
        bodyClass: (0,BodyClass/* BodyClass */.C)({
          isPost,
          page: contactPage || page || undefined,
          tags
        })
      }
    }
  }, processEnv/* processEnv.isr.enable */.DD.isr.enable && {
    revalidate: 1
  });
};
const getStaticPaths = async () => {
  const {
    enable,
    maxNumberOfPosts,
    maxNumberOfPages
  } = processEnv/* processEnv.isr */.DD.isr;
  const limitForPosts = enable && {
    limit: maxNumberOfPosts
  } || undefined;
  const limitForPages = enable && {
    limit: maxNumberOfPages
  } || undefined;
  const posts = await (0,ghost/* getAllPosts */.Bd)(limitForPosts);
  const pages = await (0,ghost/* getAllPages */.K0)(limitForPages);
  const settings = await (0,ghost/* getAllSettings */.GR)();
  const {
    url: cmsUrl
  } = settings;
  const postRoutes = posts.map(post => {
    const collectionPath = collections/* collections.getCollectionByNode */.s.getCollectionByNode(post);
    const {
      slug,
      url
    } = post;
    return (0,routing/* resolveUrl */.K)({
      cmsUrl,
      collectionPath,
      slug,
      url
    });
  });
  let contactPageRoute = null;

  if (processEnv/* processEnv.contactPage */.DD.contactPage) {
    const contactPage = _slug_objectSpread(_slug_objectSpread({}, defaultPage), appConfig/* customPage */._D);

    const {
      slug,
      url
    } = contactPage;
    contactPageRoute = (0,routing/* resolveUrl */.K)({
      cmsUrl,
      slug,
      url
    });
  }

  const customRoutes = contactPageRoute && [contactPageRoute] || [];
  const pageRoutes = pages.map(({
    slug,
    url
  }) => (0,routing/* resolveUrl */.K)({
    cmsUrl,
    slug,
    url
  }));
  const paths = [...postRoutes, ...pageRoutes, ...customRoutes];
  return {
    paths,
    fallback: enable && 'blocking'
  };
};

/***/ }),

/***/ 7496:
/***/ (function(module) {

// Exports
module.exports = {
	"contact": "ContactForm_contact__ynWYv",
	"element": "ContactForm_element__Vrw0O ContactForm_contact__ynWYv",
	"robot": "ContactForm_robot__1riVr",
	"button": "ContactForm_button__1wBsg ContactForm_contact__ynWYv",
	"validate": "ContactForm_validate__2fOw1 ContactForm_contact__ynWYv",
	"response": "ContactForm_response__39BZQ ContactForm_contact__ynWYv"
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
var __webpack_exports__ = __webpack_require__.X(0, [597,61,264,228,250,950,439,258,565,811], function() { return __webpack_exec__(6565); });
module.exports = __webpack_exports__;

})();