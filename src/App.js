import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddForm from './AddForm';
import Filter from './Filter';
import Header from './Header';
import Spot from './Spot';
import SpotContainer from './SpotContainer';

function App() {
  const [spots, setSpots] = useState([])
  const [selectedArea, setSelectedArea] = useState('All')
  const [selectedAttribute, setSelectedAttribute] = useState('Anything')
  const [clickedSpot, setClickedSpot] = useState({})


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
    setSelectedAttribute(e.target.value)
  }


  const filteredSpots = spots.filter(spot => {
    if (selectedArea === 'All') 
      return spots
    else
      return spot.spotArea === selectedArea
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
            selectedAttribute={selectedAttribute}
            filterSelectedAttribute={filterSelectedAttribute}
          />
          <SpotContainer 
            filteredSpots={filteredSpots}
            setClickedSpot={setClickedSpot}
          />
          <Spot path='/spots/id'
            clickedSpot={clickedSpot}
          />
        </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
