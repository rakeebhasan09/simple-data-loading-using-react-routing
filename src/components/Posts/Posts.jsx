import { useLoaderData } from "react-router";
import Post from "./Post";

const Posts = () => {
	const posts = useLoaderData();
	return (
		<div className="pt-28 pb-10">
			<div className="container">
				<div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
					{posts.map((post) => (
						<Post key={post.id} post={post}></Post>
					))}
				</div>
			</div>
		</div>
	);
};

export default Posts;
