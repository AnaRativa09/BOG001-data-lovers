/* import { example, anotherExample } from '../src/data.js'; */
import { filterData } from '../src/data.js';

describe('filterData', () => {
  it('is a function', () => {
    expect(typeof filterData).toBe('function');
  });

  it.skip('returns `example`', () => {
    expect(example()).toBe('example');
  });
});


describe('anotherExample', () => {
  it.skip('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it.skip('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
