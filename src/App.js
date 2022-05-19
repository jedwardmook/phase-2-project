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
  const [selectedAttributes, setSelectedAttributes] = useState({
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
  

//initial fetch to grab and set spots
  useEffect(() => {
    fetch("http://localhost:3000/spots")
    .then(resp => resp.json())
    .then(spotData => {
      setSpots(spotData)
    })
  }, [])

//function passed to AddForm that adds new spot to spots
  function addNewSpot(newSpotObj){
    setSpots([...spots, newSpotObj])
  }

//funtion passed to Filter that sets SelectedArea
  const filterSelectedArea = (e) => {
    setSelectedArea(e.target.value)
  }
//funtion passed to Filter that sets Attributes
  const filterSelectedAttributes = (e) =>{
    setSelectedAttributes({...selectedAttributes, [e.target.name]:e.target.checked})
  }

//filter that filters spots based on Area
  const filteredSpots = spots
    .filter(spot => {
    if (selectedArea === 'All') 
      return spots
    else
      return spot.spotArea === selectedArea
    })
//filter that takes filteredSpots and filters for selected Attributes
  const evenMoreFilteredSpots = () => {
    if (selectedAttributes.anything === true){
      return filteredSpots
    }else {
      return filteredSpots.filter(spot => {
        let match = false
        for (const attribute in spot.attribute){
          if (selectedAttributes[attribute] && spot.attribute[attribute]){
            match = true
              }else if (selectedAttributes[attribute] && !spot.attribute[attribute]){
            match = false
            break
          }
        }
       return match
    })
  }
  }



  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path='/addspot'>
            <AddForm 
              addNewSpot={addNewSpot}
            />
          </Route>
          <Route exact path='/'>
            <Filter 
              selectedArea={selectedArea}
              filterSelectedArea={filterSelectedArea}
              filterSelectedAttributes={filterSelectedAttributes}
              selectedAttributes={selectedAttributes}
            />
            <SpotContainer 
              filteredSpots={evenMoreFilteredSpots()}
            />
          </Route>
          <Route exact path={`/spots/:spotId`}>
            <Spot />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
