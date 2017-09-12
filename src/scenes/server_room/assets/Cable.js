import React from 'react';
import Asset from '../../../components/Asset';

class Cable extends Asset {
  constructor(props) {
    super(props);
    var self = this;
    this.actions = {
      "Look": 'A CAT6 cable.',
      "Pick up"() { self.pickUp(); },
      "Use"() {
      },
    };
  }
}

export default Cable;
