/////////////////////////////////////////////////////////////////////////////////
// App.js
// Main components (Home component with routing)
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
  return (
    <Router>
      <Switch>
        <Route exact path="/" children={<Home />} />
        <Route path="/resume" children={<Resume />} />
      </Switch>
    </Router>
  );
}

const Github = () => {
  const url = 'https://github.com/seanskggo72';
  window.open(url, '_blank');
}

const Home = () => {
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
      </div>
    </div>
  )
}

export default App;
