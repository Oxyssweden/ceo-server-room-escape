import React from 'react';
var EventEmitterMixin = require('react-event-emitter-mixin');
const Asset = React.createClass({

	getInitialState: function() {
		var id = this.props.assetId;
		return require('json!../assets/'+id);
	},

	mixins:[EventEmitterMixin],
	handleClick: function(event) {
		eval(this.state.actions.view)	  
	},

	msg: function(text) {
		this.eventEmitter('emit','speak',text);
	},

  render: function(){
  	var inlineStyle = {
  	  display: this.state.on_stage == true ? 'initial' : 'none',
  	  height: this.state.size.h,
  	  width: this.state.size.w,
  	  top: this.state.position.y,
  	  left: this.state.position.x
  	};
    return (<img className="asset" src={this.state.sprite} style={inlineStyle}/>);
  }
});

export default Asset;
