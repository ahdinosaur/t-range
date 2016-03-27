var View = require('tcomb-view')
var yo = require('yo-yo')
var refineNumberInRange = require('../')

var NumberInRange = refineNumberInRange({
  min: 0, max: 100, step: 0.1
})

var view = View({
  type: NumberInRange,
  h: yo.createElement
})

var main = document.querySelector('main')

updateView(main, NumberInRange(50))

function updateView (element, value) {
  console.log('update', value)

  yo.update(element, view({
    value: value,
    onUpdate: updateView.bind(null, element)
  }))
}
