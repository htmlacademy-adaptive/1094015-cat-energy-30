const navHeader = document.querySelector('.header');
const navToggle = document.querySelector('.header__toggle');
const nav = document.querySelector('.nav');

navToggle.classList.remove('header__toggle--nojs');
nav.classList.remove('nav--nojs');

navToggle.addEventListener('click', () => {
  navHeader.classList.toggle('open');
});
