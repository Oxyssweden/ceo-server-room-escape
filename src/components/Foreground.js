import React from 'react';

const Foreground = React.createClass({
  render: function(){
    var forgroundStyle = {
        zIndex: 1000
      }
    return (<img className="foreground" src={this.props.file} style={forgroundStyle}/>);
  }
});

export default Foreground;