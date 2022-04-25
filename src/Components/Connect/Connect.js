import React from 'react';
import { Container, ListGroup, ListGroupItem } from 'react-bootstrap';

function Connect(email, label) {
	return (
		<Container>
			<h2 className="d-flex justify-content-center">
				I'm happy to connect! Please feel free to reach out any time.
			</h2>
			<ListGroup horizontal>
				<ListGroupItem
					action
					variant="primary"
					className="d-flex justify-content-center">
					<a href="https://www.linkedin.com/in/pspyoung/">LinkedIn</a>
				</ListGroupItem>
				<ListGroupItem
					action
					variant="success"
					className="d-flex justify-content-center">
					<a href="https://github.com/pspyoung">GitHub</a>
				</ListGroupItem>

				<ListGroupItem
					action
					variant="danger"
					className="d-flex justify-content-center">
					<a href="/resume/PeterResume.pdf">Resume</a>
				</ListGroupItem>
				<ListGroupItem
					action
					variant="warning"
					className="d-flex justify-content-center">
					<a href="mailto:pspyoung2@gmail.com">Email Me</a>
				</ListGroupItem>
			</ListGroup>
		</Container>
	);
}

export default Connect;
