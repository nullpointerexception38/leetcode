/**
 * @param {Object} context
 * @param {Array} args
 * @return {null|boolean|number|string|Array|Object}
 */
Function.prototype.callPolyfill = function(context, ...args) {
  return this.bind(context)(...args)
}

function increment() {
  this.count++;
  return this.count;
}

const res = increment.callPolyfill({ count: 1 }); // 2
console.log(res)
