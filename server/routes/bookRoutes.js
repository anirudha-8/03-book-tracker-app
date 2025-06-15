import express from "express";
import {
	getAllBooks,
	getSingleBook,
	createBook,
	deleteBook,
	updateBook,
} from "../controllers/bookControllers.js";

const router = express.Router();

// @desc - get all books
router.get("/", getAllBooks);

// @desc - get single book by ID
router.get("/:id", getSingleBook);

// @desc - create new book
router.post("/", createBook);

// @desc - delete a book
router.delete("/:id", deleteBook);

// @desc - update a book
router.put("/:id", updateBook);

export default router;
