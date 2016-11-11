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
      speed: 1,
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
      if (path.length) {
        this.walkingInterval = setInterval(function() { that.walk(depthMap, path) }, 30);
      }
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
      newState,
      stamina = this.state.speed,
      stop,
      shadow,
      depth = 1,
      newTop,
      newLeft,
      direction = 'left',
      directionTop = 0,
      pathStop = path.length - 1;

    if (!this.isWalking) {
      this.isWalking = true;
      this.walkPathIndex = 0;
    }

    //direction = directionLeft < 0 ? 'left' : 'right'

    while (stamina > 0 && this.walkPathIndex < pathStop) {
      this.walkPathIndex++;
      stamina--;
    }

    stop = path[this.walkPathIndex];
    newTop = depthMap.gridToPos(stop.x);
    newLeft = depthMap.gridToPos(stop.y);
    depth = depthMap.getDepth({y:newTop, x:newLeft});
    shadow = depthMap.getShadow({y:newTop, x:newLeft}) / 255;
    newState = {
      zIndex: Math.ceil(depth),
      scale: depthMap.getScale(depth),
      top: newTop,
      left: newLeft,
      shadow: shadow
    };

    if (this.walkPathIndex == pathStop) {
      // We have arrived!
      this.stopWalk(directionTop);
    }
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
        zoom: this.state.scale,
        filter: "brightness("+this.state.shadow+")"
      };
    return (<div id="me" style={meStyle}>
      <img src={this.state.sprite} style={spriteStyle}/>
      <div style={bubbleStyle} className="speak-bubble">{this.state.saying}</div>
    </div>);
  }
});

export default Me;
