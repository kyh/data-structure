class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.previous = null;
  }
}

export default class SinglyList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  findNode(position) {
    const length = this.length;
    let currentNode = this.head;
    let count = 1;

    if (length === 0 || position > length || position < 1) {
      throw new Error('Failure: non existent node in this list');
    }

    while (count < position) {
      currentNode = currentNode.next;
      count++;
    }

    return currentNode;
  }

  add(data) {
    const node = new Node(data);

    // If a list is empty, then assign to its head and tail the node being added
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.previous = this.tail;
      this.tail = node;
    }

    this.length++;

    return this;
  }

  removeNode(position) {
    const length = this.length;
    let currentNode = this.head;
    let count = 1;

    // 1st case: Invalid position
    if (position > length ||
        position < 1 ||
        length === 0) {
      throw new Error('Failure: non existent node in the list');
    }

    // 2nd case: position === 1
    if (position === 1) {
      this.head = currentNode.next;

      // If there is no second node
      if (!this.head) {
        this.tail = null;
      } else {
        // If there is a second node
        this.head.previous = null;
      }
    } else if (position === length) {
      // 3rd case: position is on the tail
      this.tail = this.tail.previous;
      this.tail.next = null;
    } else {
      // 4th case: position is somewhere in the list
      while (count < position) {
        currentNode = currentNode.next;
        count++;
      }
      const previousNode = currentNode.previous;
      const nextNode = currentNode.next;

      previousNode.next = nextNode;
      nextNode.previous = previousNode;
    }

    this.length--;

    return currentNode;
  }
}
