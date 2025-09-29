import { useLoaderData, useNavigate } from "react-router";

const PostDetails = () => {
	const postDetails = useLoaderData();
	const navigate = useNavigate();
	return (
		<div className="pt-28 pb-10">
			<div className="container">
				<div className="max-w-[1000px] mx-auto shadow ">
					<img
						className="w-full"
						src="https://i.ibb.co.com/wNgX0Kd1/post-banner.jpg"
						alt={postDetails.title}
					/>
					<div className="p-5">
						<h2 className="text-[20px] md:text-[30px] capitalize font-semibold mb-4">
							{postDetails.title}
						</h2>
						<p className="text-[18px]">{postDetails.body}</p>
						<div className="mt-4">
							<button
								onClick={() => navigate(-1)}
								className="btn bg-black text-white border-black"
							>
								Back
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PostDetails;
