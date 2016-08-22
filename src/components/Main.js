import React from 'react';
import Scene from './Scene';
import Inventory from './Inventory';
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
        <Scene/>
        <Inventory/>
      </div>
    );
  }
});

export default Main;
