// Get teams for the event from Overture API
export async function getTeams() {
    return fetch(
        `http://localhost:5001/overture-scouting-8a16f/us-central1/app/api/getTeams`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }
    ).then((data) => data.json());
}

// Get teams matches for the event from Overture API
export async function getTeamsMatches(teamId) {
    return fetch(
        `http://localhost:5001/overture-scouting-8a16f/us-central1/app/api/getTeamMatches`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ teamId: teamId }),
        }
    ).then((data) => data.json());
}
