import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { updateTeamMatch } from "../../api/apiMatchesCalls";

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
        <div>
            <h1>Scouting Match: { matchId } Team: { teamId }</h1>
            <form onSubmit={ handleSubmit }>
                <h2>Autonomous</h2>
                <label>
                    Empieza con pelota
                    <input type="checkbox" name="empiezaPelota" onChange={ handleChange } checked={ matchData.empiezaPelota } />
                </label>
                <label>
                    Se mueve
                    <input type="checkbox" name="mueveAutonomo" onChange={ handleChange } checked={ matchData.mueveAutonomo } />
                </label>
                <label>
                    Dispara en Autonomo
                    <input type="checkbox" name="disparaAutonomo" onChange={ handleChange } checked={ matchData.disparaAutonomo } />
                </label>
                <label>
                    Anota
                    <input type="checkbox" name="anotaAutonomo" onChange={ handleChange } checked={ matchData.anotaAutonomo } />
                </label>
                <label>
                    Cuantas pelotas anota
                    <input type="number" name="anotaPelotasAutonomo" onChange={ handleChange } value={ matchData.anotaPelotasAutonomo } />
                </label>
                <label>
                    Human Player Anota
                    <input type="checkbox" name="humanPlayerAnota" onChange={ handleChange } checked={ matchData.humanPlayerAnota } />
                </label>
                <h2>Teleop</h2>
                <label>
                    Se movio
                    <input type="checkbox" name="mueveTeleoperado" onChange={ handleChange } checked={ matchData.mueveTeleoperado } />
                </label>
                <label>
                    Dispara
                    <select name="disparaTeleoperado" onChange={ handleChange } value={ matchData.disparaTeleoperado }>
                        <option value={ "Arriba" }> Arriba </option>
                        <option value={ "Abajo" }> Abajo </option>
                        <option value={ "Ambos" }> Ambos </option>
                    </select>
                </label>
                <label>
                    Cuantas pelotas anoto arriba
                    <input type="number" name="anotaTeleoperadoArriba" onChange={ handleChange } value={ matchData.anotaTeleoperadoArriba } />
                </label>
                <label>
                    Cuantas pelotas anoto abajo
                    <input type="number" name="anotaTeleoperadoAbajo" onChange={ handleChange } value={ matchData.anotaTeleoperadoAbajo } />
                </label>
                <h2>Endgame</h2>
                <label>
                    Que nivel escala
                    <select name="escala" onChange={ handleChange } value={ matchData.escala }>
                        <option value={ "Nivel 1" }> Nivel 1 </option>
                        <option value={ "Nivel 2" }> Nivel 2 </option>
                        <option value={ "No Escala" }> No escala </option>
                    </select>
                </label>
                <label>
                    Que nivel avanza
                    <select name="nivelAvance" onChange={ handleChange } value={ matchData.nivelAvance }>
                        <option value={ "Nivel 3" }> Nivel 3 </option>
                        <option value={ "Nivel 4" }> Nivel 4 </option>
                        <option value={ "Ninguno" }> Ninguno </option>
                    </select>
                </label>
                <h2>Submit</h2>
                <input type="submit" value="Submit" />
            </form>

        </div>
    );
}

export default Scout;