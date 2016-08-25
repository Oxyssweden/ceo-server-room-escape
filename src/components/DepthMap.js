import React from 'react';
var EventEmitterMixin = require('react-event-emitter-mixin');

const DepthMap = React.createClass({
  mixins:[EventEmitterMixin],

  componentWillMount() {
    this.eventEmitter('on','walkingTo',(asset, pos)=>{
      var depth = this.getDepth(pos);
      asset.setState({
        zIndex: depth * 100,
        scale: depth
      });
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
      depth = pixelData[1] / 255,
      range = this.props.maxScale - this.props.minScale,
      scale = parseFloat(this.props.minScale) + parseFloat(depth * range);

    return scale;
  },

  handleClick: function(event) {
    var pos = getClickOnScenePos(event),
      floor = 560;
    console.log(pos);
    if (pos.y < floor) {pos.y = floor}
    this.eventEmitter('emit','walkTo', pos.x, pos.y);
  },

  render: function(){
    return (<img onClick={this.handleClick} className="depthmap" ref="img" src={this.props.file}/>);
  }
});

export default DepthMap;
