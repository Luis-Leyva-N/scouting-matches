// Import libraries
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import Components
import Matches from "./components/matches/Matches";
import Match from "./components/match/Match";
import Scout from "./components/scout/Scout";
import MainMenu from "./components/mainMenu/MainMenu";
// import Teams from "./components/teams/Teams";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<MainMenu />} />
                <Route path="Matches" element={<Matches />}>
                    <Route path=":matchId" element={<Match />}>
                        <Route path=":teamId" element={<Scout />} />
                    </Route>
                </Route>
                {/* <Route path="/Teams" element={<Teams />} /> */}
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
