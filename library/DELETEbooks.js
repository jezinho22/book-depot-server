const Book = require("../models/book");

async function DELETEbooks(request, response) {
	const deletedBook = await Book.findByIdAndDelete(request.params.id);
	response.json(deletedBook);
}
module.exports = DELETEbooks;
