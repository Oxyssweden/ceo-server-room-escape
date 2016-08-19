import React from 'react';

const List = React.createClass({
  render: function(){
    return (
      <ul class="list">
        {
          this.props.items.map(function(item) {
            return <li key={item}>{item}</li>
          })
        }
      </ul>
    )
  }
});

export default List;
