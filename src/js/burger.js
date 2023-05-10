const burger = document.querySelector('.header__menu');
const menu = document.querySelector('.header__nav');
const body = document.body

// if (burger & menu) {
  
// }
burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  menu.classList.toggle('active');
  body.classList.toggle('_lock');
})