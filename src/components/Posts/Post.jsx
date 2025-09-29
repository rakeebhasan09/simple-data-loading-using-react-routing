import { Link } from "react-router";

const Post = ({ post }) => {
	const { id, title } = post;
	return (
		<div className="shadow h-full flex flex-col rounded-md overflow-hidden">
			<img
				className="w-full"
				src="https://i.ibb.co.com/wNgX0Kd1/post-banner.jpg"
				alt={title}
			/>
			<div className="p-5 flex-1 flex flex-col">
				<h2 className="text-[22px] font-medium flex-grow">{title}</h2>
				<div className="mt-5">
					<Link to={`/post-details/${id}`}>
						<button className="btn btn-primary">
							Read More...
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Post;
