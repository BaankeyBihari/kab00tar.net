exports.id = 565;
exports.ids = [565];
exports.modules = {

/***/ 5565:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": function() { return /* binding */ StickyNavContainer; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const throttle = __webpack_require__(1602);

class StickyNavContainer extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "anchorRef", void 0);

    _defineProperty(this, "activeClass", void 0);

    _defineProperty(this, "isPost", void 0);

    _defineProperty(this, "state", void 0);

    _defineProperty(this, "scrollHandler", () => {});

    _defineProperty(this, "resizeHandler", () => {});

    _defineProperty(this, "onScroll", () => {
      this.setState({
        lastScrollY: window.scrollY
      });
      this.requestTick();
    });

    _defineProperty(this, "requestTick", () => {
      if (!this.state.ticking) {
        requestAnimationFrame(this.update);
      }

      this.setState({
        ticking: false
      });
    });

    _defineProperty(this, "update", () => {
      const current = this.anchorRef && this.anchorRef.current;
      var top = current && current.getBoundingClientRect().top || 0;
      var trigger = top + window.scrollY;
      var triggerOffset = -20;

      if (this.isPost) {
        triggerOffset = current && current.offsetHeight + 35 || 0;
      }

      if (this.state.lastScrollY >= trigger + triggerOffset) {
        this.setState({
          currentClass: this.activeClass
        });
      } else {
        this.setState({
          currentClass: ``
        });
      }

      this.setState({
        ticking: false
      });
    });

    this.scrollHandler = this.scrollHandler.bind(this);
    this.resizeHandler = this.resizeHandler.bind(this);
    this.anchorRef = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)();
    this.activeClass = this.props.activeClass;
    this.isPost = this.props.isPost || false;
    this.state = {
      ticking: false,
      lastScrollY: 0,
      currentClass: ''
    };
  }

  componentDidMount() {
    this.scrollHandler = throttle(this.onScroll, this.props.throttle);
    this.resizeHandler = throttle(this.onScroll, this.props.throttle);
    window.addEventListener(`scroll`, this.scrollHandler, {
      passive: true
    });
    window.addEventListener(`resize`, this.resizeHandler, {
      passive: true
    });
  }

  componentWillUnmount() {
    window.removeEventListener(`scroll`, this.scrollHandler);
    window.removeEventListener(`resize`, this.resizeHandler);
  }

  render() {
    return this.props.render(this);
  }

}

/***/ })

};
;