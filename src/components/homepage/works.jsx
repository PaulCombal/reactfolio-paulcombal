import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./cooking.png"
								alt="cooking"
								className="work-image"
							/>
							<div className="work-title">Job seeker</div>
							<div className="work-subtitle">
								Human Linkedin crawler
							</div>
							<div className="work-duration">01/2024 - Present</div>
						</div>

						<div className="work">
							<img
								src="./extia.svg"
								alt="extia"
								className="work-image"
							/>
							<div className="work-title">Extia</div>
							<div className="work-subtitle">
								IT Consultant
							</div>
							<div className="work-duration">11/2021 - 11/2023</div>
						</div>

						<div className="work">
							<img
								src="./total.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">TotalEnergies</div>
							<div className="work-subtitle">
								Innovation PM apprenticeship
							</div>
							<div className="work-duration">09/2020 - 09/2021</div>
						</div>

						<div className="work">
							<img
								src="./mws.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Matchwornshirt</div>
							<div className="work-subtitle">
								Multi-stack developer
							</div>
							<div className="work-duration">09/2019 - 02/2020</div>
						</div>

						<div className="work">
							<img
								src="./bluesquare.jpg"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Bluesquare</div>
							<div className="work-subtitle">
								Fullstack web development
							</div>
							<div className="work-duration">09/2020 - 09/2021</div>
						</div>

						<div className="work">
							<img
								src="./linkedin.jpg"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">2 more on my Linkedin profile</div>
							<div className="work-subtitle">
								Previous internships
							</div>
							<div className="work-duration">Long before I can remember</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
