import React from 'react';

const Asset = React.createClass({

	getInitialState: function() {
		var id = this.props.assetId;
		return require('json!../assets/'+id);
	},
  render: function(){
  	this.state.on_stage = true;
    return (<img className="asset" src={this.state.sprite}/>);
  }
});

export default Asset;
