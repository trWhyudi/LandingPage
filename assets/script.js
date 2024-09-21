// MENU BAR
const menuNav = document.querySelector(".menu-navigation");
const menuBar = document.querySelector(".menu-bar");

menuBar.addEventListener('click', function(){
    menuNav.classList.toggle("menu-active");
})


// FIXED MENU
const navbar = document.querySelector(".navigation");

function ubahTampilanNavbar() {
    if (window.scrollY > 50) {
        navbar.classList.remove("navigation-transparent");
        navbar.classList.add("navigation-solid");
    } else {
        navbar.classList.add("navigation-transparent");
        navbar.classList.remove("navigation-solid");
    }
}

document.addEventListener("DOMContentLoaded", function() {
    ubahTampilanNavbar();
});

window.addEventListener("scroll", ubahTampilanNavbar);