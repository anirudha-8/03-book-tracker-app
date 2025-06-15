import { useParams } from "react-router-dom";

const EditBook = () => {
	const { id } = useParams();
	return <div>Edit Book {id}</div>;
};
export default EditBook;
