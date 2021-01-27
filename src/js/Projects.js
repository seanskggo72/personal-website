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
// Constants
/////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////
// Functions
/////////////////////////////////////////////////////////////////////////////////

const animation = (props) => {
  const { inViewport, enterCount } = props;
  //Fade in only the first time we enter the viewport
  if (inViewport && enterCount === 1) {
    return { WebkitTransition: 'opacity 0.75s ease-in-out' };
  } else if (!inViewport && enterCount < 1) {
    return { WebkitTransition: 'none', opacity: '0' };
  } else {
    return {};
  }
}

const Block = (props) => {
  const { forwardedRef } = props;
  return (
    <div ref={forwardedRef} style={animation(props)}>
      <h3>Hi YEET!!!</h3>
      <div style={{ width: '400px', height: '300px', background: 'blue' }} />
    </div>
  );
};

const Block2 = (props) => {
  const { forwardedRef } = props;
  return (
    <div ref={forwardedRef} style={animation(props)}>
      <h3>Hi YEET!!!</h3>
      <div style={{ width: '400px', height: '300px', background: 'red' }} />
    </div>
  );
};

const ViewportBlock = handleViewport(Block);
const ViewportBlock2 = handleViewport(Block2);

const Project_template = () => {
  return (
    <div className='Main'>
      <div>
        <text>YEET!!</text>
      </div>
      <ViewportBlock />
      <ViewportBlock />
      <ViewportBlock />
      <ViewportBlock2 />
    </div>

    // <div className='Main'>
    //   <text>Projects coming soon...</text>
    // </div>
  );
}

export default Project_template;
