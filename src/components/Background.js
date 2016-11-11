import React from 'react';
var EventEmitterMixin = require('react-event-emitter-mixin');

const Background = React.createClass({
  render: function(){
    return (<img className="background" style={{width:this.props.width, height:this.props.height}} src={this.props.file}/>);
  }
});

export default Background;
