import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "../../styles/Hire.module.css";

const Hire = () => {
	const [data, setData] = useState([]);

	const router = useRouter();
	const { id_user } = router.query;

	useEffect(() => {
		if (id_user) {
			axios
				.get(`http://localhost:4002/user/${id_user}`)
				.then((response) => {
					// console.log(response.data);
					setData(response.data.data[0]);
				})
				.catch((error) => {
					// console.log(error);
				});
		}
	}, [router.isReady, id_user]);

	return (
		<>
			<Head>
				<title>{data.names}</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/Logo.png" />
			</Head>
			<div className={`container-fluid row ${styles.bg}`}>
				<div className={`position-absolute translate-middle-y ps-5 my-5`}>
					<div className="row col-11 ms-5 position-absolute my-5">
						<div className="col-md-3 col-12 me-4 position-relative">
							<section className={`${styles.cards} p-3`}>
								<Image
									src={`http://localhost:4002/${data.profile_pic}`}
									width={135}
									height={135}
									className={`mx-auto d-block my-3 ${styles.profileImg}`}
									priority={true}
									alt={`Profile picture`}
								/>
								<h4>{data.names}</h4>
								<p>{data.job_desc}</p>
								<div className="row">
									<Image
										src="/map.png"
										width={14}
										height={14}
										className="col-auto"
										alt="Domisili"
									/>
									<p
										className={`col-auto ${styles.text} ${styles.textAddress}`}>
										Lorem Ipsum
									</p>
								</div>
								<p className={`${styles.text}`}>{data.tempat_kerja}</p>
								<p className={`${styles.text}`}>{data.description}</p>
								<div className="my-3">
									<h4>Skill</h4>
									<button className={`col-4 m-1 p-1 ${styles.btnSkills}`}>
										PHP
									</button>
									<button className={`col-4 m-1 p-1 ${styles.btnSkills}`}>
										JavaScript
									</button>
									<button className={`col-4 m-1 p-1 ${styles.btnSkills}`}>
										HTML
									</button>
								</div>
								<div className="row">
									<Image
										src="/mail.png"
										width={18}
										height={18}
										className="col-auto"
										alt=""
									/>
									<p
										className={`col-auto ${styles.text} ${styles.textAddress}`}>
										email@mail.com
									</p>
								</div>
								<div className="row">
									<Image
										src="/instagram.png"
										width={18}
										height={18}
										className="col-auto"
										alt=""
									/>
									<p
										className={`col-auto ${styles.text} ${styles.textAddress}`}>
										@louistomlinson
									</p>
								</div>
							</section>
						</div>
						<div className="position-relative col-8 ms-4">
							<section className={`mb-3`}>
								<div className="mb-5">
									<h3>Hubungi {data.names}</h3>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
										euismod ipsum et dui rhoncus auctor.
									</p>
								</div>
								<form className="col-12">
									<div className="mb-3">
										<label htmlFor="project" className={`form-label`}>
											Tujuan tentang pesan ini
										</label>
										<select class={`form-select ${styles.input}`} id="project">
											<option selected>Project</option>
											<option value="1">One</option>
											<option value="2">Two</option>
											<option value="3">Three</option>
										</select>
									</div>
									<div className="mb-4">
										<label htmlFor="nameInput" className={`form-label`}>
											Nama Lengkap
										</label>
										<input
											type="text"
											className={`form-control ${styles.input}`}
											id="nameInput"
											placeholder="Masukan nama lengkap"
											// onChange={(e) => {
											// 	setForm({ ...form, names: e.target.value });
											// }}
										/>
									</div>
									<div className="mb-4">
										<label htmlFor="emailInput" className={`form-label`}>
											Email
										</label>
										<input
											type="text"
											className={`form-control ${styles.input}`}
											id="emailInput"
											placeholder="Masukan nama email"
											// onChange={(e) => {
											// 	setForm({ ...form, names: e.target.value });
											// }}
										/>
									</div>
									<div className="mb-4">
										<label htmlFor="phoneInput" className={`form-label`}>
											No handphone
										</label>
										<input
											type="text"
											className={`form-control ${styles.input}`}
											id="phoneInput"
											placeholder="Masukan no handphone"
											// onChange={(e) => {
											// 	setForm({ ...form, names: e.target.value });
											// }}
										/>
									</div>
									<div className="mb-4">
										<label htmlFor="tempatKerja" className={`form-label`}>
											Deskripsi
										</label>
										<textarea
											type="text"
											className={`form-control ${styles.textarea}`}
											id="textarea"
											placeholder="Masukkan deskripsi singkat"
											// onChange={(e) => {
											// 	setForm({ ...form, description: e.target.value });
											// }}
										/>
									</div>
									<button className={`${styles.btnSkill} col-12`} type="submit">
										Hire
									</button>
								</form>
							</section>
						</div>
					</div>
				</div>
			</div>
			<div className={`${styles.bgPutih}`}></div>
		</>
	);
};

Hire.layout = "L2";

export default Hire;