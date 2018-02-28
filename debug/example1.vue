<template>
<div class="block example">
  <h2>Example 1 : Base Config (config column width by string array)</h2>
  <table class="template" border="1">
    <colgroup is="st-colgroup" :columns="columns"></colgroup>
    <thead>
      <tr>
        <th v-for="(width, index) in columns" :key="index">{{width}}</th>
      </tr>
    </thead>
  </table>
  <pre v-pre>
// Expected result:
| 100px | 10em | 200px |

// Html:
&lt;table id="#sample"&gt;
  &lt;colgroup <b>is="st-colgroup"</b> :columns="columns"&gt;&lt;/colgroup&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th v-for="width in columns"&gt;{{width}}&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
&lt;/table&gt;

// Js:
import colgroup from '../src/colgroup.vue'

new Vue({
  el: "#sample",
  data: {
    columns: ["100px", "10em", "200px"]
  },
  components: {
    "st-colgroup": colgroup
  }
})</pre>
</div>
</template>

<script>
import colgroup from "../src/colgroup.vue";
export default {
  data() {
    return {
      columns: ["100px", "10em", "200px"]
    };
  },
  components: {
    "st-colgroup": colgroup
  }
};
</script>