import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './Components/About/About';
import Connect from './Components/Connect/Connect';
import Projects from './Components/Projects/Projects';
import Footer from './Components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import NavbarComponent from './Components/NavbarComponent/NavbarComponent';

function App() {
	return (
		<div className="App">
			<NavbarComponent />
			<main className="main">
				<div className="component-container">
					<Routes>
						<Route path="/" element={<About />} />
						<Route path="/about" element={<About />} />
						<Route path="/projects" element={<Projects />} />
						<Route path="/connect" element={<Connect />} />
					</Routes>
				</div>
			</main>
			<Footer />
		</div>
	);
}

export default App;
