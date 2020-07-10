/* import { example, anotherExample } from '../src/data.js'; */
import { filterData, searchingData } from '../src/data.js';

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
});


describe.skip('anotherExample', () => {
  it.skip('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it.skip('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
