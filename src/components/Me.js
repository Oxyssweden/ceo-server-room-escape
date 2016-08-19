import React from 'react';
var EventEmitterMixin = require('react-event-emitter-mixin');

const Me = React.createClass({
  timer: null,
  walkingInterval: null,
  mixins:[EventEmitterMixin],
  getInitialState: function(){
    return {
      sprite: '/images/me/standing-down.gif',
      top: 350,
      left: 100,
      height: 350,
      width: 200
    }
  },
  componentWillMount(){
    this.eventEmitter('on','walkTo',(x,y)=>{
      this.setState({
        destinationLeft: x - (this.state.width/2),
        destinationTop: y - this.state.height
      });
      this.walkingInterval = setInterval(this.walk, 100);
    });
    this.eventEmitter('on','speak',(text)=>{
      this.stopWalk();
      this.setState({
        sprite: '/images/me/talk.gif',
        saying: text
      });
      this.timer = this.setTimer(this.stopSpeak, text.length / 10 * 1000);
    });
  },
  setTimer(func, millis) {
    clearTimeout(this.timer);
    setTimeout(func, millis);
  },
  stopSpeak: function() {
    this.setState({
      sprite: '/images/me/standing-down.gif',
      saying: false,
    });
  },
  stopWalk: function() {
    clearInterval(this.walkingInterval);
    this.setState({
      sprite: '/images/me/standing-down.gif',
    });
  },
  walk: function() {
    if (Math.round(this.state.top) == this.state.destinationTop && Math.round(this.state.left) == this.state.destinationLeft) {
      this.stopWalk();
      return;
    }

    var newTop = this.state.top + ((this.state.destinationTop - this.state.top) / 10);
    var newLeft = this.state.left + ((this.state.destinationLeft - this.state.left) / 10);
    this.setState({
      top: newTop,
      left: newLeft,
      sprite: '/images/me/walk-left.gif',
    });
  },
  render: function() {
    var meStyle = {
      top: this.state.top,
      left: this.state.left,
      zIndex: 4
    },
      bubbleStyle = {
        display: this.state.saying ? 'block' : 'none'
      };
    return (<div id="me" style={meStyle}>
      <img src={this.state.sprite}/>
      <div style={bubbleStyle} className="speak-bubble">{this.state.saying}</div>
    </div>);
  }
});

export default Me;
