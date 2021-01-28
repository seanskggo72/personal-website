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
import Vscode from '../assets/vscode.png'; 

/////////////////////////////////////////////////////////////////////////////////
// Functions
/////////////////////////////////////////////////////////////////////////////////

const Animation = (props, string) => {
  const { inViewport, enterCount } = props;
  if (inViewport && enterCount === 1) return string;
}

const Redirector = (url_feed) => {
  const url = url_feed;
  window.open(url);
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
            <text className='Title Header'>Tic Tac Toe AI</text>
            <text className='Text Header Component_text'>
              Created with React Native.
            </text>
            <div>
              <button className='Main_button Button Button_styling' 
                onClick={() => Redirector('https://play.google.com/store/apps/details?id=dev.quikk.tictactoeai')}>
                  GOOGLE PLAY
              </button>
              <button className='Main_button Button Button_styling' 
                onClick={() => Redirector('https://github.com/seanskggo72/tic-tac-toe-app')}>
                  GITHUB
              </button>
              <button className='Main_button Button Button_styling' 
                onClick={() => Redirector('https://github.com/seanskggo72/tic-tac-toe-AI')}>
                  PROTOTYPE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Slot_2 = (props) => {
  const { forwardedRef } = props;
  return (
    <div ref={forwardedRef} className={Animation(props, 'Header')}>
      <div className='FlexBox Main_slot'>
        <div className='FlexBox Sub_slot'>
          <div className='Left_sub_slot'>
            <img src={Vscode} className='Image2' alt='Tic Tac Toe App' />
          </div>
          <div className='Right_sub_slot Column'>
            <text className='Title Header'>Bule Syntax Highlighter</text>
            <text className='Text Header Component_text'>
              Created with yo.
            </text>
            <div>
              <button className='Main_button Button Button_styling' 
                onClick={() => Redirector('https://marketplace.visualstudio.com/items?itemName=seanskggo.bule-syntax-highlighting')}>
                  MARKETPLACE
              </button>
              <button className='Main_button Button Button_styling' 
                onClick={() => Redirector('https://github.com/seanskggo72/vscode-bule-syntax-highlighting')}>
                  GITHUB
              </button>
            </div>
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
const Slot2 = handleViewport(Slot_2);
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
      <Slot2 />
      <Banner />
      <Slot1 />
    </div>
  );
}

export default Project_template;
