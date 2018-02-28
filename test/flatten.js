import test from 'ava'
import { flatten } from '../src/colgroup.vue'

test('should be a function', t => {
  t.is(typeof flatten, "function")
})

test('no nested 1', t => {
  const columns = ["1px", "2px"]
  const result = flatten(columns)
  t.deepEqual(result, columns)
})

test('no nested 2', t => {
  const columns = ["1px", { width: "2px" }]
  const result = flatten(columns)
  t.deepEqual(result, ["1px", "2px"])
})

test('nested 1-1', t => {
  const columns = ["1px", { children: ["11px", "12px"] }]
  const result = flatten(columns)
  t.deepEqual(result, ["1px", "11px", "12px"])
})

test('nested 1-2', t => {
  const columns = [{ width: "1px" }, { children: [{ width: "11px" }, { width: "12px" }] }]
  const result = flatten(columns)
  t.deepEqual(result, ["1px", "11px", "12px"])
})

test('nested 1-3', t => {
  const columns = [
    { width: "1px" }, 
    { children: [{ width: "21px" }, { width: "22px" }] },
    { children: [{ width: "31px" }, { width: "32px" }] }
  ]
  const result = flatten(columns)
  t.deepEqual(result, ["1px", "21px", "22px", "31px", "32px"])
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
  const result = flatten(columns)
  t.deepEqual(result, ["1px", "11px", "111px", "112px"])
})