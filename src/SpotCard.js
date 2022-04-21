import React from "react";

function SpotCard({spot, handleClickedSpot}){
    const {spotName, spotArea, spotImage, id, spotAddress, flatBar, flatGround, gap, ledge, manualPad, slappyCurb, stair, style, transition} = spot
    
    const handleClick = (e) => {
        handleClickedSpot(spot)
    }

    return (
        <div>
            <div id="spot-card" onClick={handleClick}>
                <img src={spotImage} alt={spotName}></img>
                <h3 id="spot-title">{spotName}</h3>
                <h5>{spotArea}</h5>
                <h6> {style} </h6>
            </div>
        </div>
       )
}

export default SpotCard;