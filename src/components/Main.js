import React from 'react';
import Scene from './Scene';
import Inventory from './Inventory';

const Main = React.createClass({
  render: function(){
    return (
      <div className="inner">
        <Scene/>
        <Inventory/>
      </div>
    );
  }
});

export default Main;
