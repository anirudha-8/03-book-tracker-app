import "./App.css";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import AddBook from "./pages/AddBook";
import EditBook from "./pages/EditBook";
import ShowBook from "./pages/ShowBook";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/books/create",
				element: <AddBook />,
			},
			{
				path: "/books/edit/:id",
				element: <EditBook />,
			},
			{
				path: "/books/:id",
				element: <ShowBook />,
			},
		],
	},
	{
		path: "*",
		element: <NotFound />,
	},
]);

export default router;
