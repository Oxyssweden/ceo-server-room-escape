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

  getDepth: function(pos) {return 1},

  handleClick: function(event) {
    var pos = getClickOnScenePos(event),
      floor = 560;
    console.log(pos.y);
    if (pos.y < floor) {pos.y = floor}
    this.eventEmitter('emit','walkTo', pos.x, pos.y);
  },

  render: function(){
    return (<img onClick={this.handleClick} className="depthmap" ref="depthmap" src={this.props.file}/>);
  }
});

export default DepthMap;
