window.onload = function () {
  Vue.component("st-colgroup", window["simter-vue-colgroup"]);

  new Vue({
    el: "#demo1",
    data: {
      columns: ["50px", "100px", "150px"]
    }
  });

  new Vue({
    el: "#demo2",
    data: {
      columns: [
        { width: "50px" },
        { width: "100px" },
        { width: "150px" }
      ]
    }
  });

  new Vue({
    el: "#demo3",
    data: {
      columns: [
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
  });
};