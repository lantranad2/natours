const navIcons = document.querySelector(".nav__icons");
const nav = document.querySelector(".nav");

navIcons.addEventListener("click", function () {
  nav.classList.toggle("nav--expanded");
});
