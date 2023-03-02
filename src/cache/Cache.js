class Cache {
  constructor() {
    this.cache = new Map();
    this.LIMIT = 30;
    this.EVICTION_INTERVAL = 5000 * 60;
    this.ITEM_EXPIRY = 5000 * 60;

    setInterval(this.evictionThread, this.EVICTION_INTERVAL);
    setInterval(this.expiryThread, this.EVICTION_INTERVAL);
  }

  evictionThread = () => {
    if (this.cache.size === 0) return;

    const keys = this.cache.keys();

    if (keys.length < this.LIMIT) return;

    while (keys.length > this.LIMIT) {
      this.cache.delete(keys[0]);
      keys.shift();
    }
  };

  expiryThread = () => {
    if (this.cache.size === 0) return;

    console.log(this.cache);

    for (const [key, value] of this.cache.entries()) {
      if (Date.now() - value.dateOfCreation > this.ITEM_EXPIRY) {
        this.cache.delete(key);
        console.log("Removed " + key);
      }
    }
  };

  add = (key, value) => {
    //this.cache[key] = new CacheItem(value);
    this.cache.set(key, new CacheItem(value));
  };

  get = (key) => {
    console.log(this.cache);
    const item = this.cache.get(key);
    if (item) return item.data;
    return null;
  };
}

class CacheItem {
  dateOfCreation;
  data;

  constructor(data) {
    this.dateOfCreation = Date.now();
    this.data = data;
  }
}

export default Cache;
