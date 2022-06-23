import React from 'react';

import { Container } from 'react-bootstrap';
import { Nav, Navbar } from 'react-bootstrap';

function NavbarComponent() {
	return (
		<Navbar bg="primary" action variant="dark" className="navBar">
			<Container>
				<Navbar.Brand href="/about">About</Navbar.Brand>
				<Nav>
					<Nav.Link href="/projects">Technical Projects</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	);
}

export default NavbarComponent;
