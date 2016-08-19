import React from 'react';

const Foreground = React.createClass({
  render: function(){
    return (<svg className="foreground" src={this.props.file}/>);
  }
});

export default Foreground;
