import React from "react";
import "./style.css";

function Header(props){

        return (
            <nav className="navbar sticky-top text-white">
                <h2>Clicky Game</h2>
                <div style={{ margin: '30px' }}><h5>Score: {props.score}</h5></div>
                <div style={{ margin: '30px' }}><h5>Hi-Score: {props.highscore}</h5></div>
            </nav>
             
        )
    
};

export default Header;

