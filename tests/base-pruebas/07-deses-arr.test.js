import { retornaArreglo } from "../../base-pruebas/07-deses-arr"

describe('Desestructuracción de Arrays', () => {
  test('Probando la desestructuración de arrays', () => {
    const [ letters, numbers ] = retornaArreglo()

    console.log(typeof letters)
    console.log(typeof numbers)

    expect( letters ).toBe('ABC')
    expect( numbers ).toBe(123)

    expect( typeof letters ).toBe('string')
    expect( typeof numbers ).toBe('number')
    
    expect( typeof letters ).toEqual( expect.any(String))
    
  })
})