var vdom = require('virtual-dom')
var h = require('virtual-dom/h')
var loop = require('virtual-raf')
var View = require('tcomb-view')
var refineNumberInRange = require('../')

var NumberInRange = refineNumberInRange({
  min: 0, max: 100, step: 0.1
})

var view = View({ type: NumberInRange, h: h })

var tree
var props = {
  value: null,
  onUpdate: function (value) {
    console.log('value', value)
    tree.update(
      Object.assign({}, props, { value: value })
    )
  }
}
tree = loop(props, view, vdom)

document.querySelector('main').appendChild(tree.render())
