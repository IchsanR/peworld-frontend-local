import React from "react";
import NavbarTiga from "../components/NavbarTiga";
import Footer from "../components/Footer";
import { protectRoute } from "../HOC/protectedRoute";

const layout3 = (props) => {
	const { children } = props;
	return (
		<>
			<NavbarTiga />
			<main>{children}</main>
			<Footer />
		</>
	);
};

export default layout3;
