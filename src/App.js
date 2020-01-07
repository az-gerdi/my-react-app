import React from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './CClock.js';
import Toggle from './CToggle.js';
import LogicalControl from './CLogicalControl.js';
import Mailbox from './Mailbox.js';
import NumList from './CNumList.js'
import NameForm from './CNameForm.js'
import EssayForm from './CEssayForm.js';
import FavorForm from './CFavorForm';
import Reservation from './CReservation';
import Calculator from './CCalculator';
import TemperatureInput from './CTemperatureInput.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p><Clock /></p>
        <p><Toggle /></p>
        <p><LogicalControl /></p>
        <p><Mailbox /></p>
        <p><NumList /></p>
        <p><NameForm /></p>
        <p><EssayForm /></p>
        <p><FavorForm /></p>
        <p><Reservation /></p>
        <p><Calculator /></p>
        <p><TemperatureInput /></p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          This is my First React App -> Learn React
        </a>
      </header>
    </div>    
  );
}

export default App;
