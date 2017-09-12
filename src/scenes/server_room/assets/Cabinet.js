import React from 'react';
import Asset from '../../../components/Asset';

class Cabinet extends Asset {
  constructor(props) {
    super(props);
    this.actions = {
      "Look": 'A filing cabinet. Seems to be locked.',
      "Pick up": 'This is way too heavy for me to pick it up.',
      "Use"() {say('Unlocked the cabinet!!!!');}
    };
  }
}

export default Cabinet;
