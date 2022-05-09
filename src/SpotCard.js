import React from "react";

function SpotCard({spot, setClickedSpot}){
    
    
    const {spotName, spotImage} = spot


    const handleClick = (e) => {
        setClickedSpot(spot)
    }
    

    return (
        <div>
            <div id="spot-card" onClick={handleClick}>
                
                <img src={spotImage} alt={spotName}></img>
                <h5 id="spot-title">{spotName}</h5>
            </div>
            <div>
        </div>
        </div>
        
       )
}

export default SpotCard;