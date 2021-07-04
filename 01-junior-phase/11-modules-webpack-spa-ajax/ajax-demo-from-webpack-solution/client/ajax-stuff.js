import axios from "axios";

export default () => {
    console.log("Hooking up the AJAX stuff!");
    const theButton = document.querySelector("#fire-off-request");

    theButton.addEventListener("click", async () => {
        console.log("Button was clicked!");
        const responseFromServer = await axios.get("/stuff");
        responseFromServer.data.forEach((person) => {
            const h1 = document.createElement("h1");
            h1.innerText = `${person.name} is ${person.age} years old`;
            document.body.appendChild(h1);
        });
    });
};