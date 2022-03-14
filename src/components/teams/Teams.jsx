import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

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
            { teams.map(team => {
                return (
                    <Link key={ "frc" + team.number } to={ "frc" + team.number }>{ team.number + ": " + team.name }</Link>
                )
            }) }
            <Outlet />
        </div>
    ) : (
        <div>Loading...</div>
    )
}

export default Teams;