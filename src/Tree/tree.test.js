import { expect } from 'chai';
import Tree from './Tree';

describe('Data structure: Tree', () => {
  let tree;

  // runs before each test in this block
  beforeEach(() => {
    tree = new Tree('root');
  });

  it('should initiate as a tree with one node', () => {
    expect(tree.root.data).to.equal('root');
  });

  it('should contain 1 child when inserted', () => {
    tree.add('child', 'root');
    expect(tree.root.children.length).to.equal(1);
  });
});
