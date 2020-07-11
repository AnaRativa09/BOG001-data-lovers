/* import { example, anotherExample } from '../src/data.js'; */
import { filterData, searchingData, sortingData } from '../src/data.js';

describe('filterData', () => {
  it('is a function', () => {
    expect(typeof filterData).toBe('function');
  });

  it.skip('returns array con objetos ', () => {
    expect(filterData()).toBe('array');
  });
});

describe('searchingData', () => {
  it('is a function', () => {
    expect(typeof searchingData).toBe('function');
  });

  it.skip('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});


describe('sortingData', () => {
  it('is a function', () => {
    expect(typeof sortingData).toBe('function');
  });

  it.skip('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
