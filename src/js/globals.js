/**
 * This script contains global scope functions.
 */

(function () {
  var EE = require('react-event-emitter-mixin');
  window.itemInUse = null;

  window.msg = function(text) {
    EE.eventEmitter('emit', 'speak', text);
  };

  window.usingItem = function() {
    return window.itemInUse ? window.itemInUse : 'self';
  };

  window.addToInventory = function(item) {
    //EE.eventEmitter('emit', 'speak', 'Added this to inventory:' + item.state.id);
    EE.eventEmitter('emit', 'addToInventory', item);
    item.setState({
      "on_stage": false
    });
  };

  window.removeFromInventory = function(item) {
    EE.eventEmitter('emit', 'speak', 'Removed this from inventory:' + item.state.id);
    EE.eventEmitter('emit', 'removeFromInventory', item);
  };

})();