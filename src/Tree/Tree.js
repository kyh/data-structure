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
    const queue = [];
    queue.push(this.root);

    let currentNode = queue.pop();
    while (currentNode) {
      for (let i = 0; i < currentNode.children.length; i++) {
        queue.push(currentNode.children[i]);
      }

      callback(currentNode);
      currentNode = queue.pop();
    }
  }

  contains(check) {
    let foundNode;

    this.traverseDepthFirst((node) => {
      if (check(node)) { foundNode = node; }
    });

    return foundNode;
  }

  add(data, parentData) {
    const child = new Node(data);
    const parentNode = this.contains((node) => node.data === parentData);

    if (parentNode) {
      child.parent = parentNode;
      parentNode.children.push(child);
    } else {
      throw new Error('Cannot add node to a non-existent parent.');
    }
  }

  remove(data) {
    const removeNode = this.contains((node) => node.data === data);
    const parentNode = removeNode.parent;

    if (parentNode && removeNode) {
      parentNode.children = parentNode.children
        .filter((childNode) => childNode.data !== removeNode.data);
    } else if (!removeNode) {
      throw new Error('Could not find node to remove');
    } else {
      throw new Error('Cannot remove root node of tree');
    }

    return removeNode;
  }
}

/**
 * Binary Tree
 */
export class BinaryNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

export function inOrderTraversal(node, callback) {
  if (node) {
    inOrderTraversal(node.left);
    callback(node);
    inOrderTraversal(node.right);
  }
}
