class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

export default class SinglyList {
  constructor() {
    this.length = 0;
    this.head = null;
  }

  add(data) {
    const node = new Node(data);
    let currentNode = this.head;

    // If there's no head node
    if (!currentNode) {
      this.head = node;
      this.length++;

      return this;
    }

    // If there is a head node, keep looping through next until you find no node
    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = node;
    this.length++;

    return this;
  }

  findNode(position) {
    const listSize = this.length;
    let currentNode = this.head;
    let count = 0;

    if (!listSize || // List has no length
        position < 1 || // position is not valid
        position > listSize // position is larger than list size
      ) {
      throw new Error('Failure: non-existent node in this list.');
    }

    while (count < position) {
      currentNode = currentNode.next;
      count++;
    }

    return currentNode;
  }

  removeNode(position) {
    const listSize = this.length;
    let currentNode = this.head;
    let count = 1;
    let nodeToDelete;

    // 1st case: Invalid position
    if (!listSize ||
        position < 1 ||
        position > listSize
      ) {
      throw new Error('Failure: non-existent node in this list.');
    }

    // 2nd case: Position is 1
    if (position === 1) {
      nodeToDelete = currentNode;
      this.head = nodeToDelete.next;
      currentNode = null;
      this.length--;

      return this;
    }

    let previousNode;
    // 3rd case: Any other position
    while (count < position) {
      previousNode = currentNode;
      nodeToDelete = currentNode.next;
      count++;
    }

    previousNode.next = nodeToDelete.next;
    nodeToDelete = null;
    this.length--;

    return this;
  }
}
