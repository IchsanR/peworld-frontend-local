//localStorage
import React, { useEffect } from "react";
import { useRouter } from "next/router";

export function protectRoute(Component) {
	return (props) => {
		const router = useRouter();
		useEffect(() => {
			const token = localStorage.getItem("token");
			if (!token) {
				router.push("/login/user");
			}
		}, []);
		return (
			<>
				<Component {...props} />
			</>
		);
	};
}
