class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  set(key, value) {
    let hash = this._hash(key);

    if (!this.data[hash]) {
      this.data[hash] = [];
    }
    this.data[hash].push([key, value]);

    console.log(this.data);
    console.log(`Successfully added ${key} to the hash table`);
  }

  get(key) {
    let bucketLength = this.data[this._hash(key)].length;

    for (let i = 0; i < bucketLength; i++) {
      if (this.data[this._hash(key)][i][0] === key) {
        var lookupResult = this.data[this._hash(key)][i][1];
        break;
      }
    }

    if (lookupResult) {
      console.log(`Found ${key}! Value = ${lookupResult}`);
    } else {
      console.log(`${key} not found inside the hash table`);
    }

    return lookupResult;
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
}

const myHashTable = new HashTable(12);
myHashTable.set("grapes", 10000);
myHashTable.get("grapes");
myHashTable.set("apples", 9);
myHashTable.get("apples");
myHashTable.set("pears", 37);
myHashTable.get("pears");
myHashTable.get("grapes");
