import React, { useState, useEffect } from 'react';
import AddForm from './AddForm';
import Filter from './Filter';
import SpotContainer from './SpotContainer';

function App() {
  const [spots, setSpots] = useState([])

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

  return (
    <div className="App">
      <h1>This is the App component.</h1>
      <Filter />
      <SpotContainer 
        spots={spots}
        />
      <AddForm 
        addNewSpot={addNewSpot}
        />
    </div>
  );
}

export default App;
