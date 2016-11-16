import React from 'react';
import Asset from '../../../components/Asset';

class Lamp extends Asset {
  constructor(props) {
    super(props);
    this.state = {
      "id": "lamp",
      "sprite": "/images/lamp.svg",
      "inventorySprite": "",
      "position": {
        "x":"713",
        "y":"20"
      },
      "size": {
        "h":"267",
        "w":"262"
      },
      "zindex": 2,
      "actions": [
        {
          "label": "Look",
          "effect": "say('It is a lamp.')"
        },
        {
          "label": "Pick up",
          "effect": "say('I don´t want it.')"
        },
        {
          "label": "Use",
          "effect": {
            "_var": "usingItem()",
            "self":""
          }
        }
      ],
      "states": {
        "open":"",
        "closed":""
      },
      "on_stage":true
    }
  }
}

export default Lamp;
