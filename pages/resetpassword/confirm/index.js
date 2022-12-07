import React from "react";
import LeftPanel from "../../../components/LeftPanel";
import Head from "next/head";
import styles from "../../../styles/LoginRegister.module.css";

const ResetPassword = () => {
	return (
		<>
			<Head>
				<title>Reset Password</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/Logo.png" />
			</Head>
			<div className="container-fluid row">
				<LeftPanel />
				<div className="col pt-5">
					<div className="position-relative col-11 ps-5 pt-5">
						<div>
							<p className={`my-3 fs-1 ${styles.helo}`}>Reset Password</p>
							<p className={`${styles.subHelo}`}>
								You need to change your password to activate your account
							</p>
						</div>
						<div className="pt-5">
							<form>
								<div className="mb-5">
									<label for="passwordInput" className="form-label">
										Kata sandi
									</label>
									<input
										type="password"
										className={`form-control ${styles.input}`}
										id="passwordInput"
										aria-describedby="emailHelp"
										placeholder="Masukan kata sandi"
									/>
								</div>
								<div className="mb-5">
									<label for="passwordInput" className="form-label">
										Confirmation new password
									</label>
									<input
										type="password"
										className={`form-control ${styles.input}`}
										id="confirmPasswordInput"
										aria-describedby="emailHelp"
										placeholder="Masukan konfirmasi kata sandi"
									/>
								</div>
								<div className="mb-4">
									<button type="submit" className={`col-12 ${styles.buttons}`}>
										Reset password
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ResetPassword;