import React, { useState } from "react";
import styles from "../styles/Profile.module.css";
import Image from "next/image";

const ProfileTabs = () => {
	const [active, setActive] = useState(1);

	return (
		<>
			<section className={`${styles.cards} p-3`}>
				<div className={`w-100 justify-content-md-start d-flex`}>
					<button
						title="Portfolio"
						className={
							active === 1
								? `col-md-2 col-6 ${styles.tabBtns} ${styles.active}`
								: `col-md-2 col-6 ${styles.tabBtns} ${styles.text}`
						}
						onClick={() => setActive(1)}>
						<h4>Portfolio</h4>
					</button>
					<button
						title="Pengalaman Kerja"
						className={
							active === 2
								? `col-md-4 col-5 m-1 ${styles.tabBtns} ${styles.active}`
								: `col-md-4 col-5 m-1 ${styles.tabBtns} ${styles.text}`
						}
						onClick={() => setActive(2)}>
						<h4>Pengalaman Kerja</h4>
					</button>
				</div>
				<div className="content-tab">
					{active === 1 ? (
						<div className={`${styles.displayMobile}`}>
							<div className="text-center p-2">
								<Image src="/reminder.png" width={200} height={130} alt="" />
								<p>Reminder App</p>
							</div>
							<div className="text-center p-2">
								<Image src="/reminder.png" width={200} height={130} alt="" />
								<p>Reminder App</p>
							</div>
						</div>
					) : active === 2 ? (
						<>
							<div className="row p-3">
								<div className="col-1 me-4">
									<Image src="/tokped.png" width={70} height={70} alt="" />
								</div>
								<div className="col-10">
									<h5>Engineer</h5>
									<p>Tokopedia</p>
									<div className="row">
										<p className={`col-auto ${styles.text} ${styles.topMin}`}>
											July 2019 - January 2020
										</p>
										<p className={`col-auto ${styles.text} ${styles.topMin}`}>
											6 Months
										</p>
									</div>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Vestibulum erat orci, mollis nec gravida sed, ornare quis
										urna. Curabitur eu lacus fringilla, vestibulum risus at.
									</p>
								</div>
							</div>
						</>
					) : (
						<></>
					)}
				</div>
			</section>
		</>
	);
};

export default ProfileTabs;
