import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom" 

function Spot({clickedSpot}){
    const {spotName, description, spotImage, id, spotAddress, attribute} = clickedSpot
    const {flatBar, flatGround, 
        gap, ledge, manualPad, slappyCurb, stairs, handrail, wallride, transition} = attribute
    let { spotId } = useParams()


    return (
       <div id="spot-details">
            <h1 id="spot-header">{spotName}</h1>
            <img src={spotImage} alt={spotName} id="spot-details-image" />
            <h4 id="spot-address"><strong>Address: </strong>{spotAddress}📍</h4>
            <h6 id="description"><strong>Description:</strong> <br />{description}</h6>
            <h6 id="spot-has">Spot has:</h6>
            <ul id="attributes">
                {flatBar? <li>Flat bar</li> : ''}
                {flatGround? <li>Flat ground</li> : ''}
                {gap? <li>Gap</li> : ''}
                {ledge? <li>Ledges</li> : ''}
                {manualPad? <li>Manual pad</li> : ''}
                {slappyCurb? <li>Slappy curb</li> : ''}
                {stairs? <li>Stairs</li> : ''}
                {transition? <li>Transition</li> : ''}
                {handrail? <li>Handrail</li> : ''}
                {wallride? <li>Wallride</li> : ''}
            </ul>
            <Link to={`/`}><button id="spot-button">Back to Spots</button></Link>
       </div>
    )
}

export default Spot;