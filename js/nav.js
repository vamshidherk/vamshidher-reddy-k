const navToggle = document.querySelector(".menu-button");
const nav = document.querySelector("nav");
const containerAll = document.querySelector(".container-all");
let containerStyle = containerAll.style.transition;
const bodyClasses = document.body.classList;

navToggle.addEventListener("click", (_) => {
  containerStyle = "transform 250ms ease-out";
  bodyClasses.toggle("nav-is-open");
});

nav.addEventListener("click", (_) => {
  containerStyle = "0ms";
  bodyClasses.remove("nav-is-open");
});
