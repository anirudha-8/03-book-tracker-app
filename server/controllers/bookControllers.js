import Book from "../models/Book.js";

// @desc 	Get all books
// @route 	GET /api/books
// @access 	Public
export const getAllBooks = async (req, res) => {
	try {
		const books = await Book.find({});

		if (!books.length) {
			return res
				.status(404)
				.json({ success: false, message: "No books found!" });
		}

		res.status(200).json({
			success: true,
			message: "All books fetched successfully!",
			data: books,
		});
	} catch (error) {
		console.error(`Error in getAllBooks: ${error.message}`);
		res.status(500).json({ success: false, message: "Internal Server Error!" });
	}
};

// @desc 	Get single book by ID
// @route 	GET /api/books/:id
// @access 	Public
export const getSingleBook = async (req, res) => {
	try {
		const { id } = req.params;
		const book = await Book.findById(id);

		if (!book) {
			return res
				.status(404)
				.json({ success: false, message: "Book not found!" });
		}

		res.status(200).json({
			success: true,
			message: "Book fetched successfully!",
			data: book,
		});
	} catch (error) {
		console.error(`Error in getSingleBook: ${error.message}`);
		res.status(500).json({ success: false, message: "Internal Server Error!" });
	}
};

// @desc 	Create a new book
// @route 	POST /api/books
// @access 	Public
export const createBook = async (req, res) => {
	try {
		const { title, author, publishYear } = req.body;

		if (!title || !author) {
			return res.status(400).json({
				success: false,
				message: `"Title" and "Author" are required fields!`,
			});
		}

		const newBook = await Book.create({ title, author, publishYear });

		res.status(201).json({
			success: true,
			message: "Book created successfully!",
			data: newBook,
		});
	} catch (error) {
		console.error(`Error in createBook: ${error.message}`);
		res.status(500).json({
			success: false,
			message: "Internal Server Error!",
		});
	}
};

// @desc 	Delete a book
// @route 	DELETE /api/books/:id
// @access 	Public
export const deleteBook = async (req, res) => {
	try {
		const { id } = req.params;

		const deletedBook = await Book.findByIdAndDelete(id);

		if (!deletedBook) {
			return res
				.status(404)
				.json({ success: false, message: "Book not found for deletion!" });
		}

		res.status(200).json({
			success: true,
			message: "Book deleted successfully!",
			data: deletedBook,
		});
	} catch (error) {
		console.error(`Error in deleteBook: ${error.message}`);
		res.status(500).json({
			success: false,
			message: "Internal Server Error!",
		});
	}
};

// @desc 	Update a book
// @route 	PUT /api/books/:id
// @access 	Public
export const updateBook = async (req, res) => {
	try {
		const { id } = req.params;

		const { title, author, publishYear } = req.body;

		const updatedBook = await Book.findByIdAndUpdate(
			id,
			{ title, author, publishYear },
			{ new: true, runValidators: true }
		);

		if (!updatedBook) {
			return res
				.status(404)
				.json({ success: false, message: "Book not found for update!" });
		}

		res.status(200).json({
			success: true,
			message: "Book updated successfully!",
			data: updatedBook,
		});
	} catch (error) {
		console.error(`Error in updateBook: ${error.message}`);
		res.status(500).json({ success: false, message: "Internal Server Error!" });
	}
};
