import React, { useEffect, useState } from "react";
import matchesStyles from "../matches/Matches.module.css";

import { keys } from "../../api/apiAuth";

// Get matches for the event from TBA API
async function getMatches() {
    return fetch(`https://www.thebluealliance.com/api/v3/event/2020mxmo/matches/simple`, {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "X-TBA-Auth-Key": keys,
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