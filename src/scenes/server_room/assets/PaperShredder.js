import React from 'react';
import Asset from '../../../components/Asset';

class PaperShredder extends Asset {
  constructor(props) {
    super(props);
    this.state = {
      "id": "paper-shredder",
      "sprite": "/images/paper_shredder.svg",
      "inventorySprite": "",
      "position": {
        "x":"778",
        "y":"428"
      },
      "size": {
        "h":"80",
        "w":"74"
      },
      "zindex": 2,
      "actions": [
        {
          "label": "Look",
          "effect": "say('A broken paper shredder.')"
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
    };
  }
}

export default PaperShredder;
