import React from 'react';
var EventEmitterMixin = require('react-event-emitter-mixin');

const Me = React.createClass({
  timer: null,
  walkingInterval: null,
  mixins:[EventEmitterMixin],

  getInitialState: function(){
    return {
      sprite: '/images/me/standing-down.gif',
      top: parseInt(this.props.posTop),
      left: parseInt(this.props.posLeft),
      height: 1,
      width: 1,
      speed: 10,
      scale: 1,
      zIndex: 100
    }
  },

  componentWillMount() {
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

  stopWalk: function(directionTop) {
    clearInterval(this.walkingInterval);

    if(directionTop >= 0) {
      this.setState({
        sprite: '/images/me/standing-down.gif'
      });
    } else {
      this.setState({
        sprite: '/images/me/standing-up.gif'
      });
    }

  },

  walk: function() {
    var
      depth,
      newTop,
      newLeft,
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
      this.stopWalk(directionTop);
      this.setState({
        top: destinationTop,
        left: destinationLeft,
      });
      return;
    }

    newTop = this.state.top + moveTop;
    newLeft = this.state.left + moveLeft;
    this.eventEmitter('emit','walkingTo', this, {x:newLeft, y:newTop});

    this.setState({
      top: newTop,
      left: newLeft,
      sprite: '/images/me/walk-' + direction + '.gif',
    });
  },
  
  render: function() {
    var meStyle = {
        top: this.state.top,
        left: this.state.left,
        zIndex: this.state.zIndex,
      },
      bubbleStyle = {
        display: this.state.saying ? 'block' : 'none'
      },
      spriteStyle = {
        zoom: this.state.scale
      };
    return (<div id="me" style={meStyle}>
      <img src={this.state.sprite} style={spriteStyle}/>
      <div style={bubbleStyle} className="speak-bubble">{this.state.saying}</div>
    </div>);
  }
});

export default Me;
