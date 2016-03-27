var t = require('tcomb')

module.exports = Range

function refineRange (min, max) {
  var Range = t.refinement(
    t.Number,
    function (n) { return n >= min && n <= max },
    'Range between ' + min + ' and ' + max + ' (exclusive)'
  )

  Range.view = function viewRange (options) {
    var h = options.h
    var update = options.update

    return h('input', {
      type: 'range',
      min,
      max,
      oninput: function (evt) {
        update({ $set: Number(evt.target.value) })
      }
    })
  }

  return Range
}
