const Book = require("../models/book");

async function GETbooks(request, response) {
	const books = await Book.find();
	response.json(books);
}
module.exports = GETbooks;
