import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Tom Mboya University
        </p>
        <a
          className="App-link"
          href="./Images/Tom.jpeg"
          target="_blank"
          rel="noopener noreferrer"
        >
          TMUC
        </a>
      </header>
    </div>
  );
}

export default App;
