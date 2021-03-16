import React from "react";

function PlayerCard(props) {
    return (
        <>
            <div className="card" style="width: 18rem;">
                    <div className="card-body">
                        <h5 className="card-title" id="playerName">{props.name}</h5>
                        <p className="card-text" id="playerTeam">{props.team}</p>
                        <p className="card-text" id="playerPostion">{props.position}</p>
                        <a href="#" className="btn btn-primary">Add Player</a>
                    </div>
            </div>
        </>
    )
};

export default PlayerCard;