/////////////////////////////////////////////////////////////////////////////////
// App.js
// Main components
/////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////
// Imports
/////////////////////////////////////////////////////////////////////////////////

import React from "react";
import levi from './svg/levi.svg';
import background from './svg/wallpaper.svg'
import Typewriter from 'typewriter-effect';
import './App.css';

/////////////////////////////////////////////////////////////////////////////////
// Constants
/////////////////////////////////////////////////////////////////////////////////

const bio = '< UNSW Computer Science Student >'

/////////////////////////////////////////////////////////////////////////////////
// Functions
/////////////////////////////////////////////////////////////////////////////////

const App = () => {
  return (
    <div className="Main" style={{ backgroundImage: `url(${background})` }}>
      <div className="Sub_main">
        <img src={levi} className="Profile" alt="logo" />
        <p className='Name'>Sean Go</p>
        <Typewriter
          className='Typewriter'
          options={{ cursor: '_', delay: 65 }}
          onInit={(typewriter) => { typewriter.typeString(bio).start() }}
        />
        <button className='Button'>About Me</button>
        <button className='Button'>Github</button>
        <button className='Button'>Projects</button>
        {/* <a className='Button' href="https://github.com/seanskggo72" target="_blank">About Me</a> */}
      </div>
    </div>
  );
}

export default App;

/* <div className="App">
<header className="App-header">
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
    Learn React
  </a>
</header>
</div> */