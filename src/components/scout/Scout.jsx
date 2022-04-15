import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { updateTeamMatch } from "../../api/apiMatchesCalls";
import { Form, Button, Container, Row, Col, Stack } from "react-bootstrap";

function Scout() {
	const { matchId, teamId } = useParams();
	const [matchData, setMatchData] = useState({
		matchId: matchId,
		teamId: teamId,
		empiezaPelota: false,
		mueveAutonomo: false,
		disparaAutonomo: false,
		anotaAutonomo: false,
		anotaPelotasAutonomo: 0,
		humanPlayerAnota: false,
		mueveTeleoperado: false,
		disparaTeleoperado: "sinDatos",
		anotaTeleoperadoArriba: 0,
		anotaTeleoperadoAbajo: 0,
		escala: "sinDatos",
		nivelAvance: "sinDatos",
	});

	const handleChange = (e) => {
		const value =
			e.target.type === "checkbox" ? e.target.checked : e.target.value;
		setMatchData({
			...matchData,
			[e.target.name]: value
		});
	}

	async function handleSubmit(e) {
		e.preventDefault();
		await updateTeamMatch(matchData);
	}

	return (
		<>
			<Col>
				<Container>
					<Row className="mt-2">
						<h1>Match: { matchId.replace(/[^0-9]/g, '') } </h1>
						<h1>Team: { teamId.replace(/[^0-9]/g, '') }</h1>
					</Row>
					<Form onSubmit={ handleSubmit }>
						<Container>
							<Row className="mt-2">
								<Col>
									<Stack gap={ 2 }>
										<h2>Autonomous</h2>
										<Form.Check type="switch" label="Empieza con pelota" name="empiezaPelota" onChange={ handleChange } checked={ matchData.empiezaPelota } />
										<Form.Check type="switch" label="Se mueve" name="mueveAutonomo" onChange={ handleChange } checked={ matchData.mueveAutonomo } />
										<Form.Check type="switch" label="Dispara en Autonomo" name="disparaAutonomo" onChange={ handleChange } checked={ matchData.disparaAutonomo } />
										<Form.Check type="switch" label="Anota" name="anotaAutonomo" onChange={ handleChange } checked={ matchData.anotaAutonomo } />
										<Form.Check type="switch" label="Human Player Anota" name="humanPlayerAnota" onChange={ handleChange } checked={ matchData.humanPlayerAnota } />
										<Form.Group>
											<Form.Label>Cuantas pelotas anota</Form.Label>
											<input type="number" name="anotaPelotasAutonomo" onChange={ handleChange } value={ matchData.anotaPelotasAutonomo } />
										</Form.Group>
									</Stack>
								</Col>
								<Col>
									<Stack gap={ 2 }>
										<h2>Teleop</h2>
										<Form.Check type="switch" label="Se movio" name="mueveTeleoperado" onChange={ handleChange } checked={ matchData.mueveTeleoperado } />
										<Form.Select name="disparaTeleoperado" onChange={ handleChange } value={ matchData.disparaTeleoperado }>
											<option >Dispara</option>
											<option value={ "Arriba" }> Arriba </option>
											<option value={ "Abajo" }> Abajo </option>
											<option value={ "Ambos" }> Ambos </option>
										</Form.Select>
										<Form.Group>
											<input type="number" name="anotaTeleoperadoArriba" onChange={ handleChange } value={ matchData.anotaTeleoperadoArriba } />
											Cuantas pelotas anoto arriba
										</Form.Group>
										<Form.Group>
											<input type="number" name="anotaTeleoperadoAbajo" onChange={ handleChange } value={ matchData.anotaTeleoperadoAbajo } />
											Cuantas pelotas anoto abajo
										</Form.Group>
									</Stack>
								</Col>
								<Col>
									<Stack gap={ 2 }>
										<h2>Endgame</h2>
										<Form.Group>
											<Form.Select name="escala" onChange={ handleChange } value={ matchData.escala }>
												<option >Que nivel escala</option>
												<option value={ "Nivel 1" }> Nivel 1 </option>
												<option value={ "Nivel 2" }> Nivel 2 </option>
												<option value={ "No Escala" }> No escala </option>
											</Form.Select>
										</Form.Group>
										<Form.Group>
											<Form.Select name="nivelAvance" onChange={ handleChange } value={ matchData.nivelAvance }>
												<option >Que nivel avanza</option>
												<option value={ "Nivel 3" }> Nivel 3 </option>
												<option value={ "Nivel 4" }> Nivel 4 </option>
												<option value={ "Ninguno" }> Ninguno </option>
											</Form.Select>
										</Form.Group>
									</Stack>
								</Col>
							</Row>
							<Row className="mt-4 mb-4">
								<h2>Submit</h2>
								<Button type="submit" >Submit</Button>
							</Row>
						</Container>
					</Form>
				</Container >
			</Col>
		</>
	);
}

export default Scout;