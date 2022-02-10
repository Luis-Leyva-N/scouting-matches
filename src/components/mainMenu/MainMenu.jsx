import React from "react";
import menuStyles from "../mainMenu/MainMenu.module.css";

function MainMenu() {
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

export default MainMenu;