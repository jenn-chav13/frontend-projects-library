const hamburgerMenu = document.getElementById("hamburger-menu");
const hamburgerMenuItems = document.getElementById("menu-items");


const unfoldMenu = () => {
    hamburgerMenuItems.classList.toggle("open-menu");
}

hamburgerMenu.addEventListener('click', (e) => {
    unfoldMenu();
});

