exports.id = 228;
exports.ids = [228];
exports.modules = {

/***/ 6123:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": function() { return /* binding */ Collections; },
/* harmony export */   "s": function() { return /* binding */ collections; }
/* harmony export */ });
/* harmony import */ var _routesConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6178);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class Collections {
  constructor(config) {
    _defineProperty(this, "collections", void 0);

    this.collections = config;
  }

  getCollectionByNode(node) {
    const {
      path
    } = this.collections.find(collection => collection.selector(node)) || {
      path: '/'
    };
    return path;
  }

}
const collections = new Collections(_routesConfig__WEBPACK_IMPORTED_MODULE_0__/* .collections */ .s);

/***/ }),

/***/ 3228:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "W5": function() { return /* binding */ createNextProfileImagesFromAuthors; },
  "uk": function() { return /* binding */ getAllAuthors; },
  "K0": function() { return /* binding */ getAllPages; },
  "bz": function() { return /* binding */ getAllPostSlugs; },
  "Bd": function() { return /* binding */ getAllPosts; },
  "GR": function() { return /* binding */ getAllSettings; },
  "Ys": function() { return /* binding */ getAllTags; },
  "ye": function() { return /* binding */ getAuthorBySlug; },
  "it": function() { return /* binding */ getPageBySlug; },
  "zQ": function() { return /* binding */ getPostBySlug; },
  "kZ": function() { return /* binding */ getPostsByAuthor; },
  "J4": function() { return /* binding */ getPostsByTag; },
  "iP": function() { return /* binding */ getTagBySlug; }
});

// UNUSED EXPORTS: collections, createNextImage

// EXTERNAL MODULE: external "url"
var external_url_ = __webpack_require__(8835);
// EXTERNAL MODULE: external "@tryghost/content-api"
var content_api_ = __webpack_require__(5933);
var content_api_default = /*#__PURE__*/__webpack_require__.n(content_api_);
// EXTERNAL MODULE: external "rehype"
var external_rehype_ = __webpack_require__(521);
var external_rehype_default = /*#__PURE__*/__webpack_require__.n(external_rehype_);
// EXTERNAL MODULE: external "unist-util-visit"
var external_unist_util_visit_ = __webpack_require__(2148);
var external_unist_util_visit_default = /*#__PURE__*/__webpack_require__.n(external_unist_util_visit_);
// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(3804);
// EXTERNAL MODULE: external "refractor"
var external_refractor_ = __webpack_require__(929);
var external_refractor_default = /*#__PURE__*/__webpack_require__.n(external_refractor_);
// EXTERNAL MODULE: external "hast-util-to-string"
var external_hast_util_to_string_ = __webpack_require__(7099);
var external_hast_util_to_string_default = /*#__PURE__*/__webpack_require__.n(external_hast_util_to_string_);
// EXTERNAL MODULE: ./lib/images.ts + 1 modules
var lib_images = __webpack_require__(5984);
;// CONCATENATED MODULE: ./lib/toc.ts

const generateTableOfContents = htmlAst => {
  const tags = [`h1`, `h2`, `h3`, `h4`, `h5`, `h6`];

  function headings(node) {
    return tags.includes(node.tagName);
  } // recursive walk to visit all children


  const walk = (children, text = ``, depth = 0) => {
    children.forEach(child => {
      if (child.type === `text`) {
        text = text + child.value;
      } else if (child.children && depth < 3) {
        depth = depth + 1;
        text = walk(child.children, text, depth);
      }
    });
    return text;
  };

  let toc = [];
  external_unist_util_visit_default()(htmlAst, headings, node => {
    const text = walk(node.children || []);

    if (text.length > 0) {
      const id = node.properties.id || `error-missing-id`;
      const level = node.tagName.substr(1, 1);
      toc.push({
        level: level,
        id: id,
        heading: text,
        parentIndex: -1,
        items: []
      });
    }
  }); // Walk up the list to find matching parent

  const findParent = (toc, parentIndex, level) => {
    while (parentIndex >= 0 && level < toc[parentIndex].level) {
      parentIndex = toc[parentIndex].parentIndex;
    }

    return parentIndex >= 0 ? toc[parentIndex].parentIndex : -1;
  }; // determine parents


  toc.forEach((node, index) => {
    const prev = toc[index > 0 ? index - 1 : 0];
    node.parentIndex = node.level > prev.level ? node.parentIndex = index - 1 : prev.parentIndex;
    node.parentIndex = node.level < prev.level ? findParent(toc, node.parentIndex, node.level) : node.parentIndex;
  }); // add children to their parent

  toc.forEach(node => node.parentIndex >= 0 && toc[node.parentIndex].items.push(node)); // make final tree

  let tocTree = toc.filter(({
    parentIndex
  }) => parentIndex === -1);

  const removeProps = ({
    id,
    heading,
    items
  }) => items.length > 0 ? {
    id,
    heading,
    items: items.map(item => removeProps(item))
  } : {
    id,
    heading
  };

  return tocTree.map(node => removeProps(node));
};
// EXTERNAL MODULE: ./lib/processEnv.ts
var processEnv = __webpack_require__(264);
;// CONCATENATED MODULE: ./lib/ghost-normalize.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const {
  prism,
  toc,
  nextImages
} = processEnv/* processEnv */.DD;
const rehype = external_rehype_default()().use({
  settings: {
    fragment: true,
    space: `html`,
    emitParseErrors: false,
    verbose: false
  }
});
const normalizePost = async (post, cmsUrl, basePath) => {
  if (!cmsUrl) throw Error('ghost-normalize.ts: cmsUrl expected.');
  const rewriteGhostLinks = withRewriteGhostLinks(cmsUrl, basePath);
  const processors = [rewriteGhostLinks, rewriteRelativeLinks, syntaxHighlightWithPrismJS, rewriteInlineImages];
  let htmlAst = rehype.parse(post.html || '');

  for (const process of processors) {
    htmlAst = await process(htmlAst);
  }

  const toc = tableOfContents(htmlAst); // image meta

  const url = post.feature_image;
  const dimensions = await (0,lib_images/* imageDimensions */.PC)(url); // author images

  const authors = await createNextProfileImagesFromAuthors(post.authors);
  return _objectSpread(_objectSpread({}, post), {}, {
    authors,
    htmlAst,
    featureImage: url && dimensions && {
      url,
      dimensions
    } || null,
    toc
  });
};
/**
 * Rewrite absolute Ghost CMS links to relative
 */

const withRewriteGhostLinks = (cmsUrl, basePath = '/') => htmlAst => {
  external_unist_util_visit_default()(htmlAst, {
    tagName: `a`
  }, node => {
    if (!node.properties) return;
    const href = (0,external_url_.parse)(node.properties.href);

    if (href.protocol === cmsUrl.protocol && href.host === cmsUrl.host) {
      var _href$pathname;

      node.properties.href = basePath + ((_href$pathname = href.pathname) === null || _href$pathname === void 0 ? void 0 : _href$pathname.substring(1));
    }
  });
  return htmlAst;
};
/**
 * Rewrite relative links to be used with next/link
 */


const rewriteRelativeLinks = htmlAst => {
  external_unist_util_visit_default()(htmlAst, {
    tagName: `a`
  }, node => {
    var _node$properties;

    const href = (_node$properties = node.properties) === null || _node$properties === void 0 ? void 0 : _node$properties.href;

    if (href && !href.startsWith(`http`)) {
      const copyOfNode = (0,external_lodash_.cloneDeep)(node);
      delete copyOfNode.properties;
      delete copyOfNode.position;
      copyOfNode.tagName = `span`;
      node.tagName = `Link`;
      node.children = [copyOfNode];
    }
  });
  return htmlAst;
};
/**
 * Syntax Highlighting with PrismJS using refactor
 */


const syntaxHighlightWithPrismJS = htmlAst => {
  if (!prism.enable) return htmlAst;

  const getLanguage = node => {
    var _node$properties2;

    const className = ((_node$properties2 = node.properties) === null || _node$properties2 === void 0 ? void 0 : _node$properties2.className) || [];

    for (const classListItem of className) {
      if (classListItem.slice(0, 9) === 'language-') {
        return classListItem.slice(9).toLowerCase();
      }
    }

    return null;
  };

  external_unist_util_visit_default()(htmlAst, 'element', (node, _index, parent) => {
    var _node$properties3;

    if (!parent || parent.tagName !== 'pre' || node.tagName !== 'code') {
      return;
    }

    const lang = getLanguage(node);
    if (lang === null) return;
    let className = (_node$properties3 = node.properties) === null || _node$properties3 === void 0 ? void 0 : _node$properties3.className;
    let result;

    try {
      className = (className || []).concat('language-' + lang);
      result = external_refractor_default().highlight(external_hast_util_to_string_default()(node), lang);
    } catch (err) {
      if (prism.ignoreMissing && /Unknown language/.test(err.message)) {
        return;
      }

      throw err;
    }

    node.children = result;
  });
  return htmlAst;
};
/**
 * Table of Contents
 */


const tableOfContents = htmlAst => {
  if (!toc.enable) return null;
  return generateTableOfContents(htmlAst);
};
/**
 * Rewrite img tags to be used with next/image
 * Always attach aspectRatio for image cards
 */


const rewriteInlineImages = async htmlAst => {
  let nodes = [];
  external_unist_util_visit_default()(htmlAst, {
    tagName: `img`
  }, (node, _index, parent) => {
    if (nextImages.inline) {
      node.tagName = `Image`;
    }

    const {
      src
    } = node.properties;
    node.imageDimensions = (0,lib_images/* imageDimensions */.PC)(src);
    nodes.push({
      node,
      parent
    });
  });
  const dimensions = await Promise.all(nodes.map(({
    node
  }) => node.imageDimensions));
  nodes.forEach(({
    node,
    parent
  }, i) => {
    if (dimensions[i] === null) return;
    node.imageDimensions = dimensions[i];
    const {
      width,
      height
    } = node.imageDimensions;
    const aspectRatio = width / height;
    const flex = `flex: ${aspectRatio} 1 0`;

    if (parent && parent.properties) {
      let parentStyle = parent.properties.style || [];
      if (typeof parentStyle === 'string') parentStyle = [parentStyle];
      parent.properties.style = [...parentStyle, flex];
    }
  });
  return htmlAst;
};
// EXTERNAL MODULE: ./routesConfig.ts
var routesConfig = __webpack_require__(6178);
// EXTERNAL MODULE: ./lib/collections.ts
var collections = __webpack_require__(6123);
// EXTERNAL MODULE: ./appConfig.ts
var appConfig = __webpack_require__(9317);
;// CONCATENATED MODULE: ./lib/ghost.ts
function ghost_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function ghost_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ghost_ownKeys(Object(source), true).forEach(function (key) { ghost_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ghost_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function ghost_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const api = new (content_api_default())({
  url: processEnv/* ghostAPIUrl */.jZ,
  key: processEnv/* ghostAPIKey */.VA,
  version: 'v3'
});
const postAndPageFetchOptions = {
  limit: 'all',
  include: ['tags', 'authors', 'count.posts'],
  order: ['featured DESC', 'published_at DESC']
};
const tagAndAuthorFetchOptions = {
  limit: 'all',
  include: 'count.posts'
};
const postAndPageSlugOptions = {
  limit: 'all',
  fields: 'slug'
};

const excludePostOrPageBySlug = () => {
  if (!appConfig/* contactPage */.oX) return '';
  return 'slug:-contact';
}; // helpers


const createNextImage = async url => {
  if (!url) return undefined;
  const normalizedUrl = await (0,lib_images/* normalizedImageUrl */.iH)(url);
  const dimensions = await (0,lib_images/* imageDimensions */.PC)(normalizedUrl);
  return dimensions && {
    url: normalizedUrl,
    dimensions
  } || undefined;
};

async function createNextFeatureImages(nodes) {
  const {
    meta
  } = nodes;
  const images = await Promise.all(nodes.map(node => createNextImage(node.feature_image)));
  const results = nodes.map((node, i) => ghost_objectSpread(ghost_objectSpread({}, node), images[i] && {
    featureImage: images[i]
  }));
  return Object.assign(results, {
    meta
  });
}

async function createNextProfileImages(nodes) {
  const {
    meta
  } = nodes;
  const images = await Promise.all(nodes.map(node => createNextImage(node.profile_image)));
  const results = nodes.map((node, i) => ghost_objectSpread(ghost_objectSpread({}, node), images[i] && {
    profileImage: images[i]
  }));
  return Object.assign(results, {
    meta
  });
}

async function createNextProfileImagesFromAuthors(nodes) {
  if (!nodes) return undefined;
  const images = await Promise.all(nodes.map(node => createNextImage(node.profile_image)));
  return nodes.map((node, i) => ghost_objectSpread(ghost_objectSpread({}, node), images[i] && {
    profileImage: images[i]
  }));
}

async function createNextProfileImagesFromPosts(nodes) {
  const {
    meta
  } = nodes;
  const authors = await Promise.all(nodes.map(node => createNextProfileImagesFromAuthors(node.authors)));
  const results = nodes.map((node, i) => ghost_objectSpread(ghost_objectSpread({}, node), authors[i] && {
    authors: authors[i]
  }));
  return Object.assign(results, {
    meta
  });
}

async function getAllSettings() {
  var _settings$url;

  //const cached = getCache<SettingsResponse>('settings')
  //if (cached) return cached
  const settings = await api.settings.browse();
  settings.url = settings === null || settings === void 0 ? void 0 : (_settings$url = settings.url) === null || _settings$url === void 0 ? void 0 : _settings$url.replace(/\/$/, ``);
  const iconImage = await createNextImage(settings.icon);
  const logoImage = await createNextImage(settings.logo);
  const coverImage = await createNextImage(settings.cover_image);

  const result = ghost_objectSpread(ghost_objectSpread(ghost_objectSpread(ghost_objectSpread({
    processEnv: processEnv/* processEnv */.DD
  }, settings), iconImage && {
    iconImage
  }), logoImage && {
    logoImage
  }), coverImage && {
    coverImage
  }); //setCache('settings', result)


  return result;
}
async function getAllTags() {
  const tags = await api.tags.browse(tagAndAuthorFetchOptions);
  return await createNextFeatureImages(tags);
}
async function getAllAuthors() {
  const authors = await api.authors.browse(tagAndAuthorFetchOptions);
  return await createNextProfileImages(authors);
}
async function getAllPosts(props) {
  const posts = await api.posts.browse(ghost_objectSpread(ghost_objectSpread({}, postAndPageFetchOptions), {}, {
    filter: excludePostOrPageBySlug()
  }, props && ghost_objectSpread({}, props)));
  const results = await createNextProfileImagesFromPosts(posts);
  return await createNextFeatureImages(results);
}
async function getAllPostSlugs() {
  const posts = await api.posts.browse(postAndPageSlugOptions);
  return posts.map(p => p.slug);
}
async function getAllPages(props) {
  const pages = await api.pages.browse(ghost_objectSpread(ghost_objectSpread({}, postAndPageFetchOptions), {}, {
    filter: excludePostOrPageBySlug()
  }, props && ghost_objectSpread({}, props)));
  return await createNextFeatureImages(pages);
} // specific data by slug

async function getTagBySlug(slug) {
  return await api.tags.read(ghost_objectSpread(ghost_objectSpread({}, tagAndAuthorFetchOptions), {}, {
    slug
  }));
}
async function getAuthorBySlug(slug) {
  const author = await api.authors.read(ghost_objectSpread(ghost_objectSpread({}, tagAndAuthorFetchOptions), {}, {
    slug
  }));
  const profileImage = await createNextImage(author.profile_image);

  const result = ghost_objectSpread(ghost_objectSpread({}, author), profileImage && {
    profileImage
  });

  return result;
}
async function getPostBySlug(slug) {
  let result;

  try {
    const post = await api.posts.read(ghost_objectSpread(ghost_objectSpread({}, postAndPageFetchOptions), {}, {
      slug
    })); // older Ghost versions do not throw error on 404

    if (!post) return null;
    const {
      url
    } = await getAllSettings();
    result = await normalizePost(post, url && (0,external_url_.parse)(url) || undefined);
  } catch (error) {
    var _error$response;

    if (((_error$response = error.response) === null || _error$response === void 0 ? void 0 : _error$response.status) !== 404) throw new Error(error);
    return null;
  }

  return result;
}
async function getPageBySlug(slug) {
  let result;

  try {
    const page = await api.pages.read(ghost_objectSpread(ghost_objectSpread({}, postAndPageFetchOptions), {}, {
      slug
    })); // older Ghost versions do not throw error on 404

    if (!page) return null;
    const {
      url
    } = await getAllSettings();
    result = await normalizePost(page, url && (0,external_url_.parse)(url) || undefined);
  } catch (error) {
    var _error$response2;

    if (((_error$response2 = error.response) === null || _error$response2 === void 0 ? void 0 : _error$response2.status) !== 404) throw new Error(error);
    return null;
  }

  return result;
} // specific data by author/tag slug

async function getPostsByAuthor(slug) {
  const posts = await api.posts.browse(ghost_objectSpread(ghost_objectSpread({}, postAndPageFetchOptions), {}, {
    filter: `authors.slug:${slug}`
  }));
  return await createNextFeatureImages(posts);
}
async function getPostsByTag(slug, limit, excludeId) {
  const exclude = excludeId && `+id:-${excludeId}` || ``;
  const posts = await api.posts.browse(ghost_objectSpread(ghost_objectSpread(ghost_objectSpread({}, postAndPageFetchOptions), limit && {
    limit: `${limit}`
  }), {}, {
    filter: `tags.slug:${slug}${exclude}`
  }));
  return await createNextFeatureImages(posts);
} // Collections

const ghost_collections = new collections/* Collections */.n(routesConfig/* collections */.s);

/***/ }),

/***/ 5984:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "PC": function() { return /* binding */ imageDimensions; },
  "Fu": function() { return /* binding */ imageDimensionsFromFile; },
  "iH": function() { return /* binding */ normalizedImageUrl; }
});

// EXTERNAL MODULE: external "probe-image-size"
var external_probe_image_size_ = __webpack_require__(5685);
var external_probe_image_size_default = /*#__PURE__*/__webpack_require__.n(external_probe_image_size_);
// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(5747);
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_);
// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(5622);
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_);
// EXTERNAL MODULE: ./appConfig.ts
var appConfig = __webpack_require__(9317);
;// CONCATENATED MODULE: ./lib/cache.ts



const cacheRoot = external_path_default().join(process.cwd(), '.cache');

const makeDirectory = path => {
  if (external_fs_default().existsSync(path)) return true;

  try {
    external_fs_default().mkdirSync(path);
  } catch {
    return false;
  }

  return true;
};

function getCache(key) {
  if (!appConfig/* fileCache */.gX || !key) return null;
  const filePath = external_path_default().join(cacheRoot, `${key}.txt`);

  if (external_fs_default().existsSync(filePath)) {
    const value = external_fs_default().readFileSync(filePath);
    return JSON.parse(value.toString());
  }

  return null;
}
function setCache(key, object) {
  if (!appConfig/* fileCache */.gX || !key) return;
  if (!makeDirectory(cacheRoot)) return;
  const filePath = external_path_default().join(cacheRoot, `${key}.txt`);

  try {
    external_fs_default().writeFileSync(filePath, JSON.stringify(object));
  } catch (error) {
    console.warn('Could not write to file cache. This is expected during ISR, but not during deploy.', error);
  }
}
// EXTERNAL MODULE: ./lib/processEnv.ts
var processEnv = __webpack_require__(264);
// EXTERNAL MODULE: external "util"
var external_util_ = __webpack_require__(1669);
// EXTERNAL MODULE: external "crypto-hash"
var external_crypto_hash_ = __webpack_require__(4992);
;// CONCATENATED MODULE: ./lib/images.ts







const streamPipeline = (0,external_util_.promisify)(__webpack_require__(2413).pipeline);
/**
 * Determine image dimensions
 *
 * probe-image-size reacts sensitivily on bad network connections
 * See: https://github.com/nodeca/probe-image-size/issues/46
 * Frequent fails signify bad network connections
 *
 * Current measures:
 *
 * 1. Caching results to fs
 * 2. Retries on fail
 * 3. Reduced network timeouts to speed up retries
 *
 */

const maxRetries = 50;
const read_timeout = 3000; // ms

const response_timeout = 3000; // ms

const calcHash = async input => await (0,external_crypto_hash_.sha1)(input);

const genCacheKey = async (url, noCache) => {
  if (noCache) return null;
  return await calcHash(url);
};

const imageDimensions = async (url, noCache) => {
  if (!url) return null;
  const cacheKey = await genCacheKey(url, noCache);
  const cached = getCache(cacheKey);
  if (cached) return cached;
  let width = 0;
  let height = 0;
  let hasError;
  let retry = 0;

  do {
    try {
      const {
        width: w,
        height: h
      } = await external_probe_image_size_default()(url, {
        read_timeout,
        response_timeout
      });
      width = w;
      height = h;
      hasError = false;
    } catch (error) {
      const {
        code
      } = error;
      hasError = true;
      retry = retry + 1;

      if (code === 'ECONTENT') {
        // no content: width + height = 0
        hasError = false;
      }

      if (!['ECONNRESET', 'ECONTENT'].includes(code)) {
        console.warn(`images.ts: Error while probing image with url: ${url}.`);
        throw new Error(error);
      } //console.warn(`images.ts: Network error while probing image with url: ${url}.`)

    }
  } while (hasError && retry < maxRetries);

  if (hasError) throw new Error(`images.ts: Bad network connection. Failed image probe after ${maxRetries} retries for url: ${url}.`);
  if (0 === width + height) return null;
  setCache(cacheKey, {
    width,
    height
  });
  return {
    width,
    height
  };
};
const imageDimensionsFromFile = async (file, noCache) => {
  if (!file) return null;
  const cacheKey = await genCacheKey(file, noCache);
  const cached = getCache(cacheKey);
  if (cached) return cached;
  const {
    width,
    height
  } = await external_probe_image_size_default()((0,external_fs_.createReadStream)(file));
  if (0 === width + height) return null;
  setCache(cacheKey, {
    width,
    height
  });
  return {
    width,
    height
  };
};
/**
 * If the sourceImage flag is set, stream images
 * from localhost to the public image folder
 */

const imageRoot = (0,external_path_.join)(process.cwd(), 'public/images');
const normalizedImageUrl = async url => {
  var _url$match;

  const localhostRegExp = /^http:\/\/\w+(\.\w+)*(:[0-9]+)?\/?(\/.*)*\/(.*)$/;
  const filename = (_url$match = url.match(localhostRegExp)) === null || _url$match === void 0 ? void 0 : _url$match.reverse()[0];

  if (processEnv/* processEnv.nextImages.source */.DD.nextImages.source && filename) {
    const filePath = (0,external_path_.join)(imageRoot, filename);

    if (!(0,external_fs_.existsSync)(filePath)) {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`images.ts: unexpected response ${response.statusText}`);
      await streamPipeline(response.body, (0,external_fs_.createWriteStream)(filePath));
    }

    return `${processEnv/* processEnv.siteUrl */.DD.siteUrl}/images/${filename}`;
  }

  return url.startsWith('//') ? `https:${url}` : url;
};

/***/ }),

/***/ 6178:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": function() { return /* binding */ collections; }
/* harmony export */ });
const collections = []; //export const collections: Collection<GhostPostOrPage>[] = [{
//  path: `themes`,
//  selector: node => node.primary_tag && node.primary_tag.slug === `themes`
//}]
//export const collections: Collection<GhostPostOrPage>[] = [{
//  path: `luther`,
//  selector: node => node.authors && node.authors.filter(a => a.slug === `martin`).length > 0,
//}]

/***/ })

};
;