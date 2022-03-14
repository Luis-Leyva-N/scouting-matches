import React, { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
// import matchScoutingStyles from "./MatchScouting.module.css";

import { getMatchesTeams } from "../../api/apiMatchesCalls";

function Match() {
    const { matchId } = useParams();
    const [matchTeams, setMatchTeams] = useState();

    useEffect(() => {
        async function getData() {
            const data = await getMatchesTeams(matchId);
            setMatchTeams(data);
        }

        getData();
    }, [matchId]);

    return matchTeams ? (
        <div>
            <h1>Match Scout { matchId }</h1>
            { matchTeams.map(matchTeam => {
                return (
                    <Link key={ matchTeam } to={ matchTeam }> { matchTeam + " - " }</Link>
                )
            })
            }
            <Outlet />
        </div>
    ) : (
        <div>Loading...</div>
    )
}

export default Match;