/////////////////////////////////////////////////////////////////////////////////
// App.js
// Main components
/////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////
// Imports
/////////////////////////////////////////////////////////////////////////////////

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import levi from './svg/levi.svg';
import background from './svg/wallpaper.svg'
import Typewriter from 'typewriter-effect';
import Resume from './Resume';
import './App.css';

/////////////////////////////////////////////////////////////////////////////////
// Constants
/////////////////////////////////////////////////////////////////////////////////

const bio = '< Computer Science Student  >'

/////////////////////////////////////////////////////////////////////////////////
// Functions
/////////////////////////////////////////////////////////////////////////////////

const App = () => {
  const Github = () => {
    const url = 'https://github.com/seanskggo72';
    window.open(url, '_blank');
  }
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
        <Router>
          <div className='Div_margin'>
            <button className='Button' onClick={Github}>Github</button>
          </div>
          <div className='Div_margin'>
            <Link to="/resume" tabindex="-1">
              <button className='Button'>Resume</button>
            </Link>
          </div>
          <div className='Div_margin'>
            <Link to="/projects" tabindex="-1">
              <button className='Button'>Projects</button>
            </Link>
          </div>
          <Switch>
            <Route path="/resume">
              <Resume />
            </Route>
          </Switch>
        </Router>
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