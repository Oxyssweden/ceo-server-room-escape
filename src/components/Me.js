import React from 'react';
var EventEmitterMixin = require('react-event-emitter-mixin');

const Me = React.createClass({
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
      this.setState({
        sprite: '/images/me/talk.gif',
      });
      setTimeout(this.stopSpeak, text.length / 10 * 1000);
    });
  },
  stopSpeak: function() {
    this.setState({
      sprite: '/images/me/standing-down.gif',
    });
  },
  render: function() {
    var inlineStyle = {
      top: this.state.top,
      left: this.state.left
    };
    return (<div id="me" style={inlineStyle}>
      <img src={this.state.sprite}/>
    </div>);
  }
});

export default Me;
