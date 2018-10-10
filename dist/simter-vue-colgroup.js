/*!
* simter-vue-colgroup v0.3.0
* @author RJ.Hwang <rongjihuang@gmail.com>
* @license MIT
*/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global['simter-vue-colgroup'] = {})));
}(this, (function (exports) { 'use strict';

  //
  //
  //
  //
  //
  //

  const component = {
    replace: true,
    props: {
      // The column's 'width' config array, like ['20px', '40px', ...]
      columns: { type: Array, required: true }
    },
    computed: {
      /**
       * The result of function call flatten(this.columns).
       */
      widthArray() {
        return flatten(this.columns);
      }
    }
  };

  /**
   * Flatten complex object array to simple string array.
   *
   * Just deal with object's 'width' and 'children' key.
   *
   * Example :
   * 1. ['20px', '40px', ...] flatten to ['20px', '40px', ...]
   * 2. [{width: '20px'}, {width: '40px'}, ...] flatten to ['20px', '40px', ...]
   * 3. [{width: '20px'}, {children: [{width: '40px'}, {width: '60px'}]}, ...]
   *    flatten to ['20px', '40px', '60px', ...]
   */
  const flatten = columns =>
    columns
      .reduce(
        (a, b) => a.concat(b.children ? flatten(b.children) : b.width || b),
        []
      )
      .map(a => (typeof a === "object" ? a.width : a));

  /* script */
              const __vue_script__ = component;
              
  /* template */
  var __vue_render__ = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "colgroup",
      _vm._l(_vm.widthArray, function(width, index) {
        return _c("col", { key: index, style: { width: width } })
      })
    )
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

    /* style */
    const __vue_inject_styles__ = undefined;
    /* scoped */
    const __vue_scope_id__ = undefined;
    /* module identifier */
    const __vue_module_identifier__ = undefined;
    /* functional template */
    const __vue_is_functional_template__ = false;
    /* component normalizer */
    function __vue_normalize__(
      template, style, script,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      const component$$1 = (typeof script === 'function' ? script.options : script) || {};

      // For security concerns, we use only base name in production mode.
      component$$1.__file = "D:\\work\\github-simter\\simter-vue\\simter-vue-colgroup\\src\\colgroup.vue";

      if (!component$$1.render) {
        component$$1.render = template.render;
        component$$1.staticRenderFns = template.staticRenderFns;
        component$$1._compiled = true;

        if (functional) component$$1.functional = true;
      }

      component$$1._scopeId = scope;

      return component$$1
    }
    /* style inject */
    
    /* style inject SSR */
    

    
    var colgroup = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  exports.default = colgroup;
  exports.flatten = flatten;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
