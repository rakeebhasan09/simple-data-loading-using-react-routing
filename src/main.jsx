import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import "./index.css";
import Layout from "./components/Layout/Layout";
import Hero from "./components/Hero/Hero";
import Users from "./components/Users/Users";
import UserDetails from "./components/Users/UserDetails";
import Posts from "./components/Posts/Posts";
import PostDetails from "./components/Posts/PostDetails";

const router = createBrowserRouter([
	{
		path: "/",
		Component: Layout,
		children: [
			{
				path: "/",
				Component: Hero,
			},
			{
				path: "users",
				loader: () =>
					fetch("https://jsonplaceholder.typicode.com/users"),
				Component: Users,
			},
			{
				path: "user-details/:id",
				loader: ({ params }) =>
					fetch(
						`https://jsonplaceholder.typicode.com/users/${params.id}`
					),
				Component: UserDetails,
			},
			{
				path: "posts",
				loader: () =>
					fetch("https://jsonplaceholder.typicode.com/posts"),
				Component: Posts,
			},
			{
				path: "post-details/:id",
				loader: ({ params }) =>
					fetch(
						`https://jsonplaceholder.typicode.com/posts/${params.id}`
					),
				Component: PostDetails,
			},
		],
	},
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
