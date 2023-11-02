import {getUsuario, getUsuarioActivo} from '../../src/base-pruebas/05-funciones'

describe('Pruebas en 05-funciones', () =>{
  test('getUsuario debe de retornar un objeto', ()=>{
    const testUser = {
      uid: 'ABC123',
      username: 'El_Papi1502'
    };
    const testUserGot = getUsuario();

    expect(testUserGot).toEqual(testUser);
  });
  test('getUsuarioActivo debe de retornar un objeto', ()=>{
    const userName = 'Especto';
    const testUserActivo = {
      uid: 'ABC567',
      username: userName,
    };
    const testUserActivoGot = getUsuarioActivo(userName);

    expect(testUserActivoGot).toEqual(testUserActivo);
  });
});
