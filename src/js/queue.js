/**
 *
 * @constructor
 */
function EventQueue() {
  this.queue = [];
}

/**
 * Adding a new action to the queue
 * @param callbackFn
 * @param args {object}
 * @param delay {null|int}
 * @param duration {null|int}
 * @returns {EventQueue}
 */
EventQueue.prototype.add = function (callbackFn, args, duration, delay) {
  delay = delay || 0;
  this.queue.push({
    action: callbackFn,
    args: args,
    delay: delay,
    duration: duration,
  });

  return this;
};

EventQueue.prototype.play = function () {
  var next = 0, that = this;
  this.queue.map(function(event, index) {
    next += event.delay;
    that.queue[index].timeout = window.setTimeout(
      function() {
        that.queue[index].action(event.args);
      }, next * 1000
    );
    next += event.duration;
  });
  return this;
};

EventQueue.prototype.stop = function () {
  var that = this;
  this.queue.map(function(event, index) {
    window.clearTimeout(that.queue[index].timeout);
  });
  return this;
};

EventQueue.prototype.say = function (text, duration, delay) {
  duration = duration || (text.length / 10) + .3;
  this.add(say, text, duration, delay);
  return this;
};

window.Q = function() { return new EventQueue() };
