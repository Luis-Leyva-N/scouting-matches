import React, { useEffect, useState } from "react";
import matchesStyles from "../matches/Matches.module.css";

import { keys } from "../../api/apiAuth";

// Get matches for the event from TBA API
async function getMatches() {
    return fetch(`https://frc-api.firstinspires.org/v3.0/event/2020mxmo/matches/simple`, {
        mode: "no-cors",
        method: "GET",
        headers: {
            "accept": "application/json",
            "Authorization": `Basic ${keys.frcEn}`,
        },
    }).then((data) => data.json());
}

function Matches() {
    const [matches, setMatches] = useState();

    useEffect(() => {
        async function getData() {
            const data = await getMatches();
            console.log(data);
        }
        if (!matches) {
            getData();
        }
    }, [matches]);

    return (
        <div className={ matchesStyles.mainContainer }>
            <h1>Matches Prueba</h1>
        </div>
    );
}

export default Matches;