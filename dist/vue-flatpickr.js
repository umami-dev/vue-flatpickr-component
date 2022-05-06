(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("flatpickr"), require("vue"));
	else if(typeof define === 'function' && define.amd)
		define("VueFlatpickr", ["flatpickr", "vue"], factory);
	else if(typeof exports === 'object')
		exports["VueFlatpickr"] = factory(require("flatpickr"), require("vue"));
	else
		root["VueFlatpickr"] = factory(root["flatpickr"], root["Vue"]);
})(self, function(__WEBPACK_EXTERNAL_MODULE__69__, __WEBPACK_EXTERNAL_MODULE__982__) {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 69:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__69__;

/***/ }),

/***/ 982:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__982__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ src)
});

// UNUSED EXPORTS: Component, Plugin

// EXTERNAL MODULE: external "flatpickr"
var external_flatpickr_ = __webpack_require__(69);
var external_flatpickr_default = /*#__PURE__*/__webpack_require__.n(external_flatpickr_);
;// CONCATENATED MODULE: ./src/events.js
// Events to emit, copied from flatpickr source
const includedEvents = ['onChange', 'onClose', 'onDestroy', 'onMonthChange', 'onOpen', 'onYearChange']; // Let's not emit these events by default

const excludedEvents = ['onValueUpdate', 'onDayCreate', 'onParseConfig', 'onReady', 'onPreCalendarPosition', 'onKeyDown'];

;// CONCATENATED MODULE: ./src/util.js
const camelToKebab = string => {
  return string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
};

const arrayify = obj => {
  return obj instanceof Array ? obj : [obj];
};

const nullify = value => {
  return value && value.length ? value : null;
};

const cloneObject = obj => {
  return Object.assign({}, obj);
};


// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","amd":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_ = __webpack_require__(982);
;// CONCATENATED MODULE: ./src/component.js


 // You have to import css yourself

 // Keep a copy of all events for later use

const allEvents = includedEvents.concat(excludedEvents); // Passing these properties in `set()` method will cause flatpickr to trigger some callbacks

const configCallbacks = ['locale', 'showMonths'];
/* harmony default export */ const component = ({
  name: 'flat-pickr',

  render() {
    return (0,external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_.h)('input', {
      type: 'text',
      'data-input': true,
      disabled: this.disabled,
      onInput: this.onInput,
      ref: 'root'
    });
  },

  emits: ['blur', 'update:modelValue'].concat(allEvents.map(camelToKebab)),
  props: {
    modelValue: {
      default: null,
      required: true,

      validator(value) {
        return value === null || value instanceof Date || typeof value === 'string' || value instanceof String || value instanceof Array || typeof value === 'number';
      }

    },
    // https://chmln.github.io/flatpickr/options/
    config: {
      type: Object,
      default: () => ({
        wrap: false,
        defaultDate: null
      })
    },
    events: {
      type: Array,
      default: () => includedEvents
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      /**
       * The flatpickr instance
       */
      fp: null
    };
  },

  mounted() {
    // Return early if flatpickr is already loaded

    /* istanbul ignore if */
    if (this.fp) return; // Don't mutate original object on parent component

    let safeConfig = cloneObject(this.config);
    this.events.forEach(hook => {
      // Respect global callbacks registered via setDefault() method
      let globalCallbacks = (external_flatpickr_default()).defaultConfig[hook] || []; // Inject our own method along with user callback

      let localCallback = (...args) => {
        this.$emit(camelToKebab(hook), ...args);
      }; // Overwrite with merged array


      safeConfig[hook] = arrayify(safeConfig[hook] || []).concat(globalCallbacks, localCallback);
    });

    const onCloseCb = (...args) => {
      this.onClose(...args);
    };

    safeConfig['onClose'] = arrayify(safeConfig['onClose'] || []).concat(onCloseCb); // Set initial date without emitting any event

    safeConfig.defaultDate = this.modelValue || safeConfig.defaultDate; // Init flatpickr

    this.fp = new (external_flatpickr_default())(this.getElem(), safeConfig); // Attach blur event

    this.fpInput().addEventListener('blur', this.onBlur); // Immediate watch will fail before fp is set,
    // so need to start watching after mount

    this.$watch('disabled', this.watchDisabled, {
      immediate: true
    });
  },

  methods: {
    /**
     * Get the HTML node where flatpickr to be attached
     * Bind on parent element if wrap is true
     */
    getElem() {
      return this.config.wrap ? this.$refs.root.parentNode : this.$refs.root;
    },

    /**
     * Watch for value changed by date-picker itself and notify parent component
     *
     * @param event
     */
    onInput(event) {
      const input = event.target; // Lets wait for DOM to be updated

      (0,external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_.nextTick)().then(() => {
        this.$emit('update:modelValue', nullify(input.value));
      });
    },

    /**
     * @return HTMLElement
     */
    fpInput() {
      return this.fp.altInput || this.fp.input;
    },

    /**
     * Blur event is required by many validation libraries
     *
     * @param event
     */
    onBlur(event) {
      this.$emit('blur', nullify(event.target.value));
    },

    /**
     * Flatpickr does not emit input event in some cases
     */
    onClose(selectedDates, dateStr) {
      this.$emit('update:modelValue', dateStr);
    },

    /**
     * Watch for the disabled property and sets the value to the real input.
     *
     * @param newState
     */
    watchDisabled(newState) {
      if (newState) {
        this.fpInput().setAttribute('disabled', newState);
      } else {
        this.fpInput().removeAttribute('disabled');
      }
    }

  },
  watch: {
    /**
     * Watch for any config changes and redraw date-picker
     *
     * @param newConfig Object
     */
    config: {
      deep: true,

      handler(newConfig) {
        if (!this.fp) {
          return;
        }

        let safeConfig = cloneObject(newConfig); // Workaround: Don't pass hooks to configs again otherwise
        // previously registered hooks will stop working
        // Notice: we are looping through all events
        // This also means that new callbacks can not passed once component has been initialized

        allEvents.forEach(hook => {
          delete safeConfig[hook];
        });
        this.fp.set(safeConfig); // Workaround: Allow to change locale dynamically

        configCallbacks.forEach(name => {
          if (typeof safeConfig[name] !== 'undefined') {
            this.fp.set(name, safeConfig[name]);
          }
        });
      }

    },

    /**
     * Watch for changes from parent component and update DOM
     *
     * @param newValue
     */
    modelValue(newValue) {
      // Prevent updates if v-model value is same as input's current value
      if (newValue === nullify(this.$refs.root.value)) return; // Make sure we have a flatpickr instance

      this.fp && // Notify flatpickr instance that there is a change in value
      this.fp.setDate(newValue, true);
    }

  },

  /**
   * Free up memory
   */
  beforeUnmount() {
    /* istanbul ignore else */
    if (this.fp) {
      this.fpInput().removeEventListener('blur', this.onBlur);
      this.fp.destroy();
      this.fp = null;
    }
  }

});
;// CONCATENATED MODULE: ./src/index.js


const Plugin = (Vue, params) => {
  let name = 'flat-pickr';
  /* istanbul ignore else */

  if (typeof params === 'string') name = params;
  Vue.component(name, component);
};

component.install = Plugin;
/* harmony default export */ const src = (component);

})();

__webpack_exports__ = __webpack_exports__.default;
/******/ 	return __webpack_exports__;
/******/ })()
;
});