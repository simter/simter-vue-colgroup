<template>
  <colgroup>
    <col v-for="c in columns" :style="{width:c.width || c}">
  </colgroup>
</template>

<script>
export default {
  replace: true,
  props: {
    columns: { type: Array, required: true }
  }
};
</script>