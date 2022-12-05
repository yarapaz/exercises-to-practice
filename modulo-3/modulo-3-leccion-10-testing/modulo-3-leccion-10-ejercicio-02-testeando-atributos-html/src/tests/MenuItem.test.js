import { render, screen } from '@testing-library/react';
import MenuItem from '../components/MenuItem';

test('check if target value becomes _blank when openInNewTab is true', () => {
  // Arrange
  render(<MenuItem text='Blog' href='https://adalab.es/blog' openInNewTab />);
  // Act
  const item = screen.getByText('Blog');
  // Assert

  expect(item.target).toBe('_blank');
});

test('check if target value becomes "" when openInNewTab is false', () => {
  // Arrange
  render(<MenuItem text='Contacto' href='https://adalab.es/contacto' />);
  // Act
  const item = screen.getByText('Contacto');
  // Assert

  expect(item.target).toBeFalsy();
});
