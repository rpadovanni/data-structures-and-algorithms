class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;

    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];

    delete this.data[this.length - 1];
    this.length--;

    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);

    return item;
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length--;
  }
}

const myArray = new MyArray();
myArray.push('hi');
myArray.push('you');
myArray.push('!');
myArray.delete(0);
myArray.push('are');
myArray.push('nice');
myArray.delete(1);
console.log(myArray);
