import React from "react";
import SpotCard from "./SpotCard";


function SpotContainer({filteredSpots, setClickedSpot}) {

    const handleClickedSpot = (spot) => {
        console.log(spot)
        setClickedSpot(spot)
    }

    const spotsToDisplay = filteredSpots.map((spot,id) => {
        return  <SpotCard
            spot={spot}
            key={id}
            handleClickedSpot={handleClickedSpot}
            />
    })
    


    return (
        <div id="spot-container">
          {spotsToDisplay}
        </div>
    )
}

export default SpotContainer;