import { Outlet } from "react-router";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Layout = () => {
	return (
		<>
			<Navbar />
			<Outlet />
			<Footer />
		</>
	);
};

export default Layout;
