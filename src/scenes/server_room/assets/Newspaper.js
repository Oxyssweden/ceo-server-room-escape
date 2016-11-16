import React from 'react';
import Asset from '../../../components/Asset';

class Newspaper extends Asset {
  constructor(props) {
    super(props);
    this.state = {
      "id": "newspaper",
      "sprite": "/images/newspaper.svg",
      "inventorySprite": "",
      "position": {
        "x":"42",
        "y":"631"
      },
      "size": {
        "h":"86",
        "w":"125"
      },
      "zindex": 1,
      "actions": [
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
      ],
      "on_stage":true
    };
  }
}

export default Newspaper;
