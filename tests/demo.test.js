

test('Esta prueba no debe fallar', () => {
  if(1 === 0) {
    throw new Error('ups falló, estúpida mi pelo idiota')
  }
})