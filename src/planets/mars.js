export default function addMars() {
    const content = document.querySelector("#content");
    const main = document.createElement("main");

    content.appendChild(main);

    const details = document.createElement("div");
    details.classList.add("details");

    main.appendChild(details);


    const rotationTime = document.createElement("div");
    details.appendChild(rotationTime);
    
    const rotationHeader = document.createElement("h2");
    rotationTime.appendChild(rotationHeader);
    rotationHeader.innerText = "Rotation Time";
    
    const rotationParagraph = document.createElement("p");
    rotationTime.appendChild(rotationParagraph);
    rotationParagraph.classList.add("value");
    rotationParagraph.innerText = "24 hours and 37 minutes";
    

    const revolutionTime = document.createElement("div");
    details.appendChild(revolutionTime);
    
    const revolutionHeader = document.createElement("h2");
    revolutionTime.appendChild(revolutionHeader);
    revolutionHeader.innerText = "Revolution Time";
    
    const revolutionParagraph = document.createElement("p");
    revolutionTime.appendChild(revolutionParagraph);
    revolutionParagraph.classList.add("value");
    revolutionParagraph.innerText = "687 Days";
    

    const radius = document.createElement("div");
    details.appendChild(radius);
    
    const radiusHeader = document.createElement("h2");
    radius.appendChild(radiusHeader);
    radiusHeader.innerText = "Radius";

    const radiusParagraph = document.createElement("p");
    radius.appendChild(radiusParagraph);
    radiusParagraph.classList.add("value");
    radiusParagraph.innerText = "3389 km";


    const averageTemperature = document.createElement("div");
    details.appendChild(averageTemperature);

    const averageTemperatureHeader = document.createElement("h2");
    averageTemperature.appendChild(averageTemperatureHeader);
    averageTemperatureHeader.innerText = "Average Temperature";

    const averageTemperatureParagraph = document.createElement("p");
    averageTemperature.appendChild(averageTemperatureParagraph);
    averageTemperatureParagraph.classList.add("value");
    averageTemperatureParagraph.innerText = "-65°C";
};