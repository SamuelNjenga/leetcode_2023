class EventEmitter {
  // Our Data Model
  eventMap = {}; // event -> Set()
  subscribe(event, cb) {
    if (!this.eventMap.hasOwnProperty(event)) {
      this.eventMap[event] = new Set();
    }
    this.eventMap[event].add(cb);
    return {
      unsubscribe: () => {
        this.eventMap[event].delete(cb);
      },
    };
  }

  emit(event, args = []) {
    const res = [];
    (this.eventMap[event] ?? []).forEach((cb) => res.push(cb(...args)));
    return res;
  }
}

const emitter = new EventEmitter();
// Subscribe to the onClick event with onClickCallback
function onClickCallback() {
  return 99;
}
const sub = emitter.subscribe("onClick", onClickCallback);
console.log(emitter.emit("onClick")); // [99]
sub.unsubscribe(); // undefined
console.log(emitter.emit("onClick")); // []
