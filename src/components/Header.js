import React from "react";


function Header(props) {
    return (
        <header>
            <h1>{props.title}</h1>
            <span>Total Players: {props.totalPlayers}</span>
        </header>)
}

export default Header