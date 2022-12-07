import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import layout1 from "../layouts/Layout1";
import layout2 from "../layouts/layout2";
import layout3 from "../layouts/layout3";
import { useEffect } from "react";

const layouts = {
	L1: layout1,
	L2: layout2,
	L3: layout3,
};

const noLayout = ({ children }) => {
	return <>{children}</>;
};

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		require("bootstrap/dist/js/bootstrap.bundle.min.js");
	}, []);

	const Layout = layouts[Component.layout] || noLayout;

	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
