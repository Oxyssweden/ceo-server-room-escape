import React from 'react';
import Asset from '../../../components/Asset';

class Newspaper extends Asset {
  constructor(props) {
    super(props);
    var self = this;
    this.setState()
    this.actions = {
      "Look": 'Who´s been reading "Drones Weekly" in here?',
      "Pick up"() { self.pickUp(); },
    };
  }
}

export default Newspaper;
