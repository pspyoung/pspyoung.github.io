import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './Components/About/About';
import Connect from './Components/Connect/Connect';
import SkillsProjects from './Components/SkillsProjects/SkillsProjects';
import Nav from './Components/NavbarComponent/NavbarComponent';
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import NavbarComponent from './Components/NavbarComponent/NavbarComponent';

function App() {
	return (
		<div className="App">
			<NavbarComponent />
			<main className="main">
				<div className="component-container">
					<Routes>
						<Route path="/"></Route>
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
