import React from "react";
import SpotCard from "./SpotCard";

function SpotContainer({filteredSpots}) {

    return (
        <div id="spot-container">
            {filteredSpots.map((spot,id) =>{
                return  <SpotCard
                    spot={spot}
                    key={id}
                    />
                })}
        </div>
    )
}

export default SpotContainer;