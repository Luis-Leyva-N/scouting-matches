import React, { useState } from "react";
import { useParams } from "react-router-dom";

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
        agarraPelotas: "sinDatos",
        disparaTeleoperado: "sinDatos",
        anotaTeleoperadoArriba: 0,

    });

    return (
        <div>
            <h1>Scouting Match: { matchId } Team: { teamId }</h1>
            <form action="">
                <h2>Autonomous</h2>
                <label>
                    Empieza con pelota
                    <input type="checkbox" value={ matchData.empiezaPelota } />
                </label>
                {/* Preguntar */ }
                <label>
                    Se mueve
                    <input type="checkbox" value={ matchData.mueveAutonomo } />
                </label>
                <label>
                    Dispara en Autonomo
                    <input type="checkbox" value={ matchData.disparaAutonomo } /> Arriba
                </label>
                <label>
                    Anota
                    <input type="checkbox" value={ matchData.anotaAutonomo } />
                </label>
                <label>
                    Cuantas pelotas anota
                    <input type="number" value={ matchData.anotaPelotasAutonomo } />
                </label>
                <label>
                    Human Player Anota
                    <input type="checkbox" value={ matchData.humanPlayerAnota } />
                </label>
                <h2>Teleop</h2>
                <label>
                    Se movio
                    <input type="checkbox" value={ matchData.mueveTeleoperado } />
                </label>
                <label>
                    Dispara
                    <input type="checkbox" />Arriba
                    <input type="checkbox" />Abajo
                </label>
                <label>
                    Cuantas pelotas anoto arriba
                    <input type="number" min="0" />
                </label>
                <label>
                    Cuantas pelotas anoto abajo
                    <input type="number" min="0" />
                </label>
                <h2>Endgame</h2>
                <label>
                    Escala
                    <input type="checkbox" />
                </label>
                <label>
                    Que nivel
                    <input type="radio" /> Nivel 1
                    <input type="radio" /> Nivel 2
                    <input type="radio" /> No escala
                </label>
                <label>
                    Avanza
                    <input type="checkbox" />
                </label>
                <label>
                    Que nivel
                    <input type="radio" /> Nivel 3
                    <input type="radio" /> Nivel 4
                    <input type="radio" /> Ninguno
                </label>
                <h2>Submit</h2>
                <input type="submit" value="Submit" />
            </form>

        </div>
    );
}

export default Scout;