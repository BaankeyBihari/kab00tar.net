(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{4884:function(e,n,t){"use strict";t.d(n,{I:function(){return s},N:function(){return f}});var r=t(5893),o=t(809),u=t.n(o),i=t(2447),c=t(7294),a={isOpen:!1,handleClose:function(){return null},handleOpen:function(){return null},handleChange:function(){return null},handleSubmit:function(){return null},email:"",message:""},l=(0,c.createContext)(a),s=function(){return(0,c.useContext)(l)},f=function(e){var n=e.children,t=(0,c.useState)(!1),o=t[0],a=t[1],s=(0,c.useState)(""),f=s[0],d=s[1],v=(0,c.useState)(""),h=v[0],_=v[1],p=function(){a(!1)},m=function(){var e=(0,i.Z)(u().mark((function e(n){var t,r,o,i=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=i.length>1&&void 0!==i[1]?i[1]:"",n.preventDefault(),r="".concat(t,"/members/api/send-magic-link/"),o={email:f,emailType:"subscribe",labels:[]};try{fetch(r,{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)})}catch(u){_("error")}_("success");case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,c.useEffect)((function(){var e=function(e){"Escape"===e.key&&p()};return window.addEventListener("keydown",e,!1),function(){window.removeEventListener("keydown",e,!1)}}),[]),(0,r.jsx)(l.Provider,{value:{isOpen:o,handleOpen:function(e){e.preventDefault(),a(!0)},handleClose:p,handleSubmit:m,handleChange:function(e){d(e.target.value)},email:f,message:h},children:n})}},7326:function(e,n,t){"use strict";t.d(n,{F:function(){return c},f:function(){return l}});var r=t(5893),o=t(7294),u={dark:null,getDark:function(){return null},toggleDark:function(){return null}},i=(0,o.createContext)(u),c=function(){return(0,o.useContext)(i)},a=function(e){var n=e.defaultMode,t=e.overrideOS,r=function(){if("undefined"===typeof localStorage)return null;var e=localStorage.getItem("dark");return e?"dark"===e?"dark":"light":null}();return null!==r?r:t?n:!0===window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":!0===window.matchMedia("(prefers-color-scheme: light)").matches?"light":n},l=function(e){var n=e.defaultMode,t=e.overrideOS,u=e.children,c=(0,o.useState)(null),l=c[0],s=c[1];(0,o.useEffect)((function(){s(a({defaultMode:n,overrideOS:t}))}),[n,t]);return(0,r.jsx)(i.Provider,{value:{dark:l,getDark:function(){return a({defaultMode:n,overrideOS:t})},toggleDark:function(){if(null!==l){var e="dark"===l?"light":"dark";localStorage.setItem("dark",e),s(e)}}},children:u})}},7112:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return _}});var r=t(6265),o=t(5893),u=t(4884),i=t(7326),c=t(4155),a=(c.env.CMS_GHOST_API_URL,c.env.CMS_GHOST_API_KEY,function(e,n){return e?"true"===e:n}),l=function(e,n){return e?parseInt(e,10):n};var s,f,d={siteUrl:c.env.SITE_URL||c.env.VERCEL_URL&&"https://".concat(c.env.VERCEL_URL)||c.env.URL||"http://localhost:3000",platform:"true"===c.env.NETLIFY?"netlify":"vercel",darkMode:{defaultMode:(s=c.env.JAMIFY_DARK_MODE_DEFAULT,f="light",s?"dark"===s?"dark":"light":f),overrideOS:a(c.env.JAMIFY_DARK_MODE_OVERRIDE_OS,!0)},nextImages:{feature:a(c.env.JAMIFY_NEXT_FEATURE_IMAGES,!0),inline:a(c.env.JAMIFY_NEXT_INLINE_IMAGES,!0),quality:l(c.env.JAMIFY_NEXT_IMAGES_QUALITY,80),source:a(c.env.JAMIFY_NEXT_SOURCE_IMAGES,!1)},rssFeed:a(c.env.JAMIFY_RSS_FEED,!0),memberSubscriptions:a(c.env.JAMIFY_MEMBER_SUBSCRIPTIONS,!0),commenting:{system:c.env.JAMIFY_COMMENTING_SYSTEM||null,commentoUrl:c.env.JAMIFY_COMMENTO_URL||"https://cdn.commento.io",disqusShortname:c.env.JAMIFY_DISQUS_SHORTNAME||"short-name-here"},prism:{enable:a(c.env.JAMIFY_PRISM,!0),ignoreMissing:a(c.env.JAMIFY_PRISM_IGNORE_MISSING,!0)},contactPage:a(c.env.JAMIFY_CONTACT_PAGE,!0),toc:{enable:a(c.env.JAMIFY_TOC,!0),maxDepth:l(c.env.JAMIFY_TOC_MAX_DEPTH,2)},customNavigation:function(e,n){return e?JSON.parse(e):n}(c.env.JAMIFY_CUSTOM_NAVIGATION,[{label:"Contact",url:"/contact"}]),isr:{enable:a(c.env.JAMIFY_NEXT_ISR,!1),maxNumberOfPosts:l(c.env.JAMIFY_NEXT_ISR_MAX_NUMBER_POSTS,20),maxNumberOfPages:l(c.env.JAMIFY_NEXT_ISR_MAX_NUMBER_PAGES,20)}};t(4242),t(9911),t(1340),t(7852),t(8385);function v(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function h(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?v(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):v(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var _=function(e){var n=e.Component,t=e.pageProps;return(0,o.jsx)(i.f,h(h({},d.darkMode),{},{children:(0,o.jsx)(u.N,{children:(0,o.jsx)(n,h({},t))})}))}},6363:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return t(7112)}])},1340:function(){},7852:function(){},9911:function(){},4242:function(){},8385:function(){},2447:function(e,n,t){"use strict";function r(e,n,t,r,o,u,i){try{var c=e[u](i),a=c.value}catch(l){return void t(l)}c.done?n(a):Promise.resolve(a).then(r,o)}function o(e){return function(){var n=this,t=arguments;return new Promise((function(o,u){var i=e.apply(n,t);function c(e){r(i,o,u,c,a,"next",e)}function a(e){r(i,o,u,c,a,"throw",e)}c(void 0)}))}}t.d(n,{Z:function(){return o}})},6265:function(e,n,t){"use strict";function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}t.d(n,{Z:function(){return r}})},4155:function(e){var n,t,r=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function i(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:o}catch(e){n=o}try{t="function"===typeof clearTimeout?clearTimeout:u}catch(e){t=u}}();var c,a=[],l=!1,s=-1;function f(){l&&c&&(l=!1,c.length?a=c.concat(a):s=-1,a.length&&d())}function d(){if(!l){var e=i(f);l=!0;for(var n=a.length;n;){for(c=a,a=[];++s<n;)c&&c[s].run();s=-1,n=a.length}c=null,l=!1,function(e){if(t===clearTimeout)return clearTimeout(e);if((t===u||!t)&&clearTimeout)return t=clearTimeout,clearTimeout(e);try{t(e)}catch(n){try{return t.call(null,e)}catch(n){return t.call(this,e)}}}(e)}}function v(e,n){this.fun=e,this.array=n}function h(){}r.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)n[t-1]=arguments[t];a.push(new v(e,n)),1!==a.length||l||i(d)},v.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=h,r.addListener=h,r.once=h,r.off=h,r.removeListener=h,r.removeAllListeners=h,r.emit=h,r.prependListener=h,r.prependOnceListener=h,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}}},function(e){var n=function(n){return e(e.s=n)};e.O(0,[774,179],(function(){return n(6363),n(4651)}));var t=e.O();_N_E=t}]);