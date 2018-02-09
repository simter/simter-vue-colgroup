(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global['simter-vue-colgroup'] = factory());
}(this, (function () { 'use strict';

function flatten(arr) {
  return arr.reduce((a, b) => {
    return a.concat(b.children ? flatten(b.children) : b.width || b)
  }, []).map(a => a.width || a)
}

var colgroup = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('colgroup',_vm._l((_vm.flattenColumns),function(w){return _c('col',{style:({width:w})})}))},staticRenderFns: [],
  replace: true,
  props: {
    columns: { type: Array, required: true }
  },
  computed: {
    flattenColumns: function(){
      return flatten(this.columns)
    }
  }
};

return colgroup;

})));
