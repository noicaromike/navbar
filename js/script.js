/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/* Menu show */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
    navToggle.classList.add("hidden"); // hide toggle icon
    navClose.classList.add("visible"); // show close icon
  });
}

/* Menu hidden */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
    navToggle.classList.remove("hidden"); // show toggle icon
    navClose.classList.remove("visible"); // hide close icon
  });
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav-link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
  navToggle.classList.remove("hidden"); // show hamburger
  navClose.classList.remove("visible"); // hide close icon
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== DARK/LIGHT MODE TOGGLE ===============*/
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Load previously saved theme
if (localStorage.getItem("theme") === "dark") {
  body.setAttribute("data-theme", "dark");
  themeToggle.checked = true;
}

themeToggle.addEventListener("change", () => {
  if (themeToggle.checked) {
    body.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    body.removeAttribute("data-theme");
    localStorage.setItem("theme", "light");
  }
});
