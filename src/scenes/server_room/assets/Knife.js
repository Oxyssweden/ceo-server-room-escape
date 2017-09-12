import React from 'react';
import Asset from '../../../components/Asset';

class Knife extends Asset {
  constructor(props) {
    super(props);
    var self = this;
    this.actions = {
      "Look": 'A knife? Who put a knife here? Why?!',
      "Pick up"() { self.pickUp(); },
      "Use"() {
      },
    };
  }
}

export default Knife;
