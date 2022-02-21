import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import matchesStyles from "../matches/Matches.module.css";

import { getMatches } from "../../api/apiMatchesCalls";

function Matches() {
    const [match, setMatch] = useState();

    useEffect(() => {
        async function getData() {
            const data = await getMatches();

            data.sort((a, b) => a - b);
            setMatch(data);
        }

        if (match === undefined) {
            getData();
        }
    }, [match]);

    if (match === undefined) {
        return <div>Loading...</div>
    } else {
        return (
            <div className={ matchesStyles.mainContainer }>
                <h1>Matches</h1>
                <div className={ matchesStyles.matchContainer }>
                    { match.map(match => {
                        return (
                            <Link key={ match } to={ "qm-" + match } className={ matchesStyles.matchNumber }>{ match }</Link>
                        )
                    }) }
                </div>
                <Outlet />
            </div>
        );
    }
}

export default Matches;