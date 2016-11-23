import React from 'react';
import Asset from '../../../components/Asset';

class Knife extends Asset {
  constructor(props) {
    super(props);
    this.state.actions = [
      {
        "label": "Look",
        "effect": "say('A knife? Who put a knife here? Why?!')"
      },
      {
        "label": "Pick up",
        "effect": {
          "_var": "cabinet.state.open",
          "true": "addToInventory('knife')",
          "false": "say('')"
        }
      },
      {
        "label": "Use",
        "effect": {
          "_var": "usingItem()",
          "self":"",
          "broom": "addToInventory('broomandknife'), removeFromInventory('knife')"
        }
      }
    ];
  }
}

export default Knife;
