import React from "react";

function Filter({selectedArea, filterSelectedArea, selectedAttribute, filterSelectedAttribute}){

    return (
        <div id="filter">
            <h4 id="question">Where do you want to skate? </h4>
            <select
                name="Chicago Area" 
                id="dropdown"
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
            </select>
            <h4 id="attribute-question">What do you want to skate? </h4>
            <div id="attribute-filter">
                <input id="attribute-filter-check" type="checkbox" name="slappyCurb" value="slappy curb"/>Slappy Curb
                <br/>
                <input id="attribute-filter-check" type="checkbox" name="stairs" value="stairs"/>Stairs
                <br/>
                <input id="attribute-filter-check" type="checkbox" name="ledge" value="ledge"/>Ledge
                <br/>
                <input id="attribute-filter-check" type="checkbox" name="flatGround" value="flat ground"/>Flat Ground
                <br/>
                <input id="attribute-filter-check" type="checkbox" name="gap" value="gap"/>Gap
                <br/>
                <input id="attribute-filter-check" type="checkbox" name="flatBar" value="flat bar"/>Flat Bar
                <br/>
                <input id="attribute-filter-check" type="checkbox" name="manualPad" value="manual pad"/>Manual Pad
                <br/>
                <input id="attribute-filter-check" type="checkbox" name="transition" value="transition"/>Transition
                <br/>
                <input id="attribute-filter-check" type="checkbox" name="handrail" value="handrail"/>Handrail
                <br/>
                <input id="attribute-filter-check" type="checkbox" name="wallride" value="wallride"/>Wallride
                <br/>
            </div>
        </div>
    )
}

export default Filter;