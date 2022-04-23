import React from 'react';
import { Container } from 'react-bootstrap';

function Skills_projects() {
	return (
		<Container>
			<h2>Technical Skills</h2>
			<li>Languages: Python, JavaScript, HTML, CSS, SQL, Mongo, JSON </li>

			<li>
				Libraries and Frameworks: React, Express.js, Django, Jquery, Bootstrap,
				Bulma, Material UI
			</li>
			<li>
				Databases and other: PostgreSQL, MongoDB, RESTful Routing, JSON API
			</li>

			<h2>Technical Projects</h2>

			<p>
				pongScores - GitHub | App -
				<span>
					JavaScript, MongoDB/Mongoose.js, Express, React, Node.js, MaterialUI{' '}
				</span>
				App that allows users to add, edit, and keep track of players’ Table
				Tennis match records. Created an app with full CRUD functionality on
				front end and back end. Lists players through drop down bars. All player
				and match data automatically update to the backend.
			</p>

			<p>
				Pomodoro App - GitHub | App - JavaScript, HTML, CSS,
				MongoDB/Mongoose.js, Express, React, Node.js Pomodoro app that keeps
				track of study and break timers and updates user input tasks. Created a
				single page app with a visual countdown timer that automatically
				switches between task and break. Timer task data is created and edited
				on the application page and data gets sent to the backend.
			</p>

			<p>
				Clash Royale Cards API - GitHub | App - JavaScript, HTML, CSS, React
				Gives users a lightweight and easy-to-use access app to research Clash
				Royale card stats. Built a multi-page application that categorizes types
				of cards that have links to additional information. Gathered data from
				the RoyaleAPI to list all information about cards
			</p>

			<p>
				I’m Beary Excited! - GitHub | App - JavaScript, HTML, CSS, Bulma A
				tamogotchi type game, where the user keeps the bear alive while watching
				it grow. Bad bear puns included. Created visual timer bars that decrease
				automatically and increase with user clicks. Initiated Victory Game
				Over, and Game Stage messages triggered when conditions are met.
			</p>
		</Container>
	);
}

export default Skills_projects;
