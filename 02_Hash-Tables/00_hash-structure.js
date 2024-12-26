class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  set(key, value) {
    const index = this._hash(key);

    if (!this.data[index]) {
      this.data[index] = [];
    }

    this.data[index].push([key, value]);
    return this.data;
  } // O(1)

  get(key) {
    const index = this._hash(key);
    const data = this.data[index];

    if (data) {
      for (let i = 0; i < data.length; i++) {
        if (data[i][0] === key) {
          console.log(data[i][1]);
          return data[i][1];
        }
      }
    }

    return undefined;
  } // O(1) or O(n) if is a hash collision

  keys() {
    if (!this.data.length) {
      return undefined;
    }

    const keysArray = [];

    // loop through all the elements
    for (let i = 0; i < this.data.length; i++) {
      // if it's not an empty memory cell
      if (this.data[i] && this.data[i].length) {
        // but also loop through all the potential collisions
        if (this.data.length > 1) {
          for (let j = 0; j < this.data[i].length; j++) {
            result.push(this.data[i][j][0]);
          }
        } else {
          result.push(this.data[i][0]);
        }
      }
    }

    console.log(keysArray);
    return keysArray;
  }

  _hash(key) {
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }

    return hash;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
myHashTable.set('apples', 54);
myHashTable.set('oranges', 256);
myHashTable.get('apples');
myHashTable.keys();
