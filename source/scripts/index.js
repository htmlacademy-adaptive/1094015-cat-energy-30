document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('toggle').addEventListener('click', () => {
    document.querySelector('.header').classList.toggle('open');
  });
});

// Закрыть меню при нажатии на Esc
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelector('.header').classList.remove('open');
  }
});

// Закрыть меню при клике вне его
document.getElementById('nav').addEventListener('click', (event) => {
  event._isClickWithInMenu = true;
});
document.getElementById('toggle').addEventListener('click', (event) => {
  event._isClickWithInMenu = true;
});
document.body.addEventListener('click', (event) => {
  if (event._isClickWithInMenu) {
    document.querySelector('.header').classList.remove('open');
  }
});
