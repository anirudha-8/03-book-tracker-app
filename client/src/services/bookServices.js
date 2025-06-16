import axios from "axios";

const BASE_URL = "http://localhost:8080/api/books";

const END_POINT = import.meta.env.VITE_API_BASE_URL ?? BASE_URL;

// @desc - get all books
export const getAllBooks = async () => {
	try {
		const response = await axios.get(END_POINT);
		return response.data;
	} catch (error) {
		console.error(`Error in fetching books: ${error.message}`);
		throw error;
	}
};

// @desc - get single book by id
export const getSingleBook = async (id) => {
	try {
		const response = await axios.get(`${END_POINT}/${id}`);
		return response.data;
	} catch (error) {
		console.error(`Error in fetching book: ${error.message}`);
		throw error;
	}
};

// @desc - create new book
export const createBook = async (book) => {
	try {
		const response = await axios.post(END_POINT, book);
		return response.data;
	} catch (error) {
		console.error(`Error in creating book: ${error.message}`);
		throw error;
	}
};

// @desc - delete a book
export const deleteBook = async (id) => {
	try {
		const response = await axios.delete(`${END_POINT}/${id}`);
		return response.data;
	} catch (error) {
		console.error(`Error in deleting book: ${error.message}`);
		throw error;
	}
};

// @desc - update a book
export const updateBook = async (id, book) => {
	try {
		const response = await axios.put(`${END_POINT}/${id}`, book);
		return response.data;
	} catch (error) {
		console.error(`Error in updating book: ${error.message}`);
		throw error;
	}
};
