import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Connect(email, label) {
	return (
		<Container>
			<li>
				<a href="https://www.linkedin.com/in/pspyoung/">LinkedIn</a>
			</li>
			<li>
				<a href="https://github.com/pspyoung">GitHub</a>
			</li>

			<li>
				<a href="/resume/PeterResume.pdf">Resume</a>
			</li>
			<li>
				<a href="mailto:pspyoung2@gmail.com">Email Me</a>
			</li>
		</Container>
	);
}

export default Connect;
