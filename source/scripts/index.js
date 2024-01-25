const navHeader = document.querySelector('header');
const navToggle = document.querySelector('header__toggle');

navHeader.classList.remove('header__toggle--nojs');
navToggle.classList.remove('nav--nojs');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('header__toggle--close');
  navToggle.classList.toggle('toggle__toggle--open');
  navToggle.classList.toggle('open');
  navToggle.classList.toggle('close');
});
