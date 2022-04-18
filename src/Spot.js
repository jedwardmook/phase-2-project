import React from "react";

function Spot({spot}){
    
    const {spotName, spotArea, spotImage, spotAddress, flatBar, flatGround, gap, ledge, manualPad, slappyCurb, stair, style, transition} = spot
    
    return (
        <div>
            <h1>{spotName}</h1>
            <img src={spotImage} alt={spotName}></img>
            <h2>{spotArea} {style}</h2>
            <h3>📍Address: {spotAddress}</h3>
            <p>Spot has:</p>
            <ul>
            {flatBar? <li>Flat bar</li> : ''}
            {flatGround? <li>Flat ground</li> : ''}
            {gap? <li>Gap</li> : ''}
            {ledge? <li>Ledges</li> : ''}
            {manualPad? <li>Manual pad</li> : ''}
            {slappyCurb? <li>Slappy curb</li> : ''}
            {stair? <li>Stairs</li> : ''}
            {transition? <li>Transition</li> : ''}
            </ul>
        </div>
    )
}

export default Spot;