import React from 'react';
import List from './List';

const Inventory = React.createClass({
  getInitialState: function(){
    return {
      initialItems: [
        "Knife",
        "Broccoli",
      ],
      items: []
    }
  },
  componentWillMount: function(){
    this.setState({items: this.state.initialItems})
  },
  render: function(){
    return (<div id="inventory">
      <List items={this.state.items}/>
      </div>);
  }
});

export default Inventory;
