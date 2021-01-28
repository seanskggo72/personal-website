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
import levi from '../svg/levi.svg';
import background from '../svg/wallpaper.svg'
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
    <div className="FlexBox Main" style={{ backgroundImage: `url(${background})` }}>
      <div className="FlexBox Main Sub_main">
        <img src={levi} className="Profile" alt="logo" />
        <p className='Title Name'>Sean Go</p>
        <Typewriter
          className='Typewriter'
          options={{ cursor: '_', delay: 65 }}
          onInit={(typewriter) => { typewriter.typeString(bio).start() }}
        />
        <div className='Div_margin'>
          <Link to="/portfolio" tabindex="-1" className='Main_button'>
            <button className='Main_button Button'>PORTFOLIO</button>
          </Link>
        </div>
        <div className='Div_margin'>
          <Link to="/resume" tabindex="-1" className='Main_button'>
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
