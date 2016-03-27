var t = require('tcomb')

module.exports = refineNumberInRange

function refineNumberInRange (options) {
  var min = options.min || 0
  var max = options.max || 100
  var step = options.step || 1

  var NumberInRange = t.refinement(
    t.Number,
    function (n) { return n >= min && n <= max },
    'NumberInRange between ' + min + ' and ' + max + ' (exclusive)'
  )

  NumberInRange.view = function viewRange (options) {
    var h = options.h

    return function (props) {
      var onUpdate = props.onUpdate
      var value = props.value || (min + (max - min) / 2)

      return h('input', {
        type: 'range',
        value: value,
        min: min, max: max, step: step,
        oninput: onInput
      })

      function onInput (evt) {
        onUpdate(Number(evt.target.value))
      }
    }
  }

  return NumberInRange
}
