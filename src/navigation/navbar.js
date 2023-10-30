export default function addNavbar() {
    const content = document.querySelector("#content");
    const nav = document.createElement("nav");

    content.appendChild(nav);

    const navContainer = document.createElement("div");
    navContainer.classList.add("navbar");

    nav.appendChild(navContainer);

    const earth = document.createElement("div");
    earth.classList.add("navbar-btn", "active");
    earth.innerText = "Earth";
    
    navContainer.appendChild(earth);
    
    const venus = document.createElement("div");
    venus.classList.add("navbar-btn");
    venus.innerText = "Venus";

    navContainer.appendChild(venus);
    
    const mars = document.createElement("div");
    mars.classList.add("navbar-btn");
    mars.innerText = "Mars";

    navContainer.appendChild(mars);


    const buttons = document.querySelectorAll(".navbar-btn");

    buttons.forEach(button => {
        button.addEventListener("click", event => {
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].classList.remove("active");
            };

            event.target.classList.add("active");
        });
    });
};