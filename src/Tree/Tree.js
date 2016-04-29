import Queue from './Queue';

export class Node {
  constructor(data) {
    this.data = data;
    this.parent = null;
    this.children = [];
  }
}

export default class Tree {
  constructor(data) {
    this.root = new Node(data);
  }

  traverseDepthFirst(callback) {
    function traverse(node) {
      for (let i = 0; i < node.children.length; i++) {
        traverse(node.children[i]);
      }
      return callback(node);
    }

    return traverse(this.root);
  }

  traverseBreadthFirst(callback) {
    const queue = new Queue();
    queue.enqueue(this.root);

    let currentNode = queue.dequeue();
    while (currentNode) {
      for (let i = 0; i < currentNode.children.length; i++) {
        queue.enqueue(currentNode.children[i]);
      }

      callback(currentNode);
      currentNode = queue.dequeue();
    }
  }

  contains(callback) {
    return this.traverseDepthFirst(callback);
  }

  add(data, parentData) {
    const child = new Node(data);
    let parent;

    this.contains((node) => {
      if (node.data === parentData) parent = node;
    });

    if (parent) {
      child.parent = parent;
      parent.children.push(child);
    } else {
      throw new Error('Cannot add node to a non-existent parent.');
    }
  }
}
