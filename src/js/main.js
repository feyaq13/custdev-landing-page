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

$('.section-form__form').on('input', validate);
$('.section-form__button').on('click', checkedBeforeSubmit);

function validate(e) {
  const inputValue = e.target.value

  if (!inputValue
    || /\s+/.test(inputValue)
    || inputValue.startsWith(' ')) {

    e.target.classList.add("is-invalid");
    return false;
  }

  e.target.classList.remove("is-invalid")
  return true;
};

function checkedBeforeSubmit() {
  const inputs = $('.section-form__input')

  for (var i = 0; i < inputs.length; i++) {
    const input = inputs[i];

    if (input.checkValidity() === false) {
      inputs[i].classList.add("is-invalid");
    }

  }
};
