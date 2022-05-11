import React from "react";
import {Link} from "react-router-dom"
import SpotCard from "./SpotCard";


function SpotContainer({filteredSpots, setClickedSpot}) {

    const linkStyle = {
        textDecoration: "none"
    }
    

    const spotsToDisplay = filteredSpots.map((spot,id) => {
        return  <Link to={`/spots/${spot.id}`} style={linkStyle}>
                    <SpotCard
                    spot={spot}
                    key={id}
                    setClickedSpot={setClickedSpot}
                    />
                </Link>
    })
    


    return (
        <div id="spot-container">
            {spotsToDisplay}
        </div>
    )
}

export default SpotContainer;