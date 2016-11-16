import React from 'react';
import Asset from '../../../components/Asset';

class WaterpipeFixed extends Asset {
  constructor(props) {
    super(props);
    this.state = {
      "id": "waterpipeFixed",
      "sprite": "/images/pipe_fixed.svg",
      "inventorySprite": "",
      "position": {
        "x":"511",
        "y":"7"
      },
      "size": {
        "h":"48",
        "w":"58"
      },
      "zindex": 3,
      "actions": [
        {
          "label": "Look",
          "effect": "say('Someone did a quickfix on that leak. That can´t be safe!')"
        },
        {
          "label": "Pick up",
          "effect": "say('I can´t reach it.')"
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

export default WaterpipeFixed;
