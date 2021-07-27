exports.id = 250;
exports.ids = [250];
exports.modules = {

/***/ 4884:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": function() { return /* binding */ useOverlay; },
/* harmony export */   "N": function() { return /* binding */ OverlayProvider; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const defaultValues = {
  isOpen: false,
  handleClose: () => null,
  handleOpen: () => null,
  handleChange: () => null,
  handleSubmit: () => null,
  email: '',
  message: ''
};
const OverlayContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(defaultValues);
const useOverlay = () => (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(OverlayContext);
const OverlayProvider = ({
  children
}) => {
  const {
    0: isOpen,
    1: setIsOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: email,
    1: setEmail
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: message,
    1: setMessage
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = event => {
    event.preventDefault();
    setIsOpen(true);
  };

  const handleChange = event => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event, cmsUrl = '') => {
    event.preventDefault();
    const postURL = `${cmsUrl}/members/api/send-magic-link/`;
    const values = {
      email,
      emailType: `subscribe`,
      labels: []
    };

    try {
      fetch(postURL, {
        method: `POST`,
        mode: `cors`,
        headers: {
          'Content-Type': `application/json`
        },
        body: JSON.stringify(values)
      });
    } catch {
      setMessage(`error`);
    }

    setMessage(`success`);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const escFunction = event => {
      if (event.key === `Escape`) {
        handleClose();
      }
    };

    window.addEventListener(`keydown`, escFunction, false);
    return function cleanup() {
      window.removeEventListener(`keydown`, escFunction, false);
    };
  }, []);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(OverlayContext.Provider, {
    value: {
      isOpen,
      handleOpen,
      handleClose,
      handleSubmit,
      handleChange,
      email,
      message
    },
    children: children
  });
};

/***/ }),

/***/ 7326:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": function() { return /* binding */ useTheme; },
/* harmony export */   "f": function() { return /* binding */ ThemeProvider; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const defaultValues = {
  dark: null,
  getDark: () => null,
  toggleDark: () => null
};
const ThemeContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(defaultValues);
const useTheme = () => (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ThemeContext); // Getting dark mode information from OS!
// You need macOS Mojave + Safari Technology Preview Release 68 to test this currently.

const supportsDarkMode = () =>  false && 0;

const supportsLightMode = () =>  false && 0;

const getLocalStoragelsDark = () => {
  if (typeof localStorage === 'undefined') return null;
  const dark = localStorage.getItem(`dark`);
  if (!dark) return null;
  return dark === 'dark' ? 'dark' : 'light';
};

const getDefaultMode = ({
  defaultMode,
  overrideOS
}) => {
  const lsDark = getLocalStoragelsDark();

  if (lsDark !== null) {
    return lsDark;
  } else if (overrideOS) {
    return defaultMode;
  } else if (supportsDarkMode()) {
    return 'dark';
  } else if (supportsLightMode()) {
    return 'light';
  } else {
    return defaultMode;
  }
};

const ThemeProvider = ({
  defaultMode,
  overrideOS,
  children
}) => {
  const {
    0: dark,
    1: setDark
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);

  const getDark = () => getDefaultMode({
    defaultMode,
    overrideOS
  });

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const getDark = () => getDefaultMode({
      defaultMode,
      overrideOS
    });

    setDark(getDark());
  }, [defaultMode, overrideOS]);

  const toggleDark = () => {
    if (dark === null) return;
    const toggle = dark === 'dark' ? 'light' : 'dark';
    localStorage.setItem(`dark`, toggle);
    setDark(toggle);
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ThemeContext.Provider, {
    value: {
      dark,
      getDark,
      toggleDark
    },
    children: children
  });
};

/***/ })

};
;