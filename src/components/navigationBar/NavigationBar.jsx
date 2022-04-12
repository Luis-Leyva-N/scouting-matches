import React from "react";
import logoOverture from "./logoSimple.png";
import { Navbar, Container } from "react-bootstrap";

function NavigationBar() {
	return (
		<>
			<Navbar bg="dark" variant="dark">
				<Container>
					<Navbar.Brand href="#home">
						<img
							alt=""
							src={ logoOverture }
							width="30"
							height="30"
							className="d-inline-block align-top"
						/>{ ' ' }
						React Bootstrap
					</Navbar.Brand>
				</Container>
			</Navbar>
		</>
	);
}

export default NavigationBar;