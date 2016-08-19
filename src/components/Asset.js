import React from 'react';

const Asset = React.createClass({

	getInitialState: function() {
		var id = this.props.assetId;
		var asset = require('!json../assets/'+id);
	};

	componentWillMount: function(){
	
	},

  render: function(){
    return (<div className="asset">
    	{this.props.name}
    	{this.props.sprite}
    </div>);
  }
});

export default Asset;
