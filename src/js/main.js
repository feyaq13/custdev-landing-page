const $ = require('jquery')

if (window.matchMedia('max-width: 768px')) {
  init()
}

function init () {
  $('.city:first-child').click(showFullNavigation)
}

function showFullNavigation (e) {
  if (e.target == $('.city')[0]) {
    $('.city:not(:first-child)').toggle(500)
  }
}
