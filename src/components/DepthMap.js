import React from 'react';
import astar from 'javascript-astar';
var EventEmitterMixin = require('react-event-emitter-mixin');

const DepthMap = React.createClass({
  mixins:[EventEmitterMixin],
  resolution: 10,

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
    data = this.imageData = imageData.data;
    len = data.length;

    // Green channel signifies depth (0-255) in our image.
    // Extract green channel from imageData: [r, g, b, a, r, g, b, a, ...]
    // into a two dimensional grid [[1,0],[1,0]] where 0 is non-traversible
    // and a nuber above 1 signifies cost of traversing (scale of the pixel).
    for (var line = 0, pixelStart; line < canvasHeight; line += this.resolution) {
      var row = [];
      for (var col = 0; col < canvasWidth; col += this.resolution) {
        pixelStart = (line * canvasWidth + col) * 4;
        // If red is high this tile is blocked
        if (data[pixelStart] == 255) {
          row.push(0);
        } else {
          var scale = this.getScale(data[pixelStart+1]),
            // Get a number that's never below 1
            weight = 1 / scale * parseFloat(this.props.maxScale);
          row.push(weight);
        }
      }
      greenChannel.push(row)
    }

    this.graph = new astar.Graph(greenChannel, { diagonal: true });
  },

  findPath: function(startPos, endPos) {

    if (!this.graph) {
      this.init();
    }

    var start = this.graph.grid[this.posToGrid(startPos.y)][this.posToGrid(startPos.x)],
      end = this.graph.grid[this.posToGrid(endPos.y)][this.posToGrid(endPos.x)];
    return astar.astar.search(this.graph, start, end, { heuristic: astar.astar.heuristics.diagonal });
  },

  getDepth: function(pos) {
    if (!this.imageData) {
      this.init();
    }
    var pixelIndex = ((pos.y * this.depthMap.width) + pos.x) * 4,
      depth = this.imageData[pixelIndex + 1]
    return depth;
  },

  getShadow: function(pos) {
    if (!this.imageData) {
      this.init();
    }
    var pixelIndex = ((pos.y * this.depthMap.width) + pos.x) * 4,
      depth = this.imageData[pixelIndex + 2]
    return depth;
  },

  getScale: function(depth) {
    var range = this.props.maxScale - this.props.minScale;
    return parseFloat(this.props.minScale) + parseFloat(depth / 255 * range);
  },

  getDepthFromWeight: function(weight) {
     var depth = this.props.maxScale / weight * 255 * (this.props.maxScale - this.props.minScale) - this.props.minScale;
    return depth;
  },

  gridToPos: function(gridPos) {
    return this.resolution * gridPos;
  },

  posToGrid: function(pos) {
    return Math.floor(pos / this.resolution);
  },

  handleClick: function(event) {
    var pos = getClickOnScenePos(event);
    this.eventEmitter('emit','walkTo', pos, this);
  },

  render: function(){
    return (<img onClick={this.handleClick} style={{width:this.props.width+'px', height:this.props.height+'px'}} className="depthmap" ref="img" src={this.props.file}/>);
  }
});

export default DepthMap;
