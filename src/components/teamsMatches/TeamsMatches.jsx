import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTeamsMatches } from "../../api/apiTeamsCalls";
import { LoadingAlt } from "../loading/loading";
import BottomTable from "../bottomTable/bottomTable";
import { Table, Stack } from "react-bootstrap";

function TeamsMatches() {
	const { teamId } = useParams();
	const [id, setId] = useState("");
	const [teamsMatches, setTeamsMatches] = useState();

	useEffect(() => {
		async function getData() {
			const data = await getTeamsMatches(teamId);
			setTeamsMatches(data);
		}

		if ((teamsMatches === undefined || teamsMatches) && id !== teamId) {
			getData();
			setId(teamId);
		}
	}, [teamId, teamsMatches, id]);

	return teamsMatches ? (
		<>
			<Stack gap={ 2 }>
				<h1>{ teamId }</h1>
				<Table responsive striped bordered hover >
					<thead>
						<tr>
							<th colSpan={ 5 }>Autonomous</th>
							<th colSpan={ 5 }>Teleop</th>
							<th colSpan={ 2 }>Endgame</th>
						</tr>
					</thead>
					<thead>
						<tr>
							<th>Empieza con pelota</th>
							<th>Se movio</th>
							<th># Disparos</th>
							<th># Anotadas</th>
							<th>Donde Anota</th>
							<th>Se movio</th>
							<th>Dispara Arriba/Abajo</th>
							<th># Disparos</th>
							<th># Anotadas Arriba</th>
							<th># Anotadas Abajo</th>
							<th>Escala</th>
							<th>Avanza</th>
						</tr>
					</thead>
					<tbody>

						{ teamsMatches.map((match) => (
							<tr key={ Math.random() * 100 }>
								{ match.disparaTeleoperado ? (dataDisplay(match)) : (<td colSpan={ 12 }>{ match.team }</td>) }
							</tr>
						)) }
					</tbody>
				</Table>
				{ BottomTable(teamsMatches) }
			</Stack>
		</>
	) : (
		<>
			<LoadingAlt />
		</>
	)
}

function dataDisplay(match) {
	return (
		<>
			{ match.empiezaPelota ? <td>Si</td> : <td>No</td> }
			{ match.mueveAutonomo ? <td>Si</td> : <td>No</td> }
			<td>{ match.cantidadAutonomo }</td>
			<td>{ match.anotaPelotasAutonomo }</td>
			<td>{ match.dondeAnotaAutonomo }</td>
			{ match.mueveTeleoperado ? <td>Si</td> : <td>No</td> }
			<td>{ match.disparaTeleoperado }</td>
			<td>{ match.cantidadDisparosTeleoperado }</td>
			<td>{ match.anotaTeleoperadoArriba }</td>
			<td>{ match.anotaTeleoperadoAbajo }</td>
			<td>{ match.escala }</td>
			<td>{ match.nivelAvance }</td>
		</>
	)
}

export default TeamsMatches;