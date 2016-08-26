import React from 'react';
var EventEmitterMixin = require('react-event-emitter-mixin');

const DepthMap = React.createClass({
  mixins:[EventEmitterMixin],

  componentWillMount() {
    this.eventEmitter('on','walkingTo',(asset, pos)=>{
      var depth = this.getDepth(pos);
      if (depth) {
        asset.setState({
          zIndex: Math.ceil(depth),
          scale: this.getScale(depth)
        });
      } else {
        asset.stopWalk(0);
      }
    });
  },

  initDepthMap: function() {
    var img = this.refs.img;
    var canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    canvas.getContext('2d').drawImage(img, 0, 0, img.width, img.height);
    this.depthMap = canvas;
  },

  getDepth: function(pos) {
    if (!this.depthMap) {
      this.initDepthMap();
    }
    var pixelData = this.depthMap.getContext('2d')
      .getImageData(Math.round(pos.x), Math.round(pos.y), 1, 1).data,
      depth = pixelData[1],
      isBlocked = pixelData[0] == 255 && pixelData[1] != 255;
    return isBlocked ? false : depth;
  },

  getScale: function(depth) {
    var range = this.props.maxScale - this.props.minScale;
    return parseFloat(this.props.minScale) + parseFloat(depth / 255 * range);
  },

  handleClick: function(event) {
    var pos = getClickOnScenePos(event);
    this.eventEmitter('emit','walkTo', pos.x, pos.y);
  },

  render: function(){
    return (<img onClick={this.handleClick} className="depthmap" ref="img" src={this.props.file}/>);
  }
});

export default DepthMap;
