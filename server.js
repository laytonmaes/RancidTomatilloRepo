const express = require("express");
const app = express()
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.set("port", process.env.PORT || 3001)
app.locals.title = "Rancid Tomatillo Data"

app.locals.favorites = []



app.get("/", (request, response) => {
    response.send("Rancid Tomatillos");
});

app.get("/api/v1/user/favorites", (request, response) => {
    const favorites = app.locals.favorites;

    response.json({ favorites })
})

app.post("/api/v1/user/favorites", (request, response) => {
    const {  id, title, poster_path, backdrop_path, average_rating, release_date } = request.body

    app.locals.favorites.push({  id, title, poster_path, backdrop_path, average_rating, release_date })

    response.status(201).json({  id, title, poster_path, backdrop_path, average_rating, release_date })
})

app.listen(app.get("port"), () => {
    console.log(`${app.locals.title} is running on http://localhost:${app.get("port")}.`)
})