const $ = require('jquery')

$(window).on('load resize', function () {
  if (window.matchMedia('(max-width: 968px)').matches) {
    document.querySelector('.city:first-child').addEventListener('click', showFullNavigation)
  } else if (window.matchMedia('(min-width: 969px)').matches) {
    document.querySelector('.city:first-child').removeEventListener('click', showFullNavigation)
  }

  document.querySelector('.city:nth-child(2)').style.display = ''
  document.querySelector('.city:nth-child(3)').style.display = ''
})

function showFullNavigation (e) {
  $('.city:not(:first-child)').toggle(500)
}
