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
	response.json(newBook);
});

app.delete("/books/:id", async (request, response) => {
	const deletedBook = await Book.findByIdAndDelete(request.params.id);
	response.json(deletedBook);
});

app.put("/books/:id", async (request, response) => {
	const id = request.params.id;
	const body = request.body;
	const updatedBook = await Book.findByIdAndUpdate(id, body);
	response.json(updatedBook);
});
app.listen(PORT, () => console.log("App  listening on PAWT" + PORT));
