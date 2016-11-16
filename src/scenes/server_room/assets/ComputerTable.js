import React from 'react';
import Asset from '../../../components/Asset';

class ComputerTable extends Asset {
  constructor(props) {
    super(props);
    this.state = {
      "id": "computer-table",
      "sprite": "/images/computer_table.svg",
      "inventorySprite": "",
      "position": {
        "x":"215",
        "y":"303"
      },
      "size": {
        "h":"217",
        "w":"192"
      },
      "zindex": 2,
      "actions": [
        {
          "label": "Look",
          "effect": "say('The computer table. They have told me not to touch this.')"
        },
        {
          "label": "Pick up",
          "effect": "say('Not supposed to touch this.')"
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
    };
  }
}

export default ComputerTable;
