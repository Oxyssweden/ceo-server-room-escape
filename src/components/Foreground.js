import React from 'react';

const Foreground = React.createClass({
  render: function(){

      var viewport = getViewportDimensions();
      var parallaxState = this.props.parallaxState;
      var maxSceneOffset = -scene.props.width + viewport.width;
      var offset = 0;
      switch(parallaxState) {
          case 'left':
              offset = 0;
              break;
          case 'right':
              offset = maxSceneOffset * this.props.parallax;
              break;
          case 'moving':
              offset = this.props.offset * this.props.parallax;
              break;
      }

    var forgroundStyle = {
        zIndex: 1000,
        left: offset,
        width: scene.sceneDimensions().width,
        height: scene.sceneDimensions().height
      };
    return (<img className="foreground" src={this.props.file} style={forgroundStyle}/>);
  }
});

export default Foreground;