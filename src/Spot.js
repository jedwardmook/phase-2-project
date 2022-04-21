import React from "react";

function Spot({clickedSpot}){
    const {spotName, description, spotImage, id, spotAddress, flatBar, flatGround, 
        gap, ledge, manualPad, slappyCurb, stair, handrail, wallride, transition} = clickedSpot

    return (
       <div>
           <img src={spotImage} alt={spotName} />
           <h1>{spotName}</h1>
           <h3>{spotAddress}</h3>
           <h4>{description}</h4>
           <ul>
                {flatBar? <li>Flat bar</li> : ''}
                {flatGround? <li>Flat ground</li> : ''}
                {gap? <li>Gap</li> : ''}
                {ledge? <li>Ledges</li> : ''}
                {manualPad? <li>Manual pad</li> : ''}
                {slappyCurb? <li>Slappy curb</li> : ''}
                {stair? <li>Stairs</li> : ''}
                {transition? <li>Transition</li> : ''}
                {handrail? <li>Handrail</li> : ''}
                {wallride? <li>Wallride</li> : ''}
           </ul>
       </div>
    )
}

export default Spot;