import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/projects.css";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "experiences");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Experiences | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="projects-container">
						<div className="title projects-title">
							Some of the best experiences, for me, for the company, and for you.
						</div>

						<div className="subtitle projects-subtitle">
							I've worked on a variety of projects over the years and I'm proud of the progress I've made. 
							Many of those are open-source and available for others to explore and contribute to, but the
							most recent ones were done on behalf of companies acting on the competitive market of the tech industry.
							<br/>
							As I was exploring other areas than programming, I saw myself as an innovation project manager and a 
							consultant, but my appetite for technical challenge has come back. I am now looking to undertake 
							programming tasks with my favourite technologies, or any other as long as I can work in a team 
							sharing the same passion to perform.
							<br/>
							My favourite picks for the web include Symfony for the backend, and React, Vue, or simply JS Web Components for the frontend.
							Being passionate about how computers work as a whole, I am also eager to take on scripting, or traditional software develoment.
						</div>

						<div className="projects-list" style={{paddingTop: "2em"}}>
							<AllProjects />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Projects;
