import React from 'react';
import Asset from '../../../components/Asset';

class Waterpipe extends Asset {
  constructor(props) {
    super(props);
    this.state = {
      "id": "waterpipe",
      "sprite": "/images/pipe.svg",
      "inventorySprite": "",
      "position": {
        "x":"115",
        "y":"30"
      },
      "size": {
        "h":"465",
        "w":"1084"
      },
      "zindex": 1,
      "actions": [
        {
          "label": "Look",
          "effect": "say('It´s leaking. That can´t be safe')"
        },
        {
          "label": "Pick up",
          "effect": "say('What am I supposed to do? Rip it out of the wall?')"
        },
        {
          "label": "Use",
          "effect": {
            "_var": "usingItem()",
            "self":""
          }
        }
      ],
      "use": {
        "self":""
      },
      "on_stage":true
    };
  }
}

export default Waterpipe;