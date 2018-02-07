<template>
  <colgroup>
    <col v-for="w in flattenColumns" :style="{width:w}">
  </colgroup>
</template>

<script>
  function flatten(arr) {
    return arr.reduce((a, b) => {
      return a.concat(b.children ? flatten(b.children) : b.width || b)
    }, []).map(a => a.width || a)
  }

  export default {
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
</script>