import React from "react";
import NavbarSatu from "../components/NavbarSatu";
import Footer from "../components/Footer";

const layout1 = (props) => {
	const { children } = props;
	return (
		<>
			<NavbarSatu />
			<main>{children}</main>
			<Footer />
		</>
	);
};

export default layout1;
