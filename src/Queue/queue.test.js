import { expect } from 'chai';
import Queue from './Queue';

describe('Data structure: Queue', () => {
  let queue;

  // runs before each test in this block
  beforeEach(() => {
    queue = new Queue();
  });

  it('should work initiate as empty queue', () => {
    expect(queue.size()).to.equal(0);
  });

  it('should have a length of 1 when data gets queued up', () => {
    queue.enqueue('hello');
    expect(queue.size()).to.equal(1);
  });

  it('should have a length of 2 when 2 data points get queued up', () => {
    queue.enqueue('hello').enqueue('world');
    expect(queue.size()).to.equal(2);
  });

  it('should decrease size of the queue when dequeue', () => {
    queue.enqueue('hello').enqueue('world');
    queue.dequeue();
    expect(queue.size()).to.equal(1);
  });

  it('should dequeue the first data point queued', () => {
    queue.enqueue('hello').enqueue('world');
    expect(queue.dequeue()).to.equal('hello');
  });

  it('should return nothing when dequeuing an empty stack', () => {
    expect(queue.dequeue()).to.equal(undefined);
  });
});
