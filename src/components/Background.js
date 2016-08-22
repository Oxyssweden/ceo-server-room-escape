import React from 'react';
var EventEmitterMixin = require('react-event-emitter-mixin');

const Background = React.createClass({
  mixins:[EventEmitterMixin],
  handleClick: function(event) {
    var pos = getClickOnScenePos(event),
      floor = 560;
    console.log(pos.y);
    if(pos.y < floor) {pos.y = floor}
    this.eventEmitter('emit','walkTo', pos.x, pos.y);
  },
  render: function(){
    return (<img onClick={this.handleClick} className="background" src={this.props.file}/>);
  }
});

export default Background;
