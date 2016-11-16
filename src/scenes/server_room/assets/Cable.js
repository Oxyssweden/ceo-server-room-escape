import React from 'react';
import Asset from '../../../components/Asset';

class Cable extends Asset {
  constructor(props) {
    super(props);
    this.state = {
      "id": "cable",
      "sprite": "/images/cable.svg",
      "inventorySprite": "/images/inventory/inventory_cable.png",
      "position": {
        "x":"565",
        "y":"499"
      },
      "size": {
        "h":"79",
        "w":"62"
      },
      "zindex": "104",
      "actions": [
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
      ],
      "on_stage":true
    };
  }
}

export default Cable;
