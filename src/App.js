import React, { useState } from 'react';
import AddForm from './AddForm';
import SpotContainer from './SpotContainer';

function App() {
  const [spots, setSpots] = useState(null)

  function addNewSpot(newSpotObj){
    setSpots([...spots, newSpotObj])
  }

  return (
    <div className="App">
      <h1>This is the App component.</h1>
      <SpotContainer />
      <AddForm 
        addNewSpot={addNewSpot}
        />
    </div>
  );
}

export default App;
