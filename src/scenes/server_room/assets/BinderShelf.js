import React from 'react';
import Asset from '../../../components/Asset';

class BroomAndKnife extends Asset {
  constructor(props) {
    super(props);
    this.state = {
      "id": "binder-shelf",
      "sprite": "/images/binder_shelf.svg",
      "inventorySprite": "",
      "position": {
        "x":"214",
        "y":"197"
      },
      "size": {
        "h":"92",
        "w":"130"
      },
      "zindex": 2,
      "actions": [
        {
          "label": "Look",
          "effect": "say('The accounting covers. I prefer fiction but last year´s edition was really exciting!')"
        },
        {
          "label": "Pick up",
          "effect": "say('It is enough to read them once.')"
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
  }
}

export default BroomAndKnife;
