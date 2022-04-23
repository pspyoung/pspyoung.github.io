import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './Components/About/About';
import Connect from './Components/Connect/Connect';
import SkillsProjects from './Components/SkillsProjects/SkillsProjects';
import Nav from './Components/NavbarComponent/NavbarComponent';
import { Routes, Route, Link } from 'react-router-dom';
import NavbarComponent from './Components/NavbarComponent/NavbarComponent';

function App() {
	return (
		<div className="App">
			{/* <header className="App-header">
				<nav className="App-bar">
					<Link to="/about">
						<h1 className="About"> About</h1>
					</Link>

					<Link to="/skills">
						<h4 className="skills">Skills and Portfolio </h4>
					</Link>

					<Link to="/connect">
						<h4 className="connect">Connect with me!</h4>
					</Link>
				</nav>
			</header> */}
			<NavbarComponent />
			<main className="main">
				<div className="component-container">
					<Routes>
						<Route path="/about" element={<About />} />
						<Route path="/skills" element={<SkillsProjects />} />
						<Route path="/connect" element={<Connect />} />
					</Routes>
				</div>
			</main>
		</div>
	);
}

export default App;
