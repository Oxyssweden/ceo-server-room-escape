import React from 'react';
import Asset from '../../../components/Asset';

class Knife extends Asset {
  constructor(props) {
    super(props);
    this.state = {
      "id": "knife",
      "sprite": "/images/archive_open_knife.svg",
      "inventorySprite": "/images/inventory/inventory_knife.png",
      "position": {
        "x":"",
        "y":""
      },
      "size": {
        "h":"0",
        "w":"0"
      },
      "zindex": 1,
      "actions": [
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
      ],
      "on_stage":false
    };
  }
}

export default Knife;
