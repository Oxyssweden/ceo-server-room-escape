import React from 'react';
import Asset from './Asset';
import Background from './Background';
import Foreground from './Foreground';
import Me from './Me';
import ContextMenu from './ContextMenu';

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
      <Asset assetId="waterpipe_fixed"/>
      <Asset assetId="rack"/>
      <Asset assetId="servers"/>
      <Me/>
      <Foreground file="/images/foreground.svg"/>
      <ContextMenu/>
    </div>);
  }
});

export default Scene;
