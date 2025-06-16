class EventEmitter {
  constructor() {
    this.map = new Map()
  }
  /**
   * @param {string} eventName
   * @param {Function} callback
   * @return {Object}
   */
  subscribe(eventName, callback) {
    const callbacks = this.getCallbacks(eventName)
    callbacks.push(callback)
    this.map.set(eventName, callbacks)
    return {
      unsubscribe: () => {
        const callbacks = this.getCallbacks(eventName)
        const nextCallbacks = callbacks.filter(c => c !== callback)
        this.map.set(eventName, nextCallbacks)
      }
    };
  }

  /**
   * @param {string} eventName
   * @param {Array} args
   * @return {Array}
   */
  emit(eventName, args = []) {
    const callbacks = this.getCallbacks(eventName)
    return callbacks.map(c => c.apply(null, args))
  }

  getCallbacks(eventName) {
    return this.map.get(eventName) ?? []
  }
}

const emitter = new EventEmitter();

// Subscribe to the onClick event with onClickCallback
function onClickCallback() {
  return 99
}
const sub = emitter.subscribe('onClick', onClickCallback);

emitter.emit('onClick'); // [99]
sub.unsubscribe(); // undefined
emitter.emit('onClick'); // []
