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
    this.eventEmitter('on','walkTo',(dest, depthMap)=>{
      var that = this,
        path = depthMap.findPath(
          {x: this.state.left, y: this.state.top},
          dest
          );
      this.stopWalk();
      this.walkingInterval = setInterval(function() { that.walk(depthMap, path) }, 30);
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
    this.walkPathIndex = 0;
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

  walk: function(depthMap, path) {
    var
      newTop,
      newLeft,
      top = this.state.top,
      left = this.state.left,
      stamina = this.state.speed,
      stop,
      depth = 1,
      direction,
      pathLength = path.length;
    this.isWalking = true;

    //direction = directionLeft < 0 ? 'left' : 'right'

    while (stamina > 0) {
      this.walkPathIndex++;
      stamina--;
    }
    if (pathLength < this.walkPathIndex) {
      // We have arrived!
      this.stopWalk(directionTop);
      stop = path[pathLength - 1];
      newTop = stop[0];
      newLeft = stop[1];
    } else {
      stop = path[this.walkPathIndex];
      newTop = stop[0];
      newLeft = stop[1];
    }

    newState = {
      zIndex: Math.ceil(depth),
      scale: depthMap.getScale(depth),
      top: newTop,
      left: newLeft,
    };
    if (this.isWalking) { newState.sprite = '/images/me/walk-' + direction + '.gif' }
    this.setState(newState);

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
