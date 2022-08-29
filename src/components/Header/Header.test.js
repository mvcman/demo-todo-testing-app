import { render, screen } from '@testing-library/react';
import Header from './Header';

test('Renders title correctly!', () => {
  render(<Header title="demo" description="description"/>);
  const linkElement = screen.getByText(/demo/i);
  expect(linkElement).toBeInTheDocument();
  const headerTag = screen.getByTestId('heading');
  expect(headerTag).toHaveTextContent(/demo/i);
});

test('Renders description correctly!', () => {
    render(<Header title="demo" description="Description"/>);
    const linkElement = screen.getByText(/description/i);
    expect(linkElement).toBeInTheDocument();
    const paraTag = screen.getByTestId('paragraph');
    expect(paraTag).toHaveTextContent(/description/i);
  });
