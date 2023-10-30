import './style.css';

import addNavbar from "./navigation/navbar";
import addEarth from "./planets/earth";
import addMars from "./planets/mars";
import addvenus from "./planets/venus";

addNavbar();
addEarth();

const navbar = document.querySelector(".navbar");

navbar.addEventListener("click", event => {
    const innerText = event.target.innerText;

    if (innerText === "Earth") {
        clearContent();
        addEarth();
    } else if (innerText === "Venus") {
        clearContent();
        addvenus();
    } else if (innerText === "Mars") {
        clearContent();
        addMars();
    };

    return null;
});

function clearContent() {
    const content = document.querySelector("#content");
    const main = document.querySelector("main");
    
    content.removeChild(main);
};