import React from "react";

function SpotCard({spot}){
    const {spotName, spotArea, spotImage, id, spotAddress, flatBar, flatGround, gap, ledge, manualPad, slappyCurb, stair, style, transition} = spot
    
    const handleClick = (e) => {
        console.log(id)
    }

    return (
        <div>
            <div id="spot-card" onClick={handleClick}>
                <img src={spotImage} alt={spotName}></img>
                <h3 id="spot-title">{spotName}</h3>
                <h5>{spotArea}</h5>
                <h6> {style} </h6>
                
                {/* <h5>📍Address: {spotAddress}</h5> */}
                {/* <p>Spot has:</p>
                <ul>
                {flatBar? <li>Flat bar</li> : ''}
                {flatGround? <li>Flat ground</li> : ''}
                {gap? <li>Gap</li> : ''}
                {ledge? <li>Ledges</li> : ''}
                {manualPad? <li>Manual pad</li> : ''}
                {slappyCurb? <li>Slappy curb</li> : ''}
                {stair? <li>Stairs</li> : ''}
                {transition? <li>Transition</li> : ''}
                </ul> */}
            </div>
        </div>
       )
}

export default SpotCard;