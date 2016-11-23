import React from 'react';
import Asset from '../../../components/Asset';

class Key extends Asset {
  constructor(props) {
    super(props);
    this.state.actions = [
      {
        "label": "Look",
        "effect": "say('A small key, but what does it open?')"
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
          "cabinet": "openCabinet()"
        }
      }
    ];
    this.state.inventorySprite = "/images/inventory/inventory_key.png";
  }
}

export default Key;
