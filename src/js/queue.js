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

EventQueue.prototype.start = function () {
  var next = 0;
  this.queue.map(function(event, index) {
    next += event.delay;
    this.queue[index].timeout = window.setTimeout(
      function() {
        this.queue[index].action(event.args);
        this.queue.splice(index, 1);
      }, next
    );
    next += event.duration;
  });
  return this;
};

EventQueue.prototype.start = function () {
  var next = 0;
  this.queue.map(function(event, index) {
    next += event.delay;
    this.queue[index].timeout = window.setTimeout(
      function() {
        this.queue[index].action(event.args);
        this.queue.splice(index, 1);
      }, next
    );
    next += event.duration;
  });
  return this;
};