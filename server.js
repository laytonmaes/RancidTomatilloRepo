const express = require("express");
const app = express()

app.set("port", process.env.PORT || 3001)
app.locals.title = "Rancid Tomatillo Data"
app.locals.favorites = [{movie: "Iron Giant"}]



app.get("/", (request, response) => {
    response.send("Rancid Tomatillos");
});

app.get("/api/v1/pets", (request, response) => {
    const favorites = app.locals.favorites;

    response.json({ favorites })
})

app.listen(app.get("port"), () => {
    console.log(`${app.locals.title} is running on http://localhost:${app.get("port")}.`)
})