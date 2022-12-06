class Cache {
  cache = {};
  LIMIT = 30;
  EVICTION_INTERVAL = 5000;

  constructor() {    

    setInterval(this.evictionThread, this.EVICTION_INTERVAL);
  }

  evictionThread() {
    if(!this.cache) return;

    const keys = Object.keys(this.cache);
    
    if(keys.length < this.LIMIT)  return;

    while(keys.length > this.LIMIT) {
        delete this.cache[keys.at(0)];
        keys.shift();
    }

  }

  add(key, value) {
    this.cache[key] = value;
  }

  get(key) {
    return this.cache[key];
  }
}

export default Cache;
