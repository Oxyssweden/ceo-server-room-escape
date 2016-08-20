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
      data: {
        actions: []
      }
    }
  },
  using() {
    return "self"
  },
  componentWillMount(){
    this.eventEmitter('on','contextMenuOpen',(x,y,data)=>{
      this.setState({
        top: y,
        left: x,
        display:'block',
        data: data
      });
    });
    this.eventEmitter('on','speak',()=>{
      this.setState({
        display:'none'
      });
    });
  },
    handleClick(action) {
    if (typeof action === 'object') {
      var key = eval(action._var);
      eval(action[key]);
    } else {
      eval(action);
    }
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
            this.state.data.actions.map(function(item) {
              return <li key={item.label} onClick={that.handleClick.bind(that, item.effect)}>{item.label}</li>
            })
          }
        </ul>
      );
    }
});

export default ContextMenu;