import React from "react";

function Filter({selectedArea, filterSelectedArea}){

    return (
        <div id="filter">
            <hr />
            <h3>Where do you want to skate? </h3>
            <select 
                name="Chicago Area" 
                id="Chicago Area"
                onChange={filterSelectedArea}
                value={selectedArea}
                >
                <option value="All">All</option>
                <option value="Far North Side">Far North Side</option>
                <option value="Northwest Side">Northwest Side</option>
                <option value="North Side">North Side</option>
                <option value="Central Chicago">Central Chicago</option>
                <option value="West Side">West Side</option>
                <option value="Southwest Side">Southwest Side</option>
                <option value="South Side">South Side</option>
                <option value="Far Southwest Side">Far Southwest Side</option>
                <option value="Far Southeast Side">Far Southeast Side</option>
            </select><br/>
        </div>
    )
}

export default Filter;