import React from "react";

function SpotCard({spot}){
    
    const {spotName, spotImage} = spot
    

    return (
        <div>
            <div id="spot-card">
                <img src={spotImage} alt={spotName}></img>
                <h5 id="spot-title">{spotName}</h5>
            </div>
        </div>
    )
}

export default SpotCard;