// components/Navbar.jsx
import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="bg-blue-600 p-4 text-white">
			<div className="container mx-auto flex gap-4">
				<NavLink to="/" className="hover:underline">
					Home
				</NavLink>
				<NavLink to="/books/create" className="hover:underline">
					Add Book
				</NavLink>
			</div>
		</nav>
	);
};

export default Navbar;
