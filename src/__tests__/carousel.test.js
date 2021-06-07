import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Carousel from '../components/Carousel';

beforeEach(() => render(<Carousel />));
test('playlist item is played', async () => {
  const cards = screen.getAllByTestId('pd-card');
  userEvent.click(cards[0]);
  expect(screen.getByRole('dialog')).toBeInTheDocument();
});
