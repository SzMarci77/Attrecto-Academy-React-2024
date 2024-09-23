import React, { useState } from "react";

import Navbar from "./components/navbar/Navbar";
import { Button } from "./components/button/Button";

function App() {
  const [count, setCount] = useState(0);
  const [error, setError] = useState(false);

  const updateCounter = (increase: boolean) => {
    setCount((currentValue) => {
      if (count === 0 && !increase) {
        setError(true);
        return currentValue;
      }
      else {
        setError(false);
      }
      return increase ? currentValue + 1 : currentValue - 1;
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <div className="container d-flex justify-content-center">
        <div className="card bg-white shadow text-center p-4 m-4">
          <h1>Counter: {count}</h1>
          <div className="d-flex justify-content-center flex-wrap gap-2">
            <Button color="primary" onClick={() => updateCounter(true)}>
              Increase +
            </Button>
            <Button color="secondary" onClick={() => updateCounter(false)}>
              Decrease -
            </Button>
            <Button color="danger" onClick={() => setCount(0)}>
              Reset
            </Button>
          </div>
          {error && <div className="alert alert-danger mt-4" >Nem lehet az érték 0-nál kisebb.</div>}
        </div>
      </div>
    </div>
  );
}

export default App;
