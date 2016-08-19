import React from 'react';

const Background = React.createClass({
  render: function(){
    return (<svg className="background" src={this.props.file}/>);
  }
});

export default Background;
