const burger = document.querySelector(".burger-menu");
const menu = document.querySelector(".menu");

burger.onclick = () => {
  menu.classList.toggle("show");
}