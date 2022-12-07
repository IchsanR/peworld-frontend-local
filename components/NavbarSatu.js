import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavbarSatu = () => {
	return (
		<>
			<nav className="navbar navbar-expand-lg pt-md-4 px-md-5">
				<div className="container-fluid px-5">
					<Link className="navbar-brand" href="/">
						<Image src="/Logo1.png" width={127} height={35} alt="" />
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="collapse navbar-collapse justify-content-end"
						id="navbarSupportedContent">
						<form className="d-flex">
							<Link href="/login">
								<button className="btn btn-outline-success me-3" type="submit">
									Masuk
								</button>
							</Link>
							<Link href="/register">
								<button className="btn btn-outline-success" type="submit">
									Daftar
								</button>
							</Link>
						</form>
					</div>
				</div>
			</nav>
		</>
	);
};

export default NavbarSatu;
