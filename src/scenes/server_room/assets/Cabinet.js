import React from 'react';
import Asset from '../../../components/Asset';

class Cabinet extends Asset {
  constructor(props) {
    super(props);
    this.state.actions = [
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
    ];
  }
}

export default Cabinet;
