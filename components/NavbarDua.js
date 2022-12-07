import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Profile.module.css";
import { useRouter } from "next/router";

const NavbarDua = () => {
	let data = {};

	if (typeof window !== "undefined") {
		data = JSON.parse(localStorage.getItem("data"));
	}

	const router = useRouter();
	const logout = (e) => {
		localStorage.clear();
		return router.push("/login");
	};

	return (
		<>
			<nav className="navbar navbar-expand-lg pt-4 px-5">
				<div className="container-fluid px-5">
					<Link className="navbar-brand" href="/home">
						<Image
							src="/Logo1.png"
							width={127}
							height={35}
							alt=""
							className={`${styles.logoNavMobile}`}
						/>
					</Link>
					<div className={`d-flex ${styles.menuNavMobile}`}>
						<div className="dropdown">
							<button
								className="btn me-3"
								type="button"
								data-bs-toggle="dropdown"
								aria-expanded="false">
								<Image src="/bell.png" width={24} height={24} alt="" />
							</button>
							<ul className="dropdown-menu dropdown-menu-end">
								<li>
									<Link className="dropdown-item" href="#">
										Action
									</Link>
								</li>
								<li>
									<Link className="dropdown-item" href="#">
										Another action
									</Link>
								</li>
								<li>
									<Link className="dropdown-item" href="#">
										Something else here
									</Link>
								</li>
							</ul>
						</div>
						<div className="dropdown">
							<button
								className="btn me-3"
								type="button"
								data-bs-toggle="dropdown"
								aria-expanded="false">
								<Image src="/mail.png" width={24} height={24} alt="" />
							</button>
							<ul className="dropdown-menu dropdown-menu-end">
								<li>
									<Link className="dropdown-item" href="#">
										Action
									</Link>
								</li>
								<li>
									<Link className="dropdown-item" href="#">
										Another action
									</Link>
								</li>
								<li>
									<Link className="dropdown-item" href="#">
										Something else here
									</Link>
								</li>
							</ul>
						</div>
						<div className="dropdown">
							<button
								className="btn me-3"
								type="button"
								data-bs-toggle="dropdown"
								aria-expanded="false">
								<Image
									src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${data.profile_pic}`}
									width={24}
									height={24}
									alt=""
									className={`${styles.profileImg}`}
									priority={true}
								/>
							</button>
							<ul className="dropdown-menu dropdown-menu-end">
								<li>
									{/* <Link className="dropdown-item" href={``}> */}
									<Link
										className="dropdown-item"
										href={`/profile/${data.id_user}`}>
										Profile
									</Link>
								</li>
								<li>
									{/* <Link className="dropdown-item" href={``}> */}
									<Link
										className="dropdown-item"
										href={`/profile/editprofile/${data.id_user}`}>
										Edit Profile
									</Link>
								</li>
								<li>
									<Link
										className="dropdown-item"
										href="/"
										onClick={(e) => logout(e)}>
										Logout
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};

export default NavbarDua;
