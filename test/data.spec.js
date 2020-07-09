/* import { example, anotherExample } from '../src/data.js'; */
import { filterData } from '../src/data.js';

describe('filterData', () => {
  it('is a function', () => {
    expect(typeof filterData).toBe('function');
  });

  it('returns array con objetos ', () => {
    expect(filterData()).toBe('array');
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
