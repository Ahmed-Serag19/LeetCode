class TimeLimitedCache {
  constructor() {
    this.cache = new Map();
  }

  /**
   * Sets a key-value pair in the cache with a time limit.
   * @param {number} key
   * @param {number} value
   * @param {number} duration time until expiration in milliseconds
   * @return {boolean} true if the key already exists and is unexpired, otherwise false
   */
  set(key, value, duration) {
    const existing = this.cache.get(key);
    if (existing && Date.now() < existing.expiry) {
      clearTimeout(existing.timeoutId); // Clear the existing timeout to prevent expiration
    }

    // Set a timeout to remove the key after the duration
    const timeoutId = setTimeout(() => {
      this.cache.delete(key);
    }, duration);

    // Save the value, expiration time, and timeoutId in the cache
    this.cache.set(key, { value, expiry: Date.now() + duration, timeoutId });

    // Return true if an unexpired key was overwritten, otherwise false
    return !!existing && Date.now() < existing.expiry;
  }

  /**
   * Gets the value associated with a key if it is unexpired.
   * @param {number} key
   * @return {number} the value or -1 if expired or not found
   */
  get(key) {
    const entry = this.cache.get(key);
    if (!entry || Date.now() >= entry.expiry) {
      return -1; // Key does not exist or is expired
    }
    return entry.value;
  }

  /**
   * Counts the number of unexpired keys in the cache.
   * @return {number} count of non-expired keys
   */
  count() {
    let count = 0;
    for (const entry of this.cache.values()) {
      if (Date.now() < entry.expiry) {
        count++;
      }
    }
    return count;
  }
}

// Example usage:
const timeLimitedCache = new TimeLimitedCache();
console.log(timeLimitedCache.set(1, 42, 100)); // false
console.log(timeLimitedCache.get(1)); // 42
setTimeout(() => console.log(timeLimitedCache.count()), 50); // 1
setTimeout(() => console.log(timeLimitedCache.get(1)), 150); // -1