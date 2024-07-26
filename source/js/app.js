const navButton = document.querySelector('.nav__button');
const navListClass = document.querySelector('.nav__list').classList;

navButton.addEventListener('click', () => {
  navButton.classList.toggle('nav__button--active');
  navListClass.toggle('nav__list--active');
});
