import test from 'ava'
import Vue from 'vue'
import colgroup from '../src/colgroup.vue'

function createComponentInstance(propsData) {
  const Constructor = Vue.extend(colgroup)
  const vm = new Constructor({ propsData: propsData }).$mount()
  return vm
}

test('no nested 1', t => {
  const columns = ["1px", "2em"]
  const vm = createComponentInstance({ columns })

  // verify container tag
  t.is(vm.$el.tagName, "COLGROUP")

  // verify col tags
  const cols = vm.$el.children;
  t.is(cols.length, columns.length)
  for (let i = 0; i < cols.length; i++) {
    t.is(cols[i].tagName, "COL")
    t.is(cols[i].style.width, columns[i])
  }
})

test('no nested 2', t => {
  const columns = ["1px", { width: "2px" }]
  const vm = createComponentInstance({ columns })

  // verify container tag
  t.is(vm.$el.tagName, "COLGROUP")

  // verify col tags
  const cols = vm.$el.children;
  t.is(cols.length, columns.length)
  for (const col of cols) t.is(col.tagName, "COL")
  t.is(cols[0].style.width, columns[0])
  t.is(cols[1].style.width, columns[1].width)
})

test('nested 1-1', t => {
  const columns = ["1px", { children: ["11px", "12px"] }]
  const vm = createComponentInstance({ columns })

  // verify container tag
  t.is(vm.$el.tagName, "COLGROUP")

  // verify col tags
  const cols = vm.$el.children;
  t.is(cols.length, 3)
  for (const col of cols) t.is(col.tagName, "COL")
  t.is(cols[0].style.width, columns[0])
  t.is(cols[1].style.width, columns[1].children[0])
  t.is(cols[2].style.width, columns[1].children[1])
})

test('nested 1-2', t => {
  const columns = [{ width: "1px" }, { children: [{ width: "11px" }, { width: "12px" }] }]
  const vm = createComponentInstance({ columns })

  // verify container tag
  t.is(vm.$el.tagName, "COLGROUP")

  // verify col tags
  const cols = vm.$el.children;
  t.is(cols.length, 3)
  for (const col of cols) t.is(col.tagName, "COL")
  t.is(cols[0].style.width, columns[0].width)
  t.is(cols[1].style.width, columns[1].children[0].width)
  t.is(cols[2].style.width, columns[1].children[1].width)
})

test('nested 1-3', t => {
  const columns = [
    { width: "1px" }, 
    { children: [{ width: "21px" }, { width: "22px" }] },
    { children: [{ width: "31px" }, { width: "32px" }] }
  ]
  const vm = createComponentInstance({ columns })

  // verify container tag
  t.is(vm.$el.tagName, "COLGROUP")

  // verify col tags
  const cols = vm.$el.children;
  t.is(cols.length, 5)
  for (const col of cols) t.is(col.tagName, "COL")
  t.is(cols[0].style.width, columns[0].width)
  t.is(cols[1].style.width, columns[1].children[0].width)
  t.is(cols[2].style.width, columns[1].children[1].width)
  t.is(cols[3].style.width, columns[2].children[0].width)
  t.is(cols[4].style.width, columns[2].children[1].width)
})

test('nested 2', t => {
  const columns = [
    "1px",
    {
      children: [
        { width: "11px" },
        {
          children: [
            { width: "111px" },
            { width: "112px" }
          ]
        }
      ]
    }
  ]
  const vm = createComponentInstance({ columns })

  // verify container tag
  t.is(vm.$el.tagName, "COLGROUP")

  // verify col tags
  const cols = vm.$el.children;
  t.is(cols.length, 4)
  for (const col of cols) t.is(col.tagName, "COL")
  t.is(cols[0].style.width, columns[0])
  t.is(cols[1].style.width, columns[1].children[0].width)
  t.is(cols[2].style.width, columns[1].children[1].children[0].width)
  t.is(cols[3].style.width, columns[1].children[1].children[1].width)
})