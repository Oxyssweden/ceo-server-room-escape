import React from 'react';
import Asset from '../../../components/Asset';

class Servers extends Asset {
  constructor(props) {
    super(props);
    this.state = {
      "id": "newspaper",
      "sprite": "/images/servers.svg",
      "inventorySprite": "",
      "position": {
        "x":"515",
        "y":"298"
      },
      "size": {
        "h":"246",
        "w":"155"
      },
      "zindex": 104,
      "actions": [
        {
          "label": "Look",
          "effect": "say('I think these are servers. Better not mess around with it.')"
        },
        {
          "label": "Pick up",
          "effect": "say('I cant pick up that!')"
        },
        {
          "label": "Use",
          "effect": "say('I think these are servers. Better not mess around with it.')"
        }
      ],
      "on_stage":true
    };
  }
}

export default Servers;
