import React from 'react';
import Asset from '../../../components/Asset';

class Calendar extends Asset {
  constructor(props) {
    super(props);
    this.state.actions = [
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
    ];
  }
}

export default Calendar;
