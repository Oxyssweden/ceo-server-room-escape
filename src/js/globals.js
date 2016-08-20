/**
 * This script contains global scope functions.
 */

(function () {
  var EE = require('react-event-emitter-mixin');
  window.itemInUse = null;

  window.say = function(text) {
    EE.eventEmitter('emit', 'speak', text);
  };

  window.usingItem = function() {
    return window.itemInUse ? window.itemInUse : 'self';
  };

  window.addToInventory = function(item) {
    console.log(item);
    EE.eventEmitter('emit', 'addToInventory', item);
    item.setState({
      "on_stage": false
    });
  };

  window.removeFromInventory = function(item) {
    console.log(item);
    EE.eventEmitter('emit', 'removeFromInventory', item);
  };

})();