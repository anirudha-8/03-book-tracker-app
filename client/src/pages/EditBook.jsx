import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getSingleBook, updateBook } from "../services/bookServices";

const EditBook = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		title: "",
		author: "",
		publishYear: "",
	});
	const [error, setError] = useState(null);

	// Fetch book on mount
	useEffect(() => {
		const fetchBook = async () => {
			try {
				const response = await getSingleBook(id);
				setFormData(response.data);
			} catch (err) {
				console.error("Error fetching book:", err.message);
				setError("Failed to load book details.");
			}
		};

		fetchBook();
	}, [id]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await updateBook(id, formData);
			navigate("/");
		} catch (err) {
			console.error("Error updating book:", err.message);
			setError("Failed to update book.");
		}
	};

	return (
		<div className="max-w-xl mx-auto mt-10 p-6 border rounded shadow bg-white">
			<h2 className="text-2xl font-bold mb-4">Edit Book</h2>

			{error && <p className="text-red-500 mb-4">{error}</p>}

			<form onSubmit={handleSubmit} className="space-y-4">
				<div>
					<label htmlFor="title" className="block font-medium mb-1">
						Title
					</label>
					<input
						type="text"
						id="title"
						name="title"
						value={formData.title}
						onChange={handleChange}
						required
						className="w-full border rounded px-3 py-2"
					/>
				</div>
				<div>
					<label htmlFor="author" className="block font-medium mb-1">
						Author
					</label>
					<input
						type="text"
						id="author"
						name="author"
						value={formData.author}
						onChange={handleChange}
						required
						className="w-full border rounded px-3 py-2"
					/>
				</div>
				<div>
					<label htmlFor="publishYear" className="block font-medium mb-1">
						Publish Year
					</label>
					<input
						type="text"
						id="publishYear"
						name="publishYear"
						value={formData.publishYear}
						onChange={handleChange}
						className="w-full border rounded px-3 py-2"
					/>
				</div>

				<button
					type="submit"
					className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
				>
					Update Book
				</button>
			</form>
		</div>
	);
};

export default EditBook;
