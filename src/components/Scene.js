import React from 'react';
import Asset from './Asset';
import Background from './Background';
import Foreground from './Foreground';

const Scene = React.createClass({
  render: function(){
    return (<div id="scene">
      <Background file="/images/room.svg"/>
      <Asset name="Broom!"/>
      <Asset name="ServerRack!"/>
      <Foreground file="/images/foreground.svg"/>
    </div>);
  }
});

export default Scene;
