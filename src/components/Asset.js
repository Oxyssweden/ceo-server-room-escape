import React from 'react';

const Asset = React.createClass({
  render: function(){
    return (<div className="asset">{this.props.name}</div>);
  }
});

export default Asset;
