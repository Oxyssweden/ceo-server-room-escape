/**
 *
 * @constructor
 */
function EventQueue() {
  this.queue = [];
  this.next = 0;
}

/**
 * Adding a new action to the queue
 * @param callbackFn
 * @param args {object}
 * @param delay {null|int}
 * @param duration {null|int}
 * @returns {EventQueue}
 */
EventQueue.prototype.q = function (callbackFn, args, duration, delay) {
  var that = this;
  delay = delay || 0;
  this.next += delay;
  if (!Array.isArray(args)) { args = [args] }

  this.queue.push({
    callbackFn: callbackFn,
    args: args,
    delay: delay,
    duration: duration,
    timeout: window.setTimeout(
      function() {
        callbackFn.apply(that, args);
      }, this.next * 1000
    )
  });

  this.next += duration;

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
  this.q(say, text, duration, delay);
  return this;
};

window.q = function(callbackFn, args, duration, delay) {
  var queue = new EventQueue();
  if (!callbackFn) return queue;
  return queue.q(callbackFn, args, duration, delay)
};
