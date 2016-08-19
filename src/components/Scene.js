import React from 'react';
import Asset from './Asset';
import Background from './Background';
import Foreground from './Foreground';
import Me from './Me';

const Scene = React.createClass({
  render: function(){
    return (<div id="scene">
      <Background file="/images/room.svg"/>
      <Asset assetId="broom"/>
      <Asset assetId="broomandknife"/>
      <Asset assetId="cabinet"/>
      <Asset assetId="cable"/>
      <Asset assetId="key"/>
      <Asset assetId="knife"/>
      <Asset assetId="knifebroom"/>
      <Asset assetId="newspaper"/>
      <Asset assetId="waterpipe"/>
      <Me/>
      <Foreground file="/images/foreground.svg"/>
    </div>);
  }
});

export default Scene;
