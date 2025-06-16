import { useEffect, useState } from "react";
import BookCard from "../components/BookCard";
import { deleteBook, getAllBooks } from "../services/bookServices";

const Home = () => {
	const [books, setBooks] = useState([]);
	const [error, setError] = useState(null);

	const fetchBooks = async () => {
		try {
			const response = await getAllBooks();
			setBooks(response.data);
		} catch (error) {
			console.error("Fetch error:", error.message);
			setError("Failed to load books");
		}
	};

	const handleDelete = async (id) => {
		try {
			await deleteBook(id);
			setBooks((prev) => prev.filter((book) => book._id !== id));
		} catch (error) {
			console.error("Delete error:", error.message);
			setError("Failed to delete book");
		}
	};

	useEffect(() => {
		fetchBooks();
	}, []);

	return (
		<section className="container mx-auto px-4 py-8">
			<h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
				Book List
			</h1>

			{error && (
				<p className="text-red-500 text-center font-semibold mb-4">{error}</p>
			)}

			{books.length === 0 ? (
				<p className="text-gray-600 text-center">No books available.</p>
			) : (
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					{books.map((book) => (
						<BookCard key={book._id} book={book} onDelete={handleDelete} />
					))}
				</div>
			)}
		</section>
	);
};

export default Home;
