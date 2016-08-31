import React from 'react';
import Graph from 'javascript-astar';
import astar from 'javascript-astar';
var EventEmitterMixin = require('react-event-emitter-mixin');

const DepthMap = React.createClass({
  mixins:[EventEmitterMixin],

  componentWillMount() {
    this.eventEmitter('on','walkingTo',(asset, pos)=>{

    });
  },

  init: function() {
    var img = this.refs.img,
      canvasWidth = img.width,
      canvasHeight = img.height,
      ctx,
      imageData,
      data,
      len,
      greenChannel = [],
      canvas = document.createElement('canvas');
    this.depthMap = canvas;
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0, canvasWidth, canvasHeight);
    imageData = ctx.getImageData(0, 0, canvasWidth, canvasHeight);
    data = imageData.data;
    len = data.length;

    // Extract green channel
    for (var i=0, row = []; i < canvasHeight; i++) {
      for (var j=1; i < len; j+=4) {
        row.push(data[i])
      }
      greenChannel.push(row)
    }

    this.graph = new Graph(greenChannel);
  },

  findPath: function(startPos, endPos) {
    if (!this.graph) {
      this.init();
    }
    var start = this.graph.grid[startPos.x][startPos.y],
      end = this.graph.grid[endPos.x][endPos.y];
    return astar.search(this.graph, start, end, { heuristic: astar.heuristics.diagonal });
  },

  getDepth: function(pos) {
    if (!this.depthMap) {
      this.init();
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
    this.eventEmitter('emit','walkTo', pos, this);
  },

  render: function(){
    return (<img onClick={this.handleClick} className="depthmap" ref="img" src={this.props.file}/>);
  }
});

export default DepthMap;
