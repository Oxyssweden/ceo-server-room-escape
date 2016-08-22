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
      <Asset assetId="binder_shelf"/>
      <Asset assetId="broom"/>
      <Asset assetId="broomandknife"/>
      <Asset assetId="business_card"/>
      <Asset assetId="cabinet"/>
      <Asset assetId="cable"/>
      <Asset assetId="calendar"/>
      <Asset assetId="computer_table"/>
      <Asset assetId="copying_machine"/>
      <Asset assetId="key"/>
      <Asset assetId="knife"/>
      <Asset assetId="knifebroom"/>
      <Asset assetId="lamp"/>
      <Asset assetId="newspaper"/>
      <Asset assetId="paper_shelf"/>
      <Asset assetId="paper_shredder"/>
      <Asset assetId="rack"/>
      <Asset assetId="servers"/>
      <Asset assetId="waterpipe"/>
      <Asset assetId="waterpipe_fixed"/>
      <Me/>
      <Foreground file="/images/foreground.svg"/>
      <ContextMenu/>
    </div>);
  }
});

export default Scene;
