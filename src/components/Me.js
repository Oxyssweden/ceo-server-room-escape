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
    this.eventEmitter('on','walkTo',(pos, depthMap)=>{
      var that = this;
      this.stopWalk();
      this.walkingInterval = setInterval(function() { that.walk(pos, depthMap) }, 30);
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
    this.isWalking = false;
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

  walk: function(pos, depthMap) {
    var
      depth,
      newTop,
      newLeft,
      newState,
      top = this.state.top,
      left = this.state.left,
      destinationTop = pos.y,
      destinationLeft = pos.x,
      distanceTop = destinationTop - top,
      distanceLeft = destinationLeft - left,
      distance = Math.sqrt(Math.pow(distanceTop,2)+Math.pow(distanceLeft,2)),
      speed = this.state.speed * this.state.scale,
      directionTop = (destinationTop-top) / distance,
      directionLeft = (destinationLeft-left) / distance,
      direction = directionLeft < 0 ? 'left' : 'right',
      moveTop = directionTop * speed,
      moveLeft = directionLeft * speed;
    this.isWalking = true;

    if (distance < speed) {
      // We have arrived!
      this.stopWalk(directionTop);
      newTop = destinationTop;
      newLeft = destinationLeft;
    } else {
      newTop = this.state.top + moveTop;
      newLeft = this.state.left + moveLeft;
    }

    depth = depthMap.getDepth({x:newLeft, y:newTop});

    // Verify that position is not blocked
    if (depth) {
      newState = {
        zIndex: Math.ceil(depth),
        scale: depthMap.getScale(depth),
        top: newTop,
        left: newLeft,
      };
      if (this.isWalking) { newState.sprite = '/images/me/walk-' + direction + '.gif' }
      this.setState(newState);
    } else {
      this.stopWalk(directionTop);
    }

    //this.eventEmitter('emit','walkingTo', this, {x:newLeft, y:newTop});
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
