import React from 'react';

const Asset = React.createClass({

	getInitialState: function() {
		var id = this.props.assetId;
		return require('json!../assets/'+id);
	},
  render: function(){
    return (<div className="asset">
    	<img src={this.state.sprite}/>
    </div>);
  }
});

export default Asset;
