var vdom = require('virtual-dom')
var h = require('virtual-dom/h')
var loop = require('virtual-raf')
var view = require('tcomb-view')
var refineNumberInRange = require('../')

var NumberInRange = refineNumberInRange({
  min: 0, max: 100, step: 0.1
})

var tree
var props = {
  type: NumberInRange,
  value: null,
  onUpdate: function (value) {
    console.log('value', value)
    tree.update(
      Object.assign({}, props, { value: value })
    )
  }
}
tree = loop(props, view(h), vdom)

document.querySelector('main').appendChild(tree.render())
