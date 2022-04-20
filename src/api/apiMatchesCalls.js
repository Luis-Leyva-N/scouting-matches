// Get matches for the event from Overture API
export async function getMatches() {
    return fetch(
        `https://us-central1-overture-scouting-8a16f.cloudfunctions.net/app/api/getMatches`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }
    ).then((data) => data.json());
}

// Get Matches Teams for the event from Overture API
export async function getMatchesTeams(match_number) {
    return fetch(
        `https://us-central1-overture-scouting-8a16f.cloudfunctions.net/app/api/getMatchesTeams`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ match_number: match_number }),
        }
    ).then((data) => data.json());
}

export async function updateTeamMatch(data) {
    return fetch(
        `https://us-central1-overture-scouting-8a16f.cloudfunctions.net/app/api/updateTeamResults`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }
    ).then((data) => data.json());
}
