import React from "react";
import Spot from "./Spot";

function SpotContainer({spots}) {

    
    
    return (
        <div>
            {spots.map((spot,id) =>{
                return  <Spot
                    spot={spot}
                    key={id}
                    />
                })}
        </div>
    )
}

export default SpotContainer;