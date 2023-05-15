const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URL);

const Book = require("./models/book.js");

async function seed() {
	console.log("I'm making books now");

	//make book
	await Book.create({
		title: "Rosenshine's Principles in Action",
		description:
			"Barak Rosenshine's Principles of Instruction are widely recognised for their clarity and simplicity and their potential to support teachers seeking to engage with cognitive science and the wider world of education research.",
		status: "In print",
	});
	await Book.create({
		title:
			"Instantly Stop Procrastination: 4 Powerful Concepts That Will Help You Effectively Complete the Tasks You Keep Avoiding",
		description:
			"Patrick Drechsler, the author, used to be a habitual procrastinator. Until he successfully turned the switch and changed his mind. Since then, he has assisted many individuals in getting back on track. This book will resonate with you if you desire to take that bold move ahead!",
		status: "In print",
	});
	await Book.create({
		title: "Learning Theories Simplified: ...and how to apply them to teaching",
		description:
			"Written for busy teachers, trainers, managers and students, this 'dip-in, dip-out' guide makes theories of learning accessible and practical. It explores 130 classic and contemporary learning theorists in an easy-to-use, bite-sized format with clear relevant illustrations on how each theory will benefit teaching and learning. Each model or theory is explained in less than 350 words, followed by a 'how to use it' section.",
		status: "In print",
	});
	mongoose.disconnect();
}
seed();
