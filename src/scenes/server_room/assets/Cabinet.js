import React from 'react';
import Asset from '../../../components/Asset';

class Cabinet extends Asset {
  constructor(props) {
    super(props);
    this.state = {
      "id": "cabinet",
      "sprite": "/images/archive.svg",
      "inventorySprite": "",
      "position": {
        "x":"1045",
        "y":"341"
      },
      "size": {
        "h":"181",
        "w":"124"
      },
      "zindex": 3,

      "actions": [
        {
          "label": "Look",
          "effect": "say('A filing cabinet. Seems to be locked.')"
        },
        {
          "label": "Pick up",
          "effect": "say('This is way too heavy for me to pick it up.')"
        },
        {
          "label": "Use",
          "effect": {
            "_var": "usingItem()",
            "self":"",
            "key": "say('Unlocked the cabinet!!!!')"
          }
        }
      ],
      "states": {
        "open":"",
        "closed":""
      },
      "on_stage":true
    };
  }
}

export default Cabinet;
