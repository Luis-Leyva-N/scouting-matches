// import { keys } from "./apiAuth";

// Get matches for the event from Overture API
export async function getMatches() {
    return fetch(
        `http://localhost:5001/overture-scouting-8a16f/us-central1/app/api/getMatches`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }
    ).then((data) => data.json());
}
