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

export default colgroup;
