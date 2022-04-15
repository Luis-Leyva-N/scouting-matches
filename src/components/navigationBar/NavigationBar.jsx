import React from "react";
import logoOverture from "./logoSimple.png";
import { Navbar, Container, Nav } from "react-bootstrap";

function NavigationBar() {
	return (
		<>
			<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
				<Container>
					<Navbar.Brand href="/">
						<img
							alt=""
							src={ logoOverture }
							width="30"
							height="30"
							className="d-inline-block align-top"
						/>{ ' ' }
						Overture
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav>
							<Nav.Item>
								<Nav.Link href="/">Home</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link href="/Matches">
									Matches
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link href="/Teams">
									Teams
								</Nav.Link>
							</Nav.Item>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
}

export default NavigationBar;