import React from 'react';
import Scene from './Scene';
import UserMenu from './UserMenu';

const Main = React.createClass({
  render: function(){
    return (
      <div>
        <Scene/>
        <UserMenu/>
      </div>
    );
  }
});

export default Main;
