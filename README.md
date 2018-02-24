# simter-vue-colgroup component

Define table's columns width by a string array. Such as `columns = ["100px", "10em", "200px"]`.

## Develop

```
yarn install  // or npm install
npm run dev
```

Use [parcel] to run the development debug.

## Build

```
npm run build
```

Use [rollup] package the component to `dist` directory.

## Usage

### Example 1 : Base Config (config column width by string array)

Js:

```js
import colgroup from 'simter-vue-colgroup'

new Vue({
  el: "#sample",
  data: {
    columns: ["100px", "10em", "200px"]
  },
  components: {
    "st-colgroup": colgroup
  }
})
```

Html template:

```html
<table id="#sample">
  <colgroup is="st-colgroup" :columns="columns"></colgroup>
  ...
</table>
```

Generated html:

```html
<table>
  <colgroup>
    <colg style="width: 100px">
    <colg style="width: 10em">
    <colg style="width: 200px">
  </colgroup>
  ...
</table>
```

### Example 2 : Flatten Complex Config

Js:

```js
import colgroup from 'simter-vue-colgroup'

new Vue({
  el: "#sample",
  data: {
    // flatten to ["81px", "82px", "83px", "84px"].
    // children can nested multiple level.
    // only deal with object's 'width' and 'children' key.
    columns: colgroup.flatten([
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
```

Html template:

```html
<table id="#sample">
  <colgroup is="st-colgroup" :columns="columns"></colgroup>
  ...
</table>
```

Generated html:

```html
<table>
  <colgroup>
    <colg style="width: 81px">
    <colg style="width: 82px">
    <colg style="width: 83px">
    <colg style="width: 84px">
  </colgroup>
  ...
</table>
```

[rollup]: https://rollupjs.org
[parcel]: https://parceljs.org
[yarn]: https://yarnpkg.com