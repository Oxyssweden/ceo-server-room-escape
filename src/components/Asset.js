import React from 'react';

const Asset = React.createClass({

	getInitialState: function(){
	  return {
	    initialAssets: [
	      "broom",
	      "cabinet",
	      "cable",
	      "newspaper",
	      "waterpipe"
	    ],
	    assets: []
	  }
	},
	componentWillMount: function(){
	  this.setState({assets: this.state.initialAssets})
	},

  render: function(){
    return (<div className="asset">
    	{this.props.name}
    	{this.props.sprite}
    </div>);
  }
});

export default Asset;
