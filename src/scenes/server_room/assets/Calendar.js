import React from 'react';
import Asset from '../../../components/Asset';

class Calendar extends Asset {
  constructor(props) {
    super(props);
    this.state = {
      "id": "calendar",
      "sprite": "/images/calendar.svg",
      "inventorySprite": "",
      "position": {
        "x":"908",
        "y":"222"
      },
      "size": {
        "h":"79",
        "w":"85"
      },
      "zindex": 3,
      "actions": [
        {
          "label": "Look",
          "effect": "say('A calendar. August 1997.')"
        },
        {
          "label": "Pick up",
          "effect": "say('I can´t take this down. It is a nostalgic thing.')"
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

export default Calendar;
