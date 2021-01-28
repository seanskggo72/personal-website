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
  //Fade in only the first time we enter the viewport
  if (inViewport && enterCount === 1) {
    return { transition: 'opacity 2s ease-in-out' };
  } else if (!inViewport && enterCount < 1) {
    return { transition: 'none', opacity: '0' };
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
    <div className='FlexBox Main'>
      <div className='FlexBox Banner'>
        <h className='Title Header'>Portfolio</h>
        <text className='Text Portfolio_paragraph'>This portfolio showcases 
        some of the projects that I undertook</text>
        <text className='Text Portfolio_paragraph'>as well as the date, 
        descriptions and technologies used.</text>
      </div>
      <Block1 />
      <Block2 />
      <Block2 />
      <Block2 />
    </div>
  );
}

export default Project_template;
