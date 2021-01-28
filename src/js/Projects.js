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

/////////////////////////////////////////////////////////////////////////////////
// Functions
/////////////////////////////////////////////////////////////////////////////////

const Animation = (props) => {
  const { inViewport, enterCount } = props;
  if (inViewport && enterCount === 1) return "Header";
  else return '';
}

const TicTacToe = () => {
  return (
    <div className='FlexBox Main_slot'>
      <div className='FlexBox Sub_slot'>
        <text>sdfasdf</text>
        <text>afgafafafafaf</text>
      </div>
    </div>
  );
};

const Slot_1 = (props) => {
  const { forwardedRef } = props;
  return (
    <div ref={forwardedRef} className={Animation(props)}>
      <div className='FlexBox Main_slot'>
        <div className='FlexBox Sub_slot'>
          <Block1 />
          <Block1 />
        </div>
      </div>
    </div>
  );
};

const Bule = (props) => {
  const { forwardedRef } = props;
  return (
    <div ref={forwardedRef} className={Animation(props)}>
      <div style={{ width: '400px', height: '300px', background: 'red' }} />
    </div>
  );
};

/////////////////////////////////////////////////////////////////////////////////
// Constants
/////////////////////////////////////////////////////////////////////////////////

// Slots
const Slot1 = handleViewport(Slot_1);
// Blocks
const Block1 = handleViewport(Bule);

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
    </div>
  );
}

export default Project_template;
