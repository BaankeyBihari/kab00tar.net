exports.id = 950;
exports.ids = [950];
exports.modules = {

/***/ 4950:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": function() { return /* binding */ resolveUrl; }
/* harmony export */ });
// higher order function
const withPrefixPath = prefixPath => path => normalizePath(`/${prefixPath}/${path}/`);

const trimSlash = text => text.replace(/^\//, '').replace(/\/$/, '');

const normalizePath = path => {
  const normalize = `/${trimSlash(path)}/`;
  return normalize.replace(`////`, `/`).replace(`///`, `/`).replace(`//`, `/`);
}; //const splitUrl = (url: string) => {
//  // Regexp to extract the absolute part of the CMS url
//  const regexp = /^(([\w-]+:\/\/?|www[.])[^\s()<>^/]+(?:\([\w\d]+\)|([^[:punct:]\s]|\/)))/
//
//  const [absolute] = url.match(regexp) || []
//  const relative = url.split(absolute, 2).join(`/`)
//  return { absolute, relative }
//}


const resolveUrl = ({
  cmsUrl,
  collectionPath = `/`,
  slug,
  url
}) => {
  const resolvePath = withPrefixPath(collectionPath);
  if (!slug || slug.length === 0) return normalizePath(resolvePath(`/`));
  if (!cmsUrl || cmsUrl.length === 0) return resolvePath(slug);
  if (!url || url.length === 0) return resolvePath(slug);
  if (trimSlash(url) === slug) return resolvePath(slug);
  if (!url.startsWith(cmsUrl)) return resolvePath(slug); //const { absolute: cmsUrl, relative: dirUrl } = splitUrl(url)

  const dirUrl = url.replace(cmsUrl, '/').replace('//', '/');
  return resolvePath(dirUrl);
};

/***/ })

};
;