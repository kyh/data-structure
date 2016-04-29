import { expect } from 'chai';
import DoublyList from './DoublyLinkedList';

describe('Data structure: Doubly Linked List', () => {
  let doubly;

  // runs before each test in this block
  beforeEach(() => {
    doubly = new DoublyList();
  });

  it('should initiate as an empty list with no head or tail', () => {
    expect(doubly.length).to.equal(0);
    expect(doubly.head).to.not.exist;
    expect(doubly.tail).to.not.exist;
  });

  it('should have a length of 1 after adding first node', () => {
    doubly.add('hello');
    expect(doubly.length).to.equal(1);
  });

  it('head and tail node should be the first node added', () => {
    doubly.add('hello');
    expect(doubly.head.data).to.equal('hello');
    expect(doubly.tail.data).to.equal('hello');
  });

  it('can retrieve the last node added, node should have correct previous', () => {
    doubly.add('hello').add('world');
    const secondNode = doubly.findNode(2);
    expect(secondNode.data).to.equal('world');
    expect(secondNode.previous.data).to.equal('hello');
    expect(secondNode.next).to.not.exist;
  });

  it('should remove the correct node and continue link', () => {
    doubly.add('hello').add('welcome').add('world');
    expect(doubly.removeNode(2).data).to.equal('welcome');
    expect(doubly.length).to.equal(2);
    expect(doubly.findNode(1).next.data).to.equal('world');
    expect(doubly.findNode(2).previous.data).to.equal('hello');
  });
});
