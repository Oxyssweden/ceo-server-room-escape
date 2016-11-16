import React from 'react';
import Asset from '../../../components/Asset';

class KnifeBroom extends Asset {
  constructor(props) {
    super(props);
    this.state = {
      "id": "knifebroom",
      "sprite":"",
      "inventorySprite": "",
      "position": {
        "x":"",
        "y":""
      },
      "size": {
        "h":"0",
        "w":"0"
      },
      "zindex": 1,
      "actions": [
        {
          "label": "Look",
          "effect": "say('It's a broom with a knife tied to it at the end. Like a strange stone-age spear made by modern things. Is this what my life has become? What happened? Where did it all go wrong?)"
        },
        {
          "label": "Pick up",
          "effect": ""
        },
        {
          "label": "Use",
          "effect": {
            "_var": "usingItem()",
            "self":"",
            "waterpipe": "finalconclusion()"
          }
        }
      ],
      "on_stage":false
    };
  }
}

export default KnifeBroom;
