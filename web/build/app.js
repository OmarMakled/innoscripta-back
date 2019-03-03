(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./app/resources/assets/js/app.js":
/*!****************************************!*\
  !*** ./app/resources/assets/js/app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../scss/app.scss */ "./app/resources/assets/scss/app.scss");

window.App = function () {
  var Swal = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");

  return {
    alert: function alert(messages) {
      messages.forEach(function (msg) {
        Swal.fire(msg);
      });
    },
    confirmSubmit: function confirmSubmit(btn) {
      Swal.fire({
        title: 'Are you sure?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(function (result) {
        if (result.value) {
          btn.parentNode.submit();
        }
      });
    }
  };
}();

/***/ }),

/***/ "./app/resources/assets/scss/app.scss":
/*!********************************************!*\
  !*** ./app/resources/assets/scss/app.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/sweetalert2/dist/sweetalert2.all.js":
/*!**********************************************************!*\
  !*** ./node_modules/sweetalert2/dist/sweetalert2.all.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
* sweetalert2 v8.2.2
* Released under the MIT License.
*/
(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);

      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

var consolePrefix = 'SweetAlert2:';
/**
 * Filter the unique values into a new array
 * @param arr
 */

var uniqueArray = function uniqueArray(arr) {
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i]);
    }
  }

  return result;
};
/**
 * Convert NodeList to Array
 * @param nodeList
 */

var toArray = function toArray(nodeList) {
  return Array.prototype.slice.call(nodeList);
};
/**
 * Converts `inputOptions` into an array of `[value, label]`s
 * @param inputOptions
 */

var formatInputOptions = function formatInputOptions(inputOptions) {
  var result = [];

  if (typeof Map !== 'undefined' && inputOptions instanceof Map) {
    inputOptions.forEach(function (value, key) {
      result.push([key, value]);
    });
  } else {
    Object.keys(inputOptions).forEach(function (key) {
      result.push([key, inputOptions[key]]);
    });
  }

  return result;
};
/**
 * Standardise console warnings
 * @param message
 */

var warn = function warn(message) {
  console.warn("".concat(consolePrefix, " ").concat(message));
};
/**
 * Standardise console errors
 * @param message
 */

var error = function error(message) {
  console.error("".concat(consolePrefix, " ").concat(message));
};
/**
 * Private global state for `warnOnce`
 * @type {Array}
 * @private
 */

var previousWarnOnceMessages = [];
/**
 * Show a console warning, but only if it hasn't already been shown
 * @param message
 */

var warnOnce = function warnOnce(message) {
  if (!(previousWarnOnceMessages.indexOf(message) !== -1)) {
    previousWarnOnceMessages.push(message);
    warn(message);
  }
};
/**
 * If `arg` is a function, call it (with no arguments or context) and return the result.
 * Otherwise, just pass the value through
 * @param arg
 */

var callIfFunction = function callIfFunction(arg) {
  return typeof arg === 'function' ? arg() : arg;
};
var isPromise = function isPromise(arg) {
  return arg && Promise.resolve(arg) === arg;
};

var DismissReason = Object.freeze({
  cancel: 'cancel',
  backdrop: 'backdrop',
  close: 'close',
  esc: 'esc',
  timer: 'timer'
});

var argsToParams = function argsToParams(args) {
  var params = {};

  switch (_typeof(args[0])) {
    case 'object':
      _extends(params, args[0]);

      break;

    default:
      ['title', 'html', 'type'].forEach(function (name, index) {
        switch (_typeof(args[index])) {
          case 'string':
            params[name] = args[index];
            break;

          case 'undefined':
            break;

          default:
            error("Unexpected type of ".concat(name, "! Expected \"string\", got ").concat(_typeof(args[index])));
        }
      });
  }

  return params;
};

var swalPrefix = 'swal2-';
var prefix = function prefix(items) {
  var result = {};

  for (var i in items) {
    result[items[i]] = swalPrefix + items[i];
  }

  return result;
};
var swalClasses = prefix(['container', 'shown', 'height-auto', 'iosfix', 'popup', 'modal', 'no-backdrop', 'toast', 'toast-shown', 'toast-column', 'fade', 'show', 'hide', 'noanimation', 'close', 'title', 'header', 'content', 'actions', 'confirm', 'cancel', 'footer', 'icon', 'icon-text', 'image', 'input', 'file', 'range', 'select', 'radio', 'checkbox', 'label', 'textarea', 'inputerror', 'validation-message', 'progress-steps', 'active-progress-step', 'progress-step', 'progress-step-line', 'loading', 'styled', 'top', 'top-start', 'top-end', 'top-left', 'top-right', 'center', 'center-start', 'center-end', 'center-left', 'center-right', 'bottom', 'bottom-start', 'bottom-end', 'bottom-left', 'bottom-right', 'grow-row', 'grow-column', 'grow-fullscreen', 'rtl']);
var iconTypes = prefix(['success', 'warning', 'info', 'question', 'error']);

var states = {
  previousBodyPadding: null
};
var hasClass = function hasClass(elem, className) {
  return elem.classList.contains(className);
};
var focusInput = function focusInput(input) {
  input.focus(); // place cursor at end of text in text input

  if (input.type !== 'file') {
    // http://stackoverflow.com/a/2345915
    var val = input.value;
    input.value = '';
    input.value = val;
  }
};

var addOrRemoveClass = function addOrRemoveClass(target, classList, add) {
  if (!target || !classList) {
    return;
  }

  if (typeof classList === 'string') {
    classList = classList.split(/\s+/).filter(Boolean);
  }

  classList.forEach(function (className) {
    if (target.forEach) {
      target.forEach(function (elem) {
        add ? elem.classList.add(className) : elem.classList.remove(className);
      });
    } else {
      add ? target.classList.add(className) : target.classList.remove(className);
    }
  });
};

var addClass = function addClass(target, classList) {
  addOrRemoveClass(target, classList, true);
};
var removeClass = function removeClass(target, classList) {
  addOrRemoveClass(target, classList, false);
};
var getChildByClass = function getChildByClass(elem, className) {
  for (var i = 0; i < elem.childNodes.length; i++) {
    if (hasClass(elem.childNodes[i], className)) {
      return elem.childNodes[i];
    }
  }
};
var show = function show(elem) {
  elem.style.opacity = '';
  elem.style.display = elem.id === swalClasses.content ? 'block' : 'flex';
};
var hide = function hide(elem) {
  elem.style.opacity = '';
  elem.style.display = 'none';
}; // borrowed from jquery $(elem).is(':visible') implementation

var isVisible = function isVisible(elem) {
  return elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
};
var contains = function contains(haystack, needle) {
  if (typeof haystack.contains === 'function') {
    return haystack.contains(needle);
  }
};

var getContainer = function getContainer() {
  return document.body.querySelector('.' + swalClasses.container);
};

var elementBySelector = function elementBySelector(selectorString) {
  var container = getContainer();
  return container ? container.querySelector(selectorString) : null;
};

var elementByClass = function elementByClass(className) {
  return elementBySelector('.' + className);
};

var getPopup = function getPopup() {
  return elementByClass(swalClasses.popup);
};
var getIcons = function getIcons() {
  var popup = getPopup();
  return toArray(popup.querySelectorAll('.' + swalClasses.icon));
};
var getTitle = function getTitle() {
  return elementByClass(swalClasses.title);
};
var getContent = function getContent() {
  return elementByClass(swalClasses.content);
};
var getImage = function getImage() {
  return elementByClass(swalClasses.image);
};
var getProgressSteps = function getProgressSteps() {
  return elementByClass(swalClasses['progress-steps']);
};
var getValidationMessage = function getValidationMessage() {
  return elementByClass(swalClasses['validation-message']);
};
var getConfirmButton = function getConfirmButton() {
  return elementBySelector('.' + swalClasses.actions + ' .' + swalClasses.confirm);
};
var getCancelButton = function getCancelButton() {
  return elementBySelector('.' + swalClasses.actions + ' .' + swalClasses.cancel);
};
var getActions = function getActions() {
  return elementByClass(swalClasses.actions);
};
var getFooter = function getFooter() {
  return elementByClass(swalClasses.footer);
};
var getCloseButton = function getCloseButton() {
  return elementByClass(swalClasses.close);
};
var getFocusableElements = function getFocusableElements() {
  var focusableElementsWithTabindex = toArray(getPopup().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')) // sort according to tabindex
  .sort(function (a, b) {
    a = parseInt(a.getAttribute('tabindex'));
    b = parseInt(b.getAttribute('tabindex'));

    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    }

    return 0;
  }); // https://github.com/jkup/focusable/blob/master/index.js

  var otherFocusableElements = toArray(getPopup().querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable], audio[controls], video[controls]')).filter(function (el) {
    return el.getAttribute('tabindex') !== '-1';
  });
  return uniqueArray(focusableElementsWithTabindex.concat(otherFocusableElements)).filter(function (el) {
    return isVisible(el);
  });
};
var isModal = function isModal() {
  return !isToast() && !document.body.classList.contains(swalClasses['no-backdrop']);
};
var isToast = function isToast() {
  return document.body.classList.contains(swalClasses['toast-shown']);
};
var isLoading = function isLoading() {
  return getPopup().hasAttribute('data-loading');
};

// Detect Node env
var isNodeEnv = function isNodeEnv() {
  return typeof window === 'undefined' || typeof document === 'undefined';
};

var sweetHTML = "\n <div aria-labelledby=\"".concat(swalClasses.title, "\" aria-describedby=\"").concat(swalClasses.content, "\" class=\"").concat(swalClasses.popup, "\" tabindex=\"-1\">\n   <div class=\"").concat(swalClasses.header, "\">\n     <ul class=\"").concat(swalClasses['progress-steps'], "\"></ul>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.error, "\">\n       <span class=\"swal2-x-mark\"><span class=\"swal2-x-mark-line-left\"></span><span class=\"swal2-x-mark-line-right\"></span></span>\n     </div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.question, "\">\n       <span class=\"").concat(swalClasses['icon-text'], "\">?</span>\n      </div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.warning, "\">\n       <span class=\"").concat(swalClasses['icon-text'], "\">!</span>\n      </div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.info, "\">\n       <span class=\"").concat(swalClasses['icon-text'], "\">i</span>\n      </div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.success, "\">\n       <div class=\"swal2-success-circular-line-left\"></div>\n       <span class=\"swal2-success-line-tip\"></span> <span class=\"swal2-success-line-long\"></span>\n       <div class=\"swal2-success-ring\"></div> <div class=\"swal2-success-fix\"></div>\n       <div class=\"swal2-success-circular-line-right\"></div>\n     </div>\n     <img class=\"").concat(swalClasses.image, "\" />\n     <h2 class=\"").concat(swalClasses.title, "\" id=\"").concat(swalClasses.title, "\"></h2>\n     <button type=\"button\" class=\"").concat(swalClasses.close, "\">\xD7</button>\n   </div>\n   <div class=\"").concat(swalClasses.content, "\">\n     <div id=\"").concat(swalClasses.content, "\"></div>\n     <input class=\"").concat(swalClasses.input, "\" />\n     <input type=\"file\" class=\"").concat(swalClasses.file, "\" />\n     <div class=\"").concat(swalClasses.range, "\">\n       <input type=\"range\" />\n       <output></output>\n     </div>\n     <select class=\"").concat(swalClasses.select, "\"></select>\n     <div class=\"").concat(swalClasses.radio, "\"></div>\n     <label for=\"").concat(swalClasses.checkbox, "\" class=\"").concat(swalClasses.checkbox, "\">\n       <input type=\"checkbox\" />\n       <span class=\"").concat(swalClasses.label, "\"></span>\n     </label>\n     <textarea class=\"").concat(swalClasses.textarea, "\"></textarea>\n     <div class=\"").concat(swalClasses['validation-message'], "\" id=\"").concat(swalClasses['validation-message'], "\"></div>\n   </div>\n   <div class=\"").concat(swalClasses.actions, "\">\n     <button type=\"button\" class=\"").concat(swalClasses.confirm, "\">OK</button>\n     <button type=\"button\" class=\"").concat(swalClasses.cancel, "\">Cancel</button>\n   </div>\n   <div class=\"").concat(swalClasses.footer, "\">\n   </div>\n </div>\n").replace(/(^|\n)\s*/g, '');
/*
 * Add modal + backdrop to DOM
 */

var init = function init(params) {
  // Clean up the old popup if it exists
  var c = getContainer();

  if (c) {
    c.parentNode.removeChild(c);
    removeClass([document.documentElement, document.body], [swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['has-column']]);
  }
  /* istanbul ignore if */


  if (isNodeEnv()) {
    error('SweetAlert2 requires document to initialize');
    return;
  }

  var container = document.createElement('div');
  container.className = swalClasses.container;
  container.innerHTML = sweetHTML;
  var targetElement = typeof params.target === 'string' ? document.querySelector(params.target) : params.target;
  targetElement.appendChild(container);
  var popup = getPopup();
  var content = getContent();
  var input = getChildByClass(content, swalClasses.input);
  var file = getChildByClass(content, swalClasses.file);
  var range = content.querySelector(".".concat(swalClasses.range, " input"));
  var rangeOutput = content.querySelector(".".concat(swalClasses.range, " output"));
  var select = getChildByClass(content, swalClasses.select);
  var checkbox = content.querySelector(".".concat(swalClasses.checkbox, " input"));
  var textarea = getChildByClass(content, swalClasses.textarea); // a11y

  popup.setAttribute('role', params.toast ? 'alert' : 'dialog');
  popup.setAttribute('aria-live', params.toast ? 'polite' : 'assertive');

  if (!params.toast) {
    popup.setAttribute('aria-modal', 'true');
  } // RTL


  if (window.getComputedStyle(targetElement).direction === 'rtl') {
    addClass(getContainer(), swalClasses.rtl);
  }

  var oldInputVal; // IE11 workaround, see #1109 for details

  var resetValidationMessage = function resetValidationMessage(e) {
    if (Swal.isVisible() && oldInputVal !== e.target.value) {
      Swal.resetValidationMessage();
    }

    oldInputVal = e.target.value;
  };

  input.oninput = resetValidationMessage;
  file.onchange = resetValidationMessage;
  select.onchange = resetValidationMessage;
  checkbox.onchange = resetValidationMessage;
  textarea.oninput = resetValidationMessage;

  range.oninput = function (e) {
    resetValidationMessage(e);
    rangeOutput.value = range.value;
  };

  range.onchange = function (e) {
    resetValidationMessage(e);
    range.nextSibling.value = range.value;
  };

  return popup;
};

var parseHtmlToContainer = function parseHtmlToContainer(param, target) {
  if (!param) {
    return hide(target);
  } // DOM element


  if (param instanceof HTMLElement) {
    target.appendChild(param); // JQuery element(s)
  } else if (_typeof(param) === 'object') {
    target.innerHTML = '';

    if (0 in param) {
      for (var i = 0; i in param; i++) {
        target.appendChild(param[i].cloneNode(true));
      }
    } else {
      target.appendChild(param.cloneNode(true));
    }
  } else if (param) {
    target.innerHTML = param;
  }

  show(target);
};

var animationEndEvent = function () {
  // Prevent run in Node env

  /* istanbul ignore if */
  if (isNodeEnv()) {
    return false;
  }

  var testEl = document.createElement('div');
  var transEndEventNames = {
    'WebkitAnimation': 'webkitAnimationEnd',
    'OAnimation': 'oAnimationEnd oanimationend',
    'animation': 'animationend'
  };

  for (var i in transEndEventNames) {
    if (transEndEventNames.hasOwnProperty(i) && typeof testEl.style[i] !== 'undefined') {
      return transEndEventNames[i];
    }
  }

  return false;
}();

// Measure width of scrollbar
// https://github.com/twbs/bootstrap/blob/master/js/modal.js#L279-L286
var measureScrollbar = function measureScrollbar() {
  var supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;

  if (supportsTouch) {
    return 0;
  }

  var scrollDiv = document.createElement('div');
  scrollDiv.style.width = '50px';
  scrollDiv.style.height = '50px';
  scrollDiv.style.overflow = 'scroll';
  document.body.appendChild(scrollDiv);
  var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
};

var renderActions = function renderActions(params) {
  var actions = getActions();
  var confirmButton = getConfirmButton();
  var cancelButton = getCancelButton(); // Actions (buttons) wrapper

  if (!params.showConfirmButton && !params.showCancelButton) {
    hide(actions);
  } else {
    show(actions);
  } // Cancel button


  if (params.showCancelButton) {
    cancelButton.style.display = 'inline-block';
  } else {
    hide(cancelButton);
  } // Confirm button


  if (params.showConfirmButton) {
    confirmButton.style.removeProperty('display');
  } else {
    hide(confirmButton);
  } // Edit text on confirm and cancel buttons


  confirmButton.innerHTML = params.confirmButtonText;
  cancelButton.innerHTML = params.cancelButtonText; // ARIA labels for confirm and cancel buttons

  confirmButton.setAttribute('aria-label', params.confirmButtonAriaLabel);
  cancelButton.setAttribute('aria-label', params.cancelButtonAriaLabel); // Add buttons custom classes

  confirmButton.className = swalClasses.confirm;
  addClass(confirmButton, params.confirmButtonClass);
  cancelButton.className = swalClasses.cancel;
  addClass(cancelButton, params.cancelButtonClass); // Buttons styling

  if (params.buttonsStyling) {
    addClass([confirmButton, cancelButton], swalClasses.styled); // Buttons background colors

    if (params.confirmButtonColor) {
      confirmButton.style.backgroundColor = params.confirmButtonColor;
    }

    if (params.cancelButtonColor) {
      cancelButton.style.backgroundColor = params.cancelButtonColor;
    } // Loading state


    var confirmButtonBackgroundColor = window.getComputedStyle(confirmButton).getPropertyValue('background-color');
    confirmButton.style.borderLeftColor = confirmButtonBackgroundColor;
    confirmButton.style.borderRightColor = confirmButtonBackgroundColor;
  } else {
    removeClass([confirmButton, cancelButton], swalClasses.styled);
    confirmButton.style.backgroundColor = confirmButton.style.borderLeftColor = confirmButton.style.borderRightColor = '';
    cancelButton.style.backgroundColor = cancelButton.style.borderLeftColor = cancelButton.style.borderRightColor = '';
  }
};

var renderContent = function renderContent(params) {
  var content = getContent().querySelector('#' + swalClasses.content); // Content as HTML

  if (params.html) {
    parseHtmlToContainer(params.html, content); // Content as plain text
  } else if (params.text) {
    content.textContent = params.text;
    show(content);
  } else {
    hide(content);
  }
};

var renderIcon = function renderIcon(params) {
  var icons = getIcons();

  for (var i = 0; i < icons.length; i++) {
    hide(icons[i]);
  }

  if (params.type) {
    if (Object.keys(iconTypes).indexOf(params.type) !== -1) {
      var icon = Swal.getPopup().querySelector(".".concat(swalClasses.icon, ".").concat(iconTypes[params.type]));
      show(icon); // Animate icon

      if (params.animation) {
        addClass(icon, "swal2-animate-".concat(params.type, "-icon"));
      }
    } else {
      error("Unknown type! Expected \"success\", \"error\", \"warning\", \"info\" or \"question\", got \"".concat(params.type, "\""));
    }
  }
};

var renderImage = function renderImage(params) {
  var image = getImage();

  if (params.imageUrl) {
    image.setAttribute('src', params.imageUrl);
    image.setAttribute('alt', params.imageAlt);
    show(image);

    if (params.imageWidth) {
      image.setAttribute('width', params.imageWidth);
    } else {
      image.removeAttribute('width');
    }

    if (params.imageHeight) {
      image.setAttribute('height', params.imageHeight);
    } else {
      image.removeAttribute('height');
    }

    image.className = swalClasses.image;

    if (params.imageClass) {
      addClass(image, params.imageClass);
    }
  } else {
    hide(image);
  }
};

var renderProgressSteps = function renderProgressSteps(params) {
  var progressStepsContainer = getProgressSteps();
  var currentProgressStep = parseInt(params.currentProgressStep === null ? Swal.getQueueStep() : params.currentProgressStep, 10);

  if (params.progressSteps && params.progressSteps.length) {
    show(progressStepsContainer);
    progressStepsContainer.innerHTML = '';

    if (currentProgressStep >= params.progressSteps.length) {
      warn('Invalid currentProgressStep parameter, it should be less than progressSteps.length ' + '(currentProgressStep like JS arrays starts from 0)');
    }

    params.progressSteps.forEach(function (step, index) {
      var stepEl = document.createElement('li');
      addClass(stepEl, swalClasses['progress-step']);
      stepEl.innerHTML = step;

      if (index === currentProgressStep) {
        addClass(stepEl, swalClasses['active-progress-step']);
      }

      progressStepsContainer.appendChild(stepEl);

      if (index !== params.progressSteps.length - 1) {
        var line = document.createElement('li');
        addClass(line, swalClasses['progress-step-line']);

        if (params.progressStepsDistance) {
          line.style.width = params.progressStepsDistance;
        }

        progressStepsContainer.appendChild(line);
      }
    });
  } else {
    hide(progressStepsContainer);
  }
};

var renderTitle = function renderTitle(params) {
  var title = getTitle();

  if (params.titleText) {
    title.innerText = params.titleText;
  } else if (params.title) {
    if (typeof params.title === 'string') {
      params.title = params.title.split('\n').join('<br />');
    }

    parseHtmlToContainer(params.title, title);
  }
};

/*
 * Global function to determine if SweetAlert2 popup is shown
 */

var isVisible$1 = function isVisible() {
  return !!getPopup();
};
/*
 * Global function to click 'Confirm' button
 */

var clickConfirm = function clickConfirm() {
  return getConfirmButton().click();
};
/*
 * Global function to click 'Cancel' button
 */

var clickCancel = function clickCancel() {
  return getCancelButton().click();
};

function fire() {
  var Swal = this;

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return _construct(Swal, args);
}

/**
 * Returns an extended version of `Swal` containing `params` as defaults.
 * Useful for reusing Swal configuration.
 *
 * For example:
 *
 * Before:
 * const textPromptOptions = { input: 'text', showCancelButton: true }
 * const {value: firstName} = await Swal.fire({ ...textPromptOptions, title: 'What is your first name?' })
 * const {value: lastName} = await Swal.fire({ ...textPromptOptions, title: 'What is your last name?' })
 *
 * After:
 * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
 * const {value: firstName} = await TextPrompt('What is your first name?')
 * const {value: lastName} = await TextPrompt('What is your last name?')
 *
 * @param mixinParams
 */
function mixin(mixinParams) {
  var MixinSwal =
  /*#__PURE__*/
  function (_this) {
    _inherits(MixinSwal, _this);

    function MixinSwal() {
      _classCallCheck(this, MixinSwal);

      return _possibleConstructorReturn(this, _getPrototypeOf(MixinSwal).apply(this, arguments));
    }

    _createClass(MixinSwal, [{
      key: "_main",
      value: function _main(params) {
        return _get(_getPrototypeOf(MixinSwal.prototype), "_main", this).call(this, _extends({}, mixinParams, params));
      }
    }]);

    return MixinSwal;
  }(this);

  return MixinSwal;
}

// private global state for the queue feature
var currentSteps = [];
/*
 * Global function for chaining sweetAlert popups
 */

var queue = function queue(steps) {
  var Swal = this;
  currentSteps = steps;

  var resetQueue = function resetQueue() {
    currentSteps = [];
    document.body.removeAttribute('data-swal2-queue-step');
  };

  var queueResult = [];
  return new Promise(function (resolve) {
    (function step(i, callback) {
      if (i < currentSteps.length) {
        document.body.setAttribute('data-swal2-queue-step', i);
        Swal.fire(currentSteps[i]).then(function (result) {
          if (typeof result.value !== 'undefined') {
            queueResult.push(result.value);
            step(i + 1, callback);
          } else {
            resetQueue();
            resolve({
              dismiss: result.dismiss
            });
          }
        });
      } else {
        resetQueue();
        resolve({
          value: queueResult
        });
      }
    })(0);
  });
};
/*
 * Global function for getting the index of current popup in queue
 */

var getQueueStep = function getQueueStep() {
  return document.body.getAttribute('data-swal2-queue-step');
};
/*
 * Global function for inserting a popup to the queue
 */

var insertQueueStep = function insertQueueStep(step, index) {
  if (index && index < currentSteps.length) {
    return currentSteps.splice(index, 0, step);
  }

  return currentSteps.push(step);
};
/*
 * Global function for deleting a popup from the queue
 */

var deleteQueueStep = function deleteQueueStep(index) {
  if (typeof currentSteps[index] !== 'undefined') {
    currentSteps.splice(index, 1);
  }
};

/**
 * Show spinner instead of Confirm button and disable Cancel button
 */

var showLoading = function showLoading() {
  var popup = getPopup();

  if (!popup) {
    Swal.fire('');
  }

  popup = getPopup();
  var actions = getActions();
  var confirmButton = getConfirmButton();
  var cancelButton = getCancelButton();
  show(actions);
  show(confirmButton);
  addClass([popup, actions], swalClasses.loading);
  confirmButton.disabled = true;
  cancelButton.disabled = true;
  popup.setAttribute('data-loading', true);
  popup.setAttribute('aria-busy', true);
  popup.focus();
};

var RESTORE_FOCUS_TIMEOUT = 100;

var globalState = {};
var restoreActiveElement = function restoreActiveElement() {
  return new Promise(function (resolve) {
    var x = window.scrollX;
    var y = window.scrollY;
    globalState.restoreFocusTimeout = setTimeout(function () {
      if (globalState.previousActiveElement && globalState.previousActiveElement.focus) {
        globalState.previousActiveElement.focus();
        globalState.previousActiveElement = null;
      } else if (document.body) {
        document.body.focus();
      }

      resolve();
    }, RESTORE_FOCUS_TIMEOUT); // issues/900

    if (typeof x !== 'undefined' && typeof y !== 'undefined') {
      // IE doesn't have scrollX/scrollY support
      window.scrollTo(x, y);
    }
  });
};

/**
 * If `timer` parameter is set, returns number of milliseconds of timer remained.
 * Otherwise, returns undefined.
 */

var getTimerLeft = function getTimerLeft() {
  return globalState.timeout && globalState.timeout.getTimerLeft();
};
/**
 * Stop timer. Returns number of milliseconds of timer remained.
 * If `timer` parameter isn't set, returns undefined.
 */

var stopTimer = function stopTimer() {
  return globalState.timeout && globalState.timeout.stop();
};
/**
 * Resume timer. Returns number of milliseconds of timer remained.
 * If `timer` parameter isn't set, returns undefined.
 */

var resumeTimer = function resumeTimer() {
  return globalState.timeout && globalState.timeout.start();
};
/**
 * Resume timer. Returns number of milliseconds of timer remained.
 * If `timer` parameter isn't set, returns undefined.
 */

var toggleTimer = function toggleTimer() {
  var timer = globalState.timeout;
  return timer && (timer.running ? timer.stop() : timer.start());
};
/**
 * Increase timer. Returns number of milliseconds of an updated timer.
 * If `timer` parameter isn't set, returns undefined.
 */

var increaseTimer = function increaseTimer(n) {
  return globalState.timeout && globalState.timeout.increase(n);
};
/**
 * Check if timer is running. Returns true if timer is running
 * or false if timer is paused or stopped.
 * If `timer` parameter isn't set, returns undefined
 */

var isTimerRunning = function isTimerRunning() {
  return globalState.timeout && globalState.timeout.isRunning();
};

var defaultParams = {
  title: '',
  titleText: '',
  text: '',
  html: '',
  footer: '',
  type: null,
  toast: false,
  customClass: '',
  customContainerClass: '',
  target: 'body',
  backdrop: true,
  animation: true,
  heightAuto: true,
  allowOutsideClick: true,
  allowEscapeKey: true,
  allowEnterKey: true,
  stopKeydownPropagation: true,
  keydownListenerCapture: false,
  showConfirmButton: true,
  showCancelButton: false,
  preConfirm: null,
  confirmButtonText: 'OK',
  confirmButtonAriaLabel: '',
  confirmButtonColor: null,
  confirmButtonClass: '',
  cancelButtonText: 'Cancel',
  cancelButtonAriaLabel: '',
  cancelButtonColor: null,
  cancelButtonClass: '',
  buttonsStyling: true,
  reverseButtons: false,
  focusConfirm: true,
  focusCancel: false,
  showCloseButton: false,
  closeButtonAriaLabel: 'Close this dialog',
  showLoaderOnConfirm: false,
  imageUrl: null,
  imageWidth: null,
  imageHeight: null,
  imageAlt: '',
  imageClass: '',
  timer: null,
  width: null,
  padding: null,
  background: null,
  input: null,
  inputPlaceholder: '',
  inputValue: '',
  inputOptions: {},
  inputAutoTrim: true,
  inputClass: '',
  inputAttributes: {},
  inputValidator: null,
  validationMessage: null,
  grow: false,
  position: 'center',
  progressSteps: [],
  currentProgressStep: null,
  progressStepsDistance: null,
  onBeforeOpen: null,
  onAfterClose: null,
  onOpen: null,
  onClose: null,
  scrollbarPadding: true
};
var deprecatedParams = [];
var toastIncompatibleParams = ['allowOutsideClick', 'allowEnterKey', 'backdrop', 'focusConfirm', 'focusCancel', 'heightAuto', 'keydownListenerCapture'];
/**
 * Is valid parameter
 * @param {String} paramName
 */

var isValidParameter = function isValidParameter(paramName) {
  return defaultParams.hasOwnProperty(paramName);
};
/**
 * Is valid parameter for Swal.update() method
 * @param {String} paramName
 */

var isUpdatableParameter = function isUpdatableParameter(paramName) {
  return ['title', 'titleText', 'text', 'html', 'type', 'showConfirmButton', 'showCancelButton', 'confirmButtonText', 'confirmButtonAriaLabel', 'confirmButtonColor', 'confirmButtonClass', 'cancelButtonText', 'cancelButtonAriaLabel', 'cancelButtonColor', 'cancelButtonClass', 'buttonsStyling', 'reverseButtons', 'imageUrl', 'imageWidth', 'imageHeigth', 'imageAlt', 'imageClass', 'progressSteps', 'currentProgressStep'].indexOf(paramName) !== -1;
};
/**
 * Is deprecated parameter
 * @param {String} paramName
 */

var isDeprecatedParameter = function isDeprecatedParameter(paramName) {
  return deprecatedParams.indexOf(paramName) !== -1;
};
/**
 * Show relevant warnings for given params
 *
 * @param params
 */

var showWarningsForParams = function showWarningsForParams(params) {
  for (var param in params) {
    if (!isValidParameter(param)) {
      warn("Unknown parameter \"".concat(param, "\""));
    }

    if (params.toast && toastIncompatibleParams.indexOf(param) !== -1) {
      warn("The parameter \"".concat(param, "\" is incompatible with toasts"));
    }

    if (isDeprecatedParameter(param)) {
      warnOnce("The parameter \"".concat(param, "\" is deprecated and will be removed in the next major release."));
    }
  }
};



var staticMethods = Object.freeze({
	isValidParameter: isValidParameter,
	isUpdatableParameter: isUpdatableParameter,
	isDeprecatedParameter: isDeprecatedParameter,
	argsToParams: argsToParams,
	isVisible: isVisible$1,
	clickConfirm: clickConfirm,
	clickCancel: clickCancel,
	getContainer: getContainer,
	getPopup: getPopup,
	getTitle: getTitle,
	getContent: getContent,
	getImage: getImage,
	getIcons: getIcons,
	getCloseButton: getCloseButton,
	getActions: getActions,
	getConfirmButton: getConfirmButton,
	getCancelButton: getCancelButton,
	getFooter: getFooter,
	getFocusableElements: getFocusableElements,
	getValidationMessage: getValidationMessage,
	isLoading: isLoading,
	fire: fire,
	mixin: mixin,
	queue: queue,
	getQueueStep: getQueueStep,
	insertQueueStep: insertQueueStep,
	deleteQueueStep: deleteQueueStep,
	showLoading: showLoading,
	enableLoading: showLoading,
	getTimerLeft: getTimerLeft,
	stopTimer: stopTimer,
	resumeTimer: resumeTimer,
	toggleTimer: toggleTimer,
	increaseTimer: increaseTimer,
	isTimerRunning: isTimerRunning
});

/**
 * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
 * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
 * This is the approach that Babel will probably take to implement private methods/fields
 *   https://github.com/tc39/proposal-private-methods
 *   https://github.com/babel/babel/pull/7555
 * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
 *   then we can use that language feature.
 */
var privateProps = {
  promise: new WeakMap(),
  innerParams: new WeakMap(),
  domCache: new WeakMap()
};

/**
 * Enables buttons and hide loader.
 */

function hideLoading() {
  var innerParams = privateProps.innerParams.get(this);
  var domCache = privateProps.domCache.get(this);

  if (!innerParams.showConfirmButton) {
    hide(domCache.confirmButton);

    if (!innerParams.showCancelButton) {
      hide(domCache.actions);
    }
  }

  removeClass([domCache.popup, domCache.actions], swalClasses.loading);
  domCache.popup.removeAttribute('aria-busy');
  domCache.popup.removeAttribute('data-loading');
  domCache.confirmButton.disabled = false;
  domCache.cancelButton.disabled = false;
}

function getInput(inputType) {
  var innerParams = privateProps.innerParams.get(this);
  var domCache = privateProps.domCache.get(this);
  inputType = inputType || innerParams.input;

  if (!inputType) {
    return null;
  }

  switch (inputType) {
    case 'select':
    case 'textarea':
    case 'file':
      return getChildByClass(domCache.content, swalClasses[inputType]);

    case 'checkbox':
      return domCache.popup.querySelector(".".concat(swalClasses.checkbox, " input"));

    case 'radio':
      return domCache.popup.querySelector(".".concat(swalClasses.radio, " input:checked")) || domCache.popup.querySelector(".".concat(swalClasses.radio, " input:first-child"));

    case 'range':
      return domCache.popup.querySelector(".".concat(swalClasses.range, " input"));

    default:
      return getChildByClass(domCache.content, swalClasses.input);
  }
}

var fixScrollbar = function fixScrollbar() {
  // for queues, do not do this more than once
  if (states.previousBodyPadding !== null) {
    return;
  } // if the body has overflow


  if (document.body.scrollHeight > window.innerHeight) {
    // add padding so the content doesn't shift after removal of scrollbar
    states.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'));
    document.body.style.paddingRight = states.previousBodyPadding + measureScrollbar() + 'px';
  }
};
var undoScrollbar = function undoScrollbar() {
  if (states.previousBodyPadding !== null) {
    document.body.style.paddingRight = states.previousBodyPadding + 'px';
    states.previousBodyPadding = null;
  }
};

/* istanbul ignore next */

var iOSfix = function iOSfix() {
  var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

  if (iOS && !hasClass(document.body, swalClasses.iosfix)) {
    var offset = document.body.scrollTop;
    document.body.style.top = offset * -1 + 'px';
    addClass(document.body, swalClasses.iosfix);
  }
};
/* istanbul ignore next */

var undoIOSfix = function undoIOSfix() {
  if (hasClass(document.body, swalClasses.iosfix)) {
    var offset = parseInt(document.body.style.top, 10);
    removeClass(document.body, swalClasses.iosfix);
    document.body.style.top = '';
    document.body.scrollTop = offset * -1;
  }
};

var isIE11 = function isIE11() {
  return !!window.MSInputMethodContext && !!document.documentMode;
}; // Fix IE11 centering sweetalert2/issues/933

/* istanbul ignore next */


var fixVerticalPositionIE = function fixVerticalPositionIE() {
  var container = getContainer();
  var popup = getPopup();
  container.style.removeProperty('align-items');

  if (popup.offsetTop < 0) {
    container.style.alignItems = 'flex-start';
  }
};
/* istanbul ignore next */


var IEfix = function IEfix() {
  if (typeof window !== 'undefined' && isIE11()) {
    fixVerticalPositionIE();
    window.addEventListener('resize', fixVerticalPositionIE);
  }
};
/* istanbul ignore next */

var undoIEfix = function undoIEfix() {
  if (typeof window !== 'undefined' && isIE11()) {
    window.removeEventListener('resize', fixVerticalPositionIE);
  }
};

// Adding aria-hidden="true" to elements outside of the active modal dialog ensures that
// elements not within the active modal dialog will not be surfaced if a user opens a screen
// reader’s list of elements (headings, form controls, landmarks, etc.) in the document.

var setAriaHidden = function setAriaHidden() {
  var bodyChildren = toArray(document.body.children);
  bodyChildren.forEach(function (el) {
    if (el === getContainer() || contains(el, getContainer())) {
      return;
    }

    if (el.hasAttribute('aria-hidden')) {
      el.setAttribute('data-previous-aria-hidden', el.getAttribute('aria-hidden'));
    }

    el.setAttribute('aria-hidden', 'true');
  });
};
var unsetAriaHidden = function unsetAriaHidden() {
  var bodyChildren = toArray(document.body.children);
  bodyChildren.forEach(function (el) {
    if (el.hasAttribute('data-previous-aria-hidden')) {
      el.setAttribute('aria-hidden', el.getAttribute('data-previous-aria-hidden'));
      el.removeAttribute('data-previous-aria-hidden');
    } else {
      el.removeAttribute('aria-hidden');
    }
  });
};

/**
 * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
 * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
 * This is the approach that Babel will probably take to implement private methods/fields
 *   https://github.com/tc39/proposal-private-methods
 *   https://github.com/babel/babel/pull/7555
 * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
 *   then we can use that language feature.
 */
var privateMethods = {
  swalPromiseResolve: new WeakMap()
};

/*
 * Instance method to close sweetAlert
 */

function close(resolveValue) {
  var container = getContainer();
  var popup = getPopup();
  var innerParams = privateProps.innerParams.get(this);
  var swalPromiseResolve = privateMethods.swalPromiseResolve.get(this);
  var onClose = innerParams.onClose;
  var onAfterClose = innerParams.onAfterClose;

  if (!popup) {
    return;
  }

  if (onClose !== null && typeof onClose === 'function') {
    onClose(popup);
  }

  removeClass(popup, swalClasses.show);
  addClass(popup, swalClasses.hide);

  var removePopupAndResetState = function removePopupAndResetState() {
    if (!isToast()) {
      restoreActiveElement().then(function () {
        return triggerOnAfterClose(onAfterClose);
      });
      globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = false;
    } else {
      triggerOnAfterClose(onAfterClose);
    }

    if (container.parentNode) {
      container.parentNode.removeChild(container);
    }

    removeClass([document.documentElement, document.body], [swalClasses.shown, swalClasses['height-auto'], swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['toast-column']]);

    if (isModal()) {
      undoScrollbar();
      undoIOSfix();
      undoIEfix();
      unsetAriaHidden();
    }
  }; // If animation is supported, animate


  if (animationEndEvent && !hasClass(popup, swalClasses.noanimation)) {
    popup.addEventListener(animationEndEvent, function swalCloseEventFinished() {
      popup.removeEventListener(animationEndEvent, swalCloseEventFinished);

      if (hasClass(popup, swalClasses.hide)) {
        removePopupAndResetState();
      }
    });
  } else {
    // Otherwise, remove immediately
    removePopupAndResetState();
  } // Resolve Swal promise


  swalPromiseResolve(resolveValue || {});
}

var triggerOnAfterClose = function triggerOnAfterClose(onAfterClose) {
  if (onAfterClose !== null && typeof onAfterClose === 'function') {
    setTimeout(function () {
      onAfterClose();
    });
  }
};

function enableButtons() {
  var domCache = privateProps.domCache.get(this);
  domCache.confirmButton.disabled = false;
  domCache.cancelButton.disabled = false;
}
function disableButtons() {
  var domCache = privateProps.domCache.get(this);
  domCache.confirmButton.disabled = true;
  domCache.cancelButton.disabled = true;
}
function enableConfirmButton() {
  var domCache = privateProps.domCache.get(this);
  domCache.confirmButton.disabled = false;
}
function disableConfirmButton() {
  var domCache = privateProps.domCache.get(this);
  domCache.confirmButton.disabled = true;
}
function enableInput() {
  var input = this.getInput();

  if (!input) {
    return false;
  }

  if (input.type === 'radio') {
    var radiosContainer = input.parentNode.parentNode;
    var radios = radiosContainer.querySelectorAll('input');

    for (var i = 0; i < radios.length; i++) {
      radios[i].disabled = false;
    }
  } else {
    input.disabled = false;
  }
}
function disableInput() {
  var input = this.getInput();

  if (!input) {
    return false;
  }

  if (input && input.type === 'radio') {
    var radiosContainer = input.parentNode.parentNode;
    var radios = radiosContainer.querySelectorAll('input');

    for (var i = 0; i < radios.length; i++) {
      radios[i].disabled = true;
    }
  } else {
    input.disabled = true;
  }
}

function showValidationMessage(error) {
  var domCache = privateProps.domCache.get(this);
  domCache.validationMessage.innerHTML = error;
  var popupComputedStyle = window.getComputedStyle(domCache.popup);
  domCache.validationMessage.style.marginLeft = "-".concat(popupComputedStyle.getPropertyValue('padding-left'));
  domCache.validationMessage.style.marginRight = "-".concat(popupComputedStyle.getPropertyValue('padding-right'));
  show(domCache.validationMessage);
  var input = this.getInput();

  if (input) {
    input.setAttribute('aria-invalid', true);
    input.setAttribute('aria-describedBy', swalClasses['validation-message']);
    focusInput(input);
    addClass(input, swalClasses.inputerror);
  }
} // Hide block with validation message

function resetValidationMessage() {
  var domCache = privateProps.domCache.get(this);

  if (domCache.validationMessage) {
    hide(domCache.validationMessage);
  }

  var input = this.getInput();

  if (input) {
    input.removeAttribute('aria-invalid');
    input.removeAttribute('aria-describedBy');
    removeClass(input, swalClasses.inputerror);
  }
}

function getProgressSteps$1() {
  var innerParams = privateProps.innerParams.get(this);
  return innerParams.progressSteps;
}
function setProgressSteps(progressSteps) {
  var innerParams = privateProps.innerParams.get(this);

  var updatedParams = _extends({}, innerParams, {
    progressSteps: progressSteps
  });

  privateProps.innerParams.set(this, updatedParams);
  renderProgressSteps(updatedParams);
}
function showProgressSteps() {
  var domCache = privateProps.domCache.get(this);
  show(domCache.progressSteps);
}
function hideProgressSteps() {
  var domCache = privateProps.domCache.get(this);
  hide(domCache.progressSteps);
}

var Timer = function Timer(callback, delay) {
  _classCallCheck(this, Timer);

  var id,
      started,
      remaining = delay;
  this.running = false;

  this.start = function () {
    if (!this.running) {
      this.running = true;
      started = new Date();
      id = setTimeout(callback, remaining);
    }

    return remaining;
  };

  this.stop = function () {
    if (this.running) {
      this.running = false;
      clearTimeout(id);
      remaining -= new Date() - started;
    }

    return remaining;
  };

  this.increase = function (n) {
    var running = this.running;

    if (running) {
      this.stop();
    }

    remaining += n;

    if (running) {
      this.start();
    }

    return remaining;
  };

  this.getTimerLeft = function () {
    if (this.running) {
      this.stop();
      this.start();
    }

    return remaining;
  };

  this.isRunning = function () {
    return this.running;
  };

  this.start();
};

var defaultInputValidators = {
  email: function email(string, validationMessage) {
    return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage ? validationMessage : 'Invalid email address');
  },
  url: function url(string, validationMessage) {
    // taken from https://stackoverflow.com/a/3809435 with a small change from #1306
    return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage ? validationMessage : 'Invalid URL');
  }
};

/**
 * Set type, text and actions on popup
 *
 * @param params
 * @returns {boolean}
 */

function setParameters(params) {
  // Use default `inputValidator` for supported input types if not provided
  if (!params.inputValidator) {
    Object.keys(defaultInputValidators).forEach(function (key) {
      if (params.input === key) {
        params.inputValidator = defaultInputValidators[key];
      }
    });
  } // Determine if the custom target element is valid


  if (!params.target || typeof params.target === 'string' && !document.querySelector(params.target) || typeof params.target !== 'string' && !params.target.appendChild) {
    warn('Target parameter is not valid, defaulting to "body"');
    params.target = 'body';
  } // Animation


  if (typeof params.animation === 'function') {
    params.animation = params.animation.call();
  }

  var popup;
  var oldPopup = getPopup();
  var targetElement = typeof params.target === 'string' ? document.querySelector(params.target) : params.target; // If the model target has changed, refresh the popup

  if (oldPopup && targetElement && oldPopup.parentNode !== targetElement.parentNode) {
    popup = init(params);
  } else {
    popup = oldPopup || init(params);
  } // Set popup width


  if (params.width) {
    popup.style.width = typeof params.width === 'number' ? params.width + 'px' : params.width;
  } // Set popup padding


  if (params.padding) {
    popup.style.padding = typeof params.padding === 'number' ? params.padding + 'px' : params.padding;
  } // Set popup background


  if (params.background) {
    popup.style.background = params.background;
  }

  var popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue('background-color');
  var successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');

  for (var i = 0; i < successIconParts.length; i++) {
    successIconParts[i].style.backgroundColor = popupBackgroundColor;
  }

  var container = getContainer();
  var closeButton = getCloseButton();
  var footer = getFooter(); // Title

  renderTitle(params); // Content

  renderContent(params); // Backdrop

  if (typeof params.backdrop === 'string') {
    getContainer().style.background = params.backdrop;
  } else if (!params.backdrop) {
    addClass([document.documentElement, document.body], swalClasses['no-backdrop']);
  }

  if (!params.backdrop && params.allowOutsideClick) {
    warn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
  } // Position


  if (params.position in swalClasses) {
    addClass(container, swalClasses[params.position]);
  } else {
    warn('The "position" parameter is not valid, defaulting to "center"');
    addClass(container, swalClasses.center);
  } // Grow


  if (params.grow && typeof params.grow === 'string') {
    var growClass = 'grow-' + params.grow;

    if (growClass in swalClasses) {
      addClass(container, swalClasses[growClass]);
    }
  } // Close button


  if (params.showCloseButton) {
    closeButton.setAttribute('aria-label', params.closeButtonAriaLabel);
    show(closeButton);
  } else {
    hide(closeButton);
  } // Default Class


  popup.className = swalClasses.popup;

  if (params.toast) {
    addClass([document.documentElement, document.body], swalClasses['toast-shown']);
    addClass(popup, swalClasses.toast);
  } else {
    addClass(popup, swalClasses.modal);
  } // Custom Class


  if (params.customClass) {
    addClass(popup, params.customClass);
  }

  if (params.customContainerClass) {
    addClass(container, params.customContainerClass);
  } // Progress steps


  renderProgressSteps(params); // Icon

  renderIcon(params); // Image

  renderImage(params); // Actions (buttons)

  renderActions(params); // Footer

  parseHtmlToContainer(params.footer, footer); // CSS animation

  if (params.animation === true) {
    removeClass(popup, swalClasses.noanimation);
  } else {
    addClass(popup, swalClasses.noanimation);
  } // showLoaderOnConfirm && preConfirm


  if (params.showLoaderOnConfirm && !params.preConfirm) {
    warn('showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' + 'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' + 'https://sweetalert2.github.io/#ajax-request');
  }
}

/**
 * Open popup, add necessary classes and styles, fix scrollbar
 *
 * @param {Array} params
 */

var openPopup = function openPopup(params) {
  var container = getContainer();
  var popup = getPopup();

  if (params.onBeforeOpen !== null && typeof params.onBeforeOpen === 'function') {
    params.onBeforeOpen(popup);
  }

  if (params.animation) {
    addClass(popup, swalClasses.show);
    addClass(container, swalClasses.fade);
    removeClass(popup, swalClasses.hide);
  } else {
    removeClass(popup, swalClasses.fade);
  }

  show(popup); // scrolling is 'hidden' until animation is done, after that 'auto'

  container.style.overflowY = 'hidden';

  if (animationEndEvent && !hasClass(popup, swalClasses.noanimation)) {
    popup.addEventListener(animationEndEvent, function swalCloseEventFinished() {
      popup.removeEventListener(animationEndEvent, swalCloseEventFinished);
      container.style.overflowY = 'auto';
    });
  } else {
    container.style.overflowY = 'auto';
  }

  addClass([document.documentElement, document.body, container], swalClasses.shown);

  if (params.heightAuto && params.backdrop && !params.toast) {
    addClass([document.documentElement, document.body], swalClasses['height-auto']);
  }

  if (isModal()) {
    if (params.scrollbarPadding) {
      fixScrollbar();
    }

    iOSfix();
    IEfix();
    setAriaHidden(); // sweetalert2/issues/1247

    setTimeout(function () {
      container.scrollTop = 0;
    });
  }

  if (!isToast() && !globalState.previousActiveElement) {
    globalState.previousActiveElement = document.activeElement;
  }

  if (params.onOpen !== null && typeof params.onOpen === 'function') {
    setTimeout(function () {
      params.onOpen(popup);
    });
  }
};

function _main(userParams) {
  var _this = this;

  showWarningsForParams(userParams);

  var innerParams = _extends({}, defaultParams, userParams);

  setParameters(innerParams);
  Object.freeze(innerParams);
  privateProps.innerParams.set(this, innerParams); // clear the previous timer

  if (globalState.timeout) {
    globalState.timeout.stop();
    delete globalState.timeout;
  } // clear the restore focus timeout


  clearTimeout(globalState.restoreFocusTimeout);
  var domCache = {
    popup: getPopup(),
    container: getContainer(),
    content: getContent(),
    actions: getActions(),
    confirmButton: getConfirmButton(),
    cancelButton: getCancelButton(),
    closeButton: getCloseButton(),
    validationMessage: getValidationMessage(),
    progressSteps: getProgressSteps()
  };
  privateProps.domCache.set(this, domCache);
  var constructor = this.constructor;
  return new Promise(function (resolve) {
    // functions to handle all closings/dismissals
    var succeedWith = function succeedWith(value) {
      _this.closePopup({
        value: value
      });
    };

    var dismissWith = function dismissWith(dismiss) {
      _this.closePopup({
        dismiss: dismiss
      });
    };

    privateMethods.swalPromiseResolve.set(_this, resolve); // Close on timer

    if (innerParams.timer) {
      globalState.timeout = new Timer(function () {
        dismissWith('timer');
        delete globalState.timeout;
      }, innerParams.timer);
    } // Get the value of the popup input


    var getInputValue = function getInputValue() {
      var input = _this.getInput();

      if (!input) {
        return null;
      }

      switch (innerParams.input) {
        case 'checkbox':
          return input.checked ? 1 : 0;

        case 'radio':
          return input.checked ? input.value : null;

        case 'file':
          return input.files.length ? input.files[0] : null;

        default:
          return innerParams.inputAutoTrim ? input.value.trim() : input.value;
      }
    }; // input autofocus


    if (innerParams.input) {
      setTimeout(function () {
        var input = _this.getInput();

        if (input) {
          focusInput(input);
        }
      }, 0);
    }

    var confirm = function confirm(value) {
      if (innerParams.showLoaderOnConfirm) {
        constructor.showLoading(); // TODO: make showLoading an *instance* method
      }

      if (innerParams.preConfirm) {
        _this.resetValidationMessage();

        var preConfirmPromise = Promise.resolve().then(function () {
          return innerParams.preConfirm(value, innerParams.validationMessage);
        });
        preConfirmPromise.then(function (preConfirmValue) {
          if (isVisible(domCache.validationMessage) || preConfirmValue === false) {
            _this.hideLoading();
          } else {
            succeedWith(typeof preConfirmValue === 'undefined' ? value : preConfirmValue);
          }
        });
      } else {
        succeedWith(value);
      }
    }; // Mouse interactions


    var onButtonEvent = function onButtonEvent(e) {
      var target = e.target;
      var confirmButton = domCache.confirmButton,
          cancelButton = domCache.cancelButton;
      var targetedConfirm = confirmButton && (confirmButton === target || confirmButton.contains(target));
      var targetedCancel = cancelButton && (cancelButton === target || cancelButton.contains(target));

      switch (e.type) {
        case 'click':
          // Clicked 'confirm'
          if (targetedConfirm && constructor.isVisible()) {
            _this.disableButtons();

            if (innerParams.input) {
              var inputValue = getInputValue();

              if (innerParams.inputValidator) {
                _this.disableInput();

                var validationPromise = Promise.resolve().then(function () {
                  return innerParams.inputValidator(inputValue, innerParams.validationMessage);
                });
                validationPromise.then(function (validationMessage) {
                  _this.enableButtons();

                  _this.enableInput();

                  if (validationMessage) {
                    _this.showValidationMessage(validationMessage);
                  } else {
                    confirm(inputValue);
                  }
                });
              } else if (!_this.getInput().checkValidity()) {
                _this.enableButtons();

                _this.showValidationMessage(innerParams.validationMessage);
              } else {
                confirm(inputValue);
              }
            } else {
              confirm(true);
            } // Clicked 'cancel'

          } else if (targetedCancel && constructor.isVisible()) {
            _this.disableButtons();

            dismissWith(constructor.DismissReason.cancel);
          }

          break;

        default:
      }
    };

    var buttons = domCache.popup.querySelectorAll('button');

    for (var i = 0; i < buttons.length; i++) {
      buttons[i].onclick = onButtonEvent;
      buttons[i].onmouseover = onButtonEvent;
      buttons[i].onmouseout = onButtonEvent;
      buttons[i].onmousedown = onButtonEvent;
    } // Closing popup by close button


    domCache.closeButton.onclick = function () {
      dismissWith(constructor.DismissReason.close);
    };

    if (innerParams.toast) {
      // Closing popup by internal click
      domCache.popup.onclick = function () {
        if (innerParams.showConfirmButton || innerParams.showCancelButton || innerParams.showCloseButton || innerParams.input) {
          return;
        }

        dismissWith(constructor.DismissReason.close);
      };
    } else {
      var ignoreOutsideClick = false; // Ignore click events that had mousedown on the popup but mouseup on the container
      // This can happen when the user drags a slider

      domCache.popup.onmousedown = function () {
        domCache.container.onmouseup = function (e) {
          domCache.container.onmouseup = undefined; // We only check if the mouseup target is the container because usually it doesn't
          // have any other direct children aside of the popup

          if (e.target === domCache.container) {
            ignoreOutsideClick = true;
          }
        };
      }; // Ignore click events that had mousedown on the container but mouseup on the popup


      domCache.container.onmousedown = function () {
        domCache.popup.onmouseup = function (e) {
          domCache.popup.onmouseup = undefined; // We also need to check if the mouseup target is a child of the popup

          if (e.target === domCache.popup || domCache.popup.contains(e.target)) {
            ignoreOutsideClick = true;
          }
        };
      };

      domCache.container.onclick = function (e) {
        if (ignoreOutsideClick) {
          ignoreOutsideClick = false;
          return;
        }

        if (e.target !== domCache.container) {
          return;
        }

        if (callIfFunction(innerParams.allowOutsideClick)) {
          dismissWith(constructor.DismissReason.backdrop);
        }
      };
    } // Reverse buttons (Confirm on the right side)


    if (innerParams.reverseButtons) {
      domCache.confirmButton.parentNode.insertBefore(domCache.cancelButton, domCache.confirmButton);
    } else {
      domCache.confirmButton.parentNode.insertBefore(domCache.confirmButton, domCache.cancelButton);
    } // Focus handling


    var setFocus = function setFocus(index, increment) {
      var focusableElements = getFocusableElements(innerParams.focusCancel); // search for visible elements and select the next possible match

      for (var _i = 0; _i < focusableElements.length; _i++) {
        index = index + increment; // rollover to first item

        if (index === focusableElements.length) {
          index = 0; // go to last item
        } else if (index === -1) {
          index = focusableElements.length - 1;
        }

        return focusableElements[index].focus();
      } // no visible focusable elements, focus the popup


      domCache.popup.focus();
    };

    var keydownHandler = function keydownHandler(e, innerParams) {
      if (innerParams.stopKeydownPropagation) {
        e.stopPropagation();
      }

      var arrowKeys = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Left', 'Right', 'Up', 'Down' // IE11
      ];

      if (e.key === 'Enter' && !e.isComposing) {
        if (e.target && _this.getInput() && e.target.outerHTML === _this.getInput().outerHTML) {
          if (['textarea', 'file'].indexOf(innerParams.input) !== -1) {
            return; // do not submit
          }

          constructor.clickConfirm();
          e.preventDefault();
        } // TAB

      } else if (e.key === 'Tab') {
        var targetElement = e.target;
        var focusableElements = getFocusableElements(innerParams.focusCancel);
        var btnIndex = -1;

        for (var _i2 = 0; _i2 < focusableElements.length; _i2++) {
          if (targetElement === focusableElements[_i2]) {
            btnIndex = _i2;
            break;
          }
        }

        if (!e.shiftKey) {
          // Cycle to the next button
          setFocus(btnIndex, 1);
        } else {
          // Cycle to the prev button
          setFocus(btnIndex, -1);
        }

        e.stopPropagation();
        e.preventDefault(); // ARROWS - switch focus between buttons
      } else if (arrowKeys.indexOf(e.key) !== -1) {
        // focus Cancel button if Confirm button is currently focused
        if (document.activeElement === domCache.confirmButton && isVisible(domCache.cancelButton)) {
          domCache.cancelButton.focus(); // and vice versa
        } else if (document.activeElement === domCache.cancelButton && isVisible(domCache.confirmButton)) {
          domCache.confirmButton.focus();
        } // ESC

      } else if ((e.key === 'Escape' || e.key === 'Esc') && callIfFunction(innerParams.allowEscapeKey) === true) {
        e.preventDefault();
        dismissWith(constructor.DismissReason.esc);
      }
    };

    if (globalState.keydownHandlerAdded) {
      globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = false;
    }

    if (!innerParams.toast) {
      globalState.keydownHandler = function (e) {
        return keydownHandler(e, innerParams);
      };

      globalState.keydownTarget = innerParams.keydownListenerCapture ? window : domCache.popup;
      globalState.keydownListenerCapture = innerParams.keydownListenerCapture;
      globalState.keydownTarget.addEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = true;
    }

    _this.enableButtons();

    _this.hideLoading();

    _this.resetValidationMessage();

    if (innerParams.toast && (innerParams.input || innerParams.footer || innerParams.showCloseButton)) {
      addClass(document.body, swalClasses['toast-column']);
    } else {
      removeClass(document.body, swalClasses['toast-column']);
    } // inputs


    var inputTypes = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];

    var setInputPlaceholder = function setInputPlaceholder(input) {
      if (!input.placeholder || innerParams.inputPlaceholder) {
        input.placeholder = innerParams.inputPlaceholder;
      }
    };

    var input;

    for (var _i3 = 0; _i3 < inputTypes.length; _i3++) {
      var inputClass = swalClasses[inputTypes[_i3]];
      var inputContainer = getChildByClass(domCache.content, inputClass);
      input = _this.getInput(inputTypes[_i3]); // set attributes

      if (input) {
        for (var j in input.attributes) {
          if (input.attributes.hasOwnProperty(j)) {
            var attrName = input.attributes[j].name;

            if (attrName !== 'type' && attrName !== 'value') {
              input.removeAttribute(attrName);
            }
          }
        }

        for (var attr in innerParams.inputAttributes) {
          // Do not set a placeholder for <input type="range">
          // it'll crash Edge, #1298
          if (inputTypes[_i3] === 'range' && attr === 'placeholder') {
            continue;
          }

          input.setAttribute(attr, innerParams.inputAttributes[attr]);
        }
      } // set class


      inputContainer.className = inputClass;

      if (innerParams.inputClass) {
        addClass(inputContainer, innerParams.inputClass);
      }

      hide(inputContainer);
    }

    var populateInputOptions;

    switch (innerParams.input) {
      case 'text':
      case 'email':
      case 'password':
      case 'number':
      case 'tel':
      case 'url':
        {
          input = getChildByClass(domCache.content, swalClasses.input);

          if (typeof innerParams.inputValue === 'string' || typeof innerParams.inputValue === 'number') {
            input.value = innerParams.inputValue;
          } else if (!isPromise(innerParams.inputValue)) {
            warn("Unexpected type of inputValue! Expected \"string\", \"number\" or \"Promise\", got \"".concat(_typeof(innerParams.inputValue), "\""));
          }

          setInputPlaceholder(input);
          input.type = innerParams.input;
          show(input);
          break;
        }

      case 'file':
        {
          input = getChildByClass(domCache.content, swalClasses.file);
          setInputPlaceholder(input);
          input.type = innerParams.input;
          show(input);
          break;
        }

      case 'range':
        {
          var range = getChildByClass(domCache.content, swalClasses.range);
          var rangeInput = range.querySelector('input');
          var rangeOutput = range.querySelector('output');
          rangeInput.value = innerParams.inputValue;
          rangeInput.type = innerParams.input;
          rangeOutput.value = innerParams.inputValue;
          show(range);
          break;
        }

      case 'select':
        {
          var select = getChildByClass(domCache.content, swalClasses.select);
          select.innerHTML = '';

          if (innerParams.inputPlaceholder) {
            var placeholder = document.createElement('option');
            placeholder.innerHTML = innerParams.inputPlaceholder;
            placeholder.value = '';
            placeholder.disabled = true;
            placeholder.selected = true;
            select.appendChild(placeholder);
          }

          populateInputOptions = function populateInputOptions(inputOptions) {
            inputOptions.forEach(function (inputOption) {
              var optionValue = inputOption[0];
              var optionLabel = inputOption[1];
              var option = document.createElement('option');
              option.value = optionValue;
              option.innerHTML = optionLabel;

              if (innerParams.inputValue.toString() === optionValue.toString()) {
                option.selected = true;
              }

              select.appendChild(option);
            });
            show(select);
            select.focus();
          };

          break;
        }

      case 'radio':
        {
          var radio = getChildByClass(domCache.content, swalClasses.radio);
          radio.innerHTML = '';

          populateInputOptions = function populateInputOptions(inputOptions) {
            inputOptions.forEach(function (inputOption) {
              var radioValue = inputOption[0];
              var radioLabel = inputOption[1];
              var radioInput = document.createElement('input');
              var radioLabelElement = document.createElement('label');
              radioInput.type = 'radio';
              radioInput.name = swalClasses.radio;
              radioInput.value = radioValue;

              if (innerParams.inputValue.toString() === radioValue.toString()) {
                radioInput.checked = true;
              }

              var label = document.createElement('span');
              label.innerHTML = radioLabel;
              label.className = swalClasses.label;
              radioLabelElement.appendChild(radioInput);
              radioLabelElement.appendChild(label);
              radio.appendChild(radioLabelElement);
            });
            show(radio);
            var radios = radio.querySelectorAll('input');

            if (radios.length) {
              radios[0].focus();
            }
          };

          break;
        }

      case 'checkbox':
        {
          var checkbox = getChildByClass(domCache.content, swalClasses.checkbox);

          var checkboxInput = _this.getInput('checkbox');

          checkboxInput.type = 'checkbox';
          checkboxInput.value = 1;
          checkboxInput.id = swalClasses.checkbox;
          checkboxInput.checked = Boolean(innerParams.inputValue);
          var label = checkbox.querySelector('span');
          label.innerHTML = innerParams.inputPlaceholder;
          show(checkbox);
          break;
        }

      case 'textarea':
        {
          var textarea = getChildByClass(domCache.content, swalClasses.textarea);
          textarea.value = innerParams.inputValue;
          setInputPlaceholder(textarea);
          show(textarea);
          break;
        }

      case null:
        {
          break;
        }

      default:
        error("Unexpected type of input! Expected \"text\", \"email\", \"password\", \"number\", \"tel\", \"select\", \"radio\", \"checkbox\", \"textarea\", \"file\" or \"url\", got \"".concat(innerParams.input, "\""));
        break;
    }

    if (innerParams.input === 'select' || innerParams.input === 'radio') {
      var processInputOptions = function processInputOptions(inputOptions) {
        return populateInputOptions(formatInputOptions(inputOptions));
      };

      if (isPromise(innerParams.inputOptions)) {
        constructor.showLoading();
        innerParams.inputOptions.then(function (inputOptions) {
          _this.hideLoading();

          processInputOptions(inputOptions);
        });
      } else if (_typeof(innerParams.inputOptions) === 'object') {
        processInputOptions(innerParams.inputOptions);
      } else {
        error("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(_typeof(innerParams.inputOptions)));
      }
    } else if (['text', 'email', 'number', 'tel', 'textarea'].indexOf(innerParams.input) !== -1 && isPromise(innerParams.inputValue)) {
      constructor.showLoading();
      hide(input);
      innerParams.inputValue.then(function (inputValue) {
        input.value = innerParams.input === 'number' ? parseFloat(inputValue) || 0 : inputValue + '';
        show(input);
        input.focus();

        _this.hideLoading();
      }).catch(function (err) {
        error('Error in inputValue promise: ' + err);
        input.value = '';
        show(input);
        input.focus();

        _this.hideLoading();
      });
    }

    openPopup(innerParams);

    if (!innerParams.toast) {
      if (!callIfFunction(innerParams.allowEnterKey)) {
        if (document.activeElement && typeof document.activeElement.blur === 'function') {
          document.activeElement.blur();
        }
      } else if (innerParams.focusCancel && isVisible(domCache.cancelButton)) {
        domCache.cancelButton.focus();
      } else if (innerParams.focusConfirm && isVisible(domCache.confirmButton)) {
        domCache.confirmButton.focus();
      } else {
        setFocus(-1, 1);
      }
    } // fix scroll


    domCache.container.scrollTop = 0;
  });
}

/**
 * Updates popup options.
 */

function update(params) {
  var validUpdatableParams = {}; // assign valid params from `params` to `defaults`

  Object.keys(params).forEach(function (param) {
    if (Swal.isUpdatableParameter(param)) {
      validUpdatableParams[param] = params[param];
    } else {
      warn("Invalid parameter to update: \"".concat(param, "\". Updatable params are listed here: TODO (@limonte) add link"));
    }
  });
  var innerParams = privateProps.innerParams.get(this);

  var updatedParams = _extends({}, innerParams, validUpdatableParams); // Actions


  renderActions(updatedParams); // Content

  renderContent(updatedParams); // Icon

  renderIcon(updatedParams); // Image

  renderImage(updatedParams); // Progress steps

  renderProgressSteps(updatedParams); // Title

  renderTitle(updatedParams);
  privateProps.innerParams.set(this, updatedParams);
}



var instanceMethods = Object.freeze({
	hideLoading: hideLoading,
	disableLoading: hideLoading,
	getInput: getInput,
	close: close,
	closePopup: close,
	closeModal: close,
	closeToast: close,
	enableButtons: enableButtons,
	disableButtons: disableButtons,
	enableConfirmButton: enableConfirmButton,
	disableConfirmButton: disableConfirmButton,
	enableInput: enableInput,
	disableInput: disableInput,
	showValidationMessage: showValidationMessage,
	resetValidationMessage: resetValidationMessage,
	getProgressSteps: getProgressSteps$1,
	setProgressSteps: setProgressSteps,
	showProgressSteps: showProgressSteps,
	hideProgressSteps: hideProgressSteps,
	_main: _main,
	update: update
});

var currentInstance; // SweetAlert constructor

function SweetAlert() {
  // Prevent run in Node env

  /* istanbul ignore if */
  if (typeof window === 'undefined') {
    return;
  } // Check for the existence of Promise

  /* istanbul ignore if */


  if (typeof Promise === 'undefined') {
    error('This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)');
  }

  currentInstance = this;

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var outerParams = Object.freeze(this.constructor.argsToParams(args));
  Object.defineProperties(this, {
    params: {
      value: outerParams,
      writable: false,
      enumerable: true
    }
  });

  var promise = this._main(this.params);

  privateProps.promise.set(this, promise);
} // `catch` cannot be the name of a module export, so we define our thenable methods here instead


SweetAlert.prototype.then = function (onFulfilled) {
  var promise = privateProps.promise.get(this);
  return promise.then(onFulfilled);
};

SweetAlert.prototype.finally = function (onFinally) {
  var promise = privateProps.promise.get(this);
  return promise.finally(onFinally);
}; // Assign instance methods from src/instanceMethods/*.js to prototype


_extends(SweetAlert.prototype, instanceMethods); // Assign static methods from src/staticMethods/*.js to constructor


_extends(SweetAlert, staticMethods); // Proxy to instance methods to constructor, for now, for backwards compatibility


Object.keys(instanceMethods).forEach(function (key) {
  SweetAlert[key] = function () {
    if (currentInstance) {
      var _currentInstance;

      return (_currentInstance = currentInstance)[key].apply(_currentInstance, arguments);
    }
  };
});
SweetAlert.DismissReason = DismissReason;
SweetAlert.version = '8.2.2';

var Swal = SweetAlert;
Swal.default = Swal;

return Swal;

})));
if (typeof window !== 'undefined' && window.Sweetalert2){  window.swal = window.sweetAlert = window.Swal = window.SweetAlert = window.Sweetalert2}

"undefined"!=typeof document&&function(e,t){var n=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=t);else try{n.innerHTML=t}catch(e){n.innerText=t}}(document,"@-webkit-keyframes swal2-show{0%{-webkit-transform:scale(.7);transform:scale(.7)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes swal2-show{0%{-webkit-transform:scale(.7);transform:scale(.7)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}100%{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(.5);transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(.5);transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.875em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.875em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}100%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}100%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}50%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}80%{margin-top:-.375em;-webkit-transform:scale(1.15);transform:scale(1.15)}100%{margin-top:0;-webkit-transform:scale(1);transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}50%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}80%{margin-top:-.375em;-webkit-transform:scale(1.15);transform:scale(1.15)}100%{margin-top:0;-webkit-transform:scale(1);transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);opacity:1}}body.swal2-toast-shown .swal2-container{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-shown{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}body.swal2-toast-column .swal2-toast{flex-direction:column;align-items:stretch}body.swal2-toast-column .swal2-toast .swal2-actions{flex:1;align-self:stretch;height:2.2em;margin-top:.3125em}body.swal2-toast-column .swal2-toast .swal2-loading{justify-content:center}body.swal2-toast-column .swal2-toast .swal2-input{height:2em;margin:.3125em auto;font-size:1em}body.swal2-toast-column .swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast{flex-direction:row;align-items:center;width:auto;padding:.625em;box-shadow:0 0 .625em #d9d9d9;overflow-y:hidden}.swal2-popup.swal2-toast .swal2-header{flex-direction:row}.swal2-popup.swal2-toast .swal2-title{flex-grow:1;justify-content:flex-start;margin:0 .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{position:initial;width:.8em;height:.8em;line-height:.8}.swal2-popup.swal2-toast .swal2-content{justify-content:flex-start;font-size:1em}.swal2-popup.swal2-toast .swal2-icon{width:2em;min-width:2em;height:2em;margin:0}.swal2-popup.swal2-toast .swal2-icon-text{font-size:2em;font-weight:700;line-height:1em}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{height:auto;margin:0 .3125em}.swal2-popup.swal2-toast .swal2-styled{margin:0 .3125em;padding:.3125em .625em;font-size:1em}.swal2-popup.swal2-toast .swal2-styled:focus{box-shadow:0 0 0 .0625em #fff,0 0 0 .125em rgba(50,100,150,.4)}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:2em;height:2.8125em;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.25em;left:-.9375em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:2em 2em;transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;-webkit-transform-origin:0 2em;transform-origin:0 2em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:showSweetToast .5s;animation:showSweetToast .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:hideSweetToast .2s forwards;animation:hideSweetToast .2s forwards}.swal2-popup.swal2-toast .swal2-animate-success-icon .swal2-success-line-tip{-webkit-animation:animate-toast-success-tip .75s;animation:animate-toast-success-tip .75s}.swal2-popup.swal2-toast .swal2-animate-success-icon .swal2-success-line-long{-webkit-animation:animate-toast-success-long .75s;animation:animate-toast-success-long .75s}@-webkit-keyframes showSweetToast{0%{-webkit-transform:translateY(-.625em) rotateZ(2deg);transform:translateY(-.625em) rotateZ(2deg);opacity:0}33%{-webkit-transform:translateY(0) rotateZ(-2deg);transform:translateY(0) rotateZ(-2deg);opacity:.5}66%{-webkit-transform:translateY(.3125em) rotateZ(2deg);transform:translateY(.3125em) rotateZ(2deg);opacity:.7}100%{-webkit-transform:translateY(0) rotateZ(0);transform:translateY(0) rotateZ(0);opacity:1}}@keyframes showSweetToast{0%{-webkit-transform:translateY(-.625em) rotateZ(2deg);transform:translateY(-.625em) rotateZ(2deg);opacity:0}33%{-webkit-transform:translateY(0) rotateZ(-2deg);transform:translateY(0) rotateZ(-2deg);opacity:.5}66%{-webkit-transform:translateY(.3125em) rotateZ(2deg);transform:translateY(.3125em) rotateZ(2deg);opacity:.7}100%{-webkit-transform:translateY(0) rotateZ(0);transform:translateY(0) rotateZ(0);opacity:1}}@-webkit-keyframes hideSweetToast{0%{opacity:1}33%{opacity:.5}100%{-webkit-transform:rotateZ(1deg);transform:rotateZ(1deg);opacity:0}}@keyframes hideSweetToast{0%{opacity:1}33%{opacity:.5}100%{-webkit-transform:rotateZ(1deg);transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes animate-toast-success-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes animate-toast-success-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes animate-toast-success-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes animate-toast-success-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-shown{top:auto;right:auto;bottom:auto;left:auto;background-color:transparent}body.swal2-no-backdrop .swal2-shown>.swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}body.swal2-no-backdrop .swal2-shown.swal2-top{top:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-top-left,body.swal2-no-backdrop .swal2-shown.swal2-top-start{top:0;left:0}body.swal2-no-backdrop .swal2-shown.swal2-top-end,body.swal2-no-backdrop .swal2-shown.swal2-top-right{top:0;right:0}body.swal2-no-backdrop .swal2-shown.swal2-center{top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}body.swal2-no-backdrop .swal2-shown.swal2-center-left,body.swal2-no-backdrop .swal2-shown.swal2-center-start{top:50%;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-center-end,body.swal2-no-backdrop .swal2-shown.swal2-center-right{top:50%;right:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-bottom{bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-bottom-left,body.swal2-no-backdrop .swal2-shown.swal2-bottom-start{bottom:0;left:0}body.swal2-no-backdrop .swal2-shown.swal2-bottom-end,body.swal2-no-backdrop .swal2-shown.swal2-bottom-right{right:0;bottom:0}.swal2-container{display:flex;position:fixed;top:0;right:0;bottom:0;left:0;flex-direction:row;align-items:center;justify-content:center;padding:10px;background-color:transparent;z-index:1060;overflow-x:hidden;-webkit-overflow-scrolling:touch}.swal2-container.swal2-top{align-items:flex-start}.swal2-container.swal2-top-left,.swal2-container.swal2-top-start{align-items:flex-start;justify-content:flex-start}.swal2-container.swal2-top-end,.swal2-container.swal2-top-right{align-items:flex-start;justify-content:flex-end}.swal2-container.swal2-center{align-items:center}.swal2-container.swal2-center-left,.swal2-container.swal2-center-start{align-items:center;justify-content:flex-start}.swal2-container.swal2-center-end,.swal2-container.swal2-center-right{align-items:center;justify-content:flex-end}.swal2-container.swal2-bottom{align-items:flex-end}.swal2-container.swal2-bottom-left,.swal2-container.swal2-bottom-start{align-items:flex-end;justify-content:flex-start}.swal2-container.swal2-bottom-end,.swal2-container.swal2-bottom-right{align-items:flex-end;justify-content:flex-end}.swal2-container.swal2-bottom-end>:first-child,.swal2-container.swal2-bottom-left>:first-child,.swal2-container.swal2-bottom-right>:first-child,.swal2-container.swal2-bottom-start>:first-child,.swal2-container.swal2-bottom>:first-child{margin-top:auto}.swal2-container.swal2-grow-fullscreen>.swal2-modal{display:flex!important;flex:1;align-self:stretch;justify-content:center}.swal2-container.swal2-grow-row>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-grow-column{flex:1;flex-direction:column}.swal2-container.swal2-grow-column.swal2-bottom,.swal2-container.swal2-grow-column.swal2-center,.swal2-container.swal2-grow-column.swal2-top{align-items:center}.swal2-container.swal2-grow-column.swal2-bottom-left,.swal2-container.swal2-grow-column.swal2-bottom-start,.swal2-container.swal2-grow-column.swal2-center-left,.swal2-container.swal2-grow-column.swal2-center-start,.swal2-container.swal2-grow-column.swal2-top-left,.swal2-container.swal2-grow-column.swal2-top-start{align-items:flex-start}.swal2-container.swal2-grow-column.swal2-bottom-end,.swal2-container.swal2-grow-column.swal2-bottom-right,.swal2-container.swal2-grow-column.swal2-center-end,.swal2-container.swal2-grow-column.swal2-center-right,.swal2-container.swal2-grow-column.swal2-top-end,.swal2-container.swal2-grow-column.swal2-top-right{align-items:flex-end}.swal2-container.swal2-grow-column>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right):not(.swal2-grow-fullscreen)>.swal2-modal{margin:auto}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-container .swal2-modal{margin:0!important}}.swal2-container.swal2-fade{transition:background-color .1s}.swal2-container.swal2-shown{background-color:rgba(0,0,0,.4)}.swal2-popup{display:none;position:relative;flex-direction:column;justify-content:center;width:32em;max-width:100%;padding:1.25em;border-radius:.3125em;background:#fff;font-family:inherit;font-size:1rem;box-sizing:border-box}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-popup .swal2-header{display:flex;flex-direction:column;align-items:center}.swal2-popup .swal2-title{display:block;position:relative;max-width:100%;margin:0 0 .4em;padding:0;color:#595959;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-popup .swal2-actions{flex-wrap:wrap;align-items:center;justify-content:center;margin:1.25em auto 0;z-index:1}.swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-popup .swal2-actions.swal2-loading .swal2-styled.swal2-confirm{width:2.5em;height:2.5em;margin:.46875em;padding:0;border:.25em solid transparent;border-radius:100%;border-color:transparent;background-color:transparent!important;color:transparent;cursor:default;box-sizing:border-box;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-popup .swal2-actions.swal2-loading .swal2-styled.swal2-cancel{margin-right:30px;margin-left:30px}.swal2-popup .swal2-actions.swal2-loading :not(.swal2-styled).swal2-confirm::after{display:inline-block;width:15px;height:15px;margin-left:5px;border:3px solid #999;border-radius:50%;border-right-color:transparent;box-shadow:1px 1px 1px #fff;content:'';-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal}.swal2-popup .swal2-styled{margin:.3125em;padding:.625em 2em;font-weight:500;box-shadow:none}.swal2-popup .swal2-styled:not([disabled]){cursor:pointer}.swal2-popup .swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#3085d6;color:#fff;font-size:1.0625em}.swal2-popup .swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#aaa;color:#fff;font-size:1.0625em}.swal2-popup .swal2-styled:focus{outline:0;box-shadow:0 0 0 2px #fff,0 0 0 4px rgba(50,100,150,.4)}.swal2-popup .swal2-styled::-moz-focus-inner{border:0}.swal2-popup .swal2-footer{justify-content:center;margin:1.25em 0 0;padding:1em 0 0;border-top:1px solid #eee;color:#545454;font-size:1em}.swal2-popup .swal2-image{max-width:100%;margin:1.25em auto}.swal2-popup .swal2-close{position:absolute;top:0;right:0;justify-content:center;width:1.2em;height:1.2em;padding:0;transition:color .1s ease-out;border:none;border-radius:0;outline:initial;background:0 0;color:#ccc;font-family:serif;font-size:2.5em;line-height:1.2;cursor:pointer;overflow:hidden}.swal2-popup .swal2-close:hover{-webkit-transform:none;transform:none;color:#f27474}.swal2-popup>.swal2-checkbox,.swal2-popup>.swal2-file,.swal2-popup>.swal2-input,.swal2-popup>.swal2-radio,.swal2-popup>.swal2-select,.swal2-popup>.swal2-textarea{display:none}.swal2-popup .swal2-content{justify-content:center;margin:0;padding:0;color:#545454;font-size:1.125em;font-weight:300;line-height:normal;z-index:1;word-wrap:break-word}.swal2-popup #swal2-content{text-align:center}.swal2-popup .swal2-checkbox,.swal2-popup .swal2-file,.swal2-popup .swal2-input,.swal2-popup .swal2-radio,.swal2-popup .swal2-select,.swal2-popup .swal2-textarea{margin:1em auto}.swal2-popup .swal2-file,.swal2-popup .swal2-input,.swal2-popup .swal2-textarea{width:100%;transition:border-color .3s,box-shadow .3s;border:1px solid #d9d9d9;border-radius:.1875em;background:inherit;font-size:1.125em;box-shadow:inset 0 1px 1px rgba(0,0,0,.06);box-sizing:border-box}.swal2-popup .swal2-file.swal2-inputerror,.swal2-popup .swal2-input.swal2-inputerror,.swal2-popup .swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-popup .swal2-file:focus,.swal2-popup .swal2-input:focus,.swal2-popup .swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:0 0 3px #c4e6f5}.swal2-popup .swal2-file::-webkit-input-placeholder,.swal2-popup .swal2-input::-webkit-input-placeholder,.swal2-popup .swal2-textarea::-webkit-input-placeholder{color:#ccc}.swal2-popup .swal2-file:-ms-input-placeholder,.swal2-popup .swal2-input:-ms-input-placeholder,.swal2-popup .swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-popup .swal2-file::-ms-input-placeholder,.swal2-popup .swal2-input::-ms-input-placeholder,.swal2-popup .swal2-textarea::-ms-input-placeholder{color:#ccc}.swal2-popup .swal2-file::placeholder,.swal2-popup .swal2-input::placeholder,.swal2-popup .swal2-textarea::placeholder{color:#ccc}.swal2-popup .swal2-range{margin:1em auto;background:inherit}.swal2-popup .swal2-range input{width:80%}.swal2-popup .swal2-range output{width:20%;font-weight:600;text-align:center}.swal2-popup .swal2-range input,.swal2-popup .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-popup .swal2-input{height:2.625em;padding:0 .75em}.swal2-popup .swal2-input[type=number]{max-width:10em}.swal2-popup .swal2-file{background:inherit;font-size:1.125em}.swal2-popup .swal2-textarea{height:6.75em;padding:.75em}.swal2-popup .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:inherit;color:#545454;font-size:1.125em}.swal2-popup .swal2-checkbox,.swal2-popup .swal2-radio{align-items:center;justify-content:center;background:inherit}.swal2-popup .swal2-checkbox label,.swal2-popup .swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-popup .swal2-checkbox input,.swal2-popup .swal2-radio input{margin:0 .4em}.swal2-popup .swal2-validation-message{display:none;align-items:center;justify-content:center;padding:.625em;background:#f0f0f0;color:#666;font-size:1em;font-weight:300;overflow:hidden}.swal2-popup .swal2-validation-message::before{display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center;content:'!';zoom:normal}@supports (-ms-accelerator:true){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@-moz-document url-prefix(){.swal2-close:focus{outline:2px solid rgba(50,100,150,.4)}}.swal2-icon{position:relative;justify-content:center;width:5em;height:5em;margin:1.25em auto 1.875em;border:.25em solid transparent;border-radius:50%;line-height:5em;cursor:default;box-sizing:content-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;zoom:normal}.swal2-icon-text{font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-success{border-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:3.75em 3.75em;transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 3.75em;transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;top:-.25em;left:-.25em;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%;z-index:2;box-sizing:content-box}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;top:.5em;left:1.625em;width:.4375em;height:5.625em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);z-index:1}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;height:.3125em;border-radius:.125em;background-color:#a5dc86;z-index:2}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.875em;width:1.5625em;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-progress-steps{align-items:center;margin:0 0 1.25em;padding:0;background:inherit;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{width:2em;height:2em;border-radius:2em;background:#3085d6;color:#fff;line-height:2em;text-align:center;z-index:20}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#3085d6}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:inherit;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:inherit}.swal2-progress-steps .swal2-progress-step-line{width:2.5em;height:.4em;margin:0 -1px;background:#3085d6;z-index:10}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-show.swal2-noanimation{-webkit-animation:none;animation:none}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-hide.swal2-noanimation{-webkit-animation:none;animation:none}.swal2-rtl .swal2-close{right:auto;left:0}.swal2-animate-success-icon .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-animate-success-icon .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-animate-success-icon .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-animate-error-icon{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-animate-error-icon .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}@-webkit-keyframes swal2-rotate-loading{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:initial!important}}");

/***/ })

},[["./app/resources/assets/js/app.js","runtime"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3Jlc291cmNlcy9hc3NldHMvc2Nzcy9hcHAuc2Nzcz80OGRjIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9kaXN0L3N3ZWV0YWxlcnQyLmFsbC5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwid2luZG93IiwiQXBwIiwiU3dhbCIsImFsZXJ0IiwibWVzc2FnZXMiLCJmb3JFYWNoIiwibXNnIiwiZmlyZSIsImNvbmZpcm1TdWJtaXQiLCJidG4iLCJ0aXRsZSIsInR5cGUiLCJzaG93Q2FuY2VsQnV0dG9uIiwiY29uZmlybUJ1dHRvbkNvbG9yIiwiY2FuY2VsQnV0dG9uQ29sb3IiLCJjb25maXJtQnV0dG9uVGV4dCIsInRoZW4iLCJyZXN1bHQiLCJ2YWx1ZSIsInBhcmVudE5vZGUiLCJzdWJtaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBQSxtQkFBTyxDQUFDLDhEQUFELENBQVA7O0FBQ0FDLE1BQU0sQ0FBQ0MsR0FBUCxHQUFhLFlBQVc7QUFDdkIsTUFBTUMsSUFBSSxHQUFHSCxtQkFBTyxDQUFDLHVFQUFELENBQXBCOztBQUVHLFNBQU87QUFDSEksU0FBSyxFQUFFLGVBQVNDLFFBQVQsRUFBbUI7QUFDekJBLGNBQVEsQ0FBQ0MsT0FBVCxDQUFpQixVQUFDQyxHQUFELEVBQVM7QUFDNUJKLFlBQUksQ0FBQ0ssSUFBTCxDQUFVRCxHQUFWO0FBQ0gsT0FGSztBQUdBLEtBTEU7QUFNSEUsaUJBQWEsRUFBRSx1QkFBU0MsR0FBVCxFQUFhO0FBQzNCUCxVQUFJLENBQUNLLElBQUwsQ0FBVTtBQUNkRyxhQUFLLEVBQUUsZUFETztBQUVkQyxZQUFJLEVBQUUsU0FGUTtBQUdkQyx3QkFBZ0IsRUFBRSxJQUhKO0FBSWRDLDBCQUFrQixFQUFFLFNBSk47QUFLZEMseUJBQWlCLEVBQUUsTUFMTDtBQU1kQyx5QkFBaUIsRUFBRTtBQU5MLE9BQVYsRUFPSEMsSUFQRyxDQU9FLFVBQUNDLE1BQUQsRUFBWTtBQUNsQixZQUFJQSxNQUFNLENBQUNDLEtBQVgsRUFBa0I7QUFDakJULGFBQUcsQ0FBQ1UsVUFBSixDQUFlQyxNQUFmO0FBQ0E7QUFDRixPQVhLO0FBWUE7QUFuQkUsR0FBUDtBQXFCSCxDQXhCWSxFQUFiLEM7Ozs7Ozs7Ozs7O0FDREEsdUM7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsS0FBNEQ7QUFDN0QsQ0FBQyxTQUNnQztBQUNqQyxDQUFDLHFCQUFxQjs7QUFFdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkVBQTJFO0FBQzNFO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLGdCQUFnQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjs7QUFFaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDRCQUE0QjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsR0FBRyxFQUFFOztBQUVMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0U7O0FBRWhFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0I7O0FBRWxCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0EsOEJBQThCO0FBQzlCLEdBQUc7QUFDSDs7QUFFQTtBQUNBLHFCQUFxQixZQUFZO0FBQ2pDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7O0FBRXZDO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7OztBQUdIO0FBQ0EsbURBQW1EOztBQUVuRDtBQUNBLHdFQUF3RTs7QUFFeEU7QUFDQTtBQUNBO0FBQ0EsbURBQW1EOztBQUVuRDtBQUNBLGdFQUFnRTs7QUFFaEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNFQUFzRTs7QUFFdEU7QUFDQSwrQ0FBK0M7QUFDL0MsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLGtCQUFrQjtBQUNuQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxxRUFBcUUsYUFBYTtBQUNsRjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUIsVUFBVSxpQkFBaUIsb0JBQW9CLDBEQUEwRDtBQUN6RyxVQUFVLGdCQUFnQixvQkFBb0IseURBQXlEO0FBQ3ZHO0FBQ0E7QUFDQSxrQ0FBa0Msd0NBQXdDO0FBQzFFLFVBQVUsaUJBQWlCO0FBQzNCLFVBQVUsZ0JBQWdCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLCtGQUErRjtBQUMvRjtBQUNBLEtBQUs7O0FBRUw7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLEtBQUsseUJBQXlCOztBQUU5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFOztBQUVGOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRzs7O0FBR0gsdUNB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O0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSzs7O0FBR0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIseUJBQXlCO0FBQzlDO0FBQ0E7QUFDQSw4Q0FBOEM7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPOzs7QUFHUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNB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LGNBQWMsa0JBQWtCLGVBQWUscUJBQXFCLHlCQUF5QixVQUFVLGtFQUFrRSxZQUFZLFlBQVksZUFBZSxnQ0FBZ0Msd0JBQXdCLG1FQUFtRSxZQUFZLFdBQVcsZUFBZSxpQ0FBaUMseUJBQXlCLHNCQUFzQixtQkFBbUIsa0JBQWtCLFVBQVUsbUJBQW1CLGdCQUFnQix5QkFBeUIscUJBQXFCLGtCQUFrQiwyQ0FBMkMsVUFBVSxXQUFXLGtCQUFrQixtQkFBbUIsV0FBVyxnQkFBZ0Isa0JBQWtCLFdBQVcsc0VBQXNFLG1CQUFtQiwyRkFBMkYsbUJBQW1CLFdBQVcsZ0dBQWdHLG1CQUFtQixnREFBZ0QsWUFBWSxZQUFZLGNBQWMsbUJBQW1CLFdBQVcsZUFBZSx3Q0FBd0MsWUFBWSxpQ0FBaUMseUJBQXlCLDhCQUE4Qix1QkFBdUIsZUFBZSxZQUFZLDJDQUEyQyxtQ0FBbUMsOEJBQThCLHVCQUF1QixlQUFlLHdCQUF3QixXQUFXLE9BQU8sb0RBQW9ELHNEQUFzRCw4Q0FBOEMscURBQXFELHVEQUF1RCwrQ0FBK0MsK0RBQStELG1FQUFtRSwyREFBMkQsMEJBQTBCLCtDQUErQyx1Q0FBdUMsd0NBQXdDLGlEQUFpRCx5Q0FBeUMsd0NBQXdDLEdBQUcsNEJBQTRCLG9CQUFvQixLQUFLLGlDQUFpQywwQkFBMEIsZ0NBQWdDLEdBQUcsNEJBQTRCLG9CQUFvQixLQUFLLGlDQUFpQywwQkFBMEIsYUFBYSxpRUFBaUUsNEJBQTRCLG9GQUFvRixhQUFhLGtGQUFrRiw0QkFBNEIsRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJyZXF1aXJlKCcuLi9zY3NzL2FwcC5zY3NzJylcbndpbmRvdy5BcHAgPSBmdW5jdGlvbigpIHtcblx0Y29uc3QgU3dhbCA9IHJlcXVpcmUoJ3N3ZWV0YWxlcnQyJylcblxuICAgIHJldHVybiB7XG4gICAgICAgIGFsZXJ0OiBmdW5jdGlvbihtZXNzYWdlcykge1xuICAgICAgICBcdG1lc3NhZ2VzLmZvckVhY2goKG1zZykgPT4ge1xuXHRcdFx0ICAgIFN3YWwuZmlyZShtc2cpXG5cdFx0XHR9KVxuICAgICAgICB9LFxuICAgICAgICBjb25maXJtU3VibWl0OiBmdW5jdGlvbihidG4pe1xuICAgICAgICBcdFN3YWwuZmlyZSh7XG5cdFx0XHQgIHRpdGxlOiAnQXJlIHlvdSBzdXJlPycsXG5cdFx0XHQgIHR5cGU6ICd3YXJuaW5nJyxcblx0XHRcdCAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcblx0XHRcdCAgY29uZmlybUJ1dHRvbkNvbG9yOiAnIzMwODVkNicsXG5cdFx0XHQgIGNhbmNlbEJ1dHRvbkNvbG9yOiAnI2QzMycsXG5cdFx0XHQgIGNvbmZpcm1CdXR0b25UZXh0OiAnWWVzLCBkZWxldGUgaXQhJ1xuXHRcdFx0fSkudGhlbigocmVzdWx0KSA9PiB7XG5cdFx0XHQgIGlmIChyZXN1bHQudmFsdWUpIHtcblx0XHRcdCAgXHRidG4ucGFyZW50Tm9kZS5zdWJtaXQoKVxuXHRcdFx0ICB9XG5cdFx0XHR9KVxuICAgICAgICB9XG4gICAgfVxufSgpOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8qIVxuKiBzd2VldGFsZXJ0MiB2OC4yLjJcbiogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuKi9cbihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG5cdHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpIDpcblx0dHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKGZhY3RvcnkpIDpcblx0KGdsb2JhbC5Td2VldGFsZXJ0MiA9IGZhY3RvcnkoKSk7XG59KHRoaXMsIChmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgX3R5cGVvZiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgX3R5cGVvZiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfTtcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5cbmZ1bmN0aW9uIGlzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlO1xuICBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlO1xuICBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlO1xuXG4gIHRyeSB7XG4gICAgRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChEYXRlLCBbXSwgZnVuY3Rpb24gKCkge30pKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY29uc3RydWN0KFBhcmVudCwgYXJncywgQ2xhc3MpIHtcbiAgaWYgKGlzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpKSB7XG4gICAgX2NvbnN0cnVjdCA9IFJlZmxlY3QuY29uc3RydWN0O1xuICB9IGVsc2Uge1xuICAgIF9jb25zdHJ1Y3QgPSBmdW5jdGlvbiBfY29uc3RydWN0KFBhcmVudCwgYXJncywgQ2xhc3MpIHtcbiAgICAgIHZhciBhID0gW251bGxdO1xuICAgICAgYS5wdXNoLmFwcGx5KGEsIGFyZ3MpO1xuICAgICAgdmFyIENvbnN0cnVjdG9yID0gRnVuY3Rpb24uYmluZC5hcHBseShQYXJlbnQsIGEpO1xuICAgICAgdmFyIGluc3RhbmNlID0gbmV3IENvbnN0cnVjdG9yKCk7XG4gICAgICBpZiAoQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihpbnN0YW5jZSwgQ2xhc3MucHJvdG90eXBlKTtcbiAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF9jb25zdHJ1Y3QuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfVxuXG4gIHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufVxuXG5mdW5jdGlvbiBfc3VwZXJQcm9wQmFzZShvYmplY3QsIHByb3BlcnR5KSB7XG4gIHdoaWxlICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpKSB7XG4gICAgb2JqZWN0ID0gX2dldFByb3RvdHlwZU9mKG9iamVjdCk7XG4gICAgaWYgKG9iamVjdCA9PT0gbnVsbCkgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gb2JqZWN0O1xufVxuXG5mdW5jdGlvbiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBSZWZsZWN0LmdldCkge1xuICAgIF9nZXQgPSBSZWZsZWN0LmdldDtcbiAgfSBlbHNlIHtcbiAgICBfZ2V0ID0gZnVuY3Rpb24gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICAgICAgdmFyIGJhc2UgPSBfc3VwZXJQcm9wQmFzZSh0YXJnZXQsIHByb3BlcnR5KTtcblxuICAgICAgaWYgKCFiYXNlKSByZXR1cm47XG4gICAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYmFzZSwgcHJvcGVydHkpO1xuXG4gICAgICBpZiAoZGVzYy5nZXQpIHtcbiAgICAgICAgcmV0dXJuIGRlc2MuZ2V0LmNhbGwocmVjZWl2ZXIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGVzYy52YWx1ZTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIgfHwgdGFyZ2V0KTtcbn1cblxudmFyIGNvbnNvbGVQcmVmaXggPSAnU3dlZXRBbGVydDI6Jztcbi8qKlxuICogRmlsdGVyIHRoZSB1bmlxdWUgdmFsdWVzIGludG8gYSBuZXcgYXJyYXlcbiAqIEBwYXJhbSBhcnJcbiAqL1xuXG52YXIgdW5pcXVlQXJyYXkgPSBmdW5jdGlvbiB1bmlxdWVBcnJheShhcnIpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHJlc3VsdC5pbmRleE9mKGFycltpXSkgPT09IC0xKSB7XG4gICAgICByZXN1bHQucHVzaChhcnJbaV0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuLyoqXG4gKiBDb252ZXJ0IE5vZGVMaXN0IHRvIEFycmF5XG4gKiBAcGFyYW0gbm9kZUxpc3RcbiAqL1xuXG52YXIgdG9BcnJheSA9IGZ1bmN0aW9uIHRvQXJyYXkobm9kZUxpc3QpIHtcbiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKG5vZGVMaXN0KTtcbn07XG4vKipcbiAqIENvbnZlcnRzIGBpbnB1dE9wdGlvbnNgIGludG8gYW4gYXJyYXkgb2YgYFt2YWx1ZSwgbGFiZWxdYHNcbiAqIEBwYXJhbSBpbnB1dE9wdGlvbnNcbiAqL1xuXG52YXIgZm9ybWF0SW5wdXRPcHRpb25zID0gZnVuY3Rpb24gZm9ybWF0SW5wdXRPcHRpb25zKGlucHV0T3B0aW9ucykge1xuICB2YXIgcmVzdWx0ID0gW107XG5cbiAgaWYgKHR5cGVvZiBNYXAgIT09ICd1bmRlZmluZWQnICYmIGlucHV0T3B0aW9ucyBpbnN0YW5jZW9mIE1hcCkge1xuICAgIGlucHV0T3B0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICByZXN1bHQucHVzaChba2V5LCB2YWx1ZV0pO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIE9iamVjdC5rZXlzKGlucHV0T3B0aW9ucykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXN1bHQucHVzaChba2V5LCBpbnB1dE9wdGlvbnNba2V5XV0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4vKipcbiAqIFN0YW5kYXJkaXNlIGNvbnNvbGUgd2FybmluZ3NcbiAqIEBwYXJhbSBtZXNzYWdlXG4gKi9cblxudmFyIHdhcm4gPSBmdW5jdGlvbiB3YXJuKG1lc3NhZ2UpIHtcbiAgY29uc29sZS53YXJuKFwiXCIuY29uY2F0KGNvbnNvbGVQcmVmaXgsIFwiIFwiKS5jb25jYXQobWVzc2FnZSkpO1xufTtcbi8qKlxuICogU3RhbmRhcmRpc2UgY29uc29sZSBlcnJvcnNcbiAqIEBwYXJhbSBtZXNzYWdlXG4gKi9cblxudmFyIGVycm9yID0gZnVuY3Rpb24gZXJyb3IobWVzc2FnZSkge1xuICBjb25zb2xlLmVycm9yKFwiXCIuY29uY2F0KGNvbnNvbGVQcmVmaXgsIFwiIFwiKS5jb25jYXQobWVzc2FnZSkpO1xufTtcbi8qKlxuICogUHJpdmF0ZSBnbG9iYWwgc3RhdGUgZm9yIGB3YXJuT25jZWBcbiAqIEB0eXBlIHtBcnJheX1cbiAqIEBwcml2YXRlXG4gKi9cblxudmFyIHByZXZpb3VzV2Fybk9uY2VNZXNzYWdlcyA9IFtdO1xuLyoqXG4gKiBTaG93IGEgY29uc29sZSB3YXJuaW5nLCBidXQgb25seSBpZiBpdCBoYXNuJ3QgYWxyZWFkeSBiZWVuIHNob3duXG4gKiBAcGFyYW0gbWVzc2FnZVxuICovXG5cbnZhciB3YXJuT25jZSA9IGZ1bmN0aW9uIHdhcm5PbmNlKG1lc3NhZ2UpIHtcbiAgaWYgKCEocHJldmlvdXNXYXJuT25jZU1lc3NhZ2VzLmluZGV4T2YobWVzc2FnZSkgIT09IC0xKSkge1xuICAgIHByZXZpb3VzV2Fybk9uY2VNZXNzYWdlcy5wdXNoKG1lc3NhZ2UpO1xuICAgIHdhcm4obWVzc2FnZSk7XG4gIH1cbn07XG4vKipcbiAqIElmIGBhcmdgIGlzIGEgZnVuY3Rpb24sIGNhbGwgaXQgKHdpdGggbm8gYXJndW1lbnRzIG9yIGNvbnRleHQpIGFuZCByZXR1cm4gdGhlIHJlc3VsdC5cbiAqIE90aGVyd2lzZSwganVzdCBwYXNzIHRoZSB2YWx1ZSB0aHJvdWdoXG4gKiBAcGFyYW0gYXJnXG4gKi9cblxudmFyIGNhbGxJZkZ1bmN0aW9uID0gZnVuY3Rpb24gY2FsbElmRnVuY3Rpb24oYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnZnVuY3Rpb24nID8gYXJnKCkgOiBhcmc7XG59O1xudmFyIGlzUHJvbWlzZSA9IGZ1bmN0aW9uIGlzUHJvbWlzZShhcmcpIHtcbiAgcmV0dXJuIGFyZyAmJiBQcm9taXNlLnJlc29sdmUoYXJnKSA9PT0gYXJnO1xufTtcblxudmFyIERpc21pc3NSZWFzb24gPSBPYmplY3QuZnJlZXplKHtcbiAgY2FuY2VsOiAnY2FuY2VsJyxcbiAgYmFja2Ryb3A6ICdiYWNrZHJvcCcsXG4gIGNsb3NlOiAnY2xvc2UnLFxuICBlc2M6ICdlc2MnLFxuICB0aW1lcjogJ3RpbWVyJ1xufSk7XG5cbnZhciBhcmdzVG9QYXJhbXMgPSBmdW5jdGlvbiBhcmdzVG9QYXJhbXMoYXJncykge1xuICB2YXIgcGFyYW1zID0ge307XG5cbiAgc3dpdGNoIChfdHlwZW9mKGFyZ3NbMF0pKSB7XG4gICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgIF9leHRlbmRzKHBhcmFtcywgYXJnc1swXSk7XG5cbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIFsndGl0bGUnLCAnaHRtbCcsICd0eXBlJ10uZm9yRWFjaChmdW5jdGlvbiAobmFtZSwgaW5kZXgpIHtcbiAgICAgICAgc3dpdGNoIChfdHlwZW9mKGFyZ3NbaW5kZXhdKSkge1xuICAgICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICBwYXJhbXNbbmFtZV0gPSBhcmdzW2luZGV4XTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAndW5kZWZpbmVkJzpcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGVycm9yKFwiVW5leHBlY3RlZCB0eXBlIG9mIFwiLmNvbmNhdChuYW1lLCBcIiEgRXhwZWN0ZWQgXFxcInN0cmluZ1xcXCIsIGdvdCBcIikuY29uY2F0KF90eXBlb2YoYXJnc1tpbmRleF0pKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHBhcmFtcztcbn07XG5cbnZhciBzd2FsUHJlZml4ID0gJ3N3YWwyLSc7XG52YXIgcHJlZml4ID0gZnVuY3Rpb24gcHJlZml4KGl0ZW1zKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcblxuICBmb3IgKHZhciBpIGluIGl0ZW1zKSB7XG4gICAgcmVzdWx0W2l0ZW1zW2ldXSA9IHN3YWxQcmVmaXggKyBpdGVtc1tpXTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xudmFyIHN3YWxDbGFzc2VzID0gcHJlZml4KFsnY29udGFpbmVyJywgJ3Nob3duJywgJ2hlaWdodC1hdXRvJywgJ2lvc2ZpeCcsICdwb3B1cCcsICdtb2RhbCcsICduby1iYWNrZHJvcCcsICd0b2FzdCcsICd0b2FzdC1zaG93bicsICd0b2FzdC1jb2x1bW4nLCAnZmFkZScsICdzaG93JywgJ2hpZGUnLCAnbm9hbmltYXRpb24nLCAnY2xvc2UnLCAndGl0bGUnLCAnaGVhZGVyJywgJ2NvbnRlbnQnLCAnYWN0aW9ucycsICdjb25maXJtJywgJ2NhbmNlbCcsICdmb290ZXInLCAnaWNvbicsICdpY29uLXRleHQnLCAnaW1hZ2UnLCAnaW5wdXQnLCAnZmlsZScsICdyYW5nZScsICdzZWxlY3QnLCAncmFkaW8nLCAnY2hlY2tib3gnLCAnbGFiZWwnLCAndGV4dGFyZWEnLCAnaW5wdXRlcnJvcicsICd2YWxpZGF0aW9uLW1lc3NhZ2UnLCAncHJvZ3Jlc3Mtc3RlcHMnLCAnYWN0aXZlLXByb2dyZXNzLXN0ZXAnLCAncHJvZ3Jlc3Mtc3RlcCcsICdwcm9ncmVzcy1zdGVwLWxpbmUnLCAnbG9hZGluZycsICdzdHlsZWQnLCAndG9wJywgJ3RvcC1zdGFydCcsICd0b3AtZW5kJywgJ3RvcC1sZWZ0JywgJ3RvcC1yaWdodCcsICdjZW50ZXInLCAnY2VudGVyLXN0YXJ0JywgJ2NlbnRlci1lbmQnLCAnY2VudGVyLWxlZnQnLCAnY2VudGVyLXJpZ2h0JywgJ2JvdHRvbScsICdib3R0b20tc3RhcnQnLCAnYm90dG9tLWVuZCcsICdib3R0b20tbGVmdCcsICdib3R0b20tcmlnaHQnLCAnZ3Jvdy1yb3cnLCAnZ3Jvdy1jb2x1bW4nLCAnZ3Jvdy1mdWxsc2NyZWVuJywgJ3J0bCddKTtcbnZhciBpY29uVHlwZXMgPSBwcmVmaXgoWydzdWNjZXNzJywgJ3dhcm5pbmcnLCAnaW5mbycsICdxdWVzdGlvbicsICdlcnJvciddKTtcblxudmFyIHN0YXRlcyA9IHtcbiAgcHJldmlvdXNCb2R5UGFkZGluZzogbnVsbFxufTtcbnZhciBoYXNDbGFzcyA9IGZ1bmN0aW9uIGhhc0NsYXNzKGVsZW0sIGNsYXNzTmFtZSkge1xuICByZXR1cm4gZWxlbS5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTtcbn07XG52YXIgZm9jdXNJbnB1dCA9IGZ1bmN0aW9uIGZvY3VzSW5wdXQoaW5wdXQpIHtcbiAgaW5wdXQuZm9jdXMoKTsgLy8gcGxhY2UgY3Vyc29yIGF0IGVuZCBvZiB0ZXh0IGluIHRleHQgaW5wdXRcblxuICBpZiAoaW5wdXQudHlwZSAhPT0gJ2ZpbGUnKSB7XG4gICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjM0NTkxNVxuICAgIHZhciB2YWwgPSBpbnB1dC52YWx1ZTtcbiAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICAgIGlucHV0LnZhbHVlID0gdmFsO1xuICB9XG59O1xuXG52YXIgYWRkT3JSZW1vdmVDbGFzcyA9IGZ1bmN0aW9uIGFkZE9yUmVtb3ZlQ2xhc3ModGFyZ2V0LCBjbGFzc0xpc3QsIGFkZCkge1xuICBpZiAoIXRhcmdldCB8fCAhY2xhc3NMaXN0KSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBjbGFzc0xpc3QgPT09ICdzdHJpbmcnKSB7XG4gICAgY2xhc3NMaXN0ID0gY2xhc3NMaXN0LnNwbGl0KC9cXHMrLykuZmlsdGVyKEJvb2xlYW4pO1xuICB9XG5cbiAgY2xhc3NMaXN0LmZvckVhY2goZnVuY3Rpb24gKGNsYXNzTmFtZSkge1xuICAgIGlmICh0YXJnZXQuZm9yRWFjaCkge1xuICAgICAgdGFyZ2V0LmZvckVhY2goZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgYWRkID8gZWxlbS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSkgOiBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBhZGQgPyB0YXJnZXQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpIDogdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICB9XG4gIH0pO1xufTtcblxudmFyIGFkZENsYXNzID0gZnVuY3Rpb24gYWRkQ2xhc3ModGFyZ2V0LCBjbGFzc0xpc3QpIHtcbiAgYWRkT3JSZW1vdmVDbGFzcyh0YXJnZXQsIGNsYXNzTGlzdCwgdHJ1ZSk7XG59O1xudmFyIHJlbW92ZUNsYXNzID0gZnVuY3Rpb24gcmVtb3ZlQ2xhc3ModGFyZ2V0LCBjbGFzc0xpc3QpIHtcbiAgYWRkT3JSZW1vdmVDbGFzcyh0YXJnZXQsIGNsYXNzTGlzdCwgZmFsc2UpO1xufTtcbnZhciBnZXRDaGlsZEJ5Q2xhc3MgPSBmdW5jdGlvbiBnZXRDaGlsZEJ5Q2xhc3MoZWxlbSwgY2xhc3NOYW1lKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZWxlbS5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGhhc0NsYXNzKGVsZW0uY2hpbGROb2Rlc1tpXSwgY2xhc3NOYW1lKSkge1xuICAgICAgcmV0dXJuIGVsZW0uY2hpbGROb2Rlc1tpXTtcbiAgICB9XG4gIH1cbn07XG52YXIgc2hvdyA9IGZ1bmN0aW9uIHNob3coZWxlbSkge1xuICBlbGVtLnN0eWxlLm9wYWNpdHkgPSAnJztcbiAgZWxlbS5zdHlsZS5kaXNwbGF5ID0gZWxlbS5pZCA9PT0gc3dhbENsYXNzZXMuY29udGVudCA/ICdibG9jaycgOiAnZmxleCc7XG59O1xudmFyIGhpZGUgPSBmdW5jdGlvbiBoaWRlKGVsZW0pIHtcbiAgZWxlbS5zdHlsZS5vcGFjaXR5ID0gJyc7XG4gIGVsZW0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn07IC8vIGJvcnJvd2VkIGZyb20ganF1ZXJ5ICQoZWxlbSkuaXMoJzp2aXNpYmxlJykgaW1wbGVtZW50YXRpb25cblxudmFyIGlzVmlzaWJsZSA9IGZ1bmN0aW9uIGlzVmlzaWJsZShlbGVtKSB7XG4gIHJldHVybiBlbGVtICYmIChlbGVtLm9mZnNldFdpZHRoIHx8IGVsZW0ub2Zmc2V0SGVpZ2h0IHx8IGVsZW0uZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGgpO1xufTtcbnZhciBjb250YWlucyA9IGZ1bmN0aW9uIGNvbnRhaW5zKGhheXN0YWNrLCBuZWVkbGUpIHtcbiAgaWYgKHR5cGVvZiBoYXlzdGFjay5jb250YWlucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBoYXlzdGFjay5jb250YWlucyhuZWVkbGUpO1xuICB9XG59O1xuXG52YXIgZ2V0Q29udGFpbmVyID0gZnVuY3Rpb24gZ2V0Q29udGFpbmVyKCkge1xuICByZXR1cm4gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKCcuJyArIHN3YWxDbGFzc2VzLmNvbnRhaW5lcik7XG59O1xuXG52YXIgZWxlbWVudEJ5U2VsZWN0b3IgPSBmdW5jdGlvbiBlbGVtZW50QnlTZWxlY3RvcihzZWxlY3RvclN0cmluZykge1xuICB2YXIgY29udGFpbmVyID0gZ2V0Q29udGFpbmVyKCk7XG4gIHJldHVybiBjb250YWluZXIgPyBjb250YWluZXIucXVlcnlTZWxlY3RvcihzZWxlY3RvclN0cmluZykgOiBudWxsO1xufTtcblxudmFyIGVsZW1lbnRCeUNsYXNzID0gZnVuY3Rpb24gZWxlbWVudEJ5Q2xhc3MoY2xhc3NOYW1lKSB7XG4gIHJldHVybiBlbGVtZW50QnlTZWxlY3RvcignLicgKyBjbGFzc05hbWUpO1xufTtcblxudmFyIGdldFBvcHVwID0gZnVuY3Rpb24gZ2V0UG9wdXAoKSB7XG4gIHJldHVybiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlcy5wb3B1cCk7XG59O1xudmFyIGdldEljb25zID0gZnVuY3Rpb24gZ2V0SWNvbnMoKSB7XG4gIHZhciBwb3B1cCA9IGdldFBvcHVwKCk7XG4gIHJldHVybiB0b0FycmF5KHBvcHVwLnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgc3dhbENsYXNzZXMuaWNvbikpO1xufTtcbnZhciBnZXRUaXRsZSA9IGZ1bmN0aW9uIGdldFRpdGxlKCkge1xuICByZXR1cm4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXMudGl0bGUpO1xufTtcbnZhciBnZXRDb250ZW50ID0gZnVuY3Rpb24gZ2V0Q29udGVudCgpIHtcbiAgcmV0dXJuIGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzLmNvbnRlbnQpO1xufTtcbnZhciBnZXRJbWFnZSA9IGZ1bmN0aW9uIGdldEltYWdlKCkge1xuICByZXR1cm4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXMuaW1hZ2UpO1xufTtcbnZhciBnZXRQcm9ncmVzc1N0ZXBzID0gZnVuY3Rpb24gZ2V0UHJvZ3Jlc3NTdGVwcygpIHtcbiAgcmV0dXJuIGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzWydwcm9ncmVzcy1zdGVwcyddKTtcbn07XG52YXIgZ2V0VmFsaWRhdGlvbk1lc3NhZ2UgPSBmdW5jdGlvbiBnZXRWYWxpZGF0aW9uTWVzc2FnZSgpIHtcbiAgcmV0dXJuIGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzWyd2YWxpZGF0aW9uLW1lc3NhZ2UnXSk7XG59O1xudmFyIGdldENvbmZpcm1CdXR0b24gPSBmdW5jdGlvbiBnZXRDb25maXJtQnV0dG9uKCkge1xuICByZXR1cm4gZWxlbWVudEJ5U2VsZWN0b3IoJy4nICsgc3dhbENsYXNzZXMuYWN0aW9ucyArICcgLicgKyBzd2FsQ2xhc3Nlcy5jb25maXJtKTtcbn07XG52YXIgZ2V0Q2FuY2VsQnV0dG9uID0gZnVuY3Rpb24gZ2V0Q2FuY2VsQnV0dG9uKCkge1xuICByZXR1cm4gZWxlbWVudEJ5U2VsZWN0b3IoJy4nICsgc3dhbENsYXNzZXMuYWN0aW9ucyArICcgLicgKyBzd2FsQ2xhc3Nlcy5jYW5jZWwpO1xufTtcbnZhciBnZXRBY3Rpb25zID0gZnVuY3Rpb24gZ2V0QWN0aW9ucygpIHtcbiAgcmV0dXJuIGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzLmFjdGlvbnMpO1xufTtcbnZhciBnZXRGb290ZXIgPSBmdW5jdGlvbiBnZXRGb290ZXIoKSB7XG4gIHJldHVybiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlcy5mb290ZXIpO1xufTtcbnZhciBnZXRDbG9zZUJ1dHRvbiA9IGZ1bmN0aW9uIGdldENsb3NlQnV0dG9uKCkge1xuICByZXR1cm4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXMuY2xvc2UpO1xufTtcbnZhciBnZXRGb2N1c2FibGVFbGVtZW50cyA9IGZ1bmN0aW9uIGdldEZvY3VzYWJsZUVsZW1lbnRzKCkge1xuICB2YXIgZm9jdXNhYmxlRWxlbWVudHNXaXRoVGFiaW5kZXggPSB0b0FycmF5KGdldFBvcHVwKCkucXVlcnlTZWxlY3RvckFsbCgnW3RhYmluZGV4XTpub3QoW3RhYmluZGV4PVwiLTFcIl0pOm5vdChbdGFiaW5kZXg9XCIwXCJdKScpKSAvLyBzb3J0IGFjY29yZGluZyB0byB0YWJpbmRleFxuICAuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgIGEgPSBwYXJzZUludChhLmdldEF0dHJpYnV0ZSgndGFiaW5kZXgnKSk7XG4gICAgYiA9IHBhcnNlSW50KGIuZ2V0QXR0cmlidXRlKCd0YWJpbmRleCcpKTtcblxuICAgIGlmIChhID4gYikge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfSBlbHNlIGlmIChhIDwgYikge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cblxuICAgIHJldHVybiAwO1xuICB9KTsgLy8gaHR0cHM6Ly9naXRodWIuY29tL2prdXAvZm9jdXNhYmxlL2Jsb2IvbWFzdGVyL2luZGV4LmpzXG5cbiAgdmFyIG90aGVyRm9jdXNhYmxlRWxlbWVudHMgPSB0b0FycmF5KGdldFBvcHVwKCkucXVlcnlTZWxlY3RvckFsbCgnYVtocmVmXSwgYXJlYVtocmVmXSwgaW5wdXQ6bm90KFtkaXNhYmxlZF0pLCBzZWxlY3Q6bm90KFtkaXNhYmxlZF0pLCB0ZXh0YXJlYTpub3QoW2Rpc2FibGVkXSksIGJ1dHRvbjpub3QoW2Rpc2FibGVkXSksIGlmcmFtZSwgb2JqZWN0LCBlbWJlZCwgW3RhYmluZGV4PVwiMFwiXSwgW2NvbnRlbnRlZGl0YWJsZV0sIGF1ZGlvW2NvbnRyb2xzXSwgdmlkZW9bY29udHJvbHNdJykpLmZpbHRlcihmdW5jdGlvbiAoZWwpIHtcbiAgICByZXR1cm4gZWwuZ2V0QXR0cmlidXRlKCd0YWJpbmRleCcpICE9PSAnLTEnO1xuICB9KTtcbiAgcmV0dXJuIHVuaXF1ZUFycmF5KGZvY3VzYWJsZUVsZW1lbnRzV2l0aFRhYmluZGV4LmNvbmNhdChvdGhlckZvY3VzYWJsZUVsZW1lbnRzKSkuZmlsdGVyKGZ1bmN0aW9uIChlbCkge1xuICAgIHJldHVybiBpc1Zpc2libGUoZWwpO1xuICB9KTtcbn07XG52YXIgaXNNb2RhbCA9IGZ1bmN0aW9uIGlzTW9kYWwoKSB7XG4gIHJldHVybiAhaXNUb2FzdCgpICYmICFkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhzd2FsQ2xhc3Nlc1snbm8tYmFja2Ryb3AnXSk7XG59O1xudmFyIGlzVG9hc3QgPSBmdW5jdGlvbiBpc1RvYXN0KCkge1xuICByZXR1cm4gZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoc3dhbENsYXNzZXNbJ3RvYXN0LXNob3duJ10pO1xufTtcbnZhciBpc0xvYWRpbmcgPSBmdW5jdGlvbiBpc0xvYWRpbmcoKSB7XG4gIHJldHVybiBnZXRQb3B1cCgpLmhhc0F0dHJpYnV0ZSgnZGF0YS1sb2FkaW5nJyk7XG59O1xuXG4vLyBEZXRlY3QgTm9kZSBlbnZcbnZhciBpc05vZGVFbnYgPSBmdW5jdGlvbiBpc05vZGVFbnYoKSB7XG4gIHJldHVybiB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnO1xufTtcblxudmFyIHN3ZWV0SFRNTCA9IFwiXFxuIDxkaXYgYXJpYS1sYWJlbGxlZGJ5PVxcXCJcIi5jb25jYXQoc3dhbENsYXNzZXMudGl0bGUsIFwiXFxcIiBhcmlhLWRlc2NyaWJlZGJ5PVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmNvbnRlbnQsIFwiXFxcIiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5wb3B1cCwgXCJcXFwiIHRhYmluZGV4PVxcXCItMVxcXCI+XFxuICAgPGRpdiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5oZWFkZXIsIFwiXFxcIj5cXG4gICAgIDx1bCBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlc1sncHJvZ3Jlc3Mtc3RlcHMnXSwgXCJcXFwiPjwvdWw+XFxuICAgICA8ZGl2IGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmljb24sIFwiIFwiKS5jb25jYXQoaWNvblR5cGVzLmVycm9yLCBcIlxcXCI+XFxuICAgICAgIDxzcGFuIGNsYXNzPVxcXCJzd2FsMi14LW1hcmtcXFwiPjxzcGFuIGNsYXNzPVxcXCJzd2FsMi14LW1hcmstbGluZS1sZWZ0XFxcIj48L3NwYW4+PHNwYW4gY2xhc3M9XFxcInN3YWwyLXgtbWFyay1saW5lLXJpZ2h0XFxcIj48L3NwYW4+PC9zcGFuPlxcbiAgICAgPC9kaXY+XFxuICAgICA8ZGl2IGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmljb24sIFwiIFwiKS5jb25jYXQoaWNvblR5cGVzLnF1ZXN0aW9uLCBcIlxcXCI+XFxuICAgICAgIDxzcGFuIGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzWydpY29uLXRleHQnXSwgXCJcXFwiPj88L3NwYW4+XFxuICAgICAgPC9kaXY+XFxuICAgICA8ZGl2IGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmljb24sIFwiIFwiKS5jb25jYXQoaWNvblR5cGVzLndhcm5pbmcsIFwiXFxcIj5cXG4gICAgICAgPHNwYW4gY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXNbJ2ljb24tdGV4dCddLCBcIlxcXCI+ITwvc3Bhbj5cXG4gICAgICA8L2Rpdj5cXG4gICAgIDxkaXYgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuaWNvbiwgXCIgXCIpLmNvbmNhdChpY29uVHlwZXMuaW5mbywgXCJcXFwiPlxcbiAgICAgICA8c3BhbiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlc1snaWNvbi10ZXh0J10sIFwiXFxcIj5pPC9zcGFuPlxcbiAgICAgIDwvZGl2PlxcbiAgICAgPGRpdiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5pY29uLCBcIiBcIikuY29uY2F0KGljb25UeXBlcy5zdWNjZXNzLCBcIlxcXCI+XFxuICAgICAgIDxkaXYgY2xhc3M9XFxcInN3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZS1sZWZ0XFxcIj48L2Rpdj5cXG4gICAgICAgPHNwYW4gY2xhc3M9XFxcInN3YWwyLXN1Y2Nlc3MtbGluZS10aXBcXFwiPjwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcInN3YWwyLXN1Y2Nlc3MtbGluZS1sb25nXFxcIj48L3NwYW4+XFxuICAgICAgIDxkaXYgY2xhc3M9XFxcInN3YWwyLXN1Y2Nlc3MtcmluZ1xcXCI+PC9kaXY+IDxkaXYgY2xhc3M9XFxcInN3YWwyLXN1Y2Nlc3MtZml4XFxcIj48L2Rpdj5cXG4gICAgICAgPGRpdiBjbGFzcz1cXFwic3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lLXJpZ2h0XFxcIj48L2Rpdj5cXG4gICAgIDwvZGl2PlxcbiAgICAgPGltZyBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5pbWFnZSwgXCJcXFwiIC8+XFxuICAgICA8aDIgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMudGl0bGUsIFwiXFxcIiBpZD1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy50aXRsZSwgXCJcXFwiPjwvaDI+XFxuICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuY2xvc2UsIFwiXFxcIj5cXHhENzwvYnV0dG9uPlxcbiAgIDwvZGl2PlxcbiAgIDxkaXYgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuY29udGVudCwgXCJcXFwiPlxcbiAgICAgPGRpdiBpZD1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5jb250ZW50LCBcIlxcXCI+PC9kaXY+XFxuICAgICA8aW5wdXQgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuaW5wdXQsIFwiXFxcIiAvPlxcbiAgICAgPGlucHV0IHR5cGU9XFxcImZpbGVcXFwiIGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmZpbGUsIFwiXFxcIiAvPlxcbiAgICAgPGRpdiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5yYW5nZSwgXCJcXFwiPlxcbiAgICAgICA8aW5wdXQgdHlwZT1cXFwicmFuZ2VcXFwiIC8+XFxuICAgICAgIDxvdXRwdXQ+PC9vdXRwdXQ+XFxuICAgICA8L2Rpdj5cXG4gICAgIDxzZWxlY3QgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuc2VsZWN0LCBcIlxcXCI+PC9zZWxlY3Q+XFxuICAgICA8ZGl2IGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLnJhZGlvLCBcIlxcXCI+PC9kaXY+XFxuICAgICA8bGFiZWwgZm9yPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmNoZWNrYm94LCBcIlxcXCIgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuY2hlY2tib3gsIFwiXFxcIj5cXG4gICAgICAgPGlucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIiAvPlxcbiAgICAgICA8c3BhbiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5sYWJlbCwgXCJcXFwiPjwvc3Bhbj5cXG4gICAgIDwvbGFiZWw+XFxuICAgICA8dGV4dGFyZWEgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMudGV4dGFyZWEsIFwiXFxcIj48L3RleHRhcmVhPlxcbiAgICAgPGRpdiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlc1sndmFsaWRhdGlvbi1tZXNzYWdlJ10sIFwiXFxcIiBpZD1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlc1sndmFsaWRhdGlvbi1tZXNzYWdlJ10sIFwiXFxcIj48L2Rpdj5cXG4gICA8L2Rpdj5cXG4gICA8ZGl2IGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmFjdGlvbnMsIFwiXFxcIj5cXG4gICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5jb25maXJtLCBcIlxcXCI+T0s8L2J1dHRvbj5cXG4gICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5jYW5jZWwsIFwiXFxcIj5DYW5jZWw8L2J1dHRvbj5cXG4gICA8L2Rpdj5cXG4gICA8ZGl2IGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmZvb3RlciwgXCJcXFwiPlxcbiAgIDwvZGl2PlxcbiA8L2Rpdj5cXG5cIikucmVwbGFjZSgvKF58XFxuKVxccyovZywgJycpO1xuLypcbiAqIEFkZCBtb2RhbCArIGJhY2tkcm9wIHRvIERPTVxuICovXG5cbnZhciBpbml0ID0gZnVuY3Rpb24gaW5pdChwYXJhbXMpIHtcbiAgLy8gQ2xlYW4gdXAgdGhlIG9sZCBwb3B1cCBpZiBpdCBleGlzdHNcbiAgdmFyIGMgPSBnZXRDb250YWluZXIoKTtcblxuICBpZiAoYykge1xuICAgIGMucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjKTtcbiAgICByZW1vdmVDbGFzcyhbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBkb2N1bWVudC5ib2R5XSwgW3N3YWxDbGFzc2VzWyduby1iYWNrZHJvcCddLCBzd2FsQ2xhc3Nlc1sndG9hc3Qtc2hvd24nXSwgc3dhbENsYXNzZXNbJ2hhcy1jb2x1bW4nXV0pO1xuICB9XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuXG5cbiAgaWYgKGlzTm9kZUVudigpKSB7XG4gICAgZXJyb3IoJ1N3ZWV0QWxlcnQyIHJlcXVpcmVzIGRvY3VtZW50IHRvIGluaXRpYWxpemUnKTtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhaW5lci5jbGFzc05hbWUgPSBzd2FsQ2xhc3Nlcy5jb250YWluZXI7XG4gIGNvbnRhaW5lci5pbm5lckhUTUwgPSBzd2VldEhUTUw7XG4gIHZhciB0YXJnZXRFbGVtZW50ID0gdHlwZW9mIHBhcmFtcy50YXJnZXQgPT09ICdzdHJpbmcnID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihwYXJhbXMudGFyZ2V0KSA6IHBhcmFtcy50YXJnZXQ7XG4gIHRhcmdldEVsZW1lbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgdmFyIHBvcHVwID0gZ2V0UG9wdXAoKTtcbiAgdmFyIGNvbnRlbnQgPSBnZXRDb250ZW50KCk7XG4gIHZhciBpbnB1dCA9IGdldENoaWxkQnlDbGFzcyhjb250ZW50LCBzd2FsQ2xhc3Nlcy5pbnB1dCk7XG4gIHZhciBmaWxlID0gZ2V0Q2hpbGRCeUNsYXNzKGNvbnRlbnQsIHN3YWxDbGFzc2VzLmZpbGUpO1xuICB2YXIgcmFuZ2UgPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KHN3YWxDbGFzc2VzLnJhbmdlLCBcIiBpbnB1dFwiKSk7XG4gIHZhciByYW5nZU91dHB1dCA9IGNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi5cIi5jb25jYXQoc3dhbENsYXNzZXMucmFuZ2UsIFwiIG91dHB1dFwiKSk7XG4gIHZhciBzZWxlY3QgPSBnZXRDaGlsZEJ5Q2xhc3MoY29udGVudCwgc3dhbENsYXNzZXMuc2VsZWN0KTtcbiAgdmFyIGNoZWNrYm94ID0gY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLlwiLmNvbmNhdChzd2FsQ2xhc3Nlcy5jaGVja2JveCwgXCIgaW5wdXRcIikpO1xuICB2YXIgdGV4dGFyZWEgPSBnZXRDaGlsZEJ5Q2xhc3MoY29udGVudCwgc3dhbENsYXNzZXMudGV4dGFyZWEpOyAvLyBhMTF5XG5cbiAgcG9wdXAuc2V0QXR0cmlidXRlKCdyb2xlJywgcGFyYW1zLnRvYXN0ID8gJ2FsZXJ0JyA6ICdkaWFsb2cnKTtcbiAgcG9wdXAuc2V0QXR0cmlidXRlKCdhcmlhLWxpdmUnLCBwYXJhbXMudG9hc3QgPyAncG9saXRlJyA6ICdhc3NlcnRpdmUnKTtcblxuICBpZiAoIXBhcmFtcy50b2FzdCkge1xuICAgIHBvcHVwLnNldEF0dHJpYnV0ZSgnYXJpYS1tb2RhbCcsICd0cnVlJyk7XG4gIH0gLy8gUlRMXG5cblxuICBpZiAod2luZG93LmdldENvbXB1dGVkU3R5bGUodGFyZ2V0RWxlbWVudCkuZGlyZWN0aW9uID09PSAncnRsJykge1xuICAgIGFkZENsYXNzKGdldENvbnRhaW5lcigpLCBzd2FsQ2xhc3Nlcy5ydGwpO1xuICB9XG5cbiAgdmFyIG9sZElucHV0VmFsOyAvLyBJRTExIHdvcmthcm91bmQsIHNlZSAjMTEwOSBmb3IgZGV0YWlsc1xuXG4gIHZhciByZXNldFZhbGlkYXRpb25NZXNzYWdlID0gZnVuY3Rpb24gcmVzZXRWYWxpZGF0aW9uTWVzc2FnZShlKSB7XG4gICAgaWYgKFN3YWwuaXNWaXNpYmxlKCkgJiYgb2xkSW5wdXRWYWwgIT09IGUudGFyZ2V0LnZhbHVlKSB7XG4gICAgICBTd2FsLnJlc2V0VmFsaWRhdGlvbk1lc3NhZ2UoKTtcbiAgICB9XG5cbiAgICBvbGRJbnB1dFZhbCA9IGUudGFyZ2V0LnZhbHVlO1xuICB9O1xuXG4gIGlucHV0Lm9uaW5wdXQgPSByZXNldFZhbGlkYXRpb25NZXNzYWdlO1xuICBmaWxlLm9uY2hhbmdlID0gcmVzZXRWYWxpZGF0aW9uTWVzc2FnZTtcbiAgc2VsZWN0Lm9uY2hhbmdlID0gcmVzZXRWYWxpZGF0aW9uTWVzc2FnZTtcbiAgY2hlY2tib3gub25jaGFuZ2UgPSByZXNldFZhbGlkYXRpb25NZXNzYWdlO1xuICB0ZXh0YXJlYS5vbmlucHV0ID0gcmVzZXRWYWxpZGF0aW9uTWVzc2FnZTtcblxuICByYW5nZS5vbmlucHV0ID0gZnVuY3Rpb24gKGUpIHtcbiAgICByZXNldFZhbGlkYXRpb25NZXNzYWdlKGUpO1xuICAgIHJhbmdlT3V0cHV0LnZhbHVlID0gcmFuZ2UudmFsdWU7XG4gIH07XG5cbiAgcmFuZ2Uub25jaGFuZ2UgPSBmdW5jdGlvbiAoZSkge1xuICAgIHJlc2V0VmFsaWRhdGlvbk1lc3NhZ2UoZSk7XG4gICAgcmFuZ2UubmV4dFNpYmxpbmcudmFsdWUgPSByYW5nZS52YWx1ZTtcbiAgfTtcblxuICByZXR1cm4gcG9wdXA7XG59O1xuXG52YXIgcGFyc2VIdG1sVG9Db250YWluZXIgPSBmdW5jdGlvbiBwYXJzZUh0bWxUb0NvbnRhaW5lcihwYXJhbSwgdGFyZ2V0KSB7XG4gIGlmICghcGFyYW0pIHtcbiAgICByZXR1cm4gaGlkZSh0YXJnZXQpO1xuICB9IC8vIERPTSBlbGVtZW50XG5cblxuICBpZiAocGFyYW0gaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgIHRhcmdldC5hcHBlbmRDaGlsZChwYXJhbSk7IC8vIEpRdWVyeSBlbGVtZW50KHMpXG4gIH0gZWxzZSBpZiAoX3R5cGVvZihwYXJhbSkgPT09ICdvYmplY3QnKSB7XG4gICAgdGFyZ2V0LmlubmVySFRNTCA9ICcnO1xuXG4gICAgaWYgKDAgaW4gcGFyYW0pIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIGluIHBhcmFtOyBpKyspIHtcbiAgICAgICAgdGFyZ2V0LmFwcGVuZENoaWxkKHBhcmFtW2ldLmNsb25lTm9kZSh0cnVlKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhcmdldC5hcHBlbmRDaGlsZChwYXJhbS5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChwYXJhbSkge1xuICAgIHRhcmdldC5pbm5lckhUTUwgPSBwYXJhbTtcbiAgfVxuXG4gIHNob3codGFyZ2V0KTtcbn07XG5cbnZhciBhbmltYXRpb25FbmRFdmVudCA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gUHJldmVudCBydW4gaW4gTm9kZSBlbnZcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKGlzTm9kZUVudigpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHRlc3RFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB2YXIgdHJhbnNFbmRFdmVudE5hbWVzID0ge1xuICAgICdXZWJraXRBbmltYXRpb24nOiAnd2Via2l0QW5pbWF0aW9uRW5kJyxcbiAgICAnT0FuaW1hdGlvbic6ICdvQW5pbWF0aW9uRW5kIG9hbmltYXRpb25lbmQnLFxuICAgICdhbmltYXRpb24nOiAnYW5pbWF0aW9uZW5kJ1xuICB9O1xuXG4gIGZvciAodmFyIGkgaW4gdHJhbnNFbmRFdmVudE5hbWVzKSB7XG4gICAgaWYgKHRyYW5zRW5kRXZlbnROYW1lcy5oYXNPd25Qcm9wZXJ0eShpKSAmJiB0eXBlb2YgdGVzdEVsLnN0eWxlW2ldICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIHRyYW5zRW5kRXZlbnROYW1lc1tpXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59KCk7XG5cbi8vIE1lYXN1cmUgd2lkdGggb2Ygc2Nyb2xsYmFyXG4vLyBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvanMvbW9kYWwuanMjTDI3OS1MMjg2XG52YXIgbWVhc3VyZVNjcm9sbGJhciA9IGZ1bmN0aW9uIG1lYXN1cmVTY3JvbGxiYXIoKSB7XG4gIHZhciBzdXBwb3J0c1RvdWNoID0gJ29udG91Y2hzdGFydCcgaW4gd2luZG93IHx8IG5hdmlnYXRvci5tc01heFRvdWNoUG9pbnRzO1xuXG4gIGlmIChzdXBwb3J0c1RvdWNoKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICB2YXIgc2Nyb2xsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNjcm9sbERpdi5zdHlsZS53aWR0aCA9ICc1MHB4JztcbiAgc2Nyb2xsRGl2LnN0eWxlLmhlaWdodCA9ICc1MHB4JztcbiAgc2Nyb2xsRGl2LnN0eWxlLm92ZXJmbG93ID0gJ3Njcm9sbCc7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2Nyb2xsRGl2KTtcbiAgdmFyIHNjcm9sbGJhcldpZHRoID0gc2Nyb2xsRGl2Lm9mZnNldFdpZHRoIC0gc2Nyb2xsRGl2LmNsaWVudFdpZHRoO1xuICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHNjcm9sbERpdik7XG4gIHJldHVybiBzY3JvbGxiYXJXaWR0aDtcbn07XG5cbnZhciByZW5kZXJBY3Rpb25zID0gZnVuY3Rpb24gcmVuZGVyQWN0aW9ucyhwYXJhbXMpIHtcbiAgdmFyIGFjdGlvbnMgPSBnZXRBY3Rpb25zKCk7XG4gIHZhciBjb25maXJtQnV0dG9uID0gZ2V0Q29uZmlybUJ1dHRvbigpO1xuICB2YXIgY2FuY2VsQnV0dG9uID0gZ2V0Q2FuY2VsQnV0dG9uKCk7IC8vIEFjdGlvbnMgKGJ1dHRvbnMpIHdyYXBwZXJcblxuICBpZiAoIXBhcmFtcy5zaG93Q29uZmlybUJ1dHRvbiAmJiAhcGFyYW1zLnNob3dDYW5jZWxCdXR0b24pIHtcbiAgICBoaWRlKGFjdGlvbnMpO1xuICB9IGVsc2Uge1xuICAgIHNob3coYWN0aW9ucyk7XG4gIH0gLy8gQ2FuY2VsIGJ1dHRvblxuXG5cbiAgaWYgKHBhcmFtcy5zaG93Q2FuY2VsQnV0dG9uKSB7XG4gICAgY2FuY2VsQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcbiAgfSBlbHNlIHtcbiAgICBoaWRlKGNhbmNlbEJ1dHRvbik7XG4gIH0gLy8gQ29uZmlybSBidXR0b25cblxuXG4gIGlmIChwYXJhbXMuc2hvd0NvbmZpcm1CdXR0b24pIHtcbiAgICBjb25maXJtQnV0dG9uLnN0eWxlLnJlbW92ZVByb3BlcnR5KCdkaXNwbGF5Jyk7XG4gIH0gZWxzZSB7XG4gICAgaGlkZShjb25maXJtQnV0dG9uKTtcbiAgfSAvLyBFZGl0IHRleHQgb24gY29uZmlybSBhbmQgY2FuY2VsIGJ1dHRvbnNcblxuXG4gIGNvbmZpcm1CdXR0b24uaW5uZXJIVE1MID0gcGFyYW1zLmNvbmZpcm1CdXR0b25UZXh0O1xuICBjYW5jZWxCdXR0b24uaW5uZXJIVE1MID0gcGFyYW1zLmNhbmNlbEJ1dHRvblRleHQ7IC8vIEFSSUEgbGFiZWxzIGZvciBjb25maXJtIGFuZCBjYW5jZWwgYnV0dG9uc1xuXG4gIGNvbmZpcm1CdXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgcGFyYW1zLmNvbmZpcm1CdXR0b25BcmlhTGFiZWwpO1xuICBjYW5jZWxCdXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgcGFyYW1zLmNhbmNlbEJ1dHRvbkFyaWFMYWJlbCk7IC8vIEFkZCBidXR0b25zIGN1c3RvbSBjbGFzc2VzXG5cbiAgY29uZmlybUJ1dHRvbi5jbGFzc05hbWUgPSBzd2FsQ2xhc3Nlcy5jb25maXJtO1xuICBhZGRDbGFzcyhjb25maXJtQnV0dG9uLCBwYXJhbXMuY29uZmlybUJ1dHRvbkNsYXNzKTtcbiAgY2FuY2VsQnV0dG9uLmNsYXNzTmFtZSA9IHN3YWxDbGFzc2VzLmNhbmNlbDtcbiAgYWRkQ2xhc3MoY2FuY2VsQnV0dG9uLCBwYXJhbXMuY2FuY2VsQnV0dG9uQ2xhc3MpOyAvLyBCdXR0b25zIHN0eWxpbmdcblxuICBpZiAocGFyYW1zLmJ1dHRvbnNTdHlsaW5nKSB7XG4gICAgYWRkQ2xhc3MoW2NvbmZpcm1CdXR0b24sIGNhbmNlbEJ1dHRvbl0sIHN3YWxDbGFzc2VzLnN0eWxlZCk7IC8vIEJ1dHRvbnMgYmFja2dyb3VuZCBjb2xvcnNcblxuICAgIGlmIChwYXJhbXMuY29uZmlybUJ1dHRvbkNvbG9yKSB7XG4gICAgICBjb25maXJtQnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHBhcmFtcy5jb25maXJtQnV0dG9uQ29sb3I7XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcy5jYW5jZWxCdXR0b25Db2xvcikge1xuICAgICAgY2FuY2VsQnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHBhcmFtcy5jYW5jZWxCdXR0b25Db2xvcjtcbiAgICB9IC8vIExvYWRpbmcgc3RhdGVcblxuXG4gICAgdmFyIGNvbmZpcm1CdXR0b25CYWNrZ3JvdW5kQ29sb3IgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShjb25maXJtQnV0dG9uKS5nZXRQcm9wZXJ0eVZhbHVlKCdiYWNrZ3JvdW5kLWNvbG9yJyk7XG4gICAgY29uZmlybUJ1dHRvbi5zdHlsZS5ib3JkZXJMZWZ0Q29sb3IgPSBjb25maXJtQnV0dG9uQmFja2dyb3VuZENvbG9yO1xuICAgIGNvbmZpcm1CdXR0b24uc3R5bGUuYm9yZGVyUmlnaHRDb2xvciA9IGNvbmZpcm1CdXR0b25CYWNrZ3JvdW5kQ29sb3I7XG4gIH0gZWxzZSB7XG4gICAgcmVtb3ZlQ2xhc3MoW2NvbmZpcm1CdXR0b24sIGNhbmNlbEJ1dHRvbl0sIHN3YWxDbGFzc2VzLnN0eWxlZCk7XG4gICAgY29uZmlybUJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb25maXJtQnV0dG9uLnN0eWxlLmJvcmRlckxlZnRDb2xvciA9IGNvbmZpcm1CdXR0b24uc3R5bGUuYm9yZGVyUmlnaHRDb2xvciA9ICcnO1xuICAgIGNhbmNlbEJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjYW5jZWxCdXR0b24uc3R5bGUuYm9yZGVyTGVmdENvbG9yID0gY2FuY2VsQnV0dG9uLnN0eWxlLmJvcmRlclJpZ2h0Q29sb3IgPSAnJztcbiAgfVxufTtcblxudmFyIHJlbmRlckNvbnRlbnQgPSBmdW5jdGlvbiByZW5kZXJDb250ZW50KHBhcmFtcykge1xuICB2YXIgY29udGVudCA9IGdldENvbnRlbnQoKS5xdWVyeVNlbGVjdG9yKCcjJyArIHN3YWxDbGFzc2VzLmNvbnRlbnQpOyAvLyBDb250ZW50IGFzIEhUTUxcblxuICBpZiAocGFyYW1zLmh0bWwpIHtcbiAgICBwYXJzZUh0bWxUb0NvbnRhaW5lcihwYXJhbXMuaHRtbCwgY29udGVudCk7IC8vIENvbnRlbnQgYXMgcGxhaW4gdGV4dFxuICB9IGVsc2UgaWYgKHBhcmFtcy50ZXh0KSB7XG4gICAgY29udGVudC50ZXh0Q29udGVudCA9IHBhcmFtcy50ZXh0O1xuICAgIHNob3coY29udGVudCk7XG4gIH0gZWxzZSB7XG4gICAgaGlkZShjb250ZW50KTtcbiAgfVxufTtcblxudmFyIHJlbmRlckljb24gPSBmdW5jdGlvbiByZW5kZXJJY29uKHBhcmFtcykge1xuICB2YXIgaWNvbnMgPSBnZXRJY29ucygpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgaWNvbnMubGVuZ3RoOyBpKyspIHtcbiAgICBoaWRlKGljb25zW2ldKTtcbiAgfVxuXG4gIGlmIChwYXJhbXMudHlwZSkge1xuICAgIGlmIChPYmplY3Qua2V5cyhpY29uVHlwZXMpLmluZGV4T2YocGFyYW1zLnR5cGUpICE9PSAtMSkge1xuICAgICAgdmFyIGljb24gPSBTd2FsLmdldFBvcHVwKCkucXVlcnlTZWxlY3RvcihcIi5cIi5jb25jYXQoc3dhbENsYXNzZXMuaWNvbiwgXCIuXCIpLmNvbmNhdChpY29uVHlwZXNbcGFyYW1zLnR5cGVdKSk7XG4gICAgICBzaG93KGljb24pOyAvLyBBbmltYXRlIGljb25cblxuICAgICAgaWYgKHBhcmFtcy5hbmltYXRpb24pIHtcbiAgICAgICAgYWRkQ2xhc3MoaWNvbiwgXCJzd2FsMi1hbmltYXRlLVwiLmNvbmNhdChwYXJhbXMudHlwZSwgXCItaWNvblwiKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGVycm9yKFwiVW5rbm93biB0eXBlISBFeHBlY3RlZCBcXFwic3VjY2Vzc1xcXCIsIFxcXCJlcnJvclxcXCIsIFxcXCJ3YXJuaW5nXFxcIiwgXFxcImluZm9cXFwiIG9yIFxcXCJxdWVzdGlvblxcXCIsIGdvdCBcXFwiXCIuY29uY2F0KHBhcmFtcy50eXBlLCBcIlxcXCJcIikpO1xuICAgIH1cbiAgfVxufTtcblxudmFyIHJlbmRlckltYWdlID0gZnVuY3Rpb24gcmVuZGVySW1hZ2UocGFyYW1zKSB7XG4gIHZhciBpbWFnZSA9IGdldEltYWdlKCk7XG5cbiAgaWYgKHBhcmFtcy5pbWFnZVVybCkge1xuICAgIGltYWdlLnNldEF0dHJpYnV0ZSgnc3JjJywgcGFyYW1zLmltYWdlVXJsKTtcbiAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoJ2FsdCcsIHBhcmFtcy5pbWFnZUFsdCk7XG4gICAgc2hvdyhpbWFnZSk7XG5cbiAgICBpZiAocGFyYW1zLmltYWdlV2lkdGgpIHtcbiAgICAgIGltYWdlLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCBwYXJhbXMuaW1hZ2VXaWR0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGltYWdlLnJlbW92ZUF0dHJpYnV0ZSgnd2lkdGgnKTtcbiAgICB9XG5cbiAgICBpZiAocGFyYW1zLmltYWdlSGVpZ2h0KSB7XG4gICAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIHBhcmFtcy5pbWFnZUhlaWdodCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGltYWdlLnJlbW92ZUF0dHJpYnV0ZSgnaGVpZ2h0Jyk7XG4gICAgfVxuXG4gICAgaW1hZ2UuY2xhc3NOYW1lID0gc3dhbENsYXNzZXMuaW1hZ2U7XG5cbiAgICBpZiAocGFyYW1zLmltYWdlQ2xhc3MpIHtcbiAgICAgIGFkZENsYXNzKGltYWdlLCBwYXJhbXMuaW1hZ2VDbGFzcyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGhpZGUoaW1hZ2UpO1xuICB9XG59O1xuXG52YXIgcmVuZGVyUHJvZ3Jlc3NTdGVwcyA9IGZ1bmN0aW9uIHJlbmRlclByb2dyZXNzU3RlcHMocGFyYW1zKSB7XG4gIHZhciBwcm9ncmVzc1N0ZXBzQ29udGFpbmVyID0gZ2V0UHJvZ3Jlc3NTdGVwcygpO1xuICB2YXIgY3VycmVudFByb2dyZXNzU3RlcCA9IHBhcnNlSW50KHBhcmFtcy5jdXJyZW50UHJvZ3Jlc3NTdGVwID09PSBudWxsID8gU3dhbC5nZXRRdWV1ZVN0ZXAoKSA6IHBhcmFtcy5jdXJyZW50UHJvZ3Jlc3NTdGVwLCAxMCk7XG5cbiAgaWYgKHBhcmFtcy5wcm9ncmVzc1N0ZXBzICYmIHBhcmFtcy5wcm9ncmVzc1N0ZXBzLmxlbmd0aCkge1xuICAgIHNob3cocHJvZ3Jlc3NTdGVwc0NvbnRhaW5lcik7XG4gICAgcHJvZ3Jlc3NTdGVwc0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcblxuICAgIGlmIChjdXJyZW50UHJvZ3Jlc3NTdGVwID49IHBhcmFtcy5wcm9ncmVzc1N0ZXBzLmxlbmd0aCkge1xuICAgICAgd2FybignSW52YWxpZCBjdXJyZW50UHJvZ3Jlc3NTdGVwIHBhcmFtZXRlciwgaXQgc2hvdWxkIGJlIGxlc3MgdGhhbiBwcm9ncmVzc1N0ZXBzLmxlbmd0aCAnICsgJyhjdXJyZW50UHJvZ3Jlc3NTdGVwIGxpa2UgSlMgYXJyYXlzIHN0YXJ0cyBmcm9tIDApJyk7XG4gICAgfVxuXG4gICAgcGFyYW1zLnByb2dyZXNzU3RlcHMuZm9yRWFjaChmdW5jdGlvbiAoc3RlcCwgaW5kZXgpIHtcbiAgICAgIHZhciBzdGVwRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgYWRkQ2xhc3Moc3RlcEVsLCBzd2FsQ2xhc3Nlc1sncHJvZ3Jlc3Mtc3RlcCddKTtcbiAgICAgIHN0ZXBFbC5pbm5lckhUTUwgPSBzdGVwO1xuXG4gICAgICBpZiAoaW5kZXggPT09IGN1cnJlbnRQcm9ncmVzc1N0ZXApIHtcbiAgICAgICAgYWRkQ2xhc3Moc3RlcEVsLCBzd2FsQ2xhc3Nlc1snYWN0aXZlLXByb2dyZXNzLXN0ZXAnXSk7XG4gICAgICB9XG5cbiAgICAgIHByb2dyZXNzU3RlcHNDb250YWluZXIuYXBwZW5kQ2hpbGQoc3RlcEVsKTtcblxuICAgICAgaWYgKGluZGV4ICE9PSBwYXJhbXMucHJvZ3Jlc3NTdGVwcy5sZW5ndGggLSAxKSB7XG4gICAgICAgIHZhciBsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgYWRkQ2xhc3MobGluZSwgc3dhbENsYXNzZXNbJ3Byb2dyZXNzLXN0ZXAtbGluZSddKTtcblxuICAgICAgICBpZiAocGFyYW1zLnByb2dyZXNzU3RlcHNEaXN0YW5jZSkge1xuICAgICAgICAgIGxpbmUuc3R5bGUud2lkdGggPSBwYXJhbXMucHJvZ3Jlc3NTdGVwc0Rpc3RhbmNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJvZ3Jlc3NTdGVwc0NvbnRhaW5lci5hcHBlbmRDaGlsZChsaW5lKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBoaWRlKHByb2dyZXNzU3RlcHNDb250YWluZXIpO1xuICB9XG59O1xuXG52YXIgcmVuZGVyVGl0bGUgPSBmdW5jdGlvbiByZW5kZXJUaXRsZShwYXJhbXMpIHtcbiAgdmFyIHRpdGxlID0gZ2V0VGl0bGUoKTtcblxuICBpZiAocGFyYW1zLnRpdGxlVGV4dCkge1xuICAgIHRpdGxlLmlubmVyVGV4dCA9IHBhcmFtcy50aXRsZVRleHQ7XG4gIH0gZWxzZSBpZiAocGFyYW1zLnRpdGxlKSB7XG4gICAgaWYgKHR5cGVvZiBwYXJhbXMudGl0bGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBwYXJhbXMudGl0bGUgPSBwYXJhbXMudGl0bGUuc3BsaXQoJ1xcbicpLmpvaW4oJzxiciAvPicpO1xuICAgIH1cblxuICAgIHBhcnNlSHRtbFRvQ29udGFpbmVyKHBhcmFtcy50aXRsZSwgdGl0bGUpO1xuICB9XG59O1xuXG4vKlxuICogR2xvYmFsIGZ1bmN0aW9uIHRvIGRldGVybWluZSBpZiBTd2VldEFsZXJ0MiBwb3B1cCBpcyBzaG93blxuICovXG5cbnZhciBpc1Zpc2libGUkMSA9IGZ1bmN0aW9uIGlzVmlzaWJsZSgpIHtcbiAgcmV0dXJuICEhZ2V0UG9wdXAoKTtcbn07XG4vKlxuICogR2xvYmFsIGZ1bmN0aW9uIHRvIGNsaWNrICdDb25maXJtJyBidXR0b25cbiAqL1xuXG52YXIgY2xpY2tDb25maXJtID0gZnVuY3Rpb24gY2xpY2tDb25maXJtKCkge1xuICByZXR1cm4gZ2V0Q29uZmlybUJ1dHRvbigpLmNsaWNrKCk7XG59O1xuLypcbiAqIEdsb2JhbCBmdW5jdGlvbiB0byBjbGljayAnQ2FuY2VsJyBidXR0b25cbiAqL1xuXG52YXIgY2xpY2tDYW5jZWwgPSBmdW5jdGlvbiBjbGlja0NhbmNlbCgpIHtcbiAgcmV0dXJuIGdldENhbmNlbEJ1dHRvbigpLmNsaWNrKCk7XG59O1xuXG5mdW5jdGlvbiBmaXJlKCkge1xuICB2YXIgU3dhbCA9IHRoaXM7XG5cbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBfY29uc3RydWN0KFN3YWwsIGFyZ3MpO1xufVxuXG4vKipcbiAqIFJldHVybnMgYW4gZXh0ZW5kZWQgdmVyc2lvbiBvZiBgU3dhbGAgY29udGFpbmluZyBgcGFyYW1zYCBhcyBkZWZhdWx0cy5cbiAqIFVzZWZ1bCBmb3IgcmV1c2luZyBTd2FsIGNvbmZpZ3VyYXRpb24uXG4gKlxuICogRm9yIGV4YW1wbGU6XG4gKlxuICogQmVmb3JlOlxuICogY29uc3QgdGV4dFByb21wdE9wdGlvbnMgPSB7IGlucHV0OiAndGV4dCcsIHNob3dDYW5jZWxCdXR0b246IHRydWUgfVxuICogY29uc3Qge3ZhbHVlOiBmaXJzdE5hbWV9ID0gYXdhaXQgU3dhbC5maXJlKHsgLi4udGV4dFByb21wdE9wdGlvbnMsIHRpdGxlOiAnV2hhdCBpcyB5b3VyIGZpcnN0IG5hbWU/JyB9KVxuICogY29uc3Qge3ZhbHVlOiBsYXN0TmFtZX0gPSBhd2FpdCBTd2FsLmZpcmUoeyAuLi50ZXh0UHJvbXB0T3B0aW9ucywgdGl0bGU6ICdXaGF0IGlzIHlvdXIgbGFzdCBuYW1lPycgfSlcbiAqXG4gKiBBZnRlcjpcbiAqIGNvbnN0IFRleHRQcm9tcHQgPSBTd2FsLm1peGluKHsgaW5wdXQ6ICd0ZXh0Jywgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSB9KVxuICogY29uc3Qge3ZhbHVlOiBmaXJzdE5hbWV9ID0gYXdhaXQgVGV4dFByb21wdCgnV2hhdCBpcyB5b3VyIGZpcnN0IG5hbWU/JylcbiAqIGNvbnN0IHt2YWx1ZTogbGFzdE5hbWV9ID0gYXdhaXQgVGV4dFByb21wdCgnV2hhdCBpcyB5b3VyIGxhc3QgbmFtZT8nKVxuICpcbiAqIEBwYXJhbSBtaXhpblBhcmFtc1xuICovXG5mdW5jdGlvbiBtaXhpbihtaXhpblBhcmFtcykge1xuICB2YXIgTWl4aW5Td2FsID1cbiAgLyojX19QVVJFX18qL1xuICBmdW5jdGlvbiAoX3RoaXMpIHtcbiAgICBfaW5oZXJpdHMoTWl4aW5Td2FsLCBfdGhpcyk7XG5cbiAgICBmdW5jdGlvbiBNaXhpblN3YWwoKSB7XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWl4aW5Td2FsKTtcblxuICAgICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihNaXhpblN3YWwpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhNaXhpblN3YWwsIFt7XG4gICAgICBrZXk6IFwiX21haW5cIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfbWFpbihwYXJhbXMpIHtcbiAgICAgICAgcmV0dXJuIF9nZXQoX2dldFByb3RvdHlwZU9mKE1peGluU3dhbC5wcm90b3R5cGUpLCBcIl9tYWluXCIsIHRoaXMpLmNhbGwodGhpcywgX2V4dGVuZHMoe30sIG1peGluUGFyYW1zLCBwYXJhbXMpKTtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gTWl4aW5Td2FsO1xuICB9KHRoaXMpO1xuXG4gIHJldHVybiBNaXhpblN3YWw7XG59XG5cbi8vIHByaXZhdGUgZ2xvYmFsIHN0YXRlIGZvciB0aGUgcXVldWUgZmVhdHVyZVxudmFyIGN1cnJlbnRTdGVwcyA9IFtdO1xuLypcbiAqIEdsb2JhbCBmdW5jdGlvbiBmb3IgY2hhaW5pbmcgc3dlZXRBbGVydCBwb3B1cHNcbiAqL1xuXG52YXIgcXVldWUgPSBmdW5jdGlvbiBxdWV1ZShzdGVwcykge1xuICB2YXIgU3dhbCA9IHRoaXM7XG4gIGN1cnJlbnRTdGVwcyA9IHN0ZXBzO1xuXG4gIHZhciByZXNldFF1ZXVlID0gZnVuY3Rpb24gcmVzZXRRdWV1ZSgpIHtcbiAgICBjdXJyZW50U3RlcHMgPSBbXTtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1zd2FsMi1xdWV1ZS1zdGVwJyk7XG4gIH07XG5cbiAgdmFyIHF1ZXVlUmVzdWx0ID0gW107XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgIChmdW5jdGlvbiBzdGVwKGksIGNhbGxiYWNrKSB7XG4gICAgICBpZiAoaSA8IGN1cnJlbnRTdGVwcy5sZW5ndGgpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zZXRBdHRyaWJ1dGUoJ2RhdGEtc3dhbDItcXVldWUtc3RlcCcsIGkpO1xuICAgICAgICBTd2FsLmZpcmUoY3VycmVudFN0ZXBzW2ldKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIHJlc3VsdC52YWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHF1ZXVlUmVzdWx0LnB1c2gocmVzdWx0LnZhbHVlKTtcbiAgICAgICAgICAgIHN0ZXAoaSArIDEsIGNhbGxiYWNrKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzZXRRdWV1ZSgpO1xuICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgIGRpc21pc3M6IHJlc3VsdC5kaXNtaXNzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzZXRRdWV1ZSgpO1xuICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICB2YWx1ZTogcXVldWVSZXN1bHRcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSkoMCk7XG4gIH0pO1xufTtcbi8qXG4gKiBHbG9iYWwgZnVuY3Rpb24gZm9yIGdldHRpbmcgdGhlIGluZGV4IG9mIGN1cnJlbnQgcG9wdXAgaW4gcXVldWVcbiAqL1xuXG52YXIgZ2V0UXVldWVTdGVwID0gZnVuY3Rpb24gZ2V0UXVldWVTdGVwKCkge1xuICByZXR1cm4gZG9jdW1lbnQuYm9keS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3dhbDItcXVldWUtc3RlcCcpO1xufTtcbi8qXG4gKiBHbG9iYWwgZnVuY3Rpb24gZm9yIGluc2VydGluZyBhIHBvcHVwIHRvIHRoZSBxdWV1ZVxuICovXG5cbnZhciBpbnNlcnRRdWV1ZVN0ZXAgPSBmdW5jdGlvbiBpbnNlcnRRdWV1ZVN0ZXAoc3RlcCwgaW5kZXgpIHtcbiAgaWYgKGluZGV4ICYmIGluZGV4IDwgY3VycmVudFN0ZXBzLmxlbmd0aCkge1xuICAgIHJldHVybiBjdXJyZW50U3RlcHMuc3BsaWNlKGluZGV4LCAwLCBzdGVwKTtcbiAgfVxuXG4gIHJldHVybiBjdXJyZW50U3RlcHMucHVzaChzdGVwKTtcbn07XG4vKlxuICogR2xvYmFsIGZ1bmN0aW9uIGZvciBkZWxldGluZyBhIHBvcHVwIGZyb20gdGhlIHF1ZXVlXG4gKi9cblxudmFyIGRlbGV0ZVF1ZXVlU3RlcCA9IGZ1bmN0aW9uIGRlbGV0ZVF1ZXVlU3RlcChpbmRleCkge1xuICBpZiAodHlwZW9mIGN1cnJlbnRTdGVwc1tpbmRleF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3VycmVudFN0ZXBzLnNwbGljZShpbmRleCwgMSk7XG4gIH1cbn07XG5cbi8qKlxuICogU2hvdyBzcGlubmVyIGluc3RlYWQgb2YgQ29uZmlybSBidXR0b24gYW5kIGRpc2FibGUgQ2FuY2VsIGJ1dHRvblxuICovXG5cbnZhciBzaG93TG9hZGluZyA9IGZ1bmN0aW9uIHNob3dMb2FkaW5nKCkge1xuICB2YXIgcG9wdXAgPSBnZXRQb3B1cCgpO1xuXG4gIGlmICghcG9wdXApIHtcbiAgICBTd2FsLmZpcmUoJycpO1xuICB9XG5cbiAgcG9wdXAgPSBnZXRQb3B1cCgpO1xuICB2YXIgYWN0aW9ucyA9IGdldEFjdGlvbnMoKTtcbiAgdmFyIGNvbmZpcm1CdXR0b24gPSBnZXRDb25maXJtQnV0dG9uKCk7XG4gIHZhciBjYW5jZWxCdXR0b24gPSBnZXRDYW5jZWxCdXR0b24oKTtcbiAgc2hvdyhhY3Rpb25zKTtcbiAgc2hvdyhjb25maXJtQnV0dG9uKTtcbiAgYWRkQ2xhc3MoW3BvcHVwLCBhY3Rpb25zXSwgc3dhbENsYXNzZXMubG9hZGluZyk7XG4gIGNvbmZpcm1CdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICBjYW5jZWxCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICBwb3B1cC5zZXRBdHRyaWJ1dGUoJ2RhdGEtbG9hZGluZycsIHRydWUpO1xuICBwb3B1cC5zZXRBdHRyaWJ1dGUoJ2FyaWEtYnVzeScsIHRydWUpO1xuICBwb3B1cC5mb2N1cygpO1xufTtcblxudmFyIFJFU1RPUkVfRk9DVVNfVElNRU9VVCA9IDEwMDtcblxudmFyIGdsb2JhbFN0YXRlID0ge307XG52YXIgcmVzdG9yZUFjdGl2ZUVsZW1lbnQgPSBmdW5jdGlvbiByZXN0b3JlQWN0aXZlRWxlbWVudCgpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgdmFyIHggPSB3aW5kb3cuc2Nyb2xsWDtcbiAgICB2YXIgeSA9IHdpbmRvdy5zY3JvbGxZO1xuICAgIGdsb2JhbFN0YXRlLnJlc3RvcmVGb2N1c1RpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChnbG9iYWxTdGF0ZS5wcmV2aW91c0FjdGl2ZUVsZW1lbnQgJiYgZ2xvYmFsU3RhdGUucHJldmlvdXNBY3RpdmVFbGVtZW50LmZvY3VzKSB7XG4gICAgICAgIGdsb2JhbFN0YXRlLnByZXZpb3VzQWN0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICBnbG9iYWxTdGF0ZS5wcmV2aW91c0FjdGl2ZUVsZW1lbnQgPSBudWxsO1xuICAgICAgfSBlbHNlIGlmIChkb2N1bWVudC5ib2R5KSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKTtcbiAgICAgIH1cblxuICAgICAgcmVzb2x2ZSgpO1xuICAgIH0sIFJFU1RPUkVfRk9DVVNfVElNRU9VVCk7IC8vIGlzc3Vlcy85MDBcblxuICAgIGlmICh0eXBlb2YgeCAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBJRSBkb2Vzbid0IGhhdmUgc2Nyb2xsWC9zY3JvbGxZIHN1cHBvcnRcbiAgICAgIHdpbmRvdy5zY3JvbGxUbyh4LCB5KTtcbiAgICB9XG4gIH0pO1xufTtcblxuLyoqXG4gKiBJZiBgdGltZXJgIHBhcmFtZXRlciBpcyBzZXQsIHJldHVybnMgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBvZiB0aW1lciByZW1haW5lZC5cbiAqIE90aGVyd2lzZSwgcmV0dXJucyB1bmRlZmluZWQuXG4gKi9cblxudmFyIGdldFRpbWVyTGVmdCA9IGZ1bmN0aW9uIGdldFRpbWVyTGVmdCgpIHtcbiAgcmV0dXJuIGdsb2JhbFN0YXRlLnRpbWVvdXQgJiYgZ2xvYmFsU3RhdGUudGltZW91dC5nZXRUaW1lckxlZnQoKTtcbn07XG4vKipcbiAqIFN0b3AgdGltZXIuIFJldHVybnMgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBvZiB0aW1lciByZW1haW5lZC5cbiAqIElmIGB0aW1lcmAgcGFyYW1ldGVyIGlzbid0IHNldCwgcmV0dXJucyB1bmRlZmluZWQuXG4gKi9cblxudmFyIHN0b3BUaW1lciA9IGZ1bmN0aW9uIHN0b3BUaW1lcigpIHtcbiAgcmV0dXJuIGdsb2JhbFN0YXRlLnRpbWVvdXQgJiYgZ2xvYmFsU3RhdGUudGltZW91dC5zdG9wKCk7XG59O1xuLyoqXG4gKiBSZXN1bWUgdGltZXIuIFJldHVybnMgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBvZiB0aW1lciByZW1haW5lZC5cbiAqIElmIGB0aW1lcmAgcGFyYW1ldGVyIGlzbid0IHNldCwgcmV0dXJucyB1bmRlZmluZWQuXG4gKi9cblxudmFyIHJlc3VtZVRpbWVyID0gZnVuY3Rpb24gcmVzdW1lVGltZXIoKSB7XG4gIHJldHVybiBnbG9iYWxTdGF0ZS50aW1lb3V0ICYmIGdsb2JhbFN0YXRlLnRpbWVvdXQuc3RhcnQoKTtcbn07XG4vKipcbiAqIFJlc3VtZSB0aW1lci4gUmV0dXJucyBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIG9mIHRpbWVyIHJlbWFpbmVkLlxuICogSWYgYHRpbWVyYCBwYXJhbWV0ZXIgaXNuJ3Qgc2V0LCByZXR1cm5zIHVuZGVmaW5lZC5cbiAqL1xuXG52YXIgdG9nZ2xlVGltZXIgPSBmdW5jdGlvbiB0b2dnbGVUaW1lcigpIHtcbiAgdmFyIHRpbWVyID0gZ2xvYmFsU3RhdGUudGltZW91dDtcbiAgcmV0dXJuIHRpbWVyICYmICh0aW1lci5ydW5uaW5nID8gdGltZXIuc3RvcCgpIDogdGltZXIuc3RhcnQoKSk7XG59O1xuLyoqXG4gKiBJbmNyZWFzZSB0aW1lci4gUmV0dXJucyBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIG9mIGFuIHVwZGF0ZWQgdGltZXIuXG4gKiBJZiBgdGltZXJgIHBhcmFtZXRlciBpc24ndCBzZXQsIHJldHVybnMgdW5kZWZpbmVkLlxuICovXG5cbnZhciBpbmNyZWFzZVRpbWVyID0gZnVuY3Rpb24gaW5jcmVhc2VUaW1lcihuKSB7XG4gIHJldHVybiBnbG9iYWxTdGF0ZS50aW1lb3V0ICYmIGdsb2JhbFN0YXRlLnRpbWVvdXQuaW5jcmVhc2Uobik7XG59O1xuLyoqXG4gKiBDaGVjayBpZiB0aW1lciBpcyBydW5uaW5nLiBSZXR1cm5zIHRydWUgaWYgdGltZXIgaXMgcnVubmluZ1xuICogb3IgZmFsc2UgaWYgdGltZXIgaXMgcGF1c2VkIG9yIHN0b3BwZWQuXG4gKiBJZiBgdGltZXJgIHBhcmFtZXRlciBpc24ndCBzZXQsIHJldHVybnMgdW5kZWZpbmVkXG4gKi9cblxudmFyIGlzVGltZXJSdW5uaW5nID0gZnVuY3Rpb24gaXNUaW1lclJ1bm5pbmcoKSB7XG4gIHJldHVybiBnbG9iYWxTdGF0ZS50aW1lb3V0ICYmIGdsb2JhbFN0YXRlLnRpbWVvdXQuaXNSdW5uaW5nKCk7XG59O1xuXG52YXIgZGVmYXVsdFBhcmFtcyA9IHtcbiAgdGl0bGU6ICcnLFxuICB0aXRsZVRleHQ6ICcnLFxuICB0ZXh0OiAnJyxcbiAgaHRtbDogJycsXG4gIGZvb3RlcjogJycsXG4gIHR5cGU6IG51bGwsXG4gIHRvYXN0OiBmYWxzZSxcbiAgY3VzdG9tQ2xhc3M6ICcnLFxuICBjdXN0b21Db250YWluZXJDbGFzczogJycsXG4gIHRhcmdldDogJ2JvZHknLFxuICBiYWNrZHJvcDogdHJ1ZSxcbiAgYW5pbWF0aW9uOiB0cnVlLFxuICBoZWlnaHRBdXRvOiB0cnVlLFxuICBhbGxvd091dHNpZGVDbGljazogdHJ1ZSxcbiAgYWxsb3dFc2NhcGVLZXk6IHRydWUsXG4gIGFsbG93RW50ZXJLZXk6IHRydWUsXG4gIHN0b3BLZXlkb3duUHJvcGFnYXRpb246IHRydWUsXG4gIGtleWRvd25MaXN0ZW5lckNhcHR1cmU6IGZhbHNlLFxuICBzaG93Q29uZmlybUJ1dHRvbjogdHJ1ZSxcbiAgc2hvd0NhbmNlbEJ1dHRvbjogZmFsc2UsXG4gIHByZUNvbmZpcm06IG51bGwsXG4gIGNvbmZpcm1CdXR0b25UZXh0OiAnT0snLFxuICBjb25maXJtQnV0dG9uQXJpYUxhYmVsOiAnJyxcbiAgY29uZmlybUJ1dHRvbkNvbG9yOiBudWxsLFxuICBjb25maXJtQnV0dG9uQ2xhc3M6ICcnLFxuICBjYW5jZWxCdXR0b25UZXh0OiAnQ2FuY2VsJyxcbiAgY2FuY2VsQnV0dG9uQXJpYUxhYmVsOiAnJyxcbiAgY2FuY2VsQnV0dG9uQ29sb3I6IG51bGwsXG4gIGNhbmNlbEJ1dHRvbkNsYXNzOiAnJyxcbiAgYnV0dG9uc1N0eWxpbmc6IHRydWUsXG4gIHJldmVyc2VCdXR0b25zOiBmYWxzZSxcbiAgZm9jdXNDb25maXJtOiB0cnVlLFxuICBmb2N1c0NhbmNlbDogZmFsc2UsXG4gIHNob3dDbG9zZUJ1dHRvbjogZmFsc2UsXG4gIGNsb3NlQnV0dG9uQXJpYUxhYmVsOiAnQ2xvc2UgdGhpcyBkaWFsb2cnLFxuICBzaG93TG9hZGVyT25Db25maXJtOiBmYWxzZSxcbiAgaW1hZ2VVcmw6IG51bGwsXG4gIGltYWdlV2lkdGg6IG51bGwsXG4gIGltYWdlSGVpZ2h0OiBudWxsLFxuICBpbWFnZUFsdDogJycsXG4gIGltYWdlQ2xhc3M6ICcnLFxuICB0aW1lcjogbnVsbCxcbiAgd2lkdGg6IG51bGwsXG4gIHBhZGRpbmc6IG51bGwsXG4gIGJhY2tncm91bmQ6IG51bGwsXG4gIGlucHV0OiBudWxsLFxuICBpbnB1dFBsYWNlaG9sZGVyOiAnJyxcbiAgaW5wdXRWYWx1ZTogJycsXG4gIGlucHV0T3B0aW9uczoge30sXG4gIGlucHV0QXV0b1RyaW06IHRydWUsXG4gIGlucHV0Q2xhc3M6ICcnLFxuICBpbnB1dEF0dHJpYnV0ZXM6IHt9LFxuICBpbnB1dFZhbGlkYXRvcjogbnVsbCxcbiAgdmFsaWRhdGlvbk1lc3NhZ2U6IG51bGwsXG4gIGdyb3c6IGZhbHNlLFxuICBwb3NpdGlvbjogJ2NlbnRlcicsXG4gIHByb2dyZXNzU3RlcHM6IFtdLFxuICBjdXJyZW50UHJvZ3Jlc3NTdGVwOiBudWxsLFxuICBwcm9ncmVzc1N0ZXBzRGlzdGFuY2U6IG51bGwsXG4gIG9uQmVmb3JlT3BlbjogbnVsbCxcbiAgb25BZnRlckNsb3NlOiBudWxsLFxuICBvbk9wZW46IG51bGwsXG4gIG9uQ2xvc2U6IG51bGwsXG4gIHNjcm9sbGJhclBhZGRpbmc6IHRydWVcbn07XG52YXIgZGVwcmVjYXRlZFBhcmFtcyA9IFtdO1xudmFyIHRvYXN0SW5jb21wYXRpYmxlUGFyYW1zID0gWydhbGxvd091dHNpZGVDbGljaycsICdhbGxvd0VudGVyS2V5JywgJ2JhY2tkcm9wJywgJ2ZvY3VzQ29uZmlybScsICdmb2N1c0NhbmNlbCcsICdoZWlnaHRBdXRvJywgJ2tleWRvd25MaXN0ZW5lckNhcHR1cmUnXTtcbi8qKlxuICogSXMgdmFsaWQgcGFyYW1ldGVyXG4gKiBAcGFyYW0ge1N0cmluZ30gcGFyYW1OYW1lXG4gKi9cblxudmFyIGlzVmFsaWRQYXJhbWV0ZXIgPSBmdW5jdGlvbiBpc1ZhbGlkUGFyYW1ldGVyKHBhcmFtTmFtZSkge1xuICByZXR1cm4gZGVmYXVsdFBhcmFtcy5oYXNPd25Qcm9wZXJ0eShwYXJhbU5hbWUpO1xufTtcbi8qKlxuICogSXMgdmFsaWQgcGFyYW1ldGVyIGZvciBTd2FsLnVwZGF0ZSgpIG1ldGhvZFxuICogQHBhcmFtIHtTdHJpbmd9IHBhcmFtTmFtZVxuICovXG5cbnZhciBpc1VwZGF0YWJsZVBhcmFtZXRlciA9IGZ1bmN0aW9uIGlzVXBkYXRhYmxlUGFyYW1ldGVyKHBhcmFtTmFtZSkge1xuICByZXR1cm4gWyd0aXRsZScsICd0aXRsZVRleHQnLCAndGV4dCcsICdodG1sJywgJ3R5cGUnLCAnc2hvd0NvbmZpcm1CdXR0b24nLCAnc2hvd0NhbmNlbEJ1dHRvbicsICdjb25maXJtQnV0dG9uVGV4dCcsICdjb25maXJtQnV0dG9uQXJpYUxhYmVsJywgJ2NvbmZpcm1CdXR0b25Db2xvcicsICdjb25maXJtQnV0dG9uQ2xhc3MnLCAnY2FuY2VsQnV0dG9uVGV4dCcsICdjYW5jZWxCdXR0b25BcmlhTGFiZWwnLCAnY2FuY2VsQnV0dG9uQ29sb3InLCAnY2FuY2VsQnV0dG9uQ2xhc3MnLCAnYnV0dG9uc1N0eWxpbmcnLCAncmV2ZXJzZUJ1dHRvbnMnLCAnaW1hZ2VVcmwnLCAnaW1hZ2VXaWR0aCcsICdpbWFnZUhlaWd0aCcsICdpbWFnZUFsdCcsICdpbWFnZUNsYXNzJywgJ3Byb2dyZXNzU3RlcHMnLCAnY3VycmVudFByb2dyZXNzU3RlcCddLmluZGV4T2YocGFyYW1OYW1lKSAhPT0gLTE7XG59O1xuLyoqXG4gKiBJcyBkZXByZWNhdGVkIHBhcmFtZXRlclxuICogQHBhcmFtIHtTdHJpbmd9IHBhcmFtTmFtZVxuICovXG5cbnZhciBpc0RlcHJlY2F0ZWRQYXJhbWV0ZXIgPSBmdW5jdGlvbiBpc0RlcHJlY2F0ZWRQYXJhbWV0ZXIocGFyYW1OYW1lKSB7XG4gIHJldHVybiBkZXByZWNhdGVkUGFyYW1zLmluZGV4T2YocGFyYW1OYW1lKSAhPT0gLTE7XG59O1xuLyoqXG4gKiBTaG93IHJlbGV2YW50IHdhcm5pbmdzIGZvciBnaXZlbiBwYXJhbXNcbiAqXG4gKiBAcGFyYW0gcGFyYW1zXG4gKi9cblxudmFyIHNob3dXYXJuaW5nc0ZvclBhcmFtcyA9IGZ1bmN0aW9uIHNob3dXYXJuaW5nc0ZvclBhcmFtcyhwYXJhbXMpIHtcbiAgZm9yICh2YXIgcGFyYW0gaW4gcGFyYW1zKSB7XG4gICAgaWYgKCFpc1ZhbGlkUGFyYW1ldGVyKHBhcmFtKSkge1xuICAgICAgd2FybihcIlVua25vd24gcGFyYW1ldGVyIFxcXCJcIi5jb25jYXQocGFyYW0sIFwiXFxcIlwiKSk7XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcy50b2FzdCAmJiB0b2FzdEluY29tcGF0aWJsZVBhcmFtcy5pbmRleE9mKHBhcmFtKSAhPT0gLTEpIHtcbiAgICAgIHdhcm4oXCJUaGUgcGFyYW1ldGVyIFxcXCJcIi5jb25jYXQocGFyYW0sIFwiXFxcIiBpcyBpbmNvbXBhdGlibGUgd2l0aCB0b2FzdHNcIikpO1xuICAgIH1cblxuICAgIGlmIChpc0RlcHJlY2F0ZWRQYXJhbWV0ZXIocGFyYW0pKSB7XG4gICAgICB3YXJuT25jZShcIlRoZSBwYXJhbWV0ZXIgXFxcIlwiLmNvbmNhdChwYXJhbSwgXCJcXFwiIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiB0aGUgbmV4dCBtYWpvciByZWxlYXNlLlwiKSk7XG4gICAgfVxuICB9XG59O1xuXG5cblxudmFyIHN0YXRpY01ldGhvZHMgPSBPYmplY3QuZnJlZXplKHtcblx0aXNWYWxpZFBhcmFtZXRlcjogaXNWYWxpZFBhcmFtZXRlcixcblx0aXNVcGRhdGFibGVQYXJhbWV0ZXI6IGlzVXBkYXRhYmxlUGFyYW1ldGVyLFxuXHRpc0RlcHJlY2F0ZWRQYXJhbWV0ZXI6IGlzRGVwcmVjYXRlZFBhcmFtZXRlcixcblx0YXJnc1RvUGFyYW1zOiBhcmdzVG9QYXJhbXMsXG5cdGlzVmlzaWJsZTogaXNWaXNpYmxlJDEsXG5cdGNsaWNrQ29uZmlybTogY2xpY2tDb25maXJtLFxuXHRjbGlja0NhbmNlbDogY2xpY2tDYW5jZWwsXG5cdGdldENvbnRhaW5lcjogZ2V0Q29udGFpbmVyLFxuXHRnZXRQb3B1cDogZ2V0UG9wdXAsXG5cdGdldFRpdGxlOiBnZXRUaXRsZSxcblx0Z2V0Q29udGVudDogZ2V0Q29udGVudCxcblx0Z2V0SW1hZ2U6IGdldEltYWdlLFxuXHRnZXRJY29uczogZ2V0SWNvbnMsXG5cdGdldENsb3NlQnV0dG9uOiBnZXRDbG9zZUJ1dHRvbixcblx0Z2V0QWN0aW9uczogZ2V0QWN0aW9ucyxcblx0Z2V0Q29uZmlybUJ1dHRvbjogZ2V0Q29uZmlybUJ1dHRvbixcblx0Z2V0Q2FuY2VsQnV0dG9uOiBnZXRDYW5jZWxCdXR0b24sXG5cdGdldEZvb3RlcjogZ2V0Rm9vdGVyLFxuXHRnZXRGb2N1c2FibGVFbGVtZW50czogZ2V0Rm9jdXNhYmxlRWxlbWVudHMsXG5cdGdldFZhbGlkYXRpb25NZXNzYWdlOiBnZXRWYWxpZGF0aW9uTWVzc2FnZSxcblx0aXNMb2FkaW5nOiBpc0xvYWRpbmcsXG5cdGZpcmU6IGZpcmUsXG5cdG1peGluOiBtaXhpbixcblx0cXVldWU6IHF1ZXVlLFxuXHRnZXRRdWV1ZVN0ZXA6IGdldFF1ZXVlU3RlcCxcblx0aW5zZXJ0UXVldWVTdGVwOiBpbnNlcnRRdWV1ZVN0ZXAsXG5cdGRlbGV0ZVF1ZXVlU3RlcDogZGVsZXRlUXVldWVTdGVwLFxuXHRzaG93TG9hZGluZzogc2hvd0xvYWRpbmcsXG5cdGVuYWJsZUxvYWRpbmc6IHNob3dMb2FkaW5nLFxuXHRnZXRUaW1lckxlZnQ6IGdldFRpbWVyTGVmdCxcblx0c3RvcFRpbWVyOiBzdG9wVGltZXIsXG5cdHJlc3VtZVRpbWVyOiByZXN1bWVUaW1lcixcblx0dG9nZ2xlVGltZXI6IHRvZ2dsZVRpbWVyLFxuXHRpbmNyZWFzZVRpbWVyOiBpbmNyZWFzZVRpbWVyLFxuXHRpc1RpbWVyUnVubmluZzogaXNUaW1lclJ1bm5pbmdcbn0pO1xuXG4vKipcbiAqIFRoaXMgbW9kdWxlIGNvbnRhaW50cyBgV2Vha01hcGBzIGZvciBlYWNoIGVmZmVjdGl2ZWx5LVwicHJpdmF0ZSAgcHJvcGVydHlcIiB0aGF0IGEgYFN3YWxgIGhhcy5cbiAqIEZvciBleGFtcGxlLCB0byBzZXQgdGhlIHByaXZhdGUgcHJvcGVydHkgXCJmb29cIiBvZiBgdGhpc2AgdG8gXCJiYXJcIiwgeW91IGNhbiBgcHJpdmF0ZVByb3BzLmZvby5zZXQodGhpcywgJ2JhcicpYFxuICogVGhpcyBpcyB0aGUgYXBwcm9hY2ggdGhhdCBCYWJlbCB3aWxsIHByb2JhYmx5IHRha2UgdG8gaW1wbGVtZW50IHByaXZhdGUgbWV0aG9kcy9maWVsZHNcbiAqICAgaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtcHJpdmF0ZS1tZXRob2RzXG4gKiAgIGh0dHBzOi8vZ2l0aHViLmNvbS9iYWJlbC9iYWJlbC9wdWxsLzc1NTVcbiAqIE9uY2Ugd2UgaGF2ZSB0aGUgY2hhbmdlcyBmcm9tIHRoYXQgUFIgaW4gQmFiZWwsIGFuZCBvdXIgY29yZSBjbGFzcyBmaXRzIHJlYXNvbmFibGUgaW4gKm9uZSBtb2R1bGUqXG4gKiAgIHRoZW4gd2UgY2FuIHVzZSB0aGF0IGxhbmd1YWdlIGZlYXR1cmUuXG4gKi9cbnZhciBwcml2YXRlUHJvcHMgPSB7XG4gIHByb21pc2U6IG5ldyBXZWFrTWFwKCksXG4gIGlubmVyUGFyYW1zOiBuZXcgV2Vha01hcCgpLFxuICBkb21DYWNoZTogbmV3IFdlYWtNYXAoKVxufTtcblxuLyoqXG4gKiBFbmFibGVzIGJ1dHRvbnMgYW5kIGhpZGUgbG9hZGVyLlxuICovXG5cbmZ1bmN0aW9uIGhpZGVMb2FkaW5nKCkge1xuICB2YXIgaW5uZXJQYXJhbXMgPSBwcml2YXRlUHJvcHMuaW5uZXJQYXJhbXMuZ2V0KHRoaXMpO1xuICB2YXIgZG9tQ2FjaGUgPSBwcml2YXRlUHJvcHMuZG9tQ2FjaGUuZ2V0KHRoaXMpO1xuXG4gIGlmICghaW5uZXJQYXJhbXMuc2hvd0NvbmZpcm1CdXR0b24pIHtcbiAgICBoaWRlKGRvbUNhY2hlLmNvbmZpcm1CdXR0b24pO1xuXG4gICAgaWYgKCFpbm5lclBhcmFtcy5zaG93Q2FuY2VsQnV0dG9uKSB7XG4gICAgICBoaWRlKGRvbUNhY2hlLmFjdGlvbnMpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZUNsYXNzKFtkb21DYWNoZS5wb3B1cCwgZG9tQ2FjaGUuYWN0aW9uc10sIHN3YWxDbGFzc2VzLmxvYWRpbmcpO1xuICBkb21DYWNoZS5wb3B1cC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtYnVzeScpO1xuICBkb21DYWNoZS5wb3B1cC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtbG9hZGluZycpO1xuICBkb21DYWNoZS5jb25maXJtQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gIGRvbUNhY2hlLmNhbmNlbEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBnZXRJbnB1dChpbnB1dFR5cGUpIHtcbiAgdmFyIGlubmVyUGFyYW1zID0gcHJpdmF0ZVByb3BzLmlubmVyUGFyYW1zLmdldCh0aGlzKTtcbiAgdmFyIGRvbUNhY2hlID0gcHJpdmF0ZVByb3BzLmRvbUNhY2hlLmdldCh0aGlzKTtcbiAgaW5wdXRUeXBlID0gaW5wdXRUeXBlIHx8IGlubmVyUGFyYW1zLmlucHV0O1xuXG4gIGlmICghaW5wdXRUeXBlKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBzd2l0Y2ggKGlucHV0VHlwZSkge1xuICAgIGNhc2UgJ3NlbGVjdCc6XG4gICAgY2FzZSAndGV4dGFyZWEnOlxuICAgIGNhc2UgJ2ZpbGUnOlxuICAgICAgcmV0dXJuIGdldENoaWxkQnlDbGFzcyhkb21DYWNoZS5jb250ZW50LCBzd2FsQ2xhc3Nlc1tpbnB1dFR5cGVdKTtcblxuICAgIGNhc2UgJ2NoZWNrYm94JzpcbiAgICAgIHJldHVybiBkb21DYWNoZS5wb3B1cC5xdWVyeVNlbGVjdG9yKFwiLlwiLmNvbmNhdChzd2FsQ2xhc3Nlcy5jaGVja2JveCwgXCIgaW5wdXRcIikpO1xuXG4gICAgY2FzZSAncmFkaW8nOlxuICAgICAgcmV0dXJuIGRvbUNhY2hlLnBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KHN3YWxDbGFzc2VzLnJhZGlvLCBcIiBpbnB1dDpjaGVja2VkXCIpKSB8fCBkb21DYWNoZS5wb3B1cC5xdWVyeVNlbGVjdG9yKFwiLlwiLmNvbmNhdChzd2FsQ2xhc3Nlcy5yYWRpbywgXCIgaW5wdXQ6Zmlyc3QtY2hpbGRcIikpO1xuXG4gICAgY2FzZSAncmFuZ2UnOlxuICAgICAgcmV0dXJuIGRvbUNhY2hlLnBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KHN3YWxDbGFzc2VzLnJhbmdlLCBcIiBpbnB1dFwiKSk7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGdldENoaWxkQnlDbGFzcyhkb21DYWNoZS5jb250ZW50LCBzd2FsQ2xhc3Nlcy5pbnB1dCk7XG4gIH1cbn1cblxudmFyIGZpeFNjcm9sbGJhciA9IGZ1bmN0aW9uIGZpeFNjcm9sbGJhcigpIHtcbiAgLy8gZm9yIHF1ZXVlcywgZG8gbm90IGRvIHRoaXMgbW9yZSB0aGFuIG9uY2VcbiAgaWYgKHN0YXRlcy5wcmV2aW91c0JvZHlQYWRkaW5nICE9PSBudWxsKSB7XG4gICAgcmV0dXJuO1xuICB9IC8vIGlmIHRoZSBib2R5IGhhcyBvdmVyZmxvd1xuXG5cbiAgaWYgKGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0ID4gd2luZG93LmlubmVySGVpZ2h0KSB7XG4gICAgLy8gYWRkIHBhZGRpbmcgc28gdGhlIGNvbnRlbnQgZG9lc24ndCBzaGlmdCBhZnRlciByZW1vdmFsIG9mIHNjcm9sbGJhclxuICAgIHN0YXRlcy5wcmV2aW91c0JvZHlQYWRkaW5nID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuYm9keSkuZ2V0UHJvcGVydHlWYWx1ZSgncGFkZGluZy1yaWdodCcpKTtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9IHN0YXRlcy5wcmV2aW91c0JvZHlQYWRkaW5nICsgbWVhc3VyZVNjcm9sbGJhcigpICsgJ3B4JztcbiAgfVxufTtcbnZhciB1bmRvU2Nyb2xsYmFyID0gZnVuY3Rpb24gdW5kb1Njcm9sbGJhcigpIHtcbiAgaWYgKHN0YXRlcy5wcmV2aW91c0JvZHlQYWRkaW5nICE9PSBudWxsKSB7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSBzdGF0ZXMucHJldmlvdXNCb2R5UGFkZGluZyArICdweCc7XG4gICAgc3RhdGVzLnByZXZpb3VzQm9keVBhZGRpbmcgPSBudWxsO1xuICB9XG59O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuXG52YXIgaU9TZml4ID0gZnVuY3Rpb24gaU9TZml4KCkge1xuICB2YXIgaU9TID0gL2lQYWR8aVBob25lfGlQb2QvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYgIXdpbmRvdy5NU1N0cmVhbTtcblxuICBpZiAoaU9TICYmICFoYXNDbGFzcyhkb2N1bWVudC5ib2R5LCBzd2FsQ2xhc3Nlcy5pb3NmaXgpKSB7XG4gICAgdmFyIG9mZnNldCA9IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUudG9wID0gb2Zmc2V0ICogLTEgKyAncHgnO1xuICAgIGFkZENsYXNzKGRvY3VtZW50LmJvZHksIHN3YWxDbGFzc2VzLmlvc2ZpeCk7XG4gIH1cbn07XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuXG52YXIgdW5kb0lPU2ZpeCA9IGZ1bmN0aW9uIHVuZG9JT1NmaXgoKSB7XG4gIGlmIChoYXNDbGFzcyhkb2N1bWVudC5ib2R5LCBzd2FsQ2xhc3Nlcy5pb3NmaXgpKSB7XG4gICAgdmFyIG9mZnNldCA9IHBhcnNlSW50KGRvY3VtZW50LmJvZHkuc3R5bGUudG9wLCAxMCk7XG4gICAgcmVtb3ZlQ2xhc3MoZG9jdW1lbnQuYm9keSwgc3dhbENsYXNzZXMuaW9zZml4KTtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnRvcCA9ICcnO1xuICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID0gb2Zmc2V0ICogLTE7XG4gIH1cbn07XG5cbnZhciBpc0lFMTEgPSBmdW5jdGlvbiBpc0lFMTEoKSB7XG4gIHJldHVybiAhIXdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCAmJiAhIWRvY3VtZW50LmRvY3VtZW50TW9kZTtcbn07IC8vIEZpeCBJRTExIGNlbnRlcmluZyBzd2VldGFsZXJ0Mi9pc3N1ZXMvOTMzXG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5cblxudmFyIGZpeFZlcnRpY2FsUG9zaXRpb25JRSA9IGZ1bmN0aW9uIGZpeFZlcnRpY2FsUG9zaXRpb25JRSgpIHtcbiAgdmFyIGNvbnRhaW5lciA9IGdldENvbnRhaW5lcigpO1xuICB2YXIgcG9wdXAgPSBnZXRQb3B1cCgpO1xuICBjb250YWluZXIuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2FsaWduLWl0ZW1zJyk7XG5cbiAgaWYgKHBvcHVwLm9mZnNldFRvcCA8IDApIHtcbiAgICBjb250YWluZXIuc3R5bGUuYWxpZ25JdGVtcyA9ICdmbGV4LXN0YXJ0JztcbiAgfVxufTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5cblxudmFyIElFZml4ID0gZnVuY3Rpb24gSUVmaXgoKSB7XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiBpc0lFMTEoKSkge1xuICAgIGZpeFZlcnRpY2FsUG9zaXRpb25JRSgpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmaXhWZXJ0aWNhbFBvc2l0aW9uSUUpO1xuICB9XG59O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cblxudmFyIHVuZG9JRWZpeCA9IGZ1bmN0aW9uIHVuZG9JRWZpeCgpIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIGlzSUUxMSgpKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZpeFZlcnRpY2FsUG9zaXRpb25JRSk7XG4gIH1cbn07XG5cbi8vIEFkZGluZyBhcmlhLWhpZGRlbj1cInRydWVcIiB0byBlbGVtZW50cyBvdXRzaWRlIG9mIHRoZSBhY3RpdmUgbW9kYWwgZGlhbG9nIGVuc3VyZXMgdGhhdFxuLy8gZWxlbWVudHMgbm90IHdpdGhpbiB0aGUgYWN0aXZlIG1vZGFsIGRpYWxvZyB3aWxsIG5vdCBiZSBzdXJmYWNlZCBpZiBhIHVzZXIgb3BlbnMgYSBzY3JlZW5cbi8vIHJlYWRlcuKAmXMgbGlzdCBvZiBlbGVtZW50cyAoaGVhZGluZ3MsIGZvcm0gY29udHJvbHMsIGxhbmRtYXJrcywgZXRjLikgaW4gdGhlIGRvY3VtZW50LlxuXG52YXIgc2V0QXJpYUhpZGRlbiA9IGZ1bmN0aW9uIHNldEFyaWFIaWRkZW4oKSB7XG4gIHZhciBib2R5Q2hpbGRyZW4gPSB0b0FycmF5KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICBib2R5Q2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICBpZiAoZWwgPT09IGdldENvbnRhaW5lcigpIHx8IGNvbnRhaW5zKGVsLCBnZXRDb250YWluZXIoKSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZWwuaGFzQXR0cmlidXRlKCdhcmlhLWhpZGRlbicpKSB7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJldmlvdXMtYXJpYS1oaWRkZW4nLCBlbC5nZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJykpO1xuICAgIH1cblxuICAgIGVsLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICB9KTtcbn07XG52YXIgdW5zZXRBcmlhSGlkZGVuID0gZnVuY3Rpb24gdW5zZXRBcmlhSGlkZGVuKCkge1xuICB2YXIgYm9keUNoaWxkcmVuID0gdG9BcnJheShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAgYm9keUNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgaWYgKGVsLmhhc0F0dHJpYnV0ZSgnZGF0YS1wcmV2aW91cy1hcmlhLWhpZGRlbicpKSB7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXByZXZpb3VzLWFyaWEtaGlkZGVuJykpO1xuICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXByZXZpb3VzLWFyaWEtaGlkZGVuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKTtcbiAgICB9XG4gIH0pO1xufTtcblxuLyoqXG4gKiBUaGlzIG1vZHVsZSBjb250YWludHMgYFdlYWtNYXBgcyBmb3IgZWFjaCBlZmZlY3RpdmVseS1cInByaXZhdGUgIHByb3BlcnR5XCIgdGhhdCBhIGBTd2FsYCBoYXMuXG4gKiBGb3IgZXhhbXBsZSwgdG8gc2V0IHRoZSBwcml2YXRlIHByb3BlcnR5IFwiZm9vXCIgb2YgYHRoaXNgIHRvIFwiYmFyXCIsIHlvdSBjYW4gYHByaXZhdGVQcm9wcy5mb28uc2V0KHRoaXMsICdiYXInKWBcbiAqIFRoaXMgaXMgdGhlIGFwcHJvYWNoIHRoYXQgQmFiZWwgd2lsbCBwcm9iYWJseSB0YWtlIHRvIGltcGxlbWVudCBwcml2YXRlIG1ldGhvZHMvZmllbGRzXG4gKiAgIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXByaXZhdGUtbWV0aG9kc1xuICogICBodHRwczovL2dpdGh1Yi5jb20vYmFiZWwvYmFiZWwvcHVsbC83NTU1XG4gKiBPbmNlIHdlIGhhdmUgdGhlIGNoYW5nZXMgZnJvbSB0aGF0IFBSIGluIEJhYmVsLCBhbmQgb3VyIGNvcmUgY2xhc3MgZml0cyByZWFzb25hYmxlIGluICpvbmUgbW9kdWxlKlxuICogICB0aGVuIHdlIGNhbiB1c2UgdGhhdCBsYW5ndWFnZSBmZWF0dXJlLlxuICovXG52YXIgcHJpdmF0ZU1ldGhvZHMgPSB7XG4gIHN3YWxQcm9taXNlUmVzb2x2ZTogbmV3IFdlYWtNYXAoKVxufTtcblxuLypcbiAqIEluc3RhbmNlIG1ldGhvZCB0byBjbG9zZSBzd2VldEFsZXJ0XG4gKi9cblxuZnVuY3Rpb24gY2xvc2UocmVzb2x2ZVZhbHVlKSB7XG4gIHZhciBjb250YWluZXIgPSBnZXRDb250YWluZXIoKTtcbiAgdmFyIHBvcHVwID0gZ2V0UG9wdXAoKTtcbiAgdmFyIGlubmVyUGFyYW1zID0gcHJpdmF0ZVByb3BzLmlubmVyUGFyYW1zLmdldCh0aGlzKTtcbiAgdmFyIHN3YWxQcm9taXNlUmVzb2x2ZSA9IHByaXZhdGVNZXRob2RzLnN3YWxQcm9taXNlUmVzb2x2ZS5nZXQodGhpcyk7XG4gIHZhciBvbkNsb3NlID0gaW5uZXJQYXJhbXMub25DbG9zZTtcbiAgdmFyIG9uQWZ0ZXJDbG9zZSA9IGlubmVyUGFyYW1zLm9uQWZ0ZXJDbG9zZTtcblxuICBpZiAoIXBvcHVwKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKG9uQ2xvc2UgIT09IG51bGwgJiYgdHlwZW9mIG9uQ2xvc2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvbkNsb3NlKHBvcHVwKTtcbiAgfVxuXG4gIHJlbW92ZUNsYXNzKHBvcHVwLCBzd2FsQ2xhc3Nlcy5zaG93KTtcbiAgYWRkQ2xhc3MocG9wdXAsIHN3YWxDbGFzc2VzLmhpZGUpO1xuXG4gIHZhciByZW1vdmVQb3B1cEFuZFJlc2V0U3RhdGUgPSBmdW5jdGlvbiByZW1vdmVQb3B1cEFuZFJlc2V0U3RhdGUoKSB7XG4gICAgaWYgKCFpc1RvYXN0KCkpIHtcbiAgICAgIHJlc3RvcmVBY3RpdmVFbGVtZW50KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0cmlnZ2VyT25BZnRlckNsb3NlKG9uQWZ0ZXJDbG9zZSk7XG4gICAgICB9KTtcbiAgICAgIGdsb2JhbFN0YXRlLmtleWRvd25UYXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGdsb2JhbFN0YXRlLmtleWRvd25IYW5kbGVyLCB7XG4gICAgICAgIGNhcHR1cmU6IGdsb2JhbFN0YXRlLmtleWRvd25MaXN0ZW5lckNhcHR1cmVcbiAgICAgIH0pO1xuICAgICAgZ2xvYmFsU3RhdGUua2V5ZG93bkhhbmRsZXJBZGRlZCA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0cmlnZ2VyT25BZnRlckNsb3NlKG9uQWZ0ZXJDbG9zZSk7XG4gICAgfVxuXG4gICAgaWYgKGNvbnRhaW5lci5wYXJlbnROb2RlKSB7XG4gICAgICBjb250YWluZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjb250YWluZXIpO1xuICAgIH1cblxuICAgIHJlbW92ZUNsYXNzKFtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIGRvY3VtZW50LmJvZHldLCBbc3dhbENsYXNzZXMuc2hvd24sIHN3YWxDbGFzc2VzWydoZWlnaHQtYXV0byddLCBzd2FsQ2xhc3Nlc1snbm8tYmFja2Ryb3AnXSwgc3dhbENsYXNzZXNbJ3RvYXN0LXNob3duJ10sIHN3YWxDbGFzc2VzWyd0b2FzdC1jb2x1bW4nXV0pO1xuXG4gICAgaWYgKGlzTW9kYWwoKSkge1xuICAgICAgdW5kb1Njcm9sbGJhcigpO1xuICAgICAgdW5kb0lPU2ZpeCgpO1xuICAgICAgdW5kb0lFZml4KCk7XG4gICAgICB1bnNldEFyaWFIaWRkZW4oKTtcbiAgICB9XG4gIH07IC8vIElmIGFuaW1hdGlvbiBpcyBzdXBwb3J0ZWQsIGFuaW1hdGVcblxuXG4gIGlmIChhbmltYXRpb25FbmRFdmVudCAmJiAhaGFzQ2xhc3MocG9wdXAsIHN3YWxDbGFzc2VzLm5vYW5pbWF0aW9uKSkge1xuICAgIHBvcHVwLmFkZEV2ZW50TGlzdGVuZXIoYW5pbWF0aW9uRW5kRXZlbnQsIGZ1bmN0aW9uIHN3YWxDbG9zZUV2ZW50RmluaXNoZWQoKSB7XG4gICAgICBwb3B1cC5yZW1vdmVFdmVudExpc3RlbmVyKGFuaW1hdGlvbkVuZEV2ZW50LCBzd2FsQ2xvc2VFdmVudEZpbmlzaGVkKTtcblxuICAgICAgaWYgKGhhc0NsYXNzKHBvcHVwLCBzd2FsQ2xhc3Nlcy5oaWRlKSkge1xuICAgICAgICByZW1vdmVQb3B1cEFuZFJlc2V0U3RhdGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICAvLyBPdGhlcndpc2UsIHJlbW92ZSBpbW1lZGlhdGVseVxuICAgIHJlbW92ZVBvcHVwQW5kUmVzZXRTdGF0ZSgpO1xuICB9IC8vIFJlc29sdmUgU3dhbCBwcm9taXNlXG5cblxuICBzd2FsUHJvbWlzZVJlc29sdmUocmVzb2x2ZVZhbHVlIHx8IHt9KTtcbn1cblxudmFyIHRyaWdnZXJPbkFmdGVyQ2xvc2UgPSBmdW5jdGlvbiB0cmlnZ2VyT25BZnRlckNsb3NlKG9uQWZ0ZXJDbG9zZSkge1xuICBpZiAob25BZnRlckNsb3NlICE9PSBudWxsICYmIHR5cGVvZiBvbkFmdGVyQ2xvc2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIG9uQWZ0ZXJDbG9zZSgpO1xuICAgIH0pO1xuICB9XG59O1xuXG5mdW5jdGlvbiBlbmFibGVCdXR0b25zKCkge1xuICB2YXIgZG9tQ2FjaGUgPSBwcml2YXRlUHJvcHMuZG9tQ2FjaGUuZ2V0KHRoaXMpO1xuICBkb21DYWNoZS5jb25maXJtQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gIGRvbUNhY2hlLmNhbmNlbEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xufVxuZnVuY3Rpb24gZGlzYWJsZUJ1dHRvbnMoKSB7XG4gIHZhciBkb21DYWNoZSA9IHByaXZhdGVQcm9wcy5kb21DYWNoZS5nZXQodGhpcyk7XG4gIGRvbUNhY2hlLmNvbmZpcm1CdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICBkb21DYWNoZS5jYW5jZWxCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xufVxuZnVuY3Rpb24gZW5hYmxlQ29uZmlybUJ1dHRvbigpIHtcbiAgdmFyIGRvbUNhY2hlID0gcHJpdmF0ZVByb3BzLmRvbUNhY2hlLmdldCh0aGlzKTtcbiAgZG9tQ2FjaGUuY29uZmlybUJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xufVxuZnVuY3Rpb24gZGlzYWJsZUNvbmZpcm1CdXR0b24oKSB7XG4gIHZhciBkb21DYWNoZSA9IHByaXZhdGVQcm9wcy5kb21DYWNoZS5nZXQodGhpcyk7XG4gIGRvbUNhY2hlLmNvbmZpcm1CdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xufVxuZnVuY3Rpb24gZW5hYmxlSW5wdXQoKSB7XG4gIHZhciBpbnB1dCA9IHRoaXMuZ2V0SW5wdXQoKTtcblxuICBpZiAoIWlucHV0KSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKGlucHV0LnR5cGUgPT09ICdyYWRpbycpIHtcbiAgICB2YXIgcmFkaW9zQ29udGFpbmVyID0gaW5wdXQucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgIHZhciByYWRpb3MgPSByYWRpb3NDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmFkaW9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICByYWRpb3NbaV0uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaW5wdXQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgfVxufVxuZnVuY3Rpb24gZGlzYWJsZUlucHV0KCkge1xuICB2YXIgaW5wdXQgPSB0aGlzLmdldElucHV0KCk7XG5cbiAgaWYgKCFpbnB1dCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChpbnB1dCAmJiBpbnB1dC50eXBlID09PSAncmFkaW8nKSB7XG4gICAgdmFyIHJhZGlvc0NvbnRhaW5lciA9IGlucHV0LnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICB2YXIgcmFkaW9zID0gcmFkaW9zQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Jyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJhZGlvcy5sZW5ndGg7IGkrKykge1xuICAgICAgcmFkaW9zW2ldLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaW5wdXQuZGlzYWJsZWQgPSB0cnVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNob3dWYWxpZGF0aW9uTWVzc2FnZShlcnJvcikge1xuICB2YXIgZG9tQ2FjaGUgPSBwcml2YXRlUHJvcHMuZG9tQ2FjaGUuZ2V0KHRoaXMpO1xuICBkb21DYWNoZS52YWxpZGF0aW9uTWVzc2FnZS5pbm5lckhUTUwgPSBlcnJvcjtcbiAgdmFyIHBvcHVwQ29tcHV0ZWRTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRvbUNhY2hlLnBvcHVwKTtcbiAgZG9tQ2FjaGUudmFsaWRhdGlvbk1lc3NhZ2Uuc3R5bGUubWFyZ2luTGVmdCA9IFwiLVwiLmNvbmNhdChwb3B1cENvbXB1dGVkU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgncGFkZGluZy1sZWZ0JykpO1xuICBkb21DYWNoZS52YWxpZGF0aW9uTWVzc2FnZS5zdHlsZS5tYXJnaW5SaWdodCA9IFwiLVwiLmNvbmNhdChwb3B1cENvbXB1dGVkU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgncGFkZGluZy1yaWdodCcpKTtcbiAgc2hvdyhkb21DYWNoZS52YWxpZGF0aW9uTWVzc2FnZSk7XG4gIHZhciBpbnB1dCA9IHRoaXMuZ2V0SW5wdXQoKTtcblxuICBpZiAoaW5wdXQpIHtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaW52YWxpZCcsIHRydWUpO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRCeScsIHN3YWxDbGFzc2VzWyd2YWxpZGF0aW9uLW1lc3NhZ2UnXSk7XG4gICAgZm9jdXNJbnB1dChpbnB1dCk7XG4gICAgYWRkQ2xhc3MoaW5wdXQsIHN3YWxDbGFzc2VzLmlucHV0ZXJyb3IpO1xuICB9XG59IC8vIEhpZGUgYmxvY2sgd2l0aCB2YWxpZGF0aW9uIG1lc3NhZ2VcblxuZnVuY3Rpb24gcmVzZXRWYWxpZGF0aW9uTWVzc2FnZSgpIHtcbiAgdmFyIGRvbUNhY2hlID0gcHJpdmF0ZVByb3BzLmRvbUNhY2hlLmdldCh0aGlzKTtcblxuICBpZiAoZG9tQ2FjaGUudmFsaWRhdGlvbk1lc3NhZ2UpIHtcbiAgICBoaWRlKGRvbUNhY2hlLnZhbGlkYXRpb25NZXNzYWdlKTtcbiAgfVxuXG4gIHZhciBpbnB1dCA9IHRoaXMuZ2V0SW5wdXQoKTtcblxuICBpZiAoaW5wdXQpIHtcbiAgICBpbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtaW52YWxpZCcpO1xuICAgIGlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRCeScpO1xuICAgIHJlbW92ZUNsYXNzKGlucHV0LCBzd2FsQ2xhc3Nlcy5pbnB1dGVycm9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRQcm9ncmVzc1N0ZXBzJDEoKSB7XG4gIHZhciBpbm5lclBhcmFtcyA9IHByaXZhdGVQcm9wcy5pbm5lclBhcmFtcy5nZXQodGhpcyk7XG4gIHJldHVybiBpbm5lclBhcmFtcy5wcm9ncmVzc1N0ZXBzO1xufVxuZnVuY3Rpb24gc2V0UHJvZ3Jlc3NTdGVwcyhwcm9ncmVzc1N0ZXBzKSB7XG4gIHZhciBpbm5lclBhcmFtcyA9IHByaXZhdGVQcm9wcy5pbm5lclBhcmFtcy5nZXQodGhpcyk7XG5cbiAgdmFyIHVwZGF0ZWRQYXJhbXMgPSBfZXh0ZW5kcyh7fSwgaW5uZXJQYXJhbXMsIHtcbiAgICBwcm9ncmVzc1N0ZXBzOiBwcm9ncmVzc1N0ZXBzXG4gIH0pO1xuXG4gIHByaXZhdGVQcm9wcy5pbm5lclBhcmFtcy5zZXQodGhpcywgdXBkYXRlZFBhcmFtcyk7XG4gIHJlbmRlclByb2dyZXNzU3RlcHModXBkYXRlZFBhcmFtcyk7XG59XG5mdW5jdGlvbiBzaG93UHJvZ3Jlc3NTdGVwcygpIHtcbiAgdmFyIGRvbUNhY2hlID0gcHJpdmF0ZVByb3BzLmRvbUNhY2hlLmdldCh0aGlzKTtcbiAgc2hvdyhkb21DYWNoZS5wcm9ncmVzc1N0ZXBzKTtcbn1cbmZ1bmN0aW9uIGhpZGVQcm9ncmVzc1N0ZXBzKCkge1xuICB2YXIgZG9tQ2FjaGUgPSBwcml2YXRlUHJvcHMuZG9tQ2FjaGUuZ2V0KHRoaXMpO1xuICBoaWRlKGRvbUNhY2hlLnByb2dyZXNzU3RlcHMpO1xufVxuXG52YXIgVGltZXIgPSBmdW5jdGlvbiBUaW1lcihjYWxsYmFjaywgZGVsYXkpIHtcbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRpbWVyKTtcblxuICB2YXIgaWQsXG4gICAgICBzdGFydGVkLFxuICAgICAgcmVtYWluaW5nID0gZGVsYXk7XG4gIHRoaXMucnVubmluZyA9IGZhbHNlO1xuXG4gIHRoaXMuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF0aGlzLnJ1bm5pbmcpIHtcbiAgICAgIHRoaXMucnVubmluZyA9IHRydWU7XG4gICAgICBzdGFydGVkID0gbmV3IERhdGUoKTtcbiAgICAgIGlkID0gc2V0VGltZW91dChjYWxsYmFjaywgcmVtYWluaW5nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVtYWluaW5nO1xuICB9O1xuXG4gIHRoaXMuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5ydW5uaW5nKSB7XG4gICAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgIGNsZWFyVGltZW91dChpZCk7XG4gICAgICByZW1haW5pbmcgLT0gbmV3IERhdGUoKSAtIHN0YXJ0ZWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlbWFpbmluZztcbiAgfTtcblxuICB0aGlzLmluY3JlYXNlID0gZnVuY3Rpb24gKG4pIHtcbiAgICB2YXIgcnVubmluZyA9IHRoaXMucnVubmluZztcblxuICAgIGlmIChydW5uaW5nKSB7XG4gICAgICB0aGlzLnN0b3AoKTtcbiAgICB9XG5cbiAgICByZW1haW5pbmcgKz0gbjtcblxuICAgIGlmIChydW5uaW5nKSB7XG4gICAgICB0aGlzLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlbWFpbmluZztcbiAgfTtcblxuICB0aGlzLmdldFRpbWVyTGVmdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5ydW5uaW5nKSB7XG4gICAgICB0aGlzLnN0b3AoKTtcbiAgICAgIHRoaXMuc3RhcnQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVtYWluaW5nO1xuICB9O1xuXG4gIHRoaXMuaXNSdW5uaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLnJ1bm5pbmc7XG4gIH07XG5cbiAgdGhpcy5zdGFydCgpO1xufTtcblxudmFyIGRlZmF1bHRJbnB1dFZhbGlkYXRvcnMgPSB7XG4gIGVtYWlsOiBmdW5jdGlvbiBlbWFpbChzdHJpbmcsIHZhbGlkYXRpb25NZXNzYWdlKSB7XG4gICAgcmV0dXJuIC9eW2EtekEtWjAtOS4rXy1dK0BbYS16QS1aMC05Li1dK1xcLlthLXpBLVowLTktXXsyLDI0fSQvLnRlc3Qoc3RyaW5nKSA/IFByb21pc2UucmVzb2x2ZSgpIDogUHJvbWlzZS5yZXNvbHZlKHZhbGlkYXRpb25NZXNzYWdlID8gdmFsaWRhdGlvbk1lc3NhZ2UgOiAnSW52YWxpZCBlbWFpbCBhZGRyZXNzJyk7XG4gIH0sXG4gIHVybDogZnVuY3Rpb24gdXJsKHN0cmluZywgdmFsaWRhdGlvbk1lc3NhZ2UpIHtcbiAgICAvLyB0YWtlbiBmcm9tIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zODA5NDM1IHdpdGggYSBzbWFsbCBjaGFuZ2UgZnJvbSAjMTMwNlxuICAgIHJldHVybiAvXmh0dHBzPzpcXC9cXC8od3d3XFwuKT9bLWEtekEtWjAtOUA6JS5fK34jPV17MiwyNTZ9XFwuW2Etel17Miw2M31cXGIoWy1hLXpBLVowLTlAOiVfKy5+Iz8mLy89XSopJC8udGVzdChzdHJpbmcpID8gUHJvbWlzZS5yZXNvbHZlKCkgOiBQcm9taXNlLnJlc29sdmUodmFsaWRhdGlvbk1lc3NhZ2UgPyB2YWxpZGF0aW9uTWVzc2FnZSA6ICdJbnZhbGlkIFVSTCcpO1xuICB9XG59O1xuXG4vKipcbiAqIFNldCB0eXBlLCB0ZXh0IGFuZCBhY3Rpb25zIG9uIHBvcHVwXG4gKlxuICogQHBhcmFtIHBhcmFtc1xuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cblxuZnVuY3Rpb24gc2V0UGFyYW1ldGVycyhwYXJhbXMpIHtcbiAgLy8gVXNlIGRlZmF1bHQgYGlucHV0VmFsaWRhdG9yYCBmb3Igc3VwcG9ydGVkIGlucHV0IHR5cGVzIGlmIG5vdCBwcm92aWRlZFxuICBpZiAoIXBhcmFtcy5pbnB1dFZhbGlkYXRvcikge1xuICAgIE9iamVjdC5rZXlzKGRlZmF1bHRJbnB1dFZhbGlkYXRvcnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgaWYgKHBhcmFtcy5pbnB1dCA9PT0ga2V5KSB7XG4gICAgICAgIHBhcmFtcy5pbnB1dFZhbGlkYXRvciA9IGRlZmF1bHRJbnB1dFZhbGlkYXRvcnNba2V5XTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSAvLyBEZXRlcm1pbmUgaWYgdGhlIGN1c3RvbSB0YXJnZXQgZWxlbWVudCBpcyB2YWxpZFxuXG5cbiAgaWYgKCFwYXJhbXMudGFyZ2V0IHx8IHR5cGVvZiBwYXJhbXMudGFyZ2V0ID09PSAnc3RyaW5nJyAmJiAhZG9jdW1lbnQucXVlcnlTZWxlY3RvcihwYXJhbXMudGFyZ2V0KSB8fCB0eXBlb2YgcGFyYW1zLnRhcmdldCAhPT0gJ3N0cmluZycgJiYgIXBhcmFtcy50YXJnZXQuYXBwZW5kQ2hpbGQpIHtcbiAgICB3YXJuKCdUYXJnZXQgcGFyYW1ldGVyIGlzIG5vdCB2YWxpZCwgZGVmYXVsdGluZyB0byBcImJvZHlcIicpO1xuICAgIHBhcmFtcy50YXJnZXQgPSAnYm9keSc7XG4gIH0gLy8gQW5pbWF0aW9uXG5cblxuICBpZiAodHlwZW9mIHBhcmFtcy5hbmltYXRpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICBwYXJhbXMuYW5pbWF0aW9uID0gcGFyYW1zLmFuaW1hdGlvbi5jYWxsKCk7XG4gIH1cblxuICB2YXIgcG9wdXA7XG4gIHZhciBvbGRQb3B1cCA9IGdldFBvcHVwKCk7XG4gIHZhciB0YXJnZXRFbGVtZW50ID0gdHlwZW9mIHBhcmFtcy50YXJnZXQgPT09ICdzdHJpbmcnID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihwYXJhbXMudGFyZ2V0KSA6IHBhcmFtcy50YXJnZXQ7IC8vIElmIHRoZSBtb2RlbCB0YXJnZXQgaGFzIGNoYW5nZWQsIHJlZnJlc2ggdGhlIHBvcHVwXG5cbiAgaWYgKG9sZFBvcHVwICYmIHRhcmdldEVsZW1lbnQgJiYgb2xkUG9wdXAucGFyZW50Tm9kZSAhPT0gdGFyZ2V0RWxlbWVudC5wYXJlbnROb2RlKSB7XG4gICAgcG9wdXAgPSBpbml0KHBhcmFtcyk7XG4gIH0gZWxzZSB7XG4gICAgcG9wdXAgPSBvbGRQb3B1cCB8fCBpbml0KHBhcmFtcyk7XG4gIH0gLy8gU2V0IHBvcHVwIHdpZHRoXG5cblxuICBpZiAocGFyYW1zLndpZHRoKSB7XG4gICAgcG9wdXAuc3R5bGUud2lkdGggPSB0eXBlb2YgcGFyYW1zLndpZHRoID09PSAnbnVtYmVyJyA/IHBhcmFtcy53aWR0aCArICdweCcgOiBwYXJhbXMud2lkdGg7XG4gIH0gLy8gU2V0IHBvcHVwIHBhZGRpbmdcblxuXG4gIGlmIChwYXJhbXMucGFkZGluZykge1xuICAgIHBvcHVwLnN0eWxlLnBhZGRpbmcgPSB0eXBlb2YgcGFyYW1zLnBhZGRpbmcgPT09ICdudW1iZXInID8gcGFyYW1zLnBhZGRpbmcgKyAncHgnIDogcGFyYW1zLnBhZGRpbmc7XG4gIH0gLy8gU2V0IHBvcHVwIGJhY2tncm91bmRcblxuXG4gIGlmIChwYXJhbXMuYmFja2dyb3VuZCkge1xuICAgIHBvcHVwLnN0eWxlLmJhY2tncm91bmQgPSBwYXJhbXMuYmFja2dyb3VuZDtcbiAgfVxuXG4gIHZhciBwb3B1cEJhY2tncm91bmRDb2xvciA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHBvcHVwKS5nZXRQcm9wZXJ0eVZhbHVlKCdiYWNrZ3JvdW5kLWNvbG9yJyk7XG4gIHZhciBzdWNjZXNzSWNvblBhcnRzID0gcG9wdXAucXVlcnlTZWxlY3RvckFsbCgnW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmVdLCAuc3dhbDItc3VjY2Vzcy1maXgnKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN1Y2Nlc3NJY29uUGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICBzdWNjZXNzSWNvblBhcnRzW2ldLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHBvcHVwQmFja2dyb3VuZENvbG9yO1xuICB9XG5cbiAgdmFyIGNvbnRhaW5lciA9IGdldENvbnRhaW5lcigpO1xuICB2YXIgY2xvc2VCdXR0b24gPSBnZXRDbG9zZUJ1dHRvbigpO1xuICB2YXIgZm9vdGVyID0gZ2V0Rm9vdGVyKCk7IC8vIFRpdGxlXG5cbiAgcmVuZGVyVGl0bGUocGFyYW1zKTsgLy8gQ29udGVudFxuXG4gIHJlbmRlckNvbnRlbnQocGFyYW1zKTsgLy8gQmFja2Ryb3BcblxuICBpZiAodHlwZW9mIHBhcmFtcy5iYWNrZHJvcCA9PT0gJ3N0cmluZycpIHtcbiAgICBnZXRDb250YWluZXIoKS5zdHlsZS5iYWNrZ3JvdW5kID0gcGFyYW1zLmJhY2tkcm9wO1xuICB9IGVsc2UgaWYgKCFwYXJhbXMuYmFja2Ryb3ApIHtcbiAgICBhZGRDbGFzcyhbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBkb2N1bWVudC5ib2R5XSwgc3dhbENsYXNzZXNbJ25vLWJhY2tkcm9wJ10pO1xuICB9XG5cbiAgaWYgKCFwYXJhbXMuYmFja2Ryb3AgJiYgcGFyYW1zLmFsbG93T3V0c2lkZUNsaWNrKSB7XG4gICAgd2FybignXCJhbGxvd091dHNpZGVDbGlja1wiIHBhcmFtZXRlciByZXF1aXJlcyBgYmFja2Ryb3BgIHBhcmFtZXRlciB0byBiZSBzZXQgdG8gYHRydWVgJyk7XG4gIH0gLy8gUG9zaXRpb25cblxuXG4gIGlmIChwYXJhbXMucG9zaXRpb24gaW4gc3dhbENsYXNzZXMpIHtcbiAgICBhZGRDbGFzcyhjb250YWluZXIsIHN3YWxDbGFzc2VzW3BhcmFtcy5wb3NpdGlvbl0pO1xuICB9IGVsc2Uge1xuICAgIHdhcm4oJ1RoZSBcInBvc2l0aW9uXCIgcGFyYW1ldGVyIGlzIG5vdCB2YWxpZCwgZGVmYXVsdGluZyB0byBcImNlbnRlclwiJyk7XG4gICAgYWRkQ2xhc3MoY29udGFpbmVyLCBzd2FsQ2xhc3Nlcy5jZW50ZXIpO1xuICB9IC8vIEdyb3dcblxuXG4gIGlmIChwYXJhbXMuZ3JvdyAmJiB0eXBlb2YgcGFyYW1zLmdyb3cgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFyIGdyb3dDbGFzcyA9ICdncm93LScgKyBwYXJhbXMuZ3JvdztcblxuICAgIGlmIChncm93Q2xhc3MgaW4gc3dhbENsYXNzZXMpIHtcbiAgICAgIGFkZENsYXNzKGNvbnRhaW5lciwgc3dhbENsYXNzZXNbZ3Jvd0NsYXNzXSk7XG4gICAgfVxuICB9IC8vIENsb3NlIGJ1dHRvblxuXG5cbiAgaWYgKHBhcmFtcy5zaG93Q2xvc2VCdXR0b24pIHtcbiAgICBjbG9zZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCBwYXJhbXMuY2xvc2VCdXR0b25BcmlhTGFiZWwpO1xuICAgIHNob3coY2xvc2VCdXR0b24pO1xuICB9IGVsc2Uge1xuICAgIGhpZGUoY2xvc2VCdXR0b24pO1xuICB9IC8vIERlZmF1bHQgQ2xhc3NcblxuXG4gIHBvcHVwLmNsYXNzTmFtZSA9IHN3YWxDbGFzc2VzLnBvcHVwO1xuXG4gIGlmIChwYXJhbXMudG9hc3QpIHtcbiAgICBhZGRDbGFzcyhbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBkb2N1bWVudC5ib2R5XSwgc3dhbENsYXNzZXNbJ3RvYXN0LXNob3duJ10pO1xuICAgIGFkZENsYXNzKHBvcHVwLCBzd2FsQ2xhc3Nlcy50b2FzdCk7XG4gIH0gZWxzZSB7XG4gICAgYWRkQ2xhc3MocG9wdXAsIHN3YWxDbGFzc2VzLm1vZGFsKTtcbiAgfSAvLyBDdXN0b20gQ2xhc3NcblxuXG4gIGlmIChwYXJhbXMuY3VzdG9tQ2xhc3MpIHtcbiAgICBhZGRDbGFzcyhwb3B1cCwgcGFyYW1zLmN1c3RvbUNsYXNzKTtcbiAgfVxuXG4gIGlmIChwYXJhbXMuY3VzdG9tQ29udGFpbmVyQ2xhc3MpIHtcbiAgICBhZGRDbGFzcyhjb250YWluZXIsIHBhcmFtcy5jdXN0b21Db250YWluZXJDbGFzcyk7XG4gIH0gLy8gUHJvZ3Jlc3Mgc3RlcHNcblxuXG4gIHJlbmRlclByb2dyZXNzU3RlcHMocGFyYW1zKTsgLy8gSWNvblxuXG4gIHJlbmRlckljb24ocGFyYW1zKTsgLy8gSW1hZ2VcblxuICByZW5kZXJJbWFnZShwYXJhbXMpOyAvLyBBY3Rpb25zIChidXR0b25zKVxuXG4gIHJlbmRlckFjdGlvbnMocGFyYW1zKTsgLy8gRm9vdGVyXG5cbiAgcGFyc2VIdG1sVG9Db250YWluZXIocGFyYW1zLmZvb3RlciwgZm9vdGVyKTsgLy8gQ1NTIGFuaW1hdGlvblxuXG4gIGlmIChwYXJhbXMuYW5pbWF0aW9uID09PSB0cnVlKSB7XG4gICAgcmVtb3ZlQ2xhc3MocG9wdXAsIHN3YWxDbGFzc2VzLm5vYW5pbWF0aW9uKTtcbiAgfSBlbHNlIHtcbiAgICBhZGRDbGFzcyhwb3B1cCwgc3dhbENsYXNzZXMubm9hbmltYXRpb24pO1xuICB9IC8vIHNob3dMb2FkZXJPbkNvbmZpcm0gJiYgcHJlQ29uZmlybVxuXG5cbiAgaWYgKHBhcmFtcy5zaG93TG9hZGVyT25Db25maXJtICYmICFwYXJhbXMucHJlQ29uZmlybSkge1xuICAgIHdhcm4oJ3Nob3dMb2FkZXJPbkNvbmZpcm0gaXMgc2V0IHRvIHRydWUsIGJ1dCBwcmVDb25maXJtIGlzIG5vdCBkZWZpbmVkLlxcbicgKyAnc2hvd0xvYWRlck9uQ29uZmlybSBzaG91bGQgYmUgdXNlZCB0b2dldGhlciB3aXRoIHByZUNvbmZpcm0sIHNlZSB1c2FnZSBleGFtcGxlOlxcbicgKyAnaHR0cHM6Ly9zd2VldGFsZXJ0Mi5naXRodWIuaW8vI2FqYXgtcmVxdWVzdCcpO1xuICB9XG59XG5cbi8qKlxuICogT3BlbiBwb3B1cCwgYWRkIG5lY2Vzc2FyeSBjbGFzc2VzIGFuZCBzdHlsZXMsIGZpeCBzY3JvbGxiYXJcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBwYXJhbXNcbiAqL1xuXG52YXIgb3BlblBvcHVwID0gZnVuY3Rpb24gb3BlblBvcHVwKHBhcmFtcykge1xuICB2YXIgY29udGFpbmVyID0gZ2V0Q29udGFpbmVyKCk7XG4gIHZhciBwb3B1cCA9IGdldFBvcHVwKCk7XG5cbiAgaWYgKHBhcmFtcy5vbkJlZm9yZU9wZW4gIT09IG51bGwgJiYgdHlwZW9mIHBhcmFtcy5vbkJlZm9yZU9wZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICBwYXJhbXMub25CZWZvcmVPcGVuKHBvcHVwKTtcbiAgfVxuXG4gIGlmIChwYXJhbXMuYW5pbWF0aW9uKSB7XG4gICAgYWRkQ2xhc3MocG9wdXAsIHN3YWxDbGFzc2VzLnNob3cpO1xuICAgIGFkZENsYXNzKGNvbnRhaW5lciwgc3dhbENsYXNzZXMuZmFkZSk7XG4gICAgcmVtb3ZlQ2xhc3MocG9wdXAsIHN3YWxDbGFzc2VzLmhpZGUpO1xuICB9IGVsc2Uge1xuICAgIHJlbW92ZUNsYXNzKHBvcHVwLCBzd2FsQ2xhc3Nlcy5mYWRlKTtcbiAgfVxuXG4gIHNob3cocG9wdXApOyAvLyBzY3JvbGxpbmcgaXMgJ2hpZGRlbicgdW50aWwgYW5pbWF0aW9uIGlzIGRvbmUsIGFmdGVyIHRoYXQgJ2F1dG8nXG5cbiAgY29udGFpbmVyLnN0eWxlLm92ZXJmbG93WSA9ICdoaWRkZW4nO1xuXG4gIGlmIChhbmltYXRpb25FbmRFdmVudCAmJiAhaGFzQ2xhc3MocG9wdXAsIHN3YWxDbGFzc2VzLm5vYW5pbWF0aW9uKSkge1xuICAgIHBvcHVwLmFkZEV2ZW50TGlzdGVuZXIoYW5pbWF0aW9uRW5kRXZlbnQsIGZ1bmN0aW9uIHN3YWxDbG9zZUV2ZW50RmluaXNoZWQoKSB7XG4gICAgICBwb3B1cC5yZW1vdmVFdmVudExpc3RlbmVyKGFuaW1hdGlvbkVuZEV2ZW50LCBzd2FsQ2xvc2VFdmVudEZpbmlzaGVkKTtcbiAgICAgIGNvbnRhaW5lci5zdHlsZS5vdmVyZmxvd1kgPSAnYXV0byc7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgY29udGFpbmVyLnN0eWxlLm92ZXJmbG93WSA9ICdhdXRvJztcbiAgfVxuXG4gIGFkZENsYXNzKFtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIGRvY3VtZW50LmJvZHksIGNvbnRhaW5lcl0sIHN3YWxDbGFzc2VzLnNob3duKTtcblxuICBpZiAocGFyYW1zLmhlaWdodEF1dG8gJiYgcGFyYW1zLmJhY2tkcm9wICYmICFwYXJhbXMudG9hc3QpIHtcbiAgICBhZGRDbGFzcyhbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBkb2N1bWVudC5ib2R5XSwgc3dhbENsYXNzZXNbJ2hlaWdodC1hdXRvJ10pO1xuICB9XG5cbiAgaWYgKGlzTW9kYWwoKSkge1xuICAgIGlmIChwYXJhbXMuc2Nyb2xsYmFyUGFkZGluZykge1xuICAgICAgZml4U2Nyb2xsYmFyKCk7XG4gICAgfVxuXG4gICAgaU9TZml4KCk7XG4gICAgSUVmaXgoKTtcbiAgICBzZXRBcmlhSGlkZGVuKCk7IC8vIHN3ZWV0YWxlcnQyL2lzc3Vlcy8xMjQ3XG5cbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnRhaW5lci5zY3JvbGxUb3AgPSAwO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKCFpc1RvYXN0KCkgJiYgIWdsb2JhbFN0YXRlLnByZXZpb3VzQWN0aXZlRWxlbWVudCkge1xuICAgIGdsb2JhbFN0YXRlLnByZXZpb3VzQWN0aXZlRWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBpZiAocGFyYW1zLm9uT3BlbiAhPT0gbnVsbCAmJiB0eXBlb2YgcGFyYW1zLm9uT3BlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgcGFyYW1zLm9uT3Blbihwb3B1cCk7XG4gICAgfSk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIF9tYWluKHVzZXJQYXJhbXMpIHtcbiAgdmFyIF90aGlzID0gdGhpcztcblxuICBzaG93V2FybmluZ3NGb3JQYXJhbXModXNlclBhcmFtcyk7XG5cbiAgdmFyIGlubmVyUGFyYW1zID0gX2V4dGVuZHMoe30sIGRlZmF1bHRQYXJhbXMsIHVzZXJQYXJhbXMpO1xuXG4gIHNldFBhcmFtZXRlcnMoaW5uZXJQYXJhbXMpO1xuICBPYmplY3QuZnJlZXplKGlubmVyUGFyYW1zKTtcbiAgcHJpdmF0ZVByb3BzLmlubmVyUGFyYW1zLnNldCh0aGlzLCBpbm5lclBhcmFtcyk7IC8vIGNsZWFyIHRoZSBwcmV2aW91cyB0aW1lclxuXG4gIGlmIChnbG9iYWxTdGF0ZS50aW1lb3V0KSB7XG4gICAgZ2xvYmFsU3RhdGUudGltZW91dC5zdG9wKCk7XG4gICAgZGVsZXRlIGdsb2JhbFN0YXRlLnRpbWVvdXQ7XG4gIH0gLy8gY2xlYXIgdGhlIHJlc3RvcmUgZm9jdXMgdGltZW91dFxuXG5cbiAgY2xlYXJUaW1lb3V0KGdsb2JhbFN0YXRlLnJlc3RvcmVGb2N1c1RpbWVvdXQpO1xuICB2YXIgZG9tQ2FjaGUgPSB7XG4gICAgcG9wdXA6IGdldFBvcHVwKCksXG4gICAgY29udGFpbmVyOiBnZXRDb250YWluZXIoKSxcbiAgICBjb250ZW50OiBnZXRDb250ZW50KCksXG4gICAgYWN0aW9uczogZ2V0QWN0aW9ucygpLFxuICAgIGNvbmZpcm1CdXR0b246IGdldENvbmZpcm1CdXR0b24oKSxcbiAgICBjYW5jZWxCdXR0b246IGdldENhbmNlbEJ1dHRvbigpLFxuICAgIGNsb3NlQnV0dG9uOiBnZXRDbG9zZUJ1dHRvbigpLFxuICAgIHZhbGlkYXRpb25NZXNzYWdlOiBnZXRWYWxpZGF0aW9uTWVzc2FnZSgpLFxuICAgIHByb2dyZXNzU3RlcHM6IGdldFByb2dyZXNzU3RlcHMoKVxuICB9O1xuICBwcml2YXRlUHJvcHMuZG9tQ2FjaGUuc2V0KHRoaXMsIGRvbUNhY2hlKTtcbiAgdmFyIGNvbnN0cnVjdG9yID0gdGhpcy5jb25zdHJ1Y3RvcjtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgLy8gZnVuY3Rpb25zIHRvIGhhbmRsZSBhbGwgY2xvc2luZ3MvZGlzbWlzc2Fsc1xuICAgIHZhciBzdWNjZWVkV2l0aCA9IGZ1bmN0aW9uIHN1Y2NlZWRXaXRoKHZhbHVlKSB7XG4gICAgICBfdGhpcy5jbG9zZVBvcHVwKHtcbiAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgdmFyIGRpc21pc3NXaXRoID0gZnVuY3Rpb24gZGlzbWlzc1dpdGgoZGlzbWlzcykge1xuICAgICAgX3RoaXMuY2xvc2VQb3B1cCh7XG4gICAgICAgIGRpc21pc3M6IGRpc21pc3NcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBwcml2YXRlTWV0aG9kcy5zd2FsUHJvbWlzZVJlc29sdmUuc2V0KF90aGlzLCByZXNvbHZlKTsgLy8gQ2xvc2Ugb24gdGltZXJcblxuICAgIGlmIChpbm5lclBhcmFtcy50aW1lcikge1xuICAgICAgZ2xvYmFsU3RhdGUudGltZW91dCA9IG5ldyBUaW1lcihmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRpc21pc3NXaXRoKCd0aW1lcicpO1xuICAgICAgICBkZWxldGUgZ2xvYmFsU3RhdGUudGltZW91dDtcbiAgICAgIH0sIGlubmVyUGFyYW1zLnRpbWVyKTtcbiAgICB9IC8vIEdldCB0aGUgdmFsdWUgb2YgdGhlIHBvcHVwIGlucHV0XG5cblxuICAgIHZhciBnZXRJbnB1dFZhbHVlID0gZnVuY3Rpb24gZ2V0SW5wdXRWYWx1ZSgpIHtcbiAgICAgIHZhciBpbnB1dCA9IF90aGlzLmdldElucHV0KCk7XG5cbiAgICAgIGlmICghaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHN3aXRjaCAoaW5uZXJQYXJhbXMuaW5wdXQpIHtcbiAgICAgICAgY2FzZSAnY2hlY2tib3gnOlxuICAgICAgICAgIHJldHVybiBpbnB1dC5jaGVja2VkID8gMSA6IDA7XG5cbiAgICAgICAgY2FzZSAncmFkaW8nOlxuICAgICAgICAgIHJldHVybiBpbnB1dC5jaGVja2VkID8gaW5wdXQudmFsdWUgOiBudWxsO1xuXG4gICAgICAgIGNhc2UgJ2ZpbGUnOlxuICAgICAgICAgIHJldHVybiBpbnB1dC5maWxlcy5sZW5ndGggPyBpbnB1dC5maWxlc1swXSA6IG51bGw7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gaW5uZXJQYXJhbXMuaW5wdXRBdXRvVHJpbSA/IGlucHV0LnZhbHVlLnRyaW0oKSA6IGlucHV0LnZhbHVlO1xuICAgICAgfVxuICAgIH07IC8vIGlucHV0IGF1dG9mb2N1c1xuXG5cbiAgICBpZiAoaW5uZXJQYXJhbXMuaW5wdXQpIHtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaW5wdXQgPSBfdGhpcy5nZXRJbnB1dCgpO1xuXG4gICAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICAgIGZvY3VzSW5wdXQoaW5wdXQpO1xuICAgICAgICB9XG4gICAgICB9LCAwKTtcbiAgICB9XG5cbiAgICB2YXIgY29uZmlybSA9IGZ1bmN0aW9uIGNvbmZpcm0odmFsdWUpIHtcbiAgICAgIGlmIChpbm5lclBhcmFtcy5zaG93TG9hZGVyT25Db25maXJtKSB7XG4gICAgICAgIGNvbnN0cnVjdG9yLnNob3dMb2FkaW5nKCk7IC8vIFRPRE86IG1ha2Ugc2hvd0xvYWRpbmcgYW4gKmluc3RhbmNlKiBtZXRob2RcbiAgICAgIH1cblxuICAgICAgaWYgKGlubmVyUGFyYW1zLnByZUNvbmZpcm0pIHtcbiAgICAgICAgX3RoaXMucmVzZXRWYWxpZGF0aW9uTWVzc2FnZSgpO1xuXG4gICAgICAgIHZhciBwcmVDb25maXJtUHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBpbm5lclBhcmFtcy5wcmVDb25maXJtKHZhbHVlLCBpbm5lclBhcmFtcy52YWxpZGF0aW9uTWVzc2FnZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBwcmVDb25maXJtUHJvbWlzZS50aGVuKGZ1bmN0aW9uIChwcmVDb25maXJtVmFsdWUpIHtcbiAgICAgICAgICBpZiAoaXNWaXNpYmxlKGRvbUNhY2hlLnZhbGlkYXRpb25NZXNzYWdlKSB8fCBwcmVDb25maXJtVmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBfdGhpcy5oaWRlTG9hZGluZygpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdWNjZWVkV2l0aCh0eXBlb2YgcHJlQ29uZmlybVZhbHVlID09PSAndW5kZWZpbmVkJyA/IHZhbHVlIDogcHJlQ29uZmlybVZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3VjY2VlZFdpdGgodmFsdWUpO1xuICAgICAgfVxuICAgIH07IC8vIE1vdXNlIGludGVyYWN0aW9uc1xuXG5cbiAgICB2YXIgb25CdXR0b25FdmVudCA9IGZ1bmN0aW9uIG9uQnV0dG9uRXZlbnQoZSkge1xuICAgICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0O1xuICAgICAgdmFyIGNvbmZpcm1CdXR0b24gPSBkb21DYWNoZS5jb25maXJtQnV0dG9uLFxuICAgICAgICAgIGNhbmNlbEJ1dHRvbiA9IGRvbUNhY2hlLmNhbmNlbEJ1dHRvbjtcbiAgICAgIHZhciB0YXJnZXRlZENvbmZpcm0gPSBjb25maXJtQnV0dG9uICYmIChjb25maXJtQnV0dG9uID09PSB0YXJnZXQgfHwgY29uZmlybUJ1dHRvbi5jb250YWlucyh0YXJnZXQpKTtcbiAgICAgIHZhciB0YXJnZXRlZENhbmNlbCA9IGNhbmNlbEJ1dHRvbiAmJiAoY2FuY2VsQnV0dG9uID09PSB0YXJnZXQgfHwgY2FuY2VsQnV0dG9uLmNvbnRhaW5zKHRhcmdldCkpO1xuXG4gICAgICBzd2l0Y2ggKGUudHlwZSkge1xuICAgICAgICBjYXNlICdjbGljayc6XG4gICAgICAgICAgLy8gQ2xpY2tlZCAnY29uZmlybSdcbiAgICAgICAgICBpZiAodGFyZ2V0ZWRDb25maXJtICYmIGNvbnN0cnVjdG9yLmlzVmlzaWJsZSgpKSB7XG4gICAgICAgICAgICBfdGhpcy5kaXNhYmxlQnV0dG9ucygpO1xuXG4gICAgICAgICAgICBpZiAoaW5uZXJQYXJhbXMuaW5wdXQpIHtcbiAgICAgICAgICAgICAgdmFyIGlucHV0VmFsdWUgPSBnZXRJbnB1dFZhbHVlKCk7XG5cbiAgICAgICAgICAgICAgaWYgKGlubmVyUGFyYW1zLmlucHV0VmFsaWRhdG9yKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuZGlzYWJsZUlucHV0KCk7XG5cbiAgICAgICAgICAgICAgICB2YXIgdmFsaWRhdGlvblByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBpbm5lclBhcmFtcy5pbnB1dFZhbGlkYXRvcihpbnB1dFZhbHVlLCBpbm5lclBhcmFtcy52YWxpZGF0aW9uTWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdmFsaWRhdGlvblByb21pc2UudGhlbihmdW5jdGlvbiAodmFsaWRhdGlvbk1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICAgIF90aGlzLmVuYWJsZUJ1dHRvbnMoKTtcblxuICAgICAgICAgICAgICAgICAgX3RoaXMuZW5hYmxlSW5wdXQoKTtcblxuICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRpb25NZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnNob3dWYWxpZGF0aW9uTWVzc2FnZSh2YWxpZGF0aW9uTWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25maXJtKGlucHV0VmFsdWUpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFfdGhpcy5nZXRJbnB1dCgpLmNoZWNrVmFsaWRpdHkoKSkge1xuICAgICAgICAgICAgICAgIF90aGlzLmVuYWJsZUJ1dHRvbnMoKTtcblxuICAgICAgICAgICAgICAgIF90aGlzLnNob3dWYWxpZGF0aW9uTWVzc2FnZShpbm5lclBhcmFtcy52YWxpZGF0aW9uTWVzc2FnZSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uZmlybShpbnB1dFZhbHVlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uZmlybSh0cnVlKTtcbiAgICAgICAgICAgIH0gLy8gQ2xpY2tlZCAnY2FuY2VsJ1xuXG4gICAgICAgICAgfSBlbHNlIGlmICh0YXJnZXRlZENhbmNlbCAmJiBjb25zdHJ1Y3Rvci5pc1Zpc2libGUoKSkge1xuICAgICAgICAgICAgX3RoaXMuZGlzYWJsZUJ1dHRvbnMoKTtcblxuICAgICAgICAgICAgZGlzbWlzc1dpdGgoY29uc3RydWN0b3IuRGlzbWlzc1JlYXNvbi5jYW5jZWwpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICB9XG4gICAgfTtcblxuICAgIHZhciBidXR0b25zID0gZG9tQ2FjaGUucG9wdXAucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJ1dHRvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGJ1dHRvbnNbaV0ub25jbGljayA9IG9uQnV0dG9uRXZlbnQ7XG4gICAgICBidXR0b25zW2ldLm9ubW91c2VvdmVyID0gb25CdXR0b25FdmVudDtcbiAgICAgIGJ1dHRvbnNbaV0ub25tb3VzZW91dCA9IG9uQnV0dG9uRXZlbnQ7XG4gICAgICBidXR0b25zW2ldLm9ubW91c2Vkb3duID0gb25CdXR0b25FdmVudDtcbiAgICB9IC8vIENsb3NpbmcgcG9wdXAgYnkgY2xvc2UgYnV0dG9uXG5cblxuICAgIGRvbUNhY2hlLmNsb3NlQnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBkaXNtaXNzV2l0aChjb25zdHJ1Y3Rvci5EaXNtaXNzUmVhc29uLmNsb3NlKTtcbiAgICB9O1xuXG4gICAgaWYgKGlubmVyUGFyYW1zLnRvYXN0KSB7XG4gICAgICAvLyBDbG9zaW5nIHBvcHVwIGJ5IGludGVybmFsIGNsaWNrXG4gICAgICBkb21DYWNoZS5wb3B1cC5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoaW5uZXJQYXJhbXMuc2hvd0NvbmZpcm1CdXR0b24gfHwgaW5uZXJQYXJhbXMuc2hvd0NhbmNlbEJ1dHRvbiB8fCBpbm5lclBhcmFtcy5zaG93Q2xvc2VCdXR0b24gfHwgaW5uZXJQYXJhbXMuaW5wdXQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBkaXNtaXNzV2l0aChjb25zdHJ1Y3Rvci5EaXNtaXNzUmVhc29uLmNsb3NlKTtcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBpZ25vcmVPdXRzaWRlQ2xpY2sgPSBmYWxzZTsgLy8gSWdub3JlIGNsaWNrIGV2ZW50cyB0aGF0IGhhZCBtb3VzZWRvd24gb24gdGhlIHBvcHVwIGJ1dCBtb3VzZXVwIG9uIHRoZSBjb250YWluZXJcbiAgICAgIC8vIFRoaXMgY2FuIGhhcHBlbiB3aGVuIHRoZSB1c2VyIGRyYWdzIGEgc2xpZGVyXG5cbiAgICAgIGRvbUNhY2hlLnBvcHVwLm9ubW91c2Vkb3duID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBkb21DYWNoZS5jb250YWluZXIub25tb3VzZXVwID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBkb21DYWNoZS5jb250YWluZXIub25tb3VzZXVwID0gdW5kZWZpbmVkOyAvLyBXZSBvbmx5IGNoZWNrIGlmIHRoZSBtb3VzZXVwIHRhcmdldCBpcyB0aGUgY29udGFpbmVyIGJlY2F1c2UgdXN1YWxseSBpdCBkb2Vzbid0XG4gICAgICAgICAgLy8gaGF2ZSBhbnkgb3RoZXIgZGlyZWN0IGNoaWxkcmVuIGFzaWRlIG9mIHRoZSBwb3B1cFxuXG4gICAgICAgICAgaWYgKGUudGFyZ2V0ID09PSBkb21DYWNoZS5jb250YWluZXIpIHtcbiAgICAgICAgICAgIGlnbm9yZU91dHNpZGVDbGljayA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfTsgLy8gSWdub3JlIGNsaWNrIGV2ZW50cyB0aGF0IGhhZCBtb3VzZWRvd24gb24gdGhlIGNvbnRhaW5lciBidXQgbW91c2V1cCBvbiB0aGUgcG9wdXBcblxuXG4gICAgICBkb21DYWNoZS5jb250YWluZXIub25tb3VzZWRvd24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRvbUNhY2hlLnBvcHVwLm9ubW91c2V1cCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgZG9tQ2FjaGUucG9wdXAub25tb3VzZXVwID0gdW5kZWZpbmVkOyAvLyBXZSBhbHNvIG5lZWQgdG8gY2hlY2sgaWYgdGhlIG1vdXNldXAgdGFyZ2V0IGlzIGEgY2hpbGQgb2YgdGhlIHBvcHVwXG5cbiAgICAgICAgICBpZiAoZS50YXJnZXQgPT09IGRvbUNhY2hlLnBvcHVwIHx8IGRvbUNhY2hlLnBvcHVwLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgICAgICAgaWdub3JlT3V0c2lkZUNsaWNrID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9O1xuXG4gICAgICBkb21DYWNoZS5jb250YWluZXIub25jbGljayA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmIChpZ25vcmVPdXRzaWRlQ2xpY2spIHtcbiAgICAgICAgICBpZ25vcmVPdXRzaWRlQ2xpY2sgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZS50YXJnZXQgIT09IGRvbUNhY2hlLmNvbnRhaW5lcikge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjYWxsSWZGdW5jdGlvbihpbm5lclBhcmFtcy5hbGxvd091dHNpZGVDbGljaykpIHtcbiAgICAgICAgICBkaXNtaXNzV2l0aChjb25zdHJ1Y3Rvci5EaXNtaXNzUmVhc29uLmJhY2tkcm9wKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9IC8vIFJldmVyc2UgYnV0dG9ucyAoQ29uZmlybSBvbiB0aGUgcmlnaHQgc2lkZSlcblxuXG4gICAgaWYgKGlubmVyUGFyYW1zLnJldmVyc2VCdXR0b25zKSB7XG4gICAgICBkb21DYWNoZS5jb25maXJtQnV0dG9uLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGRvbUNhY2hlLmNhbmNlbEJ1dHRvbiwgZG9tQ2FjaGUuY29uZmlybUJ1dHRvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvbUNhY2hlLmNvbmZpcm1CdXR0b24ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZG9tQ2FjaGUuY29uZmlybUJ1dHRvbiwgZG9tQ2FjaGUuY2FuY2VsQnV0dG9uKTtcbiAgICB9IC8vIEZvY3VzIGhhbmRsaW5nXG5cblxuICAgIHZhciBzZXRGb2N1cyA9IGZ1bmN0aW9uIHNldEZvY3VzKGluZGV4LCBpbmNyZW1lbnQpIHtcbiAgICAgIHZhciBmb2N1c2FibGVFbGVtZW50cyA9IGdldEZvY3VzYWJsZUVsZW1lbnRzKGlubmVyUGFyYW1zLmZvY3VzQ2FuY2VsKTsgLy8gc2VhcmNoIGZvciB2aXNpYmxlIGVsZW1lbnRzIGFuZCBzZWxlY3QgdGhlIG5leHQgcG9zc2libGUgbWF0Y2hcblxuICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGZvY3VzYWJsZUVsZW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICBpbmRleCA9IGluZGV4ICsgaW5jcmVtZW50OyAvLyByb2xsb3ZlciB0byBmaXJzdCBpdGVtXG5cbiAgICAgICAgaWYgKGluZGV4ID09PSBmb2N1c2FibGVFbGVtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICBpbmRleCA9IDA7IC8vIGdvIHRvIGxhc3QgaXRlbVxuICAgICAgICB9IGVsc2UgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgIGluZGV4ID0gZm9jdXNhYmxlRWxlbWVudHMubGVuZ3RoIC0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmb2N1c2FibGVFbGVtZW50c1tpbmRleF0uZm9jdXMoKTtcbiAgICAgIH0gLy8gbm8gdmlzaWJsZSBmb2N1c2FibGUgZWxlbWVudHMsIGZvY3VzIHRoZSBwb3B1cFxuXG5cbiAgICAgIGRvbUNhY2hlLnBvcHVwLmZvY3VzKCk7XG4gICAgfTtcblxuICAgIHZhciBrZXlkb3duSGFuZGxlciA9IGZ1bmN0aW9uIGtleWRvd25IYW5kbGVyKGUsIGlubmVyUGFyYW1zKSB7XG4gICAgICBpZiAoaW5uZXJQYXJhbXMuc3RvcEtleWRvd25Qcm9wYWdhdGlvbikge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfVxuXG4gICAgICB2YXIgYXJyb3dLZXlzID0gWydBcnJvd0xlZnQnLCAnQXJyb3dSaWdodCcsICdBcnJvd1VwJywgJ0Fycm93RG93bicsICdMZWZ0JywgJ1JpZ2h0JywgJ1VwJywgJ0Rvd24nIC8vIElFMTFcbiAgICAgIF07XG5cbiAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJyAmJiAhZS5pc0NvbXBvc2luZykge1xuICAgICAgICBpZiAoZS50YXJnZXQgJiYgX3RoaXMuZ2V0SW5wdXQoKSAmJiBlLnRhcmdldC5vdXRlckhUTUwgPT09IF90aGlzLmdldElucHV0KCkub3V0ZXJIVE1MKSB7XG4gICAgICAgICAgaWYgKFsndGV4dGFyZWEnLCAnZmlsZSddLmluZGV4T2YoaW5uZXJQYXJhbXMuaW5wdXQpICE9PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuOyAvLyBkbyBub3Qgc3VibWl0XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3RydWN0b3IuY2xpY2tDb25maXJtKCk7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9IC8vIFRBQlxuXG4gICAgICB9IGVsc2UgaWYgKGUua2V5ID09PSAnVGFiJykge1xuICAgICAgICB2YXIgdGFyZ2V0RWxlbWVudCA9IGUudGFyZ2V0O1xuICAgICAgICB2YXIgZm9jdXNhYmxlRWxlbWVudHMgPSBnZXRGb2N1c2FibGVFbGVtZW50cyhpbm5lclBhcmFtcy5mb2N1c0NhbmNlbCk7XG4gICAgICAgIHZhciBidG5JbmRleCA9IC0xO1xuXG4gICAgICAgIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IGZvY3VzYWJsZUVsZW1lbnRzLmxlbmd0aDsgX2kyKyspIHtcbiAgICAgICAgICBpZiAodGFyZ2V0RWxlbWVudCA9PT0gZm9jdXNhYmxlRWxlbWVudHNbX2kyXSkge1xuICAgICAgICAgICAgYnRuSW5kZXggPSBfaTI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWUuc2hpZnRLZXkpIHtcbiAgICAgICAgICAvLyBDeWNsZSB0byB0aGUgbmV4dCBidXR0b25cbiAgICAgICAgICBzZXRGb2N1cyhidG5JbmRleCwgMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gQ3ljbGUgdG8gdGhlIHByZXYgYnV0dG9uXG4gICAgICAgICAgc2V0Rm9jdXMoYnRuSW5kZXgsIC0xKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgLy8gQVJST1dTIC0gc3dpdGNoIGZvY3VzIGJldHdlZW4gYnV0dG9uc1xuICAgICAgfSBlbHNlIGlmIChhcnJvd0tleXMuaW5kZXhPZihlLmtleSkgIT09IC0xKSB7XG4gICAgICAgIC8vIGZvY3VzIENhbmNlbCBidXR0b24gaWYgQ29uZmlybSBidXR0b24gaXMgY3VycmVudGx5IGZvY3VzZWRcbiAgICAgICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IGRvbUNhY2hlLmNvbmZpcm1CdXR0b24gJiYgaXNWaXNpYmxlKGRvbUNhY2hlLmNhbmNlbEJ1dHRvbikpIHtcbiAgICAgICAgICBkb21DYWNoZS5jYW5jZWxCdXR0b24uZm9jdXMoKTsgLy8gYW5kIHZpY2UgdmVyc2FcbiAgICAgICAgfSBlbHNlIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBkb21DYWNoZS5jYW5jZWxCdXR0b24gJiYgaXNWaXNpYmxlKGRvbUNhY2hlLmNvbmZpcm1CdXR0b24pKSB7XG4gICAgICAgICAgZG9tQ2FjaGUuY29uZmlybUJ1dHRvbi5mb2N1cygpO1xuICAgICAgICB9IC8vIEVTQ1xuXG4gICAgICB9IGVsc2UgaWYgKChlLmtleSA9PT0gJ0VzY2FwZScgfHwgZS5rZXkgPT09ICdFc2MnKSAmJiBjYWxsSWZGdW5jdGlvbihpbm5lclBhcmFtcy5hbGxvd0VzY2FwZUtleSkgPT09IHRydWUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBkaXNtaXNzV2l0aChjb25zdHJ1Y3Rvci5EaXNtaXNzUmVhc29uLmVzYyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmIChnbG9iYWxTdGF0ZS5rZXlkb3duSGFuZGxlckFkZGVkKSB7XG4gICAgICBnbG9iYWxTdGF0ZS5rZXlkb3duVGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBnbG9iYWxTdGF0ZS5rZXlkb3duSGFuZGxlciwge1xuICAgICAgICBjYXB0dXJlOiBnbG9iYWxTdGF0ZS5rZXlkb3duTGlzdGVuZXJDYXB0dXJlXG4gICAgICB9KTtcbiAgICAgIGdsb2JhbFN0YXRlLmtleWRvd25IYW5kbGVyQWRkZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoIWlubmVyUGFyYW1zLnRvYXN0KSB7XG4gICAgICBnbG9iYWxTdGF0ZS5rZXlkb3duSGFuZGxlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiBrZXlkb3duSGFuZGxlcihlLCBpbm5lclBhcmFtcyk7XG4gICAgICB9O1xuXG4gICAgICBnbG9iYWxTdGF0ZS5rZXlkb3duVGFyZ2V0ID0gaW5uZXJQYXJhbXMua2V5ZG93bkxpc3RlbmVyQ2FwdHVyZSA/IHdpbmRvdyA6IGRvbUNhY2hlLnBvcHVwO1xuICAgICAgZ2xvYmFsU3RhdGUua2V5ZG93bkxpc3RlbmVyQ2FwdHVyZSA9IGlubmVyUGFyYW1zLmtleWRvd25MaXN0ZW5lckNhcHR1cmU7XG4gICAgICBnbG9iYWxTdGF0ZS5rZXlkb3duVGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBnbG9iYWxTdGF0ZS5rZXlkb3duSGFuZGxlciwge1xuICAgICAgICBjYXB0dXJlOiBnbG9iYWxTdGF0ZS5rZXlkb3duTGlzdGVuZXJDYXB0dXJlXG4gICAgICB9KTtcbiAgICAgIGdsb2JhbFN0YXRlLmtleWRvd25IYW5kbGVyQWRkZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIF90aGlzLmVuYWJsZUJ1dHRvbnMoKTtcblxuICAgIF90aGlzLmhpZGVMb2FkaW5nKCk7XG5cbiAgICBfdGhpcy5yZXNldFZhbGlkYXRpb25NZXNzYWdlKCk7XG5cbiAgICBpZiAoaW5uZXJQYXJhbXMudG9hc3QgJiYgKGlubmVyUGFyYW1zLmlucHV0IHx8IGlubmVyUGFyYW1zLmZvb3RlciB8fCBpbm5lclBhcmFtcy5zaG93Q2xvc2VCdXR0b24pKSB7XG4gICAgICBhZGRDbGFzcyhkb2N1bWVudC5ib2R5LCBzd2FsQ2xhc3Nlc1sndG9hc3QtY29sdW1uJ10pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmVDbGFzcyhkb2N1bWVudC5ib2R5LCBzd2FsQ2xhc3Nlc1sndG9hc3QtY29sdW1uJ10pO1xuICAgIH0gLy8gaW5wdXRzXG5cblxuICAgIHZhciBpbnB1dFR5cGVzID0gWydpbnB1dCcsICdmaWxlJywgJ3JhbmdlJywgJ3NlbGVjdCcsICdyYWRpbycsICdjaGVja2JveCcsICd0ZXh0YXJlYSddO1xuXG4gICAgdmFyIHNldElucHV0UGxhY2Vob2xkZXIgPSBmdW5jdGlvbiBzZXRJbnB1dFBsYWNlaG9sZGVyKGlucHV0KSB7XG4gICAgICBpZiAoIWlucHV0LnBsYWNlaG9sZGVyIHx8IGlubmVyUGFyYW1zLmlucHV0UGxhY2Vob2xkZXIpIHtcbiAgICAgICAgaW5wdXQucGxhY2Vob2xkZXIgPSBpbm5lclBhcmFtcy5pbnB1dFBsYWNlaG9sZGVyO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgaW5wdXQ7XG5cbiAgICBmb3IgKHZhciBfaTMgPSAwOyBfaTMgPCBpbnB1dFR5cGVzLmxlbmd0aDsgX2kzKyspIHtcbiAgICAgIHZhciBpbnB1dENsYXNzID0gc3dhbENsYXNzZXNbaW5wdXRUeXBlc1tfaTNdXTtcbiAgICAgIHZhciBpbnB1dENvbnRhaW5lciA9IGdldENoaWxkQnlDbGFzcyhkb21DYWNoZS5jb250ZW50LCBpbnB1dENsYXNzKTtcbiAgICAgIGlucHV0ID0gX3RoaXMuZ2V0SW5wdXQoaW5wdXRUeXBlc1tfaTNdKTsgLy8gc2V0IGF0dHJpYnV0ZXNcblxuICAgICAgaWYgKGlucHV0KSB7XG4gICAgICAgIGZvciAodmFyIGogaW4gaW5wdXQuYXR0cmlidXRlcykge1xuICAgICAgICAgIGlmIChpbnB1dC5hdHRyaWJ1dGVzLmhhc093blByb3BlcnR5KGopKSB7XG4gICAgICAgICAgICB2YXIgYXR0ck5hbWUgPSBpbnB1dC5hdHRyaWJ1dGVzW2pdLm5hbWU7XG5cbiAgICAgICAgICAgIGlmIChhdHRyTmFtZSAhPT0gJ3R5cGUnICYmIGF0dHJOYW1lICE9PSAndmFsdWUnKSB7XG4gICAgICAgICAgICAgIGlucHV0LnJlbW92ZUF0dHJpYnV0ZShhdHRyTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgYXR0ciBpbiBpbm5lclBhcmFtcy5pbnB1dEF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAvLyBEbyBub3Qgc2V0IGEgcGxhY2Vob2xkZXIgZm9yIDxpbnB1dCB0eXBlPVwicmFuZ2VcIj5cbiAgICAgICAgICAvLyBpdCdsbCBjcmFzaCBFZGdlLCAjMTI5OFxuICAgICAgICAgIGlmIChpbnB1dFR5cGVzW19pM10gPT09ICdyYW5nZScgJiYgYXR0ciA9PT0gJ3BsYWNlaG9sZGVyJykge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKGF0dHIsIGlubmVyUGFyYW1zLmlucHV0QXR0cmlidXRlc1thdHRyXSk7XG4gICAgICAgIH1cbiAgICAgIH0gLy8gc2V0IGNsYXNzXG5cblxuICAgICAgaW5wdXRDb250YWluZXIuY2xhc3NOYW1lID0gaW5wdXRDbGFzcztcblxuICAgICAgaWYgKGlubmVyUGFyYW1zLmlucHV0Q2xhc3MpIHtcbiAgICAgICAgYWRkQ2xhc3MoaW5wdXRDb250YWluZXIsIGlubmVyUGFyYW1zLmlucHV0Q2xhc3MpO1xuICAgICAgfVxuXG4gICAgICBoaWRlKGlucHV0Q29udGFpbmVyKTtcbiAgICB9XG5cbiAgICB2YXIgcG9wdWxhdGVJbnB1dE9wdGlvbnM7XG5cbiAgICBzd2l0Y2ggKGlubmVyUGFyYW1zLmlucHV0KSB7XG4gICAgICBjYXNlICd0ZXh0JzpcbiAgICAgIGNhc2UgJ2VtYWlsJzpcbiAgICAgIGNhc2UgJ3Bhc3N3b3JkJzpcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICBjYXNlICd0ZWwnOlxuICAgICAgY2FzZSAndXJsJzpcbiAgICAgICAge1xuICAgICAgICAgIGlucHV0ID0gZ2V0Q2hpbGRCeUNsYXNzKGRvbUNhY2hlLmNvbnRlbnQsIHN3YWxDbGFzc2VzLmlucHV0KTtcblxuICAgICAgICAgIGlmICh0eXBlb2YgaW5uZXJQYXJhbXMuaW5wdXRWYWx1ZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIGlubmVyUGFyYW1zLmlucHV0VmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBpbnB1dC52YWx1ZSA9IGlubmVyUGFyYW1zLmlucHV0VmFsdWU7XG4gICAgICAgICAgfSBlbHNlIGlmICghaXNQcm9taXNlKGlubmVyUGFyYW1zLmlucHV0VmFsdWUpKSB7XG4gICAgICAgICAgICB3YXJuKFwiVW5leHBlY3RlZCB0eXBlIG9mIGlucHV0VmFsdWUhIEV4cGVjdGVkIFxcXCJzdHJpbmdcXFwiLCBcXFwibnVtYmVyXFxcIiBvciBcXFwiUHJvbWlzZVxcXCIsIGdvdCBcXFwiXCIuY29uY2F0KF90eXBlb2YoaW5uZXJQYXJhbXMuaW5wdXRWYWx1ZSksIFwiXFxcIlwiKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc2V0SW5wdXRQbGFjZWhvbGRlcihpbnB1dCk7XG4gICAgICAgICAgaW5wdXQudHlwZSA9IGlubmVyUGFyYW1zLmlucHV0O1xuICAgICAgICAgIHNob3coaW5wdXQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgIGNhc2UgJ2ZpbGUnOlxuICAgICAgICB7XG4gICAgICAgICAgaW5wdXQgPSBnZXRDaGlsZEJ5Q2xhc3MoZG9tQ2FjaGUuY29udGVudCwgc3dhbENsYXNzZXMuZmlsZSk7XG4gICAgICAgICAgc2V0SW5wdXRQbGFjZWhvbGRlcihpbnB1dCk7XG4gICAgICAgICAgaW5wdXQudHlwZSA9IGlubmVyUGFyYW1zLmlucHV0O1xuICAgICAgICAgIHNob3coaW5wdXQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgIGNhc2UgJ3JhbmdlJzpcbiAgICAgICAge1xuICAgICAgICAgIHZhciByYW5nZSA9IGdldENoaWxkQnlDbGFzcyhkb21DYWNoZS5jb250ZW50LCBzd2FsQ2xhc3Nlcy5yYW5nZSk7XG4gICAgICAgICAgdmFyIHJhbmdlSW5wdXQgPSByYW5nZS5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuICAgICAgICAgIHZhciByYW5nZU91dHB1dCA9IHJhbmdlLnF1ZXJ5U2VsZWN0b3IoJ291dHB1dCcpO1xuICAgICAgICAgIHJhbmdlSW5wdXQudmFsdWUgPSBpbm5lclBhcmFtcy5pbnB1dFZhbHVlO1xuICAgICAgICAgIHJhbmdlSW5wdXQudHlwZSA9IGlubmVyUGFyYW1zLmlucHV0O1xuICAgICAgICAgIHJhbmdlT3V0cHV0LnZhbHVlID0gaW5uZXJQYXJhbXMuaW5wdXRWYWx1ZTtcbiAgICAgICAgICBzaG93KHJhbmdlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICBjYXNlICdzZWxlY3QnOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIHNlbGVjdCA9IGdldENoaWxkQnlDbGFzcyhkb21DYWNoZS5jb250ZW50LCBzd2FsQ2xhc3Nlcy5zZWxlY3QpO1xuICAgICAgICAgIHNlbGVjdC5pbm5lckhUTUwgPSAnJztcblxuICAgICAgICAgIGlmIChpbm5lclBhcmFtcy5pbnB1dFBsYWNlaG9sZGVyKSB7XG4gICAgICAgICAgICB2YXIgcGxhY2Vob2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyLmlubmVySFRNTCA9IGlubmVyUGFyYW1zLmlucHV0UGxhY2Vob2xkZXI7XG4gICAgICAgICAgICBwbGFjZWhvbGRlci52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgcGxhY2Vob2xkZXIuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgcGxhY2Vob2xkZXIuc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKHBsYWNlaG9sZGVyKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwb3B1bGF0ZUlucHV0T3B0aW9ucyA9IGZ1bmN0aW9uIHBvcHVsYXRlSW5wdXRPcHRpb25zKGlucHV0T3B0aW9ucykge1xuICAgICAgICAgICAgaW5wdXRPcHRpb25zLmZvckVhY2goZnVuY3Rpb24gKGlucHV0T3B0aW9uKSB7XG4gICAgICAgICAgICAgIHZhciBvcHRpb25WYWx1ZSA9IGlucHV0T3B0aW9uWzBdO1xuICAgICAgICAgICAgICB2YXIgb3B0aW9uTGFiZWwgPSBpbnB1dE9wdGlvblsxXTtcbiAgICAgICAgICAgICAgdmFyIG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgICBvcHRpb24udmFsdWUgPSBvcHRpb25WYWx1ZTtcbiAgICAgICAgICAgICAgb3B0aW9uLmlubmVySFRNTCA9IG9wdGlvbkxhYmVsO1xuXG4gICAgICAgICAgICAgIGlmIChpbm5lclBhcmFtcy5pbnB1dFZhbHVlLnRvU3RyaW5nKCkgPT09IG9wdGlvblZhbHVlLnRvU3RyaW5nKCkpIHtcbiAgICAgICAgICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNob3coc2VsZWN0KTtcbiAgICAgICAgICAgIHNlbGVjdC5mb2N1cygpO1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICBjYXNlICdyYWRpbyc6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgcmFkaW8gPSBnZXRDaGlsZEJ5Q2xhc3MoZG9tQ2FjaGUuY29udGVudCwgc3dhbENsYXNzZXMucmFkaW8pO1xuICAgICAgICAgIHJhZGlvLmlubmVySFRNTCA9ICcnO1xuXG4gICAgICAgICAgcG9wdWxhdGVJbnB1dE9wdGlvbnMgPSBmdW5jdGlvbiBwb3B1bGF0ZUlucHV0T3B0aW9ucyhpbnB1dE9wdGlvbnMpIHtcbiAgICAgICAgICAgIGlucHV0T3B0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChpbnB1dE9wdGlvbikge1xuICAgICAgICAgICAgICB2YXIgcmFkaW9WYWx1ZSA9IGlucHV0T3B0aW9uWzBdO1xuICAgICAgICAgICAgICB2YXIgcmFkaW9MYWJlbCA9IGlucHV0T3B0aW9uWzFdO1xuICAgICAgICAgICAgICB2YXIgcmFkaW9JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICAgIHZhciByYWRpb0xhYmVsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICAgIHJhZGlvSW5wdXQudHlwZSA9ICdyYWRpbyc7XG4gICAgICAgICAgICAgIHJhZGlvSW5wdXQubmFtZSA9IHN3YWxDbGFzc2VzLnJhZGlvO1xuICAgICAgICAgICAgICByYWRpb0lucHV0LnZhbHVlID0gcmFkaW9WYWx1ZTtcblxuICAgICAgICAgICAgICBpZiAoaW5uZXJQYXJhbXMuaW5wdXRWYWx1ZS50b1N0cmluZygpID09PSByYWRpb1ZhbHVlLnRvU3RyaW5nKCkpIHtcbiAgICAgICAgICAgICAgICByYWRpb0lucHV0LmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgdmFyIGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgICBsYWJlbC5pbm5lckhUTUwgPSByYWRpb0xhYmVsO1xuICAgICAgICAgICAgICBsYWJlbC5jbGFzc05hbWUgPSBzd2FsQ2xhc3Nlcy5sYWJlbDtcbiAgICAgICAgICAgICAgcmFkaW9MYWJlbEVsZW1lbnQuYXBwZW5kQ2hpbGQocmFkaW9JbnB1dCk7XG4gICAgICAgICAgICAgIHJhZGlvTGFiZWxFbGVtZW50LmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICAgICAgICAgICAgcmFkaW8uYXBwZW5kQ2hpbGQocmFkaW9MYWJlbEVsZW1lbnQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzaG93KHJhZGlvKTtcbiAgICAgICAgICAgIHZhciByYWRpb3MgPSByYWRpby5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpO1xuXG4gICAgICAgICAgICBpZiAocmFkaW9zLmxlbmd0aCkge1xuICAgICAgICAgICAgICByYWRpb3NbMF0uZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgY2FzZSAnY2hlY2tib3gnOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGNoZWNrYm94ID0gZ2V0Q2hpbGRCeUNsYXNzKGRvbUNhY2hlLmNvbnRlbnQsIHN3YWxDbGFzc2VzLmNoZWNrYm94KTtcblxuICAgICAgICAgIHZhciBjaGVja2JveElucHV0ID0gX3RoaXMuZ2V0SW5wdXQoJ2NoZWNrYm94Jyk7XG5cbiAgICAgICAgICBjaGVja2JveElucHV0LnR5cGUgPSAnY2hlY2tib3gnO1xuICAgICAgICAgIGNoZWNrYm94SW5wdXQudmFsdWUgPSAxO1xuICAgICAgICAgIGNoZWNrYm94SW5wdXQuaWQgPSBzd2FsQ2xhc3Nlcy5jaGVja2JveDtcbiAgICAgICAgICBjaGVja2JveElucHV0LmNoZWNrZWQgPSBCb29sZWFuKGlubmVyUGFyYW1zLmlucHV0VmFsdWUpO1xuICAgICAgICAgIHZhciBsYWJlbCA9IGNoZWNrYm94LnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKTtcbiAgICAgICAgICBsYWJlbC5pbm5lckhUTUwgPSBpbm5lclBhcmFtcy5pbnB1dFBsYWNlaG9sZGVyO1xuICAgICAgICAgIHNob3coY2hlY2tib3gpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgIGNhc2UgJ3RleHRhcmVhJzpcbiAgICAgICAge1xuICAgICAgICAgIHZhciB0ZXh0YXJlYSA9IGdldENoaWxkQnlDbGFzcyhkb21DYWNoZS5jb250ZW50LCBzd2FsQ2xhc3Nlcy50ZXh0YXJlYSk7XG4gICAgICAgICAgdGV4dGFyZWEudmFsdWUgPSBpbm5lclBhcmFtcy5pbnB1dFZhbHVlO1xuICAgICAgICAgIHNldElucHV0UGxhY2Vob2xkZXIodGV4dGFyZWEpO1xuICAgICAgICAgIHNob3codGV4dGFyZWEpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgIGNhc2UgbnVsbDpcbiAgICAgICAge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGVycm9yKFwiVW5leHBlY3RlZCB0eXBlIG9mIGlucHV0ISBFeHBlY3RlZCBcXFwidGV4dFxcXCIsIFxcXCJlbWFpbFxcXCIsIFxcXCJwYXNzd29yZFxcXCIsIFxcXCJudW1iZXJcXFwiLCBcXFwidGVsXFxcIiwgXFxcInNlbGVjdFxcXCIsIFxcXCJyYWRpb1xcXCIsIFxcXCJjaGVja2JveFxcXCIsIFxcXCJ0ZXh0YXJlYVxcXCIsIFxcXCJmaWxlXFxcIiBvciBcXFwidXJsXFxcIiwgZ290IFxcXCJcIi5jb25jYXQoaW5uZXJQYXJhbXMuaW5wdXQsIFwiXFxcIlwiKSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGlmIChpbm5lclBhcmFtcy5pbnB1dCA9PT0gJ3NlbGVjdCcgfHwgaW5uZXJQYXJhbXMuaW5wdXQgPT09ICdyYWRpbycpIHtcbiAgICAgIHZhciBwcm9jZXNzSW5wdXRPcHRpb25zID0gZnVuY3Rpb24gcHJvY2Vzc0lucHV0T3B0aW9ucyhpbnB1dE9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHBvcHVsYXRlSW5wdXRPcHRpb25zKGZvcm1hdElucHV0T3B0aW9ucyhpbnB1dE9wdGlvbnMpKTtcbiAgICAgIH07XG5cbiAgICAgIGlmIChpc1Byb21pc2UoaW5uZXJQYXJhbXMuaW5wdXRPcHRpb25zKSkge1xuICAgICAgICBjb25zdHJ1Y3Rvci5zaG93TG9hZGluZygpO1xuICAgICAgICBpbm5lclBhcmFtcy5pbnB1dE9wdGlvbnMudGhlbihmdW5jdGlvbiAoaW5wdXRPcHRpb25zKSB7XG4gICAgICAgICAgX3RoaXMuaGlkZUxvYWRpbmcoKTtcblxuICAgICAgICAgIHByb2Nlc3NJbnB1dE9wdGlvbnMoaW5wdXRPcHRpb25zKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKF90eXBlb2YoaW5uZXJQYXJhbXMuaW5wdXRPcHRpb25zKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgcHJvY2Vzc0lucHV0T3B0aW9ucyhpbm5lclBhcmFtcy5pbnB1dE9wdGlvbnMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXJyb3IoXCJVbmV4cGVjdGVkIHR5cGUgb2YgaW5wdXRPcHRpb25zISBFeHBlY3RlZCBvYmplY3QsIE1hcCBvciBQcm9taXNlLCBnb3QgXCIuY29uY2F0KF90eXBlb2YoaW5uZXJQYXJhbXMuaW5wdXRPcHRpb25zKSkpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoWyd0ZXh0JywgJ2VtYWlsJywgJ251bWJlcicsICd0ZWwnLCAndGV4dGFyZWEnXS5pbmRleE9mKGlubmVyUGFyYW1zLmlucHV0KSAhPT0gLTEgJiYgaXNQcm9taXNlKGlubmVyUGFyYW1zLmlucHV0VmFsdWUpKSB7XG4gICAgICBjb25zdHJ1Y3Rvci5zaG93TG9hZGluZygpO1xuICAgICAgaGlkZShpbnB1dCk7XG4gICAgICBpbm5lclBhcmFtcy5pbnB1dFZhbHVlLnRoZW4oZnVuY3Rpb24gKGlucHV0VmFsdWUpIHtcbiAgICAgICAgaW5wdXQudmFsdWUgPSBpbm5lclBhcmFtcy5pbnB1dCA9PT0gJ251bWJlcicgPyBwYXJzZUZsb2F0KGlucHV0VmFsdWUpIHx8IDAgOiBpbnB1dFZhbHVlICsgJyc7XG4gICAgICAgIHNob3coaW5wdXQpO1xuICAgICAgICBpbnB1dC5mb2N1cygpO1xuXG4gICAgICAgIF90aGlzLmhpZGVMb2FkaW5nKCk7XG4gICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIGVycm9yKCdFcnJvciBpbiBpbnB1dFZhbHVlIHByb21pc2U6ICcgKyBlcnIpO1xuICAgICAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICBzaG93KGlucHV0KTtcbiAgICAgICAgaW5wdXQuZm9jdXMoKTtcblxuICAgICAgICBfdGhpcy5oaWRlTG9hZGluZygpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgb3BlblBvcHVwKGlubmVyUGFyYW1zKTtcblxuICAgIGlmICghaW5uZXJQYXJhbXMudG9hc3QpIHtcbiAgICAgIGlmICghY2FsbElmRnVuY3Rpb24oaW5uZXJQYXJhbXMuYWxsb3dFbnRlcktleSkpIHtcbiAgICAgICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgJiYgdHlwZW9mIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1ciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGlubmVyUGFyYW1zLmZvY3VzQ2FuY2VsICYmIGlzVmlzaWJsZShkb21DYWNoZS5jYW5jZWxCdXR0b24pKSB7XG4gICAgICAgIGRvbUNhY2hlLmNhbmNlbEJ1dHRvbi5mb2N1cygpO1xuICAgICAgfSBlbHNlIGlmIChpbm5lclBhcmFtcy5mb2N1c0NvbmZpcm0gJiYgaXNWaXNpYmxlKGRvbUNhY2hlLmNvbmZpcm1CdXR0b24pKSB7XG4gICAgICAgIGRvbUNhY2hlLmNvbmZpcm1CdXR0b24uZm9jdXMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldEZvY3VzKC0xLCAxKTtcbiAgICAgIH1cbiAgICB9IC8vIGZpeCBzY3JvbGxcblxuXG4gICAgZG9tQ2FjaGUuY29udGFpbmVyLnNjcm9sbFRvcCA9IDA7XG4gIH0pO1xufVxuXG4vKipcbiAqIFVwZGF0ZXMgcG9wdXAgb3B0aW9ucy5cbiAqL1xuXG5mdW5jdGlvbiB1cGRhdGUocGFyYW1zKSB7XG4gIHZhciB2YWxpZFVwZGF0YWJsZVBhcmFtcyA9IHt9OyAvLyBhc3NpZ24gdmFsaWQgcGFyYW1zIGZyb20gYHBhcmFtc2AgdG8gYGRlZmF1bHRzYFxuXG4gIE9iamVjdC5rZXlzKHBhcmFtcykuZm9yRWFjaChmdW5jdGlvbiAocGFyYW0pIHtcbiAgICBpZiAoU3dhbC5pc1VwZGF0YWJsZVBhcmFtZXRlcihwYXJhbSkpIHtcbiAgICAgIHZhbGlkVXBkYXRhYmxlUGFyYW1zW3BhcmFtXSA9IHBhcmFtc1twYXJhbV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHdhcm4oXCJJbnZhbGlkIHBhcmFtZXRlciB0byB1cGRhdGU6IFxcXCJcIi5jb25jYXQocGFyYW0sIFwiXFxcIi4gVXBkYXRhYmxlIHBhcmFtcyBhcmUgbGlzdGVkIGhlcmU6IFRPRE8gKEBsaW1vbnRlKSBhZGQgbGlua1wiKSk7XG4gICAgfVxuICB9KTtcbiAgdmFyIGlubmVyUGFyYW1zID0gcHJpdmF0ZVByb3BzLmlubmVyUGFyYW1zLmdldCh0aGlzKTtcblxuICB2YXIgdXBkYXRlZFBhcmFtcyA9IF9leHRlbmRzKHt9LCBpbm5lclBhcmFtcywgdmFsaWRVcGRhdGFibGVQYXJhbXMpOyAvLyBBY3Rpb25zXG5cblxuICByZW5kZXJBY3Rpb25zKHVwZGF0ZWRQYXJhbXMpOyAvLyBDb250ZW50XG5cbiAgcmVuZGVyQ29udGVudCh1cGRhdGVkUGFyYW1zKTsgLy8gSWNvblxuXG4gIHJlbmRlckljb24odXBkYXRlZFBhcmFtcyk7IC8vIEltYWdlXG5cbiAgcmVuZGVySW1hZ2UodXBkYXRlZFBhcmFtcyk7IC8vIFByb2dyZXNzIHN0ZXBzXG5cbiAgcmVuZGVyUHJvZ3Jlc3NTdGVwcyh1cGRhdGVkUGFyYW1zKTsgLy8gVGl0bGVcblxuICByZW5kZXJUaXRsZSh1cGRhdGVkUGFyYW1zKTtcbiAgcHJpdmF0ZVByb3BzLmlubmVyUGFyYW1zLnNldCh0aGlzLCB1cGRhdGVkUGFyYW1zKTtcbn1cblxuXG5cbnZhciBpbnN0YW5jZU1ldGhvZHMgPSBPYmplY3QuZnJlZXplKHtcblx0aGlkZUxvYWRpbmc6IGhpZGVMb2FkaW5nLFxuXHRkaXNhYmxlTG9hZGluZzogaGlkZUxvYWRpbmcsXG5cdGdldElucHV0OiBnZXRJbnB1dCxcblx0Y2xvc2U6IGNsb3NlLFxuXHRjbG9zZVBvcHVwOiBjbG9zZSxcblx0Y2xvc2VNb2RhbDogY2xvc2UsXG5cdGNsb3NlVG9hc3Q6IGNsb3NlLFxuXHRlbmFibGVCdXR0b25zOiBlbmFibGVCdXR0b25zLFxuXHRkaXNhYmxlQnV0dG9uczogZGlzYWJsZUJ1dHRvbnMsXG5cdGVuYWJsZUNvbmZpcm1CdXR0b246IGVuYWJsZUNvbmZpcm1CdXR0b24sXG5cdGRpc2FibGVDb25maXJtQnV0dG9uOiBkaXNhYmxlQ29uZmlybUJ1dHRvbixcblx0ZW5hYmxlSW5wdXQ6IGVuYWJsZUlucHV0LFxuXHRkaXNhYmxlSW5wdXQ6IGRpc2FibGVJbnB1dCxcblx0c2hvd1ZhbGlkYXRpb25NZXNzYWdlOiBzaG93VmFsaWRhdGlvbk1lc3NhZ2UsXG5cdHJlc2V0VmFsaWRhdGlvbk1lc3NhZ2U6IHJlc2V0VmFsaWRhdGlvbk1lc3NhZ2UsXG5cdGdldFByb2dyZXNzU3RlcHM6IGdldFByb2dyZXNzU3RlcHMkMSxcblx0c2V0UHJvZ3Jlc3NTdGVwczogc2V0UHJvZ3Jlc3NTdGVwcyxcblx0c2hvd1Byb2dyZXNzU3RlcHM6IHNob3dQcm9ncmVzc1N0ZXBzLFxuXHRoaWRlUHJvZ3Jlc3NTdGVwczogaGlkZVByb2dyZXNzU3RlcHMsXG5cdF9tYWluOiBfbWFpbixcblx0dXBkYXRlOiB1cGRhdGVcbn0pO1xuXG52YXIgY3VycmVudEluc3RhbmNlOyAvLyBTd2VldEFsZXJ0IGNvbnN0cnVjdG9yXG5cbmZ1bmN0aW9uIFN3ZWV0QWxlcnQoKSB7XG4gIC8vIFByZXZlbnQgcnVuIGluIE5vZGUgZW52XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybjtcbiAgfSAvLyBDaGVjayBmb3IgdGhlIGV4aXN0ZW5jZSBvZiBQcm9taXNlXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG5cblxuICBpZiAodHlwZW9mIFByb21pc2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgZXJyb3IoJ1RoaXMgcGFja2FnZSByZXF1aXJlcyBhIFByb21pc2UgbGlicmFyeSwgcGxlYXNlIGluY2x1ZGUgYSBzaGltIHRvIGVuYWJsZSBpdCBpbiB0aGlzIGJyb3dzZXIgKFNlZTogaHR0cHM6Ly9naXRodWIuY29tL3N3ZWV0YWxlcnQyL3N3ZWV0YWxlcnQyL3dpa2kvTWlncmF0aW9uLWZyb20tU3dlZXRBbGVydC10by1Td2VldEFsZXJ0MiMxLWllLXN1cHBvcnQpJyk7XG4gIH1cblxuICBjdXJyZW50SW5zdGFuY2UgPSB0aGlzO1xuXG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICB2YXIgb3V0ZXJQYXJhbXMgPSBPYmplY3QuZnJlZXplKHRoaXMuY29uc3RydWN0b3IuYXJnc1RvUGFyYW1zKGFyZ3MpKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgIHBhcmFtczoge1xuICAgICAgdmFsdWU6IG91dGVyUGFyYW1zLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG5cbiAgdmFyIHByb21pc2UgPSB0aGlzLl9tYWluKHRoaXMucGFyYW1zKTtcblxuICBwcml2YXRlUHJvcHMucHJvbWlzZS5zZXQodGhpcywgcHJvbWlzZSk7XG59IC8vIGBjYXRjaGAgY2Fubm90IGJlIHRoZSBuYW1lIG9mIGEgbW9kdWxlIGV4cG9ydCwgc28gd2UgZGVmaW5lIG91ciB0aGVuYWJsZSBtZXRob2RzIGhlcmUgaW5zdGVhZFxuXG5cblN3ZWV0QWxlcnQucHJvdG90eXBlLnRoZW4gPSBmdW5jdGlvbiAob25GdWxmaWxsZWQpIHtcbiAgdmFyIHByb21pc2UgPSBwcml2YXRlUHJvcHMucHJvbWlzZS5nZXQodGhpcyk7XG4gIHJldHVybiBwcm9taXNlLnRoZW4ob25GdWxmaWxsZWQpO1xufTtcblxuU3dlZXRBbGVydC5wcm90b3R5cGUuZmluYWxseSA9IGZ1bmN0aW9uIChvbkZpbmFsbHkpIHtcbiAgdmFyIHByb21pc2UgPSBwcml2YXRlUHJvcHMucHJvbWlzZS5nZXQodGhpcyk7XG4gIHJldHVybiBwcm9taXNlLmZpbmFsbHkob25GaW5hbGx5KTtcbn07IC8vIEFzc2lnbiBpbnN0YW5jZSBtZXRob2RzIGZyb20gc3JjL2luc3RhbmNlTWV0aG9kcy8qLmpzIHRvIHByb3RvdHlwZVxuXG5cbl9leHRlbmRzKFN3ZWV0QWxlcnQucHJvdG90eXBlLCBpbnN0YW5jZU1ldGhvZHMpOyAvLyBBc3NpZ24gc3RhdGljIG1ldGhvZHMgZnJvbSBzcmMvc3RhdGljTWV0aG9kcy8qLmpzIHRvIGNvbnN0cnVjdG9yXG5cblxuX2V4dGVuZHMoU3dlZXRBbGVydCwgc3RhdGljTWV0aG9kcyk7IC8vIFByb3h5IHRvIGluc3RhbmNlIG1ldGhvZHMgdG8gY29uc3RydWN0b3IsIGZvciBub3csIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxuXG5cbk9iamVjdC5rZXlzKGluc3RhbmNlTWV0aG9kcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIFN3ZWV0QWxlcnRba2V5XSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoY3VycmVudEluc3RhbmNlKSB7XG4gICAgICB2YXIgX2N1cnJlbnRJbnN0YW5jZTtcblxuICAgICAgcmV0dXJuIChfY3VycmVudEluc3RhbmNlID0gY3VycmVudEluc3RhbmNlKVtrZXldLmFwcGx5KF9jdXJyZW50SW5zdGFuY2UsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9O1xufSk7XG5Td2VldEFsZXJ0LkRpc21pc3NSZWFzb24gPSBEaXNtaXNzUmVhc29uO1xuU3dlZXRBbGVydC52ZXJzaW9uID0gJzguMi4yJztcblxudmFyIFN3YWwgPSBTd2VldEFsZXJ0O1xuU3dhbC5kZWZhdWx0ID0gU3dhbDtcblxucmV0dXJuIFN3YWw7XG5cbn0pKSk7XG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LlN3ZWV0YWxlcnQyKXsgIHdpbmRvdy5zd2FsID0gd2luZG93LnN3ZWV0QWxlcnQgPSB3aW5kb3cuU3dhbCA9IHdpbmRvdy5Td2VldEFsZXJ0ID0gd2luZG93LlN3ZWV0YWxlcnQyfVxuXG5cInVuZGVmaW5lZFwiIT10eXBlb2YgZG9jdW1lbnQmJmZ1bmN0aW9uKGUsdCl7dmFyIG49ZS5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7aWYoZS5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF0uYXBwZW5kQ2hpbGQobiksbi5zdHlsZVNoZWV0KW4uc3R5bGVTaGVldC5kaXNhYmxlZHx8KG4uc3R5bGVTaGVldC5jc3NUZXh0PXQpO2Vsc2UgdHJ5e24uaW5uZXJIVE1MPXR9Y2F0Y2goZSl7bi5pbm5lclRleHQ9dH19KGRvY3VtZW50LFwiQC13ZWJraXQta2V5ZnJhbWVzIHN3YWwyLXNob3d7MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjcpO3RyYW5zZm9ybTpzY2FsZSguNyl9NDUley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuMDUpO3RyYW5zZm9ybTpzY2FsZSgxLjA1KX04MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjk1KTt0cmFuc2Zvcm06c2NhbGUoLjk1KX0xMDAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX19QGtleWZyYW1lcyBzd2FsMi1zaG93ezAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC43KTt0cmFuc2Zvcm06c2NhbGUoLjcpfTQ1JXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjA1KTt0cmFuc2Zvcm06c2NhbGUoMS4wNSl9ODAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC45NSk7dHJhbnNmb3JtOnNjYWxlKC45NSl9MTAwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSl9fUAtd2Via2l0LWtleWZyYW1lcyBzd2FsMi1oaWRlezAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKTtvcGFjaXR5OjF9MTAwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguNSk7dHJhbnNmb3JtOnNjYWxlKC41KTtvcGFjaXR5OjB9fUBrZXlmcmFtZXMgc3dhbDItaGlkZXswJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSk7b3BhY2l0eToxfTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjUpO3RyYW5zZm9ybTpzY2FsZSguNSk7b3BhY2l0eTowfX1ALXdlYmtpdC1rZXlmcmFtZXMgc3dhbDItYW5pbWF0ZS1zdWNjZXNzLWxpbmUtdGlwezAle3RvcDoxLjE4NzVlbTtsZWZ0Oi4wNjI1ZW07d2lkdGg6MH01NCV7dG9wOjEuMDYyNWVtO2xlZnQ6LjEyNWVtO3dpZHRoOjB9NzAle3RvcDoyLjE4NzVlbTtsZWZ0Oi0uMzc1ZW07d2lkdGg6My4xMjVlbX04NCV7dG9wOjNlbTtsZWZ0OjEuMzEyNWVtO3dpZHRoOjEuMDYyNWVtfTEwMCV7dG9wOjIuODEyNWVtO2xlZnQ6Ljg3NWVtO3dpZHRoOjEuNTYyNWVtfX1Aa2V5ZnJhbWVzIHN3YWwyLWFuaW1hdGUtc3VjY2Vzcy1saW5lLXRpcHswJXt0b3A6MS4xODc1ZW07bGVmdDouMDYyNWVtO3dpZHRoOjB9NTQle3RvcDoxLjA2MjVlbTtsZWZ0Oi4xMjVlbTt3aWR0aDowfTcwJXt0b3A6Mi4xODc1ZW07bGVmdDotLjM3NWVtO3dpZHRoOjMuMTI1ZW19ODQle3RvcDozZW07bGVmdDoxLjMxMjVlbTt3aWR0aDoxLjA2MjVlbX0xMDAle3RvcDoyLjgxMjVlbTtsZWZ0Oi44NzVlbTt3aWR0aDoxLjU2MjVlbX19QC13ZWJraXQta2V5ZnJhbWVzIHN3YWwyLWFuaW1hdGUtc3VjY2Vzcy1saW5lLWxvbmd7MCV7dG9wOjMuMzc1ZW07cmlnaHQ6Mi44NzVlbTt3aWR0aDowfTY1JXt0b3A6My4zNzVlbTtyaWdodDoyLjg3NWVtO3dpZHRoOjB9ODQle3RvcDoyLjE4NzVlbTtyaWdodDowO3dpZHRoOjMuNDM3NWVtfTEwMCV7dG9wOjIuMzc1ZW07cmlnaHQ6LjVlbTt3aWR0aDoyLjkzNzVlbX19QGtleWZyYW1lcyBzd2FsMi1hbmltYXRlLXN1Y2Nlc3MtbGluZS1sb25nezAle3RvcDozLjM3NWVtO3JpZ2h0OjIuODc1ZW07d2lkdGg6MH02NSV7dG9wOjMuMzc1ZW07cmlnaHQ6Mi44NzVlbTt3aWR0aDowfTg0JXt0b3A6Mi4xODc1ZW07cmlnaHQ6MDt3aWR0aDozLjQzNzVlbX0xMDAle3RvcDoyLjM3NWVtO3JpZ2h0Oi41ZW07d2lkdGg6Mi45Mzc1ZW19fUAtd2Via2l0LWtleWZyYW1lcyBzd2FsMi1yb3RhdGUtc3VjY2Vzcy1jaXJjdWxhci1saW5lezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKX01JXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyl9MTIley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDA1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00MDVkZWcpfTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00MDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQwNWRlZyl9fUBrZXlmcmFtZXMgc3dhbDItcm90YXRlLXN1Y2Nlc3MtY2lyY3VsYXItbGluZXswJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyl9NSV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpfTEyJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQwNWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDA1ZGVnKX0xMDAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDA1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00MDVkZWcpfX1ALXdlYmtpdC1rZXlmcmFtZXMgc3dhbDItYW5pbWF0ZS1lcnJvci14LW1hcmt7MCV7bWFyZ2luLXRvcDoxLjYyNWVtOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC40KTt0cmFuc2Zvcm06c2NhbGUoLjQpO29wYWNpdHk6MH01MCV7bWFyZ2luLXRvcDoxLjYyNWVtOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC40KTt0cmFuc2Zvcm06c2NhbGUoLjQpO29wYWNpdHk6MH04MCV7bWFyZ2luLXRvcDotLjM3NWVtOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuMTUpO3RyYW5zZm9ybTpzY2FsZSgxLjE1KX0xMDAle21hcmdpbi10b3A6MDstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSk7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIHN3YWwyLWFuaW1hdGUtZXJyb3IteC1tYXJrezAle21hcmdpbi10b3A6MS42MjVlbTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguNCk7dHJhbnNmb3JtOnNjYWxlKC40KTtvcGFjaXR5OjB9NTAle21hcmdpbi10b3A6MS42MjVlbTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguNCk7dHJhbnNmb3JtOnNjYWxlKC40KTtvcGFjaXR5OjB9ODAle21hcmdpbi10b3A6LS4zNzVlbTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjE1KTt0cmFuc2Zvcm06c2NhbGUoMS4xNSl9MTAwJXttYXJnaW4tdG9wOjA7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpO29wYWNpdHk6MX19QC13ZWJraXQta2V5ZnJhbWVzIHN3YWwyLWFuaW1hdGUtZXJyb3ItaWNvbnswJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGVYKDEwMGRlZyk7dHJhbnNmb3JtOnJvdGF0ZVgoMTAwZGVnKTtvcGFjaXR5OjB9MTAwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGVYKDApO3RyYW5zZm9ybTpyb3RhdGVYKDApO29wYWNpdHk6MX19QGtleWZyYW1lcyBzd2FsMi1hbmltYXRlLWVycm9yLWljb257MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlWCgxMDBkZWcpO3RyYW5zZm9ybTpyb3RhdGVYKDEwMGRlZyk7b3BhY2l0eTowfTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlWCgwKTt0cmFuc2Zvcm06cm90YXRlWCgwKTtvcGFjaXR5OjF9fWJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lcntiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fWJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1zaG93bntiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fWJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3B7dG9wOjA7cmlnaHQ6YXV0bztib3R0b206YXV0bztsZWZ0OjUwJTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpO3RyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpfWJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3AtZW5kLGJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3AtcmlnaHR7dG9wOjA7cmlnaHQ6MDtib3R0b206YXV0bztsZWZ0OmF1dG99Ym9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcC1sZWZ0LGJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3Atc3RhcnR7dG9wOjA7cmlnaHQ6YXV0bztib3R0b206YXV0bztsZWZ0OjB9Ym9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlci1sZWZ0LGJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXItc3RhcnR7dG9wOjUwJTtyaWdodDphdXRvO2JvdHRvbTphdXRvO2xlZnQ6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpfWJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXJ7dG9wOjUwJTtyaWdodDphdXRvO2JvdHRvbTphdXRvO2xlZnQ6NTAlOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpO3RyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKX1ib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyLWVuZCxib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyLXJpZ2h0e3RvcDo1MCU7cmlnaHQ6MDtib3R0b206YXV0bztsZWZ0OmF1dG87LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKX1ib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLWxlZnQsYm9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbS1zdGFydHt0b3A6YXV0bztyaWdodDphdXRvO2JvdHRvbTowO2xlZnQ6MH1ib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9te3RvcDphdXRvO3JpZ2h0OmF1dG87Ym90dG9tOjA7bGVmdDo1MCU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKX1ib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLWVuZCxib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLXJpZ2h0e3RvcDphdXRvO3JpZ2h0OjA7Ym90dG9tOjA7bGVmdDphdXRvfWJvZHkuc3dhbDItdG9hc3QtY29sdW1uIC5zd2FsMi10b2FzdHtmbGV4LWRpcmVjdGlvbjpjb2x1bW47YWxpZ24taXRlbXM6c3RyZXRjaH1ib2R5LnN3YWwyLXRvYXN0LWNvbHVtbiAuc3dhbDItdG9hc3QgLnN3YWwyLWFjdGlvbnN7ZmxleDoxO2FsaWduLXNlbGY6c3RyZXRjaDtoZWlnaHQ6Mi4yZW07bWFyZ2luLXRvcDouMzEyNWVtfWJvZHkuc3dhbDItdG9hc3QtY29sdW1uIC5zd2FsMi10b2FzdCAuc3dhbDItbG9hZGluZ3tqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfWJvZHkuc3dhbDItdG9hc3QtY29sdW1uIC5zd2FsMi10b2FzdCAuc3dhbDItaW5wdXR7aGVpZ2h0OjJlbTttYXJnaW46LjMxMjVlbSBhdXRvO2ZvbnQtc2l6ZToxZW19Ym9keS5zd2FsMi10b2FzdC1jb2x1bW4gLnN3YWwyLXRvYXN0IC5zd2FsMi12YWxpZGF0aW9uLW1lc3NhZ2V7Zm9udC1zaXplOjFlbX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3R7ZmxleC1kaXJlY3Rpb246cm93O2FsaWduLWl0ZW1zOmNlbnRlcjt3aWR0aDphdXRvO3BhZGRpbmc6LjYyNWVtO2JveC1zaGFkb3c6MCAwIC42MjVlbSAjZDlkOWQ5O292ZXJmbG93LXk6aGlkZGVufS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItaGVhZGVye2ZsZXgtZGlyZWN0aW9uOnJvd30uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXRpdGxle2ZsZXgtZ3JvdzoxO2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O21hcmdpbjowIC42ZW07Zm9udC1zaXplOjFlbX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWZvb3RlcnttYXJnaW46LjVlbSAwIDA7cGFkZGluZzouNWVtIDAgMDtmb250LXNpemU6LjhlbX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWNsb3Nle3Bvc2l0aW9uOmluaXRpYWw7d2lkdGg6LjhlbTtoZWlnaHQ6LjhlbTtsaW5lLWhlaWdodDouOH0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWNvbnRlbnR7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7Zm9udC1zaXplOjFlbX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWljb257d2lkdGg6MmVtO21pbi13aWR0aDoyZW07aGVpZ2h0OjJlbTttYXJnaW46MH0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWljb24tdGV4dHtmb250LXNpemU6MmVtO2ZvbnQtd2VpZ2h0OjcwMDtsaW5lLWhlaWdodDoxZW19LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3MgLnN3YWwyLXN1Y2Nlc3MtcmluZ3t3aWR0aDoyZW07aGVpZ2h0OjJlbX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWljb24uc3dhbDItZXJyb3IgW2NsYXNzXj1zd2FsMi14LW1hcmstbGluZV17dG9wOi44NzVlbTt3aWR0aDoxLjM3NWVtfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItaWNvbi5zd2FsMi1lcnJvciBbY2xhc3NePXN3YWwyLXgtbWFyay1saW5lXVtjbGFzcyQ9bGVmdF17bGVmdDouMzEyNWVtfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItaWNvbi5zd2FsMi1lcnJvciBbY2xhc3NePXN3YWwyLXgtbWFyay1saW5lXVtjbGFzcyQ9cmlnaHRde3JpZ2h0Oi4zMTI1ZW19LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1hY3Rpb25ze2hlaWdodDphdXRvO21hcmdpbjowIC4zMTI1ZW19LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1zdHlsZWR7bWFyZ2luOjAgLjMxMjVlbTtwYWRkaW5nOi4zMTI1ZW0gLjYyNWVtO2ZvbnQtc2l6ZToxZW19LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1zdHlsZWQ6Zm9jdXN7Ym94LXNoYWRvdzowIDAgMCAuMDYyNWVtICNmZmYsMCAwIDAgLjEyNWVtIHJnYmEoNTAsMTAwLDE1MCwuNCl9LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1zdWNjZXNze2JvcmRlci1jb2xvcjojYTVkYzg2fS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3VjY2VzcyBbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZV17cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MmVtO2hlaWdodDoyLjgxMjVlbTstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoNDVkZWcpO2JvcmRlci1yYWRpdXM6NTAlfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3VjY2VzcyBbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZV1bY2xhc3MkPWxlZnRde3RvcDotLjI1ZW07bGVmdDotLjkzNzVlbTstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOjJlbSAyZW07dHJhbnNmb3JtLW9yaWdpbjoyZW0gMmVtO2JvcmRlci1yYWRpdXM6NGVtIDAgMCA0ZW19LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1zdWNjZXNzIFtjbGFzc149c3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lXVtjbGFzcyQ9cmlnaHRde3RvcDotLjI1ZW07bGVmdDouOTM3NWVtOy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjowIDJlbTt0cmFuc2Zvcm0tb3JpZ2luOjAgMmVtO2JvcmRlci1yYWRpdXM6MCA0ZW0gNGVtIDB9LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1zdWNjZXNzIC5zd2FsMi1zdWNjZXNzLXJpbmd7d2lkdGg6MmVtO2hlaWdodDoyZW19LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1zdWNjZXNzIC5zd2FsMi1zdWNjZXNzLWZpeHt0b3A6MDtsZWZ0Oi40Mzc1ZW07d2lkdGg6LjQzNzVlbTtoZWlnaHQ6Mi42ODc1ZW19LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1zdWNjZXNzIFtjbGFzc149c3dhbDItc3VjY2Vzcy1saW5lXXtoZWlnaHQ6LjMxMjVlbX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWxpbmVdW2NsYXNzJD10aXBde3RvcDoxLjEyNWVtO2xlZnQ6LjE4NzVlbTt3aWR0aDouNzVlbX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWxpbmVdW2NsYXNzJD1sb25nXXt0b3A6LjkzNzVlbTtyaWdodDouMTg3NWVtO3dpZHRoOjEuMzc1ZW19LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0LnN3YWwyLXNob3d7LXdlYmtpdC1hbmltYXRpb246c2hvd1N3ZWV0VG9hc3QgLjVzO2FuaW1hdGlvbjpzaG93U3dlZXRUb2FzdCAuNXN9LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0LnN3YWwyLWhpZGV7LXdlYmtpdC1hbmltYXRpb246aGlkZVN3ZWV0VG9hc3QgLjJzIGZvcndhcmRzO2FuaW1hdGlvbjpoaWRlU3dlZXRUb2FzdCAuMnMgZm9yd2FyZHN9LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1hbmltYXRlLXN1Y2Nlc3MtaWNvbiAuc3dhbDItc3VjY2Vzcy1saW5lLXRpcHstd2Via2l0LWFuaW1hdGlvbjphbmltYXRlLXRvYXN0LXN1Y2Nlc3MtdGlwIC43NXM7YW5pbWF0aW9uOmFuaW1hdGUtdG9hc3Qtc3VjY2Vzcy10aXAgLjc1c30uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWFuaW1hdGUtc3VjY2Vzcy1pY29uIC5zd2FsMi1zdWNjZXNzLWxpbmUtbG9uZ3std2Via2l0LWFuaW1hdGlvbjphbmltYXRlLXRvYXN0LXN1Y2Nlc3MtbG9uZyAuNzVzO2FuaW1hdGlvbjphbmltYXRlLXRvYXN0LXN1Y2Nlc3MtbG9uZyAuNzVzfUAtd2Via2l0LWtleWZyYW1lcyBzaG93U3dlZXRUb2FzdHswJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKC0uNjI1ZW0pIHJvdGF0ZVooMmRlZyk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLS42MjVlbSkgcm90YXRlWigyZGVnKTtvcGFjaXR5OjB9MzMley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCkgcm90YXRlWigtMmRlZyk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCkgcm90YXRlWigtMmRlZyk7b3BhY2l0eTouNX02NiV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSguMzEyNWVtKSByb3RhdGVaKDJkZWcpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC4zMTI1ZW0pIHJvdGF0ZVooMmRlZyk7b3BhY2l0eTouN30xMDAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCkgcm90YXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgwKSByb3RhdGVaKDApO29wYWNpdHk6MX19QGtleWZyYW1lcyBzaG93U3dlZXRUb2FzdHswJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKC0uNjI1ZW0pIHJvdGF0ZVooMmRlZyk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLS42MjVlbSkgcm90YXRlWigyZGVnKTtvcGFjaXR5OjB9MzMley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCkgcm90YXRlWigtMmRlZyk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCkgcm90YXRlWigtMmRlZyk7b3BhY2l0eTouNX02NiV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSguMzEyNWVtKSByb3RhdGVaKDJkZWcpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC4zMTI1ZW0pIHJvdGF0ZVooMmRlZyk7b3BhY2l0eTouN30xMDAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCkgcm90YXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgwKSByb3RhdGVaKDApO29wYWNpdHk6MX19QC13ZWJraXQta2V5ZnJhbWVzIGhpZGVTd2VldFRvYXN0ezAle29wYWNpdHk6MX0zMyV7b3BhY2l0eTouNX0xMDAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZVooMWRlZyk7dHJhbnNmb3JtOnJvdGF0ZVooMWRlZyk7b3BhY2l0eTowfX1Aa2V5ZnJhbWVzIGhpZGVTd2VldFRvYXN0ezAle29wYWNpdHk6MX0zMyV7b3BhY2l0eTouNX0xMDAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZVooMWRlZyk7dHJhbnNmb3JtOnJvdGF0ZVooMWRlZyk7b3BhY2l0eTowfX1ALXdlYmtpdC1rZXlmcmFtZXMgYW5pbWF0ZS10b2FzdC1zdWNjZXNzLXRpcHswJXt0b3A6LjU2MjVlbTtsZWZ0Oi4wNjI1ZW07d2lkdGg6MH01NCV7dG9wOi4xMjVlbTtsZWZ0Oi4xMjVlbTt3aWR0aDowfTcwJXt0b3A6LjYyNWVtO2xlZnQ6LS4yNWVtO3dpZHRoOjEuNjI1ZW19ODQle3RvcDoxLjA2MjVlbTtsZWZ0Oi43NWVtO3dpZHRoOi41ZW19MTAwJXt0b3A6MS4xMjVlbTtsZWZ0Oi4xODc1ZW07d2lkdGg6Ljc1ZW19fUBrZXlmcmFtZXMgYW5pbWF0ZS10b2FzdC1zdWNjZXNzLXRpcHswJXt0b3A6LjU2MjVlbTtsZWZ0Oi4wNjI1ZW07d2lkdGg6MH01NCV7dG9wOi4xMjVlbTtsZWZ0Oi4xMjVlbTt3aWR0aDowfTcwJXt0b3A6LjYyNWVtO2xlZnQ6LS4yNWVtO3dpZHRoOjEuNjI1ZW19ODQle3RvcDoxLjA2MjVlbTtsZWZ0Oi43NWVtO3dpZHRoOi41ZW19MTAwJXt0b3A6MS4xMjVlbTtsZWZ0Oi4xODc1ZW07d2lkdGg6Ljc1ZW19fUAtd2Via2l0LWtleWZyYW1lcyBhbmltYXRlLXRvYXN0LXN1Y2Nlc3MtbG9uZ3swJXt0b3A6MS42MjVlbTtyaWdodDoxLjM3NWVtO3dpZHRoOjB9NjUle3RvcDoxLjI1ZW07cmlnaHQ6LjkzNzVlbTt3aWR0aDowfTg0JXt0b3A6LjkzNzVlbTtyaWdodDowO3dpZHRoOjEuMTI1ZW19MTAwJXt0b3A6LjkzNzVlbTtyaWdodDouMTg3NWVtO3dpZHRoOjEuMzc1ZW19fUBrZXlmcmFtZXMgYW5pbWF0ZS10b2FzdC1zdWNjZXNzLWxvbmd7MCV7dG9wOjEuNjI1ZW07cmlnaHQ6MS4zNzVlbTt3aWR0aDowfTY1JXt0b3A6MS4yNWVtO3JpZ2h0Oi45Mzc1ZW07d2lkdGg6MH04NCV7dG9wOi45Mzc1ZW07cmlnaHQ6MDt3aWR0aDoxLjEyNWVtfTEwMCV7dG9wOi45Mzc1ZW07cmlnaHQ6LjE4NzVlbTt3aWR0aDoxLjM3NWVtfX1ib2R5LnN3YWwyLXNob3duOm5vdCguc3dhbDItbm8tYmFja2Ryb3ApOm5vdCguc3dhbDItdG9hc3Qtc2hvd24pe292ZXJmbG93OmhpZGRlbn1ib2R5LnN3YWwyLWhlaWdodC1hdXRve2hlaWdodDphdXRvIWltcG9ydGFudH1ib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1zaG93bnt0b3A6YXV0bztyaWdodDphdXRvO2JvdHRvbTphdXRvO2xlZnQ6YXV0bztiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fWJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLXNob3duPi5zd2FsMi1tb2RhbHtib3gtc2hhZG93OjAgMCAxMHB4IHJnYmEoMCwwLDAsLjQpfWJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLXNob3duLnN3YWwyLXRvcHt0b3A6MDtsZWZ0OjUwJTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpO3RyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpfWJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLXNob3duLnN3YWwyLXRvcC1sZWZ0LGJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLXNob3duLnN3YWwyLXRvcC1zdGFydHt0b3A6MDtsZWZ0OjB9Ym9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItc2hvd24uc3dhbDItdG9wLWVuZCxib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1zaG93bi5zd2FsMi10b3AtcmlnaHR7dG9wOjA7cmlnaHQ6MH1ib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1zaG93bi5zd2FsMi1jZW50ZXJ7dG9wOjUwJTtsZWZ0OjUwJTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSl9Ym9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItc2hvd24uc3dhbDItY2VudGVyLWxlZnQsYm9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItc2hvd24uc3dhbDItY2VudGVyLXN0YXJ0e3RvcDo1MCU7bGVmdDowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSl9Ym9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItc2hvd24uc3dhbDItY2VudGVyLWVuZCxib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1zaG93bi5zd2FsMi1jZW50ZXItcmlnaHR7dG9wOjUwJTtyaWdodDowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSl9Ym9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItc2hvd24uc3dhbDItYm90dG9te2JvdHRvbTowO2xlZnQ6NTAlOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTUwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTUwJSl9Ym9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItc2hvd24uc3dhbDItYm90dG9tLWxlZnQsYm9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItc2hvd24uc3dhbDItYm90dG9tLXN0YXJ0e2JvdHRvbTowO2xlZnQ6MH1ib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1zaG93bi5zd2FsMi1ib3R0b20tZW5kLGJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLXNob3duLnN3YWwyLWJvdHRvbS1yaWdodHtyaWdodDowO2JvdHRvbTowfS5zd2FsMi1jb250YWluZXJ7ZGlzcGxheTpmbGV4O3Bvc2l0aW9uOmZpeGVkO3RvcDowO3JpZ2h0OjA7Ym90dG9tOjA7bGVmdDowO2ZsZXgtZGlyZWN0aW9uOnJvdzthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtwYWRkaW5nOjEwcHg7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDt6LWluZGV4OjEwNjA7b3ZlcmZsb3cteDpoaWRkZW47LXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6dG91Y2h9LnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3B7YWxpZ24taXRlbXM6ZmxleC1zdGFydH0uc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcC1sZWZ0LC5zd2FsMi1jb250YWluZXIuc3dhbDItdG9wLXN0YXJ0e2FsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnR9LnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3AtZW5kLC5zd2FsMi1jb250YWluZXIuc3dhbDItdG9wLXJpZ2h0e2FsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kfS5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVye2FsaWduLWl0ZW1zOmNlbnRlcn0uc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlci1sZWZ0LC5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyLXN0YXJ0e2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydH0uc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlci1lbmQsLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXItcmlnaHR7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpmbGV4LWVuZH0uc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbXthbGlnbi1pdGVtczpmbGV4LWVuZH0uc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbS1sZWZ0LC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLXN0YXJ0e2FsaWduLWl0ZW1zOmZsZXgtZW5kO2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0fS5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLWVuZCwuc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbS1yaWdodHthbGlnbi1pdGVtczpmbGV4LWVuZDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmR9LnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20tZW5kPjpmaXJzdC1jaGlsZCwuc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbS1sZWZ0PjpmaXJzdC1jaGlsZCwuc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbS1yaWdodD46Zmlyc3QtY2hpbGQsLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20tc3RhcnQ+OmZpcnN0LWNoaWxkLC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tPjpmaXJzdC1jaGlsZHttYXJnaW4tdG9wOmF1dG99LnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWZ1bGxzY3JlZW4+LnN3YWwyLW1vZGFse2Rpc3BsYXk6ZmxleCFpbXBvcnRhbnQ7ZmxleDoxO2FsaWduLXNlbGY6c3RyZXRjaDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfS5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1yb3c+LnN3YWwyLW1vZGFse2Rpc3BsYXk6ZmxleCFpbXBvcnRhbnQ7ZmxleDoxO2FsaWduLWNvbnRlbnQ6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXJ9LnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbntmbGV4OjE7ZmxleC1kaXJlY3Rpb246Y29sdW1ufS5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItYm90dG9tLC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItY2VudGVyLC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItdG9we2FsaWduLWl0ZW1zOmNlbnRlcn0uc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uLnN3YWwyLWJvdHRvbS1sZWZ0LC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItYm90dG9tLXN0YXJ0LC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItY2VudGVyLWxlZnQsLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbi5zd2FsMi1jZW50ZXItc3RhcnQsLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbi5zd2FsMi10b3AtbGVmdCwuc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uLnN3YWwyLXRvcC1zdGFydHthbGlnbi1pdGVtczpmbGV4LXN0YXJ0fS5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItYm90dG9tLWVuZCwuc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uLnN3YWwyLWJvdHRvbS1yaWdodCwuc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uLnN3YWwyLWNlbnRlci1lbmQsLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbi5zd2FsMi1jZW50ZXItcmlnaHQsLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbi5zd2FsMi10b3AtZW5kLC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItdG9wLXJpZ2h0e2FsaWduLWl0ZW1zOmZsZXgtZW5kfS5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4+LnN3YWwyLW1vZGFse2Rpc3BsYXk6ZmxleCFpbXBvcnRhbnQ7ZmxleDoxO2FsaWduLWNvbnRlbnQ6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXJ9LnN3YWwyLWNvbnRhaW5lcjpub3QoLnN3YWwyLXRvcCk6bm90KC5zd2FsMi10b3Atc3RhcnQpOm5vdCguc3dhbDItdG9wLWVuZCk6bm90KC5zd2FsMi10b3AtbGVmdCk6bm90KC5zd2FsMi10b3AtcmlnaHQpOm5vdCguc3dhbDItY2VudGVyLXN0YXJ0KTpub3QoLnN3YWwyLWNlbnRlci1lbmQpOm5vdCguc3dhbDItY2VudGVyLWxlZnQpOm5vdCguc3dhbDItY2VudGVyLXJpZ2h0KTpub3QoLnN3YWwyLWJvdHRvbSk6bm90KC5zd2FsMi1ib3R0b20tc3RhcnQpOm5vdCguc3dhbDItYm90dG9tLWVuZCk6bm90KC5zd2FsMi1ib3R0b20tbGVmdCk6bm90KC5zd2FsMi1ib3R0b20tcmlnaHQpOm5vdCguc3dhbDItZ3Jvdy1mdWxsc2NyZWVuKT4uc3dhbDItbW9kYWx7bWFyZ2luOmF1dG99QG1lZGlhIGFsbCBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0Om5vbmUpLCgtbXMtaGlnaC1jb250cmFzdDphY3RpdmUpey5zd2FsMi1jb250YWluZXIgLnN3YWwyLW1vZGFse21hcmdpbjowIWltcG9ydGFudH19LnN3YWwyLWNvbnRhaW5lci5zd2FsMi1mYWRle3RyYW5zaXRpb246YmFja2dyb3VuZC1jb2xvciAuMXN9LnN3YWwyLWNvbnRhaW5lci5zd2FsMi1zaG93bntiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjQpfS5zd2FsMi1wb3B1cHtkaXNwbGF5Om5vbmU7cG9zaXRpb246cmVsYXRpdmU7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2p1c3RpZnktY29udGVudDpjZW50ZXI7d2lkdGg6MzJlbTttYXgtd2lkdGg6MTAwJTtwYWRkaW5nOjEuMjVlbTtib3JkZXItcmFkaXVzOi4zMTI1ZW07YmFja2dyb3VuZDojZmZmO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zaXplOjFyZW07Ym94LXNpemluZzpib3JkZXItYm94fS5zd2FsMi1wb3B1cDpmb2N1c3tvdXRsaW5lOjB9LnN3YWwyLXBvcHVwLnN3YWwyLWxvYWRpbmd7b3ZlcmZsb3cteTpoaWRkZW59LnN3YWwyLXBvcHVwIC5zd2FsMi1oZWFkZXJ7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjthbGlnbi1pdGVtczpjZW50ZXJ9LnN3YWwyLXBvcHVwIC5zd2FsMi10aXRsZXtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlO21heC13aWR0aDoxMDAlO21hcmdpbjowIDAgLjRlbTtwYWRkaW5nOjA7Y29sb3I6IzU5NTk1OTtmb250LXNpemU6MS44NzVlbTtmb250LXdlaWdodDo2MDA7dGV4dC1hbGlnbjpjZW50ZXI7dGV4dC10cmFuc2Zvcm06bm9uZTt3b3JkLXdyYXA6YnJlYWstd29yZH0uc3dhbDItcG9wdXAgLnN3YWwyLWFjdGlvbnN7ZmxleC13cmFwOndyYXA7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7bWFyZ2luOjEuMjVlbSBhdXRvIDA7ei1pbmRleDoxfS5zd2FsMi1wb3B1cCAuc3dhbDItYWN0aW9uczpub3QoLnN3YWwyLWxvYWRpbmcpIC5zd2FsMi1zdHlsZWRbZGlzYWJsZWRde29wYWNpdHk6LjR9LnN3YWwyLXBvcHVwIC5zd2FsMi1hY3Rpb25zOm5vdCguc3dhbDItbG9hZGluZykgLnN3YWwyLXN0eWxlZDpob3ZlcntiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudChyZ2JhKDAsMCwwLC4xKSxyZ2JhKDAsMCwwLC4xKSl9LnN3YWwyLXBvcHVwIC5zd2FsMi1hY3Rpb25zOm5vdCguc3dhbDItbG9hZGluZykgLnN3YWwyLXN0eWxlZDphY3RpdmV7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQocmdiYSgwLDAsMCwuMikscmdiYSgwLDAsMCwuMikpfS5zd2FsMi1wb3B1cCAuc3dhbDItYWN0aW9ucy5zd2FsMi1sb2FkaW5nIC5zd2FsMi1zdHlsZWQuc3dhbDItY29uZmlybXt3aWR0aDoyLjVlbTtoZWlnaHQ6Mi41ZW07bWFyZ2luOi40Njg3NWVtO3BhZGRpbmc6MDtib3JkZXI6LjI1ZW0gc29saWQgdHJhbnNwYXJlbnQ7Ym9yZGVyLXJhZGl1czoxMDAlO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50IWltcG9ydGFudDtjb2xvcjp0cmFuc3BhcmVudDtjdXJzb3I6ZGVmYXVsdDtib3gtc2l6aW5nOmJvcmRlci1ib3g7LXdlYmtpdC1hbmltYXRpb246c3dhbDItcm90YXRlLWxvYWRpbmcgMS41cyBsaW5lYXIgMHMgaW5maW5pdGUgbm9ybWFsO2FuaW1hdGlvbjpzd2FsMi1yb3RhdGUtbG9hZGluZyAxLjVzIGxpbmVhciAwcyBpbmZpbml0ZSBub3JtYWw7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lfS5zd2FsMi1wb3B1cCAuc3dhbDItYWN0aW9ucy5zd2FsMi1sb2FkaW5nIC5zd2FsMi1zdHlsZWQuc3dhbDItY2FuY2Vse21hcmdpbi1yaWdodDozMHB4O21hcmdpbi1sZWZ0OjMwcHh9LnN3YWwyLXBvcHVwIC5zd2FsMi1hY3Rpb25zLnN3YWwyLWxvYWRpbmcgOm5vdCguc3dhbDItc3R5bGVkKS5zd2FsMi1jb25maXJtOjphZnRlcntkaXNwbGF5OmlubGluZS1ibG9jazt3aWR0aDoxNXB4O2hlaWdodDoxNXB4O21hcmdpbi1sZWZ0OjVweDtib3JkZXI6M3B4IHNvbGlkICM5OTk7Ym9yZGVyLXJhZGl1czo1MCU7Ym9yZGVyLXJpZ2h0LWNvbG9yOnRyYW5zcGFyZW50O2JveC1zaGFkb3c6MXB4IDFweCAxcHggI2ZmZjtjb250ZW50OicnOy13ZWJraXQtYW5pbWF0aW9uOnN3YWwyLXJvdGF0ZS1sb2FkaW5nIDEuNXMgbGluZWFyIDBzIGluZmluaXRlIG5vcm1hbDthbmltYXRpb246c3dhbDItcm90YXRlLWxvYWRpbmcgMS41cyBsaW5lYXIgMHMgaW5maW5pdGUgbm9ybWFsfS5zd2FsMi1wb3B1cCAuc3dhbDItc3R5bGVke21hcmdpbjouMzEyNWVtO3BhZGRpbmc6LjYyNWVtIDJlbTtmb250LXdlaWdodDo1MDA7Ym94LXNoYWRvdzpub25lfS5zd2FsMi1wb3B1cCAuc3dhbDItc3R5bGVkOm5vdChbZGlzYWJsZWRdKXtjdXJzb3I6cG9pbnRlcn0uc3dhbDItcG9wdXAgLnN3YWwyLXN0eWxlZC5zd2FsMi1jb25maXJte2JvcmRlcjowO2JvcmRlci1yYWRpdXM6LjI1ZW07YmFja2dyb3VuZDppbml0aWFsO2JhY2tncm91bmQtY29sb3I6IzMwODVkNjtjb2xvcjojZmZmO2ZvbnQtc2l6ZToxLjA2MjVlbX0uc3dhbDItcG9wdXAgLnN3YWwyLXN0eWxlZC5zd2FsMi1jYW5jZWx7Ym9yZGVyOjA7Ym9yZGVyLXJhZGl1czouMjVlbTtiYWNrZ3JvdW5kOmluaXRpYWw7YmFja2dyb3VuZC1jb2xvcjojYWFhO2NvbG9yOiNmZmY7Zm9udC1zaXplOjEuMDYyNWVtfS5zd2FsMi1wb3B1cCAuc3dhbDItc3R5bGVkOmZvY3Vze291dGxpbmU6MDtib3gtc2hhZG93OjAgMCAwIDJweCAjZmZmLDAgMCAwIDRweCByZ2JhKDUwLDEwMCwxNTAsLjQpfS5zd2FsMi1wb3B1cCAuc3dhbDItc3R5bGVkOjotbW96LWZvY3VzLWlubmVye2JvcmRlcjowfS5zd2FsMi1wb3B1cCAuc3dhbDItZm9vdGVye2p1c3RpZnktY29udGVudDpjZW50ZXI7bWFyZ2luOjEuMjVlbSAwIDA7cGFkZGluZzoxZW0gMCAwO2JvcmRlci10b3A6MXB4IHNvbGlkICNlZWU7Y29sb3I6IzU0NTQ1NDtmb250LXNpemU6MWVtfS5zd2FsMi1wb3B1cCAuc3dhbDItaW1hZ2V7bWF4LXdpZHRoOjEwMCU7bWFyZ2luOjEuMjVlbSBhdXRvfS5zd2FsMi1wb3B1cCAuc3dhbDItY2xvc2V7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7cmlnaHQ6MDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3dpZHRoOjEuMmVtO2hlaWdodDoxLjJlbTtwYWRkaW5nOjA7dHJhbnNpdGlvbjpjb2xvciAuMXMgZWFzZS1vdXQ7Ym9yZGVyOm5vbmU7Ym9yZGVyLXJhZGl1czowO291dGxpbmU6aW5pdGlhbDtiYWNrZ3JvdW5kOjAgMDtjb2xvcjojY2NjO2ZvbnQtZmFtaWx5OnNlcmlmO2ZvbnQtc2l6ZToyLjVlbTtsaW5lLWhlaWdodDoxLjI7Y3Vyc29yOnBvaW50ZXI7b3ZlcmZsb3c6aGlkZGVufS5zd2FsMi1wb3B1cCAuc3dhbDItY2xvc2U6aG92ZXJ7LXdlYmtpdC10cmFuc2Zvcm06bm9uZTt0cmFuc2Zvcm06bm9uZTtjb2xvcjojZjI3NDc0fS5zd2FsMi1wb3B1cD4uc3dhbDItY2hlY2tib3gsLnN3YWwyLXBvcHVwPi5zd2FsMi1maWxlLC5zd2FsMi1wb3B1cD4uc3dhbDItaW5wdXQsLnN3YWwyLXBvcHVwPi5zd2FsMi1yYWRpbywuc3dhbDItcG9wdXA+LnN3YWwyLXNlbGVjdCwuc3dhbDItcG9wdXA+LnN3YWwyLXRleHRhcmVhe2Rpc3BsYXk6bm9uZX0uc3dhbDItcG9wdXAgLnN3YWwyLWNvbnRlbnR7anVzdGlmeS1jb250ZW50OmNlbnRlcjttYXJnaW46MDtwYWRkaW5nOjA7Y29sb3I6IzU0NTQ1NDtmb250LXNpemU6MS4xMjVlbTtmb250LXdlaWdodDozMDA7bGluZS1oZWlnaHQ6bm9ybWFsO3otaW5kZXg6MTt3b3JkLXdyYXA6YnJlYWstd29yZH0uc3dhbDItcG9wdXAgI3N3YWwyLWNvbnRlbnR7dGV4dC1hbGlnbjpjZW50ZXJ9LnN3YWwyLXBvcHVwIC5zd2FsMi1jaGVja2JveCwuc3dhbDItcG9wdXAgLnN3YWwyLWZpbGUsLnN3YWwyLXBvcHVwIC5zd2FsMi1pbnB1dCwuc3dhbDItcG9wdXAgLnN3YWwyLXJhZGlvLC5zd2FsMi1wb3B1cCAuc3dhbDItc2VsZWN0LC5zd2FsMi1wb3B1cCAuc3dhbDItdGV4dGFyZWF7bWFyZ2luOjFlbSBhdXRvfS5zd2FsMi1wb3B1cCAuc3dhbDItZmlsZSwuc3dhbDItcG9wdXAgLnN3YWwyLWlucHV0LC5zd2FsMi1wb3B1cCAuc3dhbDItdGV4dGFyZWF7d2lkdGg6MTAwJTt0cmFuc2l0aW9uOmJvcmRlci1jb2xvciAuM3MsYm94LXNoYWRvdyAuM3M7Ym9yZGVyOjFweCBzb2xpZCAjZDlkOWQ5O2JvcmRlci1yYWRpdXM6LjE4NzVlbTtiYWNrZ3JvdW5kOmluaGVyaXQ7Zm9udC1zaXplOjEuMTI1ZW07Ym94LXNoYWRvdzppbnNldCAwIDFweCAxcHggcmdiYSgwLDAsMCwuMDYpO2JveC1zaXppbmc6Ym9yZGVyLWJveH0uc3dhbDItcG9wdXAgLnN3YWwyLWZpbGUuc3dhbDItaW5wdXRlcnJvciwuc3dhbDItcG9wdXAgLnN3YWwyLWlucHV0LnN3YWwyLWlucHV0ZXJyb3IsLnN3YWwyLXBvcHVwIC5zd2FsMi10ZXh0YXJlYS5zd2FsMi1pbnB1dGVycm9ye2JvcmRlci1jb2xvcjojZjI3NDc0IWltcG9ydGFudDtib3gtc2hhZG93OjAgMCAycHggI2YyNzQ3NCFpbXBvcnRhbnR9LnN3YWwyLXBvcHVwIC5zd2FsMi1maWxlOmZvY3VzLC5zd2FsMi1wb3B1cCAuc3dhbDItaW5wdXQ6Zm9jdXMsLnN3YWwyLXBvcHVwIC5zd2FsMi10ZXh0YXJlYTpmb2N1c3tib3JkZXI6MXB4IHNvbGlkICNiNGRiZWQ7b3V0bGluZTowO2JveC1zaGFkb3c6MCAwIDNweCAjYzRlNmY1fS5zd2FsMi1wb3B1cCAuc3dhbDItZmlsZTo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciwuc3dhbDItcG9wdXAgLnN3YWwyLWlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyLC5zd2FsMi1wb3B1cCAuc3dhbDItdGV4dGFyZWE6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXJ7Y29sb3I6I2NjY30uc3dhbDItcG9wdXAgLnN3YWwyLWZpbGU6LW1zLWlucHV0LXBsYWNlaG9sZGVyLC5zd2FsMi1wb3B1cCAuc3dhbDItaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyLC5zd2FsMi1wb3B1cCAuc3dhbDItdGV4dGFyZWE6LW1zLWlucHV0LXBsYWNlaG9sZGVye2NvbG9yOiNjY2N9LnN3YWwyLXBvcHVwIC5zd2FsMi1maWxlOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIsLnN3YWwyLXBvcHVwIC5zd2FsMi1pbnB1dDo6LW1zLWlucHV0LXBsYWNlaG9sZGVyLC5zd2FsMi1wb3B1cCAuc3dhbDItdGV4dGFyZWE6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlcntjb2xvcjojY2NjfS5zd2FsMi1wb3B1cCAuc3dhbDItZmlsZTo6cGxhY2Vob2xkZXIsLnN3YWwyLXBvcHVwIC5zd2FsMi1pbnB1dDo6cGxhY2Vob2xkZXIsLnN3YWwyLXBvcHVwIC5zd2FsMi10ZXh0YXJlYTo6cGxhY2Vob2xkZXJ7Y29sb3I6I2NjY30uc3dhbDItcG9wdXAgLnN3YWwyLXJhbmdle21hcmdpbjoxZW0gYXV0bztiYWNrZ3JvdW5kOmluaGVyaXR9LnN3YWwyLXBvcHVwIC5zd2FsMi1yYW5nZSBpbnB1dHt3aWR0aDo4MCV9LnN3YWwyLXBvcHVwIC5zd2FsMi1yYW5nZSBvdXRwdXR7d2lkdGg6MjAlO2ZvbnQtd2VpZ2h0OjYwMDt0ZXh0LWFsaWduOmNlbnRlcn0uc3dhbDItcG9wdXAgLnN3YWwyLXJhbmdlIGlucHV0LC5zd2FsMi1wb3B1cCAuc3dhbDItcmFuZ2Ugb3V0cHV0e2hlaWdodDoyLjYyNWVtO3BhZGRpbmc6MDtmb250LXNpemU6MS4xMjVlbTtsaW5lLWhlaWdodDoyLjYyNWVtfS5zd2FsMi1wb3B1cCAuc3dhbDItaW5wdXR7aGVpZ2h0OjIuNjI1ZW07cGFkZGluZzowIC43NWVtfS5zd2FsMi1wb3B1cCAuc3dhbDItaW5wdXRbdHlwZT1udW1iZXJde21heC13aWR0aDoxMGVtfS5zd2FsMi1wb3B1cCAuc3dhbDItZmlsZXtiYWNrZ3JvdW5kOmluaGVyaXQ7Zm9udC1zaXplOjEuMTI1ZW19LnN3YWwyLXBvcHVwIC5zd2FsMi10ZXh0YXJlYXtoZWlnaHQ6Ni43NWVtO3BhZGRpbmc6Ljc1ZW19LnN3YWwyLXBvcHVwIC5zd2FsMi1zZWxlY3R7bWluLXdpZHRoOjUwJTttYXgtd2lkdGg6MTAwJTtwYWRkaW5nOi4zNzVlbSAuNjI1ZW07YmFja2dyb3VuZDppbmhlcml0O2NvbG9yOiM1NDU0NTQ7Zm9udC1zaXplOjEuMTI1ZW19LnN3YWwyLXBvcHVwIC5zd2FsMi1jaGVja2JveCwuc3dhbDItcG9wdXAgLnN3YWwyLXJhZGlve2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2JhY2tncm91bmQ6aW5oZXJpdH0uc3dhbDItcG9wdXAgLnN3YWwyLWNoZWNrYm94IGxhYmVsLC5zd2FsMi1wb3B1cCAuc3dhbDItcmFkaW8gbGFiZWx7bWFyZ2luOjAgLjZlbTtmb250LXNpemU6MS4xMjVlbX0uc3dhbDItcG9wdXAgLnN3YWwyLWNoZWNrYm94IGlucHV0LC5zd2FsMi1wb3B1cCAuc3dhbDItcmFkaW8gaW5wdXR7bWFyZ2luOjAgLjRlbX0uc3dhbDItcG9wdXAgLnN3YWwyLXZhbGlkYXRpb24tbWVzc2FnZXtkaXNwbGF5Om5vbmU7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7cGFkZGluZzouNjI1ZW07YmFja2dyb3VuZDojZjBmMGYwO2NvbG9yOiM2NjY7Zm9udC1zaXplOjFlbTtmb250LXdlaWdodDozMDA7b3ZlcmZsb3c6aGlkZGVufS5zd2FsMi1wb3B1cCAuc3dhbDItdmFsaWRhdGlvbi1tZXNzYWdlOjpiZWZvcmV7ZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6MS41ZW07bWluLXdpZHRoOjEuNWVtO2hlaWdodDoxLjVlbTttYXJnaW46MCAuNjI1ZW07Ym9yZGVyLXJhZGl1czo1MCU7YmFja2dyb3VuZC1jb2xvcjojZjI3NDc0O2NvbG9yOiNmZmY7Zm9udC13ZWlnaHQ6NjAwO2xpbmUtaGVpZ2h0OjEuNWVtO3RleHQtYWxpZ246Y2VudGVyO2NvbnRlbnQ6JyEnO3pvb206bm9ybWFsfUBzdXBwb3J0cyAoLW1zLWFjY2VsZXJhdG9yOnRydWUpey5zd2FsMi1yYW5nZSBpbnB1dHt3aWR0aDoxMDAlIWltcG9ydGFudH0uc3dhbDItcmFuZ2Ugb3V0cHV0e2Rpc3BsYXk6bm9uZX19QG1lZGlhIGFsbCBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0Om5vbmUpLCgtbXMtaGlnaC1jb250cmFzdDphY3RpdmUpey5zd2FsMi1yYW5nZSBpbnB1dHt3aWR0aDoxMDAlIWltcG9ydGFudH0uc3dhbDItcmFuZ2Ugb3V0cHV0e2Rpc3BsYXk6bm9uZX19QC1tb3otZG9jdW1lbnQgdXJsLXByZWZpeCgpey5zd2FsMi1jbG9zZTpmb2N1c3tvdXRsaW5lOjJweCBzb2xpZCByZ2JhKDUwLDEwMCwxNTAsLjQpfX0uc3dhbDItaWNvbntwb3NpdGlvbjpyZWxhdGl2ZTtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3dpZHRoOjVlbTtoZWlnaHQ6NWVtO21hcmdpbjoxLjI1ZW0gYXV0byAxLjg3NWVtO2JvcmRlcjouMjVlbSBzb2xpZCB0cmFuc3BhcmVudDtib3JkZXItcmFkaXVzOjUwJTtsaW5lLWhlaWdodDo1ZW07Y3Vyc29yOmRlZmF1bHQ7Ym94LXNpemluZzpjb250ZW50LWJveDstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7em9vbTpub3JtYWx9LnN3YWwyLWljb24tdGV4dHtmb250LXNpemU6My43NWVtfS5zd2FsMi1pY29uLnN3YWwyLWVycm9ye2JvcmRlci1jb2xvcjojZjI3NDc0fS5zd2FsMi1pY29uLnN3YWwyLWVycm9yIC5zd2FsMi14LW1hcmt7cG9zaXRpb246cmVsYXRpdmU7ZmxleC1ncm93OjF9LnN3YWwyLWljb24uc3dhbDItZXJyb3IgW2NsYXNzXj1zd2FsMi14LW1hcmstbGluZV17ZGlzcGxheTpibG9jaztwb3NpdGlvbjphYnNvbHV0ZTt0b3A6Mi4zMTI1ZW07d2lkdGg6Mi45Mzc1ZW07aGVpZ2h0Oi4zMTI1ZW07Ym9yZGVyLXJhZGl1czouMTI1ZW07YmFja2dyb3VuZC1jb2xvcjojZjI3NDc0fS5zd2FsMi1pY29uLnN3YWwyLWVycm9yIFtjbGFzc149c3dhbDIteC1tYXJrLWxpbmVdW2NsYXNzJD1sZWZ0XXtsZWZ0OjEuMDYyNWVtOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyl9LnN3YWwyLWljb24uc3dhbDItZXJyb3IgW2NsYXNzXj1zd2FsMi14LW1hcmstbGluZV1bY2xhc3MkPXJpZ2h0XXtyaWdodDoxZW07LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpfS5zd2FsMi1pY29uLnN3YWwyLXdhcm5pbmd7Ym9yZGVyLWNvbG9yOiNmYWNlYTg7Y29sb3I6I2Y4YmI4Nn0uc3dhbDItaWNvbi5zd2FsMi1pbmZve2JvcmRlci1jb2xvcjojOWRlMGY2O2NvbG9yOiMzZmMzZWV9LnN3YWwyLWljb24uc3dhbDItcXVlc3Rpb257Ym9yZGVyLWNvbG9yOiNjOWRhZTE7Y29sb3I6Izg3YWRiZH0uc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNze2JvcmRlci1jb2xvcjojYTVkYzg2fS5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmVde3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjMuNzVlbTtoZWlnaHQ6Ny41ZW07LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTtib3JkZXItcmFkaXVzOjUwJX0uc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzIFtjbGFzc149c3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lXVtjbGFzcyQ9bGVmdF17dG9wOi0uNDM3NWVtO2xlZnQ6LTIuMDYzNWVtOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46My43NWVtIDMuNzVlbTt0cmFuc2Zvcm0tb3JpZ2luOjMuNzVlbSAzLjc1ZW07Ym9yZGVyLXJhZGl1czo3LjVlbSAwIDAgNy41ZW19LnN3YWwyLWljb24uc3dhbDItc3VjY2VzcyBbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZV1bY2xhc3MkPXJpZ2h0XXt0b3A6LS42ODc1ZW07bGVmdDoxLjg3NWVtOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46MCAzLjc1ZW07dHJhbnNmb3JtLW9yaWdpbjowIDMuNzVlbTtib3JkZXItcmFkaXVzOjAgNy41ZW0gNy41ZW0gMH0uc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzIC5zd2FsMi1zdWNjZXNzLXJpbmd7cG9zaXRpb246YWJzb2x1dGU7dG9wOi0uMjVlbTtsZWZ0Oi0uMjVlbTt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2JvcmRlcjouMjVlbSBzb2xpZCByZ2JhKDE2NSwyMjAsMTM0LC4zKTtib3JkZXItcmFkaXVzOjUwJTt6LWluZGV4OjI7Ym94LXNpemluZzpjb250ZW50LWJveH0uc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzIC5zd2FsMi1zdWNjZXNzLWZpeHtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6LjVlbTtsZWZ0OjEuNjI1ZW07d2lkdGg6LjQzNzVlbTtoZWlnaHQ6NS42MjVlbTstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7ei1pbmRleDoxfS5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWxpbmVde2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246YWJzb2x1dGU7aGVpZ2h0Oi4zMTI1ZW07Ym9yZGVyLXJhZGl1czouMTI1ZW07YmFja2dyb3VuZC1jb2xvcjojYTVkYzg2O3otaW5kZXg6Mn0uc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzIFtjbGFzc149c3dhbDItc3VjY2Vzcy1saW5lXVtjbGFzcyQ9dGlwXXt0b3A6Mi44NzVlbTtsZWZ0Oi44NzVlbTt3aWR0aDoxLjU2MjVlbTstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoNDVkZWcpfS5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWxpbmVdW2NsYXNzJD1sb25nXXt0b3A6Mi4zNzVlbTtyaWdodDouNWVtO3dpZHRoOjIuOTM3NWVtOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKX0uc3dhbDItcHJvZ3Jlc3Mtc3RlcHN7YWxpZ24taXRlbXM6Y2VudGVyO21hcmdpbjowIDAgMS4yNWVtO3BhZGRpbmc6MDtiYWNrZ3JvdW5kOmluaGVyaXQ7Zm9udC13ZWlnaHQ6NjAwfS5zd2FsMi1wcm9ncmVzcy1zdGVwcyBsaXtkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjpyZWxhdGl2ZX0uc3dhbDItcHJvZ3Jlc3Mtc3RlcHMgLnN3YWwyLXByb2dyZXNzLXN0ZXB7d2lkdGg6MmVtO2hlaWdodDoyZW07Ym9yZGVyLXJhZGl1czoyZW07YmFja2dyb3VuZDojMzA4NWQ2O2NvbG9yOiNmZmY7bGluZS1oZWlnaHQ6MmVtO3RleHQtYWxpZ246Y2VudGVyO3otaW5kZXg6MjB9LnN3YWwyLXByb2dyZXNzLXN0ZXBzIC5zd2FsMi1wcm9ncmVzcy1zdGVwLnN3YWwyLWFjdGl2ZS1wcm9ncmVzcy1zdGVwe2JhY2tncm91bmQ6IzMwODVkNn0uc3dhbDItcHJvZ3Jlc3Mtc3RlcHMgLnN3YWwyLXByb2dyZXNzLXN0ZXAuc3dhbDItYWN0aXZlLXByb2dyZXNzLXN0ZXB+LnN3YWwyLXByb2dyZXNzLXN0ZXB7YmFja2dyb3VuZDppbmhlcml0O2NvbG9yOiNmZmZ9LnN3YWwyLXByb2dyZXNzLXN0ZXBzIC5zd2FsMi1wcm9ncmVzcy1zdGVwLnN3YWwyLWFjdGl2ZS1wcm9ncmVzcy1zdGVwfi5zd2FsMi1wcm9ncmVzcy1zdGVwLWxpbmV7YmFja2dyb3VuZDppbmhlcml0fS5zd2FsMi1wcm9ncmVzcy1zdGVwcyAuc3dhbDItcHJvZ3Jlc3Mtc3RlcC1saW5le3dpZHRoOjIuNWVtO2hlaWdodDouNGVtO21hcmdpbjowIC0xcHg7YmFja2dyb3VuZDojMzA4NWQ2O3otaW5kZXg6MTB9W2NsYXNzXj1zd2FsMl17LXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOnRyYW5zcGFyZW50fS5zd2FsMi1zaG93ey13ZWJraXQtYW5pbWF0aW9uOnN3YWwyLXNob3cgLjNzO2FuaW1hdGlvbjpzd2FsMi1zaG93IC4zc30uc3dhbDItc2hvdy5zd2FsMi1ub2FuaW1hdGlvbnstd2Via2l0LWFuaW1hdGlvbjpub25lO2FuaW1hdGlvbjpub25lfS5zd2FsMi1oaWRley13ZWJraXQtYW5pbWF0aW9uOnN3YWwyLWhpZGUgLjE1cyBmb3J3YXJkczthbmltYXRpb246c3dhbDItaGlkZSAuMTVzIGZvcndhcmRzfS5zd2FsMi1oaWRlLnN3YWwyLW5vYW5pbWF0aW9uey13ZWJraXQtYW5pbWF0aW9uOm5vbmU7YW5pbWF0aW9uOm5vbmV9LnN3YWwyLXJ0bCAuc3dhbDItY2xvc2V7cmlnaHQ6YXV0bztsZWZ0OjB9LnN3YWwyLWFuaW1hdGUtc3VjY2Vzcy1pY29uIC5zd2FsMi1zdWNjZXNzLWxpbmUtdGlwey13ZWJraXQtYW5pbWF0aW9uOnN3YWwyLWFuaW1hdGUtc3VjY2Vzcy1saW5lLXRpcCAuNzVzO2FuaW1hdGlvbjpzd2FsMi1hbmltYXRlLXN1Y2Nlc3MtbGluZS10aXAgLjc1c30uc3dhbDItYW5pbWF0ZS1zdWNjZXNzLWljb24gLnN3YWwyLXN1Y2Nlc3MtbGluZS1sb25ney13ZWJraXQtYW5pbWF0aW9uOnN3YWwyLWFuaW1hdGUtc3VjY2Vzcy1saW5lLWxvbmcgLjc1czthbmltYXRpb246c3dhbDItYW5pbWF0ZS1zdWNjZXNzLWxpbmUtbG9uZyAuNzVzfS5zd2FsMi1hbmltYXRlLXN1Y2Nlc3MtaWNvbiAuc3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lLXJpZ2h0ey13ZWJraXQtYW5pbWF0aW9uOnN3YWwyLXJvdGF0ZS1zdWNjZXNzLWNpcmN1bGFyLWxpbmUgNC4yNXMgZWFzZS1pbjthbmltYXRpb246c3dhbDItcm90YXRlLXN1Y2Nlc3MtY2lyY3VsYXItbGluZSA0LjI1cyBlYXNlLWlufS5zd2FsMi1hbmltYXRlLWVycm9yLWljb257LXdlYmtpdC1hbmltYXRpb246c3dhbDItYW5pbWF0ZS1lcnJvci1pY29uIC41czthbmltYXRpb246c3dhbDItYW5pbWF0ZS1lcnJvci1pY29uIC41c30uc3dhbDItYW5pbWF0ZS1lcnJvci1pY29uIC5zd2FsMi14LW1hcmt7LXdlYmtpdC1hbmltYXRpb246c3dhbDItYW5pbWF0ZS1lcnJvci14LW1hcmsgLjVzO2FuaW1hdGlvbjpzd2FsMi1hbmltYXRlLWVycm9yLXgtbWFyayAuNXN9QC13ZWJraXQta2V5ZnJhbWVzIHN3YWwyLXJvdGF0ZS1sb2FkaW5nezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgwKTt0cmFuc2Zvcm06cm90YXRlKDApfTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpfX1Aa2V5ZnJhbWVzIHN3YWwyLXJvdGF0ZS1sb2FkaW5nezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgwKTt0cmFuc2Zvcm06cm90YXRlKDApfTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpfX1AbWVkaWEgcHJpbnR7Ym9keS5zd2FsMi1zaG93bjpub3QoLnN3YWwyLW5vLWJhY2tkcm9wKTpub3QoLnN3YWwyLXRvYXN0LXNob3duKXtvdmVyZmxvdy15OnNjcm9sbCFpbXBvcnRhbnR9Ym9keS5zd2FsMi1zaG93bjpub3QoLnN3YWwyLW5vLWJhY2tkcm9wKTpub3QoLnN3YWwyLXRvYXN0LXNob3duKT5bYXJpYS1oaWRkZW49dHJ1ZV17ZGlzcGxheTpub25lfWJvZHkuc3dhbDItc2hvd246bm90KC5zd2FsMi1uby1iYWNrZHJvcCk6bm90KC5zd2FsMi10b2FzdC1zaG93bikgLnN3YWwyLWNvbnRhaW5lcntwb3NpdGlvbjppbml0aWFsIWltcG9ydGFudH19XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=