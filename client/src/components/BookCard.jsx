import { Link } from "react-router-dom";

const BookCard = ({ book, onDelete }) => {
	const { _id, title, author, publishYear } = book;

	return (
		<div className="bg-white shadow-lg border rounded-lg p-6 mb-4">
			<h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
			<p className="text-gray-600 mb-1">
				<span className="font-semibold">Author:</span> {author}
			</p>
			<p className="text-gray-600 mb-4">
				<span className="font-semibold">Publish Year:</span> {publishYear}
			</p>

			<div className="flex gap-3">
				<Link
					to={`/books/${_id}`}
					className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
				>
					View
				</Link>

				<Link
					to={`/books/edit/${_id}`}
					className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
				>
					Edit
				</Link>

				<button
					onClick={() => onDelete(_id)}
					className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
				>
					Delete
				</button>
			</div>
		</div>
	);
};

export default BookCard;
