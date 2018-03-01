<template>
<div class="block example">
  <h2>Example 2 : Nested by children</h2>
  <table class="template" id="sample2" border="1">
    <colgroup is="st-colgroup" :columns="columns"></colgroup>
    <thead>
      <tr>
        <th>60px</th>
        <th>4em</th>
        <th>61px</th>
        <th>62px</th>
      </tr>
    </thead>
  </table>
  <pre v-pre>
// Expected result:
| 60px | 4em | 61px | 62px |

// Html:
&lt;table id="#sample"&gt;
  &lt;colgroup <b>is="st-colgroup"</b> :columns="columns"&gt;&lt;/colgroup&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th&gt;60px&lt;/th&gt;
      &lt;th&gt;4em&lt;/th&gt;
      &lt;th&gt;61px&lt;/th&gt;
      &lt;th&gt;62px&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
&lt;/table&gt;

// Js:
import colgroup from '../src/colgroup.vue'

new Vue({
  el: "#sample",
  data: {
    // auto flatten to ["60px", "4em", "61px", "62px"]
    // children can nested multiple level
    columns: [
      "60px",
      { width: "4em" },
      {
        children: [{ width: "61px" }, "62px"]
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
        "60px",
        { width: "4em" },
        {
          children: [{ width: "61px" }, "62px"]
        }
      ]
    };
  },
  components: {
    "st-colgroup": colgroup
  }
};
</script>