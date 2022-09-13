import { getSaludo } from "../../base-pruebas/02-template-string";

describe('Pruebas en 02-template-string', () => {
  test('Debe retornar el saludo "Hola Carlos"', () => {
    const name = 'Carlos';
    const message = getSaludo( name );

    expect( message ).toBe(`Hola ${ name }`)
  })
})