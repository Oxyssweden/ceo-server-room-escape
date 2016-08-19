import React from 'react';

const Asset = React.createClass({

	getInitialState: function() {
		var id = this.props.assetId;
		return require('json!../assets/'+id);
	},
  render: function(){
  	var inlineStyle = {
  	  display: this.state.on_stage == true ? 'initial' : 'none',
  	  height: this.state.size.h,
  	  width: this.state.size.w,
  	  top: this.state.position.y,
  	  left: this.state.position.x,
      zIndex: this.state.zindex
  	};
    return (<img className="asset" src={this.state.sprite} style={inlineStyle}/>);
  }
});

export default Asset;
