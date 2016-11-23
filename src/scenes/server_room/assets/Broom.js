import React from 'react';
import Asset from '../../../components/Asset';

class Broom extends Asset {
  constructor(props) {
    super(props);
    this.state.actions = [
        {
          "label": "Look",
          "effect": "say('It´s a broom.')"
        },
        {
          "label": "Pick up",
          "effect": {
            "_var": "",
            "true": ["addToInventory()", "removeFromInventory()"],
            "false": "say('This is no time for cleaning!')"
          }
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

export default Broom;
