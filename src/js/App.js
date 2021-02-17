/////////////////////////////////////////////////////////////////////////////////
// App.js
// Main components (Home component with routing)
/////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////
// Imports
/////////////////////////////////////////////////////////////////////////////////

import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import sean from '../svg/sean.png';
import background from '../svg/wallpaper.png'
import Typewriter from 'typewriter-effect';
import Resume from './Resume';
import Projects from './Projects';
import Notfound from './Notfound';
import '../css/App.css';

/////////////////////////////////////////////////////////////////////////////////
// Constants
/////////////////////////////////////////////////////////////////////////////////

const bio = '~$ Software_Engineer && Student '

/////////////////////////////////////////////////////////////////////////////////
// Functions
/////////////////////////////////////////////////////////////////////////////////

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" children={<Home />} />
        <Route path="/resume" children={<Resume />} />
        <Route path="/portfolio" children={<Projects />} />
        <Route children={<Notfound />} />
      </Switch>
    </Router>
  );
}

const Github = () => {
  const url = 'https://github.com/seanskggo72';
  window.open(url);
}

const Home = () => {
  return (
    <div className="FlexBox Main Main_delay" style={{ backgroundImage: `url(${background})` }}>
      <div className="FlexBox Main Sub_main">
        <img src={sean} className="Profile" alt="logo" />
        <p className='Title Name'>Sean Go</p>
        <Typewriter
          className='Typewriter'
          options={{ cursor: '_', delay: 65 }}
          onInit={(typewriter) => { typewriter.pauseFor(1500).typeString(bio).start() }}
        />
        <div className='Div_margin'>
          <Link to="/portfolio" tabIndex="-1" className='Main_button'>
            <button className='Main_button Button'>PORTFOLIO</button>
          </Link>
        </div>
        <div className='Div_margin'>
          <Link to="/resume" tabIndex="-1" className='Main_button'>
            <button className='Main_button Button'>RESUME</button>
          </Link>
        </div>
        <div className='Div_margin'>
          <button className='Main_button Button' onClick={Github}>GITHUB</button>
        </div>
      </div>
    </div>
  )
}

export default App;
