import React from 'react';
import { Container, Badge } from 'react-bootstrap';

function Skills_projects() {
	return (
		<Container>
			<h1 className="d-flex justify-content-center">
				<Badge bg="info">Technical Skills</Badge>
			</h1>
			<li>Languages: Python, JavaScript, HTML, CSS, SQL, Mongo, JSON </li>

			<li>
				Libraries and Frameworks: React, Express.js, Django, Jquery, Bootstrap,
				Bulma, Material UI
			</li>
			<li>
				Databases and other: PostgreSQL, MongoDB, RESTful Routing, JSON API
			</li>

			<h1 className="d-flex justify-content-center">
				<Badge bg="info">Technical Projects</Badge>
			</h1>

			{/* Projects Begins here */}
			<p>
				<h5>
					pongScores -{''} <a href="https://github.com/pongScores">GitHub</a>,{' '}
					<a href="https://pongscores.netlify.app/">App</a>{' '}
				</h5>{' '}
				<section className="technologies">
					JavaScript, MongoDB/Mongoose.js, Express, React, Node.js, MaterialUI
				</section>
				<section className="projectDesc">
					App that allows users to add, edit, and keep track of players’ Table
					Tennis match records.
				</section>
				<li>
					Created an app with full CRUD functionality on front end and back end.
				</li>
				<li>
					Lists players through drop down bars. All player and match data
					automatically update to the backend.
				</li>
			</p>

			<p>
				<h5>
					Pomodoro App - <a href="https://github.com/Team-Clippers">GitHub</a>,{' '}
					<a href="https://pomodoro176.netlify.app/">App</a>
				</h5>
				<section className="technologies">
					JavaScript, HTML, CSS, MongoDB/Mongoose.js, Express, React, Node.js
				</section>
				<section className="projectDesc">
					Pomodoro app that keeps track of study and break timers and updates
					user input tasks.
				</section>
				<li>
					Created a single page app with a visual countdown timer that
					automatically switches between task and break.
				</li>
				<li>
					Timer task data is created and edited on the application page and data
					gets sent to the backend.
				</li>
			</p>

			<p>
				<h5>
					Clash Royale Cards API -{' '}
					<a href="https://github.com/pspyoung/bootcamp-project-one">GitHub</a>,{' '}
					<a href="https://crcardsapi.netlify.app/">App</a>
				</h5>
				<section className="technologies">JavaScript, HTML, CSS, React</section>
				<section className="projectDesc">
					Gives users a lightweight and easy-to-use access app to research Clash
					Royale card stats.
				</section>
				<li>
					Built a multi-page application that categorizes types of cards that
					have links to additional information.
				</li>
				<li>
					Gathered data from the RoyaleAPI to list all information about cards.
				</li>
			</p>

			<p>
				<h5>
					I’m Beary Excited! -{' '}
					<a href="https://github.com/pspyoung/Bootcamp-project-zero">GitHub</a>
					, <a href="https://pspyoung.github.io/Bootcamp-project-zero/">App</a>
				</h5>
				<section className="technologies">JavaScript, HTML, CSS, Bulma</section>
				<section className="projectDesc">
					A tamogotchi type game, where the user keeps the bear alive while
					watching it grow. Bad bear puns included.
				</section>
				<li>
					Created visual timer bars that decrease automatically and increase
					with user clicks.
				</li>

				<li>
					Initiated Victory Game Over, and Game Stage messages triggered when
					conditions are met.
				</li>
			</p>
		</Container>
	);
}

export default Skills_projects;
