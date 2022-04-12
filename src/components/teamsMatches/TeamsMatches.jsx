import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTeamsMatches } from "../../api/apiTeamsCalls";

function TeamsMatches() {
	const { teamId } = useParams();
	const [teamsMatches, setTeamsMatches] = useState();

	useEffect(() => {
		async function getData() {
			const data = await getTeamsMatches(teamId);
			console.log(data);
			setTeamsMatches(data);
		}

		if (teamsMatches === undefined) {
			getData();
		}
	}, [teamId, teamsMatches]);

	return teamsMatches ? (
		<div>
			<h1>Team Matches</h1>
			<div className="teams-container">

			</div>

		</div>
	) : (
		<div>Loading...</div>
	)
}

export default TeamsMatches;