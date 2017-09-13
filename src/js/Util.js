/**
 * This script contains utility functions available as this.[method]
 */

var GameUtil = {
  getNumericStyleProperty: function(style, prop){
    return parseInt(style.getPropertyValue(prop),10) ;
  },

  getElementPosition: function(e) {
    var x = 0, y = 0;
    var inner = true ;
    do {
      x += e.offsetLeft;
      y += e.offsetTop;
      var style = getComputedStyle(e,null) ;
      var borderTop = this.getNumericStyleProperty(style,"border-top-width") ;
      var borderLeft = this.getNumericStyleProperty(style,"border-left-width") ;
      y += borderTop ;
      x += borderLeft ;
      if (inner){
        var paddingTop = this.getNumericStyleProperty(style,"padding-top") ;
        var paddingLeft = this.getNumericStyleProperty(style,"padding-left") ;
        y += paddingTop ;
        x += paddingLeft ;
      }
      inner = false ;
    } while (e = e.offsetParent);
    return { x: x, y: y };
  },

  getViewportDimensions: function() {
    var w = window,
      d = document,
      documentElement = d.documentElement,
      body = d.getElementsByTagName('body')[0],
      width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
      height = w.innerHeight|| documentElement.clientHeight|| body.clientHeight;

    return {width, height};
  },

  getClickOnScenePos: function(e) {
    var stagePos = this.getElementPosition(document.getElementById('scene'));
    return { x: e.pageX - stagePos.x, y: e.pageY - stagePos.y };
  }
};

module.exports = GameUtil;