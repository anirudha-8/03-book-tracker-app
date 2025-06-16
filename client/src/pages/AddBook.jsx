import { useState } from "react";
import { createBook } from "../services/bookServices";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
	const [title, setTitle] = useState("");
	const [author, setAuthor] = useState("");
	const [publishYear, setPublishYear] = useState("");
	const [error, setError] = useState(null);

	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError(null);

		try {
			const bookAdded = await createBook({ title, author, publishYear });

			if (!bookAdded) {
				setError("Book not added!");
				return;
			}

			// Clear form
			setTitle("");
			setAuthor("");
			setPublishYear("");
			navigate("/");
		} catch (error) {
			console.error(`Book creation failed: ${error.message}`);
			setError("Something went wrong. Try again.");
		}
	};

	return (
		<div className="max-w-xl mx-auto mt-10 bg-white p-6 shadow-md rounded-lg">
			<h1 className="text-2xl font-bold mb-6 text-center text-indigo-600">
				Add New Book
			</h1>

			<form onSubmit={handleSubmit} className="space-y-4">
				<div>
					<label
						htmlFor="title"
						className="block text-sm font-medium text-gray-700"
					>
						Title
					</label>
					<input
						type="text"
						id="title"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						required
						className="mt-1 block w-full border border-gray-300 rounded-md p-2"
					/>
				</div>

				<div>
					<label
						htmlFor="author"
						className="block text-sm font-medium text-gray-700"
					>
						Author
					</label>
					<input
						type="text"
						id="author"
						value={author}
						onChange={(e) => setAuthor(e.target.value)}
						required
						className="mt-1 block w-full border border-gray-300 rounded-md p-2"
					/>
				</div>

				<div>
					<label
						htmlFor="publishYear"
						className="block text-sm font-medium text-gray-700"
					>
						Publish Year
					</label>
					<input
						type="text"
						id="publishYear"
						value={publishYear}
						onChange={(e) => setPublishYear(e.target.value)}
						className="mt-1 block w-full border border-gray-300 rounded-md p-2"
					/>
				</div>

				{error && <p className="text-red-500 text-sm">{error}</p>}

				<button
					type="submit"
					className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-200"
				>
					Add Book
				</button>
			</form>
		</div>
	);
};

export default AddBook;
