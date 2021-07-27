(function() {
var exports = {};
exports.id = 703;
exports.ids = [703];
exports.modules = {

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

/***/ 2080:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ rss_xml; },
  "getServerSideProps": function() { return /* binding */ getServerSideProps; }
});

// EXTERNAL MODULE: ./lib/ghost.ts + 2 modules
var ghost = __webpack_require__(3228);
;// CONCATENATED MODULE: external "cheerio"
var external_cheerio_namespaceObject = require("cheerio");;
var external_cheerio_default = /*#__PURE__*/__webpack_require__.n(external_cheerio_namespaceObject);
;// CONCATENATED MODULE: external "rss"
var external_rss_namespaceObject = require("rss");;
var external_rss_default = /*#__PURE__*/__webpack_require__.n(external_rss_namespaceObject);
// EXTERNAL MODULE: ./components/meta/siteDefaults.ts
var siteDefaults = __webpack_require__(8211);
// EXTERNAL MODULE: external "url"
var external_url_ = __webpack_require__(8835);
;// CONCATENATED MODULE: ./utils/rss.ts




const generateRSSFeed = ({
  posts,
  settings
}) => {
  const {
    siteUrl
  } = settings.processEnv;
  const feedOptions = {
    title: siteDefaults/* siteTitleMeta */.wJ,
    description: siteDefaults/* siteDescriptionMeta */.Gj,
    generator: `Jamify Blog Starter 2.0`,
    feed_url: (0,external_url_.resolve)(siteUrl, 'rss/'),
    site_url: (0,external_url_.resolve)(siteUrl, ''),
    image_url: (0,external_url_.resolve)(siteUrl, siteDefaults/* siteIcon */.__),
    ttl: 60,
    custom_namespaces: {
      content: `http://purl.org/rss/1.0/modules/content/`,
      media: `http://search.yahoo.com/mrss/`
    }
  };
  const feed = new (external_rss_default())(feedOptions);
  const feedItems = posts.map(post => generateItem({
    post,
    settings
  }));
  feedItems.forEach(item => feed.item(item));
  return feed.xml({
    indent: false
  });
};

const generateItem = ({
  post,
  settings
}) => {
  const {
    siteUrl
  } = settings.processEnv;
  const {
    url = '',
    canonical_url,
    html,
    title = '',
    excerpt: description = '',
    id: guid,
    published_at: date,
    tags,
    primary_author: author
  } = post;
  const cmsUrl = settings.url || '';
  const postUrl = canonical_url || url;
  const itemUrl = postUrl === null || postUrl === void 0 ? void 0 : postUrl.replace(cmsUrl, siteUrl); // ToDo:
  // const transformedHtml = post.htmlAst

  const htmlContent = external_cheerio_default().load(html || '', {
    decodeEntities: false,
    xmlMode: true
  });
  const imageUrl = post.feature_image;

  const tagsFilter = tags => tags.filter(({
    name
  }) => !!name && name.substr(0, 5) !== 'hash-').map(({
    name
  }) => name || '');

  const item = {
    title,
    description,
    guid,
    url: itemUrl,
    date: !!date && date || '',
    categories: tags && tagsFilter(tags) || [],
    author: author && author.name || '',
    custom_elements: [{}]
  };

  if (imageUrl) {
    // Add a media content tag
    item.custom_elements.push({
      'media:content': {
        _attr: {
          url: imageUrl,
          medium: `image`
        }
      }
    }); // Also add the image to the content, because not all readers support media:content

    htmlContent(`p`).first().before(`<img src="` + imageUrl + `" />`);
    htmlContent(`img`).attr(`alt`, title || '');
  }

  item.custom_elements.push({
    'content:encoded': {
      _cdata: htmlContent.html()
    }
  });
  return item;
};
;// CONCATENATED MODULE: ./pages/rss.xml.tsx



const RSS = () => null;

const getServerSideProps = async ({
  res
}) => {
  let settings;
  let posts;

  try {
    settings = await (0,ghost/* getAllSettings */.GR)();
    posts = await (0,ghost/* getAllPosts */.Bd)();
  } catch (error) {
    throw new Error('Index creation failed.');
  }

  let rssData = null;

  if (settings.processEnv.rssFeed) {
    rssData = generateRSSFeed({
      posts,
      settings
    });
  }

  if (res && rssData) {
    res.setHeader('Content-Type', 'text/xml');
    res.write(rssData);
    res.end();
  }

  return {
    props: {}
  };
};
/* harmony default export */ var rss_xml = (RSS);

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [264,228], function() { return __webpack_exec__(2080); });
module.exports = __webpack_exports__;

})();