const navBar = document.querySelector("menu");
const openMenu = document.getElementById("menu-btn");
const closeMenu = document.getElementById("close-btn");

openMenu.addEventListener("click", () =>{
    navBar.classList.remove("close");
    navBar.classList.add("open");
}
)

closeMenu.addEventListener("click", () =>{
    navBar.classList.remove("open");
    navBar.classList.add("close");
}
)