import { useParams } from "react-router-dom";

const ShowBook = () => {
	const { id } = useParams();
	return <div>Book {id}</div>;
};
export default ShowBook;
