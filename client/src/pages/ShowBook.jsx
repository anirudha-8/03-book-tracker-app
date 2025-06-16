import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleBook } from "../services/bookServices";

const ShowBook = () => {
	const { id } = useParams();
	const [book, setBook] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchBook = async () => {
			try {
				const bookData = await getSingleBook(id);
				if (!bookData) {
					setError("Book Not Found!");
					return;
				}
				setBook(bookData.data);
			} catch (err) {
				console.error(err.message);
				setError("Something went wrong while fetching the book.");
			}
		};

		fetchBook(id);
	}, [id]);

	return (
		<div className="max-w-xl mx-auto mt-10 p-6 border rounded shadow bg-white">
			{error ? (
				<p className="text-red-600 font-semibold">{error}</p>
			) : (
				<>
					<h1 className="text-2xl font-bold mb-4">{book.title}</h1>
					<p className="mb-2">
						<span className="font-semibold">Author:</span> {book.author}
					</p>
					<p className="mb-2">
						<span className="font-semibold">Published:</span> {book.publishYear}
					</p>
					<p className="text-sm text-gray-500">
						<span className="font-semibold">ID:</span> {book._id}
					</p>
				</>
			)}
		</div>
	);
};

export default ShowBook;
