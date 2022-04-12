import React, { useEffect, useState } from "react";
import { Stack, Button, Image } from "react-bootstrap";
import { Loading } from "../loading/loading";
import Logo from "./logoOverture.png";

import { getMatches, getMatchesTBA, getTeamsTBA, postUpdateMatches, postUpdateTeams } from "../../api/apiMainMenuCalls";

function MainMenu() {
	const [eventData, setEventData] = useState();

	useEffect(() => {
		async function getData() {
			const data = await getMatches();
			setEventData(data.count);
		}
		if (eventData === undefined) {
			getData();
		}
	}, [eventData]);

	// Filter TBA matches data
	function filterMatchTeams(data) {
		let tempData = data.filter(match => match.comp_level === "qm");
		let filteredData = [];
		tempData.forEach(match => {
			filteredData.push({
				comp_level: match.comp_level,
				match_number: match.match_number,
				alliances: {
					red_team_keys: match.alliances.red.team_keys,
					blue_team_keys: match.alliances.blue.team_keys,
				}
			})
		});

		filteredData.sort((a, b) => a.match_number - b.match_number);
		return filteredData;
	}

	// Filter TBA teams data
	function filterTeams(data) {
		let filteredData = [];
		data.forEach(team => {
			filteredData.push({
				team_number: team.team_number,
				key: team.key,
				name: team.nickname,
			})
		});

		filteredData.sort((a, b) => a.team_number - b.team_number);
		return filteredData;
	}

	// Load and Refresh matches for the event
	async function uploadData() {
		setEventData(-1);

		// Upload Team Data
		const teamData = await getTeamsTBA();
		const filteredTeams = filterTeams(teamData);
		postUpdateTeams(filteredTeams);

		// Upload Match Data
		const matchData = await getMatchesTBA();
		const filteredData = filterMatchTeams(matchData);
		postUpdateMatches(filteredData);
		setEventData(1);
	}

	function renderEventData() {
		if (eventData === 0) {
			return <Button variant="primary" className="col-md-5 col-xs-6 mx-auto" onClick={ uploadData }>Load Regional Data</Button>
		} else if (eventData === -1) {
			return <Loading />
		} else {
			return (
				<>
					<Button variant="primary" href="Matches" className="col-md-6 mx-auto">Matches</Button>
					<Button variant="primary" href="Teams" className="col-md-6 mx-auto">Teams Information</Button>
				</>
			);
		}
	}

	return (
		<Stack gap={ 2 } className="col-md-3 col-xs-6 mx-auto">
			<Image src={ Logo } alt="Overture Logo" />
			<h1 className="text-center">Overture Scouting App</h1>
			{ renderEventData() }
		</Stack>
	);
}

export default MainMenu;