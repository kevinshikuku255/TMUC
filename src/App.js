import React from 'react';
import Index from "./Pages";

import Logo from "./Images/tom_logo2.png"
import './App.css';

function App() {
  return (
    < div className="App">
      <div className="App_header">
         <img src={Logo} alt="Tom mboya"/>
      </div>
      <Index/>
    </div>
  );
}

export default App;
