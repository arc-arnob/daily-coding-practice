// interface cacheEntity<T> {
//     key: number;
//     value: memoryEntityInterface<T>;
// }
var LRUCache = /** @class */ (function () {
    function LRUCache(capacity) {
        this.cache = {};
        this.capacity = capacity;
        // Setup cache and linked list
        this.cache = {};
        this.LRU = { value: 0, next: null, prev: null };
        this.MRU = { value: 0, next: null, prev: null };
    }
    LRUCache.prototype.get = function (key) {
        // Return the value and update LRUCache List
        if (key in this.cache) {
            return key;
        }
        else {
            return key;
        }
    };
    LRUCache.prototype.put = function (key, value) {
        if (Object.keys(this.cache)) {
        }
    };
    // Helper
    // Insert
    LRUCache.prototype.insert = function (key, value) {
        // Insert in Haspmap
        // Insert in Linked list
    };
    // Remove
    LRUCache.prototype.remove = function (key) {
        // Remove from Linked List
        // Remove from Hashmap
    };
    return LRUCache;
}());
;
var LRUCacheObj = new LRUCache(2);
console.log(LRUCacheObj.get(2));
