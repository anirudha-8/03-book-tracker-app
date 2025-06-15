import Navbar from "../components/Navbar";

import { Outlet } from "react-router-dom";

const MainLayout = () => {
	return (
		<>
			<Navbar />
			<main className="container mx-auto px-4 py-6">
				<Outlet />
			</main>
		</>
	);
};
export default MainLayout;
