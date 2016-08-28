"use strict";

import React from "react";
import List from './List';

var EventEmitterMixin = require('react-event-emitter-mixin');

const ContextMenu = React.createClass({
  mixins:[EventEmitterMixin],

  getInitialState: function(){
    return {
      open: false,
      top: 0,
      left: 0,
      asset: {
        state: {
          actions: []
        }
      }
    }
  },
  
  componentWillMount(){
    this.eventEmitter('on','contextMenuOpen',(x,y,data)=>{
      this.setState({
        top: y,
        left: x,
        open: true,
        asset: data
      });
    });
    this.eventEmitter('on','speak',()=>{
      this.close();
    });
    this.eventEmitter('on','walkTo',()=>{
      this.close();
    });
  },

  handleClick(actionLabel, clickedAsset) {
    clickedAsset.takeAction(actionLabel);
    this.close();
  },

  close() {
    if (this.state.open) {
      this.setState({
        open:false
      });
    }
  },

  render() {
    var that = this;
    var inlineStyle = {
      top: this.state.top,
      left: this.state.left,
      display: this.state.open ? 'initial' : 'none',
    };
    return (
      <ul className="context-menu" style={inlineStyle}>
        {
          this.state.asset.state.actions.map(function(item) {
            return <li key={item.label} onClick={that.handleClick.bind(that, item.label, that.state.asset)}>{item.label}</li>
          })
        }
      </ul>
    );
  }
});

export default ContextMenu;