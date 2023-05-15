const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = 8080; //process.env.PORT ||
require("dotenv").config();

const Book = require("./models/book");

mongoose.connect(process.env.MONGO_URL);

const app = express();
app.use(cors());

app.get("/", (request, response) => {
	response.json("You have reached the root. How may I help?");
});

app.get("/books", async (request, response) => {
	const books = await Book.find();
	response.json(books);
});

app.listen(PORT, () => console.log("App  listening on PAWT" + PORT));
