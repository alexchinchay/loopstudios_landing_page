const toggleMenu = document.querySelector("#toggleMenu");
const overlay = document.querySelector("#overlay");

toggleMenu.addEventListener("click", () => {

    if(toggleMenu.classList.contains("open")) {
        toggleMenu.classList.remove("open");
        overlay.classList.remove("fade-in");
        overlay.classList.add("fade-out");

    }else {
        toggleMenu.classList.add("open");
        overlay.classList.remove("fade-out");
        overlay.classList.add("fade-in");
    }
})