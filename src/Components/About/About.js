import React from 'react';
import { Container } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
function About() {
	return (
		<Container fluid="md" className="aboutContainer">
			<Image src="/images/Pic.jpg" rounded className="pic" />I am a Full Stack
			Developer with an MA in Sport Psychology. I studied Sport Psychology to
			learn how people perform at their best, and transferred those skills in
			Social Work to solve everyday problems. After three-years of reacting to
			similar crises, I wanted a more technically challenging career. Instead of
			applying band-aids, I wanted to proactively create meaningful solutions.
			That’s when I discovered and fell in love with coding. I enjoy the
			technical challenge, the immediate feedback of knowing when the code
			works, and creating tangible results. My code is similar to my work with
			people: looking at the application or person as a whole, with great
			attention to detail, and with the client’s best interest at heart.
		</Container>
	);
}

export default About;
