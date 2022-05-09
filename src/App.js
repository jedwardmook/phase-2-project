import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddForm from './AddForm';
import Filter from './Filter';
import Header from './Header';
import SpotContainer from './SpotContainer';
import Spot from './Spot';

function App() {
  const [spots, setSpots] = useState([])
  const [selectedArea, setSelectedArea] = useState('All')
  const [selectedAttribute, setSelectedAttribute] = useState({
    anything: true,
    slappyCurb: false,
    stairs: false,
    ledge: false,
    flatGround: false,
    manualPad: false,
    flatBar: false,
    gap: false,
    transition: false,
    handrail: false,
    wallride: false
  })
  const [clickedSpot, setClickedSpot] = useState({});
  


  useEffect(() => {
    fetch("http://localhost:3000/spots")
    .then(resp => resp.json())
    .then(spotData => {
      setSpots(spotData)
    })
  }, [])

  function addNewSpot(newSpotObj){
    console.log(newSpotObj)
    setSpots([...spots, newSpotObj])
  }

  const filterSelectedArea = (e) => {
    setSelectedArea(e.target.value)
  }

  const filterSelectedAttribute = (e) =>{
    setSelectedAttribute({...selectedAttribute, [e.target.name]:e.target.checked})
  }




  const filteredSpots = spots
    .filter(spot => {
    if (selectedArea === 'All') 
      return spots
    else
      return spot.spotArea === selectedArea})
    .filter(spot => {
      if (selectedAttribute.anything === true){
        return spots
      }
      let match = false
      for (const attribute in spot.attribute)
      if (spot.attribute[attribute] && selectedAttribute[attribute]){
        match = true
      }else if (selectedAttribute[attribute] && !spot.attribute[attribute]){
        match = false
      }
     return match
    })

  

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
          <Route exact path='/addspot'>
        <AddForm 
           addNewSpot={addNewSpot}
        />
        
        </Route>
        <Switch>
          <Route exact path='/'>
          <Filter 
            selectedArea={selectedArea}
            filterSelectedArea={filterSelectedArea}
            filterSelectedAttribute={filterSelectedAttribute}
          />
          <SpotContainer 
            filteredSpots={filteredSpots}
            setClickedSpot={setClickedSpot}
          />
        </Route>
        <Route path={`/spots/details`}>
                <Spot
                    clickedSpot={clickedSpot}
                />

            </Route>
            <Route path={'spots/:spotId'}>
              <Spot />
            </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
