import React, { useState, useEffect } from 'react';
import { Route } from "react-router-dom";
import AddForm from './AddForm';
import Filter from './Filter';
import Header from './Header';
import SpotContainer from './SpotContainer';

function App() {
  const [spots, setSpots] = useState([])
  const [selectedArea, setSelectedArea] = useState('All')
  
  useEffect(() => {
    fetch("http://localhost:3000/spots")
    .then(resp => resp.json())
    .then(spotData => {
      console.log(spotData)
      setSpots(spotData)
    })
  }, [])

  function addNewSpot(newSpotObj){
    console.log(newSpotObj)
    setSpots([...spots, newSpotObj])
  }

  const filterSelectedArea = (e) => {
    setSelectedArea(e.target.value)
    console.log(e.target.value)
  }

  const filteredSpots = spots.filter(spot => {
    if(selectedArea === 'All')
      return spots
    else 
      return spot.spotArea === selectedArea
  })

  return (
    <div className="App">
      <Header />
      <Route exact path='/addspot'>
       <AddForm 
          addNewSpot={addNewSpot}
        />
      </Route>
      <Route exact path='/'>
      <Filter 
        selectedArea={selectedArea}
        filterSelectedArea={filterSelectedArea}
        />
      <SpotContainer 
        filteredSpots={filteredSpots}
        />
      </Route>
    </div>
  );
}

export default App;
