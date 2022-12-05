import utils from '../services/utils';

test('check if paddingLeft function with hola, 6 and x parameters returns xxhola', () => {
  // Act
  const result = utils('hola', 6, 'x');

  // Assert

  expect(result).toBe('xxhola');
});
