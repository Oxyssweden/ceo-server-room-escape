import React from 'react';
import Asset from '../../../components/Asset';

class Key extends Asset {
  constructor(props) {
    super(props);
    var self = this;
    this.actions = {
      "Look": 'A small key, but what does it open?',
      "Pick up"() { self.pickUp(); },
      "Use"() {
          if (game.usingItem() == 'cabinet') { alert('Open cabinet'); }
        },
      };
    this.state.inventorySprite = "/images/inventory/inventory_key.png";
  }
}

export default Key;
