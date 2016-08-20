"use strict";

import React from "react";
import List from './List';

var EventEmitterMixin = require('react-event-emitter-mixin');

const ContextMenu = React.createClass({
  mixins:[EventEmitterMixin],

  getInitialState: function(){
    return {
      display: 'none',
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
        display:'block',
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
  handleClick(action, clickedAsset) {
    if (typeof action === 'object') {
      var key = eval(action._var);
      eval(action[key]);
    } else {
      eval(action);
    }
    this.close();
  },
  close() {
    this.setState({
      display:'none'
    });
  },

  render() {
    var that = this;
    var inlineStyle = {
      top: this.state.top,
      left: this.state.left,
      display: this.state.display,
    };
    return (
      <ul className="context-menu" style={inlineStyle}>
        {
          this.state.asset.state.actions.map(function(item) {
            return <li key={item.label} onClick={that.handleClick.bind(that, item.effect, that.state.asset)}>{item.label}</li>
          })
        }
      </ul>
    );
  }
});

export default ContextMenu;