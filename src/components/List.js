import React from 'react';

const List = React.createClass({
  handleClick: function(id, event) {
    game.useItem(id);
    game.say('Use '+id+' on what?');
  },
  render: function(){
    var that = this;
    return (
      <ul class="list">
        {
          this.props.items.map(function(item, index) {
            var sprite = item.state.inventorySprite ? item.state.inventorySprite : item.state.sprite;
            return <li onClick={that.handleClick.bind(that, item.state.id)} key={item.state.id}><img  className="inventory-item" src={sprite}/></li>
          })
        }
      </ul>
    )
  }
});

export default List;
