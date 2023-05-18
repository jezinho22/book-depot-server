const Book = require("../models/book");

async function POSTbooks(request, response) {
	const newBook = await Book.create(request.body);
	response.json(newBook);
}

module.exports = POSTbooks;
