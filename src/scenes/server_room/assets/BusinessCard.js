import React from 'react';
import Asset from '../../../components/Asset';

class BusinessCard extends Asset {
  constructor(props) {
    super(props);
    this.state = {
      "id": "business-card",
      "sprite": "/images/business_card.svg",
      "inventorySprite": "",
      "position": {
        "x":"780",
        "y":"608"
      },
      "size": {
        "h":"27",
        "w":"69"
      },
      "zindex": 2,
      "actions": [
        {
          "label": "Look",
          "effect": "say('A business card belonging to the tech guy. Hmm... Maybe he could get me out of here.')"
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

export default BusinessCard;
