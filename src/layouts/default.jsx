import React from "react";
import { Container } from "react-bootstrap";

import { Header } from "../components/Header";

export const Default = ({ children }) => {
	return (
		<div>
			<Header />
			<Container
				style={{
					marginTop: "1rem",
				}}
			>
				<main>{children}</main>
			</Container>
		</div>
	);
};
