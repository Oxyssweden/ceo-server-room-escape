import React from 'react';
import Asset from '../../../components/Asset';

class BusinessCard extends Asset {
  constructor(props) {
    super(props);
    this.state.actions = [
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
    ];
  }
}

export default BusinessCard;
