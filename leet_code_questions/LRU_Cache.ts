// LRU CACHE
interface memoryEntityInterface {
    value: cacheEntity,
    next: memoryEntityInterface | null,
    prev: memoryEntityInterface | null
}

interface cacheEntity {
    key: number;
    value: number;
}

class LRUCache {
    private capacity: number;
    private cache: Record<string, memoryEntityInterface> = {};
    private LRU: memoryEntityInterface | null;
    private MRU: memoryEntityInterface | null;

    private initVal: cacheEntity = {
        key: 0,
        value: 0
    }
    constructor(capacity: number) {
        this.capacity = capacity;
        // Setup cache and linked list
        this.cache = {};
        this.LRU = { value: this.initVal, next: null, prev: null };
        this.MRU = { value: this.initVal, next: null, prev: null };
    }

    get(key: number): number {
        // Return the value and update LRUCache List
        if (key in this.cache) {
            this._remove(this.cache[key]);
            this._insert(this.cache[key])
            return this.cache[key].value.value;

        } else {
            return -1;
        }
    }

    put(key: number, value: number): void {
        const cacheEntity: cacheEntity = {
            key, value
        } 
        const nodeValue: memoryEntityInterface = {
            value: cacheEntity,
            next: null,
            prev: null,
        }
        if (Object.keys(this.cache)) {
            this.cache[key] = nodeValue;
        }
        else if(Object.keys(this.cache).length > this.capacity){
            // Evict LRU.
            const temp: memoryEntityInterface | null = this.LRU?.next || null;
            if(this.LRU) this.LRU.next = null;
            if(temp) temp.prev = null;
            this.LRU = temp;
            
        }
        this._remove(this.cache[key]);
        this._insert(this.cache[key]);
    }

    // Helper
    // Insert
    private _insert(node: memoryEntityInterface): void {
        // Insert in Haspmap
        // Insert in Linked list
    }
    // Remove
    private _remove(node: memoryEntityInterface): void {
        // Remove from Linked List
        // Remove from Hashmap
    }

};


const LRUCacheObj = new LRUCache(2);
console.log(LRUCacheObj.get(2));