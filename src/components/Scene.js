import React from 'react';
import Asset from './Asset';
import Background from './Background';
import Foreground from './Foreground';
import Me from './Me';

const Scene = React.createClass({
  render: function(){
    return (<div id="scene">
      <Background file="/images/room.svg"/>

      <Me/>
      <Foreground file="/images/foreground.svg"/>
    </div>);
  }
});

export default Scene;
