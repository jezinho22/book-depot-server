const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = 8080; //process.env.PORT ||
require("dotenv").config();

const app = express();
app.use(cors());
const bp = require("body-parser");
app.use(bp.json());
const Book = require("./models/book");

mongoose.connect(process.env.MONGO_URL);

app.get("/", (request, response) => {
	response.json("You have reached the root. How may I help?");
});

app.get("/books", async (request, response) => {
	const books = await Book.find();
	response.json(books);
});

app.post("/books", async (request, response) => {
	const newBook = await Book.create(request.body);
	// {title: "1984",
	// description: "Dystopia",
	// status: "In print",}

	console.log("Book posted");
});

app.listen(PORT, () => console.log("App  listening on PAWT" + PORT));
