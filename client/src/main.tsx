import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import App from "./App";
import "./index.css";
import Login from "./Login";
import Register from "./Register";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Register />,
		// errorElement: <ErrorPage />,
		// loader: rootLoader,
		// action: rootAction,
	},
	{
		path: "/login",
		element: <Login />,
		// loader: contactLoader,
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
