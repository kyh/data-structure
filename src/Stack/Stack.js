export default class Stack {
  constructor() {
    this.size = 0;
    this.storage = {};
  }

  push(data) {
    const size = ++this.size;
    this.storage[size] = data;

    return this;
  }

  pop() {
    const size = this.size;
    let deletedData;

    if (size) {
      deletedData = this.storage[size];
      delete this.storage[size];
      this.size--;
    }

    return deletedData;
  }
}
