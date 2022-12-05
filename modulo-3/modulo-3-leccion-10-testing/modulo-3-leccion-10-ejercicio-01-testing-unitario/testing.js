// Con este título describimos lo que hace el test
test('add function returns 3 when inputs are 1 and 2', () => {
  // Arrange: especificamos qué datos vamos a usar en el test
  const numberA = 1;
  const numberB = 2;

  // Act: ejecuta la función que se va a probar
  const result = add(numberA, numberB);

  // Assert: compruebo que el resultado devuelto por la función es lo que yo espero
  expect(result).toBe(3);
});
