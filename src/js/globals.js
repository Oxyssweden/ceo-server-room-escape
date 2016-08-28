/**
 * This script contains global scope functions.
 */

(function () {
  window.depthMap = function() {
    return window.scene.refs.depthmap || null;
  };

  var EE = require('react-event-emitter-mixin');
  window.itemInUse = null;

  window.say = function(text) {
    EE.eventEmitter('emit', 'speak', text);
  };

  window.usingItem = function() {
    return window.itemInUse ? window.itemInUse : 'self';
  };

  window.useItem = function(id) {
    EE.eventEmitter('emit', 'useItem', id);
    window.itemInUse = id;
  };

  window.getNumericStyleProperty = function(style, prop){
    return parseInt(style.getPropertyValue(prop),10) ;
  };

  window.getElementPosition = function(e) {
    var x = 0, y = 0;
    var inner = true ;
    do {
      x += e.offsetLeft;
      y += e.offsetTop;
      var style = getComputedStyle(e,null) ;
      var borderTop = getNumericStyleProperty(style,"border-top-width") ;
      var borderLeft = getNumericStyleProperty(style,"border-left-width") ;
      y += borderTop ;
      x += borderLeft ;
      if (inner){
        var paddingTop = getNumericStyleProperty(style,"padding-top") ;
        var paddingLeft = getNumericStyleProperty(style,"padding-left") ;
        y += paddingTop ;
        x += paddingLeft ;
      }
      inner = false ;
    } while (e = e.offsetParent);
    return { x: x, y: y };
  };

  window.getClickOnScenePos = function(e) {
    var stagePos = getElementPosition(document.getElementById('scene'));
    return { x: e.pageX - stagePos.x, y: e.pageY - stagePos.y };
  }

})();