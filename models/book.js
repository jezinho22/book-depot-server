const mongoose = require("mongoose");
// get the schema out of mongoose
const { Schema } = mongoose;

// create a schema
const bookSchema = new Schema({
	title: String,
	description: String,
	status: String,
});
// create a model, called Cat
const Book = mongoose.model("Book", bookSchema);

// make model available to rest of server
module.exports = Book;
