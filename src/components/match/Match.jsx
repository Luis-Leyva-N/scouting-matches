import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import matchScoutingStyles from "./MatchScouting.module.css";

function Match() {
    const { matchId } = useParams();
    return (
        <div>
            <h1>Match Scout { matchId }</h1>
        </div>
    );
}

export default Match;