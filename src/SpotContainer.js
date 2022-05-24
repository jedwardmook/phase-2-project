import React from "react";
import {Link} from "react-router-dom"
import SpotCard from "./SpotCard";


function SpotContainer({filteredSpots}) {

    const linkStyle = {
        textDecoration: "none"
    }
    

    const spotsToDisplay = filteredSpots.map((spot,id) => {
        return  <Link to={`/spots/${spot.id}`} style={linkStyle}>
                    <SpotCard
                    spot={spot}
                    key={id}
                    />
                </Link>
    })
    

    return (
        <div id="spot-container">
            {spotsToDisplay.length > 0? 
                spotsToDisplay : <div><h1 id="nospots">No spots to display</h1><p id="nospots-p">Select a different area/attribute</p></div>}
        </div>
    )
}

export default SpotContainer;