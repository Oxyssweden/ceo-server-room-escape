import React from 'react';
import Asset from '../../../components/Asset';

class CopyingMachine extends Asset {
  constructor(props) {
    super(props);
    this.state = {
      "id": "copying-machine",
      "sprite": "/images/copying_machine.svg",
      "inventorySprite": "",
      "position": {
        "x":"864",
        "y":"334"
      },
      "size": {
        "h":"218",
        "w":"147"
      },
      "zindex": 2,
      "actions": [
        {
          "label": "Look",
          "effect": "say('Never touching this copying machine again. Not since I caught our cleaning lady sitting bare naked on it.')"
        },
        {
          "label": "Pick up",
          "effect": "say('I can´t do that.')"
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
    ;
  }
}

export default CopyingMachine;
