import React from 'react';
import { Container, Image } from 'react-bootstrap';
function About() {
	return (
		<>
			<Container fluid="md" className="aboutContainer">
				<Image src="/images/Pic.jpg" rounded className="pic" />
				Hi there! I'm Peter Young, am a Full Stack Developer with an MA in Sport
				Psychology. I studied Sport Psychology to learn how people perform at
				their best, and transferred those skills in Social Work to solve
				everyday problems. After three-years of reacting to similar crises, I
				wanted a more technically challenging career. Instead of applying
				band-aids, I wanted to proactively create meaningful solutions. That’s
				when I discovered and fell in love with coding. I enjoy the technical
				challenge, the immediate feedback of knowing when the code works, and
				creating tangible results. My code is similar to my work with people:
				looking at the application or person as a whole, with great attention to
				detail, and with the client’s best interest at heart.
				<br />
				<br />I am native to San Francisco and currently reside there with my
				wife and kids. In my spare time, I enjoy Table Tennis, cooking, going
				for walks, and video games.
				<br />
				<br />
				<h2> Skills and Languages</h2>
				<li>Languages: Python, JavaScript, HTML, CSS, SQL, Mongo, JSON </li>
				<li>
					Libraries and Frameworks: React, Express.js, Django, Jquery,
					Bootstrap, Bulma, Material UI
				</li>
				<li>
					Databases and other: PostgreSQL, MongoDB, RESTful Routing, JSON API
				</li>
			</Container>
		</>
	);
}

export default About;
