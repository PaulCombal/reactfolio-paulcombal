import React from "react";

function article_1() {
	return {
		date: "10 Jan 2024",
		title: "My portfolio site is up!",
		description:
			"I finally decided to make my own portfolio website! It is open-source and hosted on Github..",
		keywords: [
			"Portfolio",
			"PaulCombal",
			"Paul Combaldieu",
			"Developer",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">My portfolio website is up!</div>
					<div>
						I finally set up my portfolio website. It is hosted on Github pages.
						The repo url is <a href="https://github.com/PaulCombal/reactfolio-paulcombal" rel="noreferrer" target="_blank">here</a>. 
						Credit where credit is due, this website is forked from truethari/reactfolio , and the icons and art from Freepik and Open Peeps.
						The main homepage image is from Unsplash.

						<br/>

						If you have any suggestion for improvement or spot any mistake, feel free to contact me!
					</div>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "10 Jan 2024",
		title: "My preferred tech stacks",
		description:
			"Do you want to know what my best picks would be?",
		style: ``,
		keywords: [
			"Web",
			"Tech stacks",
			"Paul Combaldieu",
			"Software",
		],
		body: (
			<React.Fragment>
				<h1>What tech stacks do I enjoy the most?</h1>
				<div className="paragraph">
					I like software development, as a matter of fact, I am driven by the passion to get 
					as close to the machine than I can. That's why for example I retroengineered Steam 
					to write SamRewritten in C++.
					<br/>
					But in today's world, I am looking for a remote job, and web technologies are where 
					I will get my best chances. I am a fullstack developer with a preference for business
					logic and backend development. My preferred framework for the backend is Symfony.
					We used to make fun of PHP but today with php8, the language is very up-to-date
					runtime and feature-wise.
					<br/>
					I would be very interested in checking out API Platform, as it looks very powerful 
					combined with NextJs.
					<br/>
					Speaking of which, I am not much of a frontend person, but I like using the popular
					frameworks, React, Vue, and Svelte. I find interesting that JS Web Components are
					already powerful out-of-the-box, yet nobody uses them. I also think angular stinks.
					<br/>
					I would be very curious to try metaframeworks like NextJs, Gatsby, Astro, etc.
					<br/>
					I also have experience with other stacks like Node, Go, .NET Core, and more. 
					While I was working, I also had the opportunity to learn about mobile apps 
					with Ionic and React Native.
					<br/>
					Do you agree with my likings?
				</div>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
