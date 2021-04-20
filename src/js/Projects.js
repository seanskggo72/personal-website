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
import Bule from '../assets/bule.png';
import Churn from '../assets/churn.png';
import Contacts from '../assets/contacts.png'

/////////////////////////////////////////////////////////////////////////////////
// Functions
/////////////////////////////////////////////////////////////////////////////////

const Animation = (props, string) => {
  const { inViewport, enterCount } = props;
  if (inViewport && enterCount === 1) return string;
  else return string + '_without';
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
            <text className='Title Sub_Header'>Tic Tac Toe AI</text>
            <text className='Text Header Component_text Paragraph_container'>
              Mobile app created with React Native and Expo from scratch using
              functional components, hooks and Minimax algorithm.
            </text>
            <div className='Paragraph_container'>
              <button className='Button Button_styling'
                onClick={() => Redirector('https://play.google.com/store/apps/details?id=dev.quikk.tictactoeai')}>
                GOOGLE PLAY
              </button>
              <button className='Button Button_styling'
                onClick={() => Redirector('https://github.com/seanskggo72/tic-tac-toe-app')}>
                GITHUB
              </button>
              <button className='Button Button_styling'
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
            <img src={Vscode} className='Image2' alt='Bule Vscode Extension' />
          </div>
          <div className='Right_sub_slot Column'>
            <text className='Title Sub_Header'>Bule Syntax Highlighter</text>
            <text className='Text Header Component_text Paragraph_container'>
              Simple VScode syntax highlighter for Bule, a SAT programming language.
              Created with VS Code API and CLI tools.
            </text>
            <div className='Paragraph_container'>
              <button className='Button Button_styling'
                onClick={() => Redirector('https://marketplace.visualstudio.com/items?itemName=seanskggo.bule-syntax-highlighting')}>
                MARKETPLACE
              </button>
              <button className='Button Button_styling'
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
        <div className='FlexBox Sub_banner'>
          <h className='FlexBox Title Header Wide'>Research</h>
          <text className='Text Component_text'>The following highlights my
        research studies at UNSW.</text>
        </div>
      </div>
    </div>
  );
};

const Slot_3 = (props) => {
  const { forwardedRef } = props;
  return (
    <div ref={forwardedRef} className={Animation(props, 'Header')}>
      <div className='FlexBox Main_slot'>
        <div className='FlexBox Sub_slot'>
          <div className='Left_sub_slot'>
            <img src={Bule} className='Image3' alt='Reserach contribution' />
          </div>
          <div className='Right_sub_slot Column'>
            <text className='Title Sub_Header'>A Strategy-game Approach to Solving Logic
            Formulas</text>
            <text className='Text Header Component_text Paragraph_container'>
              Study of Bule and its efficiency of representing
              boolean expressions, factoring in time complexity and compactness.
            </text>
            <div className='Paragraph_container'>
              <button className='Button Button_styling'
                onClick={() => Redirector('https://github.com/AbdallahS/pspace-encodings')}>
                GITHUB
              </button>
              <button className='Button Button_styling'
                onClick={() => Redirector('https://github.com/vale1410/bule')}>
                BULE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Slot_4 = (props) => {
  const { forwardedRef } = props;
  return (
    <div ref={forwardedRef} className={Animation(props, 'Header')}>
      <div className='FlexBox Main_slot'>
        <div className='FlexBox Sub_slot'>
          <div className='Left_sub_slot'>
            <img src={Churn} className='Image3' alt='Churn Predictor Website' />
          </div>
          <div className='Right_sub_slot Column'>
            <text className='Title Sub_Header'>FutureSpace</text>
            <text className='Text Header Component_text Paragraph_container'>
              Predicts likelihood of bank attrition. Uses multiple regression
              as machine learning model. Utilised React, Flask, Axios, Heroku and Firebase. 
              REST-based application.
            </text>
            <div className='Paragraph_container'>
              <button className='Button Button_styling'
                onClick={() => Redirector('https://futurespace-predict.web.app/')}>
                WEBSITE
              </button>
              <button className='Button Button_styling'
                onClick={() => Redirector('https://github.com/seanskggo72/Bank-Churn-Predictor')}>
                GITHUB
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Slot_5 = (props) => {
  const { forwardedRef } = props;
  return (
    <div ref={forwardedRef} className={Animation(props, 'Header')}>
      <div className='FlexBox Main_slot'>
        <div className='FlexBox Sub_slot'>
          <div className='Left_sub_slot'>
            <img src={Contacts} className='Image3' alt='Contacts App' />
          </div>
          <div className='Right_sub_slot Column'>
            <text className='Title Sub_Header'>CRUD Contacts App</text>
            <text className='Text Header Component_text Paragraph_container'>
              Basic CRUD contacts application. Created with React and React-bootstrap components.
            </text>
            <div className='Paragraph_container'>
              <button className='Button Button_styling'
                onClick={() => Redirector('https://contacts-simple.web.app/')}>
                WEBSITE
              </button>
              <button className='Button Button_styling'
                onClick={() => Redirector('https://github.com/seanskggo72/Contacts-App')}>
                GITHUB
              </button>
            </div>
          </div>
        </div>
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
const Slot3 = handleViewport(Slot_3);
const Slot4 = handleViewport(Slot_4);
const Slot5 = handleViewport(Slot_5);

/////////////////////////////////////////////////////////////////////////////////
// Exports
/////////////////////////////////////////////////////////////////////////////////

const Project_template = () => {
  return (
    <div className='FlexBox Main'>
      <div className='FlexBox Banner'>
        <div className='FlexBox Sub_banner'>
          <h className='Title Header'>Portfolio</h>
          <text className='Text Component_text'>This portfolio showcases
          some of the projects that I undertook as well as the descriptions and 
          technologies used.</text>
        </div>
      </div>
      <Slot2 />
      <Slot4 />
      <Slot1 />
      <Slot5 />
      <Banner />
      <Slot3 />
    </div>
  );
}

export default Project_template;
