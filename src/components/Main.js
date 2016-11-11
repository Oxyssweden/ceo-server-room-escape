import React from 'react';
import Scene from './Scene';
import Inventory from './Inventory';
import Viewport from './Viewport';
var EventEmitterMixin = require('react-event-emitter-mixin');

const Main = React.createClass({
  mixins:[EventEmitterMixin],

  getInitialState: function(){
    return {
      usingItem: false
    }
  },

  componentWillMount(){
    this.eventEmitter('on','useItem',(itemId)=>{
      this.setState({
        usingItem: true,
      });
    });
    this.eventEmitter('on','usedItem',(itemId)=>{
      this.setState({
        usingItem: false,
      });
    });
  },

  render: function(){
    var classes = '';
    classes += this.state.usingItem ? ' using-item' : '';
    return (
      <div id="container" className={classes}>
        <Scene width="1200" height="800"/>
        <Inventory/>
        <audio id="backgroundMusic" src="/audio/circus.mp3" autoPlay="autoplay" loop="true"/>
      </div>
    );
  }
});

export default Main;
