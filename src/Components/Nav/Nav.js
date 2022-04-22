import React from 'react';
import { Link } from 'react-router-dom';
import About from '../About/About';
import Connect from '../Connect/Connect';
import Skills_projects from '../SkillsProjects/SkillsProjects';

function Nav(props) {
	return (
		<div>
			<Link to="/">
				<h6>About</h6>
			</Link>
			<Link to="/skills">
				<h6>Skills and Technical Projects</h6>
			</Link>
			<Link to="/contact">
				<h6>Connect with me!</h6>
			</Link>
		</div>
	);
}

export default Nav;
