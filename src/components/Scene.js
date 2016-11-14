import React from 'react';
import Asset from './Asset';
import Background from './Background';
import Foreground from './Foreground';
import DepthMap from './DepthMap';
import Me from './Me';
import ContextMenu from './ContextMenu';

var EventEmitterMixin = require('react-event-emitter-mixin');

const Scene = React.createClass({
  mixins:[EventEmitterMixin],

  getInitialState: function(){
    return {
      topOffset: 0,
      leftOffset: 0,
      width: this.props.width,
      height: this.props.height,
    }
  },

  componentWillMount() {
    window.scene = this;

    this.eventEmitter('on','walkingTo',(char, pos)=>{
      this.updateOffset(pos);
    });
  },

  updateOffset: function(pos) {
    this.setState({
      leftOffset: getViewportDimensions().width/2 - pos.x
    });
  },

  sceneDimensions: function() {
    return {
      width: this.state.width+'px',
      height: this.state.height+'px',
    }
  },

  render: function(){

    var viewport = getViewportDimensions();
    var maxOffset = -this.props.width + viewport.width;
    var minOffset = 0;
    var parallaxState = 'left';
    var style = {
      top: 0,
      left: 0
    };

    if(viewport.width < this.props.width) {
      if(this.state.leftOffset < minOffset && this.state.leftOffset > maxOffset) {
        parallaxState = 'moving';
        var style = {
          top: this.state.topOffset,
          left: this.state.leftOffset
        };
      } else if(this.state.leftOffset < maxOffset){
        parallaxState = 'right';
        var style = {
          top: 0,
          left: maxOffset
        }
      }
    }

    return (<div id="scene" className="scene" style={style}>
      <DepthMap ref="depthmap" minScale="0.2" maxScale="1.2" file="/images/bg-channels.svg" width={this.props.width} height={this.props.height} />
      <Background file="/images/bg-space.png" width={this.props.width} height={this.props.height} />
    {/*<Asset assetId="binder_shelf"/>
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
      <Asset assetId="waterpipe_fixed"/>*/}
      <Me posTop="600" posLeft="445"/>
    {/*<Foreground parallaxState={parallaxState} offset={this.state.leftOffset} parallax="0.4" file="/images/foreground.svg"/>*/}
      <ContextMenu/>
    </div>);
  }
});

export default Scene;
