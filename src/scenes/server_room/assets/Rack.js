import React from 'react';
import Asset from '../../../components/Asset';

class Rack extends Asset {
  constructor(props) {
    super(props);
    this.state = {
      "id": "rack",
      "sprite": "/images/rack.svg",
      "inventorySprite": "",
      "position": {
        "x":"505",
        "y":"280"
      },
      "size": {
        "h":"401",
        "w":"175"
      },
      "zindex": 104,
      "actions": [
        {
          "label": "Look",
          "effect": "say('It´s a server rack.')"
        },
        {
          "label": "Pick up",
          "effect": ""
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

export default Rack;
