var t = require('tcomb')
var defined = require('defined')

module.exports = refineNumberInRange

function refineNumberInRange (options) {
  var min = defined(options.min, 0)
  var max = defined(options.max, 100)
  var step = defined(options.step, 1)

  var NumberInRange = t.refinement(
    t.Number,
    function (n) { return n >= min && n <= max },
    'NumberInRange between ' + min + ' and ' + max + ' (exclusive)'
  )

  NumberInRange.view = function viewRange (h, props) {
    var value = defined(props.value, min + (max - min) / 2)

    return h('div', {
      className: 'inputs'
    }, [
      h('input', {
        className: 'number',
        type: 'number',
        value: value,
        min: min, max: max, step: step,
        onchange: onUpdate
      }),
      h('input', {
        className: 'range',
        type: 'range',
        value: value,
        min: min, max: max, step: step,
        oninput: onUpdate
      })
    ])

    function onUpdate (evt) {
      props.onUpdate(Number(evt.target.value))
    }
  }

  return NumberInRange
}
