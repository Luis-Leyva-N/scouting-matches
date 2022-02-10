// Import libraries
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import Components
import Matches from "./components/matches/Matches";
import MainMenu from "./components/mainMenu/MainMenu";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<MainMenu />} />
                <Route path="/Matches" element={<Matches />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
