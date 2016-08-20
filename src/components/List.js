import React from 'react';

const List = React.createClass({
  handleClick: function(event) {
    say('Not implemented yet...');
  },
  render: function(){
    var that = this;
    return (
      <ul class="list">
        {
          this.props.items.map(function(item) {
            return <li onClick={that.handleClick} key={item.state.id}><img  className="inventory-item" src={item.state.sprite}/></li>
          })
        }
      </ul>
    )
  }
});

export default List;
