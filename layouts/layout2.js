import React from "react";
import NavbarDua from "../components/NavbarDua";
import Footer from "../components/Footer";
import { protectRoute } from "../HOC/protectedRoute";

const layout2 = (props) => {
	const { children } = props;
	return (
		<>
			<NavbarDua />
			<main>{children}</main>
			<Footer />
		</>
	);
};

export default layout2;
