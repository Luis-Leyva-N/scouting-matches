import React, { useEffect, useState } from "react";
import menuStyles from "../mainMenu/MainMenu.module.css";

import { getMatches, getMatchesTBA, postUpdateMatches } from "../../api/apiCalls";

function MainMenu() {
    const [matches, setMatches] = useState();

    useEffect(() => {
        async function getData() {
            const data = await getMatches();
            setMatches(data.count);
        }
        if (matches === undefined) {
            getData();
        }
    }, [matches]);

    // Filter TBA matches data
    function filterMatchTeams(data) {
        let tempData = data.filter(match => match.comp_level === "qm");
        let filteredData = [];
        tempData.forEach(match => {
            filteredData.push({
                comp_level: match.comp_level,
                match_number: match.match_number,
                alliances: {
                    red_team_keys: match.alliances.red.team_keys,
                    blue_team_keys: match.alliances.blue.team_keys,
                }
            })
        });

        filteredData.sort((a, b) => a.match_number - b.match_number);
        return filteredData;
    }

    // Load and Refresh matches for the event
    async function uploadData() {
        setMatches(-1);
        const data = await getMatchesTBA();
        const number = data.filter(match => match.comp_level === "qm").length;
        const filteredData = filterMatchTeams(data);
        postUpdateMatches(filteredData);
        setMatches(number);
    }

    async function downloadData() { }

    if (matches === 0) {
        return (
            <div className={ menuStyles.mainContainer }>
                <h1>Menu</h1>
                <button onClick={ uploadData }>Load Regional Data</button>
            </div>
        );
    } else if (matches === -1) {
        return (
            <div className={ menuStyles.mainContainer }>
                <h1>Menu</h1>
                <p>Loading...</p>
            </div>
        );
    } else {
        return (
            <div className={ menuStyles.mainContainer }>
                <h1>Menu Principal</h1>
                <div className={ menuStyles.buttonContainer }>
                    {/* Add CSS and hrefs */ }
                    <a href="Teams">Teams Information</a>
                    <a href="Matches">Scout Matches</a>
                </div>
            </div >
        );
    }
}

export default MainMenu;