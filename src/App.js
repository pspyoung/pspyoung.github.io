import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Components/Nav/Nav';
import About from './Components/About/About';
import Connect from './Components/Connect/Connect';
import SkillsProjects from './Components/SkillsProjects/SkillsProjects';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
	return (
		<div className="appBody">
			<header>
				<nav className="=navBar">
					<Link to="/">
						<h6>About</h6>
					</Link>
					<Link to="/skills">
						<h6>Skills and Technical Projects</h6>
					</Link>
					<Link to="/contact">
						<h6>Connect with me!</h6>
					</Link>
				</nav>
			</header>
			<main>
				<Routes>
					<Route path="/" element={<About />} />
					<Route path="/skills" element={<SkillsProjects />} />
					<Route path="/contact" element={<Connect />} />
				</Routes>
			</main>
		</div>
	);
}

export default App;
