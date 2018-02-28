import test from 'ava'
import Vue from 'vue'
import colgroup from '../src/colgroup.vue'

function createComponentInstance(propsData) {
  const Constructor = Vue.extend(colgroup)
  const vm = new Constructor({ propsData: propsData }).$mount()
  return vm
}

test('should render colgroup tag correctly', t => {
  const columns = ["10px", "10em"]

  const vm = createComponentInstance({ columns })
  t.is(vm.$el.tagName, "COLGROUP")

  const cols = vm.$el.querySelectorAll("col");
  t.is(cols.length, columns.length)
  for (let i = 0; i < cols.length; i++) t.is(cols[i].style.width, columns[i])
})

// bellow is to test flatten helper function

test('should has flatten helper function', t => {
  t.is(typeof colgroup.flatten, "function")
})

test('should flatten width key correctly', t => {
  const actual = colgroup.flatten([{ width: "10px" }])
  t.is(actual.length, 1)
  t.is(actual[0], "10px")
})

test('should flatten children correctly', t => {
  const actual = colgroup.flatten([
    { children: [{ width: "10px" }, "20px"] }
  ])
  t.deepEqual(actual, ["10px", "20px"])
})

test('should flatten complex array correctly', t => {
  const actual = colgroup.flatten([
    "10px",
    { width: "20px" },
    {
      children: [
        { width: "30px" },
        {
          children: [
            { width: "40px" },
            "50px"
          ]
        }
      ]
    }
  ])
  t.deepEqual(actual, ["10px", "20px", "30px", "40px", "50px"])
})