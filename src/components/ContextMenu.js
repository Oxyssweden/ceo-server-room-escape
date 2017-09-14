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
    this.eventEmitter('on','me-speak',()=>{
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
    this.state.asset.actions = this.state.asset.actions || {};
    return (
      <ul className="context-menu" style={inlineStyle}>
        {
          Object.keys(this.state.asset.actions).map(function(key) {
            var item = that.state.asset.actions[key];
            return <li key={key} onClick={that.handleClick.bind(that, key, that.state.asset)}>{key}</li>
          })
        }
      </ul>
    );
  }
});

export default ContextMenu;