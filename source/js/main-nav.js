const mainNavToggle = document.querySelector(".main-nav__toggle");
const mainNav = document.querySelector(".main-nav");

mainNavToggle.addEventListener("click", function (evt) {
  if (mainNav.classList.contains('main-nav--close')) {
    mainNav.classList.remove('main-nav--close');
    mainNav.classList.add('main-nav--open');
  } else {
    mainNav.classList.add('main-nav--close');
    mainNav.classList.remove('main-nav--open');
  }
});
