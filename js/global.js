const loaderContainer = document.getElementById("loader-container");

setTimeout(() => {
  loaderContainer.style.display = "none";
}, 1000);
// loader end
const modeButton = document.querySelectorAll(".toggle-checkbox");
const readMoreButts = document.querySelectorAll(".dark-buttons");
const body = document.querySelector("body");
const header = document.querySelector("header");
const nav = document.querySelector("nav");
const texts = document.querySelectorAll("p");
const headers2 = document.querySelectorAll("h2");
const navBarLinks = document.querySelectorAll(".nav-link");
const sidebarButt = document.querySelector(".toggle");
const checkBox = document.querySelector("#checkbox");
const sidebar = document.querySelector("#sidebar");
const columnNav = document.querySelector("#column-nav");
const sideA = document.querySelectorAll(".side-a");

const darkHandler = () => {
  body.classList.toggle("darkBack");
  sidebar.classList.toggle("darkBack");
  texts.forEach((p) => p.classList.toggle("darkText"));
  headers2.forEach((h2) => h2.classList.toggle("darkText"));
  readMoreButts.forEach((but) => but.classList.toggle("darkButt"));
  sideA.forEach((a) => a.classList.toggle("sidecolor"));
};
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});
console.log(sidebar);

const sidebarHandler = () => {
  sidebar.classList.toggle("flexDisp");
  columnNav.classList.toggle("flexDisp");
};

const sidebutt = () => {
  sidebarHandler();
  checkBox.checked = false;
};

columnNav.addEventListener("click", sidebutt);
sidebarButt.addEventListener("click", sidebarHandler);
modeButton.forEach((but) => {
  but.addEventListener("click", darkHandler);
});
