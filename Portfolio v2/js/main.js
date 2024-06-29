// MOBILE MENU
const hamMenu = document.querySelector(".hamburger-button");
const offScreenMenu = document.querySelector(".mobile-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});
