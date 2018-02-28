/*!
* simter-vue-colgroup v0.2.4
* @author RJ.Hwang <rongjihuang@gmail.com>
* @license MIT
*/
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global['simter-vue-colgroup'] = {})));
}(this, (function (exports) { 'use strict';

const component = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('colgroup',_vm._l((_vm.widthArray),function(width,index){return _c('col',{key:index,style:({width: width})})}))},staticRenderFns: [],
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
function flatten(columns) {
  return columns
    .reduce((a, b) => {
      return a.concat(b.children ? flatten(b.children) : b.width || b);
    }, [])
    .map(a => a.width || a);
}

exports.flatten = flatten;
exports.default = component;

Object.defineProperty(exports, '__esModule', { value: true });

})));
