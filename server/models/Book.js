import mongoose from "mongoose";

const BookSchema = mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		author: {
			type: String,
			required: true,
		},
		publishYear: {
			type: Number,
		},
	},
	{
		timestamps: true,
	}
);

const Book = mongoose.model("Book", BookSchema);

export default Book;
