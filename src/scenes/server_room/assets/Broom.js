import React from 'react';
import Asset from '../../../components/Asset';

class Broom extends Asset {
  constructor(props) {
    super(props);
    this.state = {
      "id": "broom",
      "sprite": "/images/broomstick.svg",
      "inventorySprite": "/images/inventory/inventory_broomstick.png",
      "position": {
        "x":"679",
        "y":"258"
      },
      "size": {
        "h":"253",
        "w":"84"
      },
      "zindex": 3,
      "actions": [
        {
          "label": "Look",
          "effect": "say('It´s a broom.')"
        },
        {
          "label": "Pick up",
          "effect": {
            "_var": "",
            "true": ["addToInventory()", "removeFromInventory()"],
            "false": "say('This is no time for cleaning!')"
          }
        },
        {
          "label": "Use",
          "effect": {
            "_var": "usingItem()",
            "self":""
          }
        }
      ],
      "on_stage":true
    }
  }
}

export default Broom;
