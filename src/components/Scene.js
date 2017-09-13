import React from 'react';
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
      leftOffset: game.util.getViewportDimensions().width/2 - pos.x
    });
  },

  sceneDimensions: function() {
    return {
      width: this.state.width+'px',
      height: this.state.height+'px',
    }
  },

  getStyle: function() {
    var viewport = game.util.getViewportDimensions();
    var maxOffset = -this.props.width + viewport.width;
    var minOffset = 0;

    if(viewport.width < this.props.width) {
      if(this.state.leftOffset < minOffset && this.state.leftOffset > maxOffset) {
        return {
          top: this.state.topOffset,
          left: this.state.leftOffset
        };
      } else if(this.state.leftOffset < maxOffset){
        return {
          top: 0,
          left: maxOffset
        }
      }
    }

    return {
      top: 0,
      left: 0
    };
  },

  parallaxState: function() {
    var viewport = game.util.getViewportDimensions();
    var maxOffset = -this.props.width + viewport.width;
    var minOffset = 0;
    if(viewport.width < this.props.width) {
      if(this.state.leftOffset < minOffset && this.state.leftOffset > maxOffset) {
        return 'moving';
      } else if(this.state.leftOffset < maxOffset){
        return 'right';
      }
    }
    return 'left';
  },

  render: function(){
    return (<div id="scene" className="scene" style={this.getStyle()}>
    </div>);
  }
});

export default Scene;
