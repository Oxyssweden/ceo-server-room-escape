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
      width: 200,
      speed: 10
    }
  },

  componentWillMount(){
    this.eventEmitter('on','walkTo',(x,y)=>{
      this.stopWalk();
      this.setState({
        destinationLeft: x - (this.state.width/2),
        destinationTop: y - this.state.height
      });
      this.walkingInterval = setInterval(this.walk, 30);
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
    var
      top = this.state.top,
      left = this.state.left,
      destinationTop = this.state.destinationTop,
      destinationLeft = this.state.destinationLeft,
      distanceTop = destinationTop - top,
      distanceLeft = destinationLeft - left,
      distance = Math.sqrt(Math.pow(distanceTop,2)+Math.pow(distanceLeft,2)),
      speed = this.state.speed,
      directionTop = (destinationTop-top) / distance,
      directionLeft = (destinationLeft-left) / distance,
      direction = directionLeft < 0 ? 'left' : 'right',
      moveTop = directionTop * speed,
      moveLeft = directionLeft * speed;

    if (distance < speed) {
      this.stopWalk();
      this.setState({
        top: destinationTop,
        left: destinationLeft,
      });
      return;
    }

    this.setState({
      top: this.state.top + moveTop,
      left: this.state.left + moveLeft,
      sprite: '/images/me/walk-' + direction + '.gif',
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
