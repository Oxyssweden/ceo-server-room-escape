import React from 'react';
import Asset from '../../../components/Asset';

class Key extends Asset {
  constructor(props) {
    super(props);
    this.state = {
      "id": "key",
      "sprite": "/images/key.svg",
      "inventorySprite": "/images/inventory/inventory_key.png",
      "position": {
        "x":"81",
        "y":"653"
      },
      "size": {
        "h":"31",
        "w":"42"
      },
      "zindex": 1,
      "actions": [
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
      ],
      "on_stage":true
    };
  }
}

export default Key;
