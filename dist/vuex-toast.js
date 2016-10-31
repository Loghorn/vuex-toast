/*!
 * vuex-toast v0.0.3
 * https://github.com/ktsn/vuex-toast
 *
 * Copyright (c) 2016 katashin
 * Released under the MIT license
 * https://github.com/ktsn/vuex-toast/blob/master/LICENSE
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vuex"));
	else if(typeof define === 'function' && define.amd)
		define(["vuex"], factory);
	else if(typeof exports === 'object')
		exports["VuexToast"] = factory(require("vuex"));
	else
		root["VuexToast"] = factory(root["Vuex"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_6__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Toast = undefined;
	exports.createComponent = createComponent;

	var _module = __webpack_require__(1);

	Object.keys(_module).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _module[key];
	    }
	  });
	});

	var _Toast = __webpack_require__(2);

	var _Toast2 = _interopRequireDefault(_Toast);

	var _utils = __webpack_require__(9);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function createComponent() {
	  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var transition = options.transition;


	  return (0, _utils.update)(_Toast2.default, {
	    components: {
	      toastTransition: transition
	    }
	  });
	}

	exports.Toast = _Toast2.default;

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.createModule = createModule;

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var PREFIX = '@@toast/';

	var ADD = PREFIX + 'ADD_TOAST_MESSAGE';
	var REMOVE = PREFIX + 'REMOVE_TOAST_MESSAGE';

	exports.ADD_TOAST_MESSAGE = ADD;
	exports.REMOVE_TOAST_MESSAGE = REMOVE;


	function createMessage(id, text, type) {
		return {
			id: id,
			text: text,
			type: type
		};
	}

	function createModule() {
		var _actions, _mutations;

		var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
		var _options$dismissInter = options.dismissInterval,
		    dismissInterval = _options$dismissInter === undefined ? 5000 : _options$dismissInter;


		var maxToastId = 0;

		var state = {
			messages: []
		};

		var getters = {
			toastMessages: function toastMessages(state) {
				return state.messages;
			}
		};

		var actions = (_actions = {}, _defineProperty(_actions, ADD, function (_ref, _ref2) {
			var commit = _ref.commit;
			var text = _ref2.text,
			    _ref2$type = _ref2.type,
			    type = _ref2$type === undefined ? 'info' : _ref2$type,
			    _ref2$dismissInterval = _ref2.dismissInterval,
			    dismissInterval = _ref2$dismissInterval === undefined ? dismissInterval : _ref2$dismissInterval;

			var id = ++maxToastId;

			commit(ADD, createMessage(id, text, type));
			setTimeout(function () {
				return commit(REMOVE, id);
			}, dismissInterval);
		}), _defineProperty(_actions, REMOVE, function (_ref3, id) {
			var commit = _ref3.commit;

			commit(REMOVE, id);
		}), _actions);

		var mutations = (_mutations = {}, _defineProperty(_mutations, ADD, function (state, data) {
			state.messages.push(data);
		}), _defineProperty(_mutations, REMOVE, function (state, id) {
			state.messages = state.messages.filter(function (m) {
				return m.id !== id;
			});
		}), _mutations);

		return {
			state: state,
			getters: getters,
			actions: actions,
			mutations: mutations
		};
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__

	/* styles */
	__webpack_require__(3)

	/* script */
	__vue_exports__ = __webpack_require__(5)

	/* template */
	var __vue_template__ = __webpack_require__(8)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}

	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	module.exports = __vue_exports__


/***/ },
/* 3 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 4 */,
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var _vuex = __webpack_require__(6);

	var _module = __webpack_require__(1);

	var _config = __webpack_require__(7);

	exports.default = {
	  props: {
	    position: {
	      validator: function validator(value) {
	        return (/^(:?n|s|nw|ne|sw|se)$/.test(value)
	        );
	      },

	      default: 'ne'
	    }
	  },

	  computed: _extends({}, (0, _vuex.mapGetters)({
	    messages: 'toastMessages'
	  }), {
	    positionClass: function positionClass() {
	      return 'toast-position-' + this.position;
	    }
	  }),

	  methods: _extends({}, (0, _vuex.mapActions)({
	    close: _module.REMOVE_TOAST_MESSAGE
	  }), {
	    messageTypeClass: function messageTypeClass(message) {
	      return 'toast-type-' + message.type;
	    }
	  }),

	  components: {
	    ToastTransition: _config.DefaultTransition
	  }
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var DefaultTransition = exports.DefaultTransition = {
	  functional: true,
	  render: function render(h, _ref) {
	    var children = _ref.children;

	    var data = {
	      attrs: { tag: 'div', name: 'toast', type: 'transition' }
	    };
	    return h('transition-group', data, children);
	  }
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    staticClass: "toast",
	    class: positionClass
	  }, [_h('toast-transition', [_l((messages), function(m) {
	    return _h('div', {
	      key: m.id,
	      staticClass: "toast-message",
	      class: messageTypeClass(m),
	      attrs: {
	        "role": "note"
	      }
	    }, [_h('div', {
	      staticClass: "toast-message-text"
	    }, [_s(m.text)]), " ", _h('button', {
	      staticClass: "toast-button",
	      attrs: {
	        "aria-label": "Close",
	        "type": "button"
	      },
	      on: {
	        "click": function($event) {
	          close(m.id)
	        }
	      }
	    })])
	  })])])
	}},staticRenderFns: []}

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.update = update;


	/**
	 * Simple update without mutation
	 */
	function update(obj, updater) {
	  var res = {};
	  Object.keys(obj).forEach(function (key) {
	    res[key] = updater[key] === undefined ? obj[key] : updater[key];
	  });
	  return res;
	}

/***/ }
/******/ ])
});
;