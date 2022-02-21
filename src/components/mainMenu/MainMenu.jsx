import React, { useEffect, useState } from "react";
import menuStyles from "../mainMenu/MainMenu.module.css";

import { getMatches, getMatchesTBA, getTeamsTBA, postUpdateMatches, postUpdateTeams } from "../../api/apiMainMenuCalls";

function MainMenu() {
    const [eventData, setEventData] = useState();

    useEffect(() => {
        async function getData() {
            const data = await getMatches();
            setEventData(data.count);
        }
        if (eventData === undefined) {
            getData();
        }
    }, [eventData]);

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

    // Filter TBA teams data
    function filterTeams(data) {
        let filteredData = [];
        data.forEach(team => {
            filteredData.push({
                team_number: team.team_number,
                key: team.key,
                name: team.nickname,
            })
        });

        filteredData.sort((a, b) => a.team_number - b.team_number);
        return filteredData;
    }

    // Load and Refresh matches for the event
    async function uploadData() {
        setEventData(-1);

        // Upload Team Data
        const teamData = await getTeamsTBA();
        const filteredTeams = filterTeams(teamData);
        postUpdateTeams(filteredTeams);

        // Upload Match Data
        const matchData = await getMatchesTBA();
        const filteredData = filterMatchTeams(matchData);
        postUpdateMatches(filteredData);
        setEventData(1);
    }

    if (eventData === 0) {
        return (
            <div className={ menuStyles.mainContainer }>
                <h1>Menu</h1>
                <button onClick={ uploadData }>Load Regional Data</button>
            </div>
        );
    } else if (eventData === -1) {
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