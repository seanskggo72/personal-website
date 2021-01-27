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
import '../css/Projects.css';

/////////////////////////////////////////////////////////////////////////////////
// Functions
/////////////////////////////////////////////////////////////////////////////////

const Animation = (props) => {
  const { inViewport, enterCount } = props;
  //Fade in only the first time we enter the viewport
  if (inViewport && enterCount === 1) {
    return { WebkitTransition: 'opacity 1.2s ease-in-out' };
  } else if (!inViewport && enterCount < 1) {
    return { WebkitTransition: 'none', opacity: '0' };
  } else {
    return {};
  }
}

const TicTacToe = (props) => {
  const { forwardedRef } = props;
  return (
    <div ref={forwardedRef} style={Animation(props)}>
      <h3>Hi YEET!!!</h3>
      <div style={{ width: '400px', height: '300px', background: 'blue' }} />
    </div>
  );
};

const Bule = (props) => {
  const { forwardedRef } = props;
  return (
    <div ref={forwardedRef} style={Animation(props)}>
      <h3>Hi YEET!!!</h3>
      <div style={{ width: '400px', height: '300px', background: 'red' }} />
    </div>
  );
};

/////////////////////////////////////////////////////////////////////////////////
// Constants
/////////////////////////////////////////////////////////////////////////////////

const Block1 = handleViewport(TicTacToe);
const Block2 = handleViewport(Bule);

/////////////////////////////////////////////////////////////////////////////////
// Exports
/////////////////////////////////////////////////////////////////////////////////

const Project_template = () => {
  return (
    <div className='Main'>
      <div>
        <text>YEET!!</text>
      </div>
      <Block1 />
      <Block2 />
    </div>
  );
}

export default Project_template;
