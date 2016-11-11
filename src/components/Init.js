import React from 'react';
import ReactDOM from 'react-dom';
import Main from '../components/Main';
import Background from './Background';

const Init = React.createClass({

  startGame: function() {
    ReactDOM.render(<Main name="CEO"/>, document.getElementById('app'));
  },

  render: function(){
    return (
      <div id="container">
        <div id="startscreen" className="screen--start">
          <Background file="/images/startscreen_bg.png"/>
          <button ref="startGameButton" onClick={this.startGame} className="button--start-game">Start Game</button>
          <button ref="loadGameButton" className="button--load-game">Load Game</button>
        </div>
        <audio id="backgroundMusic" src="/audio/table1.mp3" autoPlay="autoplay" loop="true"/>
      </div>
    );
  }
});

export default Init;