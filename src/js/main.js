const $ = require('jquery');
const Picturefill = require('picturefill');

document.createElement('picture');

$(window).on('load resize', function () {
  if (window.matchMedia('(max-width: 968px)').matches) {
    document.querySelector('.header__cities-list .city:first-child').addEventListener('click', showFullNavigation);
  } else if (window.matchMedia('(min-width: 969px)').matches) {
    document.querySelector('.header__cities-list .city:first-child').removeEventListener('click', showFullNavigation);
  }

  document.querySelector('.header__cities-list .city:nth-child(2)').style.display = '';
  document.querySelector('.header__cities-list .city:nth-child(3)').style.display = '';
});

function showFullNavigation (e) {
  $('.header__cities-list .city:not(:first-child)').toggle(500);
}

$('.nav-grouping__icon-menu').on('click', showNavigationListItems);
$('.section-form__form').on('input sumbit', validate);
$('.section-form__button').on('click', checkedBeforeSubmit);

$(function () {
  $(document).on('click', 'a.jquery-jump', function (event) {
    const listItem = $(this).attr('href');
    const top = $(listItem).offset().top;
    const scrollTopAnimationDurationMs = 1000;
    event.preventDefault();

    $('body,html').animate(
      { scrollTop: top },
      scrollTopAnimationDurationMs
    );
  });
});

function showNavigationListItems () {
  const listItems = $('.list-item');
  listItems.slideToggle(500);

  Array.from(document.querySelector('.list-item')).forEach(function (item) {
    item.style.display = '';
  });
}

function validate (e) {
  const inputValue = e.target.value;
  const inputs = Array.from($('.section-form__input'));

  if (!inputValue ||
    /\s+/.test(inputValue) ||
    inputValue.startsWith(' ')) {
    e.target.classList.add('is-invalid');

    if (inputs.some(isValid)) {
      ($('.section-form__button')[0]).disabled = true;
    }
  } else {
    e.target.classList.remove('is-invalid');

    if (!inputs.some(isValid)) {
      ($('.section-form__button')[0]).disabled = false;
    }
  }
}

function isValid (input) {
  return $(input).hasClass('is-invalid');
}

function checkedBeforeSubmit () {
  const inputs = $('.section-form__input');

  for (var i = 0; i < inputs.length; i++) {
    const input = inputs[i];

    if (input.checkValidity() === false) {
      inputs[i].classList.add('is-invalid');
    }
  }
}
