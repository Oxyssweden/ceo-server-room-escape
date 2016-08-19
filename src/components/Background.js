import React from 'react';
var EventEmitterMixin = require('react-event-emitter-mixin');

const Background = React.createClass({
  mixins:[EventEmitterMixin],
  handleClick: function(event) {
    this.eventEmitter('emit','walkTo',event.clientX,event.clientY);
  },
  render: function(){
    return (<img onClick={this.handleClick} className="background" src={this.props.file}/>);
  }
});

export default Background;
