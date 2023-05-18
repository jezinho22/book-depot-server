const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = 8080; //process.env.PORT ||
require("dotenv").config();

const app = express();
app.use(cors());
const bp = require("body-parser");
app.use(bp.json());

const GETbooks = require("./library/GETbooks");
const PUTbooks = require("./library/PUTbooks");
const DELETEbooks = require("./library/DELETEbooks");
const POSTbooks = require("./library/POSTbooks");

mongoose.connect(process.env.MONGO_URL);

app.get("/", (request, response) =>
	response.json("You have reached the root.")
);

app.get("/books", GETbooks);
app.post("/books", POSTbooks);
app.delete("/books/:id", DELETEbooks);
app.put("/books/:id", PUTbooks);

app.listen(PORT, () => console.log("App  listening on PAWT" + PORT));
