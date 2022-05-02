import React from 'react';
import { ListGroupItem, ListGroup, Container } from 'react-bootstrap';

function Footer() {
	return (
		<Container>
			<footer className="footer fixed-bottom">
				<ListGroup horizontal>
					<ListGroupItem
						action
						variant="primary"
						className="d-flex justify-content-center">
						<a href="https://www.linkedin.com/in/pspyoung/">
							LinkedIn <i class="bi bi-linkedin"></i>
						</a>
					</ListGroupItem>
					<ListGroupItem
						action
						variant="success"
						className="d-flex justify-content-center">
						<a href="https://github.com/pspyoung">
							GitHub <i class="bi bi-github"></i>
						</a>
					</ListGroupItem>
					<ListGroupItem
						action
						variant="danger"
						className="d-flex justify-content-center">
						<a href="/resume/PeterResume.pdf">
							Resume <i class="bi bi-file-person"></i>
						</a>
					</ListGroupItem>
					<ListGroupItem
						action
						variant="warning"
						className="d-flex justify-content-center">
						<a href="mailto:pspyoung2@gmail.com">
							Email Me <i class="bi bi-envelope-heart"></i>
						</a>
					</ListGroupItem>
				</ListGroup>
			</footer>
		</Container>
	);
}

export default Footer;
