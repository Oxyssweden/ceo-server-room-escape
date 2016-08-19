import React from 'react';

const Main = React.createClass({
  render: function(){
    return (
      <h1>Hello, {this.props.name}!</h1>
    );
  }
});

export default Main;
