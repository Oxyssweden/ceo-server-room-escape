import React from 'react';

const List = React.createClass({
  handleClick: function(id, event) {
    useItem(id);
    say('Use '+id+' on what?');
  },
  render: function(){
    var that = this;
    return (
      <ul class="list">
        {
          this.props.items.map(function(item, index) {
            return <li onClick={that.handleClick.bind(this, item.state.id)} key={item.state.id}><img  className="inventory-item" src={item.state.sprite}/></li>
          })
        }
      </ul>
    )
  }
});

export default List;
