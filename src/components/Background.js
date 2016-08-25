import React from 'react';
var EventEmitterMixin = require('react-event-emitter-mixin');

const Background = React.createClass({
  render: function(){
    return (<img className="background" src={this.props.file}/>);
  }
});

export default Background;
