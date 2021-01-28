/////////////////////////////////////////////////////////////////////////////////
// Projects.js
// Projects components
/////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////
// Imports
/////////////////////////////////////////////////////////////////////////////////

import 'intersection-observer';
import handleViewport from 'react-in-viewport';
import React from "react";
import '../css/App.css';
import TicTacToe from '../assets/TicTacToe.png';

/////////////////////////////////////////////////////////////////////////////////
// Functions
/////////////////////////////////////////////////////////////////////////////////

const Animation = (props, string) => {
  const { inViewport, enterCount } = props;
  if (inViewport && enterCount === 1) return string;
}

const Slot_1 = (props) => {
  const { forwardedRef } = props;
  return (
    <div ref={forwardedRef} className={Animation(props, 'Header')}>
      <div className='FlexBox Main_slot'>
        <div className='FlexBox Sub_slot'>
          <div className='Left_sub_slot'>
            <img src={TicTacToe} className='Image' alt='Tic Tac Toe App' />
          </div>
          <div className='Right_sub_slot Column'>
            <text className='Title Header'>Portfolio</text>
            <text className='Text Header'>The following highlights my
              research contributions at UNSW.</text>
          </div>
        </div>
      </div>
    </div>
  );
};

const Banner_1 = (props) => {
  const { forwardedRef } = props;
  return (
    <div ref={forwardedRef} className={Animation(props, 'Header')}>
      <div className='FlexBox Banner'>
        <h className='Title Header'>Research Contributions</h>
        <text className='Text Portfolio_paragraph'>The following highlights my
        research contributions at UNSW.</text>
      </div>
    </div>
  );
};

/////////////////////////////////////////////////////////////////////////////////
// Constants
/////////////////////////////////////////////////////////////////////////////////

// Slots
const Slot1 = handleViewport(Slot_1);
const Banner = handleViewport(Banner_1);

/////////////////////////////////////////////////////////////////////////////////
// Exports
/////////////////////////////////////////////////////////////////////////////////

const Project_template = () => {
  return (
    <div className='FlexBox Main'>
      <div className='FlexBox Banner'>
        <h className='Title Header'>Portfolio</h>
        <text className='Text Portfolio_paragraph'>This portfolio showcases
        some of the projects that I undertook</text>
        <text className='Text Portfolio_paragraph'>as well as the date,
        descriptions and technologies used.</text>
      </div>
      <Slot1 />
      <Slot1 />
      <Banner />
      <Slot1 />
    </div>
  );
}

export default Project_template;
