import { useLoaderData } from "react-router";
import User from "./User";

const Users = () => {
	const users = useLoaderData();
	return (
		<div className="pt-28 pb-10">
			<div className="container mx-auto">
				<div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
					{users.map((user) => (
						<User key={user.id} user={user}></User>
					))}
				</div>
			</div>
		</div>
	);
};

export default Users;
