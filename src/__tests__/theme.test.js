import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ThemeToggle from '../components/ThemeToggle';

test('clicking toggler should switch themes', () => {
  render(<ThemeToggle />);
  const toggle = screen.getByTestId('theme-toggle');
  const body = document.body;

  userEvent.click(toggle);

  expect(body).toHaveClass('dark');

  userEvent.click(toggle);

  expect(body).toHaveClass('light');
});
