import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { getMatches } from "../../api/apiMatchesCalls";
import { LoadingAlt } from "../loading/loading";
import { Stack, Nav, Dropdown, Col, Row, Container } from "react-bootstrap";
import MediaQuery from "react-responsive";

function Matches() {
	const [match, setMatch] = useState();

	useEffect(() => {
		async function getData() {
			const data = await getMatches();

			data.sort((a, b) => a - b);
			setMatch(data);
		}

		if (match === undefined) {
			getData();
		}
	}, [match]);

	if (match === undefined) {
		return <LoadingAlt />
	} else {
		return (
			<>
				<MediaQuery maxWidth={ 450 }>
					<Container className="mt-2">
						<Row>
							<Col xs={ 6 }>
								<Dropdown>
									<Dropdown.Toggle variant="secondary">
										Matches
									</Dropdown.Toggle>
									<Dropdown.Menu style={ {
										maxHeight: "80vh",
										overflowY: "auto",
										flexWrap: "nowrap",
									} }>
										{ match.map(match => {
											return (
												<Dropdown.Item as={ Link } to={ "qm-" + match } key={ match }>{ "Match " + match }</Dropdown.Item>
											)
										}) }
									</Dropdown.Menu>
								</Dropdown>
							</Col>
							<Outlet />
						</Row>
					</Container >
				</MediaQuery>
				<MediaQuery minWidth={ 451 }>
					<Stack gap={ 2 } direction="horizontal" style={ {
						alignItems: "flex-start",
					} }>
						<Nav className="flex-column mr-2" style={ {
							maxHeight: "94vh",
							overflowY: "auto",
							flexWrap: "nowrap",
						} }>
							{ match.map(match => {
								return (
									<Nav.Link as={ Link } to={ "qm-" + match } key={ match }>{ "Match " + match }</Nav.Link>
								)
							}) }
						</Nav>
						<div className="vr" />
						<Outlet />
					</Stack >
				</MediaQuery>
			</>
		);
	}
}

export default Matches;