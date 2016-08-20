import React from 'react';
import List from './List';
var EventEmitterMixin = require('react-event-emitter-mixin');

const Inventory = React.createClass({
  mixins:[EventEmitterMixin],
  getInitialState: function(){
    return {
      items: []
    }
  },
  componentWillMount: function(){
    this.eventEmitter('on','addToInventory',(item)=>{
      var items = this.state.items
      items.push(item);
      this.setState(
        {
          "items": items
        }
      )
    });
  },
  render: function(){
    return (<div id="inventory">
      <List items={this.state.items}/>
      </div>);
  }
});

export default Inventory;
