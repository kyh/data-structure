import { expect } from 'chai';
import SinglyList from './SinglyLinkedList';

describe('Data structure: Singly Linked List', () => {
  let singly;

  // runs before each test in this block
  beforeEach(() => {
    singly = new SinglyList();
  });

  it('should initiate as an empty list', () => {
    expect(singly.length).to.equal(0);
  });

  it('should have a length of 1 when data gets added', () => {
    singly.add('hello');
    expect(singly.length).to.equal(1);
  });

  it('head node should be the first node added', () => {
    singly.add('hello');
    expect(singly.head.data).to.equal('hello');
  });

  it('can retrieve the last node added', () => {
    singly.add('hello').add('world');
    expect(singly.findNode(2).data).to.equal('world');
  });

  it('should remove the correct node and continue link', () => {
    singly.add('hello').add('welcome').add('world');
    expect(singly.removeNode(2).data).to.equal('welcome');
    expect(singly.length).to.equal(2);
    expect(singly.findNode(1).next.data).to.equal('world');
  });
});
