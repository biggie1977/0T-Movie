const menuBtn = document.getElementById("menu-btn");
const navLink = document.getElementById("nav-link");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
    navLink.classList.toggle("open");

    const isOpen = navLink.classList.contains("open");
    menuBtnIcon.setAttribute(
        "class",
        isOpen ? "ri-close-line" : "ri-menu-3-line"
    );
});

navLink.addEventListener("click", () => {
    navLink.classList.remove("open");
    menuBtn.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption ={
    distance: "50px",
    origin: "bottom",
    duration: 2000,
};

ScrollReveal().reveal(".header-container h1",{
            ...scrollRevealOption,
            delay: 1000,
        });


ScrollReveal().reveal(".header-container p",{
    ...scrollRevealOption,
    delay: 2000,
});


ScrollReveal().reveal(".header-container .header-btn",{
    ...scrollRevealOption,
    delay: 3000,
});


ScrollReveal().reveal(".socials li",{
    ...scrollRevealOption,
    delay: 4000,
    interval: 500,
});