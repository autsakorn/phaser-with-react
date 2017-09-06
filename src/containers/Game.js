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

window.PIXI = require('phaser/build/custom/pixi')
window.p2 = require('phaser/build/custom/p2')
const Phaser = require('phaser/build/custom/phaser-split')
var console = window.console;
var alert = window.alert;

class Game extends Component {
  createGame = (width, height) => {
      var game = new Phaser.Game(width, height, Phaser.AUTO, 'Game',{ preload: this.preload, create: this.create, update: this.update, render: this.render });

      // Create our 'main' state that will contain the game
      var mainState = {
        preload: function() {
          // Change the background color of the game
          game.stage.backgroundColor = '#71c5cf';
          game.world.setBounds(0, 0, 2000, height);
          game.load.image('blue', Blue);
          game.load.image('Left', Left);
          game.load.image('Right', Right);
          game.load.image('Up', Up);
          game.load.image('Down', Down);
          game.load.image('BtnA', BtnA);
          game.load.image('BtnB', BtnB);
        },

        create: function() {
          // Set the physics system
          game.physics.startSystem(Phaser.Physics.ARCADE);


          for (var i = 0; i < 150; i++){
              game.add.sprite(game.world.randomX, game.world.randomY, 'blue');
          }

          this.left = game.add.button((0+20), height-80, 'Left',this.onClickLeft,this.onClickLeft);
          this.left.onInputOver.add(this.overLeft, this);
          this.left.onInputOut.add(this.outLeft, this);
          this.left.onInputUp.add(this.upLeft, this);
          this.left.fixedToCamera = true;
          this.right = game.add.button((0+80), height-80, 'Right',this.onClickRight);
          this.right.fixedToCamera = true;

          this.up = game.add.button((0+50), height-110, 'Up',this.onClickUp);
          this.up.fixedToCamera = true;
          this.down = game.add.button((0+50), height-50, 'Down',this.onClickDown);
          this.down.fixedToCamera = true;

          this.btnA = game.add.button((width-80), height-110, 'BtnA');
          this.btnA.fixedToCamera = true;
          this.btnB = game.add.button((width-60), height-60, 'BtnB');
          this.btnB.fixedToCamera = true;

          this.left.scale.setTo(0.5, 0.5);
          this.right.scale.setTo(0.5, 0.5);
          this.up.scale.setTo(0.5, 0.5);
          this.down.scale.setTo(0.5, 0.5);
          this.btnA.scale.setTo(0.5, 0.5);
          this.btnB.scale.setTo(0.5, 0.5);


          this.cursors = game.input.keyboard.createCursorKeys();
          // window.console.log(this.bird);
          // window.console.log(this.bird.onInputDown());
        },
        update: function() {
          if (this.cursors.up.isDown)
          {
              game.camera.y -= 4;
              // this.btnA.y -= 4;
          }
          else if (this.cursors.down.isDown)
          {
              game.camera.y += 4;
              // this.btnA.y += 4;
          }

          if (this.cursors.left.isDown)
          {
              game.camera.x -= 4;
              // this.btnA.x -= 4;
          }
          else if (this.cursors.right.isDown)
          {
              game.camera.x += 4;
              // this.btnA.x += 4;
          }
        },
        onClickLeft: function(item){
          game.camera.x -= 4;

        },
        overLeft: function(item){

        },
        outLeft: function(item){

        },
        upLeft: function(item){

        },
        onClickRight: function(item){
          game.camera.x += 4;
        },
        onClickUp: function(item){
          game.camera.y -= 4;
        },
        onClickDown: function(item){

        },
        render: function() {
            game.debug.cameraInfo(game.camera, 32, 32);
        }
      };
      // Add and start the 'main' state to start the game
      game.state.add('main', mainState);
      game.state.start('main');
  }
  componentDidMount() {
      this.createGame(window.innerWidth, window.innerHeight-21+21);
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
