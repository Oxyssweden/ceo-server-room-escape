import React from 'react';
import Asset from '../../../components/Asset';

class Broom extends Asset {
  constructor(props) {
    super(props);
    this.actions = {
      "Look"() {say('It´s a broom.');},
      "Pick up": 'This is no time for cleaning!',
  };
  }
}

export default Broom;
