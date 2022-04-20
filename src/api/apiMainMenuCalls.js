import { keys } from "./apiAuth";

// Get matches for the event from TBA API
export async function getMatchesTBA() {
    return fetch(
        `https://www.thebluealliance.com/api/v3/event/2022new/matches/simple`,
        {
            method: "GET",
            headers: {
                Accept: "application/json",
                "X-TBA-Auth-Key": keys,
            },
        }
    ).then((data) => data.json());
}

export async function getTeamsTBA() {
    return fetch(
        `https://www.thebluealliance.com/api/v3/event/2022new/teams/simple`,
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
        `https://us-central1-overture-scouting-8a16f.cloudfunctions.net/app/api/matchNumbers`,
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
        `https://us-central1-overture-scouting-8a16f.cloudfunctions.net/app/api/updateMatches`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(matchesInfo),
        }
    ).then((data) => data.json());
}

// update the teams for the event in the database
export async function postUpdateTeams(teamsInfo) {
    return fetch(
        `https://us-central1-overture-scouting-8a16f.cloudfunctions.net/app/api/updateTeams`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(teamsInfo),
        }
    ).then((data) => data.json());
}
