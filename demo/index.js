import hello from '../src/colgroup.vue'

window.onload = function () {
  Vue.component('st-colgroup', hello)

  new Vue({
    el: "#demo",
    data: {
      columns1: ["50px", "100px", "150px"],
      columns2: [
        { width: "50px" },
        { width: "100px" },
        { width: "150px" }
      ],
      columns3: [
        "50px",
        { width: "100px" },
        {
          children: [
            { width: "150px" },
            "50px"
          ]
        }
      ]
    }
  })
}