import area from '../services/area';

test('check if getSquareArea function returns 9 when passing a 3 as a parameter', () => {
  //Arrange

  //Act
  const result = area.square(3);
  //Assert
  expect(result).toBe(9);
});

test('check if getSquareArea function returns 0 when passing no parameter', () => {
  //Arrange

  //Act
  const result = area.square();
  //Assert
  expect(result).toBeUndefined();
});

test('check if getSquareTriangle function returns 6 when passing a 3 and a 4 as parameters', () => {
  //Arrange

  //Act
  const result = area.triangle(3, 4);
  //Assert
  expect(result).toBe(6);
});

//Por cierto, como aquí estamos testeando un fichero de JavaScript y no un componente de React, no es necesario escribir import { render, screen } from '@testing-library/react';.
