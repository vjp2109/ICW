const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

// /bundle.js
app.use(express.static(__dirname + "/public"));

app.get("/stuff", (req, res) => {
    res.json([
        {name: "Joe", age: Math.floor(Math.random() * 40)},
        {name: "Penny", age: 1},
    ]);
});

app.listen(8080, () => {
    console.log("Yes indeed, my server is listening on 8080!");
});