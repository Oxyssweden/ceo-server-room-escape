import React from 'react';

var EventEmitterMixin = require('react-event-emitter-mixin');

class Asset extends React.Component {
  constructor(props) {
    super(props);
    this.EE = EventEmitterMixin;
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      "position": {
        "x": props.x,
        "y": props.y
      },
      "zindex": props.z,
      "sprite": props.src,
      "width": props.width,
      "height": props.height,
    };
  }

  handleClick(event) {
    if (itemInUse) {
      this.takeAction('Use');
      this.EE.eventEmitter('emit', 'usedItem', itemInUse);
      itemInUse = null;
    } else {
      var pos = getClickOnScenePos(event);
      this.EE.eventEmitter('emit','contextMenuOpen', pos.x, pos.y, this);
    }
  };

  pickUp() {
    this.EE.eventEmitter('emit', 'addToInventory', this);
    this.setState({
      "on_stage": false
    });
  };

  discard() {
    this.EE.eventEmitter('emit', 'removeFromInventory', this);
  };

  takeAction(actionLabel) {
    var lookup = {};
    for (var i = 0, len = this.state.actions.length; i < len; i++) {
      lookup[this.state.actions[i].label] = this.state.actions[i].effect;
    }
    this.evalAction(lookup[actionLabel]);
  };

  evalAction(effect) {
    if (typeof effect === 'object') {
      var key = eval(effect._var);
      if (typeof(effect[key]) != undefined) {
        this.evalAction(effect[key]);
      } else {
        this.evalAction(effect['default']);
      }
    } else {
      eval(effect);
    }
  };

  getStyle() {
    return {
      display: this.state.on_stage == false ? 'none' : 'initial',
      height: isNaN(this.state.height) ? 'auto' : this.state.height + 'px',
      width: isNaN(this.state.width) ? 'auto' : this.state.width + 'px',
      top: this.state.position.y + 'px',
      left: this.state.position.x + 'px',
      zIndex: this.state.zindex
    };
  }

  render(){
    return (<img onClick={this.handleClick}
                 id={this.props.id}
                 className="asset"
                 src={this.state.sprite}
                 style={this.getStyle()}/>);
  }
}

export default Asset;
