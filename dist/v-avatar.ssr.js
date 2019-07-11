'use strict';Object.defineProperty(exports,'__esModule',{value:true});//
//
//
//
//
//

var script = {
  name: "VAvatar",
  props: {
    username: {
      type: String
    },
    initials: {
      type: String
    },
    backgroundColor: {
      type: String
    },
    color: {
      type: String
    },
    customStyle: {
      type: Object
    },
    inline: {
      type: Boolean
    },
    size: {
      type: Number,
      default: 50
    },
    src: {
      type: String
    },
    rounded: {
      type: Boolean,
      default: true
    },
    lighten: {
      type: Number,
      default: 80
    }
  },

  data: function data() {
    return {
      backgroundColors: [
        "#F44336",
        "#FF4081",
        "#9C27B0",
        "#673AB7",
        "#3F51B5",
        "#2196F3",
        "#03A9F4",
        "#00BCD4",
        "#009688",
        "#4CAF50",
        "#8BC34A",
        "#CDDC39",
        /* '#FFEB3B' , */ "#FFC107",
        "#FF9800",
        "#FF5722",
        "#795548",
        "#9E9E9E",
        "#607D8B"
      ]
    };
  },

  mounted: function mounted() {
    if (!this.isImage) {
      this.$emit("avatar-initials", this.username, this.userInitial);
    }
  },

  computed: {
    background: function background() {
      if (!this.isImage) {
        return (
          this.backgroundColor ||
          this.randomBackgroundColor(
            this.username.length,
            this.backgroundColors
          )
        );
      }
    },

    fontColor: function fontColor() {
      if (!this.isImage) {
        return this.color || this.lightenColor(this.background, this.lighten);
      }
    },

    isImage: function isImage() {
      return Boolean(this.src);
    },

    style: function style() {
      var style = {
        display: this.inline ? "inline-flex" : "flex",
        width: ((this.size) + "px"),
        height: ((this.size) + "px"),
        borderRadius: this.rounded ? "50%" : 0,
        lineHeight: ((this.size + Math.floor(this.size / 20)) + "px"),
        fontWeight: "bold",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center"
      };

      var imgBackgroundAndFontStyle = {
        background: ("transparent url('" + (this.src) + "') no-repeat scroll 0% 0% / " + (this.size) + "px " + (this.size) + "px content-box border-box")
      };

      var initialBackgroundAndFontStyle = {
        backgroundColor: this.background,
        font: ((Math.floor(this.size / 2.5)) + "px/" + (this.size) + "px Helvetica, Arial, sans-serif"),
        color: this.fontColor
      };

      var backgroundAndFontStyle = this.isImage
        ? imgBackgroundAndFontStyle
        : initialBackgroundAndFontStyle;

      Object.assign(style, backgroundAndFontStyle);

      return style;
    },

    userInitial: function userInitial() {
      if (!this.isImage) {
        var initials = this.initials || this.initial(this.username);
        return initials;
      }
      return "";
    }
  },

  methods: {
    initial: function initial(username) {
      var parts = username.split(/[ -]/);
      var initials = "";

      for (var i = 0; i < parts.length; i++) {
        initials += parts[i].charAt(0);
      }

      if (initials.length > 3 && initials.search(/[A-Z]/) !== -1) {
        initials = initials.replace(/[a-z]+/g, "");
      }

      initials = initials.substr(0, 3).toUpperCase();

      return initials;
    },

    randomBackgroundColor: function randomBackgroundColor(seed, colors) {
      return colors[seed % colors.length];
    },

    lightenColor: function lightenColor(hex, amt) {
      // From https://css-tricks.com/snippets/javascript/lighten-darken-color/
      var usePound = false;

      if (hex[0] === "#") {
        hex = hex.slice(1);
        usePound = true;
      }

      var num = parseInt(hex, 16);
      var r = (num >> 16) + amt;

      if (r > 255) { r = 255; }
      else if (r < 0) { r = 0; }

      var b = ((num >> 8) & 0x00ff) + amt;

      if (b > 255) { b = 255; }
      else if (b < 0) { b = 0; }

      var g = (num & 0x0000ff) + amt;

      if (g > 255) { g = 255; }
      else if (g < 0) { g = 0; }

      return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
    }
  }
};function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  var options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  var hook;

  if (moduleIdentifier) {
    // server build
    hook = function hook(context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function () {
      style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      var originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

var normalizeComponent_1 = normalizeComponent;/* script */
var __vue_script__ = script;

/* template */
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vue-avatar--wrapper",style:([_vm.style, _vm.customStyle]),attrs:{"aria-hidden":"true"}},[_vm._ssrNode("<span"+(_vm._ssrStyle(null,null, { display: (!this.isImage) ? '' : 'none' }))+">"+_vm._ssrEscape(_vm._s(_vm.userInitial))+"</span>")])};
var __vue_staticRenderFns__ = [];

  /* style */
  var __vue_inject_styles__ = undefined;
  /* scoped */
  var __vue_scope_id__ = undefined;
  /* module identifier */
  var __vue_module_identifier__ = "data-v-369cfb7c";
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var component = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );// Import vue component

// install function executed by Vue.use()
function install(Vue) {
  if (install.installed) { return; }
  install.installed = true;
  Vue.component('VAvatar', component);
}

// Create module definition for Vue.use()
var plugin = {
  install: install,
};

// To auto-install when vue is found
/* global window global */
var GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

// Inject install function into component - allows component
// to be registered via Vue.use() as well as Vue.component()
component.install = install;

// It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = component;
exports.default=component;