/**
 * This script contains shared game functions.
 */
'use strict';

var EE = require('react-event-emitter-mixin');

var Game = {
  state: {},
  event: EE.eventEmitter,
  itemInUse: null,

  depthMap: function() {
    return scene.refs.depthmap || null;
  },

  say: function(text, who) {
    who = who || 'me';
    game.event('emit', who + '-speak', text);
  },

  usingItem: function() {
    return game.itemInUse ? game.itemInUse : 'self';
  },

  useItem: function(id) {
    game.event('emit', 'useItem', id);
    game.itemInUse = id;
  },

  util: require('./Util')
};

module.exports = Game;