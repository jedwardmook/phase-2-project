import React, {useState} from "react";

function AddForm({addNewSpot}) {
    // const [photo, setPhoto] = useState("")
    // const [name, setName] = useState("");
    // const [address, setAddress]= useState("");
    // const [area, setArea]= useState("choose...");
    // const [slappyCurb, setSlappyCurb]= useState(false);
    // const [stairs, setStairs]= useState(false)
    // const [ledge, setLedge]= useState(false)
    // const [flatGround, setFlatGround]= useState(false)
    // const [manualPad, setManualPad]= useState(false)
    // const [flatBar, setFlatBar]= useState(false)
    // const [gap, setGap]= useState(false)
    // const [transition, setTransition]= useState(false)
    // const [handrail, setHandrail]= useState(false)
    // const [wallride, setWallride]= useState(false)
    // const [description, setDescription] = useState('')
    // const [style, setStyle]= useState("street")
       const [spotData, setSpotData] = useState({
            spotImage: '',
            spotName: '',
            spotAddress: '',
            spotArea:'choose...',
            attribute: {
                slappyCurb: false,
                stairs: false,
                ledge: false,
                flatGround: false,
                manualPad: false,
                flatBar: false,
                gap: false,
                transition: false,
                handrail: false,
                wallride: false,
            },
            description: '',
            style: 'street',
        })
    
    function handleChange(e){
        const name = e.target.name;
        let value = e.target.value;

        if (e.target.type === "checkbox"){
            value = e.target.checked
        }

    setSpotData({
            ...spotData,
            [name]: value,
            spotData: {
                ...spotData.attribute,
                [name]:value,
                }
            })
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(spotData)
    //     const newSpotObj= {
    //         spotImage: photo,
    //         spotName: name,
    //         spotAddress: address,
    //         spotArea: area,
    //         slappyCurb: slappyCurb,
    //         stair: stairs,
    //         ledge: ledge,
    //         flatGround: flatGround,
    //         manualPad: manualPad,
    //         flatBar: flatBar,
    //         gap: gap,
    //         transition: transition,
    //         handrail: handrail,
    //         wallride: wallride,
    //         description: description,
    //         style: style,
    //     }
        // fetch("http://localhost:3000/spots", {
        //     method: 'POST',
        //     headers: {
        //         'Content-type' : 'application/json',
        //     },
        //     body: JSON.stringify(newSpotObj)
        // })
        //     .then((resp) => resp.json())
        //     .then((newSpotObj) => {
        // addNewSpot(newSpotObj)
        // })
    }



    return (
        <div>
            <form id="add-form" onSubmit={handleSubmit}>
            <h3 id="title">Add Spot</h3>
             <input 
                id="photo-input"
                name="spotImage"
                type="text" 
                value={spotData.spotImage} 
                placeholder="Add Photo URL"
                onChange={handleChange}
                /><br/>
            <input 
                id="name-input"
                type="text"
                name="spotName"
                value={spotData.spotName} 
                placeholder="Name"
                onChange={handleChange}
                /><br/>
            <input 
                id="address-input"
                type="text" 
                name="spotAddress"
                value={spotData.spotAddress} 
                placeholder="Address"
                onChange={handleChange}
                /><br/>
            <p id="form-area">Chicago area: </p>
            <select 
                value={spotData.spotArea} 
                name="spotArea" 
                id="form-dropdown"
                onChange={handleChange}>
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
            <p id="form-description">Spot description:</p>
            <textarea
                id="form-textarea"
                type="text"
                name="description"
                value={spotData.description} 
                placeholder="Description"
                onChange={handleChange}
                /><br/>
            <p id="form-attributes">Spot has:(select any)</p>
            <div id="attribute-container">
                <input id="attribute-check" type="checkbox" name="slappyCurb" onChange={handleChange} checked={spotData.attribute.slappyCurb} value="slappy curb"/>slappy curb
                <input id="attribute-check" type="checkbox" name="stairs" onChange={handleChange} checked={spotData.attribute.stairs} value="stairs"/>stairs
                <input id="attribute-check" type="checkbox" name="ledge" onChange={handleChange} checked={spotData.attribute.ledge} value="ledge"/>ledge
                <input id="attribute-check" type="checkbox" name="flatGround" onChange={handleChange} checked={spotData.attribute.flatGround} value="flat ground"/>flat ground
                <input id="attribute-check" type="checkbox" name="gap" onChange={handleChange} checked={spotData.attribute.gap} value="gap"/>gap
                <br/>
                <input id="attribute-check" type="checkbox" name="flatBar" onChange={handleChange} checked={spotData.attribute.flatBar} value="flat bar"/>flat bar
                <input id="attribute-check" type="checkbox" name="manualPad" onChange={handleChange} checked={spotData.attribute.manualPad} value="manual pad"/>manual pad
                <input id="attribute-check" type="checkbox" name="transition" onChange={handleChange} checked={spotData.attribute.transition} value="transition"/>transition
                <input id="attribute-check" type="checkbox" name="handrail" onChange={handleChange} checked={spotData.attribute.handrail} value="handrail"/>handrail
                <input id="attribute-check" type="checkbox" name="wallride" onChange={handleChange} checked={spotData.attribute.wallride} value="wallride"/>wallride
                <br/>
            </div>
            <p id="form-style">Spot style:</p>
            <div id="style-container">
                <input type="radio" 
                id="style-radio"
                name="style"
                checked={spotData.style === "street"} 
                onChange={handleChange}
                value="street"
                />
                    street
                <input type="radio"
                id="style-radio"
                name="style"
                checked={spotData.style === "park"}
                onChange={handleChange}
                value="park"
                />
                    park
                <input type="radio" 
                id="style-radio"
                name="style"
                checked={spotData.style === "DIY"}
                onChange={handleChange}
                value="DIY" 
                />
                    DIY
                <br/>
            </div>
            <div id="form-button">
                <button id="spot-submit">Submit</button>
            </div>
           </form>
        </div>

    )
}

export default AddForm;