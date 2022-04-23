import React from 'react';

import { Container } from 'react-bootstrap';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import About from '../About/About';
import Connect from '../Connect/Connect';
import Skills_projects from '../SkillsProjects/SkillsProjects';

function NavbarComponent() {
	return (
		<>
			<Navbar bg="primary" variant="dark">
				<Container>
					<Navbar.Brand href="#home">Navbar</Navbar.Brand>
					<Nav className="me-auto">
						<Nav.Link href="/">About</Nav.Link>
						<Nav.Link href="/skills">Skills and Technical Projects</Nav.Link>
						<Nav.Link href="/connect">Connect with me!</Nav.Link>
					</Nav>
				</Container>
			</Navbar>

			{/* <div>
				<Link to="/">
					<h6>About</h6>
				</Link>
				<Link to="/skills">
					<h6>Skills and Technical Projects</h6>
				</Link>
				<Link to="/contact">
					<h6>Connect with me!</h6>
				</Link>
			</div> */}
		</>
	);
}

export default NavbarComponent;
