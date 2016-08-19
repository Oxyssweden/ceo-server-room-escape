import React from 'react';
import Scene from './Scene';
import Inventory from './Inventory';

const Main = React.createClass({
  render: function(){
    return (
      <div id="container">
        <Scene/>
        <Inventory/>
      </div>
    );
  }
});

export default Main;
