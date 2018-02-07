import hello from '../src/colgroup.vue'

window.onload = function () {
  Vue.component('st-colgroup', hello)

  new Vue({
    el: "#demo",
    data: {
      columns1: ["50px", "100px", "150px"],
      columns2: [
        { label: "Column1", width: "50px" },
        { label: "Column2", width: "100px" },
        { label: "Column3", width: "150px" }
      ]
    }
  })
}