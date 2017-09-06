import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import {Page,List,ListButton,ListItem} from 'framework7-react';
import Blue from '../images/blue.png';
import Left from '../images/flatDark/flatDark23.png';
import Right from '../images/flatDark/flatDark24.png';
import Up from '../images/flatDark/flatDark25.png';
import Down from '../images/flatDark/flatDark26.png';

import BtnA from '../images/flatDark/flatDark35.png';
import BtnB from '../images/flatDark/flatDark36.png';

// window.PIXI = require('phaser/build/custom/pixi')
// window.p2 = require('phaser/build/custom/p2')
// const Phaser = require('phaser/build/phaser')
var console = window.console;
var alert = window.alert;

class Game extends Component {

  componentDidMount() {
      window.gameStart(window.innerWidth, window.innerHeight);
  }
  render() {
    return (
      <Page style={{paddingTop:0}}>
        <div id="Game">
        </div>
        {
          //<div style={{textAlign:'center'}}><a className="back item-link list-button">HOME</a></div>
        }
      </Page>
    );
  }
}

export default Game;
