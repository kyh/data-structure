import { expect } from 'chai';
import Stack from './Stack';

describe('Data structure: Stack', () => {
  let stack;

  // runs before each test in this block
  beforeEach(() => {
    stack = new Stack();
  });

  it('should work initiate as empty stack', () => {
    expect(stack.size).to.equal(0);
  });

  it('should have a length of 1 when data gets pushed in', () => {
    stack.push('hello');
    expect(stack.size).to.equal(1);
  });

  it('should have a length of 2 when 2 data points get pushed in', () => {
    stack.push('hello').push('world');
    expect(stack.size).to.equal(2);
  });

  it('should decrease size of Stack when popping', () => {
    stack.push('hello').push('world');
    stack.pop();
    expect(stack.size).to.equal(1);
  });

  it('should pop out the last data point pushed in', () => {
    stack.push('hello').push('world');
    expect(stack.pop()).to.equal('world');
  });

  it('should return nothing when popping empty stack', () => {
    expect(stack.pop()).to.equal(undefined);
  });
});
