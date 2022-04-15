import React, { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { Nav, Dropdown, Col } from "react-bootstrap";
import { LoadingAlt } from "../loading/loading";
import { getMatchesTeams } from "../../api/apiMatchesCalls";
import MediaQuery from "react-responsive";

function Match() {
	const { matchId } = useParams();
	const [matchTeams, setMatchTeams] = useState();

	useEffect(() => {
		async function getData() {
			const data = await getMatchesTeams(matchId);
			setMatchTeams(data);
		}

		getData();
	}, [matchId]);

	return matchTeams ? (
		<>
			<MediaQuery maxWidth={ 450 }>
				<Col xs={ 6 }>
					<Dropdown>
						<Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
							Teams
						</Dropdown.Toggle>
						<Dropdown.Menu>
							{ matchTeams.map(matchTeam => {
								return (
									<Dropdown.Item as={ Link } to={ matchTeam } key={ matchTeam }>{ matchTeam }</Dropdown.Item>
								)
							}) }
						</Dropdown.Menu>
					</Dropdown>
				</Col>
			</MediaQuery>
			<MediaQuery minWidth={ 451 }>
				<Nav className="flex-column">
					{ matchTeams.map(matchTeam => {
						return (
							<Nav.Link as={ Link } to={ matchTeam } key={ matchTeam }>{ matchTeam }</Nav.Link>
						)
					}) }
				</Nav>
				<div className="vr" />
			</MediaQuery>
			<Outlet />
		</>
	) : (
		<LoadingAlt />

	)
}

export default Match;