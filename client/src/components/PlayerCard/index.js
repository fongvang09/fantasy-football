import React from "react";
import { Redirect } from "react-router-dom";

// const style = {
//     card: {
//         width: "1rem"
       
//     }
// }

function PlayerCard(props) {
    return (
        <>
            {/* <div className="card" style={style.card}> */}
                <div className="card-body">
                    <h5 className="card-title" id="playerName">{props.name}</h5>
                    <p className="card-text" id="playerTeam">{props.team}</p>
                    <p className="card-text" id="playerPostion">{props.position}</p>
                    <a href="/" className="btn btn-primary">Add Player</a>
                </div>
            {/* </div> */}
        </>
    )
};

export default PlayerCard;