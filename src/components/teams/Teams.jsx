import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { LoadingAlt } from "../loading/loading";
import { getTeams } from "../../api/apiTeamsCalls";
import { Stack, Nav, Container, Row, Col, Dropdown } from "react-bootstrap";
import MediaQuery from "react-responsive";

function Teams() {
	const [teams, setTeams] = useState();

	useEffect(() => {
		async function getData() {
			const data = await getTeams();
			setTeams(data);
		}

		if (teams === undefined) {
			getData();
		}
	}, [teams]);

	return teams ? (
		<>
			<MediaQuery minWidth={ 451 }>
				<Stack gap={ 2 } direction="horizontal" style={ {
					alignItems: "flex-start",
				} }>
					<Nav className="flex-column" style={ {
						maxHeight: "94vh",
						overflowY: "auto",
						flexWrap: "nowrap",
					} }>
						{ teams.map(team => {
							return (
								<Nav.Link as={ Link } key={ "frc" + team.number } to={ "frc" + team.number }>{ team.number + ": " + team.name }</Nav.Link>
							)
						}) }
					</Nav>
					<div className="vr" />
					<Outlet />
				</Stack >
			</MediaQuery>
			<MediaQuery maxWidth={ 450 }>
				<Container className="mt-2">
					<Row>
						<Col xs={ 12 }>
							<Dropdown>
								<Dropdown.Toggle variant="secondary">
									Teams
								</Dropdown.Toggle>
								<Dropdown.Menu style={ {
									maxHeight: "80vh",
									overflowY: "auto",
									flexWrap: "nowrap",
								} }>
									{ teams.map(team => {
										return (
											<Dropdown.Item as={ Link } to={ "frc" + team.number } key={ "frc" + team.number }>{ team.number + ": " + team.name }</Dropdown.Item>
										)
									}) }
								</Dropdown.Menu>
							</Dropdown>
						</Col>
						<Outlet />
					</Row>
				</Container >
			</MediaQuery>
		</>
	) : (
		<>
			<LoadingAlt />
		</>
	)
}

export default Teams;