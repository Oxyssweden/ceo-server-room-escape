import React from 'react';
import Asset from '../../../components/Asset';

class Broom extends Asset {
  constructor(props) {
    super(props);
    this.actions = {
      "Look"() {Q().say('It´s a broom.').say("Or is it's a queue?").play();},
      "Pick up": 'This is no time for cleaning!',
  };
  }
}

export default Broom;
