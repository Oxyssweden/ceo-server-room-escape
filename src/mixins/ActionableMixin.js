var ActionableMixin = {
  takeAction: function(actionLabel) {
    var lookup = {};
    for (var i = 0, len = this.state.actions.length; i < len; i++) {
      lookup[this.state.actions[i].label] = this.state.actions[i].effect;
    }
    this.evalAction(lookup[actionLabel]);
  },

  evalAction: function(effect) {
    if (typeof effect === 'object') {
      var key = eval(effect._var);
      if (typeof(effect[key]) != undefined) {
        this.evalAction(effect[key]);
      } else {
        this.evalAction(effect['default']);
      }
    } else {
      eval(effect);
    }
  }
};
export default ActionableMixin;
