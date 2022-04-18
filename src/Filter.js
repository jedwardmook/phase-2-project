import React from "react";

function Filter(){

    return (
        <div>
            <p>Where do you want to skate? </p>
            <select 
                value="area"
                name="Chicago Area" 
                id="Chicago Area"
                >
                <option value="choose...">choose...</option>
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
            <p>What do you want to skate?</p>
            <div>
                <input type="checkbox" value="slappy curb"/>slappy curb
                <input type="checkbox" value="stairs"/>stairs
                <input type="checkbox" value="ledge"/>ledge
                <input type="checkbox" value="flat ground"/>flat ground<br/>
                <input type="checkbox" value="manual pad"/>manual pad
                <input type="checkbox" value="flat bar"/>flat bar
                <input type="checkbox" value="gap"/>gap
                <input type="checkbox" value="transition"/>transition<br/>
            </div>

            
        </div>
    )
}

export default Filter;