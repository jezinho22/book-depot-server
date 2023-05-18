const Book = require("../models/book");

async function PUTbooks(request, response) {
	const id = request.params.id;
	const body = request.body;
	const updatedBook = await Book.findByIdAndUpdate(id, body);
	response.json(updatedBook);
}

module.exports = PUTbooks;
