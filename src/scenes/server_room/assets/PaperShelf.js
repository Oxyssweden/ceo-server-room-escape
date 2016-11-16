import React from 'react';
import Asset from '../../../components/Asset';

class PaperShelf extends Asset {
  constructor(props) {
    super(props);
    this.state = {
      "id": "paper-shelf",
      "sprite": "/images/paper_shelf.svg",
      "inventorySprite": "",
      "position": {
        "x":"1055",
        "y":"246"
      },
      "size": {
        "h":"56",
        "w":"130"
      },
      "zindex": 2,
      "actions": [
        {
          "label": "Look",
          "effect": "say('A shelf with a stack of papers. Wanna hear a joke about paper? Nevermind, it´s tearable!')"
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

export default PaperShelf;
