<template>
<div>
  <h2>Example 2 : Complex Config (use 'flatten' helper function)</h2>
  <pre v-pre>
// Js:
import colgroup from '../src/colgroup.vue'

new Vue({
  el: "#sample",
  data: {
    // flatten to ["81px", "82px", "83px", "84px"]
    // children can nested multiple level
    columns: <b>colgroup.flatten</b>([
      "81px",
      { width: "82px" },
      {
        children: [
          { width: "83px" },
          "84px"
        ]
      }
    ])
  },
  components: {
    "st-colgroup": colgroup
  }
})

// Html:
&lt;table id="#sample"&gt;
  &lt;colgroup <b>is="st-colgroup"</b> :columns="columns"&gt;&lt;/colgroup&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th v-for="width in columns"&gt;{{width}}&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
&lt;/table&gt;

// Expected result:
| 81px | 82px | 83px | 84px |

// Actual result:</pre>
  <table id="sample2" border="1">
    <colgroup is="st-colgroup" :columns="columns"></colgroup>
    <thead>
      <tr>
        <th v-for="(width, index) in columns" :key="index">{{width}}</th>
      </tr>
    </thead>
  </table>
</div>
</template>

<script>
import colgroup from "../src/colgroup.vue";
export default {
  data() {
    return {
      columns: colgroup.flatten([
        "81px",
        { width: "82px" },
        {
          children: [{ width: "83px" }, "84px"]
        }
      ])
    };
  },
  components: {
    "st-colgroup": colgroup
  }
};
</script>