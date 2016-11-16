import React from 'react';
import Asset from '../../../components/Asset';

class BroomAndKnife extends Asset {
  constructor(props) {
    super(props);
    this.state = {
      "id": "broomandknife",
      "sprite":"",
      "inventorySprite": "/images/inventory/inventory_broom-knife.png",
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
          "effect": "say('If there only was a way to make the knife stay on it.)"
        },
        {
          "label": "Pick up",
          "effect": ""
        },
        {
          "label": "Use",
          "effect": {
            "_var": "usingItem()",
            "self":"",
            "cable": "addToInventory('knifebroom');removeFromInventory('cable', 'broomandknife')"
          }
        }
      ],
      "on_stage":false
    }
  }
}

export default BroomAndKnife;
