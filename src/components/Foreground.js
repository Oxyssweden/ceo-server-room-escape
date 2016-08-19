import React from 'react';

const Foreground = React.createClass({
  render: function(){
    return (<img className="foreground" src={this.props.file}/>);
  }
});

export default Foreground;
