import React from "react";
import Counter from "./Counter";

function Player(props) {
    return (
        <div className="player">
            <div className="player-name">
                <button onClick={() => props.deleteData(props.id)} className="remove-player" >✖</button>
                {props.name}
            </div>
            <Counter index={props.index} score={props.score} changeScore={props.changeScore} />
        </div>

    )
}
export default Player