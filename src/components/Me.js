import React from 'react';

const Me = React.createClass({
  getInitialState: function(){
    return {
      sprite: '/images/me/standing-down.gif'
    }
  },
  render: function() {
    return (<div id="me">
      <img src={this.state.sprite}/>
    </div>);
  }
});

export default Me;
