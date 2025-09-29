import { useLoaderData } from "react-router";

const UserDetails = () => {
	const userDetails = useLoaderData();

	console.log(userDetails);
	return (
		<div className="pt-28 pb-10">
			<div className="container mx-auto">
				<div className="max-w-3xl mx-auto p-5 md:p-10 shadow relative">
					<div className=" md:absolute bottom-0 right-10">
						<img
							className="w-72"
							src="https://i.ibb.co.com/jv3vHZF1/user-img.png"
							alt={userDetails.name}
						/>
					</div>
					<ul>
						<li className="text-[22px] grid grid-cols-12">
							<span className="col-span-12 md:col-span-2">
								<b>Name</b>
							</span>
							<span className="col-span-12 md:col-span-10">
								<span className="hidden md:inline-block">
									: &nbsp;&nbsp;&nbsp;
								</span>
								{userDetails.name}
							</span>
						</li>
						<li className="text-[18px] grid grid-cols-12">
							<span className="col-span-12 md:col-span-2">
								<b>Username</b>
							</span>
							<span className="col-span-12 md:col-span-10">
								<span className="hidden md:inline-block">
									: &nbsp;&nbsp;&nbsp;
								</span>{" "}
								{userDetails.username}
							</span>
						</li>
						<li className="text-[18px] grid grid-cols-12">
							<span className="col-span-12 md:col-span-2">
								<b>Phone</b>
							</span>
							<span className="col-span-12 md:col-span-10">
								<span className="hidden md:inline-block">
									: &nbsp;&nbsp;&nbsp;
								</span>{" "}
								{userDetails.phone}
							</span>
						</li>
						<li className="text-[18px] grid grid-cols-12">
							<span className="col-span-12 md:col-span-2">
								<b>E-mail</b>
							</span>
							<span className="col-span-12 md:col-span-10">
								<span className="hidden md:inline-block">
									: &nbsp;&nbsp;&nbsp;
								</span>{" "}
								{userDetails.email}
							</span>
						</li>
						<li className="text-[18px] grid grid-cols-12">
							<span className="col-span-12 md:col-span-2">
								<b>Website</b>
							</span>
							<span className="col-span-12 md:col-span-10">
								<span className="hidden md:inline-block">
									: &nbsp;&nbsp;&nbsp;
								</span>{" "}
								{userDetails?.website}
							</span>
						</li>
						<li className="text-[18px] grid grid-cols-12">
							<span className="col-span-12 md:col-span-2">
								<b>Company</b>
							</span>
							<span className="col-span-12 md:col-span-10">
								<span className="hidden md:inline-block">
									: &nbsp;&nbsp;&nbsp;
								</span>{" "}
								{userDetails?.company?.name}
							</span>
						</li>
						<li className="text-[18px] grid grid-cols-12">
							<span className="col-span-12 md:col-span-2">
								<b>Street</b>
							</span>
							<span className="col-span-12 md:col-span-10">
								<span className="hidden md:inline-block">
									: &nbsp;&nbsp;&nbsp;
								</span>{" "}
								{userDetails?.address?.street}
							</span>
						</li>
						<li className="text-[18px] grid grid-cols-12">
							<span className="col-span-2">
								<b>City</b>
							</span>
							<span className="col-span-10">
								<span className="hidden md:inline-block">
									: &nbsp;&nbsp;&nbsp;
								</span>{" "}
								{userDetails?.address?.city}
							</span>
						</li>
						<li className="text-[18px] grid grid-cols-12">
							<span className="col-span-2">
								<b>Zipcode</b>
							</span>
							<span className="col-span-10">
								<span className="hidden md:inline-block">
									: &nbsp;&nbsp;&nbsp;
								</span>{" "}
								{userDetails?.address?.zipcode}
							</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default UserDetails;
