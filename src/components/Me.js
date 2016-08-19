import React from 'react';
var EventEmitterMixin = require('react-event-emitter-mixin');

const Me = React.createClass({
  timer: null,
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
        left: x - (this.state.width/2),
        top: y - this.state.height
      });
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
    this.setState({
      sprite: '/images/me/standing-down.gif',
    });
  },
  render: function() {
    var meStyle = {
      top: this.state.top,
      left: this.state.left
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
