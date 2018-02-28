<template>
<div class="block example">
  <h2>Example 2 : Nested by children</h2>
  <table class="template" id="sample2" border="1">
    <colgroup is="st-colgroup" :columns="columns"></colgroup>
    <thead>
      <tr>
        <th>50px</th>
        <th>80px</th>
        <th>100px</th>
        <th>60px</th>
      </tr>
    </thead>
  </table>
  <pre v-pre>
// Expected result:
| 50px | 80px | 100px | 60px |

// Html:
&lt;table id="#sample"&gt;
  &lt;colgroup <b>is="st-colgroup"</b> :columns="columns"&gt;&lt;/colgroup&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th&gt;50px&lt;/th&gt;
      &lt;th&gt;80px&lt;/th&gt;
      &lt;th&gt;100px&lt;/th&gt;
      &lt;th&gt;60px&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
&lt;/table&gt;

// Js:
import colgroup from '../src/colgroup.vue'

new Vue({
  el: "#sample",
  data: {
    // auto flatten to ["50px", "80px", "100px", "60px"]
    // children can nested multiple level
    columns: [
      "50px",
      { width: "80px" },
      {
        children: [{ width: "100px" }, "60px"]
      }
    ]
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
      columns: [
        "50px",
        { width: "80px" },
        {
          children: [{ width: "100px" }, "60px"]
        }
      ]
    };
  },
  components: {
    "st-colgroup": colgroup
  }
};
</script>