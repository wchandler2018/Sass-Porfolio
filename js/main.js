//Select DOM items
const menuBTN = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

//Initial State of Menu
let showMenu = false;

menuBTN.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBTN.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));

    //menu state
    showMenu = true;
  } else {
    menuBTN.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(item => item.classList.add("show"));

    //menu state
    showMenu = false;
  }
}
