import "./App.css";
import { Container, Navbar } from "react-bootstrap";

function App() {
	return (
		<div>
			<Navbar expand='lg' className='bg-body-tertiary'>
				<Container>
					<Navbar.Brand href='#home'>React Test App</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
				</Container>
			</Navbar>
		</div>
	);
}

export default App;
