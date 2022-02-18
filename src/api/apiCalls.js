import { keys } from "./apiAuth";

// Get matches for the event from TBA API
export async function getMatchesTBA() {
    return fetch(
        `https://www.thebluealliance.com/api/v3/event/2020mxmo/matches/simple`,
        {
            method: "GET",
            headers: {
                Accept: "application/json",
                "X-TBA-Auth-Key": keys,
            },
        }
    ).then((data) => data.json());
}

// Get matches for the event from Overture API
export async function getMatches() {
    return fetch(
        `http://localhost:5001/overture-scouting-8a16f/us-central1/app/api/matchNumbers`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }
    ).then((data) => data.json());
}

// Update the matches for the event in the database
export async function postUpdateMatches(matchesInfo) {
    return fetch(
        `http://localhost:5001/overture-scouting-8a16f/us-central1/app/api/updateMatches`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(matchesInfo),
        }
    ).then((data) => data.json());
}
