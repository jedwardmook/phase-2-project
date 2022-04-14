import React, {useState} from "react";

function AddForm({addNewSpot}) {
    const [photo, setPhoto] = useState("")
    const [name, setName] = useState("");
    const [address, setAddress]= useState("");
    const [area, setArea]= useState("choose...");
    const [slappyCurb, setSlappyCurb]= useState(false);
    const [stairs, setStairs]= useState(false)
    const [ledge, setLedge]= useState(false)
    const [flatGround, setFlatGround]= useState(false)
    const [manualPad, setManualPad]= useState(false)
    const [flatBar, setFlatBar]= useState(false)
    const [gap, setGap]= useState(false)
    const [transition, setTransition]= useState(false)
    const [style, setStyle]= useState("street")


    function handleSubmit(e){
        e.preventDefault()
        const newSpotObj= {
            spotImage: photo,
            spotName: name,
            spotAddress: address,
            spotArea: area,
            slappyCurb: slappyCurb,
            stair: stairs,
            ledge: ledge,
            flatGround: flatGround,
            manualPad: manualPad,
            flatBar: flatBar,
            gap: gap,
            transition: transition,
            style: style,
        }
        fetch("http://localhost:3000/spots", {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json',
            },
            body: JSON.stringify(newSpotObj)
        })
            .then((resp) => resp.json())
            .then((newSpotObj) => {
        addNewSpot(newSpotObj)
        })
    }



    return (
        <div>
            <form onSubmit={handleSubmit}>
             <input 
                type="text" 
                value={photo} 
                placeholder="Add Photo URL"
                onChange={(e) => setPhoto(e.target.value)}
                /><br/>
            <input 
                type="text" 
                value={name} 
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                /><br/>
            <input 
                type="text" 
                value={address} 
                placeholder="Address"
                onChange={(e) => setAddress(e.target.value)}
                /><br/>
            <label for="Chicago Area">Chicago Area: </label>
            <select 
                value={area} 
                name="Chicago Area" 
                id="Chicago Area"
                onChange={(e) => setArea(e.target.value)}>
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
            <p>Spot has:(select any)</p>
            <div>
            <input type="checkbox" onChange={(e) => setSlappyCurb(!slappyCurb)} checked={slappyCurb} value="slappy curb"/>slappy curb
            <input type="checkbox" onChange={(e) => setStairs(!stairs)} checked={stairs} value="stairs"/>stairs
            <input type="checkbox" onChange={(e) => setLedge(!ledge)} checked={ledge} value="ledge"/>ledge
            <input type="checkbox" onChange={(e) => setFlatGround(!flatGround)} checked={flatGround} value="flat ground"/>flat ground<br/>
            <input type="checkbox" onChange={(e) => setManualPad(!manualPad)} checked={manualPad} value="manual pad"/>manual pad
            <input type="checkbox" onChange={(e) => setFlatBar(!flatBar)} checked={flatBar} value="flat bar"/>flat bar
            <input type="checkbox" onChange={(e) => setGap(!gap)} checked={gap} value="gap"/>gap
            <input type="checkbox" onChange={(e) => setTransition(!transition)} checked={transition} value="transition"/>transition<br/>
            </div>
            <p>Spot style:</p>
            <div>
            <input type="radio" 
                checked={style === "street"} 
                onChange={(e) => setStyle(e.target.value)}
                value="street"/>
            street
            <input type="radio" 
                checked={style === "park"}
                onChange={(e) => setStyle(e.target.value)}
                value="park"/>
            park
            <input type="radio" 
                checked={style === "DIY"}
                onChange={(e) => setStyle(e.target.value)} 
                value="DIY"/>
            d.i.y.<br/>
            </div>
            <button>submit</button>
           </form>
        </div>

    )
}

export default AddForm;