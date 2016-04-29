export default class Queue {
  constructor() {
    this.oldestIndex = 0;
    this.newestIndex = 0;
    this.storage = {};
  }

  size() {
    return this.newestIndex - this.oldestIndex;
  }

  enqueue(data) {
    this.storage[this.newestIndex] = data;
    this.newestIndex++;

    return this;
  }

  dequeue() {
    let removed;

    if (this.oldestIndex !== this.newestIndex) {
      removed = this.storage[this.oldestIndex];
      delete this.storage[this.oldestIndex];
      this.oldestIndex++;
    }

    return removed;
  }
}
