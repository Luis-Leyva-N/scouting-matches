import React, { useEffect, useState } from "react";

import { getTeams } from "../../api/apiTeamsCalls";

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
        <div>
            <h1>Team</h1>

        </div>
    ) : (
        <div>Loading...</div>
    )
}

export default Teams;