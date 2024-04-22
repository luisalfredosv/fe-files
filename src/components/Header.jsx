import React from "react";
import { Container, Navbar } from "react-bootstrap";

export const Header = () => {
	return (
		<Navbar expand='lg' className='bg-body-tertiary'>
			<Container
				style={{
					backgroundColor: "#ff6666",
				}}
			>
				<Navbar.Brand href='#home' style={{ color: "white" }}>
					React Test App
				</Navbar.Brand>
			</Container>
		</Navbar>
	);
};
