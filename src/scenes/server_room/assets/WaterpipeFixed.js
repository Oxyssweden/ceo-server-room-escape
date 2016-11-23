import React from 'react';
import Asset from '../../../components/Asset';

class WaterpipeFixed extends Asset {
  constructor(props) {
    super(props);
    this.state.actions = [
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
    ];
  }
}

export default WaterpipeFixed;
