import React from 'react';

import { Container } from 'react-bootstrap';
import { Nav, Navbar } from 'react-bootstrap';

function NavbarComponent() {
	return (
		<Navbar bg="primary" variant="dark" className="navBar">
			<Container>
				<Navbar.Brand href="/about">About</Navbar.Brand>
				<Nav className="me-auto">
					{/* <Nav.Link href="/about">About</Nav.Link> */}
					<Nav.Link href="/skills">Skills and Technical Projects</Nav.Link>
					<Nav.Link href="/connect">Connect with me!</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	);
}

export default NavbarComponent;
