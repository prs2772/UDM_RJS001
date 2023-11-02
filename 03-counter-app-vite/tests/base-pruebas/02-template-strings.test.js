import {getSaludo} from '../../src/base-pruebas/02-template-strings'

describe('Pruebas en 02-template-strings', () =>{
  const expectedValue = 'Hola Fernando';
  test('getSaludo debe retornar "Hola Fernando"', ()=>{
    const name = 'Fernando';
    const message = getSaludo(name);
    expect(message).toBe(expectedValue);
  });
});
