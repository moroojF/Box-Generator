import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BoxForm from './components/BoxForm.jsx';
import DrowBox from './components/DrowBox.jsx';

function App() {
  const [boxs, setBoxs] = useState([]);
  const createBox = box => {
    setBoxs([...boxs, box])
  }
  return (
    <>
      <nav className="nav justify-content-center py-3 bg-dark text-light">
        <h2>Box Generator</h2>
      </nav>
      <div className="container">
        <div className="row mt-5">
          <div className="col-4">
            <h4>Welcome to Box Generator!</h4>
            <p>Please Enter the Box Color.</p>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-4"><BoxForm setBox={createBox} /></div>
          <div className="col-2"></div>
          <div className="col-6">
            {
              boxs.map((box, i) =>
                <DrowBox key={i} box={box} />)
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
