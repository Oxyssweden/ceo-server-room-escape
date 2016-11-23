import React from 'react';
import Asset from '../../../components/Asset';

class Newspaper extends Asset {
  constructor(props) {
    super(props);
    this.state.actions = [
      {
        "label": "Look",
        "effect": "say('Who´s been reading ´Drones Weekly´ in here?')"
      },
      {
        "label": "Pick up",
        "effect": "this.pickUp()"
      },
      {
        "label": "Use",
        "effect": {
          "_var": "usingItem()",
          "self":""
        }
      }
    ];
  }
}

export default Newspaper;
