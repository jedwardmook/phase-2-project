import React, { useState } from "react";
import { Link } from "react-router-dom";

function SpotCard({spot, handleClickedSpot}){
    
    const {spotName, spotArea, spotImage, id, spotAddress, flatBar, flatGround, gap, ledge, manualPad, slappyCurb, stair, style, transition} = spot
    
    const handleClick = (e) => {
        handleClickedSpot(spot)
    }

    return (
        <div>
            <div id="spot-card" onClick={handleClick}>
                <img src={spotImage} alt={spotName}></img>
                <h5 id="spot-title">{spotName}</h5>
                {/* <h6 id="spot-area">{spotArea}</h6>
                <p> {style} </p> */}
            </div>
        </div>
       )
}

export default SpotCard;