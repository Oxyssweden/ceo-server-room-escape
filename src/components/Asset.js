import React from 'react';
import ActionableMixin from '../mixins/ActionableMixin';
var EventEmitterMixin = require('react-event-emitter-mixin');

const Asset = React.createClass({
  mixins:[EventEmitterMixin, ActionableMixin],

  getInitialState: function() {
    var id = this.props.assetId;
    return require('json!../assets/'+id);
  },

  handleClick: function(event) {
    if (itemInUse) {
      this.takeAction('Use');
      this.eventEmitter('emit', 'usedItem', itemInUse);
      itemInUse = null;
    } else {
      var pos = getClickOnScenePos(event);
      this.eventEmitter('emit','contextMenuOpen', pos.x, pos.y, this);
    }
  },

  pickUp: function() {
    this.eventEmitter('emit', 'addToInventory', this);
    this.setState({
      "on_stage": false
    });
  },

  discard: function() {
    EE.eventEmitter('emit', 'removeFromInventory', this);
  },
  
  render: function(){
    var inlineStyle = {
      display: this.state.on_stage == true ? 'initial' : 'none',
      height: this.state.size.h,
      width: this.state.size.w,
      top: this.state.position.y,
      left: this.state.position.x,
      zIndex: this.state.zindex
    };
    return (<img onClick={this.handleClick} id={this.state.id} className="asset" src={this.state.sprite} style={inlineStyle}/>);
  }
});

export default Asset;
