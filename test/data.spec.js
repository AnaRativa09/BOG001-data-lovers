import { filterData, searchData, sortData, computeStats } from '../src/data.js';

/*------ Testing filterData -------*/
describe('filterData', () => {
  it('is a function', () => {
    expect(typeof filterData).toBe('function');
  });

  it('Si filtro por rol soporte, obtengo nuevo array que contiene soportes', () => {
    const roles =[
      {tags: ['Support', 'Mage']},
      {tags: ['Mage']},
      {tags: ['Assassin', 'Fighter']},
      {tags: ['Support', 'Marksman']}
    ];
    let userInput = 'Support';
    let output = [
      {tags: ['Support', 'Mage']},
      {tags: ['Support', 'Marksman']}
    ];
    expect(filterData(roles, userInput)).toEqual(output);
  });
});

/*------ Testing searchData -------*/

describe('searchData', () => {
  it('is a function', () => {
    expect(typeof searchData).toBe('function');
  });

  it('Si existe busqueda por nombre A, entonces obtengo todos los campeones que empiezan con A', () => {
    const names =[
      {name: 'Alistar'},
      {name: 'Zyra'},
      {name: 'Ahri'},
      {name: 'Camille'},
      {name: 'Amumu'},
    ];
    const userInput = 'a';
    const outPut =[
      {name: 'Alistar'},
      {name: 'Ahri'},
      {name: 'Amumu'},
    ];
    expect(searchData(names, userInput)).toEqual(outPut);
  });
});

/*------ Testing SortData -------*/

describe('sortData', () => {
  it('is a function', () => {
    expect(typeof sortData).toBe('function');
  });

  it('Si existe un array con nombres, los devuelve ordenados Z-A', () => {
    const names =[
      {name: 'Alistar'},
      {name: 'Zyra'},
      {name: 'Ahri'},
      {name: 'Camille'},
      {name: 'Amumu'},
    ];
    const userInput = 'desc';
    const outPut = [
      {name: 'Zyra'},
      {name: 'Camille'},
      {name: 'Amumu'},
      {name: 'Alistar'},
      {name: 'Ahri'},
    ]
    expect(sortData(names, userInput)).toEqual(outPut);
  });
});

/*------ Testing ComputeStats -------*/

describe('computeStats', () => {
  it('is a function', () => {
    expect(typeof computeStats).toBe('function');
  });

  it('Si existe información info, debe ordenar y traer los 5 mejores en promedio', () => {
    const information =[
      {info: {attack: 8, defense: 6, magic: 3, difficulty: 4}},
      {info: {attack: 5, defense: 4, magic: 6, difficulty: 7}},
      {info: {attack: 8, defense: 3, magic: 5, difficulty: 6}},
      {info: {attack: 6, defense: 7, magic: 5, difficulty: 8}},
      {info: {attack: 6, defense: 7, magic: 5, difficulty: 4}},
      {info: {attack: 8, defense: 7, magic: 3, difficulty: 2}},
    ];
    const output = [
      {info: {attack: 6, defense: 7, magic: 5, difficulty: 8},
      prom: 6.5},
      {info: {attack: 5, defense: 4, magic: 6, difficulty: 7},
      prom: 5.5},
      {info: {attack: 8, defense: 3, magic: 5, difficulty: 6},
      prom: 5.5},
      {info: {attack: 6, defense: 7, magic: 5, difficulty: 4},
      prom: 5.5},
      {info: {attack: 8, defense: 6, magic: 3, difficulty: 4},
      prom: 5.25}
    ];
    expect(computeStats(information)).toEqual(output);
  });
});

describe('computeStats', () => {
  it('is a function', () => {
    expect(typeof computeStats).toBe('function');
  });

  it.skip('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
