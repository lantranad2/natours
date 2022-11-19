const navIcons = document.querySelector(".nav__icons");
const nav = document.querySelector(".nav");
const toursItemBtns = document.querySelectorAll(".tours__item-btn");
const popup = document.querySelector(".popup");
const popupClose = document.querySelector(".popup__close");

navIcons.addEventListener("click", function () {
  nav.classList.toggle("nav--expanded");
});

toursItemBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    popup.classList.add("popup--open");
  });
});

popupClose.addEventListener("click", function () {
  popup.classList.remove("popup--open");
});
