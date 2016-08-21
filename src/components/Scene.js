import React from 'react';
import Asset from './Asset';
import Background from './Background';
import Foreground from './Foreground';
import Me from './Me';
import ContextMenu from './ContextMenu';
var EventEmitterMixin = require('react-event-emitter-mixin');

const Scene = React.createClass({
  mixins:[EventEmitterMixin],

  getInitialState: function(){
    return {
      usingItem: false
    }
  },

  componentWillMount(){
    this.eventEmitter('on','useItem',(itemId)=>{
      this.setState({
        usingItem: true,
      });
    });
    this.eventEmitter('on','usedItem',(itemId)=>{
      this.setState({
        usingItem: false,
      });
    });
  },

  render: function(){
    var sceneStyle = '';
    sceneStyle += this.state.usingItem ? ' using-item' : '';
    return (<div id="scene" className={sceneStyle}>
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
