import React from 'react';
import Asset from '../../../components/Asset';

class Cable extends Asset {
  constructor(props) {
    super(props);
    this.state.actions = [
      {
        "label": "Look",
        "effect": "say('A CAT6 cable.')"
      },
      {
        "label": "Pick up",
        "effect": "this.pickUp()"
      },
      {
        "label": "Use",
        "effect": {
          "_var": "usingItem()",
          "self":"",
          "broomandknife": "addToInventory('knifebroom');removeFromInventory('cable', 'broomandknife')"
        }
      }
    ];
  }
}

export default Cable;
