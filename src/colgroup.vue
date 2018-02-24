<template>
  <colgroup>
    <col v-for="(width, index) in columns" :style="{width: width}" :key="index">
  </colgroup>
</template>

<script>
/**
 * Flatten complex object array to simple string array.
 * 
 * Just deal with object's 'width' and 'children' key.
 * 
 * Example :
 * 1. [{width: '20px'}, {width: '40px'}, ...] flatten to ['20px', '40px', ...]
 * 2. [{width: '20px'}, {children: [{width: '40px'}, {width: '60px'}]}, ...] 
 *    flatten to ['20px', '40px', '60px', ...]
 */
function flatten(columns) {
  return columns
    .reduce((a, b) => {
      return a.concat(b.children ? flatten(b.children) : b.width || b);
    }, [])
    .map(a => a.width || a);
}

export default {
  replace: true,
  props: {
    // The column's 'width' config array, like ['20px', '40px', ...]
    columns: { type: Array, required: true }
  },
  flatten: flatten // helper function
};
</script>