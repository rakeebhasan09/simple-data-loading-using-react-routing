import { Link } from "react-router";

const User = ({ user }) => {
	const { id, username, name, phone } = user;
	return (
		<Link to={`/user-details/${id}`}>
			<div className="p-5 md:p-10 shadow">
				<h2 className="text-[22px] font-medium">{name}</h2>
				<h5 className="text-[18px]">{username}</h5>
				<p>{phone}</p>
			</div>
		</Link>
	);
};

export default User;
