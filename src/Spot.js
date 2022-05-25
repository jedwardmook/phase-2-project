import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom" 

function Spot(){
    const [spot, setSpot] = useState(null)

    let spotId = useParams()
    const displaySpot = parseInt(spotId.spotId) 


    useEffect(() => {
    fetch(`http://localhost:3000/spots/${displaySpot}`)
        .then(resp => resp.json())
        .then(spotData => {
            setSpot(spotData)
        })
    }, [])
    

    return (
       spot? <div id="spot-details">
            <h1 id="spot-header">{spot.spotName}</h1>
            <img src={spot.spotImage} alt={spot.spotName} id="spot-details-image" />
            <h4 id="spot-address"><strong>Address: </strong>{spot.spotAddress}📍</h4>
            <h6 id="description"><strong>Description:</strong> <br />{spot.description}</h6>
            <h6 id="spot-has">Spot has:</h6>
            <ul id="attributes">
                {spot.attribute.flatBar && <li>Flat bar</li>}
                {spot.attribute.flatGround && <li>Flat ground</li>}
                {spot.attribute.gap? <li>Gap</li> : ''}
                {spot.attribute.ledge? <li>Ledges</li> : ''}
                {spot.attribute.manualPad? <li>Manual pad</li> : ''}
                {spot.attribute.slappyCurb? <li>Slappy curb</li> : ''}
                {spot.attribute.stairs? <li>Stairs</li> : ''}
                {spot.attribute.transition? <li>Transition</li> : ''}
                {spot.attribute.handrail? <li>Handrail</li> : ''}
                {spot.attribute.wallride? <li>Wallride</li> : ''}
            </ul>
            <Link to={`/`}><button id="spot-button">Back to Spots</button></Link>
       </div> : <h1>Spot loading...</h1>
    )
}

export default Spot;